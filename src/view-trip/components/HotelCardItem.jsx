import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function HotelCardItem({ hotel }) {
  const [PhotoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotelName,
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
        hotel.hotelName +
        ',' +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer border border-[#d9b99b] rounded-lg shadow-lg bg-[#f8f0e3]/70 backdrop-blur-md p-4 hover:bg-[#f1e0d2]">
        <img
          src={PhotoUrl}
          className="rounded-lg h-[200px] w-full object-cover mb-4 shadow-md"
          alt={hotel?.hotelName}
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-xl text-gray-900">{hotel?.hotelName}</h2>
          <h2 className="text-sm text-gray-600">📍 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm font-medium text-indigo-600">💰 {hotel?.priceRange}</h2>
          <h2 className="text-sm text-yellow-600">⭐ {hotel?.rating} star</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
