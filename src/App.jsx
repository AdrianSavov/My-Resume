import NavbarComponent from './Components/Navbar/NavbarComponent'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import RoutesConfig from './RoutesConfig/RoutesConfig';

function App() {

  return (
    <div className='main'>
      <NavbarComponent />
      <RoutesConfig />
      <Footer />
    </div>
  )
}

export default App
