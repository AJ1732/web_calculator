import "./styles.css";
import { useTheme } from "../ThemeProvider";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <label className={`relative | flex justify-between items-center | text-xl | p-2 | group`}>
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
        className={`absolute left-0 top-0 | w-full h-full rounded-md | appearance-none peer`}
      />
      <span className={`
        w-14 h-8 | ml-4 p-1 | bg-blue-dark | rounded-full 
        flex items-center flex-shrink-0
        duration-300 ease-in-out
        after:w-6 after:h-6 | after:rounded-full after:shadow-md after:duration-300
        after:${themeBoolean? 'bg-blue-light': 'bg-blue-darker'}
        peer-checked:${themeBoolean? 'bg-blue-light': 'bg-blue-darker'}
        peer-checked:after:translate-x-6
        group-hover:after:translate-x-0.5
      `} />
    </label>
  );
};

export default Switch;
