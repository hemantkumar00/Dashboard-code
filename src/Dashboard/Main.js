import { useEffect, useState } from "react";
import Item from "./Item";
import data1 from "./data.json";

export default function Main() {
  const [data, setData] = useState([]);
  const [placed, setPlaced] = useState(false);
  const [amount, setAmount] = useState(false);
  const [heading, setHeading] = useState("All");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    filterData(selectedValue);
    setHeading(selectedValue);
  };

  const filterData = (selectedValue) => {
    const filteredData = data1.filter((item) => item.status === selectedValue);
    setData(filteredData);
  };

  const handledatesort = (event) => {
    const compareDates = (a, b) => {
      const dateA = new Date(a.placed_on);
      const dateB = new Date(b.placed_on);
      if (placed === false) {
        setPlaced(true);
        return dateA - dateB;
      } else {
        setPlaced(false);
        return dateB - dateA;
      }
    };

    const sortedData = [...data].sort(compareDates);
    setData(sortedData);
  };

  const handleAmountSort = () => {
    const sortedData = [...data].sort((a, b) => {
      const amountA = parseFloat(a.quantity.replace(/[^0-9.-]+/g, ""));
      const amountB = parseFloat(b.quantity.replace(/[^0-9.-]+/g, ""));
      if (amount === false) {
        setAmount(true);
        return amountA - amountB;
      } else {
        setAmount(false);
        return amountB - amountA;
      }
    });
    setData(sortedData);
  };

  useEffect(() => {
    setData(data1);
  }, []);

  return (
    <>
      <div className="container-main container-main-up">
        <div className="confirm-container">
          <span className="issue-text">
            {heading}
            <span className="issue-count">{data.length}</span>
          </span>
          <button className="issue-button">-</button>
        </div>
        <div className="container-confirm-heading">
          <input className="container-confirm-input" placeholder="Search" />
          <select
            className="container-confirm-button"
            onChange={handleSelectChange}
          >
            <option value="Confirmed">Confirmed</option>
            <option value="Delivered">Delivered</option>
            <option value="Refund-Completed">Refund Completed (30d)</option>
            <option value="Pending">Pending</option>
          </select>
          <button
            className="container-confirm-button"
            onClick={handleAmountSort}
          >
            Amount
          </button>
          <button className="container-confirm-button" onClick={handledatesort}>
            Placed on
          </button>
          <p>Options</p>
        </div>
        {data.map((item) => (
          <Item item={item} />
        ))}
      </div>
      <div className="container-main issue-container container">
        <span className="issue-text">
          Issues<span className="issue-count">21</span>
        </span>
        <button className="issue-button">+</button>
      </div>
    </>
  );
}
