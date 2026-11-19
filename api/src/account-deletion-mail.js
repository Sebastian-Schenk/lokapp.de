// ---------------------------------------------------------------------------
// Security-Slice 4.4b – Bestätigungsmail für die Website-Account-Löschung.
//
// Der Link führt ausschließlich auf eine BestätigungsSEITE (GET), die selbst
// noch nichts auslöst – erst ein ausdrücklicher Klick auf dieser Seite löst
// POST /api/v1/account-deletion/confirm aus. Ein E-Mail-Linkscanner, der
// diesen Link automatisch per GET aufruft, kann die Löschung daher nicht
// versehentlich anstoßen.
// ---------------------------------------------------------------------------

export const sendAccountDeletionConfirmationMail = async ({
  mailer,
  from,
  email,
  confirmationUrl,
  expiresInMinutes,
}) => {
  await mailer.sendMail({
    from,
    to: email,
    subject: 'Bestätige die Löschung deines LokApp-Accounts',
    text: [
      'Hallo,',
      '',
      'wir haben eine Anfrage erhalten, deinen LokApp-Account endgültig zu löschen.',
      '',
      'Wenn du das wirklich möchtest, öffne diesen Link und bestätige die Löschung dort ausdrücklich:',
      confirmationUrl,
      '',
      `Der Link ist aus Sicherheitsgründen nur ${expiresInMinutes} Minuten gültig und kann nur einmal verwendet werden.`,
      '',
      'Wenn du diese Löschung NICHT angefordert hast, ignoriere diese E-Mail einfach – es passiert dann nichts mit deinem Account.',
      '',
      'Viele Grüße',
      'LokApp',
    ].join('\n'),
  });
};
