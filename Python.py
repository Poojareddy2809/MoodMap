"""
Mental Health Assessment Program
--------------------------------
This script:
1. Detects emotions from user input using DistilBERT (Hugging Face Transformers).
2. Conducts a mental health self-assessment quiz.
3. Provides a final status and recommendations.

Author: Your Name
GitHub: https://github.com/yourusername
"""

import torch
import random
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# ------------------------------
# Load Emotion Detection Model
# ------------------------------
MODEL_NAME = "bhadresh-savani/distilbert-base-uncased-emotion"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_NAME)

emotion_labels = ["sadness", "joy", "love", "anger", "fear", "surprise"]


def detect_emotion(text):
    """
    Detect emotion from a given text input.
    :param text: String containing the input sentence.
    :return: Tuple (predicted_emotion, confidence_score)
    """
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)

    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits

    predicted_class = torch.argmax(logits, dim=-1).item()
    confidence_scores = torch.nn.functional.softmax(logits, dim=1).squeeze()

    predicted_emotion = emotion_labels[predicted_class]
    confidence = confidence_scores[predicted_class].item()

    return predicted_emotion, confidence


# ------------------------------
# Mental Health Quiz Questions
# ------------------------------
questions = [
    ("How often have you felt little interest or pleasure in doing things?", [
        ("A. Rarely", 1), ("B. Sometimes", 2), ("C. Often", 3), ("D. Almost all the time", 4)
    ]),
    ("How often have you felt nervous or anxious without a specific reason?", [
        ("A. Rarely", 1), ("B. Occasionally", 2), ("C. Frequently", 3), ("D. Almost always", 4)
    ]),
    ("How often have you felt sad, hopeless, or down?", [
        ("A. Rarely", 1), ("B. Occasionally", 2), ("C. Frequently", 3), ("D. Almost every day", 4)
    ]),
    ("Do you find yourself having difficulty concentrating or focusing on tasks?", [
        ("A. Rarely", 1), ("B. Sometimes", 2), ("C. Frequently", 3), ("D. Almost always", 4)
    ]),
    ("How often have you felt physically exhausted or lacking energy?", [
        ("A. Rarely", 1), ("B. Occasionally", 2), ("C. Often", 3), ("D. Almost all the time", 4)
    ]),
    ("Have you felt overly critical of yourself or experienced frequent negative thoughts?", [
        ("A. Rarely", 1), ("B. Sometimes", 2), ("C. Often", 3), ("D. Almost always", 4)
    ]),
    ("How would you describe your appetite recently?", [
        ("A. Normal or consistent", 1), ("B. Mild changes", 2), ("C. Noticeable changes", 3), ("D. Significant changes", 4)
    ]),
    ("How often have you felt detached or withdrawn from others?", [
        ("A. Rarely", 1), ("B. Occasionally", 2), ("C. Frequently", 3), ("D. Almost all the time", 4)
    ]),
    ("How often do you feel a sense of purpose or find meaning in your activities?", [
        ("A. Almost always", 1), ("B. Frequently", 2), ("C. Occasionally", 3), ("D. Rarely", 4)
    ]),
    ("Have you experienced any disturbances in your sleep patterns?", [
        ("A. Rarely", 1), ("B. Sometimes", 2), ("C. Often", 3), ("D. Almost every night", 4)
    ])
]


def mental_health_quiz():
    """
    Conducts a 10-question mental health self-assessment quiz.
    :return: Tuple (total_score, status, recommendation)
    """
    selected_questions = random.sample(questions, 10)
    total_score = 0

    print("\nMental Health Self-Assessment Quiz\n")

    for question, choices in selected_questions:
        print(question)
        for choice, _ in choices:
            print(f" {choice}")

        while True:
            answer = input("Your answer (A, B, C, or D): ").strip().upper()
            if answer in ['A', 'B', 'C', 'D']:
                break
            else:
                print("Invalid input, please enter A, B, C, or D.")

        for choice, points in choices:
            if choice.startswith(answer):
                total_score += points
                break

    # Determine mental health status
    if 10 <= total_score <= 15:
        status = "Positive Mental State"
        recommendation = "You likely have a stable mental state with manageable stress levels."
    elif 16 <= total_score <= 25:
        status = "Moderate Signs of Stress"
        recommendation = "You may have mild symptoms of stress or low mood. Consider stress management practices."
    elif 26 <= total_score <= 35:
        status = "Elevated Mental Health Concerns"
        recommendation = "Noticeable signs of mental strain. It may be beneficial to speak with friends, family, or a counselor."
    elif 36 <= total_score <= 40:
        status = "Significant Distress"
        recommendation = "High levels of distress noted. Professional mental health support is recommended."
    else:
        status = "Unknown"
        recommendation = "Please retake the test for accurate results."

    return total_score, status, recommendation


def main():
    print("Welcome to the Mental Health Assessment Program!\n")

    # Emotion Detection
    user_text = input("Enter a sentence describing how you feel: ")
    detected_emotion, confidence = detect_emotion(user_text)
    print(f"\nDetected Emotion: {detected_emotion} (Confidence: {confidence:.2f})")

    # Mental Health Quiz
    total_score, status, recommendation = mental_health_quiz()

    # Final Summary
    print("\n--- Final Assessment Summary ---")
    print(f"Detected Emotion: {detected_emotion} (Confidence: {confidence:.2f})")
    print(f"Mental Health Quiz Score: {total_score}")
    print(f"Mental Health Status: {status}")
    print(f"Recommendation: {recommendation}")


if __name__ == "__main__":
    main()
