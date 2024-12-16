import PortfolioPage from './page'
import { ThemeProvider } from './providers'

function App() {

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PortfolioPage />
    </ThemeProvider>
  )
}

export default App
