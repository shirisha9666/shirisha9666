import "./components/styles.css"
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Cards />}/>
      <Route path='/Cart/:id' element={<CardDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
