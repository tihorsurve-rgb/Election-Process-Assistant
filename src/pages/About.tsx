import React from 'react';
import { Info, ShieldAlert } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <Info className="h-8 w-8 text-blue-600" />
          About This Project
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-navy-900 mb-3">Project Purpose</h2>
          <p className="text-gray-600 leading-relaxed">
            The <strong>Election Process Education Assistant – India</strong> is a civic technology initiative designed to empower Indian citizens with knowledge about the democratic election process. 
            By leveraging Artificial Intelligence, this platform aims to simplify complex electoral procedures, making them accessible to first-time voters, students, and the general public.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-navy-900 mb-3">Core Principles</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>Neutrality:</strong> The AI assistant is strictly programmed to remain neutral and non-partisan.</li>
            <li><strong>Education First:</strong> It focuses entirely on the "how" and "what" of elections, never the "who".</li>
            <li><strong>Privacy:</strong> We use local storage for chats and authentication, ensuring your data never leaves your browser. We do not track political preferences.</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md mt-8">
          <div className="flex items-start">
            <ShieldAlert className="h-6 w-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-red-800 font-bold mb-1">Important Disclaimer</h3>
              <p className="text-red-700 text-sm leading-relaxed">
                This application is an independent educational project and is <strong>not affiliated</strong> with the Election Commission of India (ECI) or any government body. 
                While every effort is made to provide accurate information via AI, election rules and dates are subject to change. 
                For final, official information, always refer to the official ECI website: <a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-red-900">eci.gov.in</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
