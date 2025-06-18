export type HtmlType = HTMLElement | null;
export type HtmlListType = NodeListOf<HTMLElement> | null;
export type SvgListType = NodeListOf<SVGSVGElement> | null;

export interface SvgMapType {
	[key: string]: string;
};
export interface SkillsType {
	name: string;
	img: string;
	title: string;
	link: string;
};
