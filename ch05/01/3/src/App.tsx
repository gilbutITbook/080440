import styles from "./App.module.css";
import Child from "./components/Child";
export default function App() {
  return (
    <>
      <button className={styles.btn}>App Button</button>
      <Child />
    </>
  );
}
