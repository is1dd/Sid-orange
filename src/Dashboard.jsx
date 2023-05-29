import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const categoryData = localStorage.getItem("data");
    if (categoryData) {
      setData(JSON.parse(categoryData));
      console.log(JSON.parse(categoryData), "checking");
    }
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      {data.map((item, index) => (
        <div key={index} className="category-item">
          <p>{item.title == 0 ? "" : item.title}</p>
          <p>Category: {item.category}</p>
          <p>Brand: {item.brand}</p>
          <p>Mobile: {item.mobile}</p>
          <p>Unit Price: {item.unitPrice}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: {item.total}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
