import { useDispatch, useSelector } from "react-redux";
import { IFileTree } from "../interface";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile, setOpenedFiles, setRemoveTapById } from "../app/features/filetreeslice";
import { RootState } from "../app/store";

interface IProps {
    file: IFileTree
}

export default function OpenedFileBarTap({ file }: IProps) {


    // handel
    const dispatch = useDispatch()
    const { clickedFile, openedFiles } = useSelector((state: RootState) => state.fileTree)
    const { name, content, id } = file
    const clickOnTap = () => {
        dispatch(setClickedFile({ fileName: name, fileContent: content, activeTabId: id }))
        console.log(clickedFile);

    }

    const onRemove = (selectedId: string) => {
        const filtered = openedFiles.filter(file => file.id !== selectedId);
        const lastTab = filtered[filtered.length - 1]
        if (filtered.length === 0) {
            dispatch(setClickedFile({ activeTabId: null, fileContent: "", fileName: "" }))
            dispatch(setOpenedFiles([]))
            return
        }
        dispatch(setClickedFile({ activeTabId: lastTab.id, fileContent: lastTab.content, fileName: lastTab.name }))
        dispatch(setOpenedFiles(filtered))

        console.log(filtered, lastTab);

    };

    return (
        <div
            onContextMenu={e => {
                e.preventDefault()
                dispatch(setRemoveTapById(file.id))
            }}
            className="flex items-center p-3 mt-5" onClick={clickOnTap} style={{ "borderTop": clickedFile.activeTabId === file.id ? "1px solid orange" : "" }}>
            <RenderFileIcon fileName={file.name} />
            <li className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">{file.name}</li>
            <span onClick={
                (e) => {
                    e.stopPropagation()
                    onRemove(file.id)
                }}

            >
                <CloseIcon />
            </span>

        </div>
    )
}

