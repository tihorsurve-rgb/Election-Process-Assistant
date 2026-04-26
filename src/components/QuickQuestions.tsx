import React from 'react';
import { Sparkles } from 'lucide-react';

interface QuickQuestionsProps {
  questions: string[];
  onSelect: (question: string) => void;
}

export const QuickQuestions: React.FC<QuickQuestionsProps> = ({ questions, onSelect }) => {
  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 mb-3">
        <Sparkles className="h-4 w-4 text-saffron-500" />
        <span className="text-sm font-medium text-gray-600">Quick Questions</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {questions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(q)}
            className="text-left text-sm bg-white border border-gray-200 hover:border-saffron-400 hover:bg-saffron-50 text-gray-700 px-4 py-2 rounded-full transition-all duration-200 ease-in-out shadow-sm"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};
