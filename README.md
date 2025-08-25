# 💕 Romantische Website für Mariia 💕

Eine wunderschöne, interaktive Website voller Liebe und Romantik für deine Freundin Mariia!

## ✨ Features

- **Animierter Hintergrund** mit schwebenden Herzen
- **Interaktive Elemente** mit Mausbewegungen
- **Romantische Nachrichten** die sich abwechseln
- **Animierte Zähler** für Herzschläge, Lächeln und Küsse
- **Modal-Popup** mit Liebeserklärung
- **Responsive Design** für alle Geräte
- **Schöne Animationen** und Effekte
- **Typing-Effekt** für Texte
- **Sound-Effekte** (optional)

## 🚀 So startest du die Website

1. **Öffne die Datei `index.html`** in deinem Browser
2. **Oder starte einen lokalen Server:**
   ```bash
   # Mit Python
   python -m http.server 8000
   
   # Mit Node.js (falls installiert)
   npx serve .
   ```

## 🎨 Anpassungen

### Persönliche Nachrichten ändern

Öffne `index.html` und ändere die Texte:

```html
<!-- Haupttitel -->
<h1 class="main-title">❤️ Mariia ❤️</h1>

<!-- Untertitel -->
<p class="subtitle">Du bist mein größtes Glück</p>

<!-- Liebesnachrichten -->
<div class="message-card">
    <h4>💖 Du bist wunderschön</h4>
    <p>Dein Lächeln erhellt jeden meiner Tage</p>
</div>
```

### Farben anpassen

In `style.css` kannst du die Farben ändern:

```css
body {
    background: linear-gradient(135deg, #ff6b9d, #c44569, #f8b4d9, #ff9ff3);
}
```

### Neue Nachrichten hinzufügen

In `script.js` findest du das Array mit den rotierenden Nachrichten:

```javascript
const loveMessages = [
    "Du bist mein größtes Glück",
    "Jeder Tag mit dir ist ein Geschenk",
    "Du machst mein Leben vollständig",
    "Ich liebe dich mehr als gestern, aber weniger als morgen",
    "Du bist mein Ein und Alles"
    // Hier neue Nachrichten hinzufügen!
];
```

## 📸 Foto hinzufügen

Ersetze den Platzhalter in `index.html`:

```html
<div class="photo-frame">
    <img src="dein-foto.jpg" alt="Unser Foto" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## 🎵 Musik hinzufügen

Füge einen Audio-Player hinzu:

```html
<audio autoplay loop>
    <source src="romantische-musik.mp3" type="audio/mpeg">
</audio>
```

## 💝 Weitere Ideen

- **Countdown** bis zum nächsten Treffen
- **Liebesgeschichte** mit Timeline
- **Gedichte** oder Zitate
- **Erinnerungen** an besondere Momente
- **Wunschliste** für gemeinsame Aktivitäten

## 🌟 Technische Details

- **HTML5** für Struktur
- **CSS3** mit modernen Animationen
- **JavaScript** für Interaktivität
- **Responsive Design** für alle Bildschirmgrößen
- **Google Fonts** für schöne Typografie

## 💖 Viel Spaß!

Diese Website ist voller Liebe und Zuneigung für Mariia. Jedes Element wurde mit viel Liebe gestaltet, um ihre Augen zum Leuchten zu bringen! 

**Du kannst die Website nach deinen Wünschen anpassen und erweitern. Der Code ist gut strukturiert und leicht zu verstehen.**

---

*Erstellt mit ❤️ für Mariia*

