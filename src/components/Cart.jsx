import React from "react";
const Cart = ({carts}) => {
    
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
     console.log(totalPrice)
    return (
      <div className="w-9/12 mx-auto border border-gray-100 rounded-2xl p-5 shadow-sm">  
        <div className=" p-10 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
         <div className="space-y-4">
            {
           
                carts.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-[#F8F9FB] rounded-2xl p-5">

                        <div className="flex items-center gap-5">
                            <div className="p-3 border border-gray-200 rounded-full bg-white shadow-sm flex justify-center items-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-7 h-7 object-contain"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-[#101727]">{item.name}</h2>
                                <p className="text-sm text-gray-400 font-medium">${item.price}</p>
                            </div>
                        </div>

                        <button className="text-[#FF4D94] font-bold text-sm px-4 hover:opacity-80">
                            Remove
                        </button>
                    </div>
                ))
            }
            </div>

        

              <div className="mt-10 pt-8 border-t border-gray-50">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-gray-400 text-lg">Total:</span>
                        <span className="text-2xl font-extrabold text-[#101727]">${totalPrice}</span>
                    </div>

                    <button className="w-full bg-[#7128F0] text-white font-bold py-5 rounded-2xl text-lg hover:shadow-xl hover:shadow-purple-100 transition-all">
                        Proceed To Checkout
                    </button>
                </div>
        </div>
                  
                
        
        </div>
    
    );
}
export default Cart ;