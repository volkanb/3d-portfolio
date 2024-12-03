import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "App Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Full Stack Web Developer",
      company_name: "Self Employed",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jul 2024 - Present",
      points: [
        "Built dynamic, responsive web applications from concept to deployment.",
        "Utilized technologies like React, Node.js, and SQL.",
        "Created RESTful APIs.",
        "Managed and maintained efficient communication with project stakeholders.",
      ],
    },
    {
      title: "Intermediate Full Stack Web Developer",
      company_name: "Rentsync",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Jul 2024",
      points: [
        "Created responsive React components (using Redux library to manage states) utilizing Material UI and dynamic data fetching (similar to GraphQL) to solve design problems and visual bugs.",
        "Created efficient and secure back-end (Node) endpoints which used TypeORM to connect and query the database (MySQL).",
        "Participated in running monthly billing runs utilizing clusters on Google Cloud Platform to compute and generate invoices for clients.",
        "Participated in creating solutions towards alternative database and computational designs for the transition of the core accounting software (from Freshbooks API to Xero API).",
        "Actively attended all agile ceremonies and assisted onboarding new team members.",
      ],
    },
    {
      title: "Jr. Full Stack Web Developer",
      company_name: "Leni",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Dec 2022",
      points: [
        "Created responsive React components and utilized modern UI libraries/frameworks (Rsuite, Tailwind, Styled) to solve design problems and visual bugs.",
        "Created efficient and secure back-end (Node) endpoints which used pure SQL/TypeORM to connect and query the database (PostgreSQL).",
        "Incorporated observability and monitoring tools/features (New Relic, Rollbar, AWS Cloudwatch) to improve overall health of the application.",
        "Navigated ever changing needs of the stakeholders in a fast paced startup setting.",
        "Actively attended all agile ceremonies and assisted onboarding new team members.",
      ],
    },
    {
      title: "Jr. Full Stack Web Developer",
      company_name: "Lighthouse Labs",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Apr 2021 - Oct 2021",
      points: [
        "Worked in a focused team to maintain/enhance the student portal (Ruby on Rails, Postgresql).",
        "Participated in design, planning and implementation of the student report card generator project.",
        "Cleared out tickets created by user support and resolved live/legacy bugs.",
        "Actively attended all agile ceremonies.",
      ],
    },
    {
      title: "Game Developer",
      company_name: "Prodigy Game",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Feb 2019 - Oct 2020",
      points: [
        "Designed and implemented gameplay features on a PhaserJS based proprietary game engine.",
        "Created dynamic and static game UI elements using JSON and an internal editing tool.",
        "Participated in design, planning, implementation, testing and integration of a six month long mini game project which reached a million active users in a month after its release.",
        "Cleared out tickets created by user support and resolved live/legacy bugs.",
        "Actively attended all agile ceremonies.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };