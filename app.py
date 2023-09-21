from flask import Flask, request, render_template
from PIL import Image
import pytesseract

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recherche', methods=['POST'])
def recherche():
    recherche_texte = request.form['recherche']

    # Exécutez l'OCR ici avec pytesseract
    # Par exemple, si vous avez une image nommée "image.png" dans le même répertoire :
    # texte_extrait = pytesseract.image_to_string(Image.open("image.png"))

    # Remarque : Vous devrez adapter cela en fonction de la manière dont vous stockez vos images ou documents.

    # Retournez les résultats à la page de résultats
    return render_template('resultats.html', texte_extrait=texte_extrait)

if __name__ == '__main__':
    app.run(debug=True)
