# 📦 Guide de Génération APK/AAB

Ce guide explique comment transformer votre PWA (Progressive Web App) en application Android (.aab) prête à être publiée sur Google Play Store.

---

## 📋 Prérequis

Avant de commencer, assurez-vous que :

- [ ] L'application est hébergée sur GitHub Pages (ou autre hébergement HTTPS)
- [ ] L'URL est accessible : `https://remy-llauberes.github.io/Calculette_ANC/`
- [ ] Le Service Worker fonctionne correctement
- [ ] Le manifest.json est valide
- [ ] Tous les visuels sont prêts (icône 512x512, screenshots, etc.)

---

## 🎯 Deux méthodes disponibles

### Méthode 1 : PWABuilder (RECOMMANDÉ - Débutants)
✅ Simple, rapide, sans installation
✅ Interface graphique
✅ Génère un AAB prêt pour Google Play
⏱️ Temps : 10-15 minutes

### Méthode 2 : Bubblewrap CLI (Avancé)
⚙️ Ligne de commande
⚙️ Plus de contrôle sur la configuration
⚙️ Nécessite Node.js et Android SDK
⏱️ Temps : 30-60 minutes

**👉 Pour démarrer, nous recommandons la Méthode 1**

---

## 🚀 MÉTHODE 1 : PWABuilder (Simple)

### Étape 1 : Vérifier votre PWA

1. Aller sur https://www.pwabuilder.com
2. Entrer l'URL : `https://remy-llauberes.github.io/Calculette_ANC/`
3. Cliquer sur **"Start"**

**PWABuilder va scanner votre app et afficher :**
- ✅ Service Worker détecté
- ✅ Manifest valide
- ✅ HTTPS activé
- ⚠️ Avertissements éventuels (à corriger)

**Score attendu :** > 130/200 minimum

### Étape 2 : Générer le package Android

1. Cliquer sur **"Next"** après le scan
2. Dans la section **"Store Package"**, sélectionner **"Android"**
3. Cliquer sur **"Generate"**

### Étape 3 : Configurer les options Android

**Fenêtre de configuration :**

#### 📝 Informations de base
```
Package ID: com.rlcodeworks.calculetteanc
App name: Calculette ANC
Launcher name: Calculette ANC
Version: 1.0.0
Version code: 1
Host: remy-llauberes.github.io
Start URL: /Calculette_ANC/
```

#### 🎨 Display Options
```
Display mode: standalone
Orientation: portrait
Theme color: #2e7d32
Background color: #f3f3f3
```

#### 🖼️ Icons & Splash Screen
```
Icon URL: https://remy-llauberes.github.io/Calculette_ANC/icon.png
Fallback behavior: default
Splash screen: Auto-generated
```

#### ⚙️ Advanced Options
```
WebView fallback: Enabled
Shortcuts: None (pour l'instant)
Notification delegation: Enabled
```

### Étape 4 : Télécharger le package

1. Cliquer sur **"Download"**
2. Un fichier ZIP sera téléchargé : `calculette-anc-android.zip`

### Étape 5 : Extraire et signer

**Contenu du ZIP :**
```
calculette-anc-android/
├── app-release-signed.aab  ← Fichier principal pour Google Play
├── assetlinks.json
├── signing-key.keystore
├── signing-key-info.txt
└── README.md
```

**IMPORTANT : Conservez précieusement :**
- `signing-key.keystore` : Clé de signature (NE JAMAIS PERDRE)
- `signing-key-info.txt` : Informations sur la clé

**⚠️ ATTENTION :** Si vous perdez la clé de signature, vous ne pourrez JAMAIS mettre à jour l'app sur le Play Store. Sauvegardez-la en lieu sûr !

### Étape 6 : Vérifier le fichier AAB

Le fichier `app-release-signed.aab` est prêt à être uploadé sur Google Play Console.

**Taille attendue :** 1-3 MB environ

---

## 🔧 MÉTHODE 2 : Bubblewrap CLI (Avancé)

**Réservé aux développeurs ayant de l'expérience.**

### Prérequis techniques

- Node.js 14+ installé
- JDK 8+ installé
- Android SDK installé

### Étape 1 : Installer Bubblewrap

```bash
npm install -g @bubblewrap/cli
```

### Étape 2 : Initialiser le projet

```bash
bubblewrap init --manifest https://remy-llauberes.github.io/Calculette_ANC/manifest.json
```

**Répondre aux questions :**
```
? Application package name: com.rlcodeworks.calculetteanc
? Application name: Calculette ANC
? Navigation color: #2e7d32
? Display mode: standalone
? Orientation: portrait
? Use Chrome as fallback? Yes
```

### Étape 3 : Construire l'APK/AAB

**Pour un AAB (Google Play) :**
```bash
bubblewrap build --aab
```

**Pour un APK (test local) :**
```bash
bubblewrap build --apk
```

### Étape 4 : Fichier généré

Le fichier sera créé dans :
```
./app-release-signed.aab
```

