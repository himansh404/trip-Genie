import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router';
import UserTripCardItem from './components/UserTripCardItem';
import { db } from '@/service/firebaseConfig';

function MyTrips() {
    const navigation = useNavigation();
    const [userTrips, setuserTrips] = useState([]);

    useEffect(() => {
        GetUserTrips();
    }, []);

    // Get user trips from the database
    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigation('/');
            return;
        }

        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);
        setuserTrips([]);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setuserTrips((prevVal) => [...prevVal, doc.data()]);
        });
    };

    return (
        <div
            className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 flex flex-col justify-start items-center w-full"
            style={{
                backgroundImage: "url('/landing3.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                width: "100%",
                backgroundAttachment: "fixed",
            }}
        >

            {/* <div className="relative z-10 mt-10 mb-10 text-center">
                <h2 className="font-bold text-3xl text-[#1e3a8a] mb-5">
                    My Trips
                </h2>
            </div> */}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 mb-10 z-10 relative">
                {userTrips?.length > 0
                    ? userTrips.map((trip, index) => (
                          <UserTripCardItem trip={trip} key={index} />
                      ))
                    : [1, 2, 3, 4, 5, 6].map((item, index) => (
                          <div
                              key={index}
                              className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl"
                          ></div>
                      ))}
            </div>
        </div>
    );
}

export default MyTrips;
