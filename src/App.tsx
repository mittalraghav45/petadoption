import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { PetList } from "./services/PetLists";
import { PetDetails } from "./components/PetDetails";
import {PetAdoptionForm} from "./components/PetAdoptionForm";

function App() {
  return (
  
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PetList />}></Route>
          <Route path="/details/:id" element={<PetDetails />}>
          </Route>
          <Route path='/adoptions/:id' 
            element={<PetAdoptionForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