---

## 🔐 Digital Asset Links (Vérification du domaine)

Pour que Google associe votre app à votre site web, vous devez créer un fichier `assetlinks.json`.

### Étape 1 : Générer le SHA-256 de votre clé

**Si vous avez utilisé PWABuilder :**
Le SHA-256 est dans `signing-key-info.txt`

**Si vous avez généré manuellement une clé :**
```bash
keytool -list -v -keystore signing-key.keystore -alias key
```

Copiez le **SHA256** (format : `XX:XX:XX:...`)

### Étape 2 : Créer assetlinks.json

Créez le fichier `.well-known/assetlinks.json` dans votre repository :

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.rlcodeworks.calculetteanc",
    "sha256_cert_fingerprints": [
      "XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX"
    ]
  }
}]
```

Remplacez `XX:XX:...` par votre SHA-256.

### Étape 3 : Héberger le fichier

**Structure du repository :**
```
Calculette_ANC/
├── .well-known/
│   └── assetlinks.json
├── index.html
├── manifest.json
└── ...
```

**Vérifier l'accessibilité :**
```
https://remy-llauberes.github.io/Calculette_ANC/.well-known/assetlinks.json
```

Ce fichier doit être accessible publiquement.

---

## 🧪 Tester l'APK localement

Avant d'uploader sur Google Play, testez l'APK sur un appareil réel.

### Méthode 1 : Via USB (Android Debug Bridge)

1. Activer le **mode développeur** sur votre téléphone Android :
   - Paramètres > À propos du téléphone
   - Appuyer 7 fois sur "Numéro de build"
   - Retour > Options pour développeurs > Activer "Débogage USB"

2. Connecter le téléphone à l'ordinateur via USB

3. Installer l'APK :
```bash
adb install app-release.apk
```

### Méthode 2 : Via Google Play Console (Test interne)

**Plus simple et recommandé :**

1. Uploader l'AAB sur Google Play Console
2. Créer une version "Test interne"
3. Ajouter votre email comme testeur
4. Installer depuis le lien de test fourni

---

## 📤 Uploader sur Google Play Console

### Prérequis

- Compte développeur Google Play créé (25$)
- Fichier AAB signé prêt
- Tous les visuels prêts

### Étape 1 : Créer l'application

1. Aller sur https://play.google.com/console
2. Cliquer sur **"Créer une application"**
3. Remplir :
   - Nom : **Calculette ANC**
   - Langue par défaut : **Français (France)**
   - Type : **Application**
   - Gratuite ou payante : **Payante** (5€)
4. Accepter les déclarations
5. Cliquer sur **"Créer l'application"**

### Étape 2 : Configurer la fiche de l'application

#### 🖼️ Graphismes
- **Icône** : 512x512 (upload)
- **Feature Graphic** : 1024x500 (upload)
- **Screenshots téléphone** : 2-8 images (1080x1920)
- **Screenshots tablette** : Optionnel

#### 📝 Descriptions
- **Titre** : Calculette ANC - Assainissement
- **Description courte** : (copier depuis DESCRIPTIONS_MARKETING.md)
- **Description complète** : (copier depuis DESCRIPTIONS_MARKETING.md)

#### 🏷️ Catégorisation
- **Catégorie** : Outils
- **Tags** : ANC, assainissement, fosse septique, DTU 64.1, épandage

#### 🌍 Coordonnées
- **Email** : Votre email professionnel
- **Site web** : https://remy-llauberes.github.io/Calculette_ANC/
- **Téléphone** : Optionnel
- **Adresse** : 1401 vieille route de Grasse, 83300 DRAGUIGNAN

#### 🔒 Confidentialité
- **Politique de confidentialité** :
  ```
  https://remy-llauberes.github.io/Calculette_ANC/politique-confidentialite.html
  ```

### Étape 3 : Uploader l'AAB

1. Menu de gauche : **"Versions de test" > "Test interne"**
2. Cliquer sur **"Créer une version"**
3. **Uploader l'AAB** : Glisser-déposer `app-release-signed.aab`
4. **Nom de version** : 1.0.0
5. **Notes de version** :
   ```
   Première version de la Calculette ANC
   - Dimensionnement de fosses septiques (DTU 64.1)
   - Calcul de perméabilité (tests Porchet)
   - Surface d'épandage
   - Fréquence de vidange
   ```
6. Cliquer sur **"Enregistrer"** puis **"Examiner la version"**

### Étape 4 : Classification du contenu

1. Remplir le questionnaire de classification
2. **Public cible** : +3 ans (aucun contenu sensible)
3. **Publicité** : Non
4. **Achats intégrés** : Non

### Étape 5 : Tarification et distribution

1. **Prix** : 5,00 €
2. **Pays** : France (cocher)
3. **Autres pays** : Belgique, Suisse, Luxembourg (optionnel)

### Étape 6 : Soumettre pour examen

1. Vérifier que toutes les sections sont complètes (✅ vert)
2. Cliquer sur **"Envoyer pour examen"**

**Délai d'examen :** 1-7 jours généralement

---

## ⚠️ Problèmes courants et solutions

### Erreur : "Manifest invalide"

**Cause :** Le manifest.json n'est pas accessible ou mal formaté

**Solution :**
1. Vérifier : https://votre-url.com/manifest.json
2. Valider le JSON : https://jsonlint.com
3. Vérifier les chemins des icônes

### Erreur : "Service Worker non détecté"

**Cause :** Le Service Worker ne s'enregistre pas correctement

**Solution :**
1. Vérifier que HTTPS est activé
2. Console (F12) > Application > Service Workers
3. Vérifier le fichier `sw.js` dans le cache

### Erreur : "SHA-256 mismatch"

**Cause :** Le Digital Asset Links ne correspond pas

**Solution :**
1. Re-générer le SHA-256 de votre keystore
2. Mettre à jour `assetlinks.json`
3. Attendre 5-10 minutes (propagation)

### APK refusé : "Version code trop faible"

**Cause :** Vous essayez d'uploader une version avec un numéro inférieur

**Solution :**
Dans `twa-manifest.json` (Bubblewrap) ou lors de la génération PWABuilder :
```json
"versionCode": 2  // Incrémenter à chaque nouvelle version
"versionName": "1.0.1"
```

---

## 🔄 Mises à jour de l'application

Pour publier une mise à jour :

### 1. Modifier votre code
Faites vos modifications dans `index.html`, `sw.js`, etc.

### 2. Mettre à jour le Service Worker
```javascript
const CACHE_NAME = "anc-cache-v6"; // v5 → v6
```

### 3. Push sur GitHub
```bash
git add .
git commit -m "Mise à jour : ajout de nouvelles fonctionnalités"
git push
```

### 4. Re-générer l'AAB
- Retour sur PWABuilder
- Re-générer avec les MÊMES signing keys (important !)
- **Version code** : Incrémenter (2, 3, 4...)
- **Version name** : 1.0.1, 1.1.0, etc.

### 5. Uploader sur Google Play Console
- Production > Créer une version
- Uploader le nouvel AAB
- Notes de version (changelog)
- Soumettre

---

## 📊 Versions et numérotation

### Version Code (entier)
```
Version 1 : versionCode = 1
Version 2 : versionCode = 2
Version 3 : versionCode = 3
...
```
**Toujours croissant**, Google Play refuse une version inférieure.

### Version Name (chaîne)
```
1.0.0 : Première version
1.0.1 : Correctif mineur
1.1.0 : Nouvelle fonctionnalité
2.0.0 : Refonte majeure
```

**Format recommandé :** Semantic Versioning (Major.Minor.Patch)

---

## ✅ Checklist finale avant publication

### Fichiers
- [ ] AAB signé généré
- [ ] Taille < 150 MB
- [ ] Version code et name corrects
- [ ] Signing key sauvegardée en lieu sûr

### Google Play Console
- [ ] Graphismes uploadés (icône, bannière, screenshots)
- [ ] Descriptions remplies (courte + longue)
- [ ] Politique de confidentialité (lien public)
- [ ] Classification du contenu complétée
- [ ] Prix défini : 5,00 €
- [ ] Pays sélectionnés

### Tests
- [ ] App testée sur émulateur
- [ ] App testée sur appareil réel
- [ ] Tous les calculs fonctionnent
- [ ] Mode hors ligne fonctionne
- [ ] Liens vers pages légales fonctionnent

---

## 🎉 Après publication

**Une fois approuvé par Google :**

1. **Promotion**
   - Partager le lien Google Play
   - Annoncer sur LinkedIn / réseaux sociaux
   - Contacter la presse spécialisée (BTP, génie civil)

2. **Suivi**
   - Consulter les statistiques (Google Play Console)
   - Répondre aux avis utilisateurs (< 48h recommandé)
   - Corriger les bugs signalés rapidement

3. **Mises à jour**
   - Planifier des updates régulières (tous les 2-3 mois)
   - Ajouter les fonctionnalités demandées
   - Maintenir la conformité avec les nouvelles normes

---

## 📚 Ressources utiles

- **PWABuilder** : https://www.pwabuilder.com
- **Bubblewrap** : https://github.com/GoogleChromeLabs/bubblewrap
- **Google Play Console** : https://play.google.com/console
- **Digital Asset Links** : https://developers.google.com/digital-asset-links
- **Guide Android** : https://developer.android.com/guide

---

## 🆘 Support

**Problème avec PWABuilder ?**
→ https://github.com/pwa-builder/PWABuilder/issues

**Problème avec Google Play ?**
→ https://support.google.com/googleplay/android-developer

**Problème avec l'app ?**
→ Vérifier les logs : Console (F12) > Console / Application

---

**Temps total estimé :** 1-2 heures (première fois)

**Prochaine étape :** Upload sur Google Play Console et publication !

---

**Dernière mise à jour :** 5 novembre 2025
