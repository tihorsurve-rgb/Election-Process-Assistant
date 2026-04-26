# Election Process Education Assistant – India

## Problem Statement
The Indian electoral process is vast and sometimes complex for first-time voters and the general public. There is a need for a simple, accessible, and neutral platform where citizens can quickly get answers about voter registration, the election timeline, EVMs, and the Model Code of Conduct without political bias.

## Approach and Logic
This application is a civic technology initiative that leverages AI to provide an interactive educational experience. 
- It uses a React frontend to provide a clean, accessible interface.
- It utilizes the Google Gemini API with a strict system prompt (guardrail) to ensure the AI only answers questions related to the Indian election process and remains completely neutral and non-partisan.
- Instead of a traditional backend, it uses the browser's `localStorage` to simulate authentication and store chat histories, ensuring complete privacy and zero backend setup requirements for local testing.

## Features
- **AI Assistant:** Ask questions about the election process, EVMs, timelines, and more.
- **Strict Guardrails:** The AI will refuse to answer non-election related questions or political opinion questions.
- **Local Authentication:** Sign up and log in using local storage.
- **Chat History:** Your conversations are saved locally so you can return to them later.
- **Educational Guides:** Dedicated pages for Election Timeline, Voter Guide, and FAQs.
- **Quick Questions:** Predefined prompts to help users get started quickly.

## Technologies Used
- React + TypeScript
- Vite
- Tailwind CSS
- Google Gemini API (`@google/generative-ai`)
- React Router
- Lucide React (Icons)
- Vitest (Testing)

## Security Considerations
- **No Backend Data Collection:** By using `localStorage`, no user data or chat history is transmitted to a central database.
- **API Key Protection:** The Gemini API key should be provided via environment variables (`.env`) and is never hardcoded in the repository.
- **Prompt Guardrails:** The system prompt explicitly instructs the AI to remain neutral, factual, and refuse unrelated queries.

## Accessibility Considerations
- Responsive, mobile-first design.
- High contrast colors (navy, white, dark gray).
- Clear, simple English text (designed to be easily translatable to Hindi in the future).
- Semantic HTML structure.

## Assumptions Made
- The user has access to a modern web browser that supports `localStorage`.
- The user has a valid Gemini API key.
- The information provided by the AI is for educational guidance only, and users are expected to verify details with the official Election Commission of India (ECI) website.

## Setup Instructions

1. **Clone the repository** (if applicable) or navigate to the project directory.

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Copy the `.env.example` file to a new file named `.env`.
   - Open `.env` and add your Gemini API Key:
     ```env
     VITE_GEMINI_API_KEY=your_actual_api_key_here
     ```

4. **Run the application locally:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

## How to Test
Basic unit tests are provided using Vitest.
```bash
npm run test
```
*(Note: To test the Gemini guardrails effectively, you should test manually via the UI by asking political or non-election questions to ensure it refuses to answer them.)*
