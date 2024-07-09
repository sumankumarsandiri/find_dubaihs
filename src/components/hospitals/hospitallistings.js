import Medeor from "../../assets/images/medor hspt.jpg";
import neuro from "../../assets/images/neurohsp.jpg";
import cardiology from "../../assets/images/cardiology.png";
import dental from "../../assets/images/dental.jpeg";
import { Link } from "react-router-dom";
import Hspdisplygenral from "./hspdisplygenral";

export const hospitallistings = [
  {
    hospitalName: " Medeor 24x7 Hospital, Dubai",
    imageSrc: Medeor,
    path: "/hspgenral",
    Lilly: <Hspdisplygenral />,
    location:
      " Consulates Area, Sheikh Khalifa Bin Zayed Road, Bur Dubai - Dubai - United Arab Emirates",
  },
  {
    hospitalName: " Neuro Hospital, Dubai",
    imageSrc: neuro,
    location:
      " Consulates Area, Sheikh Khalifa Bin Zayed Road, Bur Dubai - Dubai - United Arab Emirates",
  },
  {
    hospitalName: " Cardiology Hospital, Dubai",
    imageSrc: cardiology,
    location:
      " Consulates Area, Sheikh Khalifa Bin Zayed Road, Bur Dubai - Dubai - United Arab Emirates",
  },
  {
    hospitalName: " dental Hospital, Dubai",
    imageSrc: dental,
    location:
      " Consulates Area, Sheikh Khalifa Bin Zayed Road, Bur Dubai - Dubai - United Arab Emirates",
  },
];
