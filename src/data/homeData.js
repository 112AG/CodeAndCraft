import developer from "../assets/icons/codeandcraft-user-avatar.webp";
import graphics from "../assets/icons/codeandcraft-graphic-design.webp";
import uiux from "../assets/icons/codeandcraft-ui.webp";
import advertising from "../assets/icons/codeandcraft-online-advertising.webp";
import social from "../assets/icons/codeandcraft-social-media-marketing.webp";

// Previous Clients Project Samples
import projectMain from "../assets/projects/codeandcraft.webp";
import projectFinance from "../assets/projects/codeandcraft-finance.webp";
import projectClientPortfolio from "../assets/projects/codeandcraft-clientportfolio.webp";

// Blog images
import blogTrends from "../assets/Blogs/codeandcraft-ten-web-design-trends.webp";
import blogBranding from "../assets/Blogs/codeandcraft-why-branding.webp";
import blogRank from "../assets/Blogs/codeandcraft-how-to-rank.webp"

export const blogPosts = [
  {
    image: blogTrends,
    heading: "10 Web Design Trends for 2025",
    description: "Discover the latest web design trends that will shape the digital landscape in 2025. Stay ahead with modern UI/UX, animation, and more.",
    slug: "web-design-trends-2025"
  },
  {
    image: blogBranding,
    heading: "Why Branding Matters for Your Business",
    description: "Learn why strong branding is essential for business growth and how to build a memorable brand online.",
    slug: "why-branding-matters"
  },
  {
    image: blogRank,
    heading: "How to Rank your Website on Google in 2025 ?",
    description: "A step-by-step guide to SEO strategies, content optimization, and technical improvements to help your website achieve top rankings on Google in 2025.",
    slug: "how-to-rank-on-google-2025"
  }
];

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