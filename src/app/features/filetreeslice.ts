import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFileTree } from "../../interface"

interface IClickedFile { fileName: string, fileContent: string | undefined, activeTabId: string | null; }

interface IInitialSlice {
    openedFiles: IFileTree[],
    clickedFile: IClickedFile
    removeTabById: string | null
}

const initialState: IInitialSlice = {
    openedFiles: [],
    clickedFile: {
        activeTabId: null,
        fileName: "",
        fileContent: ""
    },
    removeTabById: ""
}

const fileTreeSlice = createSlice({
    name: "fileTree",
    initialState,
    reducers: {
        setOpenedFiles: (state, action: PayloadAction<IFileTree[]>) => {
            state.openedFiles = action.payload
        },
        setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
            state.clickedFile.fileName = action.payload.fileName,
                state.clickedFile.fileContent = action.payload.fileContent
            state.clickedFile.activeTabId = action.payload.activeTabId
        },
        setRemoveTapById: (state, action: PayloadAction<string | null>) => {
            state.removeTabById = action.payload
        }

    }
})
export const { setOpenedFiles, setClickedFile, setRemoveTapById } = fileTreeSlice.actions
export default fileTreeSlice.reducer

