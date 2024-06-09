import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [hotels, setHotels] = useState([]);
    const [newHotel, setNewHotel] = useState({ name: '', description: '', location: '', availableFrom: '', availableTo: '', capacity: '', price: '' });

    const fetchHotels = async () => {
        const response = await axios.get('/api/admin/hotels', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setHotels(response.data);
    };

    useEffect(() => {
        fetchHotels();
    }, []);

    const addHotel = async () => {
        await axios.post('/api/admin/hotels', newHotel, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        fetchHotels();
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <div>
                <input type="text" placeholder="Name" onChange={e => setNewHotel({ ...newHotel, name: e.target.value })} />
                <input type="text" placeholder="Description" onChange={e => setNewHotel({ ...newHotel, description: e.target.value })} />
                <input type="text" placeholder="Location" onChange={e => setNewHotel({ ...newHotel, location: e.target.value })} />
                <input type="date" placeholder="Available From" onChange={e => setNewHotel({ ...newHotel, availableFrom: e.target.value })} />
                <input type="date" placeholder="Available To" onChange={e => setNewHotel({ ...newHotel, availableTo: e.target.value })} />
                <input type="number" placeholder="Capacity" onChange={e => setNewHotel({ ...newHotel, capacity: e.target.value })} />
                <input type="number" placeholder="Price" onChange={e => setNewHotel({ ...newHotel, price: e.target.value })} />
                <button onClick={addHotel}>Add Hotel</button>
            </div>
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

export default AdminDashboard;
