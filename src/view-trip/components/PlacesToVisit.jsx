import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  return (
    <div className='mt-8'>
      {/* Header with Glowing Divider */}
      <div className="flex items-center space-x-4">
        <h2 className="font-extrabold text-4xl text-gray-900 text-shadow-lg">
          Places to Visit
        </h2>
        <div className="flex-grow h-[2px] bg-gradient-to-r from-[#d9b99b] to-[#d9b99b] shadow-lg shadow-[#d9b99b]/50 rounded-full"></div>
      </div>

      {/* Itinerary */}
      <div>
        {trip?.tripData?.itinerary &&
          Object.entries(trip.tripData.itinerary)
            .sort(([dayA], [dayB]) => parseInt(dayA.replace('day', '')) - parseInt(dayB.replace('day', '')))
            .map(([day, details], index) => (
              <div key={index} className="mt-8">
                {/* Day Header with subtle shadow */}
                <h2 className="font-medium text-2xl text-gray-800 text-shadow-md">
                  Day {day.replace('day', '')}
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  {details.places?.map((place, placeIndex) => (
                    <div key={placeIndex}>
                      <h2 className="font-medium text-lg text-indigo-950">{place.timeToTravel}</h2>
                      <PlaceCardItem place={place} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
