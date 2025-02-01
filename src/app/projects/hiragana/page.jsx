'use client'
import { RotateCcw, Circle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hiraganaData from '@/data/hiragana.json'
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Confetti from 'react-confetti-boom';

const symbols = hiraganaData

const generateNcards = (x) => {
    const arr = new Array(x).fill(true).map(()=>Math.round(Math.random()*symbols.length))
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

    return (
        <div className='m-5 p-5'>
            {won && <div className="z-[999999999999999999999999999999999]">
                <Confetti  mode='boom' colors={["#3838fa", "#7997f7", "#901aaa", "#ffe6f7"]} />
            </div>}
            <h1 className='text-3xl font-black '>Hiragana</h1>
            <h2 className='text-xl font-thin mb-5'>A small project for a bro</h2>
            <div className="flex gap-5">
                <div>
                    Pick a number of cards to see
                </div>
                <Input type="number" value={inputValue} onChange={handleChange} />
                <Button onClick={generate}>Generate</Button>
            </div>
            <Button onClick={clearGame}>Clear</Button>
            <div className="flex justify-center">
                <div className='grid grid-cols-3 gap-4 justify-items-center '>
                    {arrToMap.map((symbol, index) => (
                        <Card won={won} setWon={setWon} remainingToCorrect={remainingToCorrect} setRemaining={setRemaining} key={`${symbol.roumaji}-${index}`} front={symbol.kana} back={symbol.roumaji} />
                    ))}
                </div>
            </div>
        </div>
    )
}


const Card = ({ front, back, remainingToCorrect, setRemaining, won, setWon}) => {
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
      className={`flip-card  w-64 h-48 ${flipped ? "flipped" : ""} `}       
    >
      <div className="flip-card-inner relative w-full h-full border">
        
        {/* Front Side */}
        <div className={`hover:cursor-pointer ${gotit ? "text-green-500": ""} flip-card-front flex items-center justify-center bg-slate-900 text-white text-6xl font-light rounded-lg shadow-lg`}
        onClick={flip}
        >
          {front}
        </div>

        {/* Back Side */}
        <div className="flip-card-back flex flex-col items-center justify-center bg-slate-950 text-white text-4xl font-light rounded-lg shadow-lg"
        
        >
          <div>{back}</div>
          <div className="w-full flex justify-around mt-2 text-lg font-mono">
            <Button className="bg-green-500 px-4 py-2 rounded" onClick={getit}><Circle/></Button>
            <Button variant="secondary" onClick={flip}><RotateCcw /></Button>
            <Button className="bg-red-500 px-4 py-2 rounded" onClick={flip}><X/></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

