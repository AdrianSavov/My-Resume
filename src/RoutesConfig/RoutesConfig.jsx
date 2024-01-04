import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home/Home';
import MySkills from '../Components/MySkillsComponent/MySkills';


const RoutesConfig = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='my-skills' element={<MySkills />} />

        </Routes>
    );
};

export default RoutesConfig;