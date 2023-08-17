import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Navbar from "./Components/Navbar/Navbar";
import "./main.css"

function App() {
  
  return (
    <div className="App">
      <main class="main" id="top">
        
        <Navbar id="bar"></Navbar>

          <Section1></Section1>
          <Section2 id="section2"></Section2>

      <section class="py-0 pt-7" ></section>
      </main>
      </div>
  );
}

export default App;
