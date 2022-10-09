import React, { Fragment, useState } from "react";

const CreateItem = () => {
    const [allValues, setAllValues] = useState({
        item_name:'',
        item_vis:true,
        rate:0,
        service_id:0
     });

     const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
     }

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/item", {
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
      <h1 className="text-center mt-5">item List</h1>
      <form className="d-block mt-5" onSubmit={onSubmitForm}>
        <label>item_name</label><input
          type="text"
          className="form-control"
          name="item_name"
          value={allValues.item_name}
          onChange={changeHandler}
        />
        <label>service_id</label><input
          type="number"
          className="form-control"
          name="service_id"
          value={allValues.service_id}
          onChange={changeHandler}
        />
        <label>rate</label><input
          type="number"
          className="form-control"
          name="rate"
          value={allValues.rate}
          onChange={changeHandler}
        />
        <label>item_vis</label><br></br>
        <input type="radio" id="true" name="item_vis" value={True} onChange={changeHandler}></input>
        <label for="true">true</label>
        <input type="radio" id="css" name="item_vis" value={False} onChange={changeHandler}></input>
        <label for="false">false</label>
        <br></br>
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default CreateItem;