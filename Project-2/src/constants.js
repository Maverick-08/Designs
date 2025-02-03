import person1 from "./assets/person-1.jpg";
import person2 from "./assets/person-2.webp";
import person3 from "./assets/person-3.jpg";
import person4 from "./assets/person-4.jpg";
import person5 from "./assets/person-5.jpg";
import person6 from "./assets/person-6.jpg";

export const workflowData = [
    {
        title:"Code merge made easy",
        description:"Track the performance of your VR apps and gain insigts into user behaviour."
    },
    {
        title:"Review code without worry",
        description:"Track the performance of your VR apps and gain insigts into user behaviour."
    },
    {
        title:"AI Assistance to reduce time",
        description:"Track the performance of your VR apps and gain insigts into user behaviour."
    },
    {
        title:"Share work in minutes",
        description:"Track the performance of your VR apps and gain insigts into user behaviour."
    }
]

export const pricingData = [
    {
        title:"Free",
        isPopular: false,
        price:0,
        features:["Private board sharing","5 Gb Storage","Web Analytics","Private Mode"]
    },
    {
        title:"Pro",
        isPopular: true,
        price:10,
        features:["Private board sharing","10 Gb Storage","Web Analytics (Advance)","Private Mode"]
    },
    {
        title:"Enterprise",
        isPopular: false,
        price:100,
        features:["Private board sharing","Unlimited Storage","High Performance Network","Private Mode"]
    }
]

export const testimonials = [
    {
        name:"Abhay Agrawal",
        profilePhoto: person5,
        designation:"Full Stack Developer",
        feedback:"I am extremely satisfied with the services provided. The team was responsive, professional and delivered beyond my expectations."
    },
    {
        name:"Amit Mondal",
        profilePhoto: person4,
        designation:"Full Stack Developer",
        feedback:"I couldn't be happier with the outcome of our project. The team's creativity and problem solving skills were instrumental in bringing our vision to life."
    },
    {
        name:"Amul Tiwary",
        profilePhoto: person2,
        designation:"ML Engineer",
        feedback:"Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service."
    },
    {
        name:"Brijesh Yadav",
        profilePhoto: person3,
        designation:"Cloud Architect",
        feedback:"Working with the team at XYZ company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!"
    },
    {
        name:"Manjit Kumbharkar",
        profilePhoto: person6,
        designation:"DevOps Engineer",
        feedback:"I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results."
    },
    {
        name:"Saurabh Vishwakarma",
        profilePhoto: person1,
        designation:"DevOps Engineer",
        feedback:"The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in future."
    },
]

export const footerData = [
    {
        title:"Resources",
        links:["Getting Started","Documentation","Tutorials","API Refrences","Community Forums"]
    },
    {
        title:"Platform",
        links:["Features","Supported Device","System Requirements","Downloads","Release Notes"]
    },
    {
        title:"Community",
        links:["Events","Meetups","Conferences","Hackathons","Jobs"]
    }
]