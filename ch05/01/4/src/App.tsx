import styles from "./App.module.css";
import classNames from "classnames/bind";
import Child from "./components/Child";

export default function App() {
  const isActive = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <button className={cx({ btn: true, "is-active": isActive })}>
        App Button
      </button>
      <Child />
    </>
  );
}
