import Code from '../assets/code.jpg'
import {workflowData} from '../constants'
import { FiCheckCircle } from "react-icons/fi";

const Workflow = () => {
  return (
    <div className="mt-16 text-white">
      <h2 className="text-2xl sm:text-4xl lg:text-6xl text-center">
        Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> coding workflow</span>
      </h2>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-2 w-full">
          <img src={Code} alt="Code" />
        </div>
        <div className='w-full mt-1'>
            {workflowData.map((item,index) => 
            <div className='mb-12'>
              <div className='flex gap-8'>
                <div>
                  <span className='p-2 text-green-500 bg-neutral-700 flex items-center rounded-full'><FiCheckCircle className='h-8 w-8'/></span>
                </div>
                <div>
                  <h5 className='text-3xl'>{item.title}</h5>
                  <p className='text-xl text-slate-500 mt-2'>{item.description}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Workflow
