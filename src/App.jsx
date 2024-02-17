// import { useTheme } from "./Theme/ThemeProvider";
import Calc from "./components/Sections/Calc";
import Header from "./components/Sections/Header"

function App() {
  // const { theme } = useTheme();
  // const themeBoolean = theme === 'light';

  return (
    <div className={` 
      min-h-screen | px-12 py-4 | font-poppins 
      duration-300 ease-in-out
      grid gap-10
    `}>
      <Header />
      <Calc />
    </div>
  )
}

export default App
