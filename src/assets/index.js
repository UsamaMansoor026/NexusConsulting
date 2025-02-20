/* Services Icons */
import InsightsIcon from "@mui/icons-material/Insights";
import CodeIcon from "@mui/icons-material/Code";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";

/* Case Study Images */
import case1 from "../assets/services1.webp";
import case2 from "../assets/services2.webp";
import case3 from "../assets/services3.webp";
import case4 from "../assets/services4.webp";

/* Team Members Profile Images */
import ethan from "../assets/team/member1.webp";
import liam from "../assets/team/member2.webp";
import noah from "../assets/team/member3.webp";

/* CLients Profile Avatars */
import male1 from "../assets/testimonials/male1.jpg";
import male2 from "../assets/testimonials/male2.jpg";
import male3 from "../assets/testimonials/male3.jpg";
import female1 from "../assets/testimonials/female1.jpg";
import female2 from "../assets/testimonials/female2.jpg";

/* Brands Images */
import brand1 from "../assets/brands/brand1.webp";
import brand2 from "../assets/brands/brand2.webp";
import brand3 from "../assets/brands/brand3.webp";
import brand4 from "../assets/brands/brand4.webp";
import brand5 from "../assets/brands/brand5.webp";

/* Services Data */
export const services = [
  {
    id: 1,
    title: "Strategy & Consultation",
    desc: "Provide strategic insights and planning to align your website with business objectives and target market trends.",
    icon: InsightsIcon,
  },
  {
    id: 2,
    title: "Custom Web Development",
    desc: "Build tailor-made web applications and websites using modern technologies, ensuring scalability, performance, and security.",
    icon: CodeIcon,
  },
  {
    id: 3,
    title: "E-commerce Solutions & CMS",
    desc: "Implement and customize robust CMS and e-commerce platforms to streamline content management and boost online sales.",
    icon: StorefrontIcon,
  },
  {
    id: 4,
    title: "Responsive Web Design",
    desc: "Craft visually appealing, user-friendly, and mobile-responsive designs that enhance engagement and drive conversions.",
    icon: DesignServicesIcon,
  },
  {
    id: 5,
    title: "Optimization & SEO",
    desc: "Enhance website speed, efficiency, and search engine visibility to drive more organic traffic and improve user experience.",
    icon: SpeedIcon,
  },
  {
    id: 6,
    title: "Web Security & Compliance",
    desc: "Implement robust security measures and ensure your site adheres to industry standards and data protection regulations.",
    icon: SecurityIcon,
  },
  {
    id: 7,
    title: "Maintenance & Support",
    desc: "Offer continuous support, regular updates, and proactive maintenance to keep your web presence current and fully functional.",
    icon: BuildIcon,
  },
  {
    id: 8,
    title: "Integration & Cloud Services",
    desc: "Seamlessly integrate third-party APIs and leverage cloud platforms to enhance functionality and ensure scalability.",
    icon: CloudIcon,
  },
];

/* Case Study Data */
export const caseStudy = [
  {
    id: 1,
    title: "Strategy & Consultation",
    desc: "Redefined a startup’s digital strategy, boosting conversions by 60%.",
    image: case1,
  },
  {
    id: 2,
    title: "Responsive Web Design",
    desc: "Transformed an outdated site into a mobile-first design, increasing engagement by 45%.",
    image: case2,
  },
  {
    id: 3,
    title: "Custom Web Development",
    desc: "Built a custom web app for a logistics firm, cutting delays by 50%.",
    image: case3,
  },
  {
    id: 4,
    title: "Optimization & SEO",
    desc: "Optimized performance and SEO, growing organic traffic by 150%.",
    image: case4,
  },
];

/* Team Members Data */
export const teamMembers = [
  {
    id: 1,
    name: "Ethan Walker",
    role: "CTO",
    image: ethan,
  },
  {
    id: 2,
    name: "Liam Turner",
    role: "Web Developer",
    image: liam,
  },
  {
    id: 3,
    name: "Noah Johnson",
    role: "Web Designer",
    image: noah,
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "John Anderson",
    image: male1,
    review:
      "Their strategic vision and technical expertise transformed our digital presence, driving our growth beyond expectations.",
  },
  {
    id: 2,
    name: "Emily Davis",
    image: female2,
    review:
      "The consulting services not only elevated our brand but also unlocked new creative avenues, a truly transformative experience.",
  },
  {
    id: 3,
    name: "Michael Bennett",
    image: male2,
    review:
      "A results-driven team that redefined our operational workflows with innovative solutions – a true partner in our success.",
  },
  {
    id: 4,
    name: "Robert Carter",
    image: male3,
    review:
      "Their bespoke approach and deep industry insights turned our challenges into opportunities, fueling sustainable growth.",
  },
  {
    id: 5,
    name: "Sophia Evans",
    image: female1,
    review:
      "With an unmatched commitment to innovation, their guidance streamlined our product strategy and positioned us ahead of the curve.",
  },
];

export const brands = [brand1, brand2, brand3, brand4, brand5];
