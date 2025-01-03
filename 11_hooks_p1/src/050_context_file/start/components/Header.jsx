import { useTheme, useUpdateTheme } from "../context/ThemeContext";

const Header = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  const THEMES = ["light", "dark", "red"];
  const changeTheme = (e) => setTheme(e.target.value);
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((value) => (
        <label key={value}>
          <input
            type="radio"
            value={value}
            checked={theme === value}
            onChange={changeTheme}
          />
          {value}
        </label>
      ))}
    </header>
  );
};

export default Header;
