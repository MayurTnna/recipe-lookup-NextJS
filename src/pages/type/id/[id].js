import FoodCategory from "@/components/FoodCategory";


const id = ({data}) => {
  return <>
  <FoodCategory data={data}/>
  </>
};

export default id;

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  console.log(id);
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

