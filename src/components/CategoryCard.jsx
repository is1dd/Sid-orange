import React, { useEffect, useRef, useState } from "react";

const CategoryCard = ({
  title,
  handleRemoveCategory,
  setOurData,
  ourData,
  categoryIndex,
  addCard,
  setAddCard,
}) => {
  const BtnRef = useRef(null);
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
  useEffect(() => {
    if (title != "" && addCard > 1) {
      // console.log(addCard);
      let arr = new Array(addCard - 1).fill(0);
      arr.map((el) => BtnRef.current.click());
    }
  }, [title]);
  useEffect(() => {
    console.log(data, "checking");
  }, [data]);
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
    console.log("inside handleAdd");
    if (title == "") {
      setAddCard((prev) => prev + 1);
    }
    let obj = {
      category: "",
      brand: "",
      mobile: "",
      unitPrice: "",
      quantity: "",
      total: "",
      title,
    };
    data.push(obj);
    setData([...data]);
    // setData([
    //   ...data,
    //   {
    //     category: "",
    //     brand: "",
    //     mobile: "",
    //     unitPrice: "",
    //     quantity: "",
    //     total: "",
    //     title,
    //   },
    // ]);
  };
  const handleRemoveFields = (index) => {
    if (title == "") {
      setAddCard((prev) => prev - 1);
    }
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  return (
    <div style={{ border: "1px solid black", marginTop: "20px" }}>
      {title.length != 0 && (
        <div style={{ fontSize: "1.5rem", marginLeft: "5px" }}>
          <button
            onClick={() => handleRemoveCategory(categoryIndex)}
            style={{
              color: "white",
              backgroundColor: "red",
            }}
          >
            Remove
          </button>{" "}
          {title}
        </div>
      )}
      {data.map((item, index) => (
        <div key={index} className="category-item">
          <button
            type="button"
            onClick={() => handleRemoveFields(index)}
            style={{
              color: "white",
              backgroundColor: "red",
            }}
          >
            X
          </button>
          <button
            ref={BtnRef}
            type="button"
            onClick={handleAddFields}
            style={{
              color: "black",
              backgroundColor: "#90ee90",
            }}
          >
            +
          </button>
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
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
