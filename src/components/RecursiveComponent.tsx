import RightArrowIcon from "./SVG/Right";
import { IFileTree } from "../interface";
import { useState } from "react";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {  setClickedFile, setOpenedFiles } from "../app/features/filetreeslice";
import { RootState } from "../app/store";
import { doesFileExists } from "../utilis/function";

interface IProps {
    FileTree: IFileTree;
}

export default function RecursiveComponent({ FileTree }: IProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const toggle = () => setIsOpen(rev => !rev)
    const dispatch = useDispatch()
    const { openedFiles } = useSelector((state: RootState) => state.fileTree)

    // handel click
    const clicked = () => {
        // if(openedFiles.includes(FileTree)){
        //     alert('this file already exists')
        //     return
        // }

        // refactor your code
        const exists = doesFileExists(openedFiles, FileTree.id)
        // dispatch(setActiveTapId(FileTree.id))
        if (exists) return

        dispatch(setOpenedFiles([...openedFiles, FileTree]))
        console.log(openedFiles);

        dispatch(setClickedFile({ fileName: FileTree.name, fileContent: FileTree.content,activeTabId:FileTree.id }))
    }

    return (
        <div className="ml-5 mb-2">
            <div className="flex items-center mb-1">
                {FileTree.isFolder
                    ? <span className="mr-2 flex items-center" onClick={toggle}>
                        {!isOpen ? <RightArrowIcon /> : <BottomArrowIcon />}
                        <RenderFileIcon fileName={FileTree.name} isopen={isOpen} isfolder={FileTree.isFolder} />
                        <span className="mr-2 ml-2">{FileTree.name}</span>
                    </span>
                    : <span className="mr-2 flex items-center"
                        onClick={clicked}
                    >
                        <RenderFileIcon fileName={FileTree.name} isopen={isOpen} isfolder={FileTree.isFolder} />
                        <span className="mr-2 ml-2">{FileTree.name}</span>
                    </span>}
            </div>
            {
                isOpen && FileTree.children && FileTree.children.map((file, idx) => <RecursiveComponent key={idx} FileTree={file} />)
            }
        </div>
    )
}
