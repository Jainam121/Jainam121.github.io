import React, { Fragment, useState } from "react";

const CreateHotel = () => {
    const [allValues, setAllValues] = useState({
        hotel_name:'',
        client_id:0
     });

     const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
     }

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/hotel", {
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
      <h1 className="text-center mt-5">Hotel List</h1>
      <form className="d-block mt-5" onSubmit={onSubmitForm}>
        <label>hotel_name</label><input
          type="text"
          className="form-control"
          name="hotel_name"
          value={allValues.hotel_name}
          onChange={changeHandler}
        />
        <label>client_id</label><input
          type="number"
          className="form-control"
          name="client_id"
          value={allValues.client_id}
          onChange={changeHandler}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default CreateHotel;