import { FaHotel } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import Star from "./star";
import Like from "./Like";
const dubaiListings = [
  {
    name: "Evening dester safari",
    description:
      "Super city travels .",
    rating: <Star />,
    like: <Like />,
    imageSrc:
      "https://img.veenaworld.com/wp-content/uploads/2022/02/Dubai.jpg",

    categoryicon: <FaCar />,
    categoryName: "Travelling",
    price: 456,
    total: 1200,
    location: "dubai",
    mobileNo: 8568554855,
  },
  {
    name: "Pramount Hotel",
    description:
      "Super Clean & Luxury Staying .",
    rating: <Star />,
    like: <Like />,
    imageSrc:
      "https://www.kayak.co.in/rimg/himg/d9/aa/06/leonardo-146381-150265071-051189.jpg?width=968&height=607&crop=true",

    categoryicon: <FaHotel />,
    categoryName: "Hotel",
    price: 456,
    total: 1200,
    location: "dubai",
    mobileNo: 8568554855,
  },
  {
    name: "Maison de la Page",
    description:
      "Tasty Food & Drinks .",
    rating: <Star />,
    like: <Like />,
    imageSrc:
      "https://lepetitchef.com/blog/wp-content/uploads/2023/11/Thiptara-Dubai-1024x635.jpg",

    categoryicon: <IoIosRestaurant />,
    categoryName: "Restaurant",
    price: 456,
    total: 1200,
    location: "dubai",
    mobileNo: 8568554855,
  },
  {
    name: "WaterBomb Festival",
    description:
      "let's Get Party .",
    rating: <Star />,
    like: <Like />,
    imageSrc:
      "https://www.holidify.com/images/cmsuploads/compressed/7617278180_de0b3076d9_o_20180830123556.jpg",

    categoryicon: <FaMartiniGlassCitrus />,
    categoryName: "Partys",
    price: 456,
    total: 1200,
    location: "dubai",
    mobileNo: 8568554855,
  },
  {
    name: "Dubai central mall",
    description:
      "OutDoor Luxury For You .",
    rating: <Star />,
    like: <Like />,
    imageSrc:
      "https://www.shutterstock.com/image-photo/dubai-uae-march-6th-2019-260nw-1525914125.jpg",

    categoryicon: <FaCartShopping />,
    categoryName: "Hotel",
    price: 456,
    total: 1200,
    location: "dubai",
    mobileNo: 8568554855,
  },
  {
    name: "Mediclinic City Hospital",
    description:
      "Multi-disciplinary hosptial .",
    rating: <Star />,
    like: <Like />,
    imageSrc:
      "https://aecom.com/wp-content/uploads/2015/10/City-Hospital-5-smaller-e1444250182574.jpg",

    categoryicon: <FaHospital />,
    categoryName: "Healthcare",
    price: 456,
    total: 1200,
    location: "dubai",
    mobileNo: 8568554855,
  },

  {
    name: "Burj Khalifa",
    description:
      "The tallest building in the world, offering stunning views of the city from its observation decks.",
    rating: <Star />,
    like: <Like />,
    imageSrc:
      "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",

    categoryicon: <FaHotel />,
    categoryName: "Hotel",
    price: 456,
    total: 1200,
    location: "dubai",
    mobileNo: 8466688899,
  },
];

export default dubaiListings;