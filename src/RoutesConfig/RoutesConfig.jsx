import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home/Home';
import MySkills from '../Components/MySkillsComponent/MySkills';
import MyWork from '../Components/MyWorkComponent/MyWork';

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='my-skills' element={<MySkills />} />
            <Route path='my-work' element={<MyWork />} />
        </Routes>
    );
};

export default RoutesConfig;