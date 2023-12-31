import { useTranslation } from "react-i18next";
import "./App.css";
import useLocalStorage from "./hooks/use-localstorage";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "uk");

  const handleLenguageChange = () => {
    if (language === "en") {
      i18n.changeLanguage("uk");
      setLanguage("uk");
    } else if (language === "uk") {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  };

  return (
    <div className="App">
      <h2>{t("Welcome to React")}!!!!</h2>
      <br />
      <button onClick={handleLenguageChange}>
        {t("change to")} {language === "uk" ? t("english") : t("ukrainian")}
      </button>
      <button className="reload" onClick={() => window.location.reload()}>
        {t("refresh page")}
      </button>
    </div>
  );
}

export default App;
