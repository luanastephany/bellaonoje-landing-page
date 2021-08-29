import './App.scss';
import Footer from './components/Footer';
import Header from "./components/Header";
import Account from './sections/Account';
import Download from './sections/Download';
import Hero from './sections/Hero'

function App() {


  return (
    <main>
      <Header />
      <Hero />
      <Account />
      <Download />
      <Footer />
    </main>
  )
}

export default App;
