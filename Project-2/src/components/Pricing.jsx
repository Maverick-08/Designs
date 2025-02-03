import { pricingData } from "../constants.js";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="mt-12 lg:mt-16 text-white">
      <h2 className="text-6xl text-center">Pricing</h2>
      <div className='mt-8 mb-4 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {pricingData.map((item, index) => {
          return <Plans key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

const Plans = ({ item }) => { 
    
    return (
        <div className="p-8 border border-slate-800 rounded-lg">
            <h2 className="text-3xl">{item.title}{item.isPopular ? <span className="text-xl text-orange-500">{" "}(Most Popular)</span> : <></>}</h2>

            <p className="mt-4">
                <span className="text-3xl">&#x24;{item.price}</span>
                <span className="text-slate-600">{" "}/month</span>
            </p>

            {item.features.map((feature,index) => {
                return(
                    <div className="mt-4 flex items-center gap-4">
                        <div><IoIosCheckmarkCircleOutline className="h-6 w-6" /></div>
                        <div>{feature}</div>
                    </div>
                )
            })}
            <div className="mt-12 mb-2 flex justify-center"><button className="border border-orange-400 px-24 py-2 rounded-md text-lg hover:border-orange-600 hover:text-orange-300">Subscribe</button></div>
        </div>
    );
}

export default Pricing;
