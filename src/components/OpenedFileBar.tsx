import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTap from "./OpenedFileBarTap";
import DropMenu from "./ui/DropMenu";
import { useState } from "react";

export default function OpenedFileBar() {
    const [dropMenu, setDropMenu] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const { openedFiles } = useSelector((state: RootState) => state.fileTree)
    return (
        <div>
            <ul className="flex space-x-4"
                onContextMenu={
                    e => {
                        e.preventDefault()
                        setDropMenu({ x: e.clientX, y: e.clientY })
                        setShowMenu(true)
                    }
                }>
                {openedFiles.map(file => <OpenedFileBarTap key={file.id} file={file} />)}
            </ul>
            {showMenu && <DropMenu position={dropMenu} setShow={setShowMenu} />}
        </div>
    )
}
