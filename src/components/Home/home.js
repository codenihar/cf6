import React, { useState, useEffect } from 'react';
import './home.css'

function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://codefurymc6-default-rtdb.firebaseio.com/userDataRecords.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json(); 
      })
      .then((data) => {
        const userDataArray = Object.values(data);
        setUserData(userDataArray);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='screenon'>Mass<span className='masscolor-main'>Coders</span> Screen-on Time (in hrs)</h1>
      <table  className='home-bg'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Entertainment</th>
            <th>Productivity</th>
            <th>Finance</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.entertainment}</td>
              <td>{user.productivity}</td>
              <td>{user.finance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
