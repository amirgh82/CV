import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './router/routes'
import Navbar from './components/Nvabar/Navbar';
import Footer from './components/Footer/Footer';




function App() {
  const router = useRoutes(routes)



  return (
    <div className="app">
      <Navbar />
      {router}
      <Footer />
    </div>
  );
}

export default App;
