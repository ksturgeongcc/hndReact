// UserInformation.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserInformation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
  
        if (!token) {
          console.error('No token found');
          return;
        }
  
        const response = await axios.get('http://localhost:5000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        // Check if the response object and its data property exist
        if (response && response.data) {
          setUser(response.data);
        } else {
          console.error('Invalid response from the server:', response);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []);
  

  return user; // Return user state for use in other components
};

export default UserInformation;
