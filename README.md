# Portfolio Personnel

## Présentation
Portfolio personnel statique (HTML/CSS/JS), aligné sur mon CV (`charles_noah_resume.pdf`).
Le site est en anglais ; son contenu (expériences, chiffres, compétences) doit toujours dire la même chose que le CV.

## URL du portfolio :

https://charlesnoah344.github.io/Portfolio/

## Structure de la page
1. **Accroche** : nom, rôle, disponibilités, boutons d'action et chiffres clés
2. **Experience** : Eco PBC, ECAM Engineering Consult, Neurogreen (mêmes chiffres que le CV)
3. **Projects** : Kitbox (projet phare, avec démo vidéo), Traffic sign classification, Networked Quarto AI
4. **Skills** : mêmes catégories que le CV, chaque catégorie renvoie à l'endroit où la compétence a été utilisée (« Applied in »)
5. **Education** : diplômes, certifications HarvardX, langues, engagements
6. **Contact** : liens directs et formulaire (Formspree)

## Fichiers
- `index.html` : contenu de la page
- `style.css` : mise en page et style (couleurs dans les variables `:root`)
- `script.js` : menu mobile, lien actif du menu, apparition des blocs au défilement
- `img/` : photos et logos, en WebP (taille réduite pour un chargement rapide)
- `icons/` : logos des technologies (SVG)
- `favicon.svg` : icône de l'onglet

## Ajouter une compétence
1. Mettre le logo SVG dans `icons/` (sources utilisées : [Devicon](https://devicon.dev) et [Simple Icons](https://simpleicons.org)).
   Si le logo est trop sombre pour le fond noir, changer sa couleur `fill` dans le fichier SVG.
2. Copier une ligne `<li class="chip">` dans la bonne carte de la section `#skills` de `index.html`.
   Sans logo disponible, remplacer `<img>` par une icône Boxicons (ex. `<i class="bx bx-chip"></i>`).
   Pour une compétence en cours d'apprentissage, utiliser `class="chip chip-muted"` et ajouter `<em>learning</em>`.

## Ajouter une image
Convertir l'image en WebP et la redimensionner à sa taille d'affichage (environ 1200 px de large au maximum)
avant de la mettre dans `img/`, par exemple avec [Squoosh](https://squoosh.app).

## Installation locale
Aucun outil de build n'est nécessaire, le site est 100% statique.
1. Cloner le repo :
   ```
   git clone https://github.com/charlesnoah344/Portfolio.git
   ```
2. Ouvrir `index.html` dans le navigateur (ou lancer un serveur local type Live Server).

## Déploiement (GitHub Pages)
1. Pousser le repo sur GitHub.
2. Dans **Settings → Pages**, choisir "Deploy from a branch", branche `master`, dossier `/ (root)`.
3. Le site est accessible à `https://charlesnoah344.github.io/Portfolio/`.
