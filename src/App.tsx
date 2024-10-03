import { useSelector } from "react-redux";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { FileTree } from "./data/FileTree";
import { RootState } from "./app/store";
import Preview from "./components/Preview";
import WelcomeIcon from "./components/WelcomeIcon";


const App = () => {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  return (
    <div >
      <div className="flex h-screen">

        <ResizablePanel
          showLeftPanel
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComponent FileTree={FileTree} />
            </div>
          }
          rightPanel={openedFiles.length ? <Preview /> : <WelcomeIcon />}
        />
      </div>
    </div>
  );
};

export default App;

