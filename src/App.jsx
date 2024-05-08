import MainPage from './mainPage/MainPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Registration from './registrationPage/Rigistration.jsx';

function App(){
 return(
    <>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/registr" element={<Registration />} />
        </Routes>
    </>
  )
}
 export default App