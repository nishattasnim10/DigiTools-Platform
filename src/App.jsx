import React from "react";
import { useState } from "react"; 
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Models from './components/Models';
import Tools from "./components/Tools";
import Cart from './components/Cart';
import Steps from "./components/Steps"; 
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


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
      <Tools />
      {/* <Tab activeTab={activeTab} setActiveTab={setActiveTab} /> */}
      <div className="bg-gray-50 py-10 -mt-10">
      <div className="  tabs-box justify-center bg-white border border-gray-100 w-93 mx-auto rounded-full">
        <input type="radio" name="my_tabs_1" 
            className="tab  rounded-full w-45 py-5 text-[#25065D] font-semibold
        checked:!bg-gradient-to-r checked:from-[#7128F0] checked:to-[#9247FF] checked:text-white" 
        aria-label="Products" 
           onClick={() => setActiveTab("model")} 
          defaultChecked
        
        />

        <input type="radio" name="my_tabs_1" 
            className="tab  rounded-full w-45 py-5 text-[#25065D] font-semibold
        checked:!bg-gradient-to-r checked:from-[#7128F0] checked:to-[#9247FF] checked:text-white" 
        aria-label={`Cart (${carts.length})`}
           onClick={()=> setActiveTab("Cart")} 
        />

      </div>
      </div>
      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}  />}

      <Steps />
      <Pricing />
      <Footer />
    </>
  );
}

export default App
