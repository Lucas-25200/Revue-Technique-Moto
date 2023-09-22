from flask import Flask, request, render_template, redirect, url_for
from PIL import Image
import pytesseract
import os

app = Flask(__name__)

# Emplacement du répertoire contenant les images/documents
dossier_images = '/Image RMT/Page1.jpg'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recherche', methods=['POST'])
def recherche():
    recherche_texte = request.form['recherche']

    # Parcourez le répertoire des images/documents et recherchez le texte correspondant
    for filename in os.listdir(dossier_images):
        if filename.endswith('.png') or filename.endswith('.jpg'):
            image_path = os.path.join(dossier_images, filename)
            texte_extrait = pytesseract.image_to_string(Image.open(image_path))
            if recherche_texte in texte_extrait:
                # Redirigez vers l'image correspondante
                return redirect(url_for('image', nom_image=filename))

    # Si aucune correspondance n'est trouvée, affichez un message d'erreur
    return render_template('resultats.html', erreur="Aucune correspondance trouvée.")

@app.route('/Image RMT/<nom_image>')
def image(nom_image):
    # Récupérez l'image correspondante et affichez-la
    image_path = os.path.join(dossier_images, nom_image)
    return render_template('image.html', image_path=image_path)

if __name__ == '__main__':
    app.run(debug=True)