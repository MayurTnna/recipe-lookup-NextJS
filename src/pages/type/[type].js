import FoodDescriptionList from "@/components/FoodDescriptionList";

const type = ({ data }) => {
  return (
    <>
      <FoodDescriptionList data={data} />
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
