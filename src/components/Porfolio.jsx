import cyclist from "../assets/portfolio/7262a334-fc85-4fff-8884-77a2d58857e2.png";
import personFashion from "../assets/portfolio/E-commerce App.png";
import timeLog from "../assets/portfolio/HR Management App.png";
import dashBoard from "../assets/portfolio/HR Management Web App Design.png";
import mobileSocialApp from "../assets/portfolio/Social Media App.png";
import shoesEcommerce from "../assets/portfolio/e commerce web exploration.png";
import weather from "../assets/portfolio/weather.jfif";
import mysnikers from "../assets/portfolio/mySnkr.jfif";
import booking from "../assets/portfolio/Hire Expert Website Designer.jfif";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: cyclist,
            button: 'React, TailwindCss, Mongodb, nodejs, nextjs'
        },
        {
            id: 2,
            src: shoesEcommerce,
            button: 'Html, Bootstrapcss, javascript, Mongodb, nodejs, nextjs'

        },
        {
            id: 3,
            src: timeLog,
            button: 'React, materialisecss, Tailwind, Mongodb, nodejs, nextjs'
        },
        {
            id: 4,
            src: personFashion,
            button: 'React, Tailwind, Firebase, nodejs, nextjs'
        },
        {
            id: 5,
            src: dashBoard,
            button: 'React, Tailwind, MYSQL, nodejs, nextjs'
        },
        {
            id: 6,
            src: weather,
            button: 'React, CSS, Mongodb, nodejs, nextjs'
        }

    ]

    return (
        <div name="portfolio" className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className=" pb-8">
                    <p className=" text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className=" py-6">Check out some of my work right here</p>
                </div>

                <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src, button }) => {
                            return (

                    <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className=" rounded-md duration-200 hover:scale-105" />
                        <div className=" flex items-center justify-center">
                            <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">{button}</button>
                            {/* <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button> */}
                        </div>
                    </div>
                            
                        )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Portfolio;