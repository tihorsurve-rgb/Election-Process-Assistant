import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <HelpCircle className="h-8 w-8 text-purple-600" />
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mt-3">Quick answers to common questions about the voting process.</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-navy-900 mb-2">{faq.question}</h3>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What is an EVM?",
    answer: "EVM stands for Electronic Voting Machine. It is an electronic device used for recording votes. It consists of two units: a Control Unit (kept with the Presiding Officer) and a Balloting Unit (placed in the voting compartment)."
  },
  {
    question: "What is VVPAT?",
    answer: "VVPAT stands for Voter Verifiable Paper Audit Trail. It is an independent verification system attached to the EVM. It prints a slip containing the serial number, name, and symbol of the candidate you voted for, allowing you to verify that your vote was cast correctly."
  },
  {
    question: "What is NOTA?",
    answer: "NOTA stands for 'None Of The Above'. It is an option on the EVM that allows a voter to officially register a vote of rejection for all candidates contesting in the election."
  },
  {
    question: "What is the Model Code of Conduct (MCC)?",
    answer: "The Model Code of Conduct is a set of guidelines issued by the Election Commission of India for conduct of political parties and candidates during elections mainly with respect to speeches, polling day, polling booths, portfolios, election manifestos, processions and general conduct."
  },
  {
    question: "Can I vote if I don't have my Voter ID (EPIC) card?",
    answer: "Yes. If your name is on the electoral roll, you can vote by showing alternative photo identity documents approved by the ECI, such as an Aadhaar Card, PAN Card, Passport, Driving License, MNREGA Job Card, etc."
  },
  {
    question: "Who conducts the elections in India?",
    answer: "Elections to the Lok Sabha (Parliament) and State Legislative Assemblies are conducted by the Election Commission of India (ECI), which is an autonomous constitutional authority."
  }
];
