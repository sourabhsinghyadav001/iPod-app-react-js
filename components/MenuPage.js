import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./MenuPage.module.css";
import { controlActions } from "../store";
export default function MenuPage(props) {
  const [selected, setSelected] = useState(0);
  const notInitial = useRef(false);
  const navigation = useSelector((state) => state.scroll);
  const click = useSelector((state) => state.selectButton);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notInitial.current) {
      if (navigation.slice(0, 2) === "UP")
        setSelected(
          (prev) => (prev - 1 + props.list.length) % props.list.length
        );
      else if (navigation.slice(0, 4) === "DOWN")
        setSelected((prev) => (prev + 1) % props.list.length);
    }
  }, [navigation, props.list.length]);

  useEffect(() => {
    if (notInitial.current) {
      dispatch(controlActions.setPage(props.list[selected].next));
    }
  }, [click]);
  useEffect(() => {
    notInitial.current = true;
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.message}>Ipod.js</div>
      <div className={classes.menu}>
        {props.list.map((element, index) => (
          <div
            className={`${classes.menuItem} ${
              index === selected ? classes.selected : ""
            }`}
            key={index}
          >
            {element.text}
          </div>
        ))}
      </div>
    </div>
  );
}
