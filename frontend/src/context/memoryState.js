
import MemoryContext from './memoryContext'
import { props,useState } from 'react'

const MemoryState = (props) => {
  const memories = [
    {
      _id: "636c1433ab6a752472046f07",
      user: "vijay",
      image: "https://i.imgur.com/TaUxVzr.jpg",
      title: "my beloved dad",
      description: "He was a great soul",
      tag: "always loved",
      date: "2022-11-09T20:57:23.129Z",
      __v: 0,
    },
    {
      _id: "636c1434ab6a752472046f09",
      user: "vijay",
      image: "https://i.imgur.com/TaUxVzr.jpg",
      title: "my beloved dad",
      description: "He was a great soul",
      tag: "always loved",
      date: "2022-11-09T20:57:24.556Z",
      __v: 0,
    },
    {
      _id: "636c1436ab6a752472046f0b",
      user: "vijay",
      image: "https://i.imgur.com/TaUxVzr.jpg",
      title: "my beloved dad",
      description: "He was a great soul",
      tag: "always loved",
      date: "2022-11-09T20:57:26.192Z",
      __v: 0,
    }
  ];

    const [memory, setMemory] = useState(memories)
    console.log(memory)
  return (
    <MemoryContext.Provider value={{ memory,setMemory}}>
      {props.children}
    </MemoryContext.Provider>
  );
}
export default MemoryState