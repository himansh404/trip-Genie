import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function PlaceCardItem({ place }) {
  const [PhotoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        '{NAME}',
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link
      to={
        'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(place.placeName)
      }
      target="_blank"
    >
<div className="border rounded-xl p-4 mt-4 flex gap-5 hover:scale-105 transition-all hover:shadow-lg hover:ring-1 hover:ring-[#f8f0e3]/70 cursor-pointer backdrop-blur-md bg-[#f8f0e3]/70 border-[#d9b99b]">
<img
          src={PhotoUrl}
          className="w-[120px] h-[120px] rounded-xl object-cover"
        />
        <div className="flex flex-col justify-between">
          <h2 className="font-bold text-xl text-indigo-700">{place.placeName}</h2>
          <p className="text-sm text-gray-700">{place.placeDetails}</p>
          <h2 className="mt-2 text-lg text-indigo-600">🕙 {place.timeToTravel}</h2> 
          <h2 className="mt-2 text-sm text-blue-600">💰 {place.ticketPricing}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
