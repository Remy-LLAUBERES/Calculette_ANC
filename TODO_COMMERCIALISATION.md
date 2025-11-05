# 📋 TODO - Commercialisation Calculette ANC

**Propriétaire :** RLCodeWorks
**Modèle économique :** Achat unique à 5€
**Date de création :** 5 novembre 2025

---

## ✅ TERMINÉ

### Pages Légales (OBLIGATOIRE pour Google Play)
- ✅ Mentions légales créées
- ✅ Politique de confidentialité (RGPD compliant)
- ✅ CGU avec modèle économique défini
- ✅ Footer avec liens ajouté dans l'app
- ✅ Service Worker mis à jour (v5)

---

## 🚀 PRIORITÉ 1 - Publication Google Play Store

### 1. Créer un compte développeur Google Play
**Coût :** 25$ (paiement unique)
**Lien :** https://play.google.com/console/signup

**Documents nécessaires :**
- Carte d'identité
- Coordonnées RLCodeWorks (déjà prêtes)
- Mode de paiement pour recevoir les revenus

---

### 2. Préparer les assets visuels

#### Icône de l'application
- [ ] **512x512 pixels** (format PNG, sans transparence)
- [ ] **Adaptive icon** pour Android (foreground + background)
- [ ] Respecter les marges de sécurité (safe zone)

**Outils recommandés :**
- Figma, Canva, ou Adobe Illustrator
- https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html

#### Screenshots (OBLIGATOIRE)
- [ ] **Minimum 2 screenshots** (recommandé : 4-8)
- [ ] Formats :
  - Téléphone : 1080x1920 ou 1080x2400
  - Tablette (optionnel) : 1920x1080 ou 2560x1600
- [ ] Montrer les fonctionnalités principales :
  1. Écran principal avec formulaire
  2. Résultat d'un calcul complet
  3. Calcul de fréquence de vidange
  4. Interface claire et professionnelle

**Astuce :** Utilisez des émulateurs Android pour capturer les screenshots.

#### Bannière (Feature Graphic)
- [ ] **1024x500 pixels** (format PNG ou JPG)
- [ ] Design attractif présentant l'app
- [ ] Texte : "Calculette ANC" + slogan court

---

### 3. Rédiger les descriptions marketing

#### Description courte (max 80 caractères)
```
Dimensionnez fosses septiques et épandages selon DTU 64.1
```

#### Description longue
```
🚰 Calculette ANC - Outil professionnel pour l'assainissement non collectif

Conçue pour les professionnels de l'assainissement, cette application vous permet de :

✅ Dimensionner les fosses septiques selon les normes DTU 64.1
✅ Calculer la perméabilité des sols (tests Porchet)
✅ Estimer les surfaces d'épandage (filtre à sable, tranchées drainantes)
✅ Déterminer la fréquence de vidange recommandée

📊 FONCTIONNALITÉS

• Calcul de volume minimal de fosse septique
• Analyse de 3 tests de perméabilité Porchet
• Coefficient de perméabilité K (mm/h)
• Surface d'épandage pour systèmes traditionnels (F) et filtres à sable (MS/FC)
• Volume de ballast nécessaire
• Fréquence de vidange personnalisée

🔒 CONFORME RGPD

Aucune donnée personnelle collectée. Tous les calculs sont effectués localement sur votre appareil. Fonctionne hors connexion.

⚠️ AVERTISSEMENT

Les résultats sont donnés à titre indicatif et doivent être validés par un professionnel qualifié (bureau d'études, SPANC) avant mise en œuvre.

💼 Idéal pour : bureaux d'études, installateurs ANC, SPANC, étudiants en génie civil.
```

#### Mots-clés (séparés par virgules)
```
assainissement, ANC, fosse septique, épandage, DTU 64.1, perméabilité, Porchet, SPANC, génie civil, BTP
```

---

### 4. Créer le wrapper Android (TWA - Trusted Web Activity)

**Option A : Outil automatique PWA Builder (RECOMMANDÉ)**
1. Aller sur https://www.pwabuilder.com
2. Entrer l'URL de votre PWA hébergée
3. Cliquer sur "Build for Android"
4. Télécharger le fichier APK/AAB généré
5. Uploader sur Google Play Console

**Option B : Build manuel avec Android Studio**
- [ ] Installer Android Studio
- [ ] Créer un projet TWA
- [ ] Configurer le manifest.json
- [ ] Générer un APK signé (format AAB requis)

**Fichiers requis :**
- URL de l'app hébergée (actuellement sur GitHub Pages)
- Certificat de signature (keystore)
- Configuration TWA

**Note :** Pour tester, vous pouvez d'abord héberger l'app sur :
- GitHub Pages (gratuit)
- Netlify (gratuit)
- Firebase Hosting (gratuit)

