import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { IoIosSend } from 'react-icons/io';

function InfoSection({ trip }) {
  const [PhotoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      const photoUrl = PHOTO_REF_URL.replace(
        '{NAME}',
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(photoUrl);
    });
  };

  return (
    <div className="relative space-y-6">
      {/* Background Image */}
      <img
        src={PhotoUrl}
        srcSet={`${PhotoUrl}&maxHeightPx=500 500w, ${PhotoUrl}&maxHeightPx=1000 1000w, ${PhotoUrl}&maxHeightPx=2000 2000w`}
        sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 2000px"
        className="h-[350px] w-full object-cover rounded-xl shadow-md border border-gray-200"
        alt="Place"
      />

      {/* Trip Info Section with New Styling */}
      <div className="bg-[#f8f0e3]/70 backdrop-blur-md border border-[#d9b99b] shadow-lg rounded-lg animate-fade-in p-4 md:p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              {trip?.userSelection?.location?.label}
            </h1>
            <p className="text-gray-600 text-md">
              Discover your perfect trip to{' '}
              <span className="text-indigo-600 font-medium">
                {trip?.userSelection?.location?.label}
              </span>
              , where adventure meets comfort.
            </p>
          </div>
          <Button className="bg-indigo-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700">
            <IoIosSend className="text-xl mr-2" /> Share Trip
          </Button>
        </div>

        {/* Trip Details Badges */}
        <div className="mt-5 flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium shadow">
            🗓️ {trip?.userSelection?.noOfDays} Days
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow">
            💰 {trip?.userSelection?.budget} Budget
          </span>
          <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium shadow">
            🥂 {trip?.userSelection?.traveler} Travelers
          </span>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
