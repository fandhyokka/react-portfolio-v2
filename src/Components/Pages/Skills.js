import useMediaQuery from "../../Hooks/useMediaQuery";
import { motion } from "framer-motion";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiBootstrap, SiRedux } from "react-icons/si";
import { FaReact, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const isMobile = useMediaQuery("(max-width: 431px)");

  const getIconStyle = () => {
    if (isMobile) {
      return { fontSize: "5em" };
    } else {
      return { fontSize: "10em" };
    }
  };

  const rotateAnimation = {
    hidden: { rotate: 0 },
    visible: { rotate: 360 },
  };

  const mySkill = [
    { icon: <IoLogoHtml5 style={getIconStyle()} />, title: "HTML" },
    { icon: <IoLogoCss3 style={getIconStyle()} />, title: "CSS" },
    { icon: <IoLogoJavascript style={getIconStyle()} />, title: "JavaScript" },
    { icon: <SiTailwindcss style={getIconStyle()} />, title: "TailwindCSS" },
    { icon: <SiBootstrap style={getIconStyle()} />, title: "Bootstrap" },
    { icon: <FaReact style={getIconStyle()} />, title: "ReactJS" },
    { icon: <SiRedux style={getIconStyle()} />, title: "Redux" },
    { icon: <FaGitAlt style={getIconStyle()} />, title: "GIT" },
  ];

  return (
    <section id="skills">
      <div className="md:flex md:flex-col md:items-center md:gap-16 text-center">
        <motion.div
          className={`font-opensans font-semibold text-4xl ${isAboveLarge ? "" : "text-center"} ${isMobile ? "mt-4 mb-2" : ""}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        ></motion.div>
        <p className={`font-opensans font-semibold text-4xl ${isAboveLarge ? "" : "text-center mt-5 mb-10"}`}>
          MY <span className="text-green-800">SKILLS</span>
        </p>
        <div className={`flex flex-wrap justify-center ${isAboveLarge ? "gap-4" : "gap-10"}`}>
          {mySkill.map((skill, index) => (
            <motion.div key={index} className="icon-container" initial="hidden" animate="visible" whileHover={{ scale: 1.1 }} variants={rotateAnimation}>
              {skill.icon}
              <span className="font-semibold font-opensans">{skill.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
