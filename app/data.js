// import images
import Logo from "../public/images/header/marbello_logo.png";
// import GalleryImg1 from "../public/images/gallery/1.png";
// import GalleryImg2 from "../public/images/gallery/2.png";
// import GalleryImg3 from "../public/images/gallery/3.png";
// import GalleryImg4 from "../public/images/gallery/4.png";
// import GalleryImg5 from "../public/images/gallery/5.png";
// import GalleryImg6 from "../public/images/gallery/6.png";
// import GalleryImg7 from "../public/images/gallery/7.png";
// import GalleryImg8 from "../public/images/gallery/8.png";
// import QuoteImg from "../public/images/testimonial/quote.svg";
// import icons
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: "/", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#gallery", name: "Project Showcase" },
    // { href: "#testimonials", name: "Testimonials" },
    // { href: "/", name: "Articles" },
    { href: "#contact", name: "Contact" },
  ],
};

export const socialData = [
  { href: "/", icon: <GrFacebookOption /> },
  { href: "/", icon: <IoLogoInstagram /> },
  // { href: "/", icon: <IoLogoPinterest /> },
  { href: "/", icon: <IoLogoTwitter /> },
  { href: "/", icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: "Welcome to Marbello.",
  subtitle:
    "Tiles have the power to transform any space. At Marbello, we bring timeless design and lasting quality to your home and projects.",
  btnText: "discover more",
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "Our Story:",
  subtitle1:
    "At Marbello, tiles are more than just surfaces; they are the foundation of timeless spaces. From classic elegance to modern sophistication, we curate a wide range of tiles that bring character and beauty to every project.",
  subtitle2:
    "We go beyond simple tile sales. From selection and design advice, to supply and professional installation, Marbello covers every aspect of your tile journey. Whether it’s a home renovation, a commercial project, or a bespoke design, our team is dedicated to delivering quality, style, and precision at every step.",
  btnText: "Learn more",
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: "Project Showcase:",
  btnText: "View all",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: "/images/gallery/sample1.png",
      original: "/images/gallery/sample1.png",
      width: 465,
      height: 412,
    },
    {
      src: "/images/gallery/sample2.png",
      original: "/images/gallery/sample2.png",
      width: 465,
      height: 540,
    },
    {
      src: "/images/gallery/sample3.png",
      original: "/images/gallery/sample3.png",
      width: 465,
      height: 412,
    },
    {
      src: "/images/gallery/sample4.png",
      original: "/images/gallery/sample4.png",
      width: 465,
      height: 540,
    },
    {
      src: "/images/gallery/sample5.png",
      original: "/images/gallery/sample5.png",
      width: 465,
      height: 540,
    },
    {
      src: "/images/gallery/sample6.png",
      original: "/images/gallery/sample6.png",
      width: 464,
      height: 412,
    },
    {
      src: "/images/gallery/sample7.png",
      original: "/images/gallery/sample7.png",
      width: 465,
      height: 540,
    },
    {
      src: "/images/gallery/sample8.png",
      original: "/images/gallery/sample8.png",
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title: "“Great tiles don’t just cover a surface; they transform a space.”",
  btnText: "Watch it now",
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: "/images/testimonial/quote.svg",
    message:
      "From the moment I walked into Marbello, I felt confident about my renovation. The team helped me choose the perfect tiles and guided me with design ideas. The installation was seamless, and the final result completely transformed my home.",
    name: "Jack Geoffrey",
    occupation: "Homeowner",
  },
  {
    quoteImg: "/images/testimonial/quote.svg",
    message:
      "Marbello made the whole process easy; from selecting high-quality tiles to professional installation. Their attention to detail and craftsmanship is outstanding. I couldn’t be happier with how our new space turned out.",
    name: "Douglas Hane",
    occupation: "Interior Designer",
  },
  {
    quoteImg: "/images/testimonial/quote.svg",
    message:
      "As a builder, I rely on suppliers who are reliable and deliver quality every time. Marbello not only provided premium tiles but also supported the project with professional installation services. My clients were impressed with the finish.",
    name: "Michael Thompson",
    occupation: "Builder",
  },
  {
    quoteImg: "/images/testimonial/quote.svg",
    message:
      "We renovated our café with Marbello tiles, and the difference is incredible. The team understood the look we wanted and executed it perfectly. Customers often compliment the design; it’s truly elevated our business.",
    name: "Sophie Lee",
    occupation: "Café Owner",
  },
];

export const contactData = {
  title: "Get in Touch with Marbello:",
  info: [
    {
      title: "Kotara Showroom",
      subtitle:
        "Visit our Kotara showroom to explore our wide range of premium tiles and speak with our team about your next project.",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "148 Charlestown Rd, Kotara NSW",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "02 4927 5248",
      },
      email: {
        icon: <FaEnvelope />,
        address: "sales@marbello.com.au",
      },
      link: "Get Directions",
      googleMapUrl:
        "https://www.google.com/maps/place/148+Charlestown+Rd,+Kotara+NSW",
    },
    {
      title: "Design & Installation",
      subtitle:
        "From concept to completion, Marbello provides end-to-end tile solutions. Our expert team works with you on design, supply, and professional installation to bring your vision to life.",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "Servicing Newcastle, Maitland & the Hunter Region",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "02 4927 5248",
      },
      email: {
        icon: <FaEnvelope />,
        address: "estimator@marbello.com.au",
      },
      link: "Get Directions",
      googleMapUrl:
        "https://www.google.com/maps/place/148+Charlestown+Rd,+Kotara+NSW",
    },
  ],
  form: {
    name: "Write your name here",
    email: "Write your email address",
    message: "Write your messages here",
    btnText: "Send it",
  },
};

export const footerData = {
  about: {
    title: "Marbello",
    subtitle:
      "Premium tiles for every space. From selection to installation, we bring style, quality, and precision to your home or project.",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "148 Charlestown Rd, Kotara NSW, Australia",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "02 4927 5248",
    },
    email: {
      icon: <FaEnvelope />,
      saleAddress: "sales@marbello.com.au",
      quoteAddress: "estimator@marbello.com.au",
    },
  },
  // links: {
  //   title: "Useful links",
  //   items: [
  //     { href: "/", name: "About me" },
  //     { href: "/", name: "My gallery" },
  //     { href: "/", name: "My services" },
  //     { href: "/", name: "Contact me" },
  //   ],
  // },
  program: {
    title: "Working hours",
    items: [
      { name: "Mon – Fri / 9:00am – 5:00pm" },
      { name: "Saturday / 9:00am – 4:00pm" },
      { name: "Sunday / Closed" },
      { name: "Public Holidays / Closed" },
    ],
  },
  newsletter: {
    title: "Experience Marbello Beyond the Surface",
    subtitle:
      "At Marbello, we believe that true elegance extends beyond our tiles; it lives in the stories they create. Through our curated social media channels, we share exclusive previews of new collections, design inspirations, and installation showcases from around the world. Join us in a space where craftsmanship meets innovation, and discover how Marbello continues to redefine timeless design.",
    form: {
      placeholder: "Your email address",
      icon: <FiSend />,
    },
  },
};
