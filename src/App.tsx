
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgressBar from './components/ScrollProgressBar';

import Router from "./Routes/Router";
import Header from "./components/Header";
import Footer_ from "./components/footer2";

function App() {
  return (

      <div>
        <ScrollProgressBar/>

        {/* Navbar */}
        <Header />

        {/* Main content */}
        <main className="flex-grow">
          <Router/>
        </main>

        {/* Footer */}
        <Footer_ />
      </div>

  );
}

export default App;
