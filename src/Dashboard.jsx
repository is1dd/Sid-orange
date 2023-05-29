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
      <div className="tablee">
        <table style={{ width: "80%" }}>
          <thead>
            <tr style={{ width: "80%" }}>
              <th></th>
              <th>Category</th>
              <th>Brand</th>
              <th>Mobile</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td>{item.title == 0 ? "" : item.title}</td>
                <td>{item.category}</td>
                <td>{item.brand}</td>
                <td>{item.mobile}</td>
                <td>{item.unitPrice}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {data.map((item, index) => (
        <div key={index} className="category-item">
          <p>{item.title == 0 ? "" : item.title}</p>
          <p>Category: {item.category}</p>
          <p>Brand: {item.brand}</p>
          <p>Mobile: {item.mobile}</p>
          <p>Unit Price: {item.unitPrice}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: {item.total}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Dashboard;
