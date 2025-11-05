# Digital Asset Links

Ce dossier contient le fichier `assetlinks.json` nécessaire pour lier votre application Android à votre site web.

## ⚠️ IMPORTANT : À FAIRE APRÈS GÉNÉRATION DE L'APK

Le fichier `assetlinks.json` contient actuellement un placeholder pour le SHA-256.

### Comment obtenir votre SHA-256 ?

#### Si vous utilisez PWABuilder :
1. Après avoir généré l'APK/AAB sur PWABuilder
2. Télécharger le ZIP
3. Ouvrir le fichier `signing-key-info.txt`
4. Copier le SHA-256 (format : `XX:XX:XX:...`)

#### Si vous utilisez Bubblewrap CLI :
```bash
keytool -list -v -keystore signing-key.keystore -alias key
```

### Mettre à jour assetlinks.json

Remplacez `REMPLACER_PAR_VOTRE_SHA256_APRES_GENERATION_APK` par votre SHA-256 réel.

Exemple :
```json
"sha256_cert_fingerprints": [
  "14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"
]
```

### Vérifier l'accessibilité

Une fois mis à jour et poussé sur GitHub, vérifiez que le fichier est accessible :

```
https://remy-llauberes.github.io/Calculette_ANC/.well-known/assetlinks.json
```

Ce fichier doit retourner du JSON valide (pas d'erreur 404).

### Pourquoi est-ce nécessaire ?

Le Digital Asset Links permet à Google de vérifier que :
- Vous êtes propriétaire du domaine
- Vous êtes propriétaire de l'application Android
- Les deux sont liés de manière sécurisée

Sans ce fichier, l'application fonctionnera, mais sans "Trusted Web Activity" complète.

---

**Documentation officielle :**
https://developers.google.com/digital-asset-links
