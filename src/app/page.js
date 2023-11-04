import MainPosts from "@/components/MainPosts/MainPosts";
import styles from "./page.module.css";
import RightSide from "@/components/RightSide/RightSide";

export default function Home(props) {
  console.log(props);
  return (
    <main className={styles.main}>
      <MainPosts />
      <RightSide />
    </main>
  );
}
