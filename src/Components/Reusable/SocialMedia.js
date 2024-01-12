import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  const iconSize = 45;

  return (
    <div className="flex sm:justify-start gap-7">
      <a className="text-white transition duration-300 transform hover:scale-110" href="https://id.linkedin.com/in/fandhyokka" target="_blank" rel="noreferrer">
        <FaLinkedin size={iconSize} />
      </a>
      <a className="text-white transition duration-300 transform hover:scale-110" href="https://twitter.com/fandhyokkapret/" target="_blank" rel="noreferrer">
        <FaSquareTwitter size={iconSize} />
      </a>
      <a className="text-white transition duration-300 transform hover:scale-110" href="https://github.com/fandhyokka" target="_blank" rel="noreferrer">
        <FaGithubSquare size={iconSize} />
      </a>
      <a className="text-white transition duration-300 transform hover:scale-110" href="https://www.instagram.com/fandhyokkapret/" target="_blank" rel="noreferrer">
        <AiFillInstagram size={iconSize} />
      </a>
    </div>
  );
};

export default SocialMedia;
