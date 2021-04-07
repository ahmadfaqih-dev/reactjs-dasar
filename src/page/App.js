import Props from '../components/Props';
import Statefull from '../components/Statefull';
import Stateless from '../components/Stateless';
import './App.css';

function App() {
  return (
    <div>
      <Statefull />
      <p>=============================</p>
      <Stateless />
      <p>=============================</p>
      <Props nama= "Ahmad Faqih" alamat= "Jakarta Barat" hobi= {<Hobi />}/>
      <Props nama= "Arin" alamat= "Brebes" hobi= {<Portfolio />}/>
      <p>=============================</p>

    </div>
  );
}

const Hobi = () => {
  return (
    <ul>
      <li>Melukis</li>
      <li>Membaca</li>
      <li>Coding</li>
    </ul>
  )
  
}

const Portfolio = () => {
  return (
    <ul>
      <li>Web Design</li>
      <li>Aplikasi Android</li>
      <li>Web Sistem</li>
    </ul>
  )
}



export default App;
