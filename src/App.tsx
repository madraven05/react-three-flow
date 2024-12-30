import CanvasControls from "./components/ui/canvas-controls";
import SidebarPanel from "./components/ui/sidebar/sidebar-panel";
import Topbar from "./components/ui/topbar/topbar";
import WizFlowCanvas from "./wizflow-canvas";

function App() {
  return (
    <div className="flex flex-col items-start justify-center gap-5 h-full w-full">
      <Topbar/>
      <SidebarPanel/>
      <CanvasControls/>
      <WizFlowCanvas />
    </div>
  );
}

export default App;
