import html from "../assets/portfolio/html.jfif";
import css from "../assets/portfolio/css.png";
import js from "../assets/portfolio/js.png";
import react from "../assets/portfolio/react.jfif";
import next from "../assets/portfolio/next.png";
import tailwind from "../assets/portfolio/tailwind.png";
import mongodb from "../assets/portfolio/mongodb.png";
import node from "../assets/portfolio/Nodejs.png";
import firebase from "../assets/portfolio/firebase.png";
import mysql from "../assets/portfolio/mysql.png";




const Experience = () => {


    const techs = [
        {
            id:1,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src:js,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src:next,
            title: 'Next',
            style: 'shadow-white'
        },
        {
            id:6,
            src:node,
            title: 'Nodejs',
            style: 'shadow-green-500'
        },
        {
            id:7,
            src:tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id:8,
            src:firebase,
            title: 'Firebase',
            style: 'shadow-orange-800'
        },
        {
            id:9,
            src:mongodb,
            title: 'Mongodb',
            style: 'shadow-green-800'
        },
        {
            id:10,
            src:mysql,
            title: 'Mysql',
            style: 'shadow-white'
        },
     
     

    ]

    return ( 
        <div name="experience" className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        techs.map(({id, src, title, style}) => {
                            return(

                                <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className=" w-20 mx-auto" />
                                <p className="mt-4">{title}</p>
                            </div>


                            )
                        })
                    }
                </div>

            </div>
        </div>
     );
}
 
export default Experience;