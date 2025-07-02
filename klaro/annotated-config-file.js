var klaroConfig = {
    elementID: 'klaro',
    storageMethod: 'cookie',
    storageName: 'klaro',
    htmlTexts: true,
    cookieExpiresAfterDays: 180,
    cookieDomain: 'leowangsound.de',
    default: false,
    testing: false,
    mustConsent: true,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    debug: true,


    translations: {
        de: {
            privacyPolicyUrl: 'https://leowangsound.de/datenschutzerkl%C3%A4rung',
            consentNotice: {
                description: 'Hallo! Ich verwende Cookies und externe Inhalte (z. B. Spotify), um meine Website nutzungsfreundlich zu gestalten. Du kannst selbst entscheiden, was geladen werden darf.',
            },
            consentModal: {
                title: 'Datenschutz-Einstellungen',
                description: 'Hier kannst du einsehen und anpassen, welche externen Dienste auf dieser Seite eingebunden sind.',
            },
            purposes: {
                media: {
                    title: 'Externe Medien',
                    description: 'Einbindung von Spotify, YouTube o. ä.',
                },
                analytics: {
                    title: 'Besucher-Statistiken',
                },
            }
        }
    },

    services: [
        {
            name: 'spotify',
            default: true,
            translations: {
                zz: {
                    title: 'Spotify',
                },
                de: {
                    description: 'Spotify Podcast Player zur direkten Wiedergabe eingebetteter Folgen.',
                },
                en: {
                    description: 'Spotify podcast player for embedded episode playback.',
                },
            },
            purposes: ['media'],
            contextualConsentOnly: false,
        },
        {
            name: 'youtube',
            title: 'YouTube Embed',
            purposes: ['media'],
            contextualConsentOnly: false,
            default: true,
            translations: {
                de: {
                    description: 'YouTube wird verwendet, um Videos direkt auf der Website einzubetten.',
                }
            }
        }
    ],

    callback: function(consent, service) {
        console.log(
            'User consent for service ' + service.name + ': consent=' + consent
        );
    },
};

