import useMediaQuery from "../../Hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMedia from "../Reusable/SocialMedia";

const Header = ({ setCurrentPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const getClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section id="about" className="md:flex md:justify-between md:items-center gap-16 pt-10 md:h-full">
        <div className="basis-3/5 z-10 md:mt-32 flex justify-center md:order-2">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-10 before:absolute before:-top-20 before:-left-20 before:[400px]
          before:w-full before:max-w-[250px] md:before:max-w-[400px] before:h-full before:border-2 before:border-white before:z-[-1]"
            >
              <img alt="profile" className="transition duration-500 z-10 w-full max-w-[250px] md:max-w-[400px]" src={`${process.env.PUBLIC_URL}/../Assets/Images/Cover.png`} />
            </div>
          ) : (
            <img alt="profile" className="z-10 ml-[-20px] w-full max-w-[400px] md:max-w-[400px]" src={`${process.env.PUBLIC_URL}/../Assets/Images/Cover.png`} />
          )}
        </div>
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-7xl font-opensans z-10 text-start font-bold md:text-start">FANDHY OKKA PRATAMA</p>

            <p className="mt-10 mb-7 text-lg font-opensans text-start md:text-start">A Junior Web Developer. Based in Bandung/Jakarta, Indonesia.</p>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-start md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="bg-gradient-to-r from-green-500 to-blue-500 text-deep-blue rounded-sm py-3 px-7 font-semibold font-opensans
    hover:bg-black hover:text-white transition duration-500 md:text-left"
              onClick={(e) => {
                e.preventDefault();
                getClick("about-me");
              }}
              href="#about-me"
            >
              Get to Know Me Better
            </AnchorLink>
          </motion.div>

          <motion.div
            className="flex mt-10 justify-start md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>
          <motion.div
            className="flex mt-5 justify-center sm:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMedia />
          </motion.div>
        </div>
      </section>
      <section id="about-me">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mt-10 font-opensans font-medium text-justify md:text-justify">
            My Name is Fandhy Okka Pratama, boasting over 6 years of extensive experience in customer service and holding a degree in business management. In my most recent role, I served as a senior Customer Experience professional at a
            major Japanese company specializing in the Japanese Snack subscription box industry.
          </p>
          <p className="text-justify font-opensans font-medium md:text-justify">
            Motivated by a profound interest in the realm of web development and the challenge of creating visually appealing, responsive, and interactive websites, I made the decision to pivot my career path to become a Front-End
            Developer. In July 2023 until November 2023, I commenced the Front End Engineer Bootcamp at Binar Academy, where I immersed myself in the fundamentals of front-end development. The bootcamp covered a spectrum of topics,
            including HTML, CSS, and Javascript, with a specific emphasis on crafting responsive web designs. My journey also encompassed gaining proficiency in website development using React JS and various accompanying libraries. A
            notable achievement during the bootcamp was the successful completion of a project, wherein I designed and developed a user-friendly car rental website named Binar Car Rental, alongside a robust Content Management System.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Header;
