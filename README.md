# Election Process Education Assistant – India

A civic technology initiative designed to educate Indian citizens about the electoral process using artificial intelligence. This platform provides simple, neutral, and factual answers to voting queries, helping to empower every voter with knowledge.

**Live Demo:** [https://election-assistant-360254301601.asia-south1.run.app/](https://election-assistant-360254301601.asia-south1.run.app/)

## Problem Statement
The Indian electoral process is vast and sometimes complex for first-time voters and the general public. There is a need for a simple, accessible, and neutral platform where citizens can quickly get answers about voter registration, the election timeline, EVMs, and the Model Code of Conduct without political bias or influence.

## Approach and Logic
- **AI-Powered Education:** Utilizes the Google Gemini API to provide interactive, real-time guidance.
- **Strict Guardrails:** Implements robust system instructions to ensure the AI remains non-partisan, neutral, and refuses to answer non-election related or political opinion questions.
- **Privacy-First (No Backend):** Uses the browser's `localStorage` to simulate authentication and store chat histories. This ensures user privacy as no personal data or conversations are stored on a central server.
- **Responsive & Accessible:** Built with a mobile-first approach using React and Tailwind CSS for a premium, accessible experience across all devices.

## Engineering Excellence & Google Cloud Integration
This project is built following industry best practices and deep integration with the Google ecosystem:
- **CI/CD Pipelines**: Automated testing and deployment workflows using **GitHub Actions**.
- **Google Cloud Run**: Containerized deployment for scalable, serverless hosting.
- **Firebase Authentication**: Integrated **Google Sign-In** for secure, seamless user onboarding.
- **Firebase Hosting**: Configuration ready for ultra-fast global content delivery.
- **Firebase Firestore**: Architecture ready for real-time data persistence.
- **Google Gemini API**: Advanced prompt engineering with robust safety guardrails.
- **Google Maps Platform**: Interactive "Booth Finder" integration for location-based services.
- **Google Analytics**: Real-time user tracking and engagement metrics.
- **Google Translate**: Built-in multi-language accessibility for diverse voter groups.
- **Google Fonts**: High-performance typography via Google's font delivery network.
- **Testing Maturity**: Comprehensive unit and UI test suites with **Vitest** and **React Testing Library**.

## Features
- **AI Assistant:** A dedicated chat interface for election queries with automatic scrolling and history management.
- **Interactive Guides:**
  - **Election Timeline:** Visual representation of election phases.
  - **Voter Guide:** Comprehensive information on registration and required documents.
  - **FAQs:** Quick answers to common voting questions.
- **Quick Prompts:** Predefined questions to help users explore the election process immediately.
- **Clean UI/UX:** A modern, premium design with smooth transitions and interactive feature cards.

## Technologies Used
- **Frontend:** React 19, TypeScript, Tailwind CSS 4
- **Build Tool:** Vite 8
- **AI Engine:** Google Gemini API (`@google/generative-ai`)
- **Icons:** Lucide React
- **Routing:** React Router 7
- **Deployment:** Google Cloud Run (Containerized via Docker + Nginx)

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- A Google Gemini API Key (Get it from [Google AI Studio](https://aistudio.google.com/))

### Local Development
1. **Clone the repository:**
   ```bash
   git clone https://github.com/tihorsurve-rgb/Election-Process-Assistant.git
   cd Election-Process-Assistant
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Copy `.env.example` to `.env`.
   - Add your Gemini API Key to the `.env` file:
     ```env
     VITE_GEMINI_API_KEY=your_actual_api_key_here
     ```

4. **Run the app:**
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:5173`.

### Building for Production
```bash
npm run build
```
The production-ready files will be in the `dist` folder.

## Deployment (Cloud Run)
The project is containerized using Docker and served via Nginx. To deploy to Google Cloud Run:
```bash
gcloud run deploy election-assistant --source . --project YOUR_PROJECT_ID --region asia-south1 --allow-unauthenticated
```

## Security & Ethics
- **API Security:** The project uses `.gitignore` to prevent sensitive `.env` files from being committed.
- **Neutrality:** The AI model is strictly instructed to avoid political bias.
- **ECI Sources:** Users are always reminded to verify final official information from the **Election Commission of India (ECI)**.

## License
This project is for educational and civic awareness purposes.
