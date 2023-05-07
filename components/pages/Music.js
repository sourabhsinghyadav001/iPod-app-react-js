import MenuPage from "../MenuPage";
export default function Music() {
  const list = [
    { text: "Albums", next: "MUSIC_APP" },
    { text: "Artists", next: "MUSIC_APP" },
    { text: "Songs", next: "MUSIC_APP" },
    { text: "Favourite", next: "MUSIC_APP" }
  ];
  return <MenuPage list={list} />;
}
