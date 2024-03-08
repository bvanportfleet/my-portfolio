import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  
  return (
    <div className="App flex flex-col min-h-screen">
      <Header name="Brian VanPortfleet" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
