import './App.css'
import './styles.css'
import { AnimatedBackground } from 'animated-backgrounds';
import Landing from './components/Landing'
import Projectes from './components/Projectes';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {

  return (
    <>
    <Header title="Proyectos" />
    <Projectes />
    <Footer />

    </>
  )
}

export default App
