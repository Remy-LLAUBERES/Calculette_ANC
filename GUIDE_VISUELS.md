# 🎨 Guide de Création des Visuels

Ce guide détaille comment créer tous les visuels nécessaires pour publier la Calculette ANC sur Google Play Store.

---

## 📋 Checklist des visuels requis

### ✅ OBLIGATOIRES
- [ ] **Icône 512x512** (format PNG, haute résolution)
- [ ] **2 screenshots minimum** (1080x1920 ou 1080x2400)
- [ ] **Feature Graphic (bannière)** 1024x500

### 📱 RECOMMANDÉS
- [ ] 4-8 screenshots (différents écrans de l'app)
- [ ] Vidéo promotionnelle 30-60 secondes (optionnel)
- [ ] Icône adaptative Android (foreground + background)

---

## 🖼️ 1. ICÔNE DE L'APPLICATION

### Spécifications techniques

| Propriété | Valeur |
|-----------|--------|
| Dimension | **512x512 pixels** |
| Format | PNG (32 bits) |
| Poids | < 1 MB |
| Transparence | NON (fond opaque requis) |
| Safe zone | Éviter contenu important dans les 15% de bordure |

### Recommandations design

**Couleurs :** Reprenez la charte actuelle
- Fond : `#f3f3f3` (gris clair) ou `#2e7d32` (vert)
- Texte/icône : `#2e7d32` (vert) ou blanc

**Éléments visuels suggérés :**
- 💧 Goutte d'eau (symbole eau/assainissement)
- 🔧 Outil/calculatrice stylisée
- 📊 Graphique simple
- 🏠 Maison avec fosse septique (schéma simplifié)

**Texte sur l'icône :**
- Option 1 : "ANC" en gros (lisible même petit)
- Option 2 : Aucun texte (icône purement graphique)
- ⚠️ Évitez les textes trop longs (illisibles en petit)

### Outils pour créer l'icône

#### Option 1 : Canva (RECOMMANDÉ pour débutants)
1. Aller sur https://www.canva.com
2. Créer un design personnalisé : 512x512 px
3. Utiliser les templates "App Icon"
4. Personnaliser avec :
   - Couleur de fond : `#2e7d32`
   - Texte : "ANC" en blanc, police moderne (Montserrat, Poppins)
   - Icône : goutte d'eau ou calculatrice
5. Télécharger en PNG

**Template suggéré :**
```
Fond : Vert (#2e7d32) avec léger dégradé
Centre : "ANC" en blanc, gras, grande taille
Coin bas droit : Petite goutte d'eau stylisée
```

#### Option 2 : Figma (pour designers)
1. Créer un Frame 512x512
2. Utiliser les grilles de sécurité (safe zone)
3. Exporter en PNG @2x

#### Option 3 : Android Asset Studio
1. Aller sur https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html
2. Upload une image de base
3. Ajuster padding, couleur de fond
4. Télécharger le pack d'icônes

### Icône Adaptative (Adaptive Icon)

**Pour Android 8.0+**, créez 2 calques :

**Foreground (1er plan) :**
- Dimension : 512x512
- Contenu : Logo/texte principal
- Transparence : OUI
- Centre uniquement (cercle de 320px de diamètre)

**Background (arrière-plan) :**
- Dimension : 512x512
- Contenu : Couleur unie ou motif simple
- Transparence : NON
- Exemple : Fond vert `#2e7d32`

**Outils :**
- https://adapticon.tooo.io/ (générateur en ligne)
- Android Asset Studio (lien ci-dessus)

---

## 📱 2. SCREENSHOTS

### Spécifications techniques

#### Téléphones (OBLIGATOIRE)
| Propriété | Valeur |
|-----------|--------|
| Dimension | 1080x1920 (ou 1080x2400 pour écrans 20:9) |
| Format | PNG ou JPG |
| Nombre | 2 minimum, 8 maximum |
| Poids | < 8 MB chacun |

#### Tablettes (OPTIONNEL)
| Propriété | Valeur |
|-----------|--------|
| Dimension | 1920x1080 ou 2560x1600 |
| Format | PNG ou JPG |
| Nombre | 2 minimum |

### Screenshots à créer (suggestions)

#### Screenshot 1 : Écran principal
**Contenu :**
- Formulaire avec tous les champs visibles
- Titre "Calculette ANC" en haut
- Champs : Pièces principales, occupants, type résidence
- Section tests Porchet visible

**Légende :** "Interface simple et intuitive"

#### Screenshot 2 : Résultats de calcul
**Contenu :**
- Résultat d'un calcul complet affiché
- Avec les valeurs :
  - Volume fosse : 3.0 m³
  - K moyen : 35.2 mm/h
  - CHA : 22.5 L/J.m²
  - Surface épandage : 35 m²

**Légende :** "Résultats détaillés conformes DTU 64.1"

#### Screenshot 3 : Tests Porchet (optionnel)
**Contenu :**
- Zoom sur la section "Tests de perméabilité"
- 3 tests remplis avec des valeurs réalistes

**Légende :** "Calcul automatique du coefficient K"

#### Screenshot 4 : Pages légales (optionnel)
**Contenu :**
- Footer avec liens Mentions légales / CGU / Confidentialité

**Légende :** "Transparent et conforme RGPD"

### Comment créer les screenshots

#### Méthode 1 : Émulateur Android (RECOMMANDÉ)

**Avec Android Studio :**
1. Installer Android Studio
2. Ouvrir Device Manager
3. Créer un émulateur :
   - Device : Pixel 5 ou Pixel 6
   - Résolution : 1080x2400
   - Android 12 ou plus
4. Ouvrir votre app hébergée sur GitHub Pages
5. Remplir le formulaire avec des données réalistes
6. Faire les screenshots :
   - Windows/Linux : `Ctrl + S`
   - Mac : `Cmd + S`
   - Ou bouton caméra dans la barre latérale

**Valeurs réalistes à saisir :**
```
Pièces principales : 5
Occupants : 4
Type : Résidence principale
Volume fosse : 3000 (litres) ou laisser vide

Test 1 : 12 L, 8 min
Test 2 : 14 L, 9 min
Test 3 : 13 L, 8.5 min
```

#### Méthode 2 : Navigateur Chrome (plus simple)

1. Ouvrir Chrome
2. Aller sur votre app (GitHub Pages)
3. Ouvrir DevTools (F12)
4. Cliquer sur l'icône mobile (Ctrl + Shift + M)
5. Choisir "Responsive"
6. Définir : 1080x1920
7. Remplir l'app avec des données
8. Screenshot :
   - Windows : `Win + Shift + S`
   - Mac : `Cmd + Shift + 4`

#### Méthode 3 : Smartphone réel

1. Installer l'app depuis GitHub Pages
2. Remplir avec des vraies données
3. Screenshot :
   - Android : Power + Volume bas
   - iPhone : Power + Volume haut

**Attention :** Vérifiez que la résolution est bien 1080x1920 (ou ajustez après)

### Améliorer vos screenshots

**Ajouter des annotations (optionnel) :**

Utilisez **Canva** ou **Figma** pour :
- Ajouter des flèches pointant vers des fonctionnalités
- Mettre en surbrillance des éléments clés
- Ajouter du texte explicatif
- Créer un fond coloré autour du screenshot

**Template Canva :**
1. Créer un design 1080x1920
2. Importer votre screenshot
3. Ajouter un fond (ex: dégradé vert)
4. Centrer le screenshot (90% de la hauteur)
5. Ajouter texte en haut : "✅ Calculs conformes DTU 64.1"
6. Exporter en PNG

---

## 🎨 3. FEATURE GRAPHIC (Bannière)

### Spécifications techniques

| Propriété | Valeur |
|-----------|--------|
| Dimension | **1024x500 pixels** |
| Format | PNG ou JPG (24 bits) |
| Poids | < 1 MB |
| Texte | Lisible même en petit |

### Recommandations design

**Éléments à inclure :**
- Logo/icône de l'app (à gauche ou centre)
- Nom : "Calculette ANC"
- Slogan : "Dimensionnement ANC professionnel"
- Visuels : gouttes d'eau, schéma de fosse, pictogrammes

**Couleurs :**
- Fond : Dégradé vert (#1b5e20 → #2e7d32)
- Texte : Blanc
- Accents : Jaune/orange pour contraste

**Typographie :**
- Titre : Gras, grande taille (60-80px)
- Sous-titre : Regular, taille moyenne (30-40px)

### Template suggéré

```
┌──────────────────────────────────────────────┐
│                                              │
│  [ICÔNE]    CALCULETTE ANC                  │
│             Assainissement Non Collectif     │
│                                              │
│  ✓ DTU 64.1  ✓ Hors ligne  ✓ Professionnel │
│                                              │
└──────────────────────────────────────────────┘
```

### Outils pour créer la bannière

#### Option 1 : Canva (RECOMMANDÉ)
1. Créer un design personnalisé : 1024x500
2. Fond : Dégradé vert
3. Ajouter :
   - Icône de l'app (importée, 200x200, à gauche)
   - Texte "CALCULETTE ANC" (grande taille, blanc, gras)
   - Sous-texte "Assainissement professionnel"
   - 3 icônes : ✓ DTU 64.1, ✓ Hors ligne, ✓ Pro
4. Télécharger en PNG

#### Option 2 : Figma
Template disponible sur Figma Community : cherchez "Google Play Feature Graphic"

#### Option 3 : Photoshop / GIMP
Si vous maîtrisez ces outils.

### Exemples de textes

**Version 1 (professionnelle) :**
```
CALCULETTE ANC
Dimensionnement conforme DTU 64.1
```

**Version 2 (bénéfices) :**
```
CALCULETTE ANC
Fosses, perméabilité, épandage en 3 clics
```

**Version 3 (technique) :**
```
CALCULETTE ANC PRO
Tests Porchet • Coefficient K • Surface d'épandage
```

---

## 🎬 4. VIDÉO PROMOTIONNELLE (Optionnel)

### Spécifications techniques

| Propriété | Valeur |
|-----------|--------|
| Durée | 30-120 secondes |
| Format | MP4, MPEG, AVI, WMV |
| Résolution | 1920x1080 (Full HD) minimum |
| Poids | < 100 MB |
| Audio | Optionnel (musique de fond) |

### Script suggéré (30 secondes)

```
[0-5s]
Écran : "Professionnel de l'ANC ?"
Voix off : "Vous dimensionnez des systèmes d'assainissement ?"

[5-10s]
Montrer : Interface de l'app, saisie rapide des données

[10-15s]
Montrer : Tests Porchet, calcul du K

[15-20s]
Montrer : Résultats (volume fosse, surface épandage)

[20-25s]
Texte : "✓ Conforme DTU 64.1  ✓ 100% hors ligne  ✓ 5€"

[25-30s]
Logo RLCodeWorks + "Téléchargez maintenant"
```

### Outils de création vidéo

**Débutants :**
- Canva Video (templates prêts)
- Clipchamp (gratuit, Windows 11)

**Intermédiaires :**
- DaVinci Resolve (gratuit, professionnel)
- iMovie (Mac)

**Capture d'écran :**
- OBS Studio (gratuit, multi-plateforme)
- Screen Recorder (Chrome extension)

---

## 📐 Dimensions récapitulatives

| Élément | Dimension | Format |
|---------|-----------|--------|
| Icône principale | 512x512 | PNG |
| Icône haute résolution | 512x512 | PNG |
| Adaptive icon (foreground) | 512x512 | PNG |
| Adaptive icon (background) | 512x512 | PNG |
| Screenshot téléphone | 1080x1920 | PNG/JPG |
| Screenshot tablette | 1920x1080 | PNG/JPG |
| Feature Graphic | 1024x500 | PNG/JPG |
| Vidéo promo | 1920x1080 | MP4 |

---

## ✅ Checklist avant upload

### Icône
- [ ] 512x512 pixels exactement
- [ ] PNG 32 bits
- [ ] Pas de transparence
- [ ] Contenu centré (safe zone respectée)
- [ ] Lisible en petit (64x64)

### Screenshots
- [ ] Minimum 2 screenshots
- [ ] 1080x1920 ou 1080x2400
- [ ] Contenu réel de l'app (pas de mockups)
- [ ] Texte lisible
- [ ] Pas de contenu protégé par copyright
- [ ] Ordre logique (parcours utilisateur)

### Feature Graphic
- [ ] 1024x500 pixels exactement
- [ ] PNG ou JPG
- [ ] Texte lisible même en petit
- [ ] Cohérent avec l'identité de l'app
- [ ] Pas de contenu trompeur

---

## 🎨 Palette de couleurs RLCodeWorks

```css
Vert principal:  #2e7d32
Vert foncé:      #1b5e20
Vert clair:      #4caf50
Fond gris:       #f3f3f3
Gris foncé:      #333333
Blanc:           #ffffff
```

---

## 🆘 Ressources et outils

### Création graphique
- **Canva** : https://www.canva.com (gratuit)
- **Figma** : https://www.figma.com (gratuit)
- **Android Asset Studio** : https://romannurik.github.io/AndroidAssetStudio/

### Screenshots
- **Android Studio** : https://developer.android.com/studio
- **Screely** : https://screely.com (ajouter fond coloré)
- **Mockuphone** : https://mockuphone.com (device frames)

### Icônes gratuites
- **Flaticon** : https://www.flaticon.com
- **Icons8** : https://icons8.com
- **Font Awesome** : https://fontawesome.com

### Vidéo
- **OBS Studio** : https://obsproject.com
- **DaVinci Resolve** : https://www.blackmagicdesign.com/products/davinciresolve

---

## 📂 Organisation des fichiers

Créez un dossier `assets/` pour organiser vos visuels :

```
Calculette_ANC/
├── assets/
│   ├── icon-512.png
│   ├── icon-adaptive-foreground.png
│   ├── icon-adaptive-background.png
│   ├── screenshots/
│   │   ├── screenshot-1-main.png
│   │   ├── screenshot-2-results.png
│   │   ├── screenshot-3-porchet.png
│   │   └── screenshot-4-legal.png
│   ├── feature-graphic.png
│   └── promo-video.mp4 (optionnel)
```

---

**Temps estimé pour créer tous les visuels :** 2-4 heures

**Prochaine étape :** Une fois les visuels créés, passez au guide de génération APK/AAB

---

**Dernière mise à jour :** 5 novembre 2025
