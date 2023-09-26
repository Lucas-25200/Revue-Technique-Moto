from flask import Flask, request, render_template, redirect, url_for
import pytesseract
from PIL import Image

app = Flask(__name__)

# Configuration pour pytesseract (spécifiez le chemin de Tesseract sur votre système)
pytesseract.pytesseract.tesseract_cmd = ''

# Emplacement du répertoire contenant les images/documents
dossier_images = 'Image RMT/'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    search_term = request.form['search_term']
    uploaded_image = request.files['image']

    if uploaded_image.filename != '':
        img = Image.open(uploaded_image)
        ocr_text = pytesseract.image_to_string(img)

        if search_term in ocr_text:
            if search_term in word_to_image:
                image_filename = word_to_image[search_term]
                return redirect(url_for('image', filename=image_filename))

    return "Aucun résultat trouvé pour '{}'. Veuillez réessayer.".format(search_term)

@app.route('/image/<filename>')
def image(filename):
    # Assurez-vous que les images sont stockées dans un répertoire accessible
    return render_template('image.html', image_filename=filename)

if __name__ == '__main__':
    app.run(debug=True)



