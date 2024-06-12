
import './App.css'
import Cards from './components/Cards'

function App() {
  let myObj = {
    username:"psb",
    age : 20
  }

  return (
    <>
      <h2 className='bg-green-400'>welcome to test</h2>
      <Cards username="psb" btnText="click me"/>
      <Cards username="dimpi" />

    </>
  )
}

export default App
