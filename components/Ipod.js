import classes from "./Ipod.module.css";
import Pad from "./Pad";
import Screen from "./Screen";
export default function Ipod(props) {
  return (
    <div className={classes.container}>
      <div className={classes.screenContainer}>
        <div className={classes.screen}>
          <Screen>{props.children}</Screen>
        </div>
      </div>
      <div className={classes.padContainer}> </div>
      <Pad />
    </div>
  );
}
