import MenuPage from "../MenuPage";
export default function MainMenu() {
  const list = [
    { text: "Music", next: "MUSIC" },
    { text: "Games", next: "GAMES" },
    { text: "Apps", next: "APPS" },
    { text: "Store", next: "STORE" }
  ];
  return <MenuPage list={list} />;
}
