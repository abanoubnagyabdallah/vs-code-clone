import { IFileTree } from "../interface"

export const doesFileExists = (filesArray: IFileTree[], fileId: string) => {
    return filesArray.some((file) => file.id === fileId)
}