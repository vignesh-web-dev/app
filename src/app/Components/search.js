import React from "react";
import styles from "../style/page.module.css";
import { useQuery } from "@tanstack/react-query";

function Search() {
  const [search, setPrev] = useState();
  const { data } = useQuery({
    queryKey: "search",
  });
  const handleSearchClick = () => {
    let input = document.getElementById("searchInput").value;
  };
  return (
    <div className={styles.form}>
      <input
        className={styles.formInput}
        type="text"
        id="searchInput"
        placeholder="Search by character name"
      />
      <select className={styles.formSelect} id="filterBy">
        <option value="" disabled>
          Filter by
        </option>
        <option value="homeworld">Homeworld</option>
        <option value="film">Film</option>
        <option value="species">Species</option>
      </select>
      <button className={styles.formButton} onClick={handleSearchClick}>
        Search & Filter
      </button>
    </div>
  );
}

export default Search;
