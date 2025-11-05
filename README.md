# 🚰 Calculette ANC - Assainissement Non Collectif

**Version :** 5.0
**Propriétaire :** RLCodeWorks
**Licence :** Propriétaire - Achat unique 5€
**Conformité :** DTU 64.1, RGPD

---

## 📖 Description

Application web progressive (PWA) professionnelle pour le dimensionnement des systèmes d'assainissement non collectif (ANC).

Destinée aux professionnels du secteur : bureaux d'études, installateurs ANC, SPANC, étudiants en génie civil.

---

## 🎯 Fonctionnalités

### Calculs disponibles

1. **Dimensionnement de fosse septique**
   - Calcul du volume minimal selon DTU 64.1
   - Basé sur le nombre de pièces principales

2. **Perméabilité des sols**
   - Traitement de 3 tests Porchet
   - Calcul du coefficient K moyen (mm/h)

3. **Surface d'épandage**
   - Calcul de la Charge Hydraulique Appliquée (CHA)
   - Surface pour systèmes traditionnels (F)
   - Surface pour filtres à sable/massifs de zéolite (MS/FC)
   - Volume de ballast nécessaire

4. **Fréquence de vidange**
   - Recommandation personnalisée
   - Selon le type de résidence et nombre d'occupants

---

## 🛠️ Technologies

- **Frontend :** HTML5, CSS3, JavaScript Vanilla
- **PWA :** Service Worker pour fonctionnement hors ligne
- **Cache :** Local (v5)
- **Dépendances :** Aucune ! Application zéro-dépendance

---

## 📂 Structure du projet

```
Calculette_ANC/
├── index.html                      # Application principale
├── sw.js                          # Service Worker (v5)
├── manifest.json                  # Configuration PWA
├── icon.png                       # Icône 192x192
├── mentions-legales.html          # Mentions légales
├── politique-confidentialite.html # Politique RGPD
├── cgu.html                       # Conditions générales d'utilisation
├── README.md                      # Ce fichier
└── TODO_COMMERCIALISATION.md      # Guide de commercialisation
```

---

## 🚀 Installation locale

### Prérequis
- Un serveur web local (ex: Live Server pour VS Code)
- Navigateur moderne (Chrome, Firefox, Edge, Safari)

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/Remy-LLAUBERES/Calculette_ANC.git
cd Calculette_ANC
```

2. **Lancer un serveur local**
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js
npx serve

# Ou utiliser Live Server dans VS Code
```

3. **Ouvrir dans le navigateur**
```
http://localhost:8000
```

---

## 📱 Installation en tant que PWA

### Sur Android
1. Ouvrir l'app dans Chrome
2. Menu > "Installer l'application"
3. L'icône apparaît sur l'écran d'accueil

### Sur iOS
1. Ouvrir dans Safari
2. Partager > "Sur l'écran d'accueil"

### Sur Desktop
1. Ouvrir dans Chrome/Edge
2. Icône d'installation dans la barre d'adresse
3. Cliquer pour installer

---

## 🧮 Utilisation

### Calcul complet

1. **Entrer les données de base**
   - Nombre de pièces principales (PP)
   - Nombre d'occupants
   - Type de résidence (principale/secondaire)

2. **Saisir les tests Porchet**
   - Pour chaque test :
     - Quantité d'eau infiltrée (L)
     - Durée du test (min)

3. **Cliquer sur "Calcul complet"**

**Résultats fournis :**
- Volume minimal de fosse
- Perméabilité K (moyenne des 3 tests)
- CHA (Charge Hydraulique Appliquée)
- Surface d'épandage F et MS/FC
- Volume de ballast

### Calcul de vidange

1. Renseigner :
   - Volume de la fosse (m³)
   - Nombre d'occupants
   - Type de résidence

2. Cliquer sur "Fréquence Vidange"

**Résultat :** Fréquence recommandée en années

---

## ⚠️ Avertissement important

Les résultats fournis par cette application sont donnés **à titre indicatif**.

Bien que basés sur les normes **DTU 64.1**, ils doivent impérativement être **validés par un professionnel qualifié** (bureau d'études, SPANC, etc.) avant toute mise en œuvre sur le terrain.

RLCodeWorks décline toute responsabilité en cas d'erreur de dimensionnement.

---

## 📊 Normes & Références

- **DTU 64.1** : Dispositifs d'assainissement non collectif
- **Arrêté du 7 septembre 2009** : Prescriptions techniques ANC
- **Norme XP P16-603** : Dimensionnement des fosses septiques

---

## 🔒 Confidentialité & RGPD

### Données collectées : AUCUNE

- Tous les calculs sont effectués **localement** sur votre appareil
- Aucune transmission de données vers des serveurs externes
- Aucun cookie de tracking
- Fonctionne entièrement **hors ligne**

Pour plus d'informations : [Politique de confidentialité](politique-confidentialite.html)

---

## 📜 Mentions légales

**Éditeur :** RLCodeWorks (Autoentreprise)
**Adresse :** 1401 vieille route de Grasse, 83300 DRAGUIGNAN, France
**Hébergement :** GitHub, Inc.

[Voir mentions légales complètes](mentions-legales.html)

---

## 💰 Modèle économique

**Prix :** 5,00 € TTC (achat unique)
**Distribution :** Google Play Store
**Mises à jour :** Gratuites à vie

[Voir les CGU](cgu.html)

---

## 🛠️ Développement

### Modifier l'application

1. Éditer `index.html` (interface + logique)
2. Si ajout de fichiers, mettre à jour `sw.js` :
   - Incrémenter `CACHE_NAME` (ex: v5 → v6)
   - Ajouter les nouveaux fichiers dans `FILES_TO_CACHE`

### Service Worker

**Version actuelle :** v5

**Fichiers en cache :**
- index.html
- manifest.json
- icon.png
- mentions-legales.html
- politique-confidentialite.html
- cgu.html

### Build pour production

```bash
# Minifier le HTML/CSS/JS (optionnel)
npm install -g html-minifier-terser
html-minifier-terser --collapse-whitespace --remove-comments index.html -o index.min.html
```

---

## 🐛 Bugs & Support

Pour signaler un bug ou demander une fonctionnalité :
- Via le Google Play Store (section "Assistance")
- Ou via le repository GitHub

---

## 📅 Roadmap

### Version future (v6)
- [ ] Historique des calculs
- [ ] Export PDF des résultats
- [ ] Mode sombre
- [ ] Tooltips explicatifs
- [ ] Guide utilisateur intégré

### Version future (v7)
- [ ] Support multilingue (anglais)
- [ ] Calculs avancés (pompes de relevage, etc.)
- [ ] Comparaison de plusieurs solutions

---

## 📞 Contact

**RLCodeWorks**
1401 vieille route de Grasse
83300 DRAGUIGNAN, France

Support : Via Google Play Store

---

## 📄 Licence

© 2025 RLCodeWorks. Tous droits réservés.

Application propriétaire distribuée sous licence commerciale.
Toute reproduction, modification ou distribution non autorisée est interdite.

---

**Dernière mise à jour :** 5 novembre 2025
**Version de l'app :** 5.0
**Version du cache :** anc-cache-v5
