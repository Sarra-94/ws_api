import React, { useEffect, useState } from "react";
import "./Paginate.css";
const renderData = (data) => {
  return (
    <ul>
      {data.map((todo, index) => {
        return <li key={index}>{todo.title}</li>;
      })}
    </ul>
  );
};

const PaginationComponent = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);

  const pages = [];

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
  //   for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
  //     pages.push(i);
  //   }

  //   const handleClick = (e) => {
  //     setCurrentPage(e.target.id);
  //   };
  //   const renderNumberPages = () =>
  //     pages.map((number) => {
  //       return (
  //         <li
  //           className={number == currentPage ? "active" : null}
  //           key={number}
  //           id={number}
  //           onClick={handleClick}
  //         >
  //           {number}
  //         </li>
  //       );
  //     });

  return (
    <div>
      <h2>TodoList</h2>
      {/* <ul className="listNumbers">{renderNumberPages()}</ul>*/}
      {data ? renderData(currentItem) : "loading"}
    </div>
  );
};

export default PaginationComponent;
