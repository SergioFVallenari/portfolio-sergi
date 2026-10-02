export interface Experience {
	date: string;
	title: string;
	description: string;
	link?: string;
	other?: string;
}

export const EXPERIENCE: Experience[] = [
	{
		date: "Mar. 2024 - Ago. 2026",
		title: "Full Stack Developer - Eurekaplicaciones",
		description:
			"Desarrollé y mantuve aplicaciones web y mobile, participando de forma integral en los proyectos, desde el diseño y desarrollo de las bases de datos hasta la implementación del backend y frontend.\nTrabajé principalmente con React, TypeScript, Node.js, PHP y MySQL. Participé en la evolución de la aplicación de gestión de Flexit, incorporando nuevas funcionalidades, resolviendo incidencias y realizando mejoras sobre el sistema existente. También desarrollé desde cero una aplicación para centralizar y gestionar las integraciones de Flexit con distintas plataformas de e-commerce mediante APIs REST. El proyecto incluía la sincronización de productos, órdenes y stock, e integraciones con MercadoLibre, WooCommerce, Tiendanube, Wix, Shopify, VTEX, Magento y PrestaShop.",
		link: "https://eurekaplicaciones.com",
	},
	{
		date: "Oct. 2024 - actualidad",
		title: "Full Stack Developer - Don Faustino",
		description:
			"Aplicación web de gestión de restaurantes (React, NodeJS, MySQL, Capacitor). Permite la administración de stock y mercadería con alertas de stock bajo, registro y control de ventas en tiempo real (comandas), generación de reportes detallados de ventas diarias, semanales y mensuales, y la creación y gestión de la carta con cálculo automático de costos y ganancias por plato. Actualmente, brindo soporte y mantenimiento para mejoras y optimización del sistema.",
		other: "Experiencia freelance",
	},
	{
		date: "En curso",
		title: "Full Stack Developer - gestionHotel",
		other: "Experiencia freelance",
		description:
			"Sistema de gestión hotelera multi-tenant (React, Node.js, Express, PostgreSQL) con SPA web y aplicación Android (Capacitor). Incluye API REST, autenticación JWT, administración multi-empresa y pagos online integrados con MercadoPago. Interfaz y mensajes en español, con moneda ARS y zona horaria de Argentina.",
	},
	{
		date: "dic. 2023 - ene. 2024",
		title: "eCommerce - Drewili",
		other: "Experiencia freelance",
		description:
			"Es un MVP para un cliente de perú que necesitaba un e-commerce que permite a los usuarios explorar, buscar y comprar productos de diferentes categorías. Proporciona funcionalidades clave como carrito de compras, gestión de usuarios, filtrado de productos y más.",
		link: "https://drewilifront.vercel.app",
	},
	{
		date: "nov. 2018 - may. 2023",
		title: "Técnico en reparacion de dispositivos móviles",
		description:
			"Realización de diagnósticos de hardware y software en dispositivos móviles y reparación de pantallas rotas, baterías dañadas y otros componentes defectuosos.",
		other: "Otras experiencias",
	},
	{
		date: "",
		title: "Esta sección se va a agrandar...próximamente",
		description: "",
	},
];