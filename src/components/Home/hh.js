import React from 'react';

function Home() {
  const res = fetch("https://codefurymc6-default-rtdb.firebaseio.com/userDataRecords.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json(); // This returns a promise
    })
    .then((data) => {
      // Loop through the properties of the data object and log their values
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          console.log(data[key].firstName);
          console.log(data[key].lastName);
          console.log(data[key].entertainment);
          console.log(data[key].productivity);
          console.log(data[key].finance);
        }
      }
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
  

  return(
    <div>
        
    </div>
  )
}

export default Home;
