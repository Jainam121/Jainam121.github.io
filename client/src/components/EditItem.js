import React, { Fragment, useState } from "react";


const EditItem = ({ item }) => {
    const [item_name, setitem_name] = useState(item.item_name);
    const [service_id, setservice_id] = useState(item.service_id);
    const [item_vis,setitem_vis]= useState(item.item_vis);
    const[rate,setrate]= useState(item.rate);
  //edit description function

  const updateValues = async e => {
    e.preventDefault();
    try {
        const body =  {rate,service_id,item_name,item_vis} ;
      const response = await fetch(
        `http://localhost:5000/item/${item.item_id}`,
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
  const True=true;
  const False=false;
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#itemid${item.item_id}`}
      >
        Edit
      </button>

      
      <div
        className="modal"
        id={`itemid${item.item_id}`}
        onClick={() => {setitem_name(item.item_name);setservice_id(item.service_id);setitem_vis(item.item_vis);setrate(item.rate);}}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Item</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {setitem_name(item.item_name);setservice_id(item.service_id);
                setitem_vis(item.item_vis);setrate(item.rate);}}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
            <label>item_name</label><input
            name="item_name"
            type="text"
            className="form-control"
            value={item_name}
            onChange={e => setitem_name(e.target.value)}
            />
            <label>service_id</label><input
            name="service_id"
            type="number"
            className="form-control"
            value={service_id}
            onChange={e => setservice_id(e.target.value)}
            />
            <label>rate</label><input
          type="number"
          className="form-control"
          name="rate"
          value={rate}
          onChange={e => setrate(e.target.value)}
        />
          <label>item_vis</label><br></br>
          <input type="radio" id="true" name="item_vis" value={True} onChange={e => setitem_vis(e.target.value)}></input>
          <label for="true">true</label>
          <input type="radio" id="css" name="item_vis" value={False} onChange={e => setitem_vis(e.target.value)}></input>
          <label for="false">false</label>
        <br></br>
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
                onClick={() => {setitem_name(item.item_name);setservice_id(item.service_id);setitem_vis(item.item_vis);setrate(item.rate);}}
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

export default EditItem;