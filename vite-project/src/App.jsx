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

      <card>
        <h4>This is Childre demo</h4>
        <p>This demo talks about passing</p>
        <p>Thanks for packing</p>
      </card>

      <Footer year={y} company={c} />
    </div>
  )
}

export default App
