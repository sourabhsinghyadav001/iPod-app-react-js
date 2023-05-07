import MenuPage from "../MenuPage";
export default function Apps() {
  const list = [
    { text: "LinkedIn", next: "APPS_APP" },
    { text: "Tinder", next: "APPS_APP" },
    { text: "Facebook", next: "APPS_APP" },
    { text: "Twitter", next: "APPS_APP" }
  ];
  return <MenuPage list={list} />;
}
