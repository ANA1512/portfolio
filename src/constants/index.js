
//card project
import oriCard from '../assets/orinoco.png'
import Kasa from '../assets/kasa.png'
import agence from '../assets/agence.png'
import piquante from '../assets/piquante.png'
import product from  '../assets/product.png'
import fastcar from '../assets/fastcar.png'

// video project
import orinoco from '../assets/video/orinoco.mp4'
import hottakes from '../assets/video/hottakes.mp4'
import agenceChouette from '../assets/video/agence-chouette.mp4'
import kasaproj from '../assets/video/react.mp4'
import fastcarproj from '../assets/video/fastcarproj.mp4'
import foliodesign from '../assets/video/foliodesign.mp4'

// skills card
import frontend from '../assets/frontend.png'
import backend from '../assets/Backend.png'
import productDesign from '../assets/prod.png'

export const navLinks = [
    {
      id: "about",
      title: "About Me",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  

  export const learning= [

    {
      id: 1,
      image: frontend,

    },
    
    { 
      id:2,
      image: backend,

    },

    { 
      id:3,
      image: productDesign,

    },


  ]


  export const projectInfo= [
    {
      id: 1,
      title:"Orinoco",
      image: oriCard,
      description: [
        "The goal of the project was to build a dynamic e-commerce site with javascript."
      ],
      video: orinoco,
      source_code_link: "https://github.com/ANA1512/portfolio/tree/main/src"
    },
    {
      id:2,
      title: "la chouette agence",
      image:agence,
      description: [
        " Help your customer appear at the top of Google search results with SEO and accessibility best practices. Debug some anomalies in the code.Build an SEO strategy integrated with the marketing strategy. "
      ],
      video: agenceChouette,
      source_code_link:"https://github.com/ANA1512/seo-after"
    },
    { 
      id:3,
      title: "Hot takes",
      image: piquante,
      description: [
        "Create the back-end of a sauce site so that it integrates properly with the front-end. You use Node.js, Express and MongoDB and secure the API"
      ],
      video: hottakes,
      source_code_link:"https://github.com/ANA1512/projet_06_API"

    },
    {
     id:4,
     title: "kasa",
     image: Kasa,
     description: [
      "Implement the front end of Kasa, a housing rental application. Set up components with React and app routes with React Router."
    ],
     video: kasaproj,
     source_code_link:"https://github.com/ANA1512/kasa_07"
    },
    {
    id:5,
    title:"Fastcar",
    image: fastcar,
    description: [
      "Create a car rental site using UML for modeling, SQL database and MVC architecture"
    ],
    video: fastcarproj,
    source_code_link:"https://github.com/ikhlassH/Projet-formation-ERP-PGI"
    },

    {
    id:6,
    title:"Product Design",
    image: product,
    description: [
      "The portfolio shows real life project three projects AIRBNB,DOCTOLIB,FRIDAY. Product design consists of improving the user experience by identifying user needs by reconciling the interests of the company."
    ],
    video: foliodesign,
    source_code_link:"https://anaisphilocles.online/"
    },
  ];





