import { useTheme } from "./Theme/ThemeProvider";
import Header from "./components/Sections/Header"

function App() {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <div className={` 
      min-h-screen | px-12 py-4 | font-poppins 
    `}>
      <Header />
    </div>
  )
}

export default App
