import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import NouveauVoiture from "./pages/NouveauVoiture";
import LoginPage from "./pages/Login";
import DownloadAppBanner from "./component/DownloadAppBanner";
import FavorisPage from "./pages/FavorisPage";
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/formulaire" element={<NouveauVoiture/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<DownloadAppBanner/>}/>
            <Route path="/favoris" element={<FavorisPage/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
