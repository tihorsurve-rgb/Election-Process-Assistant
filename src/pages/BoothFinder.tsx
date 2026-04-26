import React, { useState } from 'react';
import { MapPin, Search, Map as MapIcon, Info } from 'lucide-react';

export const BoothFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mapUrl, setMapUrl] = useState('https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=Polling+Booths+in+India');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // In a real app, we would use the Google Maps Places API
    // For this demo, we update the embed URL
    const encodedQuery = encodeURIComponent(`Polling Booths near ${searchQuery}`);
    setMapUrl(`https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=${encodedQuery}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <MapPin className="h-8 w-8 text-red-600" />
          Polling Booth Finder
        </h1>
        <p className="text-gray-600 mt-2">Find your nearest polling station using Google Maps integration.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Search Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-navy-600" />
              Search Location
            </h3>
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter your city or area..."
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-saffron-500 focus:ring-saffron-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-navy-900 text-white py-3 rounded-xl font-bold hover:bg-navy-800 transition-colors"
              >
                Find Booths
              </button>
            </form>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
              <Info className="h-5 w-5" />
              Did you know?
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              You can also find your polling booth on your EPIC (Voter ID) card or by using the Voter Helpline App provided by the ECI.
            </p>
          </div>
        </div>

        {/* Map Area */}
        <div className="lg:grid-cols-2 lg:col-span-2">
          <div className="bg-white p-2 rounded-2xl shadow-md border border-gray-100 h-[600px] overflow-hidden relative">
            {!import.meta.env.VITE_GOOGLE_MAPS_KEY && (
              <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-8 text-center z-10">
                <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                  <MapIcon className="h-10 w-10 text-slate-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Map Preview Restricted</h4>
                <p className="text-slate-600 mb-6 max-w-md">
                  To view the interactive map directly here, a Google Maps API Key is required. 
                  You can still find booths by opening Google Maps directly.
                </p>
                <a 
                  href={`https://www.google.com/maps/search/Polling+Booths+near+${encodeURIComponent(searchQuery || 'India')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-navy-800 transition-colors"
                >
                  Open in Google Maps
                  <Search className="h-4 w-4" />
                </a>
              </div>
            )}
            <iframe
              title="Google Maps Booth Finder"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              loading="lazy"
              allowFullScreen
              src={mapUrl.replace('YOUR_API_KEY', import.meta.env.VITE_GOOGLE_MAPS_KEY || '')}
            ></iframe>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 justify-center">
            <MapIcon className="h-4 w-4" />
            <span>Interactive map powered by Google Maps Platform</span>
          </div>
        </div>
      </div>
    </div>
  );
};
