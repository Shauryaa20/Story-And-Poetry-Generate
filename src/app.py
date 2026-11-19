import os
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.text import tokenizer_from_json

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load models
story_model = load_model(
    os.path.join(BASE_DIR, "story_generation_model.h5"),
    compile=False
)

poem_model = load_model(
    os.path.join(BASE_DIR, "poem_generation_model.h5"),
    compile=False
)

# Load tokenizers
with open(os.path.join(BASE_DIR, "story_tokenizer.json")) as f:
    story_tokenizer = tokenizer_from_json(f.read())

with open(os.path.join(BASE_DIR, "poem_tokenizer.json")) as f:
    poem_tokenizer = tokenizer_from_json(f.read())


def generate_text(model, tokenizer, prompt, max_tokens=100):

    text = prompt

    for _ in range(max_tokens):

        sequence = tokenizer.texts_to_sequences([text])[0]

        sequence = sequence[-40:]

        padded = np.zeros((1, 40))

        if sequence:
            padded[0, -len(sequence):] = sequence

        prediction = model.predict(padded, verbose=0)

        next_word_id = np.argmax(prediction)

        next_word = tokenizer.index_word.get(next_word_id)

        if not next_word:
            break

        text += " " + next_word

    return text


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Welcome to VerseCraft API",
        "endpoints": [
            "/generate/story",
            "/generate/poem",
            "/health"
        ]
    })


@app.route("/health", methods=["GET"])
def health():

    return jsonify({
        "status": "Backend running",
        "story_model": "Loaded",
        "poem_model": "Loaded"
    })


@app.route("/generate/story", methods=["POST"])
def generate_story():

    data = request.get_json()

    prompt = data.get("prompt", "")
    genre = data.get("genre", "Fantasy")

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    full_prompt = f"{genre} story: {prompt}"

    story = generate_text(
        story_model,
        story_tokenizer,
        full_prompt,
        max_tokens=100
    )

    return jsonify({
        "success": True,
        "genre": genre,
        "story": story
    })


@app.route("/generate/poem", methods=["POST"])
def generate_poem():

    data = request.get_json()

    prompt = data.get("prompt", "")
    style = data.get("style", "Free Verse")

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    full_prompt = f"{style} poem: {prompt}"

    poem = generate_text(
        poem_model,
        poem_tokenizer,
        full_prompt,
        max_tokens=80
    )

    return jsonify({
        "success": True,
        "style": style,
        "poem": poem
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)