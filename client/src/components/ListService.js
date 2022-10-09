import React, { Fragment, useEffect, useState } from "react";

import EditService from "./EditService";

const ListService = () => {
  const [services, setservices] = useState([]);

  //delete service function

  const deleteservice = async service_id => {
    try {
      const deleteservice = await fetch(`http://localhost:5000/service/${service_id}`, {
        method: "DELETE"
      });

      setservices(services.filter(service => service.service_id !== service_id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getservices = async () => {
    try {
      const response = await fetch("http://localhost:5000/service");
      const jsonData = await response.json();

      setservices(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getservices();
  }, []);

  console.log(services);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>service_name</th>
            <th>service_vis</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {services.map(service => (
            <tr key={service.service_id}>
              <td>{service.service_name}</td>
              <td>{service.service_vis?"true":"false"}</td>
              <td>
                <EditService service={service} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteservice(service.service_id)}
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

export default ListService;