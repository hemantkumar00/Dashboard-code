import { useState } from "react";
import data from "./data.json";

export default function Dialogbox({ item, onUpdate }) {
  const [updatedData, setUpdatedData] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateFieldInData = (id, brand_name, quantity) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          brand_name: brand_name,
          quantity: quantity,
        };
      }
      return item;
    });
  };

  const handleUpdate = () => {
    onUpdate(updatedData);
    updateFieldInData(item.id, updatedData.brand_name, updatedData.quantity);
  };

  return (
    <div className="dialog-container">
      <div className="dialog-box">
        <h3>Update Data</h3>
        <label htmlFor="brand_name">Name:</label>
        <input
          type="text"
          id="brand_name"
          name="brand_name"
          value={updatedData.brand_name}
          onChange={handleChange}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={updatedData.quantity}
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
}
