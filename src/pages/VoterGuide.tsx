import React from 'react';
import { BookOpen, FileText, CheckSquare, MapPin } from 'lucide-react';

export const VoterGuide = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <BookOpen className="h-8 w-8 text-green-600" />
          Voter Guide
        </h1>
        <p className="text-gray-600 mt-3">Everything you need to know about registering and casting your vote.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Registration Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-navy-600" />
            <h2 className="text-2xl font-bold text-gray-900">Voter Registration</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Eligibility</h3>
              <ul className="list-disc pl-5 text-gray-600 text-sm mt-1 space-y-1">
                <li>Must be an Indian citizen.</li>
                <li>Must be 18 years of age or older on the qualifying date (usually Jan 1, Apr 1, Jul 1, or Oct 1).</li>
                <li>Must be an ordinary resident of the polling area.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900">How to Apply (Form 6)</h3>
              <p className="text-gray-600 text-sm mt-1">
                You can apply online via the Voter Helpline App or the official ECI Voter Portal (voters.eci.gov.in). Alternatively, fill physical Form 6 and submit it to the Electoral Registration Officer (ERO).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Required Documents</h3>
              <ul className="list-disc pl-5 text-gray-600 text-sm mt-1 space-y-1">
                <li>Passport size photograph.</li>
                <li>Proof of Age (Birth certificate, 10th marksheet, PAN, Aadhaar).</li>
                <li>Proof of Residence (Aadhaar, Passport, Utility bill, Rent agreement).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Voting Day Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <CheckSquare className="h-6 w-6 text-saffron-500" />
            <h2 className="text-2xl font-bold text-gray-900">Voting Day Process</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-navy-100 text-navy-800 font-bold h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Find Your Booth & Check Name</h3>
                <p className="text-gray-600 text-sm mt-1">Check your name on the electoral roll beforehand. Locate your polling booth via ECI website or SMS.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-navy-100 text-navy-800 font-bold h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Identity Verification</h3>
                <p className="text-gray-600 text-sm mt-1">First polling officer will check your name on the voter list and check your ID proof (EPIC/Voter ID, Aadhaar, PAN, Passport, etc.).</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-navy-100 text-navy-800 font-bold h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Inking and Register</h3>
                <p className="text-gray-600 text-sm mt-1">Second polling officer will ink your left forefinger, take your signature/thumb impression in the register, and give you a slip.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-navy-100 text-navy-800 font-bold h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Cast Your Vote</h3>
                <p className="text-gray-600 text-sm mt-1">Go to the voting compartment. Press the blue button on the EVM against the candidate of your choice. Check the VVPAT slip that appears for 7 seconds to verify your vote.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
