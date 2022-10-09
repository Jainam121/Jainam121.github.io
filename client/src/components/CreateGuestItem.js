import React, { Fragment, useState } from "react";

const CreateGuestItem = () => {
    const [allValues, setAllValues] = useState({
        instructions:'',
        status:'',
        guest_id:0,
        item_id:0,
        time:0,
        rating:0
     });

     const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
     }

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/guest_item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(allValues)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">GuestItem List</h1>
      <form className="d-block mt-5" onSubmit={onSubmitForm}>
        <label>instructions</label><input
          type="text"
          className="form-control"
          name="instructions"
          value={allValues.instructions}
          onChange={changeHandler}
        />
        <label>status</label><input
          type="text"
          className="form-control"
          name="status"
          value={allValues.status}
          onChange={changeHandler}
        />
        <label>guest_id</label><input
          type="number"
          className="form-control"
          name="guest_id"
          value={allValues.guest_id}
          onChange={changeHandler}
        />
        <label>item_id</label><input
          type="number"
          className="form-control"
          name="item_id"
          value={allValues.item_id}
          onChange={changeHandler}
        />
        <label>time</label><input
          type="number"
          className="form-control"
          name="time"
          value={allValues.time}
          onChange={changeHandler}
        />
        <label>rating</label><input
          type="number"
          className="form-control"
          name="rating"
          value={allValues.rating}
          onChange={changeHandler}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default CreateGuestItem;