(() => {
    const storageKey = 'lokapp-language';
    const supportedLanguages = new Set(['de', 'en', 'nl', 'es']);
    const root = document.documentElement;

    const translations = {
        de: {
            meta: {
                title: 'LokApp – Modellbahnsammlung erfassen und wiederfinden',
                description:
                    'LokApp ist die App für Modellbahnsammler: Loks, Wagen, Gebäude und Zubehör mit Fotos, Modellnummern und Details erfassen – und jedes Modell zuhause, in der Vitrine oder auf der Börse schnell wiederfinden.',
                ogDescription:
                    'Erfasse Loks, Wagen, Gebäude und Zubehör mit Fotos, Modellnummern und Details – und finde jedes Modell zuhause, in der Vitrine oder auf der Börse wieder.',
            },
            accessibility: {
                skipToContent: 'Zum Inhalt springen',
                home: 'LokApp Startseite',
                mainNavigation: 'Hauptnavigation',
                mobileNavigation: 'Mobile Navigation',
                selectLanguage: 'Sprache auswählen',
                appPreview:
                    'Vorschau der LokApp mit einer Beispiel-Sammlung aus Loks, Wagen und Gebäuden',
                modelDetail:
                    'Beispielhafte Modelldetails in LokApp mit Bezeichnung, Kategorie, Spurweite und Epoche',
            },
            navigation: {
                home: 'Startseite',
                features: 'Funktionen',
                roadmap: 'Roadmap',
                poll: 'Umfrage',
                alpha: 'Für Alpha anmelden',
            },
            language: {
                de: 'Deutsch',
                en: 'English',
                nl: 'Nederlands',
                es: 'Español',
            },
            theme: {
                enableLight: 'Light Mode aktivieren',
                enableDark: 'Dark Mode aktivieren',
                switch: 'Dark / Light wechseln',
            },
            mobileMenu: {
                open: 'Menü öffnen',
                close: 'Menü schließen',
            },
            hero: {
                eyebrow: 'Für Modellbahnsammler',
                title: 'Behalte jedes Modell deiner Sammlung im Blick.',
                description:
                    'LokApp erfasst Loks, Wagen, Gebäude und Zubehör mit Fotos, Modellnummern und Details – damit du zuhause, in der Vitrine oder auf der Börse sofort weißt, welches Modell du schon hast.',
                primaryCta: 'Für die Alpha anmelden',
                secondaryCta: 'So funktioniert LokApp',
                alphaStatus: 'Aktuell in der Alpha-Phase',
                platforms: 'Für iPhone und Android',
            },
            preview: {
                collectionEyebrow: 'Meine Sammlung',
                collectionTitle: 'Loks & Wagen',
                search: 'Modell oder Nummer suchen',
                locomotives: 'Loks',
                wagons: 'Wagen',
                buildings: 'Gebäude',
                accessories: 'Zubehör',
                locomotiveMeta: 'Diesellok · Epoche IV',
                wagonMeta: 'Steuerwagen · Epoche IV',
                buildingMeta: 'Gebäude · Spur H0',
            },
            workflow: {
                eyebrow: 'So arbeitest du mit LokApp',
                title: 'Vom neuen Modell bis zum schnellen Wiederfinden.',
                description:
                    'LokApp begleitet den Weg, den jedes Modell in deiner Sammlung nimmt – vom Erfassen über die Details bis zur Suche unterwegs.',
                stepOneLabel: 'Erfassen',
                stepOneTitle: 'Modell anlegen',
                stepOneText:
                    'Lok, Wagen, Gebäude oder Zubehör mit Bezeichnung, Kategorie, Spurweite und Epoche eintragen.',
                fieldName: 'Bezeichnung',
                fieldNameValue: 'BR 218 447-3',
                fieldCategory: 'Kategorie',
                fieldCategoryValue: 'Diesellokomotive',
                stepTwoLabel: 'Dokumentieren',
                stepTwoTitle: 'Fotos und Details festhalten',
                stepTwoText:
                    'Bilder, Modellnummer, Zustand und eigene Notizen direkt am Modell speichern.',
                stepThreeLabel: 'Wiederfinden',
                stepThreeTitle: 'Unterwegs nachschlagen',
                stepThreeText:
                    'Auf der Börse in Sekunden prüfen, ob ein Modell schon in deiner Sammlung steht.',
                searchValue: '218',
                collectionResult: 'Bereits in Sammlung',
            },
            roadmap: {
                eyebrow: 'Entwicklung',
                title: 'LokApp entwickelt sich mit jedem echten Einsatz weiter.',
                description:
                    'Von der ersten Idee und einer kleinen Alpha-Version bis zum nächsten öffentlichen Schritt. Dabei bleiben Stabilität, ehrliches Feedback und ein guter Alltag für Sammler im Mittelpunkt.',
                ideaDate: '2025',
                ideaTitle: 'Idee und erste Alpha',
                ideaSummary:
                    'Die erste LokApp-Version geht für wenige Nutzer in die Alpha.',
                ideaDetails:
                    'Die Idee entstand aus dem Wunsch, eine wachsende Modellbahnsammlung endlich übersichtlich an einem Ort zu erfassen. Daraus wurde eine erste Android-Version, die bereits mit wenigen Nutzern getestet wurde.',
                coreDate: 'Frühjahr 2026',
                coreTitle: 'LokApp wird neu aufgebaut',
                coreSummary:
                    'Die Grundlage für eine moderne, stabile Sammlung entsteht.',
                coreDetails:
                    'LokApp wurde für iPhone und Android neu aufgebaut: Sammlung, Kategorien, Fotos, Suche, Filter und die wichtigsten Details wurden Schritt für Schritt zu einer klaren App zusammengeführt.',
                alphaDate: 'Jetzt',
                alphaTitle: 'Finish für den Alpha-Launch',
                alphaSummary:
                    'Polishing, Fehlerbehebung und die letzten wichtigen Abläufe.',
                alphaDetails:
                    'Der Fokus liegt jetzt auf einem sauberen Alpha-Start: Bedienung verbessern, Fehler finden, Stabilität erhöhen und die App für erste neue Tester bereit machen.',
                customizationDate: 'Geplant',
                customizationTitle: 'Veröffentlichung und Feedback',
                customizationSummary:
                    'Nutzerwünsche aufnehmen, LokApp weiterentwickeln und Abos vorbereiten.',
                customizationDetails:
                    'Nach dem Alpha-Launch wird LokApp mit echtem Feedback weiterentwickelt. Geplant sind Verbesserungen aus Nutzerwünschen sowie die Vorbereitung und Einführung des Abo-Modells.',
                cloudDate: 'In Vorbereitung',
                cloudTitle: 'Mehr Ansichten und Tablet',
                cloudSummary:
                    'Raster-, Listenansicht und eine bessere Nutzung auf Tablets.',
                cloudDetails:
                    'In Vorbereitung sind zusätzliche Ansichten für die Sammlung, darunter Raster- und Listenansicht, sowie eine optimierte Tablet-Version für mehr Übersicht auf größeren Displays.',
            },
            poll: {
                eyebrow: 'Mitgestalten',
                title: 'Bestimme mit, was LokApp als Nächstes besser macht.',
                description:
                    'Nimm an unserer Community-Abstimmung teil und hilf dabei, kommende Änderungen und Funktionen für LokApp zu priorisieren.',
                status: 'Community-Abstimmung',
                question:
                    'Welche Funktion wäre für dich als Nächstes am wichtigsten?',
                hint:
                    'Wähle die Funktion, die dir im Alltag mit deiner Sammlung am meisten helfen würde.',
                optionTypeDefaults: 'Type Defaults',
                optionTypeDefaultsDescription:
                    'Wiederkehrende Werte für bestimmte Modelltypen schneller übernehmen.',
                optionImages: 'Mehrere Bilder pro Modell',
                optionImagesDescription:
                    'Mehr Ansichten, Details und besondere Merkmale direkt festhalten.',
                optionSearch: 'Erweiterte Suche und Filter',
                optionSearchDescription:
                    'Deine Sammlung schneller nach Nummern, Typen oder Eigenschaften durchsuchen.',
                optionAttributes: 'Eigene Bereiche und Attribute',
                optionAttributesDescription:
                    'LokApp stärker an deine eigene Sammlung und Arbeitsweise anpassen.',
                stored:
                    'Danke für deine Stimme. Du hilfst damit, die nächsten Änderungen für LokApp zu priorisieren.',
                communityLater:
                    'Die Ergebnisse fließen direkt in die weitere Entwicklung von LokApp ein.',
            },
            origin: {
                eyebrow: 'Warum LokApp entstanden ist',
                title: 'Aus dem Alltag mit einer wachsenden Sammlung.',
                first:
                    'Je mehr Loks, Wagen, Gebäude und Zubehör dazukommen, desto schwieriger wird der Überblick. Informationen landen in Listen, Tabellen, Fotos auf dem Handy und im Kopf – und genau das führt zu Doppelkäufen und langem Suchen.',
                second:
                    'LokApp bündelt diese Informationen an einer Stelle: jedes Modell mit Bildern, Modellnummer, Kategorie und eigenen Notizen. So bleibt die Sammlung nachvollziehbar – zuhause an der Anlage, beim Sortieren und auf der Börse.',
                closing:
                    'Aus einer echten Sammlung. Für alle, die den Überblick behalten wollen.',
                link: 'Mehr über die Entwicklung erfahren',
                category: 'Kategorie',
                categoryValue: 'Lokomotive',
                gauge: 'Spurweite',
                epoch: 'Epoche',
                location: 'Standort',
                locationValue: 'Vitrine 2',
                modelType: 'Diesellokomotive',
            },
            alpha: {
                eyebrow: 'Früh dabei sein',
                title:
                    'Teste LokApp in der Alpha und bring deine Erfahrung ein.',
                description:
                    'Melde dich für die Alpha an, probiere LokApp mit deiner eigenen Sammlung aus und sag uns, was im Alltag als Sammler fehlt oder besser sein sollte.',
                cta: 'Für die Alpha anmelden',
                unavailable: 'Die Alpha-Anmeldung wird bald freigeschaltet.',
            },
            alphaPage: {
                metaTitle: 'Für LokApp Alpha anmelden – LokApp',
                metaDescription:
                    'Melde dich für die LokApp Alpha an und hilf dabei, die App für Modellbahnsammler besser zu machen.',
                mobileAlpha: 'Alpha',
                eyebrow: 'LokApp Alpha',
                title: 'Sei früh dabei und gestalte LokApp mit.',
                description:
                    'Teste LokApp vor dem öffentlichen Start und hilf mit ehrlichem Feedback dabei, die App für Modellbahnsammler besser zu machen.',
                emailLabel: 'E-Mail-Adresse',
                platformLabel: 'Auf welcher Plattform möchtest du LokApp testen?',
                platformPlaceholder: 'Bitte auswählen',
                platformIos: 'iPhone / iPad',
                platformAndroid: 'Android',
                platformMultiple: 'Mehrere Plattformen',
                privacyBefore: 'Ich habe die',
                privacyAfter:
                    'gelesen und stimme der Verarbeitung meiner Angaben für die Alpha-Anmeldung zu.',
                submit: 'Interesse an Alpha anmelden',
                infoLabel: 'Informationen zur Alpha',
                cardOneTitle: 'Früh testen',
                cardOneText:
                    'Du bekommst LokApp vor dem öffentlichen Start und kannst die wichtigsten Bereiche mit deiner eigenen Sammlung ausprobieren.',
                cardTwoTitle: 'Direkt Feedback geben',
                cardTwoText:
                    'Sag uns, was sich gut anfühlt, was fehlt und was bei einer echten Sammlung wirklich praktisch wäre.',
                cardThreeTitle: 'Keine Verpflichtung',
                cardThreeText:
                    'Die Alpha ist freiwillig. Du kannst jederzeit entscheiden, ob du weiter testen oder keine weiteren Informationen erhalten möchtest.',
            },
            footer: {
                description: 'LokApp ist ein Produkt von Schenk Software.',
                rights: '© 2026 Schenk Software. Alle Rechte vorbehalten.',
                navigation: 'Footer Navigation',
                imprint: 'Impressum',
                privacy: 'Datenschutz',
                terms: 'AGB',
                company: 'Schenk Software',
            },
            imprintPage: {
                metaTitle: 'Impressum – LokApp',
                metaDescription: 'Impressum von LokApp und Schenk Software.',
                mobileAlpha: 'Alpha',
                sectionNavigation: 'Inhaltsnavigation',
                eyebrow: 'Rechtliche Angaben',
                title: 'Impressum',
                subtitle: 'Rechtliche Angaben zu LokApp und Schenk Software.',
                updated: 'Stand: 1. Juli 2026',
                onThisPage: 'Auf dieser Seite',
                sectionBusiness: 'Angaben gemäß § 5 DDG',
                sectionContact: 'Kontakt',
                sectionVat: 'Umsatzsteuer',
                sectionDispute: 'Streitbeilegung',
                sectionCopyright: 'Urheberrecht',
                productLabel: 'Produkt',
                productValue: 'LokApp ist ein Produkt von Schenk Software.',
                emailLabel: 'E-Mail',
                websiteLabel: 'Website',
                vatTitle: 'Umsatzsteuer-Identifikationsnummer',
                vatText:
                    'Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:',
                vatNote:
                    'Falls keine Umsatzsteuer-Identifikationsnummer vorhanden ist, diesen Abschnitt vor Veröffentlichung entfernen.',
                disputeTitle: 'Verbraucherstreitbeilegung',
                disputeText:
                    'Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
                disputeNote:
                    'Dieser Text darf nur verwendet werden, wenn er für dein Unternehmen tatsächlich zutrifft.',
                copyrightTitle: 'Urheberrecht',
                copyrightTextOne:
                    'Die Inhalte, Bilder, Texte und Gestaltungselemente dieser Website unterliegen dem deutschen Urheberrecht, soweit nicht anders gekennzeichnet.',
                copyrightTextTwo:
                    'Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.',
                finalNote:
                    'Dieses Impressum ist technisch vorbereitet, aber noch nicht mit deinen finalen Unternehmens- und Kontaktangaben vervollständigt. Bitte vor einem öffentlichen Launch rechtlich prüfen lassen.',
            },
privacyPage: {
    metaTitle: 'Datenschutzerklärung – LokApp',
    metaDescription:
        'Datenschutzerklärung für die Website lokapp.de: Server-Logs, Alpha-Anmeldung, E-Mail-Versand, Umfragen und deine Rechte.',
    sectionNavigation: 'Inhaltsnavigation',
    eyebrow: 'Datenschutz',
    title: 'Datenschutzerklärung',
    subtitle:
        'Informationen zur Verarbeitung personenbezogener Daten auf der Website lokapp.de.',
    updated: 'Stand: 2. Juli 2026',
    onThisPage: 'Auf dieser Seite',

    navResponsible: 'Verantwortlicher',
    navOverview: 'Überblick',
    navWebsite: 'Website und Server-Logs',
    navAlpha: 'Alpha-Anmeldung',
    navEmail: 'E-Mail-Versand',
    navStorage: 'Speicherung in der Datenbank',
    navPolls: 'Umfragen und Cookie',
    navRecipients: 'Empfänger',
    navRetention: 'Speicherdauer',
    navRights: 'Deine Rechte',
    navSecurity: 'Datensicherheit',
    navChanges: 'Änderungen',

    purposeLabel: 'Zweck',
    dataLabel: 'Datenkategorien',
    legalBasisLabel: 'Rechtsgrundlage',
    recipientsLabel: 'Empfänger',
    storageLabel: 'Speicherdauer',
    voluntaryLabel: 'Freiwilligkeit',
    placeholderLabel: 'Vor Livegang prüfen',

    responsibleTitle: 'Verantwortlicher',
    responsibleIntro:
        'Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:',
    responsibleContactIntro:
        'Kontakt für Anfragen zum Datenschutz:',

    overviewTitle: 'Überblick über die Datenverarbeitung',
    overviewP1:
        'Diese Datenschutzerklärung informiert dich darüber, welche personenbezogenen Daten beim Besuch der Website lokapp.de und bei der Nutzung ihrer Funktionen verarbeitet werden, zu welchen Zwecken dies geschieht und welche Rechte dir zustehen.',
    overviewP2:
        'lokapp.de ist eine überwiegend statische Website. Es werden keine Werbe- oder Analysedienste, kein seitenübergreifendes Tracking, kein Geräte-Fingerprinting und keine von externen Servern nachgeladenen Schriftarten eingesetzt.',
    overviewP3:
        'Personenbezogene Daten werden vor allem in drei Zusammenhängen verarbeitet: beim technischen Aufruf der Website, bei einer freiwilligen Anmeldung zur Alpha und bei der Teilnahme an einer Umfrage, sofern eine solche angeboten wird.',

    websiteTitle: 'Bereitstellung der Website und Server-Logdateien',
    websiteP1:
        'Die Website wird auf einem virtuellen Server des Hostinganbieters IONOS betrieben und technisch durch den Verantwortlichen verwaltet. Vor der Anwendung liegt ein Reverse Proxy, der die HTTPS-Verbindung bereitstellt.',
    websiteLogsIntro:
        'Beim Aufruf der Website und bei Anfragen an die Programmierschnittstelle (API) können technisch bedingt folgende Daten verarbeitet werden:',
    websiteLi1: 'IP-Adresse des aufrufenden Endgeräts',
    websiteLi2: 'Datum und Uhrzeit des Zugriffs',
    websiteLi3: 'aufgerufene Seite, Datei oder API-Endpunkt',
    websiteLi4: 'HTTP-Statuscode und übertragene Datenmenge',
    websiteLi5: 'Referrer-URL, sofern vom Browser übermittelt',
    websiteLi6: 'Browsertyp, Browser-Version und Betriebssystem',
    websitePurpose:
        'sichere und stabile Bereitstellung der Website, Fehleranalyse sowie Erkennung und Abwehr von Missbrauch',
    websiteData:
        'technische Zugriffsdaten einschließlich IP-Adresse (siehe Liste oben)',
    websiteLegalBasis:
        'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren, funktionsfähigen Betrieb)',
    websiteRecipients:
        'IONOS als Hostinganbieter sowie die vom Verantwortlichen betriebenen Dienste für Reverse Proxy, Website, API, Datenbank und E-Mail-Versand',
    websiteStorage:
        'Für technische Zugriffs- und Fehlerlogs besteht derzeit keine einheitliche kalenderbasierte Speicherdauer. Die Aufbewahrung richtet sich nach der jeweiligen technischen Log-Konfiguration und dem erforderlichen Zweck für Betrieb, Sicherheit und Fehleranalyse.',
    websiteRateLimit:
        'Zum Schutz vor automatisierten Anfragen und Missbrauch ist eine Begrenzung der Anfragehäufigkeit (Rate Limiting) aktiv. Dabei werden Anfragen kurzfristig anhand technischer Merkmale wie der IP-Adresse gezählt.',
    websiteNoProfiles:
        'Eine Zusammenführung dieser Daten mit anderen Datenquellen oder die Erstellung personenbezogener Nutzungsprofile findet nicht statt.',
    placeholderLogRetention:
        'Vor dem öffentlichen Launch sollte für Reverse-Proxy-, Webserver- und API-Logs eine einheitliche kalenderbasierte Löschfrist technisch eingerichtet und hier dokumentiert werden. Die aktuelle Größenrotation der LokApp-Container ist keine feste Tagesfrist.',

    alphaTitle: 'Alpha-Anmeldung und Double-Opt-in',
    alphaP1:
        'Über das Anmeldeformular kannst du dein Interesse an der LokApp Alpha bekunden. Dabei werden deine E-Mail-Adresse, die gewünschte Plattform (iPhone/iPad, Android oder mehrere Plattformen) sowie deine ausdrückliche Bestätigung der Datenschutzhinweise verarbeitet.',
    alphaP2:
        'Die Anmeldung erfolgt im Double-Opt-in-Verfahren: Nach dem Absenden erhältst du eine E-Mail mit einem Bestätigungslink. Erst mit Klick auf diesen Link wird deine Anmeldung bestätigt. Der Bestätigungslink ist zeitlich begrenzt gültig.',
    alphaP3:
        'Zur Absicherung des Verfahrens werden der Bestätigungs- und der Abmelde-Token ausschließlich in gehashter Form gespeichert. Zusätzlich werden der Status der Anmeldung, eine Version der Datenschutzhinweise sowie Zeitstempel gespeichert.',
    alphaPurpose:
        'Durchführung und Bestätigung der Alpha-Anmeldung sowie Kontaktaufnahme im Zusammenhang mit der Alpha',
    alphaData:
        'E-Mail-Adresse, gewünschte Plattform, Einwilligungs- und Statusinformationen, gehashte Token, Zeitstempel',
    alphaLegalBasis:
        'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung); die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden',
    alphaRecipients:
        'eigene PostgreSQL-Datenbank, eigener Mailcow-E-Mail-Server sowie IONOS als Hostinganbieter der Server-Infrastruktur',
    alphaStorage:
        'bis zum Widerruf der Einwilligung beziehungsweise zur Abmeldung; nähere Angaben unter „Speicherdauer und Löschung“',
    alphaVoluntary:
        'Die Angabe der Daten ist freiwillig. Ohne E-Mail-Adresse und Bestätigung der Datenschutzhinweise ist eine Anmeldung technisch nicht möglich.',
    alphaNoAds:
        'Die im Rahmen der Alpha-Anmeldung erhobenen Daten werden nicht an Werbeplattformen weitergegeben und nicht für Werbung über den beschriebenen Zweck hinaus verwendet.',

    emailTitle: 'E-Mail-Versand',
    emailP1:
        'Der Versand der Bestätigungs- und Verfahrens-E-Mails erfolgt über einen eigenen, selbst betriebenen E-Mail-Server auf der eingesetzten Server-Infrastruktur. Ein externer Newsletter- oder Marketing-Dienstleister wird dafür nicht eingesetzt.',
    emailP2:
        'Zur Zustellung wird deine E-Mail-Adresse verarbeitet. Beim Transport können technische Verbindungsdaten anfallen, die für den zuverlässigen und sicheren Versand erforderlich sind.',
    emailLegalBasis:
        'Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO, soweit dies für die Durchführung des von dir angestoßenen Bestätigungsverfahrens erforderlich ist.',

    storageTitle: 'Speicherung in der Datenbank',
    storageP1:
        'Die im Zusammenhang mit der Alpha-Anmeldung und mit Umfragen erhobenen Daten werden in einer PostgreSQL-Datenbank auf der für LokApp eingesetzten Server-Infrastruktur bei IONOS gespeichert.',
    storageP2:
        'Token zur Bestätigung, Abmeldung und zur Begrenzung von Mehrfachabgaben werden nicht im Klartext, sondern ausschließlich als kryptografischer Hashwert gespeichert.',

    pollsTitle: 'Umfragen und technisches Cookie',
    pollsP1:
        'Sofern auf der Website eine aktive Umfrage angeboten wird, kannst du daran freiwillig teilnehmen. Je nach Umfrage kann dabei eine Auswahl oder eine Freitext-Antwort serverseitig gespeichert werden.',
    pollsP2:
        'Um Mehrfachabgaben pro Browser einzuschränken, wird beim Teilnehmen ein zufälliges Token erzeugt und als technisch notwendiges Cookie im Browser gesetzt. In der Datenbank wird nur der Hashwert dieses Tokens gespeichert. Eine personenbezogene Profilbildung findet nicht statt.',
    pollsCookieName: 'lokapp_poll_token',
    pollsCookiePurpose:
        'Begrenzung von Mehrfachabstimmungen und Mehrfachantworten pro Browser',
    pollsCookieStorage:
        'Cookie: HttpOnly, auf den Pfad /api beschränkt, mit einer maximalen Laufzeit von bis zu zwölf Monaten; in der Datenbank wird nur der Hashwert gespeichert',
    pollsConsent:
        'Das Setzen dieses Cookies ist für die von dir ausdrücklich gewünschte Funktion – die Teilnahme an der Umfrage – erforderlich. Die anschließende Verarbeitung stützt sich auf Art. 6 Abs. 1 lit. f DSGVO wegen des berechtigten Interesses an aussagekräftigen, nicht manipulierten Ergebnissen.',
    pollsTextNote:
        'Bei Umfragen mit Freitext-Antwort bitten wir dich, keine personenbezogenen Daten wie Namen, Adressen oder Kontaktdaten einzugeben.',
    pollsLocalNote:
        'Für von dir gewählte Einstellungen nutzt die Website den lokalen Speicher deines Browsers, etwa für die Sprache, die Darstellung im Dark- oder Light-Mode und eine bereits getroffene Umfrage-Auswahl. Diese Informationen verbleiben auf deinem Gerät und werden nicht automatisch an uns übertragen.',

    recipientsTitle: 'Empfänger und Auftragsverarbeitung',
    recipientsP1:
        'Für die technische Bereitstellung der Website wird IONOS als Hostinganbieter eingesetzt. Die Website, API, Datenbank und der E-Mail-Server werden durch den Verantwortlichen selbst administriert.',
    recipientsP2:
        'Eine Weitergabe oder ein Verkauf personenbezogener Daten an Dritte zu Werbezwecken findet nicht statt. Eine Offenlegung erfolgt nur, wenn wir gesetzlich dazu verpflichtet sind.',
    recipientsP3:
        'Eine Übermittlung personenbezogener Daten in Drittstaaten ist für die aktuell eingesetzten LokApp-Dienste nicht vorgesehen. Der tatsächliche Serverstandort und die vertraglichen Regelungen mit dem Hostinganbieter sind vor dem öffentlichen Launch zu prüfen.',
    placeholderHosting:
        'Vor dem öffentlichen Launch ist zu prüfen und zu dokumentieren, dass mit IONOS ein passender Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO abgeschlossen wurde. Außerdem ist der tatsächlich vertraglich vereinbarte Serverstandort zu prüfen.',

    retentionTitle: 'Speicherdauer und Löschung',
    retentionP1:
        'Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Danach werden sie gelöscht oder in ihrer Verarbeitung eingeschränkt.',
    retentionLi1:
        'Alpha-Anmeldung: bis zum Widerruf der Einwilligung beziehungsweise zur Abmeldung; anschließend Löschung oder Anonymisierung',
    retentionLi2:
        'nicht bestätigte Anmeldungen: der Bestätigungslink verfällt nach sieben Tagen; die Routine zur endgültigen Löschung nicht bestätigter Einträge ist vor dem Livegang festzulegen',
    retentionLi3:
        'Server-, Reverse-Proxy- und API-Logdateien: aktuell keine einheitlich konfigurierte kalenderbasierte Löschfrist; vor dem öffentlichen Launch technisch festlegen und dokumentieren',
    retentionLi4:
        'Umfragen: der gehashte Token wird zur Begrenzung von Mehrfachabgaben für die Dauer der jeweiligen Umfrage gespeichert',

    rightsTitle: 'Deine Rechte',
    rightsP1:
        'Soweit die gesetzlichen Voraussetzungen vorliegen, stehen dir hinsichtlich deiner personenbezogenen Daten insbesondere folgende Rechte zu:',
    rightsLi1:
        'Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)',
    rightsLi2:
        'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
    rightsLi3: 'Löschung (Art. 17 DSGVO)',
    rightsLi4:
        'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
    rightsLi5:
        'Datenübertragbarkeit (Art. 20 DSGVO)',
    rightsLi6:
        'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
    rightsWithdrawalTitle: 'Widerruf der Einwilligung',
    rightsWithdrawal:
        'Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen, zum Beispiel über den Abmeldelink oder per Nachricht an die oben genannte Kontaktadresse. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.',
    rightsComplaintTitle:
        'Beschwerderecht bei einer Aufsichtsbehörde',
    rightsComplaint:
        'Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung deiner personenbezogenen Daten zu beschweren. Zuständig ist in der Regel die Aufsichtsbehörde am Sitz des Verantwortlichen.',
    placeholderAuthority:
        'Vor dem öffentlichen Launch kann hier die zuständige Datenschutzaufsichtsbehörde mit Kontaktdaten ergänzt werden.',
    rightsContact:
        'Zur Ausübung deiner Rechte genügt eine Nachricht an die oben genannte Kontaktadresse.',

    securityTitle: 'Datensicherheit',
    securityP1:
        'Die Verbindung zur Website ist über HTTPS/TLS verschlüsselt. Zusätzlich werden technische und organisatorische Maßnahmen eingesetzt, etwa das Speichern von Token ausschließlich als Hashwert, eine Begrenzung der Anfragehäufigkeit sowie Zugriffsbeschränkungen auf die Server-Infrastruktur.',
    securityP2:
        'Trotz sorgfältiger Maßnahmen kann keine Übertragung über das Internet vollständige Sicherheit garantieren. Die Maßnahmen werden an den Stand der Technik angepasst.',

    changesTitle: 'Änderungen dieser Datenschutzerklärung',
    changesP1:
        'Diese Datenschutzerklärung wird angepasst, wenn sich die Website, eingesetzte Dienste oder Datenverarbeitungen ändern.',
    changesP2:
        'Vor der Aktivierung weiterer Funktionen – etwa Analyse-Diensten, Cloud-Synchronisation, Zahlungen oder Abonnements – wird diese Erklärung ergänzt und erneut geprüft.',

    finalNote:
        'Diese Datenschutzerklärung beschreibt den aktuellen technischen Stand der Website. Sie stellt keine Rechtsberatung dar und ersetzt keine individuelle rechtliche Prüfung vor dem öffentlichen Launch.',
},
            termsPage: {
                metaTitle: 'Nutzungsbedingungen für Website und Alpha – LokApp',
                metaDescription: 'Nutzungsbedingungen für die Website lokapp.de und die Teilnahme an der LokApp Alpha.',
                sectionNavigation: 'Inhaltsnavigation',
                eyebrow: 'Rechtliche Angaben',
                title: 'Nutzungsbedingungen für Website und Alpha',
                subtitle: 'Bedingungen für die Nutzung der Website lokapp.de und die Teilnahme an der LokApp Alpha.',
                updated: 'Stand: 1. Juli 2026',
                onThisPage: 'Auf dieser Seite',
                navScope: 'Geltungsbereich',
                navSubject: 'Gegenstand der Alpha',
                navParticipation: 'Teilnahme',
                navFeedback: 'Feedback',
                navConduct: 'Verhaltensregeln',
                navAvailability: 'Verfügbarkeit',
                navLiability: 'Haftung',
                navPrivacy: 'Datenschutz',
                navChanges: 'Änderungen',
                navLaw: 'Anwendbares Recht',
                scopeTitle: '1. Geltungsbereich',
                scopeP1: 'Diese Nutzungsbedingungen gelten für die Nutzung der Website lokapp.de sowie für die Anmeldung zur und die Teilnahme an der Alpha-Phase von LokApp.',
                scopeP2: 'Anbieter ist Schenk Software, Sebastian Schenk. Die vollständigen Anbieterangaben findest du im Impressum.',
                scopeP3: 'Diese Bedingungen gelten ausschließlich für Website und Alpha. Für ein späteres, kostenpflichtiges Angebot der App (zum Beispiel Abonnements) würden gesonderte Bedingungen gelten, die zum jeweiligen Zeitpunkt bereitgestellt und vereinbart werden.',
                subjectTitle: '2. Gegenstand der Alpha-Anmeldung',
                subjectP1: 'Über die Website kannst du dein Interesse an einer Teilnahme an der LokApp Alpha bekunden. LokApp ist eine App zur Verwaltung und Dokumentation von Modellbahnsammlungen und befindet sich in einer frühen Entwicklungsphase.',
                subjectP2: 'Die Alpha-Anmeldung dient dazu, Interessierten frühzeitig Zugang zu ermöglichen und Rückmeldungen zu sammeln. Sie ist kein Kaufvertrag und begründet kein kostenpflichtiges Abonnement.',
                participationTitle: '3. Teilnahme, Freiwilligkeit und keine Vergütung',
                participationP1: 'Die Anmeldung und die Teilnahme an der Alpha sind freiwillig und für dich kostenlos.',
                participationP2: 'Ein Anspruch auf Teilnahme, auf Zugang zur Alpha, auf bestimmte Funktionen oder auf einen späteren öffentlichen Zugang besteht nicht. Die Zahl der Testplätze kann begrenzt werden.',
                participationP3: 'Für Rückmeldungen oder das Testen besteht kein Anspruch auf Vergütung. Ebenso besteht keine Verpflichtung, die Alpha tatsächlich zu nutzen.',
                participationP4: 'Du kannst deine Teilnahme jederzeit beenden, insbesondere über den Abmeldelink in der Bestätigungs- oder einer weiteren E-Mail.',
                feedbackTitle: '4. Feedback',
                feedbackP1: 'Rückmeldungen, Fehlerberichte und Verbesserungsvorschläge sind willkommen, aber freiwillig.',
                feedbackP2: 'Es besteht keine Verpflichtung, eingereichtes Feedback umzusetzen. Wenn du Vorschläge einreichst, dürfen diese zur Verbesserung von LokApp genutzt werden. Über die dafür erforderliche Erlaubnis hinaus wird dir keine Übertragung weitergehender Rechte abverlangt; deine gesetzlichen Rechte bleiben unberührt.',
                conductTitle: '5. Verhaltensregeln',
                conductP1: 'Bei der Nutzung von Website und Alpha ist geltendes Recht zu beachten. Insbesondere gilt:',
                conductLi1: 'keine Nutzung für rechtswidrige Zwecke',
                conductLi2: 'keine Beeinträchtigung, Überlastung oder Umgehung der technischen Infrastruktur und Sicherheitsmaßnahmen',
                conductLi3: 'keine automatisierte Massenabfrage der Website oder der Schnittstellen',
                conductP2: 'Für Inhalte, die du in der App erfasst, bist du selbst verantwortlich. Du solltest nur Inhalte verwenden, für die du die erforderlichen Rechte besitzt.',
                availabilityTitle: '6. Verfügbarkeit und Weiterentwicklung',
                availabilityP1: 'LokApp befindet sich in aktiver Entwicklung. Die App und die Website können Fehler enthalten, sich verändern oder zeitweise nicht verfügbar sein.',
                availabilityP2: 'Die Alpha kann jederzeit angepasst, in ihrem Umfang begrenzt, pausiert oder beendet werden. Während der Alpha kann es zu Änderungen, Zurücksetzungen oder Datenverlust kommen; wichtige Daten solltest du daher zusätzlich sichern.',
                liabilityTitle: '7. Haftung',
                liabilityP1: 'Für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei Vorsatz und grober Fahrlässigkeit haften wir nach den gesetzlichen Vorschriften.',
                liabilityP2: 'Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht (einer Pflicht, deren Erfüllung die ordnungsgemäße Nutzung überhaupt erst ermöglicht und auf deren Einhaltung du regelmäßig vertrauen darfst), und der Höhe nach begrenzt auf den vorhersehbaren, typischerweise eintretenden Schaden.',
                liabilityP3: 'Zwingende gesetzliche Haftung, insbesondere nach dem Produkthaftungsgesetz, bleibt unberührt. Da die Alpha unentgeltlich bereitgestellt wird, gelten zudem die gesetzlichen Haftungserleichterungen für unentgeltliche Überlassungen, soweit anwendbar.',
                liabilityP4: 'Ein pauschaler Haftungsausschluss ist damit nicht verbunden; zwingende gesetzliche Rechte bleiben in jedem Fall bestehen.',
                privacyTitle: '8. Datenschutz',
                privacyP1: 'Informationen zur Verarbeitung personenbezogener Daten im Zusammenhang mit Website und Alpha findest du in der Datenschutzerklärung.',
                privacyLink: 'Zur Datenschutzerklärung',
                changesTitle: '9. Änderungen dieser Bedingungen',
                changesP1: 'Diese Nutzungsbedingungen können angepasst werden, wenn sich die Website, die Alpha oder rechtliche Rahmenbedingungen ändern.',
                changesP2: 'Die jeweils aktuelle Fassung ist auf dieser Seite abrufbar. Für bereits abgeschlossene Vorgänge gilt die zum jeweiligen Zeitpunkt gültige Fassung.',
                lawTitle: '10. Anwendbares Recht und Schlussbestimmungen',
                lawP1: 'Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.',
                lawP2: 'Wenn du Verbraucher mit gewöhnlichem Aufenthalt in einem anderen Staat bist, bleiben die zwingenden Verbraucherschutzvorschriften deines Aufenthaltsstaates unberührt; diese Rechtswahl schränkt sie nicht ein.',
                lawP3: 'Sollte eine Bestimmung dieser Nutzungsbedingungen unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle einer unwirksamen Bestimmung gelten die gesetzlichen Vorschriften.',
                finalNote: 'Diese Nutzungsbedingungen beschreiben den aktuellen Stand von Website und Alpha. Sie stellen keine Rechtsberatung dar und ersetzen keine individuelle rechtliche Prüfung vor dem öffentlichen Launch.',
            },
        },

        en: {
            meta: {
                title: 'LokApp – Catalog and find your model railway collection',
                description:
                    'LokApp is the app for model railway collectors: catalog locomotives, wagons, buildings and accessories with photos, model numbers and details – then find every model quickly at home, in your display cabinet or at a fair.',
                ogDescription:
                    'Catalog locomotives, wagons, buildings and accessories with photos, model numbers and details – and find every model at home, in your display cabinet or at a fair.',
            },
            accessibility: {
                skipToContent: 'Skip to content',
                home: 'LokApp home page',
                mainNavigation: 'Main navigation',
                mobileNavigation: 'Mobile navigation',
                selectLanguage: 'Choose language',
                appPreview:
                    'LokApp preview with an example collection of locomotives, wagons and buildings',
                modelDetail:
                    'Example model details in LokApp with designation, category, gauge and era',
            },
            navigation: {
                home: 'Home',
                features: 'Features',
                roadmap: 'Roadmap',
                poll: 'Poll',
                alpha: 'Join the alpha',
            },
            language: {
                de: 'Deutsch',
                en: 'English',
                nl: 'Nederlands',
                es: 'Español',
            },
            theme: {
                enableLight: 'Enable light mode',
                enableDark: 'Enable dark mode',
                switch: 'Switch dark / light mode',
            },
            mobileMenu: {
                open: 'Open menu',
                close: 'Close menu',
            },
            hero: {
                eyebrow: 'For model railway collectors',
                title: 'Keep every model in your collection in view.',
                description:
                    'LokApp records locomotives, wagons, buildings and accessories with photos, model numbers and details – so you immediately know whether you already own a model at home, in your display cabinet or at a fair.',
                primaryCta: 'Join the alpha',
                secondaryCta: 'How LokApp works',
                alphaStatus: 'Currently in alpha',
                platforms: 'For iPhone and Android',
            },
            preview: {
                collectionEyebrow: 'My collection',
                collectionTitle: 'Locomotives & wagons',
                search: 'Search model or number',
                locomotives: 'Locomotives',
                wagons: 'Wagons',
                buildings: 'Buildings',
                accessories: 'Accessories',
                locomotiveMeta: 'Diesel locomotive · Era IV',
                wagonMeta: 'Control car · Era IV',
                buildingMeta: 'Building · H0 gauge',
            },
            workflow: {
                eyebrow: 'How LokApp works',
                title: 'From a new model to finding it quickly.',
                description:
                    'LokApp supports every step a model takes through your collection – from cataloguing and documenting to looking it up on the move.',
                stepOneLabel: 'Catalog',
                stepOneTitle: 'Add a model',
                stepOneText:
                    'Add a locomotive, wagon, building or accessory with name, category, gauge and era.',
                fieldName: 'Designation',
                fieldNameValue: 'BR 218 447-3',
                fieldCategory: 'Category',
                fieldCategoryValue: 'Diesel locomotive',
                stepTwoLabel: 'Document',
                stepTwoTitle: 'Save photos and details',
                stepTwoText:
                    'Store photos, model number, condition and your own notes directly with the model.',
                stepThreeLabel: 'Find again',
                stepThreeTitle: 'Look it up on the move',
                stepThreeText:
                    'At a fair, check in seconds whether a model is already part of your collection.',
                searchValue: '218',
                collectionResult: 'Already in collection',
            },
            roadmap: {
                eyebrow: 'Development',
                title: 'LokApp evolves with every real use case.',
                description:
                    'From the first idea and a small alpha version to the next public step. Stability, honest feedback and a great everyday experience for collectors remain at the centre.',
                ideaDate: '2025',
                ideaTitle: 'Idea and first alpha',
                ideaSummary:
                    'The first version of LokApp enters alpha with a small group of users.',
                ideaDetails:
                    'The idea came from the need to finally keep a growing model railway collection organised in one place. This became an initial Android version, already tested with a small group of users.',
                coreDate: 'Spring 2026',
                coreTitle: 'LokApp is rebuilt',
                coreSummary:
                    'The foundation for a modern, reliable collection app takes shape.',
                coreDetails:
                    'LokApp was rebuilt for iPhone and Android: collection management, categories, photos, search, filters and essential details were brought together step by step in one clear app.',
                alphaDate: 'Now',
                alphaTitle: 'Finishing the alpha launch',
                alphaSummary:
                    'Polish, bug fixing and the final important workflows.',
                alphaDetails:
                    'The focus is now on a clean alpha launch: improve usability, find issues, increase stability and prepare the app for its first new testers.',
                customizationDate: 'Planned',
                customizationTitle: 'Release and feedback',
                customizationSummary:
                    'Collect user feedback, keep improving LokApp and prepare subscriptions.',
                customizationDetails:
                    'After the alpha launch, LokApp will continue to evolve with real feedback. Planned work includes improvements based on user requests as well as preparing and introducing subscriptions.',
                cloudDate: 'In preparation',
                cloudTitle: 'More views and tablet support',
                cloudSummary:
                    'Grid view, list view and a better experience on tablets.',
                cloudDetails:
                    'Additional collection views are being prepared, including grid and list view, alongside an optimised tablet experience for more overview on larger displays.',
            },
            poll: {
                eyebrow: 'Help shape LokApp',
                title: 'Help decide what LokApp improves next.',
                description:
                    'Take part in our community poll and help prioritise upcoming changes and features for LokApp.',
                status: 'Community poll',
                question:
                    'Which feature would be most important to you next?',
                hint:
                    'Choose the feature that would help you most in everyday collecting.',
                optionTypeDefaults: 'Type Defaults',
                optionTypeDefaultsDescription:
                    'Apply recurring values for specific model types more quickly.',
                optionImages: 'Multiple images per model',
                optionImagesDescription:
                    'Capture more views, details and special characteristics directly with a model.',
                optionSearch: 'Advanced search and filters',
                optionSearchDescription:
                    'Search your collection faster by numbers, types or properties.',
                optionAttributes: 'Custom sections and attributes',
                optionAttributesDescription:
                    'Adapt LokApp more closely to your own collection and workflow.',
                stored:
                    'Thanks for your vote. You are helping prioritise the next improvements for LokApp.',
                communityLater:
                    'The results will directly influence the further development of LokApp.',
            },
            origin: {
                eyebrow: 'Why LokApp exists',
                title: 'Built from everyday life with a growing collection.',
                first:
                    'The more locomotives, wagons, buildings and accessories you collect, the harder it becomes to keep track. Information ends up in lists, spreadsheets, photos on your phone and in your head – which can lead to duplicate purchases and long searches.',
                second:
                    'LokApp brings this information together in one place: every model with photos, model number, category and your own notes. Your collection stays understandable at the layout, while sorting and at a fair.',
                closing:
                    'From a real collection. For everyone who wants to stay organised.',
                link: 'Learn more about the development',
                category: 'Category',
                categoryValue: 'Locomotive',
                gauge: 'Gauge',
                epoch: 'Era',
                location: 'Location',
                locationValue: 'Display cabinet 2',
                modelType: 'Diesel locomotive',
            },
            alpha: {
                eyebrow: 'Join early',
                title: 'Test LokApp in alpha and share your experience.',
                description:
                    'Join the alpha, try LokApp with your own collection and tell us what is missing or could work better in everyday collecting.',
                cta: 'Join the alpha',
                unavailable: 'Alpha sign-up will be enabled soon.',
            },
            alphaPage: {
                metaTitle: 'Join the LokApp Alpha – LokApp',
                metaDescription:
                    'Join the LokApp alpha and help improve the app for model railway collectors.',
                mobileAlpha: 'Alpha',
                eyebrow: 'LokApp Alpha',
                title: 'Join early and help shape LokApp.',
                description:
                    'Test LokApp before its public launch and help improve the app for model railway collectors through honest feedback.',
                emailLabel: 'Email address',
                platformLabel: 'Which platform would you like to test LokApp on?',
                platformPlaceholder: 'Please select',
                platformIos: 'iPhone / iPad',
                platformAndroid: 'Android',
                platformMultiple: 'Multiple platforms',
                privacyBefore: 'I have read the',
                privacyAfter:
                    'and agree to the processing of my information for the alpha registration.',
                submit: 'Register interest for the alpha',
                infoLabel: 'Information about the alpha',
                cardOneTitle: 'Test early',
                cardOneText:
                    'You will get LokApp before the public launch and can try the most important areas with your own collection.',
                cardTwoTitle: 'Share direct feedback',
                cardTwoText:
                    'Tell us what feels good, what is missing and what would be genuinely useful for a real collection.',
                cardThreeTitle: 'No obligation',
                cardThreeText:
                    'The alpha is voluntary. You can decide at any time whether you want to keep testing or receive no further information.',
            },
            footer: {
                description: 'LokApp is a product by Schenk Software.',
                rights: '© 2026 Schenk Software. All rights reserved.',
                navigation: 'Footer navigation',
                imprint: 'Legal notice',
                privacy: 'Privacy',
                terms: 'Terms',
                company: 'Schenk Software',
            },
            imprintPage: {
                metaTitle: 'Legal notice – LokApp',
                metaDescription: 'Legal notice for LokApp and Schenk Software.',
                mobileAlpha: 'Alpha',
                sectionNavigation: 'Page navigation',
                eyebrow: 'Legal information',
                title: 'Legal notice',
                subtitle: 'Legal information about LokApp and Schenk Software.',
                updated: 'Last updated: 1 July 2026',
                onThisPage: 'On this page',
                sectionBusiness: 'Provider information',
                sectionContact: 'Contact',
                sectionVat: 'VAT',
                sectionDispute: 'Dispute resolution',
                sectionCopyright: 'Copyright',
                productLabel: 'Product',
                productValue: 'LokApp is a product by Schenk Software.',
                emailLabel: 'Email',
                websiteLabel: 'Website',
                vatTitle: 'VAT identification number',
                vatText: 'VAT identification number pursuant to § 27a UStG:',
                vatNote:
                    'Remove this section before publication if no VAT identification number exists.',
                disputeTitle: 'Consumer dispute resolution',
                disputeText:
                    'We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.',
                disputeNote:
                    'This text may only be used if it genuinely applies to your company.',
                copyrightTitle: 'Copyright',
                copyrightTextOne:
                    'Unless otherwise stated, the content, images, text and design elements of this website are protected by German copyright law.',
                copyrightTextTwo:
                    'Reproduction, editing or distribution outside the limits of copyright law requires the prior written consent of the respective rights holder.',
                finalNote:
                    'This legal notice is technically prepared but still lacks your final company and contact details. Have it legally reviewed before a public launch.',
            },
privacyPage: {
    metaTitle: 'Privacy policy – LokApp',
    metaDescription:
        'Privacy policy for the lokapp.de website: server logs, alpha registration, email delivery, polls and your rights.',
    sectionNavigation: 'Page navigation',
    eyebrow: 'Privacy',
    title: 'Privacy policy',
    subtitle:
        'Information about the processing of personal data on the lokapp.de website.',
    updated: 'Last updated: 2 July 2026',
    onThisPage: 'On this page',

    navResponsible: 'Controller',
    navOverview: 'Overview',
    navWebsite: 'Website and server logs',
    navAlpha: 'Alpha registration',
    navEmail: 'Email delivery',
    navStorage: 'Storage in the database',
    navPolls: 'Polls and cookie',
    navRecipients: 'Recipients',
    navRetention: 'Retention period',
    navRights: 'Your rights',
    navSecurity: 'Data security',
    navChanges: 'Changes',

    purposeLabel: 'Purpose',
    dataLabel: 'Data categories',
    legalBasisLabel: 'Legal basis',
    recipientsLabel: 'Recipients',
    storageLabel: 'Retention period',
    voluntaryLabel: 'Voluntary nature',
    placeholderLabel: 'Verify before launch',

    responsibleTitle: 'Controller',
    responsibleIntro:
        'The controller responsible for the processing of personal data on this website within the meaning of the General Data Protection Regulation is:',
    responsibleContactIntro:
        'Contact for privacy enquiries:',

    overviewTitle: 'Overview of data processing',
    overviewP1:
        'This privacy policy explains which personal data is processed when you visit the lokapp.de website and use its features, for which purposes, and which rights you have.',
    overviewP2:
        'lokapp.de is a largely static website. No advertising or analytics services, no cross-site tracking, no device fingerprinting and no fonts loaded from external servers are used.',
    overviewP3:
        'Personal data is processed mainly in three contexts: the technical delivery of the website, a voluntary alpha registration, and participation in a poll where one is offered.',

    websiteTitle: 'Provision of the website and server log files',
    websiteP1:
        'The website runs on a virtual server provided by the hosting provider IONOS and is technically administered by the controller. A reverse proxy in front of the application provides the HTTPS connection.',
    websiteLogsIntro:
        'When the website is accessed and when requests are made to the programming interface, the following data may be processed for technical reasons:',
    websiteLi1: 'IP address of the accessing device',
    websiteLi2: 'date and time of access',
    websiteLi3:
        'the page, file or API endpoint requested',
    websiteLi4:
        'HTTP status code and amount of data transferred',
    websiteLi5:
        'referrer URL, where transmitted by the browser',
    websiteLi6:
        'browser type, browser version and operating system',
    websitePurpose:
        'secure and stable delivery of the website, troubleshooting, and detection and prevention of misuse',
    websiteData:
        'technical access data including the IP address',
    websiteLegalBasis:
        'Art. 6(1)(f) GDPR, based on the legitimate interest in secure and functioning operation',
    websiteRecipients:
        'IONOS as the hosting provider, as well as the services operated by the controller for the reverse proxy, website, API, database and email delivery',
    websiteStorage:
        'There is currently no uniform calendar-based retention period for technical access and error logs. Retention depends on the respective technical log configuration and the purpose required for operation, security and troubleshooting.',
    websiteRateLimit:
        'To protect against automated requests and misuse, request rate limiting is active. Requests are counted temporarily based on technical characteristics such as the IP address.',
    websiteNoProfiles:
        'This data is not combined with other data sources, and no personal usage profiles are created.',
    placeholderLogRetention:
        'Before the public launch, a uniform calendar-based deletion period should be technically implemented and documented here for reverse proxy, web server and API logs. The current size-based rotation of the LokApp containers is not a fixed time-based retention period.',

    alphaTitle: 'Alpha registration and double opt-in',
    alphaP1:
        'Using the registration form, you can express your interest in the LokApp alpha. This processes your email address, your preferred platform and your explicit confirmation of the privacy information.',
    alphaP2:
        'Registration uses a double opt-in procedure. After you submit the form, you receive an email with a confirmation link. Your registration is only confirmed once you click that link. The confirmation link is valid for a limited time.',
    alphaP3:
        'To secure the procedure, the confirmation and unsubscribe tokens are stored only in hashed form. In addition, the registration status, a version of the privacy information and timestamps are stored.',
    alphaPurpose:
        'carrying out and confirming the alpha registration and contacting you in connection with the alpha',
    alphaData:
        'email address, preferred platform, consent and status information, hashed tokens, timestamps',
    alphaLegalBasis:
        'Art. 6(1)(a) GDPR, based on consent; consent can be withdrawn at any time with effect for the future',
    alphaRecipients:
        'own PostgreSQL database, own Mailcow email server and IONOS as the hosting provider of the server infrastructure',
    alphaStorage:
        'until consent is withdrawn or you unsubscribe; see “Retention period and deletion” for details',
    alphaVoluntary:
        'Providing this data is voluntary. Without an email address and confirmation of the privacy information, registration is technically not possible.',
    alphaNoAds:
        'The data collected for the alpha registration is not shared with advertising platforms and is not used for advertising beyond the described purpose.',

    emailTitle: 'Email delivery',
    emailP1:
        'Confirmation and procedural emails are sent via an own, self-operated email server on the server infrastructure used. No external newsletter or marketing provider is used for this.',
    emailP2:
        'Your email address is processed for delivery. Technical connection data required for reliable and secure delivery may arise during transport.',
    emailLegalBasis:
        'The legal basis is Art. 6(1)(a) GDPR in conjunction with Art. 6(1)(f) GDPR where necessary to carry out the confirmation procedure you initiated.',

    storageTitle: 'Storage in the database',
    storageP1:
        'The data collected in connection with the alpha registration and with polls is stored in a PostgreSQL database on the server infrastructure used for LokApp at IONOS.',
    storageP2:
        'Tokens for confirmation, unsubscription and limiting multiple submissions are not stored in plain text, but only as a cryptographic hash value.',

    pollsTitle: 'Polls and technical cookie',
    pollsP1:
        'Where an active poll is offered on the website, you can take part voluntarily. Depending on the poll, a choice or a free-text response may be stored on the server.',
    pollsP2:
        'To limit multiple submissions per browser, a random token is generated when you take part and set as a technically necessary cookie in your browser. Only the hash value of this token is stored in the database. No personal profiling takes place.',
    pollsCookieName: 'lokapp_poll_token',
    pollsCookiePurpose:
        'limiting multiple votes and multiple responses per browser',
    pollsCookieStorage:
        'cookie: HttpOnly, limited to the /api path, with a maximum lifetime of up to 12 months; only the hash value is stored in the database',
    pollsConsent:
        'Setting this cookie is required for the function you explicitly requested: taking part in the poll. The subsequent processing is based on Art. 6(1)(f) GDPR because of the legitimate interest in meaningful, non-manipulated results.',
    pollsTextNote:
        'For polls with a free-text response, please do not enter personal data such as names, addresses or contact details.',
    pollsLocalNote:
        'For settings you choose, the website uses your browser’s local storage, for example for the language, the dark or light appearance and a poll choice you already made. This information stays on your device and is not automatically transmitted to us.',

    recipientsTitle: 'Recipients and data processing',
    recipientsP1:
        'IONOS is used as the hosting provider for the technical delivery of the website. The website, API, database and email server are administered by the controller.',
    recipientsP2:
        'Personal data is not passed on or sold to third parties for advertising purposes. Disclosure only takes place where we are legally obliged to do so.',
    recipientsP3:
        'A transfer of personal data to third countries is not intended for the LokApp services currently used. The actual server location and the contractual arrangements with the hosting provider must be verified before the public launch.',
    placeholderHosting:
        'Before the public launch, verify and document that an appropriate data processing agreement pursuant to Art. 28 GDPR has been concluded with IONOS. The contractually agreed server location must also be verified.',

    retentionTitle: 'Retention period and deletion',
    retentionP1:
        'Personal data is stored only for as long as it is necessary for the respective purpose or as long as statutory retention obligations exist. After that, it is deleted or its processing is restricted.',
    retentionLi1:
        'alpha registration: until consent is withdrawn or you unsubscribe; then deletion or anonymisation',
    retentionLi2:
        'unconfirmed registrations: the confirmation link expires after seven days; the routine for finally deleting unconfirmed entries is to be defined before going live',
    retentionLi3:
        'server, reverse proxy and API log files: currently no uniformly configured calendar-based deletion period; define and document this technically before the public launch',
    retentionLi4:
        'polls: the hashed token is stored for the duration of the respective poll to limit multiple submissions',

    rightsTitle: 'Your rights',
    rightsP1:
        'Where the legal requirements are met, you have, in particular, the following rights regarding your personal data:',
    rightsLi1:
        'access to the data processed',
    rightsLi2:
        'rectification of inaccurate data',
    rightsLi3: 'erasure',
    rightsLi4:
        'restriction of processing',
    rightsLi5:
        'data portability',
    rightsLi6:
        'objection to processing',
    rightsWithdrawalTitle: 'Withdrawal of consent',
    rightsWithdrawal:
        'You can withdraw any consent given at any time with effect for the future, for example via the unsubscribe link or by a message to the contact address above. The lawfulness of processing carried out until withdrawal remains unaffected.',
    rightsComplaintTitle:
        'Right to lodge a complaint with a supervisory authority',
    rightsComplaint:
        'You have the right to lodge a complaint with a data protection supervisory authority about the processing of your personal data. The authority at the controller’s registered office is usually competent.',
    placeholderAuthority:
        'Before going live, the specific competent data protection supervisory authority and its contact details can be added here.',
    rightsContact:
        'To exercise your rights, a message to the contact address above is sufficient.',

    securityTitle: 'Data security',
    securityP1:
        'The connection to the website is encrypted via HTTPS/TLS. In addition, technical and organisational measures are used, such as storing tokens only as a hash value, request rate limiting, and access restrictions to the server infrastructure.',
    securityP2:
        'Despite careful measures, no transmission over the internet can guarantee complete security. The measures are adapted to the state of the art.',

    changesTitle: 'Changes to this privacy policy',
    changesP1:
        'This privacy policy is adapted when the website, the services used or the data processing change.',
    changesP2:
        'Before further features are activated, such as analytics services, cloud synchronisation, payments or subscriptions, this policy will be extended and reviewed again.',

    finalNote:
        'This privacy policy describes the current technical status of the website. It does not constitute legal advice and does not replace an individual legal review before a public launch. For legally binding interpretation under German law, the German version prevails.',
},
            termsPage: {
                metaTitle: 'Terms for website and alpha – LokApp',
                metaDescription: 'Terms for using the lokapp.de website and taking part in the LokApp alpha.',
                sectionNavigation: 'Page navigation',
                eyebrow: 'Legal information',
                title: 'Terms for the website and the alpha',
                subtitle: 'Terms for using the lokapp.de website and taking part in the LokApp alpha.',
                updated: 'Last updated: 1 July 2026',
                onThisPage: 'On this page',
                navScope: 'Scope',
                navSubject: 'Subject of the alpha',
                navParticipation: 'Participation',
                navFeedback: 'Feedback',
                navConduct: 'Rules of conduct',
                navAvailability: 'Availability',
                navLiability: 'Liability',
                navPrivacy: 'Privacy',
                navChanges: 'Changes',
                navLaw: 'Applicable law',
                scopeTitle: '1. Scope',
                scopeP1: 'These terms apply to the use of the lokapp.de website and to registration for and participation in the alpha phase of LokApp.',
                scopeP2: 'The provider is Schenk Software, Sebastian Schenk. You can find the full provider details in the legal notice.',
                scopeP3: 'These terms apply solely to the website and the alpha. A later paid offering of the app (for example subscriptions) would be governed by separate terms that will be provided and agreed at the relevant time.',
                subjectTitle: '2. Subject of the alpha registration',
                subjectP1: 'Through the website you can express your interest in taking part in the LokApp alpha. LokApp is an app for managing and documenting model railway collections and is at an early stage of development.',
                subjectP2: 'The alpha registration serves to give interested people early access and to collect feedback. It is not a purchase agreement and does not establish any paid subscription.',
                participationTitle: '3. Participation, voluntary nature and no remuneration',
                participationP1: 'Registration and participation in the alpha are voluntary and free of charge for you.',
                participationP2: 'There is no entitlement to participation, to access to the alpha, to specific features or to later public access. The number of test places may be limited.',
                participationP3: 'There is no entitlement to remuneration for feedback or testing. Likewise, there is no obligation to actually use the alpha.',
                participationP4: 'You can end your participation at any time, in particular via the unsubscribe link in the confirmation email or a subsequent email.',
                feedbackTitle: '4. Feedback',
                feedbackP1: 'Feedback, bug reports and improvement suggestions are welcome but voluntary.',
                feedbackP2: 'There is no obligation to implement submitted feedback. If you submit suggestions, they may be used to improve LokApp. Beyond the permission required for this, you are not asked to transfer any further rights; your statutory rights remain unaffected.',
                conductTitle: '5. Rules of conduct',
                conductP1: 'Applicable law must be observed when using the website and the alpha. In particular:',
                conductLi1: 'no use for unlawful purposes',
                conductLi2: 'no impairment, overloading or circumvention of the technical infrastructure and security measures',
                conductLi3: 'no automated bulk querying of the website or the interfaces',
                conductP2: 'You are responsible for the content you enter in the app. You should only use content for which you hold the necessary rights.',
                availabilityTitle: '6. Availability and further development',
                availabilityP1: 'LokApp is under active development. The app and the website may contain errors, change or be temporarily unavailable.',
                availabilityP2: 'The alpha may be adapted, limited in scope, paused or ended at any time. During the alpha, changes, resets or data loss may occur; you should therefore additionally back up important data.',
                liabilityTitle: '7. Liability',
                liabilityP1: 'For damage arising from injury to life, body or health, and in the case of intent and gross negligence, we are liable in accordance with the statutory provisions.',
                liabilityP2: 'In the case of slight negligence, we are only liable for the breach of an essential contractual obligation (an obligation whose fulfilment makes proper use possible in the first place and on whose observance you may regularly rely), and limited in amount to the foreseeable damage typical of this type of contract.',
                liabilityP3: 'Mandatory statutory liability, in particular under the German Product Liability Act, remains unaffected. As the alpha is provided free of charge, the statutory liability reliefs for gratuitous provision also apply where applicable.',
                liabilityP4: 'This does not amount to a blanket exclusion of liability; mandatory statutory rights remain in place in any event.',
                privacyTitle: '8. Privacy',
                privacyP1: 'You can find information about the processing of personal data in connection with the website and the alpha in the privacy policy.',
                privacyLink: 'To the privacy policy',
                changesTitle: '9. Changes to these terms',
                changesP1: 'These terms may be adapted when the website, the alpha or the legal framework change.',
                changesP2: 'The current version is available on this page. For processes already completed, the version valid at the relevant time applies.',
                lawTitle: '10. Applicable law and final provisions',
                lawP1: 'The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods.',
                lawP2: 'If you are a consumer with your habitual residence in another country, the mandatory consumer protection provisions of your country of residence remain unaffected; this choice of law does not restrict them.',
                lawP3: 'Should any provision of these terms be or become invalid, the validity of the remaining provisions remains unaffected. The statutory provisions apply in place of an invalid provision.',
                finalNote: 'These terms describe the current status of the website and the alpha. They do not constitute legal advice and do not replace an individual legal review before a public launch. For legally binding interpretation under German law, the German version prevails.',
            },
        },

        nl: {
            meta: {
                title: 'LokApp – Je modelspoorcollectie vastleggen en terugvinden',
                description:
                    'LokApp is de app voor modelspoorverzamelaars: leg locomotieven, wagons, gebouwen en accessoires vast met foto’s, modelnummers en details – en vind elk model snel terug thuis, in de vitrinekast of op een beurs.',
                ogDescription:
                    'Leg locomotieven, wagons, gebouwen en accessoires vast met foto’s, modelnummers en details – en vind elk model thuis, in de vitrinekast of op een beurs terug.',
            },
            accessibility: {
                skipToContent: 'Ga naar inhoud',
                home: 'LokApp startpagina',
                mainNavigation: 'Hoofdnavigatie',
                mobileNavigation: 'Mobiele navigatie',
                selectLanguage: 'Kies taal',
                appPreview:
                    'Voorbeeld van LokApp met een voorbeeldcollectie van locomotieven, wagons en gebouwen',
                modelDetail:
                    'Voorbeeld van modelgegevens in LokApp met benaming, categorie, spoorbreedte en tijdperk',
            },
            navigation: {
                home: 'Startpagina',
                features: 'Functies',
                roadmap: 'Roadmap',
                poll: 'Enquête',
                alpha: 'Aanmelden voor alpha',
            },
            language: {
                de: 'Deutsch',
                en: 'English',
                nl: 'Nederlands',
                es: 'Español',
            },
            theme: {
                enableLight: 'Lichte modus inschakelen',
                enableDark: 'Donkere modus inschakelen',
                switch: 'Donkere / lichte modus wisselen',
            },
            mobileMenu: {
                open: 'Menu openen',
                close: 'Menu sluiten',
            },
            hero: {
                eyebrow: 'Voor modelspoorverzamelaars',
                title: 'Houd elk model uit je verzameling in beeld.',
                description:
                    'LokApp legt locomotieven, wagons, gebouwen en accessoires vast met foto’s, modelnummers en details – zodat je thuis, in de vitrinekast of op een beurs meteen weet welk model je al hebt.',
                primaryCta: 'Aanmelden voor de alpha',
                secondaryCta: 'Zo werkt LokApp',
                alphaStatus: 'Momenteel in de alpha-fase',
                platforms: 'Voor iPhone en Android',
            },
            preview: {
                collectionEyebrow: 'Mijn verzameling',
                collectionTitle: 'Locomotieven & wagons',
                search: 'Zoek model of nummer',
                locomotives: 'Locomotieven',
                wagons: 'Wagons',
                buildings: 'Gebouwen',
                accessories: 'Accessoires',
                locomotiveMeta: 'Diesellocomotief · Tijdperk IV',
                wagonMeta: 'Stuurstandrijtuig · Tijdperk IV',
                buildingMeta: 'Gebouw · Spoor H0',
            },
            workflow: {
                eyebrow: 'Zo werk je met LokApp',
                title: 'Van nieuw model tot snel terugvinden.',
                description:
                    'LokApp begeleidt elke stap die een model in je verzameling doorloopt – van vastleggen en documenteren tot opzoeken onderweg.',
                stepOneLabel: 'Vastleggen',
                stepOneTitle: 'Model toevoegen',
                stepOneText:
                    'Voeg een locomotief, wagon, gebouw of accessoire toe met naam, categorie, spoorbreedte en tijdperk.',
                fieldName: 'Benaming',
                fieldNameValue: 'BR 218 447-3',
                fieldCategory: 'Categorie',
                fieldCategoryValue: 'Diesellocomotief',
                stepTwoLabel: 'Documenteren',
                stepTwoTitle: 'Foto’s en details bewaren',
                stepTwoText:
                    'Sla foto’s, modelnummer, conditie en eigen notities direct bij het model op.',
                stepThreeLabel: 'Terugvinden',
                stepThreeTitle: 'Onderweg opzoeken',
                stepThreeText:
                    'Controleer op een beurs in enkele seconden of een model al in je verzameling staat.',
                searchValue: '218',
                collectionResult: 'Al in verzameling',
            },
            roadmap: {
                eyebrow: 'Ontwikkeling',
                title: 'LokApp ontwikkelt zich met elke echte toepassing verder.',
                description:
                    'Van het eerste idee en een kleine alpha-versie tot de volgende openbare stap. Stabiliteit, eerlijke feedback en een goede dagelijkse ervaring voor verzamelaars blijven centraal staan.',
                ideaDate: '2025',
                ideaTitle: 'Idee en eerste alpha',
                ideaSummary:
                    'De eerste versie van LokApp gaat in alpha met een kleine groep gebruikers.',
                ideaDetails:
                    'Het idee ontstond uit de behoefte om een groeiende modelspoorverzameling eindelijk overzichtelijk op één plek vast te leggen. Daaruit ontstond een eerste Android-versie die al met enkele gebruikers werd getest.',
                coreDate: 'Voorjaar 2026',
                coreTitle: 'LokApp wordt opnieuw opgebouwd',
                coreSummary:
                    'De basis voor een moderne en stabiele verzamelapp krijgt vorm.',
                coreDetails:
                    'LokApp werd opnieuw opgebouwd voor iPhone en Android: verzameling, categorieën, foto’s, zoeken, filters en belangrijke details werden stap voor stap samengebracht in één duidelijke app.',
                alphaDate: 'Nu',
                alphaTitle: 'Afronden voor de alpha-launch',
                alphaSummary:
                    'Polijsten, fouten oplossen en de laatste belangrijke processen.',
                alphaDetails:
                    'De focus ligt nu op een nette alpha-start: gebruiksgemak verbeteren, fouten vinden, stabiliteit verhogen en de app voorbereiden voor de eerste nieuwe testers.',
                customizationDate: 'Gepland',
                customizationTitle: 'Publicatie en feedback',
                customizationSummary:
                    'Gebruikerswensen verwerken, LokApp verder ontwikkelen en abonnementen voorbereiden.',
                customizationDetails:
                    'Na de alpha-launch ontwikkelt LokApp verder met echte feedback. Gepland zijn verbeteringen op basis van gebruikerswensen en de voorbereiding en invoering van een abonnementsmodel.',
                cloudDate: 'In voorbereiding',
                cloudTitle: 'Meer weergaven en tablet',
                cloudSummary:
                    'Rasterweergave, lijstweergave en een betere ervaring op tablets.',
                cloudDetails:
                    'Extra weergaven voor de verzameling zijn in voorbereiding, waaronder raster- en lijstweergave, samen met een geoptimaliseerde tabletversie voor meer overzicht op grotere schermen.',
            },
            poll: {
                eyebrow: 'Denk mee',
                title: 'Bepaal mee wat LokApp hierna beter maakt.',
                description:
                    'Neem deel aan onze community-enquête en help komende wijzigingen en functies voor LokApp te prioriteren.',
                status: 'Community-enquête',
                question:
                    'Welke functie zou voor jou hierna het belangrijkst zijn?',
                hint:
                    'Kies de functie die je in het dagelijks verzamelen het meest zou helpen.',
                optionTypeDefaults: 'Type Defaults',
                optionTypeDefaultsDescription:
                    'Terugkerende waarden voor bepaalde modeltypen sneller overnemen.',
                optionImages: 'Meerdere foto’s per model',
                optionImagesDescription:
                    'Meer aanzichten, details en bijzondere kenmerken direct bij een model vastleggen.',
                optionSearch: 'Uitgebreid zoeken en filters',
                optionSearchDescription:
                    'Zoek sneller in je verzameling op nummers, typen of eigenschappen.',
                optionAttributes: 'Eigen onderdelen en attributen',
                optionAttributesDescription:
                    'Pas LokApp beter aan je eigen verzameling en werkwijze aan.',
                stored:
                    'Bedankt voor je stem. Je helpt daarmee de volgende verbeteringen voor LokApp te bepalen.',
                communityLater:
                    'De resultaten hebben direct invloed op de verdere ontwikkeling van LokApp.',
            },
            origin: {
                eyebrow: 'Waarom LokApp is ontstaan',
                title: 'Ontstaan uit het dagelijks leven met een groeiende verzameling.',
                first:
                    'Hoe meer locomotieven, wagons, gebouwen en accessoires erbij komen, hoe lastiger het wordt om overzicht te houden. Informatie belandt in lijsten, tabellen, foto’s op je telefoon en in je hoofd – wat kan leiden tot dubbele aankopen en lang zoeken.',
                second:
                    'LokApp brengt deze informatie samen op één plek: elk model met foto’s, modelnummer, categorie en eigen notities. Zo blijft de verzameling overzichtelijk bij de baan, tijdens het sorteren en op een beurs.',
                closing:
                    'Uit een echte verzameling. Voor iedereen die overzicht wil houden.',
                link: 'Meer over de ontwikkeling',
                category: 'Categorie',
                categoryValue: 'Locomotief',
                gauge: 'Spoorbreedte',
                epoch: 'Tijdperk',
                location: 'Locatie',
                locationValue: 'Vitrinekast 2',
                modelType: 'Diesellocomotief',
            },
            alpha: {
                eyebrow: 'Er vroeg bij zijn',
                title: 'Test LokApp in de alpha en deel je ervaring.',
                description:
                    'Meld je aan voor de alpha, probeer LokApp met je eigen verzameling en vertel wat er in het dagelijks verzamelen ontbreekt of beter kan.',
                cta: 'Aanmelden voor de alpha',
                unavailable: 'Aanmelden voor de alpha wordt binnenkort geactiveerd.',
            },
            alphaPage: {
                metaTitle: 'Aanmelden voor de LokApp Alpha – LokApp',
                metaDescription:
                    'Meld je aan voor de LokApp alpha en help de app voor modelspoorverzamelaars beter te maken.',
                mobileAlpha: 'Alpha',
                eyebrow: 'LokApp Alpha',
                title: 'Doe er vroeg bij en help LokApp vorm te geven.',
                description:
                    'Test LokApp vóór de openbare lancering en help met eerlijke feedback de app voor modelspoorverzamelaars beter te maken.',
                emailLabel: 'E-mailadres',
                platformLabel: 'Op welk platform wil je LokApp testen?',
                platformPlaceholder: 'Maak een keuze',
                platformIos: 'iPhone / iPad',
                platformAndroid: 'Android',
                platformMultiple: 'Meerdere platforms',
                privacyBefore: 'Ik heb de',
                privacyAfter:
                    'gelezen en ga akkoord met de verwerking van mijn gegevens voor de alpha-aanmelding.',
                submit: 'Interesse voor de alpha aanmelden',
                infoLabel: 'Informatie over de alpha',
                cardOneTitle: 'Vroeg testen',
                cardOneText:
                    'Je ontvangt LokApp vóór de openbare lancering en kunt de belangrijkste onderdelen met je eigen verzameling uitproberen.',
                cardTwoTitle: 'Direct feedback geven',
                cardTwoText:
                    'Vertel ons wat goed aanvoelt, wat ontbreekt en wat bij een echte verzameling echt praktisch zou zijn.',
                cardThreeTitle: 'Geen verplichting',
                cardThreeText:
                    'De alpha is vrijwillig. Je kunt op elk moment beslissen of je wilt blijven testen of geen verdere informatie meer wilt ontvangen.',
            },
            footer: {
                description: 'LokApp is een product van Schenk Software.',
                rights: '© 2026 Schenk Software. Alle rechten voorbehouden.',
                navigation: 'Footer-navigatie',
                imprint: 'Colofon',
                privacy: 'Privacy',
                terms: 'Voorwaarden',
                company: 'Schenk Software',
            },
            imprintPage: {
                metaTitle: 'Colofon – LokApp',
                metaDescription: 'Colofon van LokApp en Schenk Software.',
                mobileAlpha: 'Alpha',
                sectionNavigation: 'Paginanavigatie',
                eyebrow: 'Juridische informatie',
                title: 'Colofon',
                subtitle: 'Juridische informatie over LokApp en Schenk Software.',
                updated: 'Bijgewerkt: 1 juli 2026',
                onThisPage: 'Op deze pagina',
                sectionBusiness: 'Aanbiedersinformatie',
                sectionContact: 'Contact',
                sectionVat: 'Btw',
                sectionDispute: 'Geschillenbeslechting',
                sectionCopyright: 'Auteursrecht',
                productLabel: 'Product',
                productValue: 'LokApp is een product van Schenk Software.',
                emailLabel: 'E-mail',
                websiteLabel: 'Website',
                vatTitle: 'Btw-identificatienummer',
                vatText: 'Btw-identificatienummer volgens § 27a UStG:',
                vatNote:
                    'Verwijder dit onderdeel vóór publicatie als er geen btw-identificatienummer bestaat.',
                disputeTitle: 'Geschillenbeslechting voor consumenten',
                disputeText:
                    'Wij zijn niet verplicht en niet bereid om deel te nemen aan geschillenbeslechting voor een consumentenbemiddelingsinstantie.',
                disputeNote:
                    'Deze tekst mag alleen worden gebruikt wanneer hij daadwerkelijk op jouw onderneming van toepassing is.',
                copyrightTitle: 'Auteursrecht',
                copyrightTextOne:
                    'De inhoud, afbeeldingen, teksten en ontwerpelementen van deze website vallen, tenzij anders vermeld, onder het Duitse auteursrecht.',
                copyrightTextTwo:
                    'Vermenigvuldiging, bewerking of verspreiding buiten de grenzen van het auteursrecht vereist voorafgaande schriftelijke toestemming van de betreffende rechthebbende.',
                finalNote:
                    'Dit colofon is technisch voorbereid, maar bevat nog niet je definitieve bedrijfs- en contactgegevens. Laat het vóór een openbare lancering juridisch controleren.',
            },

           privacyPage: {
    metaTitle: 'Privacyverklaring – LokApp',
    metaDescription:
        'Privacyverklaring voor de website lokapp.de: serverlogs, alpha-aanmelding, e-mailverzending, enquêtes en je rechten.',
    sectionNavigation: 'Paginanavigatie',
    eyebrow: 'Privacy',
    title: 'Privacyverklaring',
    subtitle:
        'Informatie over de verwerking van persoonsgegevens op de website lokapp.de.',
    updated: 'Bijgewerkt: 2 juli 2026',
    onThisPage: 'Op deze pagina',

    navResponsible: 'Verwerkingsverantwoordelijke',
    navOverview: 'Overzicht',
    navWebsite: 'Website en serverlogs',
    navAlpha: 'Alpha-aanmelding',
    navEmail: 'E-mailverzending',
    navStorage: 'Opslag in de database',
    navPolls: 'Enquêtes en cookie',
    navRecipients: 'Ontvangers',
    navRetention: 'Bewaartermijn',
    navRights: 'Je rechten',
    navSecurity: 'Gegevensbeveiliging',
    navChanges: 'Wijzigingen',

    purposeLabel: 'Doel',
    dataLabel: 'Gegevenscategorieën',
    legalBasisLabel: 'Rechtsgrond',
    recipientsLabel: 'Ontvangers',
    storageLabel: 'Bewaartermijn',
    voluntaryLabel: 'Vrijwilligheid',
    placeholderLabel: 'Voor livegang controleren',

    responsibleTitle: 'Verwerkingsverantwoordelijke',
    responsibleIntro:
        'Verantwoordelijk voor de verwerking van persoonsgegevens op deze website in de zin van de Algemene verordening gegevensbescherming (AVG) is:',
    responsibleContactIntro:
        'Contact voor privacyvragen:',

    overviewTitle: 'Overzicht van de gegevensverwerking',
    overviewP1:
        'Deze privacyverklaring legt uit welke persoonsgegevens worden verwerkt wanneer je de website lokapp.de bezoekt en de functies ervan gebruikt, voor welke doeleinden dat gebeurt en welke rechten je hebt.',
    overviewP2:
        'lokapp.de is een grotendeels statische website. Er worden geen advertentie- of analysediensten, geen tracking over websites heen, geen device-fingerprinting en geen lettertypen van externe servers gebruikt.',
    overviewP3:
        'Persoonsgegevens worden vooral in drie situaties verwerkt: bij het technisch opvragen van de website, bij een vrijwillige aanmelding voor de alpha en bij deelname aan een enquête, voor zover die wordt aangeboden.',

    websiteTitle: 'Aanbieden van de website en serverlogbestanden',
    websiteP1:
        'De website draait op een virtuele server van hostingprovider IONOS en wordt technisch beheerd door de verwerkingsverantwoordelijke. Vóór de toepassing staat een reverse proxy die de HTTPS-verbinding verzorgt.',
    websiteLogsIntro:
        'Bij het opvragen van de website en bij verzoeken aan de programmeerinterface (API) kunnen om technische redenen de volgende gegevens worden verwerkt:',
    websiteLi1: 'IP-adres van het opvragende apparaat',
    websiteLi2: 'datum en tijdstip van de toegang',
    websiteLi3: 'opgevraagde pagina, bestand of API-eindpunt',
    websiteLi4: 'HTTP-statuscode en hoeveelheid overgedragen gegevens',
    websiteLi5:
        'referrer-URL, voor zover door de browser doorgegeven',
    websiteLi6:
        'browsertype, browserversie en besturingssysteem',
    websitePurpose:
        'veilige en stabiele levering van de website, foutanalyse en het herkennen en tegengaan van misbruik',
    websiteData:
        'technische toegangsgegevens inclusief het IP-adres',
    websiteLegalBasis:
        'art. 6, lid 1, onder f, AVG (gerechtvaardigd belang bij een veilige, goed werkende exploitatie)',
    websiteRecipients:
        'IONOS als hostingprovider, evenals de door de verwerkingsverantwoordelijke beheerde diensten voor reverse proxy, website, API, database en e-mailverzending',
    websiteStorage:
        'Er bestaat momenteel geen uniforme kalendergebonden bewaartermijn voor technische toegangs- en foutlogs. De bewaartermijn hangt af van de betreffende technische logconfiguratie en het doel dat nodig is voor exploitatie, beveiliging en foutanalyse.',
    websiteRateLimit:
        'Ter bescherming tegen geautomatiseerde verzoeken en misbruik is een beperking van de verzoekfrequentie actief. Verzoeken worden kortstondig geteld op basis van technische kenmerken zoals het IP-adres.',
    websiteNoProfiles:
        'Deze gegevens worden niet met andere gegevensbronnen samengevoegd en er worden geen persoonlijke gebruiksprofielen gemaakt.',
    placeholderLogRetention:
        'Vóór de openbare lancering moet voor reverse-proxy-, webserver- en API-logs technisch een uniforme kalendergebonden verwijdertermijn worden ingesteld en hier worden gedocumenteerd. De huidige groottegebonden rotatie van de LokApp-containers is geen vaste bewaartermijn in dagen.',

    alphaTitle: 'Alpha-aanmelding en dubbele opt-in',
    alphaP1:
        'Via het aanmeldformulier kun je je interesse in de LokApp alpha kenbaar maken. Daarbij worden je e-mailadres, het gewenste platform en je uitdrukkelijke bevestiging van de privacy-informatie verwerkt.',
    alphaP2:
        'De aanmelding verloopt via een dubbele opt-in: na het verzenden ontvang je een e-mail met een bevestigingslink. Pas als je op die link klikt, wordt je aanmelding bevestigd. De bevestigingslink is beperkt geldig.',
    alphaP3:
        'Ter beveiliging van de procedure worden de bevestigings- en afmeldtoken uitsluitend in gehashte vorm opgeslagen. Daarnaast worden de status van de aanmelding, een versie van de privacy-informatie en tijdstempels opgeslagen.',
    alphaPurpose:
        'het uitvoeren en bevestigen van de alpha-aanmelding en contact opnemen in verband met de alpha',
    alphaData:
        'e-mailadres, gewenst platform, toestemmings- en statusinformatie, gehashte tokens, tijdstempels',
    alphaLegalBasis:
        'art. 6, lid 1, onder a, AVG (toestemming); de toestemming kan te allen tijde met werking voor de toekomst worden ingetrokken',
    alphaRecipients:
        'eigen PostgreSQL-database, eigen Mailcow-e-mailserver en IONOS als hostingprovider van de serverinfrastructuur',
    alphaStorage:
        'tot intrekking van de toestemming of afmelding; zie „Bewaartermijn en verwijdering” voor details',
    alphaVoluntary:
        'Het verstrekken van deze gegevens is vrijwillig. Zonder e-mailadres en bevestiging van de privacy-informatie is aanmelding technisch niet mogelijk.',
    alphaNoAds:
        'De voor de alpha-aanmelding verzamelde gegevens worden niet gedeeld met advertentieplatforms en niet gebruikt voor reclame buiten het beschreven doel.',

    emailTitle: 'E-mailverzending',
    emailP1:
        'De bevestigings- en procedure-e-mails worden verzonden via een eigen, zelf beheerde e-mailserver op de gebruikte serverinfrastructuur. Hiervoor wordt geen externe nieuwsbrief- of marketingdienstverlener gebruikt.',
    emailP2:
        'Voor de bezorging wordt je e-mailadres verwerkt. Bij het transport kunnen technische verbindingsgegevens ontstaan die nodig zijn voor een betrouwbare en veilige verzending.',
    emailLegalBasis:
        'De rechtsgrond is art. 6, lid 1, onder a, AVG in samenhang met art. 6, lid 1, onder f, AVG, voor zover dit nodig is voor de uitvoering van de door jou gestarte bevestigingsprocedure.',

    storageTitle: 'Opslag in de database',
    storageP1:
        'De in verband met de alpha-aanmelding en met enquêtes verzamelde gegevens worden opgeslagen in een PostgreSQL-database op de voor LokApp gebruikte serverinfrastructuur bij IONOS.',
    storageP2:
        'Tokens voor bevestiging, afmelding en het beperken van meervoudige inzendingen worden niet in platte tekst opgeslagen, maar uitsluitend als cryptografische hashwaarde.',

    pollsTitle: 'Enquêtes en technische cookie',
    pollsP1:
        'Voor zover op de website een actieve enquête wordt aangeboden, kun je daar vrijwillig aan deelnemen. Afhankelijk van de enquête kan een keuze of een vrije-tekstantwoord op de server worden opgeslagen.',
    pollsP2:
        'Om meervoudige inzendingen per browser te beperken, wordt bij deelname een willekeurig token gegenereerd en als technisch noodzakelijke cookie in je browser geplaatst. In de database wordt alleen de hashwaarde van dit token opgeslagen. Er vindt geen profilering van personen plaats.',
    pollsCookieName: 'lokapp_poll_token',
    pollsCookiePurpose:
        'beperking van meervoudig stemmen en meervoudig antwoorden per browser',
    pollsCookieStorage:
        'cookie: HttpOnly, beperkt tot het pad /api, met een maximale looptijd van maximaal twaalf maanden; in de database wordt alleen de hashwaarde opgeslagen',
    pollsConsent:
        'Het plaatsen van deze cookie is nodig voor de door jou uitdrukkelijk gewenste functie: deelname aan de enquête. De daaropvolgende verwerking is gebaseerd op art. 6, lid 1, onder f, AVG wegens het gerechtvaardigd belang bij betekenisvolle, niet-gemanipuleerde resultaten.',
    pollsTextNote:
        'Bij enquêtes met een vrije-tekstantwoord vragen we je geen persoonsgegevens zoals namen, adressen of contactgegevens in te voeren.',
    pollsLocalNote:
        'Voor door jou gekozen instellingen gebruikt de website de lokale opslag van je browser, bijvoorbeeld voor de taal, de donkere of lichte weergave en een reeds gemaakte enquêtekeuze. Deze informatie blijft op je apparaat en wordt niet automatisch naar ons verzonden.',

    recipientsTitle: 'Ontvangers en verwerking in opdracht',
    recipientsP1:
        'IONOS wordt gebruikt als hostingprovider voor de technische beschikbaarstelling van de website. De website, API, database en e-mailserver worden door de verwerkingsverantwoordelijke zelf beheerd.',
    recipientsP2:
        'Persoonsgegevens worden niet aan derden doorgegeven of verkocht voor reclamedoeleinden. Openbaarmaking vindt alleen plaats als we daartoe wettelijk verplicht zijn.',
    recipientsP3:
        'Een doorgifte van persoonsgegevens naar derde landen is voor de momenteel gebruikte LokApp-diensten niet voorzien. De daadwerkelijke serverlocatie en de contractuele afspraken met de hostingprovider moeten vóór de openbare lancering worden gecontroleerd.',
    placeholderHosting:
        'Vóór de openbare lancering moet worden gecontroleerd en gedocumenteerd dat met IONOS een passende verwerkersovereenkomst op grond van art. 28 AVG is gesloten. Ook de contractueel overeengekomen serverlocatie moet worden gecontroleerd.',

    retentionTitle: 'Bewaartermijn en verwijdering',
    retentionP1:
        'Persoonsgegevens worden alleen bewaard zolang dit voor het betreffende doel noodzakelijk is of wettelijke bewaarplichten bestaan. Daarna worden ze verwijderd of in verwerking beperkt.',
    retentionLi1:
        'alpha-aanmelding: tot intrekking van de toestemming of afmelding; daarna verwijdering of anonimisering',
    retentionLi2:
        'niet-bevestigde aanmeldingen: de bevestigingslink verloopt na zeven dagen; de routine voor het definitief verwijderen van niet-bevestigde vermeldingen wordt vóór livegang bepaald',
    retentionLi3:
        'server-, reverse-proxy- en API-logbestanden: momenteel geen uniform geconfigureerde kalendergebonden verwijdertermijn; vóór de openbare lancering technisch vastleggen en documenteren',
    retentionLi4:
        'enquêtes: het gehashte token wordt voor de duur van de betreffende enquête bewaard om meervoudige inzendingen te beperken',

    rightsTitle: 'Je rechten',
    rightsP1:
        'Voor zover aan de wettelijke voorwaarden is voldaan, heb je met betrekking tot je persoonsgegevens in het bijzonder de volgende rechten:',
    rightsLi1:
        'inzage in de verwerkte gegevens',
    rightsLi2:
        'rectificatie van onjuiste gegevens',
    rightsLi3: 'wissing',
    rightsLi4:
        'beperking van de verwerking',
    rightsLi5:
        'overdraagbaarheid van gegevens',
    rightsLi6:
        'bezwaar tegen de verwerking',
    rightsWithdrawalTitle: 'Intrekking van de toestemming',
    rightsWithdrawal:
        'Een verleende toestemming kun je te allen tijde met werking voor de toekomst intrekken, bijvoorbeeld via de afmeldlink of via een bericht aan het bovengenoemde contactadres. De rechtmatigheid van de verwerking tot aan de intrekking blijft onaangetast.',
    rightsComplaintTitle:
        'Recht om een klacht in te dienen bij een toezichthoudende autoriteit',
    rightsComplaint:
        'Je hebt het recht om een klacht over de verwerking van je persoonsgegevens in te dienen bij een toezichthoudende autoriteit voor gegevensbescherming. Doorgaans is de autoriteit op de vestigingsplaats van de verwerkingsverantwoordelijke bevoegd.',
    placeholderAuthority:
        'Vóór de openbare lancering kan hier de concrete bevoegde toezichthoudende autoriteit met contactgegevens worden aangevuld.',
    rightsContact:
        'Voor het uitoefenen van je rechten volstaat een bericht aan het bovengenoemde contactadres.',

    securityTitle: 'Gegevensbeveiliging',
    securityP1:
        'De verbinding met de website is versleuteld via HTTPS/TLS. Daarnaast worden technische en organisatorische maatregelen gebruikt, zoals het uitsluitend als hashwaarde opslaan van tokens, een beperking van de verzoekfrequentie en toegangsbeperkingen tot de serverinfrastructuur.',
    securityP2:
        'Ondanks zorgvuldige maatregelen kan geen enkele overdracht via internet volledige veiligheid garanderen. De maatregelen worden aangepast aan de stand van de techniek.',

    changesTitle: 'Wijzigingen van deze privacyverklaring',
    changesP1:
        'Deze privacyverklaring wordt aangepast wanneer de website, de gebruikte diensten of de gegevensverwerkingen veranderen.',
    changesP2:
        'Vóór de activering van verdere functies, zoals analysediensten, cloudsynchronisatie, betalingen of abonnementen, wordt deze verklaring uitgebreid en opnieuw gecontroleerd.',

    finalNote:
        'Deze privacyverklaring beschrijft de huidige technische status van de website. Ze vormt geen juridisch advies en vervangt geen individuele juridische controle vóór een openbare lancering. Voor de juridisch bindende uitleg naar Duits recht is de Duitse versie doorslaggevend.',
},

            termsPage: {
                metaTitle: 'Voorwaarden voor website en alpha – LokApp',
                metaDescription: 'Voorwaarden voor het gebruik van de website lokapp.de en deelname aan de LokApp alpha.',
                sectionNavigation: 'Paginanavigatie',
                eyebrow: 'Juridische informatie',
                title: 'Voorwaarden voor website en alpha',
                subtitle: 'Voorwaarden voor het gebruik van de website lokapp.de en deelname aan de LokApp alpha.',
                updated: 'Bijgewerkt: 1 juli 2026',
                onThisPage: 'Op deze pagina',
                navScope: 'Toepassingsgebied',
                navSubject: 'Onderwerp van de alpha',
                navParticipation: 'Deelname',
                navFeedback: 'Feedback',
                navConduct: 'Gedragsregels',
                navAvailability: 'Beschikbaarheid',
                navLiability: 'Aansprakelijkheid',
                navPrivacy: 'Privacy',
                navChanges: 'Wijzigingen',
                navLaw: 'Toepasselijk recht',
                scopeTitle: '1. Toepassingsgebied',
                scopeP1: 'Deze voorwaarden gelden voor het gebruik van de website lokapp.de en voor de aanmelding voor en deelname aan de alpha-fase van LokApp.',
                scopeP2: 'Aanbieder is Schenk Software, Sebastian Schenk. De volledige aanbiedersgegevens vind je in het colofon.',
                scopeP3: 'Deze voorwaarden gelden uitsluitend voor de website en de alpha. Voor een later, betaald aanbod van de app (bijvoorbeeld abonnementen) zouden afzonderlijke voorwaarden gelden die op dat moment worden verstrekt en overeengekomen.',
                subjectTitle: '2. Onderwerp van de alpha-aanmelding',
                subjectP1: 'Via de website kun je je interesse in deelname aan de LokApp alpha kenbaar maken. LokApp is een app voor het beheren en documenteren van modelspoorverzamelingen en bevindt zich in een vroeg ontwikkelingsstadium.',
                subjectP2: 'De alpha-aanmelding is bedoeld om geïnteresseerden vroeg toegang te geven en feedback te verzamelen. Het is geen koopovereenkomst en vestigt geen betaald abonnement.',
                participationTitle: '3. Deelname, vrijwilligheid en geen vergoeding',
                participationP1: 'Aanmelding en deelname aan de alpha zijn vrijwillig en voor jou kosteloos.',
                participationP2: 'Er bestaat geen recht op deelname, op toegang tot de alpha, op bepaalde functies of op latere openbare toegang. Het aantal testplaatsen kan worden beperkt.',
                participationP3: 'Voor feedback of testen bestaat geen recht op vergoeding. Evenmin bestaat er een verplichting om de alpha daadwerkelijk te gebruiken.',
                participationP4: 'Je kunt je deelname op elk moment beëindigen, met name via de afmeldlink in de bevestigingsmail of een volgende e-mail.',
                feedbackTitle: '4. Feedback',
                feedbackP1: 'Feedback, foutmeldingen en verbetersuggesties zijn welkom, maar vrijwillig.',
                feedbackP2: 'Er bestaat geen verplichting om ingediende feedback door te voeren. Als je suggesties indient, mogen deze worden gebruikt om LokApp te verbeteren. Buiten de daarvoor benodigde toestemming wordt niet gevraagd om verdere rechten over te dragen; je wettelijke rechten blijven onaangetast.',
                conductTitle: '5. Gedragsregels',
                conductP1: 'Bij het gebruik van de website en de alpha moet het geldende recht in acht worden genomen. In het bijzonder geldt:',
                conductLi1: 'geen gebruik voor onrechtmatige doeleinden',
                conductLi2: 'geen belemmering, overbelasting of omzeiling van de technische infrastructuur en beveiligingsmaatregelen',
                conductLi3: 'geen geautomatiseerde massale bevraging van de website of de interfaces',
                conductP2: 'Voor de inhoud die je in de app invoert, ben je zelf verantwoordelijk. Gebruik alleen inhoud waarvoor je de benodigde rechten bezit.',
                availabilityTitle: '6. Beschikbaarheid en doorontwikkeling',
                availabilityP1: 'LokApp is in actieve ontwikkeling. De app en de website kunnen fouten bevatten, veranderen of tijdelijk niet beschikbaar zijn.',
                availabilityP2: 'De alpha kan op elk moment worden aangepast, in omvang worden beperkt, worden gepauzeerd of worden beëindigd. Tijdens de alpha kunnen wijzigingen, resets of gegevensverlies optreden; maak daarom een extra back-up van belangrijke gegevens.',
                liabilityTitle: '7. Aansprakelijkheid',
                liabilityP1: 'Voor schade door letsel aan leven, lichaam of gezondheid en bij opzet en grove nalatigheid zijn wij aansprakelijk volgens de wettelijke bepalingen.',
                liabilityP2: 'Bij lichte nalatigheid zijn wij alleen aansprakelijk bij schending van een wezenlijke contractuele verplichting (een verplichting waarvan de nakoming correct gebruik überhaupt mogelijk maakt en op de naleving waarvan je regelmatig mag vertrouwen), en in hoogte beperkt tot de voorzienbare, typisch optredende schade.',
                liabilityP3: 'Dwingende wettelijke aansprakelijkheid, in het bijzonder op grond van de Duitse Wet productaansprakelijkheid, blijft onaangetast. Omdat de alpha kosteloos wordt aangeboden, gelden bovendien de wettelijke aansprakelijkheidsverlichtingen voor kosteloze terbeschikkingstelling, voor zover van toepassing.',
                liabilityP4: 'Dit vormt geen algemene uitsluiting van aansprakelijkheid; dwingende wettelijke rechten blijven in ieder geval bestaan.',
                privacyTitle: '8. Privacy',
                privacyP1: 'Informatie over de verwerking van persoonsgegevens in verband met de website en de alpha vind je in de privacyverklaring.',
                privacyLink: 'Naar de privacyverklaring',
                changesTitle: '9. Wijzigingen van deze voorwaarden',
                changesP1: 'Deze voorwaarden kunnen worden aangepast wanneer de website, de alpha of het juridische kader veranderen.',
                changesP2: 'De actuele versie is op deze pagina beschikbaar. Voor reeds afgeronde processen geldt de versie die op dat moment gold.',
                lawTitle: '10. Toepasselijk recht en slotbepalingen',
                lawP1: 'Het recht van de Bondsrepubliek Duitsland is van toepassing, met uitsluiting van het Weens Koopverdrag.',
                lawP2: 'Als je consument bent met je gewone verblijfplaats in een ander land, blijven de dwingende consumentenbeschermingsbepalingen van je verblijfsland onaangetast; deze rechtskeuze beperkt ze niet.',
                lawP3: 'Mocht een bepaling van deze voorwaarden ongeldig zijn of worden, dan blijft de geldigheid van de overige bepalingen onaangetast. In plaats van een ongeldige bepaling gelden de wettelijke bepalingen.',
                finalNote: 'Deze voorwaarden beschrijven de huidige status van de website en de alpha. Ze vormen geen juridisch advies en vervangen geen individuele juridische controle vóór een openbare lancering. Voor de juridisch bindende uitleg naar Duits recht is de Duitse versie doorslaggevend.',
            },
        },

        es: {
            meta: {
                title: 'LokApp – Registra y encuentra tu colección de modelismo ferroviario',
                description:
                    'LokApp es la app para coleccionistas de modelismo ferroviario: registra locomotoras, vagones, edificios y accesorios con fotos, números de modelo y detalles, y encuentra cada modelo rápidamente en casa, en la vitrina o en una feria.',
                ogDescription:
                    'Registra locomotoras, vagones, edificios y accesorios con fotos, números de modelo y detalles, y encuentra cada modelo en casa, en la vitrina o en una feria.',
            },
            accessibility: {
                skipToContent: 'Ir al contenido',
                home: 'Página principal de LokApp',
                mainNavigation: 'Navegación principal',
                mobileNavigation: 'Navegación móvil',
                selectLanguage: 'Elegir idioma',
                appPreview:
                    'Vista previa de LokApp con una colección de ejemplo de locomotoras, vagones y edificios',
                modelDetail:
                    'Ejemplo de detalles de modelo en LokApp con denominación, categoría, escala y época',
            },
            navigation: {
                home: 'Inicio',
                features: 'Funciones',
                roadmap: 'Roadmap',
                poll: 'Encuesta',
                alpha: 'Unirse a la alpha',
            },
            language: {
                de: 'Deutsch',
                en: 'English',
                nl: 'Nederlands',
                es: 'Español',
            },
            theme: {
                enableLight: 'Activar modo claro',
                enableDark: 'Activar modo oscuro',
                switch: 'Cambiar modo oscuro / claro',
            },
            mobileMenu: {
                open: 'Abrir menú',
                close: 'Cerrar menú',
            },
            hero: {
                eyebrow: 'Para coleccionistas de modelismo ferroviario',
                title: 'Mantén cada modelo de tu colección bajo control.',
                description:
                    'LokApp registra locomotoras, vagones, edificios y accesorios con fotos, números de modelo y detalles, para que sepas al instante en casa, en la vitrina o en una feria qué modelo ya tienes.',
                primaryCta: 'Unirse a la alpha',
                secondaryCta: 'Cómo funciona LokApp',
                alphaStatus: 'Actualmente en fase alpha',
                platforms: 'Para iPhone y Android',
            },
            preview: {
                collectionEyebrow: 'Mi colección',
                collectionTitle: 'Locomotoras y vagones',
                search: 'Buscar modelo o número',
                locomotives: 'Locomotoras',
                wagons: 'Vagones',
                buildings: 'Edificios',
                accessories: 'Accesorios',
                locomotiveMeta: 'Locomotora diésel · Época IV',
                wagonMeta: 'Coche piloto · Época IV',
                buildingMeta: 'Edificio · Escala H0',
            },
            workflow: {
                eyebrow: 'Así trabajas con LokApp',
                title: 'Desde un modelo nuevo hasta encontrarlo rápido.',
                description:
                    'LokApp acompaña cada paso que da un modelo en tu colección: desde registrarlo y documentarlo hasta consultarlo cuando estás fuera.',
                stepOneLabel: 'Registrar',
                stepOneTitle: 'Añadir un modelo',
                stepOneText:
                    'Añade una locomotora, vagón, edificio o accesorio con nombre, categoría, escala y época.',
                fieldName: 'Denominación',
                fieldNameValue: 'BR 218 447-3',
                fieldCategory: 'Categoría',
                fieldCategoryValue: 'Locomotora diésel',
                stepTwoLabel: 'Documentar',
                stepTwoTitle: 'Guardar fotos y detalles',
                stepTwoText:
                    'Guarda fotos, número de modelo, estado y tus propias notas directamente con el modelo.',
                stepThreeLabel: 'Encontrar',
                stepThreeTitle: 'Consultar mientras estás fuera',
                stepThreeText:
                    'En una feria, comprueba en segundos si un modelo ya forma parte de tu colección.',
                searchValue: '218',
                collectionResult: 'Ya está en la colección',
            },
            roadmap: {
                eyebrow: 'Desarrollo',
                title: 'LokApp evoluciona con cada uso real.',
                description:
                    'Desde la primera idea y una pequeña versión alpha hasta el próximo paso público. La estabilidad, los comentarios sinceros y una buena experiencia diaria para los coleccionistas siguen siendo el centro.',
                ideaDate: '2025',
                ideaTitle: 'Idea y primera alpha',
                ideaSummary:
                    'La primera versión de LokApp entra en alpha con un grupo reducido de usuarios.',
                ideaDetails:
                    'La idea nació de la necesidad de reunir una colección creciente de modelismo ferroviario en un solo lugar y mantenerla ordenada. De ahí surgió una primera versión para Android, ya probada con pocos usuarios.',
                coreDate: 'Primavera de 2026',
                coreTitle: 'LokApp se reconstruye',
                coreSummary:
                    'Toma forma la base de una app de colección moderna y estable.',
                coreDetails:
                    'LokApp se reconstruyó para iPhone y Android: colección, categorías, fotos, búsqueda, filtros y los detalles más importantes se reunieron paso a paso en una aplicación clara.',
                alphaDate: 'Ahora',
                alphaTitle: 'Acabado para el lanzamiento alpha',
                alphaSummary:
                    'Pulido, corrección de errores y los últimos flujos importantes.',
                alphaDetails:
                    'Ahora el foco está en un lanzamiento alpha limpio: mejorar la experiencia, encontrar errores, aumentar la estabilidad y preparar la app para los primeros nuevos testers.',
                customizationDate: 'Previsto',
                customizationTitle: 'Publicación y comentarios',
                customizationSummary:
                    'Incorporar sugerencias de usuarios, seguir mejorando LokApp y preparar suscripciones.',
                customizationDetails:
                    'Después del lanzamiento alpha, LokApp seguirá evolucionando con comentarios reales. Se prevén mejoras basadas en las solicitudes de los usuarios y la preparación e introducción de suscripciones.',
                cloudDate: 'En preparación',
                cloudTitle: 'Más vistas y tablet',
                cloudSummary:
                    'Vista de cuadrícula, vista de lista y una mejor experiencia en tablets.',
                cloudDetails:
                    'Se están preparando vistas adicionales para la colección, incluida la vista de cuadrícula y de lista, junto con una versión optimizada para tablets que ofrece más visión general en pantallas grandes.',
            },
            poll: {
                eyebrow: 'Participa',
                title: 'Ayuda a decidir qué mejorará LokApp a continuación.',
                description:
                    'Participa en nuestra encuesta de la comunidad y ayuda a priorizar los próximos cambios y funciones de LokApp.',
                status: 'Encuesta de la comunidad',
                question:
                    '¿Qué función sería la más importante para ti ahora?',
                hint:
                    'Elige la función que más te ayudaría en el día a día como coleccionista.',
                optionTypeDefaults: 'Type Defaults',
                optionTypeDefaultsDescription:
                    'Aplicar más rápido valores recurrentes para determinados tipos de modelo.',
                optionImages: 'Varias imágenes por modelo',
                optionImagesDescription:
                    'Registrar más vistas, detalles y características especiales directamente con un modelo.',
                optionSearch: 'Búsqueda y filtros avanzados',
                optionSearchDescription:
                    'Busca más rápido en tu colección por números, tipos o propiedades.',
                optionAttributes: 'Secciones y atributos propios',
                optionAttributesDescription:
                    'Adapta LokApp más estrechamente a tu propia colección y forma de trabajar.',
                stored:
                    'Gracias por tu voto. Estás ayudando a priorizar las próximas mejoras de LokApp.',
                communityLater:
                    'Los resultados influirán directamente en el desarrollo futuro de LokApp.',
            },
            origin: {
                eyebrow: 'Por qué nació LokApp',
                title: 'Nacida del día a día con una colección en crecimiento.',
                first:
                    'Cuantas más locomotoras, vagones, edificios y accesorios se añaden, más difícil resulta mantener una visión general. La información termina en listas, hojas de cálculo, fotos en el móvil y en la memoria, lo que puede provocar compras duplicadas y búsquedas largas.',
                second:
                    'LokApp reúne esta información en un solo lugar: cada modelo con fotos, número de modelo, categoría y notas propias. Así, la colección sigue siendo comprensible junto a la maqueta, al ordenar y en una feria.',
                closing:
                    'De una colección real. Para quienes quieren mantener el control.',
                link: 'Más sobre el desarrollo',
                category: 'Categoría',
                categoryValue: 'Locomotora',
                gauge: 'Escala',
                epoch: 'Época',
                location: 'Ubicación',
                locationValue: 'Vitrina 2',
                modelType: 'Locomotora diésel',
            },
            alpha: {
                eyebrow: 'Participa pronto',
                title: 'Prueba LokApp en alpha y comparte tu experiencia.',
                description:
                    'Únete a la alpha, prueba LokApp con tu propia colección y cuéntanos qué falta o qué podría funcionar mejor en el día a día de un coleccionista.',
                cta: 'Unirse a la alpha',
                unavailable: 'El registro para la alpha se activará pronto.',
            },
            alphaPage: {
                metaTitle: 'Unirse a la Alpha de LokApp – LokApp',
                metaDescription:
                    'Únete a la alpha de LokApp y ayuda a mejorar la aplicación para coleccionistas de modelismo ferroviario.',
                mobileAlpha: 'Alpha',
                eyebrow: 'LokApp Alpha',
                title: 'Participa pronto y ayuda a dar forma a LokApp.',
                description:
                    'Prueba LokApp antes de su lanzamiento público y ayuda a mejorar la app para coleccionistas de modelismo ferroviario con comentarios sinceros.',
                emailLabel: 'Dirección de correo electrónico',
                platformLabel: '¿En qué plataforma quieres probar LokApp?',
                platformPlaceholder: 'Selecciona una opción',
                platformIos: 'iPhone / iPad',
                platformAndroid: 'Android',
                platformMultiple: 'Varias plataformas',
                privacyBefore: 'He leído la',
                privacyAfter:
                    'y acepto el tratamiento de mis datos para el registro de la alpha.',
                submit: 'Registrar interés para la alpha',
                infoLabel: 'Información sobre la alpha',
                cardOneTitle: 'Prueba antes',
                cardOneText:
                    'Recibirás LokApp antes del lanzamiento público y podrás probar las áreas más importantes con tu propia colección.',
                cardTwoTitle: 'Da comentarios directos',
                cardTwoText:
                    'Cuéntanos qué se siente bien, qué falta y qué sería realmente útil para una colección real.',
                cardThreeTitle: 'Sin compromiso',
                cardThreeText:
                    'La alpha es voluntaria. Puedes decidir en cualquier momento si quieres seguir probando o dejar de recibir más información.',
            },
            footer: {
                description: 'LokApp es un producto de Schenk Software.',
                rights: '© 2026 Schenk Software. Todos los derechos reservados.',
                navigation: 'Navegación del pie de página',
                imprint: 'Aviso legal',
                privacy: 'Privacidad',
                terms: 'Términos',
                company: 'Schenk Software',
            },
            imprintPage: {
                metaTitle: 'Aviso legal – LokApp',
                metaDescription: 'Aviso legal de LokApp y Schenk Software.',
                mobileAlpha: 'Alpha',
                sectionNavigation: 'Navegación de página',
                eyebrow: 'Información legal',
                title: 'Aviso legal',
                subtitle: 'Información legal sobre LokApp y Schenk Software.',
                updated: 'Actualizado: 1 de julio de 2026',
                onThisPage: 'En esta página',
                sectionBusiness: 'Información del proveedor',
                sectionContact: 'Contacto',
                sectionVat: 'IVA',
                sectionDispute: 'Resolución de conflictos',
                sectionCopyright: 'Derechos de autor',
                productLabel: 'Producto',
                productValue: 'LokApp es un producto de Schenk Software.',
                emailLabel: 'Correo electrónico',
                websiteLabel: 'Sitio web',
                vatTitle: 'Número de identificación de IVA',
                vatText: 'Número de identificación de IVA conforme al § 27a UStG:',
                vatNote:
                    'Elimina esta sección antes de publicar si no existe un número de identificación de IVA.',
                disputeTitle: 'Resolución de conflictos de consumo',
                disputeText:
                    'No estamos obligados ni dispuestos a participar en procedimientos de resolución de conflictos ante una junta de arbitraje de consumo.',
                disputeNote:
                    'Este texto solo puede utilizarse si realmente se aplica a tu empresa.',
                copyrightTitle: 'Derechos de autor',
                copyrightTextOne:
                    'Salvo que se indique lo contrario, los contenidos, imágenes, textos y elementos de diseño de este sitio web están protegidos por la legislación alemana sobre derechos de autor.',
                copyrightTextTwo:
                    'La reproducción, edición o distribución fuera de los límites del derecho de autor requiere el consentimiento previo por escrito del titular correspondiente.',
                finalNote:
                    'Este aviso legal está preparado técnicamente, pero todavía no contiene tus datos definitivos de empresa y contacto. Revísalo legalmente antes de un lanzamiento público.',
            },

           privacyPage: {
    metaTitle: 'Política de privacidad – LokApp',
    metaDescription:
        'Política de privacidad del sitio web lokapp.de: registros del servidor, registro para la alpha, envío de correos, encuestas y tus derechos.',
    sectionNavigation: 'Navegación de página',
    eyebrow: 'Privacidad',
    title: 'Política de privacidad',
    subtitle:
        'Información sobre el tratamiento de datos personales en el sitio web lokapp.de.',
    updated: 'Actualizado: 2 de julio de 2026',
    onThisPage: 'En esta página',

    navResponsible: 'Responsable',
    navOverview: 'Resumen',
    navWebsite: 'Sitio web y registros del servidor',
    navAlpha: 'Registro para la alpha',
    navEmail: 'Envío de correos',
    navStorage: 'Almacenamiento en la base de datos',
    navPolls: 'Encuestas y cookie',
    navRecipients: 'Destinatarios',
    navRetention: 'Plazo de conservación',
    navRights: 'Tus derechos',
    navSecurity: 'Seguridad de los datos',
    navChanges: 'Cambios',

    purposeLabel: 'Finalidad',
    dataLabel: 'Categorías de datos',
    legalBasisLabel: 'Base jurídica',
    recipientsLabel: 'Destinatarios',
    storageLabel: 'Plazo de conservación',
    voluntaryLabel: 'Carácter voluntario',
    placeholderLabel: 'Verificar antes del lanzamiento',

    responsibleTitle: 'Responsable',
    responsibleIntro:
        'El responsable del tratamiento de datos personales en este sitio web en el sentido del Reglamento General de Protección de Datos es:',
    responsibleContactIntro:
        'Contacto para consultas sobre privacidad:',

    overviewTitle: 'Resumen del tratamiento de datos',
    overviewP1:
        'Esta política de privacidad explica qué datos personales se tratan cuando visitas el sitio web lokapp.de y utilizas sus funciones, con qué fines y qué derechos tienes.',
    overviewP2:
        'lokapp.de es un sitio web mayoritariamente estático. No se utilizan servicios de publicidad ni de análisis, ni seguimiento entre sitios, ni identificación de dispositivos ni fuentes cargadas desde servidores externos.',
    overviewP3:
        'Los datos personales se tratan principalmente en tres contextos: la entrega técnica del sitio web, un registro voluntario para la alpha y la participación en una encuesta, cuando se ofrece.',

    websiteTitle: 'Provisión del sitio web y archivos de registro del servidor',
    websiteP1:
        'El sitio web funciona en un servidor virtual del proveedor de alojamiento IONOS y es administrado técnicamente por el responsable. Delante de la aplicación hay un proxy inverso que proporciona la conexión HTTPS.',
    websiteLogsIntro:
        'Al acceder al sitio web y al realizar solicitudes a la interfaz de programación, por motivos técnicos pueden tratarse los siguientes datos:',
    websiteLi1:
        'dirección IP del dispositivo que accede',
    websiteLi2:
        'fecha y hora del acceso',
    websiteLi3:
        'página, archivo o punto final de la API solicitado',
    websiteLi4:
        'código de estado HTTP y volumen de datos transferido',
    websiteLi5:
        'URL de referencia, cuando la transmite el navegador',
    websiteLi6:
        'tipo de navegador, versión del navegador y sistema operativo',
    websitePurpose:
        'entrega segura y estable del sitio web, análisis de errores y detección y prevención de abusos',
    websiteData:
        'datos técnicos de acceso, incluida la dirección IP',
    websiteLegalBasis:
        'art. 6, apdo. 1, letra f, RGPD, sobre la base del interés legítimo en un funcionamiento seguro y operativo',
    websiteRecipients:
        'IONOS como proveedor de alojamiento, así como los servicios gestionados por el responsable para el proxy inverso, el sitio web, la API, la base de datos y el envío de correos',
    websiteStorage:
        'Actualmente no existe un plazo de conservación uniforme basado en días naturales para los registros técnicos de acceso y errores. La conservación depende de la configuración técnica de cada registro y de la finalidad necesaria para la operación, la seguridad y el análisis de errores.',
    websiteRateLimit:
        'Para protegerse frente a solicitudes automatizadas y abusos, está activa una limitación de la frecuencia de solicitudes. Las solicitudes se cuentan brevemente en función de características técnicas como la dirección IP.',
    websiteNoProfiles:
        'Estos datos no se combinan con otras fuentes de datos ni se crean perfiles de uso personales.',
    placeholderLogRetention:
        'Antes del lanzamiento público debe implementarse técnicamente y documentarse aquí un plazo uniforme de eliminación basado en días naturales para los registros del proxy inverso, del servidor web y de la API. La rotación actual por tamaño de los contenedores de LokApp no constituye un plazo fijo por días.',

    alphaTitle: 'Registro para la alpha y doble opt-in',
    alphaP1:
        'A través del formulario de registro puedes expresar tu interés en la alpha de LokApp. En ello se tratan tu dirección de correo electrónico, la plataforma deseada y tu confirmación expresa de la información de privacidad.',
    alphaP2:
        'El registro se realiza mediante un procedimiento de doble opt-in: tras enviar el formulario recibes un correo con un enlace de confirmación. Tu registro solo se confirma cuando haces clic en ese enlace. El enlace de confirmación tiene una validez limitada.',
    alphaP3:
        'Para asegurar el procedimiento, los tokens de confirmación y de baja se almacenan únicamente en forma de hash. Además, se almacenan el estado del registro, una versión de la información de privacidad y marcas de tiempo.',
    alphaPurpose:
        'realizar y confirmar el registro para la alpha y contactar contigo en relación con la alpha',
    alphaData:
        'dirección de correo electrónico, plataforma deseada, información de consentimiento y estado, tokens con hash, marcas de tiempo',
    alphaLegalBasis:
        'art. 6, apdo. 1, letra a, RGPD (consentimiento); el consentimiento puede retirarse en cualquier momento con efecto para el futuro',
    alphaRecipients:
        'base de datos PostgreSQL propia, servidor de correo Mailcow propio e IONOS como proveedor de alojamiento de la infraestructura de servidor',
    alphaStorage:
        'hasta la retirada del consentimiento o la baja; véase «Plazo de conservación y supresión» para más detalles',
    alphaVoluntary:
        'Facilitar estos datos es voluntario. Sin dirección de correo electrónico y confirmación de la información de privacidad, el registro no es técnicamente posible.',
    alphaNoAds:
        'Los datos recogidos para el registro de la alpha no se comparten con plataformas publicitarias ni se utilizan para publicidad más allá de la finalidad descrita.',

    emailTitle: 'Envío de correos',
    emailP1:
        'El envío de los correos de confirmación y de procedimiento se realiza a través de un servidor de correo propio y autogestionado en la infraestructura de servidor utilizada. Para ello no se utiliza ningún proveedor externo de boletines o marketing.',
    emailP2:
        'Para la entrega se trata tu dirección de correo electrónico. Durante el transporte pueden generarse datos técnicos de conexión necesarios para un envío fiable y seguro.',
    emailLegalBasis:
        'La base jurídica es el art. 6, apdo. 1, letra a, RGPD en relación con el art. 6, apdo. 1, letra f, RGPD, cuando sea necesario para ejecutar el procedimiento de confirmación iniciado por ti.',

    storageTitle: 'Almacenamiento en la base de datos',
    storageP1:
        'Los datos recogidos en relación con el registro de la alpha y con las encuestas se almacenan en una base de datos PostgreSQL en la infraestructura de servidor utilizada para LokApp en IONOS.',
    storageP2:
        'Los tokens de confirmación, baja y limitación de envíos múltiples no se almacenan en texto claro, sino únicamente como valor hash criptográfico.',

    pollsTitle: 'Encuestas y cookie técnica',
    pollsP1:
        'Cuando en el sitio web se ofrece una encuesta activa, puedes participar de forma voluntaria. Según la encuesta, puede almacenarse en el servidor una selección o una respuesta de texto libre.',
    pollsP2:
        'Para limitar los envíos múltiples por navegador, al participar se genera un token aleatorio que se establece como cookie técnicamente necesaria en tu navegador. En la base de datos solo se almacena el valor hash de este token. No se realiza ninguna elaboración de perfiles personales.',
    pollsCookieName: 'lokapp_poll_token',
    pollsCookiePurpose:
        'limitación de votos y respuestas múltiples por navegador',
    pollsCookieStorage:
        'cookie: HttpOnly, limitada a la ruta /api, con una duración máxima de hasta doce meses; en la base de datos solo se almacena el valor hash',
    pollsConsent:
        'El establecimiento de esta cookie es necesario para la función que solicitas expresamente: participar en la encuesta. El tratamiento posterior se basa en el art. 6, apdo. 1, letra f, RGPD debido al interés legítimo en resultados significativos y no manipulados.',
    pollsTextNote:
        'En las encuestas con respuesta de texto libre, te pedimos que no introduzcas datos personales como nombres, direcciones o datos de contacto.',
    pollsLocalNote:
        'Para los ajustes que eliges, el sitio web utiliza el almacenamiento local de tu navegador, por ejemplo para el idioma, la presentación en modo oscuro o claro y una selección de encuesta ya realizada. Esta información permanece en tu dispositivo y no se transmite automáticamente a nosotros.',

    recipientsTitle: 'Destinatarios y encargados del tratamiento',
    recipientsP1:
        'IONOS se utiliza como proveedor de alojamiento para la prestación técnica del sitio web. El sitio web, la API, la base de datos y el servidor de correo son administrados por el responsable.',
    recipientsP2:
        'No se ceden ni venden datos personales a terceros con fines publicitarios. La divulgación solo se produce cuando estamos legalmente obligados a ello.',
    recipientsP3:
        'No está prevista una transferencia de datos personales a terceros países para los servicios de LokApp utilizados actualmente. La ubicación real del servidor y los acuerdos contractuales con el proveedor de alojamiento deben verificarse antes del lanzamiento público.',
    placeholderHosting:
        'Antes del lanzamiento público debe comprobarse y documentarse que se ha celebrado con IONOS un contrato de encargo de tratamiento adecuado conforme al art. 28 RGPD. También debe verificarse la ubicación de servidor acordada contractualmente.',

    retentionTitle: 'Plazo de conservación y supresión',
    retentionP1:
        'Los datos personales solo se conservan durante el tiempo necesario para la finalidad correspondiente o mientras existan obligaciones legales de conservación. Después se suprimen o se limita su tratamiento.',
    retentionLi1:
        'registro de la alpha: hasta la retirada del consentimiento o la baja; después, supresión o anonimización',
    retentionLi2:
        'registros no confirmados: el enlace de confirmación caduca a los siete días; la rutina para la supresión definitiva de las entradas no confirmadas debe definirse antes de la puesta en marcha',
    retentionLi3:
        'archivos de registro del servidor, del proxy inverso y de la API: actualmente no existe un plazo de eliminación uniforme basado en días naturales; debe definirse y documentarse técnicamente antes del lanzamiento público',
    retentionLi4:
        'encuestas: el token con hash se conserva durante la duración de la encuesta correspondiente para limitar los envíos múltiples',

    rightsTitle: 'Tus derechos',
    rightsP1:
        'Siempre que se cumplan los requisitos legales, tienes, en particular, los siguientes derechos respecto a tus datos personales:',
    rightsLi1:
        'acceso a los datos tratados',
    rightsLi2:
        'rectificación de datos inexactos',
    rightsLi3: 'supresión',
    rightsLi4:
        'limitación del tratamiento',
    rightsLi5:
        'portabilidad de los datos',
    rightsLi6:
        'oposición al tratamiento',
    rightsWithdrawalTitle: 'Retirada del consentimiento',
    rightsWithdrawal:
        'Puedes retirar en cualquier momento un consentimiento otorgado, con efecto para el futuro, por ejemplo a través del enlace de baja o mediante un mensaje a la dirección de contacto indicada arriba. La licitud del tratamiento realizado hasta la retirada no se ve afectada.',
    rightsComplaintTitle:
        'Derecho a reclamar ante una autoridad de control',
    rightsComplaint:
        'Tienes derecho a presentar una reclamación ante una autoridad de control de protección de datos sobre el tratamiento de tus datos personales. Por lo general, es competente la autoridad del domicilio del responsable.',
    placeholderAuthority:
        'Antes del lanzamiento público puede añadirse aquí la autoridad de control de protección de datos competente con sus datos de contacto.',
    rightsContact:
        'Para ejercer tus derechos basta con un mensaje a la dirección de contacto indicada arriba.',

    securityTitle: 'Seguridad de los datos',
    securityP1:
        'La conexión con el sitio web está cifrada mediante HTTPS/TLS. Además, se utilizan medidas técnicas y organizativas, como almacenar los tokens únicamente como valor hash, una limitación de la frecuencia de solicitudes y restricciones de acceso a la infraestructura de servidor.',
    securityP2:
        'A pesar de las medidas cuidadosas, ninguna transmisión por internet puede garantizar una seguridad completa. Las medidas se adaptan al estado de la técnica.',

    changesTitle: 'Cambios en esta política de privacidad',
    changesP1:
        'Esta política de privacidad se adapta cuando cambian el sitio web, los servicios utilizados o los tratamientos de datos.',
    changesP2:
        'Antes de activar más funciones, como servicios de análisis, sincronización en la nube, pagos o suscripciones, esta política se ampliará y se revisará de nuevo.',

    finalNote:
        'Esta política de privacidad describe el estado técnico actual del sitio web. No constituye asesoramiento jurídico ni sustituye una revisión jurídica individual antes de un lanzamiento público. Para la interpretación jurídicamente vinculante conforme al derecho alemán, prevalece la versión alemana.',
},
            termsPage: {
                metaTitle: 'Términos para el sitio web y la alpha – LokApp',
                metaDescription: 'Términos para el uso del sitio web lokapp.de y la participación en la alpha de LokApp.',
                sectionNavigation: 'Navegación de página',
                eyebrow: 'Información legal',
                title: 'Términos para el sitio web y la alpha',
                subtitle: 'Términos para el uso del sitio web lokapp.de y la participación en la alpha de LokApp.',
                updated: 'Actualizado: 1 de julio de 2026',
                onThisPage: 'En esta página',
                navScope: 'Ámbito de aplicación',
                navSubject: 'Objeto de la alpha',
                navParticipation: 'Participación',
                navFeedback: 'Comentarios',
                navConduct: 'Reglas de conducta',
                navAvailability: 'Disponibilidad',
                navLiability: 'Responsabilidad',
                navPrivacy: 'Privacidad',
                navChanges: 'Cambios',
                navLaw: 'Derecho aplicable',
                scopeTitle: '1. Ámbito de aplicación',
                scopeP1: 'Estos términos se aplican al uso del sitio web lokapp.de y al registro para la fase alpha de LokApp y a la participación en ella.',
                scopeP2: 'El proveedor es Schenk Software, Sebastian Schenk. Encontrarás los datos completos del proveedor en el aviso legal.',
                scopeP3: 'Estos términos se aplican exclusivamente al sitio web y a la alpha. Una futura oferta de pago de la aplicación (por ejemplo, suscripciones) se regiría por términos distintos que se facilitarán y acordarán en el momento correspondiente.',
                subjectTitle: '2. Objeto del registro para la alpha',
                subjectP1: 'A través del sitio web puedes expresar tu interés en participar en la alpha de LokApp. LokApp es una aplicación para gestionar y documentar colecciones de modelismo ferroviario y se encuentra en una fase temprana de desarrollo.',
                subjectP2: 'El registro para la alpha sirve para dar acceso anticipado a las personas interesadas y recopilar comentarios. No es un contrato de compra ni establece ninguna suscripción de pago.',
                participationTitle: '3. Participación, carácter voluntario y ausencia de remuneración',
                participationP1: 'El registro y la participación en la alpha son voluntarios y gratuitos para ti.',
                participationP2: 'No existe derecho a participar, a acceder a la alpha, a funciones concretas ni a un acceso público posterior. El número de plazas de prueba puede limitarse.',
                participationP3: 'No existe derecho a remuneración por los comentarios o las pruebas. Tampoco existe obligación de usar realmente la alpha.',
                participationP4: 'Puedes finalizar tu participación en cualquier momento, en particular mediante el enlace de baja del correo de confirmación o de un correo posterior.',
                feedbackTitle: '4. Comentarios',
                feedbackP1: 'Los comentarios, informes de errores y sugerencias de mejora son bienvenidos, pero voluntarios.',
                feedbackP2: 'No existe obligación de implementar los comentarios enviados. Si envías sugerencias, estas podrán utilizarse para mejorar LokApp. Más allá del permiso necesario para ello, no se te pide que cedas derechos adicionales; tus derechos legales no se ven afectados.',
                conductTitle: '5. Reglas de conducta',
                conductP1: 'Al usar el sitio web y la alpha debe respetarse la legislación aplicable. En particular:',
                conductLi1: 'ningún uso con fines ilícitos',
                conductLi2: 'ningún menoscabo, sobrecarga o elusión de la infraestructura técnica y las medidas de seguridad',
                conductLi3: 'ninguna consulta masiva automatizada del sitio web o de las interfaces',
                conductP2: 'Eres responsable del contenido que introduces en la aplicación. Utiliza únicamente contenido sobre el que poseas los derechos necesarios.',
                availabilityTitle: '6. Disponibilidad y desarrollo continuo',
                availabilityP1: 'LokApp está en desarrollo activo. La aplicación y el sitio web pueden contener errores, cambiar o no estar disponibles temporalmente.',
                availabilityP2: 'La alpha puede adaptarse, limitarse en su alcance, pausarse o finalizarse en cualquier momento. Durante la alpha pueden producirse cambios, reinicios o pérdida de datos; por ello, deberías realizar copias de seguridad adicionales de los datos importantes.',
                liabilityTitle: '7. Responsabilidad',
                liabilityP1: 'Por los daños derivados de lesiones a la vida, el cuerpo o la salud, así como en caso de dolo y negligencia grave, respondemos conforme a las disposiciones legales.',
                liabilityP2: 'En caso de negligencia leve, solo respondemos por el incumplimiento de una obligación contractual esencial (una obligación cuyo cumplimiento hace posible el uso correcto y en cuyo cumplimiento puedes confiar habitualmente), y limitada en su cuantía al daño previsible y típico de este tipo de relación.',
                liabilityP3: 'La responsabilidad legal imperativa, en particular conforme a la Ley alemana de responsabilidad por productos, no se ve afectada. Dado que la alpha se ofrece gratuitamente, se aplican además las atenuaciones de responsabilidad previstas por la ley para las prestaciones gratuitas, en la medida en que sean aplicables.',
                liabilityP4: 'Esto no supone una exclusión general de responsabilidad; los derechos legales imperativos se mantienen en todo caso.',
                privacyTitle: '8. Privacidad',
                privacyP1: 'Encontrarás información sobre el tratamiento de datos personales en relación con el sitio web y la alpha en la política de privacidad.',
                privacyLink: 'A la política de privacidad',
                changesTitle: '9. Cambios en estos términos',
                changesP1: 'Estos términos pueden adaptarse cuando cambien el sitio web, la alpha o el marco jurídico.',
                changesP2: 'La versión vigente está disponible en esta página. Para los procesos ya finalizados se aplica la versión vigente en el momento correspondiente.',
                lawTitle: '10. Derecho aplicable y disposiciones finales',
                lawP1: 'Se aplica el derecho de la República Federal de Alemania, con exclusión de la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías.',
                lawP2: 'Si eres consumidor con residencia habitual en otro país, las disposiciones imperativas de protección de los consumidores de tu país de residencia no se ven afectadas; esta elección de derecho no las restringe.',
                lawP3: 'Si alguna disposición de estos términos fuera o llegara a ser inválida, la validez de las demás disposiciones no se verá afectada. En lugar de una disposición inválida se aplicarán las disposiciones legales.',
                finalNote: 'Estos términos describen el estado actual del sitio web y de la alpha. No constituyen asesoramiento jurídico ni sustituyen una revisión jurídica individual antes de un lanzamiento público. Para la interpretación jurídicamente vinculante conforme al derecho alemán, prevalece la versión alemana.',
            },
        },
    };

    const normaliseLanguage = (value) => {
        const language = String(value || '')
            .trim()
            .toLowerCase()
            .split('-')[0];

        return supportedLanguages.has(language) ? language : null;
    };

    const readStoredLanguage = () => {
        try {
            return normaliseLanguage(localStorage.getItem(storageKey));
        } catch {
            return null;
        }
    };

    const saveLanguage = (language) => {
        try {
            localStorage.setItem(storageKey, language);
        } catch {
            // Die Sprachwahl funktioniert auch ohne Local Storage.
        }
    };

    const getBrowserLanguage = () => {
        const candidates = Array.isArray(navigator.languages)
            ? navigator.languages
            : [navigator.language];

        for (const candidate of candidates) {
            const language = normaliseLanguage(candidate);

            if (language) {
                return language;
            }
        }

        return 'de';
    };

    const getValue = (language, key) => {
        const value = key.split('.').reduce(
            (currentValue, part) => currentValue?.[part],
            translations[language],
        );

        if (typeof value === 'string') {
            return value;
        }

        const fallbackValue = key.split('.').reduce(
            (currentValue, part) => currentValue?.[part],
            translations.de,
        );

        return typeof fallbackValue === 'string' ? fallbackValue : key;
    };

    let currentLanguage = readStoredLanguage() || getBrowserLanguage();

    const translate = (key) => getValue(currentLanguage, key);

    const updateTextNodes = () => {
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            element.textContent = translate(element.dataset.i18n);
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
            element.setAttribute(
                'aria-label',
                translate(element.dataset.i18nAriaLabel),
            );
        });

        document.querySelectorAll('[data-i18n-content]').forEach((element) => {
            element.setAttribute(
                'content',
                translate(element.dataset.i18nContent),
            );
        });

        document.querySelectorAll('[data-i18n-title]').forEach((element) => {
            element.setAttribute(
                'title',
                translate(element.dataset.i18nTitle),
            );
        });
    };

    const updateLanguageControls = () => {
        document.querySelectorAll('[data-language-current]').forEach((element) => {
            element.textContent = currentLanguage.toUpperCase();
        });

        document.querySelectorAll('[data-language-option]').forEach((option) => {
            const isCurrent = option.dataset.languageOption === currentLanguage;

            option.setAttribute('aria-current', isCurrent ? 'true' : 'false');
            option.classList.toggle('is-current', isCurrent);
        });
    };

    const applyLanguage = (language, { persist = false } = {}) => {
        const nextLanguage = normaliseLanguage(language) || 'de';

        currentLanguage = nextLanguage;
        root.lang = nextLanguage;

        const pageTitle = document.querySelector('title[data-i18n]');

        document.title = pageTitle
            ? translate(pageTitle.dataset.i18n)
            : translate('meta.title');


        updateTextNodes();
        updateLanguageControls();

        if (persist) {
            saveLanguage(nextLanguage);
        }

        document.dispatchEvent(
            new CustomEvent('lokapp:languagechange', {
                detail: {
                    language: nextLanguage,
                },
            }),
        );
    };

    window.LokAppI18n = {
        getLanguage: () => currentLanguage,
        setLanguage: (language) => applyLanguage(language, { persist: true }),
        t: translate,
    };

    document.addEventListener('click', (event) => {
        const option = event.target.closest('[data-language-option]');

        if (!option) {
            return;
        }

        const language = option.dataset.languageOption;

        if (!normaliseLanguage(language)) {
            return;
        }

        applyLanguage(language, { persist: true });

        window.LokAppLanguageMenu?.close({
            returnFocus: true,
        });
    });

    applyLanguage(currentLanguage);
})();