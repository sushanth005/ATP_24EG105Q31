import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UsersList from './components/UsersList';
import Counter from './components/Counter';
import TestRefTypes from './components/TestRefTypes';
import APIDemo from './components/APIDemo';
import FormDemo from './components/FormDemo';

function App()
{
  //state
  //return react element
  return(
      <div>
        <Navbar />
        
        {/*<Counter/>
        <TestRefTypes/>
        
        <APIDemo/>
        <div className="">
          <UsersList/>
        </div>*/}

        <FormDemo/>


        <Footer/>
      </div>
  );
}

export default App;