import React from "react";
export default function Filters(props) {
    const [sizes,setSizes]=React.useState(['S','M','L','XL']);
    const [categories,setCategories]=React.useState(['1','2','3']);
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
        <h3>Filters</h3>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Size
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div className="accordion-body">
            <ul className="filter-list">
              {sizes.map(e=>(<li className="filter-list-item">{e}</li>))}     
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Category
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div className="accordion-body">
          <ul className="filter-list">
              {categories.map(e=>(<li className="filter-list-item">{e}</li>))}     
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
