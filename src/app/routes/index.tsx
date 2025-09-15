/* imports */
import { createFileRoute, Link } from "@tanstack/react-router";


// トップページに表示されるコンポーネント
function App() {
  return <div className="flex flex-col items-center justify-center h-screen"><Link to="/canvas">canvas</Link></div>
}

export default App;
export const Route = createFileRoute("/")({
  component: App,
});