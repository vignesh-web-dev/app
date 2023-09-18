"use client";

import Image from "next/image";
import styles from "./style/page.module.css";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import React from "react";
import StarwarCard from "./Components/starwarCard";
import * as React from "react";
import MyPagination from "./Components/pagination";
import { Bars } from "react-loader-spinner";
import Search from "./Components/search";

export default function Home() {
  const router = useRouter();
  const [statedata, setStatedata] = useState([]);
  const [page, setPage] = React.useState(1);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [selectedCard, setSelectedCard] = useState(null);
  const fetchurl = "https://swapi.dev/api/people?page=";
  const searchurl = "https://swapi.dev/api/people?search=";
  const queryClient = useQueryClient();

  function fetchPosts({ queryKey }) {
    const page = queryKey[1]?.page || 1;
    const url = queryKey[1]?.fetchurl;
    return fetch(`${url} ${page || value}`).then((res) => res.json());
  }
  const data = useQuery(["posts", { page, fetchurl }], fetchPosts);
  React.useEffect(() => {
    if (data.status != "loading" && data.status != "error") {
      setStatedata(data.data.results);
      console.log(statedata);
    }
  }, [data, data.status]);
  function colourNameToHex(colour) {
    var colours = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      "indianred ": "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgrey: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370d8",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#d87093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32",
    };

    if (typeof colours[colour.toLowerCase()] != "undefined")
      return colours[colour.toLowerCase()];

    return false;
  }
  const updateParentState = (newState) => {
    setPage(newState);
    setSelectedCard(null);
  };
  function formatDate(inputDateString) {
    const inputDate = new Date(inputDateString);
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return inputDate.toLocaleDateString("en-GB", options);
  }
  const handleCardClick = (card) => {
    console.log(card);
    setSelectedCard(card);
  };
  if (data.status === "loading") {
    return (
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
  if (data.status === "error") {
    return <h2>Error</h2>;
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Starwars Character App</h2>
      <Search></Search>
      <div className={styles.Cardwrapper}>
        {statedata &&
          statedata.map((item, index) => {
            const imageUrl = `https://picsum.photos/200?random=${page}${
              index + 1
            }`;
            return (
              <div
                style={{
                  backgroundColor: item.eye_color
                    ? colourNameToHex(item.eye_color)
                    : "",
                }}
                key={index}
                className={styles.itemWrapper}
                onClick={() => handleCardClick(item)}
              >
                <StarwarCard name={item.name} src={imageUrl}></StarwarCard>
              </div>
            );
          })}
      </div>
      <div className={styles.buttonWrapper}>
        {/* <button onClick={decreasePage} disabled={page === 1}>
          Previous
        </button> */}
        <MyPagination
          onUpdateParentState={updateParentState}
          // onChange={increasePage}
          page={page}
          count={Math.ceil(data.data.count / 10)}
        ></MyPagination>
        {/* <Pagination
          classes={{ root: useStyles.pagination }}
          page={page}
          onChange={increasePage}
          count={Math.ceil(data.data.count / 10)}
        /> */}
        {/* <button
          onClick={increasePage}
          disabled={page >= Math.ceil(data.data.count / 10)}
        >
          Next
        </button> */}
      </div>

      {selectedCard && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalHeader}>{selectedCard.name}</h3>
            <div className={styles.modelTextWrapper}>
              <p>
                <b>Height :</b> {selectedCard.height}m
              </p>
              <p>
                <b>Mass : </b>
                {selectedCard.mass}kg
              </p>
              <p>
                <b>Date : </b>
                {formatDate(selectedCard.created)}
              </p>
              <p>
                <b>No.of Films :</b> {selectedCard.films.length}
              </p>
              <p>
                <b>Birth Year :</b> {selectedCard.birth_year}
              </p>
            </div>
          </div>
          <button
            className={styles.close}
            onClick={() => setSelectedCard(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
