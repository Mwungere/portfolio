import person from "../assets/80022556_601450963995237_3743575146816864256_n.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-52 md:mt-5"> {/* Apply top margin here */}
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-60">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md mt-8">With 8 years of experience as a full-stack developer, I specialize in creating innovative and user-friendly web applications. My expertise spans both front-end and back-end development, allowing me to design and implement robust solutions. I prioritize clean code, attention to detail, and staying up-to-date with the latest technologies. By leveraging my diverse skill set, I deliver high-quality results that exceed client expectations. With a passion for driving success and making a positive impact, I seamlessly integrate creativity, problem-solving, and technical proficiency into my work as a full-stack developer.</p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span>
            </Link>
          </div>
        </div>
        <div>
          <img src={person} alt="my profile" className="rounded-2xl mx-auto mb-96 md:mb-10 md:mt-60 md:ml-10 w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
