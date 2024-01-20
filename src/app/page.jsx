import CardList from "./components/cardList/CardList";
import CategoryList from "./components/categoryList/CategoryList";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import NavBar from "./components/navbar/NavBar";
import styles from "./homepage.module.css";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu/>
      </div>
    </div>
  );
}
