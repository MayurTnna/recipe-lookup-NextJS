import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/redux/action/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.nextReducer.posts.data);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const searchGames = (event) => {
    event.preventDefault();
    const filteredItems = items.data.meals.filter((item) => {
      return item.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
    });
    dispatch(fetchPosts({ data: { meals: filteredItems } }));
    setSearchTerm("");
    console.log({ filteredItems });
  };

  return (
    <>
      <div className={styles.search_box}>
        <button
          className={styles.btn_search}
          type="submit"
          onClick={searchGames}
        >
          <FaSearch />
        </button>
        <input
          type="text"
          className={styles.input_search}
          placeholder="Type to Search..."
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
