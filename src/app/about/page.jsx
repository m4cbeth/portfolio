import PortAcc from "@/components/made-components/portfolio-accordian";

export default function About() {
    return (               
        <div className="md:max-w-lg md:mx-auto  mx-5 h-full">
            <title>About Jaren</title>
            <h1 className="text-7xl font-black pt-3">
                about me
            </h1>
            <section>
                <h2 className="text-center font-thin text-4xl pb-5">
                    My Current Strong Suites
                </h2>
                <div>
                    <PortAcc className="size-10" />
                </div>
                <h2 className="text-center font-thin text-4xl pb-5">
                    Deployment Experience
                </h2>
                <div>
                    Vercel, Netlify, Render, Firebase, Heroku, Siteground, Aiven, 
                </div>
            </section>
            
        </div>
    )
}