import React from 'react';
import { Link } from 'react-router-dom';
import { Vote, Shield, BookOpen, Clock } from 'lucide-react';

export const Landing = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Vote className="h-20 w-20 text-saffron-500 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Understand Your <span className="text-saffron-400">Right To Vote</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Your personal AI assistant to understand the Indian election process. 
              Get simple, neutral, and factual answers to all your voting queries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/signup" 
                className="bg-saffron-500 hover:bg-saffron-600 text-white text-lg px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-saffron-500/30"
              >
                Get Started
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border-2 border-gray-400 hover:border-white text-white text-lg px-8 py-3 rounded-full font-semibold transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Empowering Every Voter</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-navy-600" />}
              title="Neutral & Factual"
              description="Get unbiased information strictly based on the election process without any political influence."
            />
            <FeatureCard 
              icon={<BookOpen className="h-10 w-10 text-saffron-500" />}
              title="Step-by-Step Guides"
              description="From registering to vote to understanding EVMs, we break down complex processes."
            />
            <FeatureCard 
              icon={<Clock className="h-10 w-10 text-green-600" />}
              title="24/7 AI Assistance"
              description="Have a question? Our AI assistant is ready to provide instant educational guidance anytime."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);
