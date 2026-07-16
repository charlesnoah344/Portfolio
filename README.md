# Portfolio Personnel

## Présentation
Portfolio personnel basé sur un template statique HTML/CSS/JS. Il présente mes compétences, mes projets et permet de me contacter directement.

## Fonctionnalités
- Design responsive (desktop / mobile)
- Section Projets avec descriptions et liens
- Section About (formation, compétences, certifications, réalisations)
- Formulaire de contact (via Formspree)

## Technologies
- **HTML** — structure du contenu
- **CSS** — mise en page et style
- **JavaScript** — menu mobile

## Installation locale
Aucun outil de build n'est nécessaire, le site est 100% statique.
1. Cloner le repo :
   ```
   git clone <url-de-ton-repo>
   ```
2. Ouvrir `index.html` dans le navigateur (ou lancer un serveur local type Live Server).

## Checklist avant publication

- [x] Nom / prénom (logo, titre, footer) — Charles Noah
- [x] Titre / rôle professionnel
- [x] Bio (section Home)
- [x] Liens GitHub et LinkedIn (header + footer)
- [x] Lien vers le CV — `CV_Fr.pdf` inclus dans le repo
- [ ] Photo de profil : remplacer `profilephoto.jpeg` par ta propre photo
- [x] Formation, compétences techniques, certifications, réalisations (basé sur le CV)
- [x] 7 cartes projets : titres, descriptions et liens GitHub (basés sur github.com/charlesnoah344) — **les images restent celles du template** (`n8n1.png`, `n8n2.png`, `ML.png`, `Result.PNG`, `demo.png`, `demo2.png`, `demo3.png`), à remplacer par de vraies captures de tes projets
- [ ] Endpoint du formulaire de contact : créer un formulaire sur [Formspree](https://formspree.io) et remplacer l'URL dans le `<form action="...">` (seul placeholder restant dans `index.html`)
- [x] Copyright du footer

## Déploiement (GitHub Pages)
1. Pousser le repo sur GitHub.
2. Dans **Settings → Pages**, choisir "Deploy from a branch", branche `main`, dossier `/ (root)`.
3. Le site sera accessible à `https://<ton-user>.github.io/<nom-du-repo>/`.
