import AboutUs from '../AboutUs/AboutUs'
import Home from '../Home/Home'
import { Routes,Route  } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import '../../App.css'
import GeneralInforamation from '../../components/GeneralInformation'
import History from '../../components/History'
import Management from '../../components/Management'
import Partners from '../../components/Partners'
import Politics from '../../components/Politics/Politics'
import { observer } from 'mobx-react-lite'
import Sidebar from '../../components/SIdebar.tsx/Sidebar'
import htmlStates from '../../store/htmlStates'
const Main =observer( ()=>{
    
    return(
        <>
          {htmlStates.activeMenu && <Sidebar/>}

<Header/>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/AboutUs' element={<AboutUs/>}>
    <Route path='' element={<GeneralInforamation/>}/>
    <Route path='history' element={<History/>} />
    <Route path='management' element={<Management/>}/>
    <Route path='partners' element={<Partners/>}/>
    <Route path='politics' element={<Politics/>}/>
</Route>
</Routes> 
<Footer/>
        </>
          
    )
})


export default Main 