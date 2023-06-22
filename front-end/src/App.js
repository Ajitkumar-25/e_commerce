import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/private_component";
import Login from "./components/login";
import Addproduct from "./components/addproduct";
import ListProduct from "./components/ListProduct";
import UpdateProduct from "./components/UpdateProduct";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes> 
          <Route element={<PrivateComponent/>}>
          <Route path="/" element={<ListProduct/>} />
          <Route path="/add" element={<Addproduct/>} />
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/logout" element={<h1>This is logout</h1>} />
          <Route path="/profile" element={<h1>This is profile</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
