import { Route, Routes, useRoutes } from 'react-router-dom';
import './App.css';
import routes from './router/routes'
import Navbar from './components/Nvabar/Navbar';



function App() {

  const router = useRoutes(routes)

  return (
    <div className="app">
      <Navbar />
      {router}
    </div>
  );
}

export default App;
