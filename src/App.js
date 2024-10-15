import logo from "./logo.svg";
import "./App.css";
import Header from "./Comman/Header";
import Footer from "./Comman/Footer";
import MainView from "./View/MainView";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MainView />
        <Footer />
      </div>
    </div>
  );
}

export default App;
