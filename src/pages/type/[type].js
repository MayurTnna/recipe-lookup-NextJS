const FoodDescription = ({ data }) => {
  return <div>\ghn{console.log(data.meals[0].strMeal)}</div>;
};

export default FoodDescription;

export const getServerSideProps = async (context) => {
  const { type } = context.params;
  console.log(type);
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
