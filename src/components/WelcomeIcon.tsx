import FileImgIcon from "./FileImgIcon";
import vscodeIcon from '../../public/icons/vscode.svg'

export default function WelcomeIcon() {
  return (
    <div className="h-screen flex items-center justify-center">
      <FileImgIcon src={vscodeIcon} className="w-64 h-64" />
      <div>VS CODE</div>
    </div>
  )
}

