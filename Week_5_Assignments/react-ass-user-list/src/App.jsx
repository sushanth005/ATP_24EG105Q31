import './App.css'
import UserList from './components/UserList.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

function App(){
    //use state

    //return`
    return(
        <div className='bg-gradient-to-b from-sky-300 via-green-200 to-orange-300'>
            <NavBar />
            <div className='m-16 min-h-screen '>
                <UserList />
            </div>
            <Footer />
        </div>
    )
}

export default App;