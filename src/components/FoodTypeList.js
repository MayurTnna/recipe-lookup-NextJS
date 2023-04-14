import Card from "react-bootstrap/Card";
import styles from "../styles/FoodList.module.css";
import Link from "next/link";

const FoodTypeList = ({ data }) => {
  return (
    <>
      <div className={`${styles.navbar} row mx-auto`}>
        {data &&
          data.meals.map((item) => (
            <div className="col col-lg-3 col-md-4 col-sm-12 py-3">
              <Link className={styles.title} href={`/type/${item.strArea}`}>
                <Card className={styles.FoodList}>
                  <Card.Body>
                    <Card.Text className ={`text-center ${styles.title}`} key={item.meals} >
                      {item.strArea}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};
export default FoodTypeList;
