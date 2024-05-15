import MainPage from './mainPage/MainPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Registration from './registrationPage/Rigistration.jsx';
import Search from './search/Search.jsx';
import Results from './results/Results.jsx';

function App(){
 return(
    <>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/registr" element={<Registration />} />
            
            <Route path="/search" element={<Search />} />

            <Route path="/result" element={<Results />} />
            
        </Routes>
    </>
  )
}
 export default App