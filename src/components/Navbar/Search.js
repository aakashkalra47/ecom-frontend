import React from "react";
function SearchBar(props) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      alert("Enter Pressed");
    }
  };
  return (
    <input
      className="nav-search"
      type="text"
      placeholder="Search item"
      onKeyUp={handleKeyPress}
      style={{ alignSelf: "center" }}
    />
  );
}
export default SearchBar;
