Voici le README complété et enrichi :

```markdown
# Le Phosphore — Salle de spectacle

## Description

Website for Le Phosphore, a performing arts venue featuring theatre, stand-up and concerts. Built as part of the DWWM
2026 ECF AT#1 evaluation.

## Stack

- HTML5 semantic
- CSS3 / SASS (BEM methodology)
- Vanilla JavaScript (ES6+)
- JSON data
- GSAP (curtain animation)
- Font Awesome + Phosphor Icons

## Project Structure
```

DWWM-ECF1-Nathanael/ ├── index.html ├── pages/ │ ├── programmation.html │ ├── infos-pratiques.html │ └──
mentions-legales.html ├── src/ │ ├── scss/ │ │ ├── components/ │ │ └── pages/ │ ├── js/ │ │ ├── main.js │ │ ├──
programmation.js │ │ ├── burger.js │ │ ├── cookies.js │ │ ├── curtain.js │ │ └── info-bubble.js │ ├── assets/ │ │ ├──
images/ │ │ └── fonts/ │ └── data/ │ └── spectacles.json └── dist/ └── css/ └── main.min.css

````

## Features
- Responsive design (mobile-first)
- Theater curtain opening animation (GSAP)
- Dynamic show cards fetched from JSON
- Filter shows by type, date and availability
- RGAA accessibility compliant
- Cookie consent banner
- Tooltip on seating plan zones
- Toggle description on show cards

## Installation
1. Clone the repository
```bash
git clone https://github.com/NathanaelKenzeyGit/DWWM-ECF1-Nathanael.git
````

2. Open with Live Server in VS Code
3. Live Sass Compiler (Glenn Marks) must be running

## Deployment

- GitHub Pages: https://NathanaelKenzeyGit.github.io/DWWM-ECF1-Nathanael/
- OVH: deployment via FileZilla SFTP port 22

## Accessibility

- WCAG 2.1 AA compliant
- RGAA 4.1 verified with axe DevTools
- Contrast ratios verified on all text elements
- aria-label, aria-hidden, aria-expanded implemented

## Author

Nathanael Kenzey — DWWM 2026

```

```
