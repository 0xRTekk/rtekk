// == Import
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";


// == Composant
function Renovation() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div
        className={`flex flex-col justify-center gap-24 h-screen w-full bg-[#E8E8E3] text-[#393632]`}
      >
        <div className="flex flex-col basis-3/4 justify-center items-center text-center">
          <h1 className="w-full p-10 text-9xl uppercase font-black leading-[0.65] border-y-8 border-current">
            <span>Renovation</span> <br />
            <span className="capitalize text-[0.7em]">in Progress</span>
          </h1>
          <motion.p variants={fadeIn("down", "spring", 0.3, 2.5)} className="mt-20 mb-6">
            This website is currently being modernized.
          </motion.p>

          <motion.p variants={fadeIn("down", "spring", 0.1, 2)}>
            You can still consult the old version, but the content is no longer
            up to date.
          </motion.p>
        </div>
        <div className="flex flex-row basis-1/4 justify-around items-baseline pt-12 bg-[#393632] text-[#E8E8E3] rounded-t-3xl">
          <h2 className="text-4xl uppercase font-black">
            <span className="mr-6">Fullstack Developer</span>
            <br />
            <span className="text-2xl font-bold capitalize mr-4">
              Rémi Sulpice
            </span>
            <br />
          </h2>
          <Link to="/home" className="">
            <div className="flex flex-col items-center font-bold uppercase border-4 border-current rounded w-[120px] h-[120px] p-2 hover:bg-rose-100 hover:text-[#393632] hover:border-rose-100 hover:scale-105 transition-all">
              <span>Old</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-2  stroke-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <span>Version</span>
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

// == Export
export default Renovation;
