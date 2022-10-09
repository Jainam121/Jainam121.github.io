import React, { Fragment, useEffect, useState } from "react";

import EditGuest from "./EditGuest";

const Listguest = () => {
  const [guests, setguests] = useState([]);
  const[count,setcount]=useState(0);

  //delete guest function

  const deleteguest = async guest_id => {
    try {
      const deleteguest = await fetch(`http://localhost:5000/guest/${guest_id}`, {
        method: "DELETE"
      });

      setguests(guests.filter(guest => guest.guest_id !== guest_id));
      getguests_no();
    } catch (err) {
      console.error(err.message);
    }
  };

  const getguests = async () => {
    try {
      const response = await fetch("http://localhost:5000/guest");
      const jsonData = await response.json();

      setguests(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  const getguests_no = async () => {
    try {
      const response = await fetch("http://localhost:5000/guestno");
      const jsonData = await response.json();

      setcount(jsonData[0].count);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getguests();
    getguests_no();
  }, []);

  console.log(guests);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>guest_name</th>
            <th>status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {guests.map(guest => (
            <tr key={guest.guest_id}>
              <td>{guest.guest_name}</td>
              <td>{guest.status}</td>
              <td>
                <EditGuest guest={guest} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteguest(guest.guest_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div >Total no of guests = {count}</div>
    </Fragment>
  );
};

export default Listguest;