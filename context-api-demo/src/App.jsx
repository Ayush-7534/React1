import { useContext } from "react";
import { ThemeContext, UserContext, LangContext } from "./context";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const { lang, setLang } = useContext(LangContext);

  return (
    <div>
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <h2>User: {user.name}</h2>
      <button onClick={() => setUser({ name: "Ayush" })}>
        Change User
      </button>

      <h2>Language: {lang}</h2>
      <button onClick={() => setLang("french")}>
        Change Language
      </button>
    </div>
  );
};

export default App;