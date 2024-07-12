export interface BuildPaths {
    entry: string;
    html: string;
    outputProd: string;
    outputDev: string;

}
export type BuildMode = "production" | "development";

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
}