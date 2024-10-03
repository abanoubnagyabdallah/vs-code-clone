import TextHilight from './TextHilight'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import OpenedFileBar from './OpenedFileBar'

export default function Preview() {
     const {  clickedFile } = useSelector((state: RootState) => state.fileTree)
  return (
    <div>
        <OpenedFileBar/>
        <TextHilight content={clickedFile.fileContent} />
    </div>
  )
}
