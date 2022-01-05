import { Sidebar } from "./components/Sidebar";
import { Portfolio } from "./components/Portfolio";
import { data } from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Portfolio projects={data} />
    </div>
  );
}

export default App;
