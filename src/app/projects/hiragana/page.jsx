import { Button } from '@/components/ui/button';
import hiraganaData from '@/data/hiragana.json'


export default async function Hiragana() {
    return (
        <div className='m-5 p-5'>
            <h1 className='text-3xl font-black '>Hiragana</h1>
            <h2 className='text-xl font-thin mb-5'>A small project for a bro</h2>
            <div className='grid grid-cols-3 gap-5 justify-center'>
                {hiraganaData.map((symbol, index) => (
                    <Card front={symbol.kana} back={symbol.roumaji} />
                ))}
            </div>
            <pre>
                {JSON.stringify(hiraganaData, 0, 8)}
            </pre>
        </div>
    )
}


const Card = ({front, back}) => (
    <div class="flip-card w-64 h-48">
        <div class="flip-card-inner relative w-full h-full">
            <div class="flip-card-front absolute w-full h-full bg-slate-900 border flex items-center justify-center text-6xl font-light rounded-lg shadow-lg">
                {front}
            </div>
            <div class="flip-card-back flex flex-col  absolute w-full h-full bg-slate-950 items-center justify-center text-4xl font-light rounded-lg shadow-lg">
                <div className='h-full flex flex-col justify-center items-center'>
                    {back}                    
                </div>
                <div className="w-full flex justify-around">
                    <Button variant="destructive">knew</Button>
                    <Button>didn&apos;t</Button>
                </div>
            </div>
        </div>
    </div>
  );