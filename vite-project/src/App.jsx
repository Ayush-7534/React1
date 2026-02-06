import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {

  const y = [24,25,26]
  const c = {name:"KIET" , location:"GZB" , estyear:1998}


  return (
    <div>
      <Header title="My first React App"/> 
      <Header title="Lets Explore"/>

      <Footer year={y} company={c} />
    </div>
  )
}

export default App
