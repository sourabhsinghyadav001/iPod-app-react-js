import MenuPage from "../MenuPage";
export default function Store() {
  const list = [
    { text: "Trending", next: "STORE_APP" },
    { text: "Best", next: "STORE_APP" },
    { text: "Latest", next: "STORE_APP" },
    { text: "Top", next: "STORE_APP" }
  ];
  return <MenuPage list={list} />;
}
