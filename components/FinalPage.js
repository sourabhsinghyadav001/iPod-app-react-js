export default function FinalPage(props) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        color: "black",
        fontFamily: "Sans-Serif"
      }}
    >
      {props.text}
    </div>
  );
}
