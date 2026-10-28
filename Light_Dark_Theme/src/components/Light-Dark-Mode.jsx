import useLocalStorage from "../Hooks/useLocalStorage";
import './theme.css'

const Light_Dark_Mode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }
  console.log("Theme",theme);

  return (
    <div className="light-dark-mode" id={theme === "dark" ? "dark" : "light"}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default Light_Dark_Mode;
