import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Model() {
  // State to hold your data
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to make the GET request
    const fetchData = async () => {
      try {
        const response = await axios.get('/create-model');
        setData(response.data);
        console.log('Data fetched:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the function to fetch data
    fetchData();

    // Since we only want this to run once, pass an empty dependency array
  }, []); // This empty array means this effect will run only once after the initial render

  // Variable to store the fetched data
  let fetchedData = null;

  return <div>{fetchedData}</div>;
}

export default Model;