import FoodDescriptionList from "@/components/FoodDescriptionList";
import { fetchPosts } from "@/redux/action/action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const type = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts({data}));
  }, [data]);
  return (
    <>
      <FoodDescriptionList />
    </>
  );
};

export default type;

export const getServerSideProps = async (context) => {
  const { type } = context.params;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
