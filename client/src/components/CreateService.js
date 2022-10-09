import React, { Fragment, useState } from "react";

const CreateService = () => {
    const [allValues, setAllValues] = useState({
        service_name:'',
        service_vis:true,
        hotel_id:0
     });

     const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
     }

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(allValues)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  const True=true;
  const False=false;


  return (
    <Fragment>
      <h1 className="text-center mt-5">service List</h1>
      <form className="d-block mt-5" onSubmit={onSubmitForm}>
        <label>service_name</label><input
          type="text"
          className="form-control"
          name="service_name"
          value={allValues.service_name}
          onChange={changeHandler}
        />
        <label>service_vis</label><br></br>
        <input type="radio" id="true" name="service_vis" value={True} onChange={changeHandler}></input>
        <label for="true">true</label>
        <input type="radio" id="css" name="service_vis" value={False} onChange={changeHandler}></input>
        <label for="false">false</label>
        <br></br>

        <label>hotel_id</label><input
          type="number"
          className="form-control"
          name="hotel_id"
          value={allValues.hotel_id}
          onChange={changeHandler}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default CreateService;