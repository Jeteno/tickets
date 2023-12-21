import {useState} from 'react'
import Header from './components/global/Header'
import Body from './components/global/Body'
import data from './mock.json'

function App() {
  const [tikets, setTikets] = useState(data);

  return (
    <div className="wrapper">
      <Header/>
      <Body tikets={tikets} setTikets={setTikets}/>
    </div>
  )
}

export default App
