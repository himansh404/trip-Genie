import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function UserTripCardItem({ trip }) {
    const [PhotoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        trip && GetPlacePhoto();
    }, [trip]);

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: trip?.userSelection?.location?.label,
        };

        const result = await GetPlaceDetails(data).then((resp) => {
            console.log(resp.data.places[0].photos[3].name);

            const PhotoUrl = PHOTO_REF_URL.replace(
                '{NAME}',
                resp.data.places[0].photos[3].name
            );
            setPhotoUrl(PhotoUrl);
        });
    };

    return (
        <Link to={'/view-trip/' + trip?.id}>
            <div className="transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f1e0d2] p-4 rounded-lg border border-[#d9b99b] bg-[#f8f0e3]/70 backdrop-blur-md cursor-pointer">
                <img
                    src={PhotoUrl}
                    alt="Trip Location"
                    className="object-cover rounded-xl h-[220px] w-full"
                />
                <div className="mt-3">
                    <h2 className="font-bold text-lg text-[#1e3a8a]">{trip?.userSelection?.location?.label}</h2>
                    <h2 className="text-sm text-[#374151]">{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
                </div>
            </div>
        </Link>
    );
}

export default UserTripCardItem;
