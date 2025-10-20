import { FaPhoneSquareAlt, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "nelsonvaz511.com",
    link: "mailto:nelsonvaz511.com",
    icon: MdEmail,
  },
  {
    id: 2,
    type: "Phone",
    value: "+91 8217639837",
    link: "tel:+918217639837",
    icon: FaPhoneSquareAlt,
  },
  {
    id: 3,
    type: "GitHub",
    value: "nelson",
    link: "https://github.com/Nelson-vaz",
    icon: FaGithub,
  },
  {
    id: 4,
    type: "Instagram",
    value: "Nelson Vaz",
    link: "https://www.instagram.com/nelson.vaz.140/",
    icon: FaInstagram,
  },
];

export default contactDetails;
