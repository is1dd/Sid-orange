import { useState } from "react";
import CategoryCard from "./components/CategoryCard";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Category = () => {
  // const history = useHistory();
  const redirect = useNavigate();
  const [addCategory, setAddCategory] = useState([
    {
      title: "",
    },
  ]);
  const [ourData, setOurData] = useState([]);

  const handleAddCategory = () => {
    let count = addCategory.length;
    setAddCategory([
      ...addCategory,
      {
        title: `Option:${count}`,
      },
    ]);
  };

  const handleRemoveCategory = (index) => {
    const updatedData = [...addCategory];
    updatedData.splice(index, 1);
    setAddCategory(updatedData);
  };

  const handleSubmit = () => {
    // console.log(ourData);
    localStorage.setItem("data", JSON.stringify(ourData));
    setTimeout(() => {
      redirect("/dashboard");
    }, 2000);
  };

  return (
    <div>
      <h2>Category</h2>
      {addCategory?.map((el, i) => (
        <CategoryCard
          ourData={ourData}
          setOurData={setOurData}
          categoryIndex={i}
          handleRemoveCategory={handleRemoveCategory}
          key={el + i}
          title={el.title}
        />
      ))}
      <div
        style={{
          display: "flex",
          border: "1px solid transparent",
          marginTop: "1rem",
          justifyContent: "end",
        }}
      >
        <button onClick={handleAddCategory}>Add Category</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Category;
