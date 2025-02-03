import {testimonials} from '../constants.js';

const Testimonials = () => {
  return (
    <div className='mt-8 lg:mt-16 text-white'>
      <h2 className='text-center text-6xl'>What People are saying</h2>
      <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((item,index) => {
                return <TestimonialCard key={index} testimonial={item}/>
            })}
      </div>
    </div>
  )
}

const TestimonialCard = ({testimonial}) => {
    console.log(testimonial)
    return (
        <div className='px-6 py-4 bg-neutral-800 rounded-lg flex flex-col justify-around'>
            <p className='text-md tracking-wide'>{testimonial.feedback}</p>
            <div className='mt-4 flex gap-6'>
                <img src={testimonial.profilePhoto} alt="Profile Photo" className='h-12 w-12 rounded-full border border-white'/>
                <div className='gap-2'>
                    <p className='text-slate-200 text-lg'>{testimonial.name}</p>
                    <p className='text-slate-500 italic'>{testimonial.designation}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
