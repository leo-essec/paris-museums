// contact/+page.server.js
import fs from 'fs';
import path from 'path';

// Chemin du fichier où stocker les soumissions.
// Mettez-le où vous voulez, par exemple dans `src/lib/data/` :
const DATA_FILE = path.join(process.cwd(), 'src', 'lib', 'data', 'submissions.json');

// On utilise l'action "default" ; le formulaire (method="POST") appellera cette fonction.
export const actions = {
  default: async ({ request }) => {
    // Récupérer les données du formulaire
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Lire le fichier si existant, pour charger l'historique
    let submissions = [];
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
      try {
        submissions = JSON.parse(fileContent);
      } catch (err) {
        // Fichier invalide ou vide
        submissions = [];
      }
    }

    // Construire l'objet "soumission"
    const newSubmission = {
      name,
      email,
      subject,
      message,
      date: new Date().toISOString()
    };

    // Ajouter la soumission au tableau
    submissions.push(newSubmission);

    // Écrire le nouveau tableau dans le fichier
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2));

    // Retour possible vers la page pour afficher un message
    return {
      success: true,
      message: 'Votre message a bien été envoyé !'
    };
  }
};