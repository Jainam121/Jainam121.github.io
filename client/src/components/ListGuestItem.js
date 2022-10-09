import React, { Fragment, useEffect, useState } from "react";

import EditGuestItem from "./EditGuestItem";

const ListGuestItem = () => {
  const [guestItems, setguestItems] = useState([]);
  
  

  //delete guestItem function

  const deleteguestItem = async relation_id => {
    try {
      const deleteguestItem = await fetch(`http://localhost:5000/guest_item/${relation_id}`, {
        method: "DELETE"
      });

      setguestItems(guestItems.filter(guestItem => guestItem.relation_id !== relation_id));
    } catch (err) {
      console.error(err.message);
    }
  };
  

  const getguestItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/guest_item");
      const jsonData = await response.json();

      setguestItems(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getguestItems();
    
  }, []);

  console.log(guestItems);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>item_id</th>
            <th>guest_id</th>
            <th>time</th>
            <th>instructions</th>
            <th>status</th>
            <th>rating</th>
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
          {guestItems.map(guestItem => (
            <tr key={guestItem.guestItem_id}>
              <td>{guestItem.item_id}</td>
              <td>{guestItem.guest_id}</td>
              <td>{guestItem.time}</td>
              <td>{guestItem.instructions}</td>
              <td>{guestItem.status}</td>
              <td>{guestItem.rating}</td>
              <td>
                <EditGuestItem guestItem={guestItem} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteguestItem(guestItem.relation_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
    </Fragment>
  );
};

export default ListGuestItem;