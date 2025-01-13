import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
{text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for a Couple with a Cheap budget, Give me a Hotels options list(at least 4) with real HotelName, real Hotel address,  Price per night(for example if we going to USA you would give like Price:50-100$), real hotel image URL, geo coordinates, rating,  good descriptions, and suggest itinerary with placeName, PlaceDetails, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time to travel each of the locations for 3 days with each day plan with the best time to visit(as we are covering at least 3 things in a day) in JSON format"},          ],
        },
        {
          role: "model",
          parts: [
            {text: "\n{\n  \"hotels\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"priceRange\": \"$50-$150/night\",\n      \"hotelImageURL\": \"placeholder_circus_circus_image.jpg\", \n      \"geoCoordinates\": { \"latitude\": 36.1236, \"longitude\": -115.1728 },\n      \"rating\": 3.5,\n      \"description\": \"A classic Vegas hotel with a circus theme, known for its affordable rates and family-friendly atmosphere.  May be a bit dated.\"\n    },\n    {\n      \"hotelName\": \"The LINQ Hotel + Experience\",\n      \"hotelAddress\": \"3535 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"priceRange\": \"$80-$200/night\",\n      \"hotelImageURL\": \"placeholder_linq_hotel_image.jpg\",\n      \"geoCoordinates\": { \"latitude\": 36.1243, \"longitude\": -115.1716 },\n      \"rating\": 4.0,\n      \"description\": \"Modern hotel on the Las Vegas Strip, near the High Roller observation wheel and LINQ Promenade. Offers a balance of affordability and amenities.\"\n    },\n    {\n      \"hotelName\": \"[Budget-Friendly Motel Name]\",\n      \"hotelAddress\": \"[Address]\",\n      \"priceRange\": \"$40-$80/night\",\n      \"hotelImageURL\": \"placeholder_budget_motel_image.jpg\",\n      \"geoCoordinates\": { \"latitude\": \"[Latitude]\", \"longitude\": \"[Longitude]\" },\n      \"rating\": 3.0,\n      \"description\": \"Consider a motel just off the Strip for significantly cheaper rates.  Check reviews carefully for cleanliness and safety.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Strip Exploration & Fountains\",\n      \"places\": [\n        {\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"Free water show, check showtimes online.\",\n          \"placeImageURL\": \"placeholder_bellagio_fountains_image.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1147, \"longitude\": -115.1731 },\n          \"ticketPricing\": \"Free\",\n          \"timeTravel\": \"Evening (check show schedule)\"\n        },\n        {\n          \"placeName\": \"Walk the Las Vegas Strip\",\n          \"placeDetails\": \"Explore the casinos and attractions along the Strip.\",\n          \"placeImageURL\": \"placeholder_las_vegas_strip_image.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1146, \"longitude\": -115.1729 },\n          \"ticketPricing\": \"Free\",\n          \"timeTravel\": \"Afternoon/Evening\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Downtown & Fremont Street Experience\",\n      \"places\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Free light show and street performers.\",\n          \"placeImageURL\": \"placeholder_freemont_street_image.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1699, \"longitude\": -115.1401 },\n          \"ticketPricing\": \"Free (some shows may require tickets)\",\n          \"timeTravel\": \"Evening\"\n        },\n        {\n          \"placeName\": \"Explore Downtown Las Vegas\",\n          \"placeDetails\": \"Visit casinos, bars, and vintage shops.\",\n          \"placeImageURL\": \"placeholder_downtown_las_vegas_image.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.17, \"longitude\": -115.14 },\n          \"ticketPricing\": \"Free\",\n          \"timeTravel\": \"Afternoon\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Nature & Relaxation\",\n      \"places\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"Scenic drives, hiking trails (check fees).\",\n          \"placeImageURL\": \"placeholder_red_rock_canyon_image.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.20, \"longitude\": -115.65},\n          \"ticketPricing\": \"Park entrance fee applies\",\n          \"timeTravel\": \"Full day\"\n        }\n      ]\n    }\n  }\n}\n\n"},
          ],
        },
      ],
    });

    