import { extensionIconPaths } from "../constants";
import FileImgIcon from "./FileImgIcon";
import FileIcon from "./SVG/File";

interface IProps {
    fileName: string;
    isopen?: boolean;
    isfolder?: boolean
}

export default function RenderFileIcon({ fileName, isopen, isfolder }: IProps) {
    const fileExtension = fileName.split(".").pop() // pop method removes the last element and returns it


// ============================ refactor your code =====================
    if (fileExtension && Object.prototype.hasOwnProperty.call(extensionIconPaths, fileExtension)) {
    const iconPath = isfolder
      ? isopen
        ? `${extensionIconPaths[fileExtension]}-open.svg`
        : `${extensionIconPaths[fileExtension]}.svg`
      : `${extensionIconPaths[fileExtension]}.svg`;

    // console.log(extensionIconPaths[fileExtension]);
    return <FileImgIcon src={iconPath} />;
  }

    // if (fileExtension === 'html') return (<FileImgIcon src={'../../public/icons/html.svg'} />)
    // if (fileExtension === 'ts') return (<FileImgIcon src={'../../public/icons/typescript-def.svg'} />)
    // if (fileExtension === 'tsx') return (<FileImgIcon src={'../../public/icons/react_ts.svg'} />)
    // if (fileExtension === 'git') return (<FileImgIcon src={'../../public/icons/git.svg'} />)
    // if (fileExtension === 'json') return (<FileImgIcon src={'../../public/icons/nodejs.svg'} />)
    // if (fileExtension === 'svg') return (<FileImgIcon src={'../../public/icons/svg.svg'} />)

    // if (fileExtension === 'node_modules') return isopen && isfolder
    //     ? <FileImgIcon src='../../public/icons/folder-node-open.svg' />
    //     : <FileImgIcon src='../../public/icons/folder-node.svg' />

    // if (fileExtension === 'src') return isopen && isfolder
    //     ? <FileImgIcon src={"../../public/icons/folder-src-open.svg"} />
    //     : <FileImgIcon src={"../../public/icons/folder-src.svg"} />

    // if (fileExtension === 'SVG') return isopen && isfolder
    //     ? <FileImgIcon src={"../../public/icons/folder-svg-open.svg"} />
    //     : <FileImgIcon src={"../../public/icons/folder-svg.svg"} />

    // if (fileExtension === 'components') return isopen && isfolder
    //     ? <FileImgIcon src={"../../public/icons/folder-components-open.svg"} />
    //     : <FileImgIcon src={"../../public/icons/folder-components.svg"} />

    // if (fileExtension === 'vs code clone') return isopen && isfolder
    //     ? <FileImgIcon src={"../../public/icons/folder-vscode-open.svg"} />
    //     : <FileImgIcon src={"../../public/icons/folder-vscode.svg"} />

    // if (fileExtension === 'data') return isopen && isfolder
    //     ? <FileImgIcon src={"../../public/icons/folder-database-open.svg"} />
    //     : <FileImgIcon src={"../../public/icons/folder-database.svg"} />

    if (isfolder && isopen) return <FileImgIcon src={"../../public/icons/folder-default-open.svg"} />
    if (isfolder && !isopen) return <FileImgIcon src={"../../public/icons/folder-default.svg"} />
    return <FileIcon/>
}
