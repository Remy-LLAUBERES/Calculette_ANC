# 🌐 Configuration GitHub Pages

Ce guide vous explique comment héberger gratuitement la Calculette ANC sur GitHub Pages.

---

## 📋 Prérequis

- Un compte GitHub (gratuit)
- Le repository `Calculette_ANC` déjà créé
- Git installé sur votre machine

---

## 🚀 Méthode 1 : Via l'interface GitHub (RECOMMANDÉ - Le plus simple)

### Étape 1 : Aller dans les paramètres du repository

1. Allez sur https://github.com/Remy-LLAUBERES/Calculette_ANC
2. Cliquez sur l'onglet **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**

### Étape 2 : Activer GitHub Pages

1. Sous **Source**, sélectionnez :
   - **Branch** : `main` (ou `master` selon votre branche principale)
   - **Folder** : `/ (root)`

2. Cliquez sur **Save**

### Étape 3 : Attendre le déploiement

- GitHub va construire et déployer votre site
- Cela prend généralement **1-2 minutes**
- Un message vert apparaîtra avec l'URL :

```
Your site is published at https://remy-llauberes.github.io/Calculette_ANC/
```

### Étape 4 : Vérifier le déploiement

1. Attendez 2 minutes
2. Visitez l'URL fournie
3. Vérifiez que l'application fonctionne correctement

---

## 🚀 Méthode 2 : Avec une action GitHub (Automatique)

Si vous voulez un déploiement automatique à chaque push :

### Créer le workflow

Créez le fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Pages
        uses: actions/configure-pages@v3

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### Activer GitHub Pages

1. Settings > Pages
2. Source : **GitHub Actions**
3. Chaque push sur `main` déclenchera un déploiement automatique

---

## 🌍 Votre URL finale

Une fois configuré, votre application sera accessible à :

```
https://remy-llauberes.github.io/Calculette_ANC/
```

**Important :** Utilisez cette URL pour :
- Générer l'APK sur PWABuilder.com
- La politique de confidentialité dans Google Play Console
- Les tests avant publication

---

## 🔧 Résolution de problèmes

### L'application ne se charge pas

**Problème :** Page blanche ou erreur 404

**Solutions :**

1. **Vérifier le chemin des fichiers**
   - Tous les chemins doivent être relatifs : `./icon.png` et non `/icon.png`
   - Vérifiez dans `index.html`, `manifest.json` et `sw.js`

2. **Vérifier le Service Worker**
   - Ouvrez la Console (F12)
   - Onglet "Application" > "Service Workers"
   - Décochez "Offline" si activé
   - Cliquez sur "Unregister" puis rechargez la page

3. **Vider le cache**
   ```
   Ctrl + Shift + R (Windows/Linux)
   Cmd + Shift + R (Mac)
   ```

### Erreur "Manifest.json not found"

**Solution :** Vérifiez que le chemin dans `index.html` est correct :

```html
<link rel="manifest" href="./manifest.json">
```

### Service Worker ne se charge pas

**Problème :** HTTPS requis pour les Service Workers

**Solution :** GitHub Pages fournit automatiquement HTTPS, mais :
- Attendez 5-10 minutes après activation
- Vérifiez que vous accédez via `https://` et non `http://`

---

## ✅ Vérifications avant publication

Avant de générer l'APK, vérifiez que tout fonctionne :

### 1. Test de base
- [ ] L'application se charge correctement
- [ ] Les calculs fonctionnent
- [ ] Le design s'affiche bien

### 2. Test PWA
- [ ] Ouvrir la Console (F12) > Application > Manifest
- [ ] Vérifier que le manifest est détecté
- [ ] Vérifier que toutes les icônes sont présentes

### 3. Test Service Worker
- [ ] Console (F12) > Application > Service Workers
- [ ] Le Service Worker doit être "Activated and running"
- [ ] Tester le mode hors ligne :
  1. Chargez l'app
  2. Cochez "Offline" dans la Console
  3. Rechargez la page
  4. L'app doit toujours fonctionner

### 4. Test mobile
- [ ] Ouvrir depuis un smartphone
- [ ] Tester l'installation (Chrome > Menu > "Installer l'application")
- [ ] Vérifier que tout est responsive

### 5. Test des pages légales
- [ ] Cliquer sur "Mentions légales" → La page doit s'ouvrir
- [ ] Cliquer sur "Confidentialité" → La page doit s'ouvrir
- [ ] Cliquer sur "CGU" → La page doit s'ouvrir
- [ ] Vérifier le bouton "Retour" sur chaque page

---

## 🔄 Mises à jour

Pour mettre à jour l'application après le premier déploiement :

### 1. Modifier le code localement
```bash
# Faites vos modifications dans les fichiers
# Exemple : améliorer un calcul, changer le design, etc.
```

### 2. Mettre à jour le Service Worker

**IMPORTANT :** À chaque modification, incrémentez la version du cache dans `sw.js` :

```javascript
const CACHE_NAME = "anc-cache-v6"; // v5 → v6
```

### 3. Commit et push
```bash
git add .
git commit -m "Description de vos modifications"
git push origin main
```

### 4. Attendre le déploiement
- GitHub Pages se met à jour automatiquement
- Délai : 1-3 minutes
- Videz le cache de votre navigateur pour voir les changements

---

## 📊 Statistiques GitHub Pages (Optionnel)

GitHub ne fournit pas de statistiques natives. Pour suivre le trafic :

### Option 1 : Google Analytics (nécessite une mise à jour de l'app)
### Option 2 : Plausible Analytics (RGPD-friendly)
### Option 3 : Cloudflare Analytics (si vous utilisez un domaine personnalisé)

---

## 🌐 Domaine personnalisé (Optionnel)

Si vous voulez utiliser votre propre domaine au lieu de `github.io` :

### 1. Acheter un domaine
- OVH, Gandi, Namecheap, etc.
- Coût : ~10-15€/an

### 2. Configurer le DNS

Chez votre registrar (OVH, etc.), ajoutez ces enregistrements DNS :

```
Type: CNAME
Nom: calculette (ou @)
Valeur: remy-llauberes.github.io
```

### 3. Configurer GitHub Pages

1. Settings > Pages
2. Custom domain : `calculette.votredomaine.fr`
3. Cochez "Enforce HTTPS"

**Délai de propagation DNS :** 1-24h

---

## 🎯 Prochaine étape

Une fois GitHub Pages configuré et testé :

→ **Passez à l'étape suivante :** Générer l'APK avec PWABuilder

Consultez le fichier `APK_GENERATION_GUIDE.md` (à venir)

---

## 🆘 Besoin d'aide ?

- Documentation GitHub Pages : https://docs.github.com/pages
- Problèmes avec les Service Workers : https://web.dev/service-workers-cache-storage/
- Test PWA : https://www.pwabuilder.com

---

**Dernière mise à jour :** 5 novembre 2025
