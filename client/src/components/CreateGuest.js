import React, { Fragment, useState,useEffect } from "react";

const CreateGuest = () => {
    const [allValues, setAllValues] = useState({
        guest_name:'',
        hotel_id:0,
        status:'',
        checkin:'',
        checkout:''
     });

     const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
     }

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/guest", {
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
      <h1 className="text-center mt-5">Guest List</h1>
      <form className="d-block mt-5" onSubmit={onSubmitForm}>
        <label>guest_name</label><input
          type="text"
          className="form-control"
          name="guest_name"
          value={allValues.guest_name}
          onChange={changeHandler}
        />
        <label>hotel_id</label><input
          type="number"
          className="form-control"
          name="hotel_id"
          value={allValues.hotel_id}
          onChange={changeHandler}
        />
        <label>status</label><input
          type="text"
          className="form-control"
          name="status"
          value={allValues.status}
          onChange={changeHandler}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default CreateGuest;