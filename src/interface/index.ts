
export interface IFileTree {
    id:string;
    name: string;
    isFolder: boolean;
    children?: IFileTree[];
    content?: string;
}