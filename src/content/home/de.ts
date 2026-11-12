import type { HomeContent } from "./types";

// Button and screen names match the app's German UI (locales/de/messages.po in the app repo).
// FAQ link hrefs are English paths; the Faq component prefixes them.
export const home: HomeContent = {
  meta: {
    title: "MuscleQuest: kostenloser Trainingstracker und -planer für Android",
    description: "Kostenloser Trainingstracker für Android. Trainings planen, Sätze erfassen, Bestleistungen und Fortschritt verfolgen. Funktioniert offline, ohne Werbung, ohne Konto.",
  },
  hero: {
    titleLead: "Planen. Trainieren.",
    titleAccent: "Fortschritt sehen.",
    lede: "Der kostenlose Trainingstracker, der dein Training auf deinem Handy lässt, nicht in irgendeiner Cloud.",
    chips: ["Kostenlos, ohne Werbung", "Funktioniert offline", "Kein Konto nötig"],
    screenshotAlt: "MuscleQuest-Startbildschirm mit dem Wochenziel, zwei von vier Tagen erledigt, und den Trainings des aktiven Plans",
  },
  features: {
    intro: { title: "Alles, was ein Trainingstagebuch können muss", text: "Vom Plan über die letzte Wiederholung bis zum langfristigen Trend, in einer App, die dir nicht im Weg steht." },
    blocks: [
      {
        id: "plans",
        title: "Pläne, die zu deiner Woche passen",
        text: "Stell dir aus über 1.200 Übungen deinen eigenen Plan zusammen oder starte mit einem von zehn fertigen Programmen und pass es an. Lege Sätze, Wiederholungen und Pausen für jede Übung fest und verteile deine Trainings auf die Tage, an denen du trainierst.",
        bullets: ["10 fertige Pläne für 2 bis 6 Tage pro Woche, auch mit Körpergewicht oder nur Kurzhanteln", "Aufwärmsätze, Dropsätze und Supersätze", "Aufwärmen, Cool-down und Mobilitätseinheiten für Ruhetage, mit 5 fertigen Routinen", "Ein Wochenplan mit vorgeschlagenen Trainingstagen", "Pläne duplizieren und Trainings überall wiederverwenden"],
        screenshot: "plan",
        screenshotAlt: "Planeditor für einen 4-Tage-Split aus Ober- und Unterkörper, mit Sätzen und Wiederholungen für jede Übung und einem Supersatz",
      },
      {
        id: "logging",
        title: "Erfassen, das mithält",
        text: "Starte aus deinem Plan, aus deinen gespeicherten Trainings oder spontan mit einem Schnelltraining. Die Sätze sind mit den Werten vom letzten Mal vorausgefüllt, meistens tippst du also nur auf Fertig.",
        bullets: ["Wiederholungen, Gewicht, Zeit, Distanz oder Übungen mit Unterstützung", "Ein Pausentimer, der sich auch bei gesperrtem Handy meldet", "Ein Scheibenrechner für die Scheiben, die du wirklich hast", "Eine unterbrochene Einheit genau dort fortsetzen, wo du aufgehört hast"],
        screenshot: "workout",
        screenshotAlt: "Laufendes Training bei Satz 4 von 5, vorausgefüllt mit vorgeschlagenen 50 kg für 8 Wiederholungen, der Pausentimer läuft",
      },
      {
        id: "progression",
        title: "Fortschritt, den du siehst, und ein Hinweis, wenn es Zeit ist",
        text: "Sag MuscleQuest, wie sich jede Übung angefühlt hat, und die App schlägt vor, wann du Gewicht, Wiederholungen oder Sätze erhöhen kannst. Ohne dein OK ändert sich nichts.",
        bullets: ["Adaptive Progression mit Deload-Unterstützung", "Ein sanfter Wiedereinstieg nach einer Pause", "Bestleistungen aller Zeiten und beste Sätze für jede Übung", "Leistungsdiagramme und Mini-Diagramme für angeheftete Übungen"],
        screenshot: "progression",
        screenshotAlt: "Details zum Bankdrücken mit der Langhantel mit einer Bestleistung von 104,5 kg und einem Diagramm des geschätzten Maximalgewichts",
      },
      {
        id: "stats",
        title: "Statistiken, die sich lohnen",
        text: "Sieh, wie viel du trainierst, was du trainierst und wie es sich entwickelt, auf einem Dashboard, das du selbst anordnest.",
        bullets: ["Volumen, Zeit und Trainings pro Woche", "Trainings-Split und Sätze pro Muskel und Woche", "Jeder Trainingstag auf einen Blick, dazu ein vollständiger, bearbeitbarer Verlauf", "Wochenziel und Serie im Blick"],
        screenshot: "stats",
        screenshotAlt: "Statistiken mit Wochenauswertung, Summen für Trainings, Volumen und Zeit, letzten Trainings und Bestleistungen",
      },
      {
        id: "measurements",
        title: "Mehr messen als die Hantel",
        text: "Erfasse Körpergewicht, Körperfett, Umfänge oder eigene Messwerte direkt vom Startbildschirm aus und sieh dir jeden davon im Verlauf an.",
        bullets: ["Gewicht, Körperfett und Umfänge", "Eigene Messwerte", "Schnelle Eingabe vom Startbildschirm", "Ein Diagramm für jeden Messwert"],
        screenshot: "measurements",
        screenshotAlt: "Eingabe der Körpermaße mit Gewicht, Körperfett, Taille und Brust über einem sinkenden Körpergewichtsdiagramm",
      },
      {
        id: "friends",
        title: "Trainiere mit Freunden",
        text: "Füge Freunde per E-Mail hinzu und sieh, was sie teilen. Dir gefällt ein Plan? Übernimm eine Kopie in deine eigene Sammlung und pass sie an.",
        bullets: ["Kraft-Bestleistungen, letzte Trainings und Körpermaße", "Plan, Training oder eigene Übung von Freunden mit einem Tippen übernehmen", "Wähle Kategorie für Kategorie, was du teilst", "Deine E-Mail-Adresse sehen andere nie"],
        screenshot: "friends",
        screenshotAlt: "Profil eines Freundes mit Kraft-Bestleistungen und letzten Aktivitäten",
      },
    ],
  },
  privacy: {
    title: "Deine Daten bleiben deine",
    intro: "MuscleQuest arbeitet offline-first. Dein Training liegt auf deinem Handy, und nichts verlässt es, wenn du es nicht willst.",
    items: [
      { title: "Auf deinem Handy", text: "Alles wird lokal gespeichert und funktioniert ohne Verbindung." },
      { title: "Konto optional", text: "Nutze jede Trainingsfunktion ohne Anmeldung. Anmelden musst du dich nur für Sicherungen und Freunde." },
      { title: "Sicherungen in deiner Hand", text: "Sichere in die Cloud, wann du willst, und stelle alles wieder her, wenn du das Handy wechselst." },
      { title: "Jederzeit exportieren", text: "Lade deine Trainings und Körpermaße als CSV oder JSON herunter." },
      { title: "Mit einem Tippen gelöscht", text: "Entferne dein Konto und deine Cloud-Daten in den Einstellungen, wann immer du willst." },
      { title: "Keine Werbung, kein Werbe-Tracking", text: "Es gibt keine Werbung, und die App nutzt die Werbe-ID nicht." },
    ],
  },
  more: {
    title: "Und alles andere",
    intro: "Die kleinen Dinge, die eine Trainings-App jeden Tag angenehm machen.",
    items: [
      { title: "Notizen zur Einheit", text: "Füge jedem Training eine Notiz hinzu, um dir zu merken, wie es lief." },
      { title: "Über 1.200 Übungen", text: "Animierte Demos und eine Suche, die RDL, OHP und Tippfehler versteht." },
      { title: "Eigene Übungen", text: "Füge eigene hinzu, mit eigenem Bild und eigenem Tracking-Typ." },
      { title: "Trainingserinnerungen", text: "An den Tagen und zu den Uhrzeiten, die du wählst." },
      { title: "Deine Einheiten", text: "kg oder lbs, cm oder Zoll, Meter oder Fuß." },
      { title: "Barrierefrei", text: "TalkBack, große Schrift, vorgelesene Diagrammzusammenfassungen und reduzierte Bewegung." },
      { title: "Vier Sprachen", text: "Deutsch, English, Español und Français." },
      { title: "Rückgängig statt „Bist du sicher?“", text: "Versehentlich etwas gelöscht? Tippe auf Rückgängig." },
    ],
  },
  faq: {
    title: "Fragen",
    items: [
      { question: "Ist MuscleQuest kostenlos?", answer: "Ja. Alle Funktionen sind kostenlos, ohne Werbung und ohne Abo." },
      { question: "Funktioniert die App offline?", answer: "Ja. Deine Pläne, Trainings und Statistiken liegen auf deinem Handy, deshalb funktioniert alles ohne Verbindung. Internet brauchst du nur zum Anmelden, Sichern und Wiederherstellen und für Freunde." },
      { question: "Brauche ich ein Konto?", answer: "Nein. Du kannst die Anmeldung überspringen und jede Trainingsfunktion nutzen. Mit einer Google-Anmeldung kommen Cloud-Sicherungen und Freunde dazu." },
      { question: "Wie funktionieren Sicherungen?", answer: "Melde dich mit Google an, öffne Mehr, Einstellungen, Daten und Sicherung und tippe auf Sichern. Eine Sicherung, die unterwegs abbricht, ersetzt nie deine letzte funktionierende, und die App erinnert dich, wenn deine letzte Sicherung älter als 30 Tage ist. Auf einem neuen Handy meldest du dich mit demselben Konto an und tippst auf Wiederherstellen." },
      { question: "Gibt es eine iPhone-Version?", answer: "Noch nicht. MuscleQuest gibt es heute für Android, eine iOS-Version ist geplant." },
      { question: "Welche Sprachen unterstützt die App?", answer: "Deutsch, Englisch, Spanisch und Französisch." },
      { question: "Wie exportiere oder lösche ich meine Daten?", answer: "Öffne Mehr, dann Einstellungen, dann Daten und Sicherung, um deine Trainings und Körpermaße als CSV oder JSON zu exportieren. Wenn du angemeldet bist, entfernt Konto löschen unter Profil und Konto dein Konto, dein Profil, deine Freundschaften, geteilte Daten und Cloud-Sicherungen. Du kannst die Löschung auch im Web beantragen.", link: { label: "Löschung beantragen", href: "/delete-account/" } },
      { question: "Wo bekomme ich Hilfe?", answer: "Die Anleitung erklärt jede Funktion. Wenn du nicht weiterkommst, schreib an support@musclequest.app.", link: { label: "Zur Anleitung", href: "/help/" } },
    ],
  },
  download: {
    eyebrow: "Kostenlos bei Google Play",
    title: "Starte dein nächstes Training mit MuscleQuest",
    text: "Dein Plan, deine Sätze und dein Fortschritt in einer App. Ohne Werbung, ohne Konto, und sie funktioniert offline.",
    screenshot: "workoutOverview",
    screenshotAlt: "Trainingsübersicht mit einer neuen Bestleistung beim Military Press und vorgeschlagenen Wiederholungen für die nächsten Übungen",
  },
};
