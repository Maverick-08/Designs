import {footerData} from "../constants.js"

const Footer = () => {
  return (
    <div className='mt-16 border-t border-slate-600 text-white grid grid-cols-1 sm:grid-cols-3'>
        {footerData.map((item,index)=>{
            return <FooterCard key={index} data={item}/>
        })}
    </div>
  )
}

const FooterCard = ({data}) => {
    return(
        <div className="mt-8 mb-4">
            <h2 className="text-xl font-semibold mt-2 mb-2">{data.title}</h2>
            <ul>
                {data.links.map((item,index) =>{
                    return <li key={index} className="text-sm mt-2 hover:text-slate-300"><a href="#">{item}</a></li>
                })}
            </ul>
        </div>
    )
}

export default Footer
