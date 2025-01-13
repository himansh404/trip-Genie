import React from 'react';
import { Link } from 'react-router';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {
  return (
    <div>
      {/* Header with Glowing Divider */}
      <div className="flex items-center space-x-4 mt-8">
        <h2 className="font-extrabold text-4xl text-gray-900 text-shadow-lg p-4">
          Hotel Recommendations
        </h2>
        <div className="flex-grow h-[2px] bg-gradient-to-r from-[#d9b99b] to-[#d9b99b] shadow-lg shadow-[#d9b99b]/50 rounded-full"></div>
      </div>

      {/* Hotel Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
