export type TechKey =
	| "React"
	| "Redux"
	| "Tailwind"
	| "Javascript"
	| "Typescript"
	| "Angular"
	| "Html"
	| "Css"
	| "NodeJs"
	| "Express"
	| "Php"
	| "Sequelize"
	| "MySql"
	| "PostgreSQL"
	| "Firebase"
	| "FirebaseStorage"
	| "GoogleCloud"
	| "Astro"
	| "Capacitor"
	| "AWS"
	| "Redis"
	| "Docker"
	| "NextJs"

export interface TechMeta {
	label: string;
}

export const TECH_META: Record<TechKey, TechMeta> = {
	React: { label: "React" },
	Redux: { label: "Redux Toolkit" },
	Tailwind: { label: "Tailwind CSS" },
	Javascript: { label: "JavaScript" },
	Typescript: { label: "TypeScript" },
	Angular: { label: "Angular" },
	Html: { label: "HTML" },
	Css: { label: "CSS" },
	NodeJs: { label: "Node.js" },
	Express: { label: "Express" },
	Php: { label: "PHP" },
	Sequelize: { label: "Sequelize" },
	MySql: { label: "MySQL" },
	PostgreSQL: { label: "PostgreSQL" },
	Firebase: { label: "Firebase Realtime DB" },
	FirebaseStorage: { label: "Firebase Storage" },
	GoogleCloud: { label: "Google Cloud" },
	Astro: { label: "Astro" },
	Capacitor: { label: "Capacitor" },
	AWS: { label: "AWS" },
	Redis: { label: "Redis" },
	Docker: { label: "Docker" },
	NextJs: { label: "Next.js" }
};