**URL actuelle à configurer :** À définir (ex: https://rlcodeworks.github.io/calculette-anc)

---

### 5. Tester l'application

- [ ] Tester sur plusieurs appareils Android (émulateurs + réels)
- [ ] Vérifier tous les calculs avec des données réelles
- [ ] Tester le fonctionnement hors ligne
- [ ] Vérifier l'affichage sur différentes tailles d'écran
- [ ] Tester les liens vers pages légales

---

### 6. Publier sur Google Play Store

**Checklist avant soumission :**
- [ ] Compte développeur créé et vérifié
- [ ] APK/AAB signé et testé
- [ ] Screenshots (min. 2)
- [ ] Icône 512x512
- [ ] Feature Graphic 1024x500
- [ ] Description courte et longue
- [ ] Lien vers politique de confidentialité (URL publique obligatoire)
- [ ] Catégorie : "Outils" ou "Productivité"
- [ ] Âge requis : +3 ans
- [ ] Prix : 5,00 €
- [ ] Pays de distribution : France (+ autres si souhaité)

**Temps de validation :** 1-7 jours en général

---

## 📱 PRIORITÉ 2 - Améliorations UX/UI

### Fonctionnalités à ajouter
- [ ] Historique des calculs (localStorage)
- [ ] Export PDF des résultats
- [ ] Mode sombre
- [ ] Tooltips explicatifs sur les termes techniques
- [ ] Guide utilisateur intégré
- [ ] Système de feedback utilisateur

---

## 📊 PRIORITÉ 3 - Analytics & Monétisation

### Analytics (RGPD)
- [ ] Intégrer Plausible Analytics (alternative RGPD-friendly)
- [ ] Tracker les événements :
  - Calculs effectués
  - Erreurs utilisateur
  - Fonctionnalités utilisées

### Paiement
- [ ] Intégrer Google Play Billing API
- [ ] Tester le flux d'achat
- [ ] Configurer les informations bancaires pour recevoir les revenus

---

## 🔒 PRIORITÉ 4 - Sécurité & Performance

- [ ] Ajouter les headers de sécurité (CSP, HSTS)
- [ ] Minifier le code HTML/CSS/JS
- [ ] Optimiser l'icône (compression PNG)
- [ ] Ajouter un système de versioning automatique
- [ ] Tests automatisés des calculs

---

## 🌐 PRIORITÉ 5 - Marketing & SEO

- [ ] Créer une landing page de présentation
- [ ] Vidéo démo (30-60 secondes) pour Google Play
- [ ] Optimiser les métadonnées SEO
- [ ] Page Facebook / LinkedIn pour RLCodeWorks
- [ ] Contact presse spécialisée (magazines BTP, génie civil)

---

## 📝 PRIORITÉ 6 - Certification & Validation

- [ ] Faire valider les calculs par un expert en assainissement
- [ ] Vérifier la conformité stricte aux normes DTU 64.1 actuelles
- [ ] Obtenir un label de qualité (optionnel mais valorisant)

---

## 💰 BUDGET ESTIMÉ

| Poste | Coût |
|-------|------|
| Compte développeur Google Play | 25€ (une fois) |
| Hébergement web (GitHub Pages) | Gratuit |
| Design icône/bannière (si freelance) | 50-150€ (optionnel) |
| Certificat SSL (si hébergement perso) | Gratuit (Let's Encrypt) |
| **TOTAL MINIMUM** | **25€** |

---

## 📞 PROCHAINES ACTIONS IMMÉDIATES

1. **Créer le compte Google Play Developer** (25€)
2. **Choisir et configurer l'hébergement** (ex: GitHub Pages)
3. **Créer les visuels** (icône 512x512, screenshots, bannière)
4. **Générer l'APK/AAB** avec PWABuilder ou Android Studio
5. **Tester l'app** sur émulateur/appareil Android
6. **Publier sur Google Play Store**

---

## 📚 RESSOURCES UTILES

### Documentation officielle
- Google Play Console : https://play.google.com/console
- PWA Builder : https://www.pwabuilder.com
- DTU 64.1 : Normes AFNOR pour l'ANC

### Outils
- Android Asset Studio : https://romannurik.github.io/AndroidAssetStudio/
- Figma (design) : https://www.figma.com
- Canva (design simple) : https://www.canva.com

### Support
- Forum Google Play : https://support.google.com/googleplay/android-developer
- Stack Overflow : https://stackoverflow.com/questions/tagged/android

---

## ✉️ CONTACT

Pour toute question sur ce projet :
- Propriétaire : RLCodeWorks
- Adresse : 1401 vieille route de Grasse, 83300 DRAGUIGNAN

---

**Dernière mise à jour :** 5 novembre 2025
**Version du document :** 1.0
