import MainPage from './mainPage/MainPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Registration from './registrationPage/Rigistration.jsx';
import Search from './search/Search.jsx';

function App(){
 return(
    <>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/registr" element={<Registration />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    </>
  )
}
 export default App