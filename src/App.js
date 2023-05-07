import "./styles.css";
import { useSelector } from "react-redux";
import Router from "../components/Router";

export default function App() {
  const page = useSelector((state) => state.page);
  return <Router page={page} />;
}
