import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import SignInComponent from './pages/SignIn';

function App() {

  const user = localStorage.getItem("token");

  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route index element={<SignInComponent/>}/>
          {user && <Route path='/home' element ={<Home />} />}
          {user && <Route path='/about' element = {<About />} />}
          {user && <Route path='/contact' element = {<Contact />} />}
          {user && <Route path='/jobs' element = {<Jobs />} /> }
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
