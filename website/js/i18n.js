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