import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import  Login  from './components/Login'
import List from './components/List';
import Results from './components/Results';
import Detail from './components/Detail';
import Header from './components/Header'
import Footer from './components/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import'./styles/App.css'

function App() {
  const addOrRemvFromFavs = () => {
    console.log('Ok, Funca')
  }

  return (
    <>
    
      <div className='d-flex flex-column min-vh-100 bg-dark bg-gradient'>

    <Router>
    <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
        <Route exact path="/list" element={<List />} />
        <Route exact path="/detail" element={<Detail />} />
        <Route exact path='/results' element={<Results />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
      </Router>

      </div>
      </>
  );
}

export default App;
