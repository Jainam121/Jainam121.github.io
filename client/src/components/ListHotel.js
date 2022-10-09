import React, { Fragment, useEffect, useState } from "react";

import Edithotel from "./EditHotel";

const ListHotel = () => {
  const [hotels, sethotels] = useState([]);

  //delete hotel function

  const deletehotel = async hotel_id => {
    try {
      const deletehotel = await fetch(`http://localhost:5000/hotel/${hotel_id}`, {
        method: "DELETE"
      });

      sethotels(hotels.filter(hotel => hotel.hotel_id !== hotel_id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const gethotels = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotel");
      const jsonData = await response.json();

      sethotels(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    gethotels();
  }, []);

  console.log(hotels);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>hotel_name</th>
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
          {hotels.map(hotel => (
            <tr key={hotel.hotel_id}>
              <td>{hotel.hotel_name}</td>
              <td>
                <Edithotel hotel={hotel} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletehotel(hotel.hotel_id)}
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

export default ListHotel;