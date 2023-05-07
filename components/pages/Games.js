import MenuPage from "../MenuPage";
export default function Games() {
  const list = [
    { text: "CS:GO", next: "GAMES_APP" },
    { text: "Valorant", next: "GAMES_APP" },
    { text: "Minecraft", next: "GAMES_APP" },
    { text: "GTA", next: "GAMES_APP" }
  ];
  return <MenuPage list={list} />;
}
