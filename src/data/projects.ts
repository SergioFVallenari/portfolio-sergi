import type { TechKey } from "./tech";

export type ProjectKind =
	| "profesional"
	| "freelance"
	| "universitario"
	| "personal";

export interface Project {
	kind: ProjectKind;
	title: string;
	description: string;
	image: string;
	github?: string;
	demo?: string;
	technologies: TechKey[];
	draft?: boolean;
	other?: string;
}

export const PROJECTS: Project[] = [
	{
		kind: "freelance",
		title: "Aloja - App de gestión de alojamientos",
		description:
			"Aplicación web para la gestión de alojamientos, permitiendo a los usuarios crear, editar y eliminar alojamientos, así como gestionar reservas y disponibilidad. La aplicación también incluye un sistema de autenticación y autorización para garantizar que solo los usuarios autorizados puedan acceder a ciertas funciones.",
		image: "/ImagesProjects/hoteleria.webp",
		github: "https://github.com/SergioFVallenari/HotelManagement",
		demo: "https://d5foovh2z74go.cloudfront.net",
		technologies: [
			"React",
			"Tailwind",
			"NodeJs",
			"Typescript",
			"PostgreSQL",
		],
	},
	{
		kind: "freelance",
		title: "Don Faustino - Software Gestion",
		description:
			"Software de gestion y administracion de restaurantes, proximamente con app para la realizacion de comandas y pedidos.",
		image: "/ImagesProjects/donfaustino.png",
		demo: "https://www.linkedin.com/in/sergiovallenari",
		technologies: ["React", "NodeJs", "MySql", "Capacitor", "Typescript"],
	},
	{
		kind: "freelance",
		title: "Drewili - eCommerce",
		description:
			"Este proyecto MVP es un sistema de comercio electrónico (eCommerce) creado para una empresa de Perú, que permite a los usuarios explorar, buscar y comprar productos de diferentes categorías. Proporciona funcionalidades clave como carrito de compras, gestión de usuarios, filtrado de productos y más.",
		image: "/ImagesProjects/drewili.webp",
		github: "https://github.com/drewilipf/drewili-pf",
		demo: "https://drewilifront.vercel.app",
		technologies: ["React", "Tailwind", "NodeJs", "Javascript"],
	},

	{
		kind: "profesional",
		title: "Flexit",
		description:
			`Desarrollé soluciones web y mobile para optimizar la gestión logística de Flexit, participando en todo el proceso, desde la base de datos hasta el backend y frontend.

Construí desde cero una plataforma de integraciones que centralizó la conexión de Flexit con múltiples plataformas de e-commerce, permitiendo sincronizar productos, órdenes y stock mediante APIs REST.

También desarrollé aplicaciones mobile y web para gestionar el ingreso de transportistas al depósito, permitiendo visualizar en tiempo real qué espacios de estacionamiento estaban disponibles, qué transportistas se encontraban esperando para ingresar y cuáles estaban realizando la carga de mercadería. La información se actualizaba en tiempo real mediante Firebase.`,
		image: "/ImagesProjects/flexit.png",
		technologies: ["Php", "MySql", "React", "NodeJs", "Typescript", "Firebase", "GoogleCloud", "Capacitor", "AWS"],
		other: "Actualmente, Flexit es una empresa líder en logística y transporte, y sus soluciones han sido implementadas en varias ciudades de Argentina",
	},
	{
		kind: "profesional",
		title: "MiScore",
		description:
			`Aplicación para dispositivos móviles que te permite consultar tu situación crediticia y tu historial financiero directamente desde la base de datos del Banco Central de la República Argentina (BCRA) utilizando tu número de CUIT.
• Funciones: Revisar si estás en situación 1 a 5, visualizar historial crediticio y recibir alertas de cambios en tu perfil.
• Disponibilidad: Gratis en Google Play (Mi Score).
`,
		image: "/ImagesProjects/miscore.png",
		technologies: ["React", "NodeJs", "MySql", "Typescript", "Firebase", "GoogleCloud", "Capacitor", "Docker"],
		demo: "https://play.google.com/store/apps/details?id=com.eurekaplicaciones.miscore&hl=es_AR",
		other: "En producción. Actualmente, MiScore es una aplicación confiable y segura que ayuda a los usuarios a mantenerse informados sobre su situación crediticia y financiera, brindándoles la posibilidad de tomar decisiones financieras más informadas.",
	},
	{
		kind: "profesional",
		title: "EurekaGPS",
		description: `
		¿Qué es Eureka GPS?
• Plataforma de gestión: Diseñada para el seguimiento, control y optimización de flotas de vehículos y sistemas de transporte inteligente.
• Funciones principales: Monitoreo en tiempo real, registro de recorridos históricos, análisis de trayectos y funcionamiento tanto online como offline.
• Disponibilidad: Cuenta con herramientas web y aplicaciones móviles para el control centralizado de unidades.`,
		image: "/ImagesProjects/eurekagps.webp",
		technologies: ["React", "NodeJs", "MySql", "Typescript", "Firebase", "GoogleCloud", "Capacitor", "Redis", "Php", "Docker"],
		demo: "https://eureka-gps.eurekaplicaciones.com",
		other: "En fase beta de desarrollo.",
	},

	{
		kind: "universitario",
		title: "Rick & Morty",
		description:
			"Proyecto integrador para el bootcamp SoyHenry en donde apliqué conocimientos adquiridos sobre React, NodeJs, Sequelize, PostgreSQL y Javascript",
		image: "/ImagesProjects/ricky.webp",
		github: "https://github.com/pi-rym/PI-SergioFVallenari",
		technologies: ["React", "Tailwind", "NodeJs", "Javascript"],
	},
	{
		kind: "universitario",
		title: "Pokémon",
		description:
			"Aplicación web que permite buscar a tu Pokémon favorito, visualizar información de cada uno, filtrar por su tipo y crear nuevos pokemones.",
		image: "/ImagesProjects/pokeApi.webp",
		github: "https://github.com/SergioFVallenari/PI-Pokemon",
		technologies: ["React", "Tailwind", "NodeJs", "Javascript"],
	},

	{
		kind: "personal",
		title: "Portfolio - Sergio Vallenari",
		description:
			"Portfolio realizado en Astro 4.0, poniendo en practica conocimientos adquiridos sobre este nuevo Framework",
		image: "/ImagesProjects/portfolio.webp",
		github: "https://github.com/SergioFVallenari/portfolio",
		technologies: ["Tailwind", "Javascript", "Astro"],
	},
];