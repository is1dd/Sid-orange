import React, { useState } from "react";

const CategoryCard = ({
  title,
  handleRemoveCategory,
  setOurData,
  ourData,
  categoryIndex,
}) => {
  const [data, setData] = useState([
    {
      category: "",
      brand: "",
      mobile: "",
      unitPrice: "",
      quantity: "",
      total: "",
      id: "",
      title,
    },
  ]);
  const handleSaveLocalStorage = (index, obj) => {
    console.log(ourData, "our data checking");
    let checking = [...ourData];
    let filtered = checking.filter((el) => el?.id == title + index);
    console.log(obj, "filtered");
    filtered.length == 0 ? setOurData([...ourData, obj]) : "";
  };
  const handleChange = (index, field, value) => {
    let updatedData = [...data];
    updatedData[index][field] = value;
    updatedData[index].id = title + index;
    updatedData[index].title = title;
    if (field === "unitPrice" || field === "quantity") {
      const unitPrice = parseFloat(updatedData[index].unitPrice);
      const quantity = parseFloat(updatedData[index].quantity);
      const total =
        isNaN(unitPrice) || isNaN(quantity)
          ? ""
          : (unitPrice * quantity).toFixed(2);
      updatedData[index].total = total;
    }
    // console.log(updatedData[index])
    handleSaveLocalStorage(index, updatedData[index]);
    setData(updatedData);
  };
  const handleAddFields = () => {
    setData([
      ...data,
      {
        category: "",
        brand: "",
        mobile: "",
        unitPrice: "",
        quantity: "",
        total: "",
      },
    ]);
  };
  const handleRemoveFields = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  return (
    <div>
      {title.length != 0 && (
        <div style={{ fontSize: "1.5rem" }}>
          <button
            onClick={() => handleRemoveCategory(categoryIndex)}
            style={{ fontSize: "1.2rem" }}
          >
            Remove
          </button>{" "}
          {title}
        </div>
      )}
      {data.map((item, index) => (
        <div key={index} className="category-item">
          <input
            type="text"
            placeholder="Category"
            value={item.category}
            onChange={(e) => handleChange(index, "category", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Brand"
            value={item.brand}
            onChange={(e) => handleChange(index, "brand", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Mobile"
            value={item.mobile}
            onChange={(e) => handleChange(index, "mobile", e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Unit Price"
            value={item.unitPrice}
            onChange={(e) => handleChange(index, "unitPrice", e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) => handleChange(index, "quantity", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Total"
            value={item.total}
            readOnly
            required
          />
          <button type="button" onClick={() => handleRemoveFields(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddFields}>
        Add
      </button>
    </div>
  );
};

export default CategoryCard;
