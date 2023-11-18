import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Login from './pages/Login';
import SignInComponent from './pages/SignIn';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route index element={<SignInComponent/>}/>
          <Route path='/home' element ={<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/jobs' element = {<Jobs />} /> 
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
