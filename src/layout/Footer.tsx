import {FC} from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer: FC = () => {
  return (
    <footer className="flex w-full flex-col md:flex-row justify-center py-[40px] gap-4 md:justify-between flex-wrap  min-h-[200px]   px-sides bg-black items-center ">
      <div className="flex items-center md:w-auto  flex-wrap   justify-center text-white gap-2">
        <Link to="/" className="font-cinzel ">
          {" "}
          HOME
        </Link>
        <Link to="/projects" className="font-cinzel ">
          {" "}
          PROJECT
        </Link>
        <Link to="/about" className="font-cinzel ">
          {" "}
          ABOUT
        </Link>
        <Link to="/contact" className="font-cinzel ">
          {" "}
          CONTACT
        </Link>
      </div>
      <div className="flex flex-col align-center md:w-auto    gap-4">
        
        <a className="button text-center" href="mailto:adekunlesammy10464@gmail.com">
          Email Me
        </a>

        <a className="button text-center" href="tel:+2349059077159">
          +234 905 907 7159
        </a>
      </div>
      <ul className="wrapper pt-0 md:w-auto ">
        <li className="icon facebook">
          <span className="tooltip">Instagram</span>
          <a
            href="https://www.instagram.com/bhad_man_000?igsh=MW5peG43eXp3NWdxaA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <a
            href="https://x.com/BhadmanSammy?t=T_dLT9_K7GOIIx5SIJ9UOA&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>{" "}
        </li>
        <li className="icon instagram">
          <span className="tooltip">Github</span>
          <a
            href="https://github.com/Sammy2805"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
