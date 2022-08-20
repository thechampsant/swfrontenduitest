import './App.scss';
import Header from './Header/header.component';
import NavBar from './NavBar/navbar.component';
import SideNav from './SideNav/sidenav.component';

function App() {
  return (
    <div className="App">
      <SideNav/>
      <div className='container'>
        <NavBar/>
        <Header/>
        <div className='context'>

        </div>
      </div>
    </div>
  );
}

export default App;
