import React, { Fragment, useState } from "react";


const Edithotel = ({ hotel }) => {
    const [hotel_name, sethotel_name] = useState(hotel.hotel_name);
    const [client_id, setClient_id] = useState(hotel.client_id);
     
  //edit description function

  const updateValues = async e => {
    e.preventDefault();
    try {
        const body =  {hotel_name,client_id} ;
      const response = await fetch(
        `http://localhost:5000/hotel/${hotel.hotel_id}`,
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
        data-target={`#id${hotel.hotel_id}`}
      >
        Edit
      </button>

      
      <div
        className="modal"
        id={`id${hotel.hotel_id}`}
        onClick={() => {sethotel_name(hotel.hotel_name);setClient_id(hotel.client_id);}}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit hotel</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {sethotel_name(hotel.hotel_name);setClient_id(hotel.client_id);}}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
            <label>hotel_name</label><input
            name="hotel_name"
            type="text"
            className="form-control"
            value={hotel_name}
            onChange={e => sethotel_name(e.target.value)}
            />
            <label>client_id</label><input
            name="client_id"
            type="number"
            className="form-control"
            value={client_id}
            onChange={e => setClient_id(e.target.value)}
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
                onClick={() => {sethotel_name(hotel.hotel_name);setClient_id(hotel.client_id);}}
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

export default Edithotel;