import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, BookOpen, HelpCircle } from 'lucide-react';
import { authService } from '../services/authService';

export const Dashboard = () => {
  const user = authService.getCurrentUser();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
        <p className="text-gray-600 mt-2">What would you like to learn about the Indian election process today?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          to="/assistant"
          icon={<MessageSquare className="h-8 w-8 text-white" />}
          title="Ask Assistant"
          description="Chat with our AI to get answers to your election questions."
          color="bg-saffron-500"
          hoverColor="hover:bg-saffron-600"
        />
        
        <DashboardCard 
          to="/timeline"
          icon={<Calendar className="h-8 w-8 text-white" />}
          title="Election Timeline"
          description="Understand the different phases from announcement to counting."
          color="bg-navy-600"
          hoverColor="hover:bg-navy-700"
        />
        
        <DashboardCard 
          to="/guide"
          icon={<BookOpen className="h-8 w-8 text-white" />}
          title="Voter Guide"
          description="Learn about voter registration, EPIC, and polling booth process."
          color="bg-green-600"
          hoverColor="hover:bg-green-700"
        />
        
        <DashboardCard 
          to="/faq"
          icon={<HelpCircle className="h-8 w-8 text-white" />}
          title="FAQs"
          description="Quick answers to common questions about EVMs, NOTA, and more."
          color="bg-purple-600"
          hoverColor="hover:bg-purple-700"
        />
      </div>
    </div>
  );
};

interface DashboardCardProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  hoverColor: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ to, icon, title, description, color, hoverColor }) => (
  <Link to={to} className="block group">
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all h-full">
      <div className={`${color} p-6 flex justify-center items-center group-${hoverColor} transition-colors`}>
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </Link>
);
