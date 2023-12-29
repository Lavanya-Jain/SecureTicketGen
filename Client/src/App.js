import './App.css';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import Welcome from './Pages/welcome/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from "./utils/context"; 


function App() {




  return (
    <BrowserRouter>
      <AppContext>
      <div>
        <Routes>

              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/auth" element={<Auth />} />  

        </Routes>  
      </div>
      </AppContext>
    </BrowserRouter>

  );
}

export default App;
