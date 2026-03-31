import React from "react";
import { useState } from "react"; 
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Models from './components/Models';
import Cart from './components/Cart';
// import Tab from './components/Tab';

const getModels = async () => {
  const response = await fetch("./models.json")
  return response.json()

}
const modelPromise = getModels()

function App() {
  const [activeTab, setActiveTab] = useState("model")
  // console.log(activeTab)
  const [carts, setCarts] = useState([])
  
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      {/* <Tab activeTab={activeTab} setActiveTab={setActiveTab} /> */}
      <div className="my-5  tabs-box justify-center bg-transparent border border-gray-100 w-100 mx-auto rounded-full mb-10">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 py-5" aria-label="Products" 
           onClick={() => setActiveTab("model")} 
          defaultChecked
        
        />

        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 py-5" aria-label="Cart" 
           onClick={()=> setActiveTab("Cart")} 
          
        />

      </div>
      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}  />}
    </>
  );
}

export default App
