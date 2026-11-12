import { config } from "./config";
import type { CoachContent } from "./types";

// A field-by-field translation of en.ts. The strings spec 09 gives in "German copy" are verbatim;
// the rest is translated with Sie and German number formatting, for the owner to review before launch.
// Terms match the app's German catalog (Supersatz, Zirkel, Aufwärmen, Cool-down, Mobilitätseinheit,
// Pausentimer, Scheibenrechner, Tracking-Typ, Deload-Woche, Bestleistungen, Statistiken).
export const coach: CoachContent = {
  meta: {
    title: "MuscleQuest Coach: Ihre Klienten in der App coachen, mit der sie trainieren",
    description: "Eine Web-App für Personal Trainer und Online-Coaches. Sie bauen Pläne im Browser, Ihre Klienten trainieren mit der kostenlosen MuscleQuest-App, und Sie sehen jeden Satz, den sie loggen.",
  },
  nav: { how: "So funktioniert es", features: "Funktionen", faq: "FAQ", signIn: "Anmelden", request: "Zugang anfragen" },
  hero: {
    eyebrow: "Für Personal Trainer und Online-Coaches",
    titleLead: "Einmal den Plan bauen.",
    titleAccent: "Jeden Satz sehen, den sie loggen.",
    lede: "Ihre Klienten trainieren mit der kostenlosen MuscleQuest-App. Sie coachen im Browser: Pläne bauen, jedes geloggte Training verfolgen, unterwegs anpassen.",
    primary: "Frühen Zugang anfragen",
    secondary: "So funktioniert es",
    platformNote: "Klienten trainieren heute auf Android. iOS folgt.",
    appLinkText: "Sie suchen den Trainingstracker? Hier entlang.",
    screenshotAlt: "Plan-Builder von MuscleQuest Coach mit der Übungsauswahl, einer Leiste mit vier Trainings und einem geöffneten Training mit Supersatz und Satzzielen, darüber die Wochen des Blocks",
  },
  how: {
    title: "In drei Schritten zur ersten gecoachten Einheit",
    intro: "Keine neue App, die Ihre Klienten von null lernen müssen, keine Tabellen zum Herumschicken.",
    steps: [
      { title: "Plan bauen", text: "Blöcke, Wochen, Sätze und Hinweise. Starten Sie mit einer Ihrer Vorlagen oder bei null, mit über 1.200 Übungen aus der Bibliothek und Ihren eigenen." },
      { title: "Klient einladen", text: "Schicken Sie einen Code. Ihr Klient gibt ihn in der MuscleQuest-App ein und wählt, was er mit Ihnen teilt und ab wann." },
      { title: "Daten kommen an", text: "Jeder geloggte Satz erscheint in Ihrer Klientenansicht, zusammen mit dem, wie sich die Einheit angefühlt hat. Ändern Sie den Plan, ist die Änderung bei der nächsten Synchronisierung auf dem Handy Ihres Klienten." },
    ],
  },
  features: {
    title: "Programmieren ohne Kleinkram",
    blocks: [
      {
        id: "builder",
        title: "Ein Plan-Builder für echte Programmierung",
        text: "Trainingsblöcke mit Zielen Woche für Woche und Deload-Wochen. Vorlagen mit Muskel-Platzhaltern, die der Klient passend zu seiner eigenen Ausrüstung füllt. Supersätze und Zirkel, Aufwärmen und Cool-down als eigene Abschnitte, Mobilitätseinheiten.",
        bullets: ["Vorlagen für mehrere Klienten wiederverwenden", "Hinweise und Tracking-Typ pro Übung", "Per Drag-and-drop zwischen Übungsauswahl, Trainingsleiste und geöffnetem Training verschieben"],
        screenshot: "coachBlockWeeks",
        screenshotAlt: "Wochen eines Blocks im Plan-Builder: Satzziele Woche für Woche für eine Übung, die letzte Woche als Deload-Woche markiert",
      },
      {
        id: "history",
        title: "Sehen, was wirklich passiert ist",
        text: "Abgeschlossene Trainings Satz für Satz, mit den Notizen, der Anstrengung und den Erholungsbewertungen Ihres Klienten. Wochenvolumen, Bestleistungen und Körpermaße auf der Seite des Klienten.",
        bullets: ["Verlauf ab dem Tag der Verbindung, oder weiter zurück, wenn der Klient ihn teilt", "Einen vertippten Satz korrigieren, mit Änderungsprotokoll", "Älteren Verlauf später anfragen"],
        screenshot: "coachClientView",
        screenshotAlt: "Ein abgeschlossenes Training eines Klienten Satz für Satz, mit Anstrengung und einer Notiz, daneben das Diagramm zum Wochenvolumen",
      },
      {
        id: "progression",
        title: "Progression, die Sie freigeben statt raten",
        text: "Die App schlägt anhand der Sätze mehr Gewicht, mehr Wiederholungen oder mehr Sätze vor, mit Ihren Steigerungsschritten. Sie wählen den Modus pro Plan: manuell, vorschlagen oder jeden Vorschlag freigeben, bevor der Klient ihn sieht.",
        bullets: ["Vorschläge warten auf Ihre Prüfung", "Einen Vorschlag bearbeiten, bevor er beim Klienten ankommt", "Eine Woche anpassen, ohne den Block neu zu bauen"],
        screenshot: "coachSuggestions",
        screenshotAlt: "Drei offene Progressionsvorschläge, jeweils mit Annehmen, Bearbeiten und Ablehnen",
      },
      {
        id: "library",
        title: "Jede Übung richtig gezeigt",
        text: "Über 1.200 Übungen mit Animationen, Muskeln und Geräten, dieselbe Bibliothek, die Ihr Klient in der Tasche hat. Fügen Sie eigene Übungen mit Ihren eigenen Hinweisen hinzu.",
        bullets: [],
        screenshot: "coachLibrary",
        screenshotAlt: "Die Übungsbibliothek als Raster mit Standbildern, nach einem Muskel gefiltert, darunter eine eigene Übung",
      },
    ],
  },
  clients: {
    title: "Ihre Klienten bekommen eine echte Trainings-App, keine dünne Begleit-App",
    intro: "MuscleQuest ist ein vollwertiger Trainingstracker. Klienten können neben Ihren Einheiten auch eigene loggen, ihren Verlauf behalten, wenn sie weiterziehen, und selbst entscheiden, was Sie sehen.",
    columns: [
      {
        title: "Loggen, das sie wirklich machen",
        text: "Vorausgefüllte Sätze, ein Pausentimer auch bei gesperrtem Handy, ein Scheibenrechner, und alles funktioniert offline im Studio.",
        screenshot: "workout",
        screenshotAlt: "Laufendes Training in der MuscleQuest-App bei Satz 4 von 5, vorausgefüllt mit vorgeschlagenen 50 kg für 8 Wiederholungen, der Pausentimer läuft",
      },
      {
        title: "Einwilligung eingebaut",
        text: "Klienten wählen, was sie teilen und ab wann. Sie können das Teilen jederzeit pausieren oder die Verbindung trennen.",
        screenshot: "phoneSharing",
        screenshotAlt: "Einstellungen zum Teilen mit dem Trainer in der MuscleQuest-App: was geteilt wird, seit wann, und die Schaltflächen zum Pausieren und Trennen",
      },
      {
        title: "Ihre Daten bleiben ihre Daten",
        text: "Verlauf, Bestleistungen und Statistiken liegen auf ihrem Handy, Sicherungen in der EU. Kostenlos und ohne Werbung.",
        screenshot: "stats",
        screenshotAlt: "Statistiken in der MuscleQuest-App mit Wochenauswertung, Summen für Trainings, Volumen und Zeit, letzten Trainings und Bestleistungen",
      },
    ],
  },
  early: {
    title: "Früher Zugang",
    text: "MuscleQuest Coach öffnet zuerst für eine kleine Gruppe von Trainern. Der frühe Zugang ist während der Pilotphase kostenlos, mit persönlicher Einrichtung und einem direkten Draht zum Entwickler. Die Preise werden vor dem allgemeinen Start bekannt gegeben, und die Trainer der Pilotphase erfahren sie zuerst.",
    bullets: ["Kostenlos während der Pilotphase", "Innerhalb von zwei Tagen von Hand eingerichtet", "Ihr Feedback bestimmt, was als Nächstes kommt"],
  },
  form: {
    title: "Zugang anfragen",
    labels: {
      name: "Name",
      email: "E-Mail",
      coachingSetting: "Wie coachen Sie?",
      clientCount: "Ungefähr wie viele Klienten?",
      clientPhones: "Die Handys Ihrer Klienten",
      message: "Noch etwas?",
      optional: "optional",
      turnstile: "Sicherheitsprüfung",
      options: {
        coachingSetting: { gym: "Im Studio", online: "Online", both: "Beides" },
        clientCount: { "1-5": "1 bis 5", "6-15": "6 bis 15", "16-40": "16 bis 40", "40+": "Mehr als 40" },
        clientPhones: { android: "Überwiegend Android", iphone: "Überwiegend iPhone", mixed: "Gemischt" },
      },
    },
    submit: "Zugang anfragen",
    sending: "Wird gesendet",
    note: { text: "Wir verwenden diese Angaben nur, um Ihren Zugang einzurichten und uns bei Ihnen zu melden.", privacyLink: "Siehe Datenschutzerklärung." },
    thanks: "Danke, {name}. Joseph meldet sich innerhalb von zwei Tagen mit Ihrem Login. Installieren Sie in der Zwischenzeit MuscleQuest auf Ihrem eigenen Handy und loggen Sie ein Training, so sehen Sie, was Ihre Klienten sehen.",
    thanksPlay: "MuscleQuest bei Google Play laden",
    errors: {
      nameRequired: "Geben Sie Ihren Namen ein.",
      nameTooLong: "Ihr Name darf höchstens 120 Zeichen lang sein.",
      emailRequired: "Geben Sie Ihre E-Mail-Adresse ein.",
      emailInvalid: "Geben Sie eine E-Mail-Adresse wie name@beispiel.de ein.",
      emailTooLong: "Ihre E-Mail-Adresse darf höchstens 254 Zeichen lang sein.",
      coachingSettingRequired: "Wählen Sie, wie Sie coachen.",
      clientCountRequired: "Wählen Sie, wie viele Klienten Sie ungefähr haben.",
      clientPhonesRequired: "Wählen Sie, welche Handys Ihre Klienten nutzen.",
      messageTooLong: "Ihre Nachricht darf höchstens 2.000 Zeichen lang sein.",
      network: "Der Server war nicht erreichbar. Prüfen Sie Ihre Verbindung und versuchen Sie es noch einmal, oder schreiben Sie an coach@musclequest.app.",
      server: "Bei uns ist etwas schiefgelaufen. Bitte versuchen Sie es noch einmal, oder schreiben Sie an coach@musclequest.app.",
      turnstile: "Die Sicherheitsprüfung wurde nicht abgeschlossen. Bitte versuchen Sie es noch einmal.",
    },
    noScript: "Dieses Formular braucht JavaScript. Schalten Sie es ein, oder schreiben Sie an coach@musclequest.app.",
  },
  faq: {
    title: "Was Trainer fragen",
    items: [
      { question: "Was brauchen meine Klienten?", answer: "Ein Android-Handy und die kostenlose MuscleQuest-App aus Google Play. Zum Trainieren ist kein Konto nötig; für die Verbindung mit Ihnen braucht es eine Google-Anmeldung auf dem Handy." },
      { question: "Zahlen meine Klienten etwas?", answer: "Nein. Die App ist kostenlos, ohne Werbung, und bleibt kostenlos." },
      { question: "Gibt es eine iPhone-App?", answer: "Noch nicht. Die iOS-App folgt nach dem Start von MuscleQuest Coach. Sagen Sie es uns im Formular, wenn die meisten Ihrer Klienten ein iPhone nutzen." },
      { question: "Wo werden die Daten gespeichert?", answer: "Die Trainingsdaten liegen auf dem Handy Ihres Klienten. Was er mit Ihnen teilt, wird in der EU gespeichert (Supabase, Irland) und Ihnen im Browser angezeigt. Die Übungsanimationen kommen von Cloudflare." },
      { question: "Kann ich meine bestehenden Pläne mitbringen?", answer: "Vorerst bauen Sie sie einmal im Builder als Vorlagen nach. Einen Import aus Tabellen gibt es noch nicht." },
      { question: "Was passiert, wenn ein Klient nicht mehr mit mir trainiert?", answer: "Sie legen pro Organisation fest, ob seine Trainerpläne als eigene Pläne auf seinem Handy bleiben oder entfernt werden. Sein Trainingsverlauf bleibt immer bei ihm. Ihre Aufzeichnungen über das Coaching bleiben bei Ihnen." },
      { question: "Was kostet es nach der Pilotphase?", answer: "Die Preise stehen vor dem allgemeinen Start fest, und die Trainer der Pilotphase erfahren sie zuerst. Der frühe Zugang selbst ist kostenlos." },
      { question: "Wie bekomme ich Zugang?", answer: "Füllen Sie das Formular aus. Der Entwickler richtet Ihre Organisation von Hand ein und schickt Ihnen Ihren Login innerhalb von zwei Tagen per E-Mail." },
    ],
  },
  closing: { title: "Bereit, in MuscleQuest zu coachen?", text: "Steigen Sie in die Pilotphase ein und starten Sie diese Woche.", button: "Frühen Zugang anfragen" },
  config,
};
