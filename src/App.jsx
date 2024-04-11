import NavbarComponent from './Components/Navbar/NavbarComponent'
import Footer from './Components/Footer/Footer';
import RoutesConfig from './RoutesConfig/RoutesConfig';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const backgroundImage = {
    backgroundImage: 'url("wallpaper.png")'
  }
  return (
    <div className='main' style={backgroundImage}>
      <NavbarComponent />
      <RoutesConfig />
      <Footer />
    </div>
  )
}

export default App
