import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const match = useRouteMatch("/bubbles-page");
  const [colorList, setColorList] = useState([]);
  const [update, handleUpdate] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then((res) => {
        console.log(res.data);
        setColorList(res.data);
      })
      .catch((err) => {
        console.log("sorry, you are color blind", err);
      });
  }, [update]);

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        handleUpdate={handleUpdate}
      />
      <Bubbles colors={colorList} />
    </>
  );
};
export default BubblePage;
