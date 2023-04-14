import FoodTypeList from "@/components/FoodTypeList";
import Navbar from "../common/Navbar"
import React from "react";

const home = ({ data }) => {
  return (
    <>
   
      <FoodTypeList data={data} />
    </>
  );
};

export default home;

export async function getServerSideProps() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}



// https://www.themealdb.com//images/media/meals/llcbn01574260722.jpg/preview
// https://unsplash.com/photos/2f2fEcRtN1M
