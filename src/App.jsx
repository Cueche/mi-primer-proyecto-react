import './App.css'
import Card from './components/Card'

function App() {

  const me = {
    name: "Jose Enrique Cueche",
    age: 33,
    favoriteMovie: "Inception",
    favoriteMusic: "Rock comercial"
  }

  let { name, age, favoriteMovie, favoriteMusic } = me

  const hobbies = {
    title: "Hobbies",
    list: ["ir a la playa", "ajedrez", "sudoku", "videojuegos"]
  }

  const favoriteFood = {
    title: "Mi comida favorita",
    list: ["pasta", "pizza", "pasticho", "cachapas"]
  }

  const stackTech = {
    title: "My stack Tech",
    list: ["html", "CSS", "javascript", "React"]
  }


  return (
    <div className="App">  
        <ul className="list list1">
          <li className="list__item"><b>Nombre: </b>{name}</li>
          <li className="list__item"><b>Edad: </b>{age}</li>
          <li className="list__item"><b>Pelicula favorita:</b>{favoriteMovie}</li>
          <li className="list__item"><b>Musica favorita: </b>{favoriteMusic}</li>
        </ul>
        <Card objInfo={hobbies} />
        <Card objInfo={favoriteFood} />
        <Card objInfo={stackTech} />
        
    </div>
  )
}

export default App
