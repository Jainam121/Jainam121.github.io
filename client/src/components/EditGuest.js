import React, { Fragment, useState } from "react";


const EditGuest = ({ guest }) => {
    const [guest_name, setguest_name] = useState(guest.guest_name);
    const [status, setstatus] = useState(guest.guest_name);
    const [hotel_id, sethotel_id] = useState(guest.hotel_id);
     
  //edit description function

  const updateValues = async e => {
    e.preventDefault();
    try {
        const body =  {guest_name,hotel_id,status} ;
      const response = await fetch(
        `http://localhost:5000/guest/${guest.guest_id}`,
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
        data-target={`#guestid${guest.guest_id}`}
      >
        Edit
      </button>

      
      <div
        className="modal"
        id={`guestid${guest.guest_id}`}
        onClick={() => {setguest_name(guest.guest_name);sethotel_id(guest.hotel_id);}}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit guest</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {setguest_name(guest.guest_name);sethotel_id(guest.hotel_id);}}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
            <label>guest_name</label><input
            name="guest_name"
            type="text"
            className="form-control"
            value={guest_name}
            onChange={e => setguest_name(e.target.value)}
            />
            <label>hotel_id</label><input
            name="hotel_id"
            type="number"
            className="form-control"
            value={hotel_id}
            onChange={e => sethotel_id(e.target.value)}
            />
            <label>status</label><input
            name="status"
            type="text"
            className="form-control"
            value={status}
            onChange={e => setstatus(e.target.value)}
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
                onClick={() => {setguest_name(guest.guest_name);sethotel_id(guest.hotel_id);}}
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

export default EditGuest;