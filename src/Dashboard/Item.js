import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Dialogbox from "./DialogboxUpdate";

export default function Item({ item }) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleUpdate = (updatedData) => {
    // Perform the necessary update operation and save the updated data to the JSON file
    // can use an API call or any suitable method to update the JSON file

    // After updating the data, close the dialog box
    setDialogOpen(false);
  };

  // Extract date from 'placed_on' field
  const dateArray = item.placed_on.split("T");
  const dateString = dateArray[0];

  return (
    <>
      <div className="item-container">
        <div className="item-image-box">
          <label>
            <input type="radio" name="select" />
          </label>
          <img className="item-image" alt="" src={item.item} />
          <div>
            <h4>{item.brand_name}</h4>
            <span className="item-desc">{item.data}</span>
          </div>
        </div>
        <span className="item-data-color">{item.price}</span>
        <span className="item-data-color">{item.quantity}</span>
        <span className="item-data-color">{dateString}</span>
        <BiDotsHorizontalRounded
          className="item-more-opt"
          onClick={handleDialogOpen}
        />
      </div>
      {isDialogOpen && <Dialogbox item={item} onUpdate={handleUpdate} />}
    </>
  );
}
