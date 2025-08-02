'use client'
import { RotateCcw, Circle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hiraganaData from '@/data/hiragana.json'
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Confetti from 'react-confetti-boom';

const symbols = hiraganaData

const generateNcards = (x) => {
    const getUniqueNumbers = (x, max) => {
        const uniqueNumbers = new Set()
        while (uniqueNumbers.size < x) {
            uniqueNumbers.add(Math.floor(Math.random() * max))
        }
        return Array.from(uniqueNumbers)
    }
    const arr = getUniqueNumbers(x, symbols.length)
    const selection = arr.map((x)=>symbols[x])
    return selection
}
// generateNcards(9)
export default function Hiragana() {
    const [won, setWon] = useState(false)
    const [arrToMap, setArr] = useState([])
    const [inputValue, setInput] = useState("")
    const [remainingToCorrect, setRemaining] = useState(0)
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const generate = () => {
        if (inputValue > 100) {
            alert('less than 100 cowboy')
            return
        }
        if (inputValue == "") return
        setArr([])
        setWon(false)
        const num = parseInt(inputValue, 10);
        setRemaining(num)
        const displayArray = generateNcards(num)
        setArr(displayArray)
    }
    const clearGame = () => {
        setArr([])
        setInput("")
        setWon(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='m-1 p-1 min-h-[75vh] container mx-auto'>
            <h1 className='text-3xl font-black '>Hiragana</h1>
            <h2 className='text-xl font-thin mb-5'>A small project for a bro</h2>
            <div className="flex flex-col gap-5 my-5">
                <div className='flex justify-between'>
                    <div>Pick a number of cards to see</div>
                    {arrToMap.length > 0 && <Button variant="secondary" onClick={clearGame}>Clear</Button>}
                </div>
                <form onSubmit={handleSubmit}>
                    <Input type="number" value={inputValue} onChange={handleChange} />
                    <div className="flex gap-5 my-3">
                        <Button className="flex-1" type='submit' onClick={generate}>Generate</Button>
                    </div>
                </form>
            </div>
            <div className="flex justify-center">
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center '>
                    {arrToMap.map((symbol, index) => (
                        <Card setWon={setWon} remainingToCorrect={remainingToCorrect} setRemaining={setRemaining} key={`${symbol.roumaji}-${index}`} front={symbol.kana} back={symbol.roumaji} />
                    ))}
                </div>
            </div>
            {won && <Confetti  mode='boom' colors={["#3838fa", "#7997f7", "#901aaa", "#ffe6f7"]} />}
        </div>
    )
}


const Card = ({ front, back, remainingToCorrect, setRemaining, setWon}) => {
  const [flipped, setFlipped] = useState(false);
  const [gotit, setGotit] = useState(false)
  
  const flip = () => setFlipped(!flipped)

  const getit = () => {
    setFlipped(!flipped)
    setGotit(true)
    setRemaining((prev)=>prev-1)
    if (remainingToCorrect == 1) {
        setWon(true)
    }
}

  return (
    <div 
      className={`flip-card  w-36 h-32 ${flipped ? "flipped" : ""} `}       
    >
      <div className="flip-card-inner relative w-full h-full border">
        
        {/* Front Side */}
        <div className={`hover:cursor-pointer font-semibold ${gotit ? "text-green-500": "text-white"} flip-card-front text-6xl flex items-center justify-center bg-slate-900  font-light rounded-lg shadow-lg`}
        onClick={flip}
        >
          {front}
        </div>

        {/* Back Side */}
        <div className="flip-card-back flex flex-col items-center justify-center bg-slate-950 text-white text-4xl font-thin rounded-lg shadow-lg"
        
        >
          <div>{back}</div>
          <div className="w-full flex justify-around mt-2 font-mono">
            <Button siz="small" className="bg-green-500 px-4 py-2 rounded " onClick={getit}><Circle/></Button>
            <Button siz="small" variant="secondary" onClick={flip}><RotateCcw /></Button>
            <Button siz="small" className="bg-red-500 px-4  rounded " onClick={flip}><X/></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

