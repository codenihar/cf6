import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./submit.css"; 

const Submit = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    entertainment: "",
    productivity: "",
    finance: "",
  });
  const history = useNavigate();

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, entertainment, productivity, finance} = userData;

    if (firstName && lastName && entertainment && productivity && finance) {
      const res = fetch(
        "https://codefurymc6-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            entertainment,
            productivity,
            finance,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          entertainment: "",
          productivity: "",
          finance: "",
        });
        alert("Data Stored");
        window.location.replace('/');
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <>
      <div className="details">
                  <form method="POST" className="form">
                    <h1 className="heading">Enter your Name and Screen-on Time (in hrs)</h1>
                        <br/><br/>
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                        <br/>
                        <br/>
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                        <br/>
                        <br/>
                        <input
                          type="text"
                          name="entertainment"
                          id=""
                          className="form-control"
                          placeholder="Entertainment "
                          value={userData.entertainment}
                          onChange={postUserData}
                        />
                        <br/>
                        <br/>
                        <input
                          type="text"
                          name="productivity"
                          id=""
                          className="form-control"
                          placeholder="Productivity"
                          value={userData.productivity}
                          onChange={postUserData}
                        />
                        <br/>
                        <br/>
                        <input
                          type="text"
                          name="finance"
                          id=""
                          className="form-control"
                          placeholder="Finance"
                          value={userData.finance}
                          onChange={postUserData}
                        />
                        <br/>
                        <br/>
                    <button
                      className="submitBtn"
                      type="submit"
                      onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
    </>
  );
};

export default Submit;