import MainMenu from "./pages/MainMenu";
import Ipod from "./Ipod";
import Music from "./pages/Music";
import Games from "./pages/Games";
import Apps from "./pages/Apps";
import Store from "./pages/Store";
import FinalPage from "./FinalPage";
export default function Router({ page }) {
  switch (page) {
    case "MAIN_MENU":
      return (
        <Ipod>
          <MainMenu />
        </Ipod>
      );
    case "MUSIC":
      return (
        <Ipod>
          <Music />
        </Ipod>
      );
    case "GAMES":
      return (
        <Ipod>
          <Games />
        </Ipod>
      );
    case "APPS":
      return (
        <Ipod>
          <Apps />
        </Ipod>
      );
    case "STORE":
      return (
        <Ipod>
          <Store />
        </Ipod>
      );
    case "MUSIC_APP":
      return (
        <Ipod>
          <FinalPage text="Music App" />
        </Ipod>
      );
    case "GAMES_APP":
      return (
        <Ipod>
          <FinalPage text="Games App" />
        </Ipod>
      );
    case "STORE_APP":
      return (
        <Ipod>
          <FinalPage text="Store App" />
        </Ipod>
      );
    case "APPS_APP":
      return (
        <Ipod>
          <FinalPage text="Apps App" />
        </Ipod>
      );
    default:
      return (
        <Ipod>
          <div
            style={{
              fontSize: "20px",
              color: "white",
              textAlign: "center"
            }}
          >
            404 NOT FOUND!
          </div>
        </Ipod>
      );
  }
}
