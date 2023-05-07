import classes from "./Pad.module.css";
import ZingTouch from "zingtouch";
import { useEffect, useRef } from "react";
import { controlActions } from "../store";
import { useDispatch } from "react-redux";
export default function Pad(props) {
  const dispatch = useDispatch();
  const allowed = useRef(true);
  useEffect(() => {
    const target = document.getElementById("pad");
    var region = new ZingTouch.Region(target);
    region.bind(target, "rotate", function (event) {
      if (allowed.current) {
        if (event.detail.distanceFromLast < 0) {
          dispatch(
            controlActions.setScroll("UP" + new Date().getMilliseconds())
          );
          // console.log("UP");
        } else {
          dispatch(
            controlActions.setScroll("DOWN" + new Date().getMilliseconds())
          );
          // console.log("DOWN");
        }
        allowed.current = false;
        setTimeout(() => {
          allowed.current = true;
        }, 500);
      }
    });
  }, [dispatch]);

  function toggleButtonHandler() {
    dispatch(controlActions.toggleButton());
  }
  function mainMenu() {
    dispatch(controlActions.setPage("MAIN_MENU"));
  }
  return (
    <div className={classes.outer} id="pad">
      <div className={classes.menu} onClick={mainMenu}>
        MENU
      </div>
      <div className={classes.forward}>
        <div className={classes.right}></div>
        <div className={classes.right}></div>
        <div className={classes.vertical}></div>
      </div>
      <div className={classes.backward}>
        <div className={classes.right}></div>
        <div className={classes.right}></div>
        <div className={classes.vertical}></div>
      </div>
      <div className={classes.down}>
        <div className={classes.right}></div>
        <div className={classes.vertical}></div>
        <div className={classes.vertical}></div>
      </div>
      <button className={classes.button} onClick={toggleButtonHandler}></button>
    </div>
  );
}
