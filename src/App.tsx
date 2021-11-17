import { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string
    age: number
    img: string
    bio?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Rajat Mehra",
      age: 24,
      img: "https://avatars.githubusercontent.com/u/35677839?v=4",
      bio: "Writer, poet, frontend developer.",
    },
    {
      name: "Manish Panwar",
      age: 18,
      img: "https://media-exp1.licdn.com/dms/image/D5635AQFf6DX_J7btwQ/profile-framedphoto-shrink_200_200/0/1635939835079?e=1637211600&v=beta&t=pitcKXbUaGG3tgaGaQBuzWNLMmhbf4cmNfwiWBRo0tQ",
      bio: "Full stack developer and a chess player."
    }
  ])
  
  return (
    <div className="App">
      <h1> Join our team </h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
