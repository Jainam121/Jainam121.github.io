import React, { Fragment, useState } from "react";


const EditGuestItem= ({ guestItem }) => {
    const [time, settime] = useState(guestItem.time);
    const [item_id, setitem_id] = useState(guestItem.item_id);
    const [instructions, setinstructions] = useState(guestItem.instructions);
    const [guest_id, setguest_id] = useState(guestItem.guest_id);
    const [status, setstatus] = useState(guestItem.status);
    const [rating, setrating] = useState(guestItem.rating);
     
  //edit description function

  const updateValues = async e => {
    e.preventDefault();
    try {
        const body =  {time,instructions,guest_id,status,rating,item_id} ;
      const response = await fetch(
        `http://localhost:5000/guest_item/${guestItem.relation_id}`,
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
        data-target={`#giid${guestItem.relation_id}`}
      >
        Edit
      </button>

      
      <div
        className="modal"
        id={`giid${guestItem.relation_id}`}
        onClick={() => {setinstructions(guestItem.instructions);setguest_id(guestItem.guest_id);setitem_id(guestItem.item_id);
        setrating(guestItem.rating);settime(guestItem.time);setstatus(guestItem.status);}}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit hotel</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {setinstructions(guestItem.instructions);setguest_id(guestItem.guest_id);setitem_id(guestItem.item_id);
                  setrating(guestItem.rating);settime(guestItem.time);setstatus(guestItem.status);}}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
            
            <label>instructions</label><input
          type="text"
          className="form-control"
          name="instructions"
          value={instructions}
          onChange={e => setinstructions(e.target.value)}
        />
        <label>status</label><input
          type="text"
          className="form-control"
          name="status"
          value={status}
          onChange={e => setstatus(e.target.value)}
        />
        <label>guest_id</label><input
          type="number"
          className="form-control"
          name="guest_id"
          value={guest_id}
          onChange={e => setguest_id(e.target.value)}
        />
        <label>item_id</label><input
          type="number"
          className="form-control"
          name="item_id"
          value={item_id}
          onChange={e => setitem_id(e.target.value)}
        />
        <label>time</label><input
          type="number"
          className="form-control"
          name="time"
          value={time}
          onChange={e => settime(e.target.value)}
        />
        <label>rating</label><input
          type="number"
          className="form-control"
          name="rating"
          value={rating}
          onChange={e => setrating(e.target.value)}
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
                onClick={() => {setinstructions(guestItem.instructions);setguest_id(guestItem.guest_id);setitem_id(guestItem.item_id);
                  setrating(guestItem.rating);settime(guestItem.time);setstatus(guestItem.status);}}
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

export default EditGuestItem;