import React, { useState } from 'react';
import axios from 'axios';

const SearchHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [searchParams, setSearchParams] = useState({ location: '', startDate: '', endDate: '', numberOfPeople: 1 });

    const searchHotels = async () => {
        const response = await axios.get('/api/hotels', { params: searchParams });
        setHotels(response.data);
    };

    return (
        <div>
            <input type="text" placeholder="Location" onChange={e => setSearchParams({ ...searchParams, location: e.target.value })} />
            <input type="date" onChange={e => setSearchParams({ ...searchParams, startDate: e.target.value })} />
            <input type="date" onChange={e => setSearchParams({ ...searchParams, endDate: e.target.value })} />
            <input type="number" placeholder="Number of People" onChange={e => setSearchParams({ ...searchParams, numberOfPeople: e.target.value })} />
            <button onClick={searchHotels}>Search</button>
            <div>
                {hotels.map(hotel => (
                    <div key={hotel._id}>
                        <h3>{hotel.name}</h3>
                        <p>{hotel.description}</p>
                        <p>{hotel.location}</p>
                        <p>{hotel.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchHotels;
