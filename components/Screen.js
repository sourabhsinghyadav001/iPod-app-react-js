import classes from "./Screen.module.css";
export default function (props) {
  return <div className={classes.container}>{props.children}</div>;
}
