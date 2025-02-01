'use client'
import { RotateCcw, Circle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hiraganaData from '@/data/hiragana.json'
import { useState } from 'react';


export default function Hiragana() {

    const generateNumber = (x) => {
        const arr = new Array(x).fill(true).map(()=>Math.round(Math.random()))
    }

    return (
        <div className='m-5 p-5'>
            <h1 className='text-3xl font-black '>Hiragana</h1>
            <h2 className='text-xl font-thin mb-5'>A small project for a bro</h2>
            <div className="flex justify-center">
                <div className='grid grid-cols-3 gap-4 justify-items-center '>
                    {hiraganaData.slice(0,).map((symbol, index) => (
                        <Card key={index} front={symbol.kana} back={symbol.roumaji} />
                    ))}
                </div>
            </div>
        </div>
    )
}


const Card = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);


  return (
    <div 
      className={`flip-card w-64 h-48 ${flipped ? "flipped" : ""}`}       
    >
      <div className="flip-card-inner relative w-full h-full">
        
        {/* Front Side */}
        <div className="hover:cursor-pointer flip-card-front flex items-center justify-center bg-slate-900 text-white text-6xl font-light rounded-lg shadow-lg"
        onClick={() => setFlipped(!flipped)}
        >
          {front}
        </div>

        {/* Back Side */}
        <div className="flip-card-back flex flex-col items-center justify-center bg-slate-950 text-white text-4xl font-light rounded-lg shadow-lg"
        
        >
          <div>{back}</div>
          <div className="w-full flex justify-around mt-2 text-lg font-mono">
            <Button className="bg-green-500 px-4 py-2 rounded"><Circle/></Button>
            <Button variant="secondary" onClick={() => setFlipped(!flipped)}><RotateCcw /></Button>
            <Button className="bg-red-500 px-4 py-2 rounded"><X/></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

