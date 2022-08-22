import './App.scss';
import ActivityFeed from './Components/ActivityFeed/activityfeed.component';
import Header from './Components/Header/header.component';
import NavBar from './Components/NavBar/navbar.component';
import SideNav from './Components/SideNav/sidenav.component';
import AllPage from './Pages/AllPage/allpage.component';
import {Route, Routes} from "react-router-dom";
import FavoritePage from './Pages/FavoritesPage/favoritespage.component';
import ArchivedPage from './Pages/ArchivedPage/archivedpage.component';

function App() {
  return (
    <div className="App">
      <SideNav/>
      <div className='container'>
        <NavBar/>
        <Header/>
        <div className='context'>
          <Routes>
            <Route path='/' element={<AllPage/>}/>
            <Route path='/favorites' element={<FavoritePage/>}/>
            <Route path='/archived' element={<ArchivedPage/>}/>
          </Routes>
          <ActivityFeed/>
        </div>
      </div>
    </div>
  );
}

export default App;
