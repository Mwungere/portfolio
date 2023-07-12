const About = () => {
    return ( 
        <div name="about" className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className=" mt-96 pb-8">
                    <p className=" text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className=" text-xl mt-20">Hello! I'm Mwungere Elite, an experienced full-stack developer passionate about crafting innovative web applications. With expertise in front-end and back-end development, I bring a comprehensive approach to building dynamic and user-centric solutions.</p>
                <br />
                <p className="text-xl">Proficient in languages such as JavaScript and Python, along with frameworks like React and Node.js, I have a strong foundation in creating scalable and efficient applications. With 5+ years of industry experience, I've honed my skills in database management, RESTful APIs, and version control systems like Git. I thrive in collaborative environments, leveraging my problem-solving abilities and attention to detail to deliver high-quality results. You can read more about my skills in the resume.</p>
                <br />
                <p className=" mb-80 text-xl">By staying up-to-date with the latest technologies, I strive to create seamless digital experiences that drive user satisfaction and business success. Let's work together to transform your ideas into reality!</p>
            </div>
        </div>
     );
}
 
export default About;