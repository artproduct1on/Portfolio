export type HtmlType = HTMLElement | null;
export type HtmlListType = NodeListOf<HTMLElement> | null;
export type InputType = HTMLInputElement | null;
export type TextAreaType = HTMLTextAreaElement | null;
export type SvgListType = NodeListOf<SVGSVGElement> | null;

export interface SvgMapType {
	[key: string]: string;
};
export interface SkillsType {
	name: string;
	img: string;
	link: string;
};
