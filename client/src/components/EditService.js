import React, { Fragment, useState } from "react";


const Editservice = ({ service }) => {
    const [service_name, setservice_name] = useState(service.service_name);
    const [hotel_id, sethotel_id] = useState(service.hotel_id);
    const [service_vis,setservice_vis]= useState(service.service_vis);
     
  //edit description function
  const True=true;
  const False=false;

  const updateValues = async e => {
    e.preventDefault();
    try {
        const body =  {service_name,hotel_id,service_vis} ;
      const response = await fetch(
        `http://localhost:5000/service/${service.service_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#serviceid${service.service_id}`}
      >
        Edit
      </button>

      
      <div
        className="modal"
        id={`serviceid${service.service_id}`}
        onClick={() => {setservice_name(service.service_name);sethotel_id(service.hotel_id);setservice_vis(service.service_vis);}}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit service</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {setservice_name(service.service_name);sethotel_id(service.hotel_id);setservice_vis(service.service_vis);}}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
            <label>service_name</label><input
            name="service_name"
            type="text"
            className="form-control"
            value={service_name}
            onChange={e => setservice_name(e.target.value)}
            />
             <label>service_vis</label><br></br>
          <input type="radio" id="true" name="service_vis" value={True} onChange={e => setservice_vis(e.target.value)}></input>
          <label for="true">true</label>
          <input type="radio" id="css" name="service_vis" value={False} onChange={e => setservice_vis(e.target.value)}></input>
          <label for="false">false</label>
          <br></br>
            <label>hotel_id</label><input
            name="hotel_id"
            type="number"
            className="form-control"
            value={hotel_id}
            onChange={e => sethotel_id(e.target.value)}
            />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateValues(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {setservice_name(service.service_name);sethotel_id(service.hotel_id);setservice_vis(service.service_vis);}}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Editservice;