import developer from "../assets/icons/codeandcraft-user-avatar.webp";
import graphics from "../assets/icons/codeandcraft-graphic-design.webp";
import uiux from "../assets/icons/codeandcraft-ui.webp";
import advertising from "../assets/icons/codeandcraft-online-advertising.webp";
import social from "../assets/icons/codeandcraft-social-media-marketing.webp";

import projectMain from "../assets/projects/codeandcraft.webp";
import projectFinance from "../assets/projects/codeandcraft-finance.webp";
import projectClientPortfolio from "../assets/projects/codeandcraft-clientportfolio.webp";

export const services = [
  {
    icon: developer,
    title: "Web Development",
    description: "Modern, responsive websites and web applications tailored to your business needs."
  },
  {
    icon: uiux,
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces for a seamless digital experience."
  },
  {
    icon: graphics,
    title: "Graphic Design",
    description: "Creative graphics, branding, and visual content to elevate your brand identity."
  },
  {
    icon: advertising,
    title: "Ad Campaigns",
    description: "Targeted ad campaigns to boost your reach and drive conversions."
  },
  {
    icon: social,
    title: "Social Media Marketing",
    description: "Strategic social media management to grow your online presence."
  }
];

export const projectImages = {
  codeandcraft: projectMain,
  SdFinance: projectFinance,
  clientPortfolio: projectClientPortfolio
};