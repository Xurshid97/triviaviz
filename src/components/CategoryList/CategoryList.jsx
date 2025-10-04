import React, { useState } from "react";
import './CategoryList.css';

const CategoryList = ({ categories, selectedCategory, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const allCategories = [{ id: 0, name: "All Categories" }, ...categories];

  const filteredCategories = allCategories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="category-search"
      />
      <ul className="category-list">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <li
              key={cat.id}
              onClick={() =>
                onSelect(cat.name === "All Categories" ? "All" : cat.name)
              }
              className="category-item"
              style={{
                backgroundColor:
                  selectedCategory ===
                  (cat.name === "All Categories" ? "All" : cat.name)
                    ? "#e0e0e0"
                    : "transparent",
                fontWeight:
                  selectedCategory ===
                  (cat.name === "All Categories" ? "All" : cat.name)
                    ? "bold"
                    : "normal",
                borderBottom: "1px solid #eee",
              }}
            >
              {cat.name}
            </li>
          ))
        ) : (
          <li className="no-categories">
            No categories found
          </li>
        )}
      </ul>
    </div>
  );
};

export default CategoryList;
