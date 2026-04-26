import React from 'react';
import { Calendar, CheckCircle2, Circle } from 'lucide-react';

export const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <Calendar className="h-8 w-8 text-navy-600" />
          Election Process Timeline
        </h1>
        <p className="text-gray-600 mt-3">Understanding the journey of an election in India from announcement to results.</p>
      </div>

      <div className="relative border-l-4 border-saffron-300 ml-6 md:ml-0 md:pl-0 md:border-none">
        {/* For desktop, a center line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-saffron-300"></div>

        {timelineEvents.map((event, idx) => (
          <div key={idx} className={`mb-8 flex justify-between items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="hidden md:block w-5/12"></div>
            
            <div className="z-20 -ml-[22px] bg-white md:ml-0 md:bg-transparent">
              <div className="h-10 w-10 rounded-full bg-saffron-500 border-4 border-white shadow flex items-center justify-center">
                <span className="text-white font-bold text-sm">{idx + 1}</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-[calc(100%-3rem)] md:w-5/12 ml-4 md:ml-0 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-navy-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 text-sm text-blue-800">
        <p><strong>Note:</strong> This is a generalized timeline. The exact dates and durations vary for every election and are officially announced by the Election Commission of India (ECI).</p>
      </div>
    </div>
  );
};

const timelineEvents = [
  {
    title: "Announcement of Election Schedule",
    description: "The ECI announces the dates for polling, counting, and the implementation of the Model Code of Conduct (MCC)."
  },
  {
    title: "Issue of Notification",
    description: "The formal notification for the election is issued, inviting nominations from candidates."
  },
  {
    title: "Filing of Nominations",
    description: "Candidates file their nomination papers along with required affidavits declaring assets, criminal records, etc."
  },
  {
    title: "Scrutiny of Nominations",
    description: "Returning Officers scrutinize the filed nominations to ensure they meet all legal requirements."
  },
  {
    title: "Withdrawal of Candidature",
    description: "Candidates are given a few days to withdraw their names if they decide not to contest."
  },
  {
    title: "Election Campaign",
    description: "Political parties and candidates campaign. The campaign officially ends 48 hours before polling begins."
  },
  {
    title: "Polling Day",
    description: "Voters cast their votes using Electronic Voting Machines (EVMs) and VVPATs at designated polling booths."
  },
  {
    title: "Counting of Votes",
    description: "Votes are counted under heavy security, and trends/results are declared."
  },
  {
    title: "Declaration of Results",
    description: "The Returning Officer officially declares the winning candidate and issues the certificate of election."
  }
];
