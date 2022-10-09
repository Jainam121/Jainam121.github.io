import React, { Fragment, useEffect, useState } from "react";

import EditItem from "./EditItem";

const ListItem = () => {
  const [items, setitems] = useState([]);

  //delete item function

  const deleteitem = async item_id => {
    try {
      const deleteitem = await fetch(`http://localhost:5000/item/${item_id}`, {
        method: "DELETE"
      });

      setitems(items.filter(item => item.item_id !== item_id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getitems = async () => {
    try {
      const response = await fetch("http://localhost:5000/item");
      const jsonData = await response.json();

      setitems(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getitems();
  }, []);

  console.log(items);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Item_name</th>
            <th>Rate</th>
            <th>Visible</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {items.map(item => (
            <tr key={item.item_id}>
              <td>{item.item_name}</td>
              <td>{item.rate}</td>
              <td>{item.item_vis?"true":"false"}</td>
              <td>
                <EditItem item={item} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteitem(item.item_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListItem;