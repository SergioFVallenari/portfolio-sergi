import type { TechKey } from "./tech";

export interface StackCategory {
	title: string;
	items: { tech: TechKey }[];
}

export const STACK: StackCategory[] = [
	{
		title: "Frontend",
		items: [
			{ tech: "Javascript" },
			{ tech: "Typescript" },
			{ tech: "React" },
			{ tech: "Redux" },
			{ tech: "Tailwind" },
			{ tech: "Html" },
			{ tech: "Css" },
			{ tech: "Angular" },
		],
	},
	{
		title: "Backend",
		items: [
			{ tech: "NodeJs" },
			{ tech: "Express" },
			{ tech: "Php" },
			{ tech: "Sequelize" },
		],
	},
	{
		title: "Bases de datos",
		items: [
			{ tech: "MySql" },
			{ tech: "PostgreSQL" },
			{ tech: "Firebase" },
		],
	},
	{
		title: "Cloud & Tools",
		items: [
			{ tech: "FirebaseStorage" },
			{ tech: "GoogleCloud" },
		],
	},
];