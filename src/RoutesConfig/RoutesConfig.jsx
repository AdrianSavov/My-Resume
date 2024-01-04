import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home/Home';


const RoutesConfig = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />

        </Routes>
    );
};

export default RoutesConfig;