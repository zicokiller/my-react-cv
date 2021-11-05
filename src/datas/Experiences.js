import React from "react";
import {
  SiSvelte,
  SiElixir,
  SiHeroku,
  SiVueDotJs,
  SiNodeDotJs,
} from "react-icons/si";
import {
  DiCode,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMongodb,
  DiRedis,
} from "react-icons/di";

export const dataExperiences = [
  {
    id: 1,
    title:
      "LARM Tech Project (Associé) - Solutions back-end et Front-end pour les entreprises",
    date: "04/2021 à ce jour",
    location: "Montpellier",
    text: `Développeur Front-end`,
    missions: [
      {
        id: 1,
        title:
          "Création et intégration d'un site e-commerce, CMS",
      },
      {
        id: 2,
        title: "Participation à la création de puzzle, framework no-code destiné aux start-up",
      },
      {
        id: 3,
        title: "Stack utilisée :",
      },
    ],
    chips: [
      {
        id: 1,
        name: "React",
        icon: <DiReact />,
      },
      {
        id: 2,
        name: "Svelte",
        icon: <SiSvelte />,
      },
      {
        id: 3,
        name: "Mongodb",
        icon: <DiMongodb />,
      },
      {
        id: 4,
        name: "Elixir",
        icon: <SiElixir />,
      },
    ],
  },
  {
    id: 2,
    title: "CITY OFFICE - Market place - Location horaire d'espaces de travail",
    date: "08/2020 - 03/2021",
    location: "Montpellier incubateur Epitech",
    text: `Développeur et intégrateur Front-end`,
    missions: [
      {
        id: 1,
        title: "Intégration de l'ensemble des interfaces graphiques, respect du cahier des charges  ",
      },
      {
        id: 2,
        title: "Réalisation de tous les call vers l'API",
      },
      {
        id: 3,
        title: "Stack utilisée :",
      },
    ],
    chips: [
      {
        id: 1,
        name: "Vue",
        icon: <SiVueDotJs />,
      },
      {
        id: 2,
        name: "NodeJS",
        icon: <SiNodeDotJs />,
      },
      {
        id: 3,
        name: "Redis",
        icon: <DiRedis />,
      },
      {
        id: 4,
        name: "Heroku",
        icon: <SiHeroku />,
      },
    ],
  },
  {
    id: 3,
    title: "SPORTY DEAL - Marketplace d'échanges de matériel de sport",
    date: "02/2021 - 04/2021",
    location: "Montpellier",
    text: `Développement Front-end (mission freelance)`,
    missions: [
      {
        id: 1,
        title:
          "Réalisation de 5 interfaces graphiques pour la mise en place d'un systeme de paiement",
      },
      {
        id: 2,
        title: "Intégration des interfaces dans la marketplace"
      },
      {
        id: 3,
        title: "Stack utilisée :",
      },
    ],
    chips: [
      {
        id: 1,
        name: "CSS",
        icon: <DiCss3 />,
      },
      {
        id: 2,
        name: "Blade",
        icon: <DiCode />,
      },
      {
        id: 3,
        name: "HTML",
        icon: <DiHtml5 />,
      },
    ],
  },
  {
    id: 4,
    title: "SAFTI IMMOBILIER",
    date: "10/2018 - 12/2019",
    location: "Montpellier",
    text: `Négociateur immobilier indépendant`,
    missions: [
      {
        id: 1,
        title: "Création et développement d'un secteur de prospection",
      },
      {
        id: 2,
        title:
          "Rentrée de mandats, opérations commerciales, rédaction des annonces, visites de biens,",
      },
      {
        id: 3,
        title:
          "Suivi administratif des compromis de vente jusqu'à l'acte authentique",
      },
    ],
    chips: [],
  },

  {
    id: 5,
    title: "TECHNIPLAN - Reprographie, impression numérique et Offset",
    date: "01/2016 - 04/2018",
    location: "Jouy-en-josas",
    text: `Responsable de secteur`,
    missions: [
      {
        id: 1,
        title: "Vente de gestion documentaire et solutions de communication",
      },
      {
        id: 2,
        title: "Gestion et développement d'un portefeuille grands comptes",
      },
    ],
    chips: [],
  },
  {
    id: 6,
    title: "GROUPE BOURSE DE L'IMMOBILIER",
    date: "01/2012 - 04/2016",
    location: "Mantes-la-ville",
    text: `Responsable d'agence`,
    missions: [
      {
        id: 1,
        title: "Encadrement et animation d'une équipe de 3 collaborateurs",
      },
      {
        id: 2,
        title: "Gestion et suivi d'un portefeuille clients",
      },
      {
        id: 3,
        title: "Assurer le reporting à la direction régionale",
      },
    ],
    chips: [],
  },
  {
    id: 7,
    title: "GROUPE ORPI",
    date: "01/2009 - 04/2011",
    location: "Mézières-sur-seine",
    text: `Négociateur immobilier`,
    missions: [
      {
        id: 1,
        title: "Prospection terrain et prise de mandats",
      },
      {
        id: 2,
        title: "Gestion de la négociation avec les différents acteurs",
      },
      {
        id: 3,
        title:
          "Rédaction des compromis de vente, suivi des dossiers jusqu'à l'acte définitif",
      },
    ],
    chips: [],
  },
  {
    id: 8,
    title: "GROUPE IMMOBILIER LA RESIDENCE",
    date: "01/2004 - 04/2011",
    location: "Verneuil-sur-seine",
    text: `Négociateur immobilier`,
    missions: [
      {
        id: 1,
        title: "Prospection terrain et téléphonique",
      },
      {
        id: 2,
        title: "Gestion de la négociation avec les différents acteurs",
      },
      {
        id: 3,
        title:
          "Assurer l'interface et le suivi dossier entre le notaire et l'acquéreur",
      },
    ],
    chips: [],
  },
  {
    id: 9,
    title: "GROUPE SPIR COMMUNICATION - Régicom",
    date: "01/2001 - 04/2003",
    location: "Rueil-Malmaison",
    text: `Manager centre de profits`,
    missions: [
      {
        id: 1,
        title: "Animation d'une équipe de 5 collaborateurs",
      },
      {
        id: 2,
        title: "Bouclage et montage du journal",
      },
      {
        id: 3,
        title: "Gestion et développement des clients grands comptes",
      },
    ],
    chips: [],
  },
  {
    id: 10,
    title: "GROUPE SPIR COMMUNICATION - Régicom",
    date: "01/1997 - 04/2001",
    location: "Mantes-la-jolie",
    text: `Chef de publicité`,
    missions: [
      {
        id: 1,
        title: "Développement d'un secteur d'annonceurs locaux",
      },
      {
        id: 2,
        title: "Suivi commercial et administratif",
      },
      {
        id: 3,
        title: "Gestion des contrats annuels et des opérations one shot",
      },
    ],
    chips: [],
  },
  {
    id: 11,
    title: "BUEIL PUBLICITE - Mobilier urbain ",
    date: "01/1995 - 04/1997",
    location: "Bueil",
    text: `Attaché commercial`,
    missions: [
      {
        id: 1,
        title:
          "Prospection et développement clients grands comptes et institutionnels",
      },
      {
        id: 2,
        title:
          "Présentation des dossiers appel d'offre auprès des collectivités locales",
      },
      {
        id: 3,
        title:
          "Suivi commercial et opérationnel des opérations de communication",
      },
    ],
    chips: [],
  },
];
export default dataExperiences;
