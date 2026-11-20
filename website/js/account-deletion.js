// ---------------------------------------------------------------------------
// Security-Slice 4.4b – Website Account Deletion
//
// Zwei unabhängige, rein clientseitige Formular-Handler. Keiner von beiden
// löst etwas allein durch Laden der Seite aus (auch nicht die
// Bestätigungsseite per GET) – jede Aktion braucht einen ausdrücklichen
// Klick.
// ---------------------------------------------------------------------------
(function () {
  'use strict';

  function setFeedback(element, message, tone) {
    if (!element) return;
    element.hidden = false;
    element.textContent = message;
    element.dataset.tone = tone || 'info';
  }

  // ── Schritt 1: /pages/account-loeschen/ – E-Mail-Adresse eingeben ───────
  var requestForm = document.querySelector('[data-account-deletion-request-form]');

  if (requestForm) {
    var requestFeedback = requestForm.querySelector('[data-account-deletion-feedback]');
    var requestSubmit = requestForm.querySelector('[data-account-deletion-submit]');

    requestForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var email = (requestForm.elements.email.value || '').trim();

      if (!email) {
        setFeedback(requestFeedback, 'Bitte gib eine E-Mail-Adresse ein.', 'error');
        return;
      }

      requestSubmit.disabled = true;
      setFeedback(requestFeedback, 'Anfrage wird gesendet …', 'info');

      fetch('/api/v1/account-deletion/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
      })
        .then(function (response) {
          return response
            .json()
            .catch(function () {
              return {};
            })
            .then(function (body) {
              return { ok: response.ok, status: response.status, body: body };
            });
        })
        .then(function (result) {
          if (result.status === 429) {
            setFeedback(
              requestFeedback,
              'Du hast das schon mehrfach versucht. Bitte warte etwas und versuche es dann erneut.',
              'error',
            );
            return;
          }

          if (!result.ok) {
            setFeedback(
              requestFeedback,
              'Der Dienst ist gerade nicht verfügbar. Bitte versuche es später erneut.',
              'error',
            );
            return;
          }

          requestForm.reset();
          setFeedback(
            requestFeedback,
            result.body && result.body.message
              ? result.body.message
              : 'Falls diese E-Mail-Adresse zu einem LokApp-Account gehört, erhältst du in Kürze eine Bestätigungsmail.',
            'success',
          );
        })
        .catch(function () {
          setFeedback(
            requestFeedback,
            'Die Anfrage konnte nicht gesendet werden. Bitte überprüfe deine Internetverbindung und versuche es erneut.',
            'error',
          );
        })
        .finally(function () {
          requestSubmit.disabled = false;
        });
    });
  }

  // ── Schritt 2: /pages/account-loeschen/bestaetigen/ – ausdrückliche Bestätigung ──────
  var confirmSection = document.querySelector('[data-account-deletion-confirm]');

  if (confirmSection) {
    var confirmButton = confirmSection.querySelector('[data-account-deletion-confirm-button]');
    var confirmFeedback = confirmSection.querySelector('[data-account-deletion-feedback]');

    var token = null;

    try {
      token = new URLSearchParams(window.location.search).get('token');
    } catch (_err) {
      token = null;
    }

    if (!token) {
      if (confirmButton) confirmButton.disabled = true;
      setFeedback(
        confirmFeedback,
        'Dieser Bestätigungslink ist unvollständig oder ungültig. Bitte fordere die Löschung erneut an.',
        'error',
      );
    } else if (confirmButton) {
      confirmButton.addEventListener('click', function () {
        confirmButton.disabled = true;
        setFeedback(confirmFeedback, 'Löschung wird angefordert …', 'info');

        fetch('/api/v1/account-deletion/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: token }),
        })
          .then(function (response) {
            return response
              .json()
              .catch(function () {
                return {};
              })
              .then(function (body) {
                return { ok: response.ok, status: response.status, body: body };
              });
          })
          .then(function (result) {
            if (result.ok) {
              setFeedback(
                confirmFeedback,
                result.body && result.body.message
                  ? result.body.message
                  : 'Deine Löschung wird jetzt verarbeitet.',
                'success',
              );
              return;
            }

            if (result.status === 429) {
              setFeedback(
                confirmFeedback,
                'Du hast das schon mehrfach versucht. Bitte warte etwas und versuche es dann erneut.',
                'error',
              );
              confirmButton.disabled = false;
              return;
            }

            var messages = {
              TOKEN_EXPIRED:
                'Dieser Bestätigungslink ist abgelaufen. Bitte fordere die Löschung erneut an.',
              TOKEN_ALREADY_USED: 'Dieser Bestätigungslink wurde bereits verwendet.',
              TOKEN_INVALID: 'Dieser Bestätigungslink ist ungültig.',
            };

            var code = result.body && result.body.code;

            setFeedback(
              confirmFeedback,
              (code && messages[code]) ||
                (result.body && result.body.error) ||
                'Dieser Bestätigungslink konnte nicht verarbeitet werden.',
              'error',
            );
          })
          .catch(function () {
            setFeedback(
              confirmFeedback,
              'Die Bestätigung konnte nicht gesendet werden. Bitte überprüfe deine Internetverbindung und versuche es erneut.',
              'error',
            );
            confirmButton.disabled = false;
          });
      });
    }
  }
})();
