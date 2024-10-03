import { useEffect, useRef } from "react"
import { setOpenedFiles } from "../../app/features/filetreeslice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"

interface IProps {
    position: { x: number, y: number }
    setShow: (val: boolean) => void
}

export default function DropMenu({ position, setShow }: IProps) {
    const dispatch = useDispatch()
    const menuRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const clickOnWindow = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShow(false)
            }
        }
        window.addEventListener('click', clickOnWindow)

        return () => {
            window.removeEventListener('click', clickOnWindow)
        }
    }, [setShow])



    const { removeTabById, openedFiles } = useSelector((state: RootState) => state.fileTree)
    const RemoveOneTap = () => {
        const filtered = openedFiles.filter(file => file.id !== removeTabById);
        dispatch(setOpenedFiles(filtered))
    }
    return (
        <div

            ref={menuRef} >
            <ul style={{
                position: "absolute",
                left: position.x,
                top: position.y,
                backgroundColor: "white",
                color: "black",
                padding: "10px 20px"
            }}>
                <li
                    onClick={RemoveOneTap}
                >close</li>
                <li
                    onClick={() => {

                        dispatch(setOpenedFiles([]))
                    }}
                >close all</li>
            </ul>
        </div>
    )
}
