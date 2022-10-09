const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
app.use(cors());
app.use(express.json());
app.listen (5000, () => {
    console.log("serverhas started");
});
//create a hotel
app.post("/hotel", async (req, res) => {
    try {
      const { hotel_name } = req.body;
      const { client_id } = req.body;
      const newhotel = await pool.query(
        "INSERT INTO hotel (hotel_name,client_id) VALUES($1,$2) RETURNING *",
        [hotel_name,client_id]
      );
  
      res.json(newhotel.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get all hotel
  
  app.get("/hotel", async (req, res) => {
    try {
      const allhotel = await pool.query("SELECT * FROM hotel");
      res.json(allhotel.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a hotel
  
  app.get("/hotel/:hotel_id", async (req, res) => {
    try {
      const { hotel_id } = req.params;
      const hotel = await pool.query("SELECT * FROM hotel WHERE hotel_id = $1", [
        hotel_id
      ]);
  
      res.json(hotel.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a hotel
  
  app.put("/hotel/:hotel_id", async (req, res) => {
    try {
      const { hotel_id } = req.params;
      const { hotel_name } = req.body;
      const { client_id } = req.body;
      const updatehotel = await pool.query(
        "UPDATE hotel SET hotel_name = $1,client_id=$3 WHERE hotel_id = $2",
        [hotel_name, hotel_id,client_id]
      );
  
      res.json("hotel was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a hotel
  
  app.delete("/hotel/:hotel_id", async (req, res) => {
    try {
      const { hotel_id } = req.params;
      const deletehotel = await pool.query("DELETE FROM hotel WHERE hotel_id = $1", [
        hotel_id
      ]);
      res.json("hotel was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
//create a guest
  app.post("/guest", async (req, res) => {
    try {
        const { hotel_id } = req.body;
    const { guest_name} = req.body;
    const { status} = req.body;
    const { check_in} = req.body;
    const { check_out} = req.body;
      const newguest = await pool.query(
        "INSERT INTO guest (hotel_id,guest_name,status,check_in,check_out) VALUES($1,$2,$3,$4,$5) RETURNING *",
        [hotel_id,guest_name,status,check_in,check_out]
      );
  
      res.json(newguest.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get all guest
  
  app.get("/guest", async (req, res) => {
    try {
      const allguest = await pool.query("SELECT * FROM guest");
      res.json(allguest.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/guestno", async (req, res) => {
    try {
      const allguest = await pool.query("SELECT COUNT(*) FROM guest");
      res.json(allguest.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a guest
  
  app.get("/guest/:guest_id", async (req, res) => {
    try {
      const { guest_id } = req.params;

      
      const guest = await pool.query("SELECT * FROM guest WHERE guest_id = $1", [
        guest_id
      ]);
  
      res.json(guest.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a guest
  
  app.put("/guest/:guest_id", async (req, res) => {
    try {
      const { guest_id } = req.params;
       const { hotel_id } = req.body;
    const { guest_name} = req.body;
    const { status} = req.body;
    const { check_in} = req.body;
    const { check_out} = req.body;
      const updateguest = await pool.query(
        "UPDATE guest SET hotel_id = $1,guest_name=$2,status=$3,check_in=$4,check_out=$5 WHERE guest_id = $6",
        [hotel_id,guest_name,status,check_in,check_out, guest_id]
      );
  
      res.json("guest was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a guest
  
  app.delete("/guest/:guest_id", async (req, res) => {
    try {
      const { guest_id } = req.params;
      const deleteguest = await pool.query("DELETE FROM guest WHERE guest_id = $1", [
        guest_id
      ]);
      res.json("guest was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
//create a item
  app.post("/item", async (req, res) => {
    try {
      const { rate } = req.body;
      const { service_id } = req.body;
      const { item_name } = req.body;
      const { item_vis } = req.body;
      const newitems = await pool.query(
        "INSERT INTO items (rate,service_id,item_name,item_vis) VALUES($1,$2,$3,$4) RETURNING *",
        [rate,service_id,item_name,item_vis]
      );
  
      res.json(newitems.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get all items
  
  app.get("/item", async (req, res) => {
    try {
      const allitems = await pool.query("SELECT * FROM items");
      res.json(allitems.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a items
  
  app.get("/item/:item_id", async (req, res) => {
    try {
      const { item_id } = req.params;
      const items = await pool.query("SELECT * FROM items WHERE items_id = $1", [
        item_id
      ]);
  
      res.json(items.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a items
  
  app.put("/item/:item_id", async (req, res) => {
    try {
      const { item_id } = req.params;
      const { rate } = req.body;
      const { service_id } = req.body;
      const { item_name } = req.body;
      const { item_vis } = req.body;
      const updateitems = await pool.query(
        "UPDATE items SET rate = $1,service_id = $2,item_name = $3,item_vis = $4 WHERE items_id = $5",
        [rate,service_id,item_name,item_vis, item_id]
      );
  
      res.json("items was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a items
  
  app.delete("/item/:items_id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteitems = await pool.query("DELETE FROM items WHERE items_id = $1", [
        items_id
      ]);
      res.json("items was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
//create a service
  app.post("/service", async (req, res) => {
    try {
      const { hotel_id } = req.body;
      const { service_vis } = req.body;
      const { service_name } = req.body;
      const newservice = await pool.query(
        "INSERT INTO service (hotel_id,service_vis,service_name ) VALUES($1,$2,$3) RETURNING *",
        [hotel_id,service_vis,service_name]
      );
  
      res.json(newservice.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get all service
  
  app.get("/service", async (req, res) => {
    try {
      const allservice = await pool.query("SELECT * FROM service");
      res.json(allservice.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a service
  
  app.get("/service/:service_id", async (req, res) => {
    try {
      const { service_id } = req.params;
      const service = await pool.query("SELECT * FROM service WHERE service_id = $1", [
        service_id
      ]);
  
      res.json(service.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a service
  
  app.put("/service/:service_id", async (req, res) => {
    try {
      const { service_id } = req.params;
      const { hotel_id } = req.body;
      const { service_vis } = req.body;
      const { service_name } = req.body;
      const updateservice = await pool.query(
        "UPDATE service SET hotel_id = $1,service_vis = $2,service_name = $3 WHERE service_id = $4",
        [hotel_id,service_vis,service_name, service_id]
      );
  
      res.json("service was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a service
  
  app.delete("/service/:service_id", async (req, res) => {
    try {
      const { service_id } = req.params;
      const deleteservice = await pool.query("DELETE FROM service WHERE service_id = $1", [
        service_id
      ]);
      res.json("service was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
//create a guest_item
  app.post("/guest_item", async (req, res) => {
    try {
      const { item_id } = req.body;
      const { guest_id } = req.body;
      const { time } = req.body;
      const { instructions } = req.body;
      const { status } = req.body;
      const { rating } = req.body;
      const newguest_item = await pool.query(
        "INSERT INTO guest_item (item_id,guest_id,time,instructions,status,rating) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
        [item_id,guest_id,time,instructions,status,rating]
      );
  
      res.json(newguest_item.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get all guest_item
  
  app.get("/guest_item", async (req, res) => {
    try {
      const allguest_item = await pool.query("SELECT * FROM guest_item");
      res.json(allguest_item.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a guest_item
  
  app.get("/guest_item/:relation_id", async (req, res) => {
    try {
      const { relation_id } = req.params;
      const guest_item = await pool.query("SELECT * FROM guest_item WHERE relation_id = $1", [
        relation_id
      ]);
  
      res.json(guest_item.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a guest_item
  
  app.put("/guest_item/:relation_id", async (req, res) => {
    try {
      const { relation_id } = req.params;
      const { item_id } = req.body;
      const { guest_id } = req.body;
      const { time } = req.body;
      const { instructions } = req.body;
      const { status } = req.body;
      const { rating } = req.body;
      const updateguest_item = await pool.query(
        "UPDATE guest_item SET item_id = $1,guest_id = $2,time = $3,instructions = $4,status = $5,rating= $6 WHERE relation_id = $7",
        [item_id,guest_id,time,instructions,status,rating, relation_id]
      );
  
      res.json("guest_item was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a guest_item
  
  app.delete("/guest_item/:relation_id", async (req, res) => {
    try {
      const { relation_id} = req.params;
      const deleteguest_item = await pool.query("DELETE FROM guest_item WHERE relation_id = $1", [
        relation_id
      ]);
      res.json("guest_item was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });