import { TechAccordian, PlatformAccordian } from "@/components/made-components/portfolio-accordian";

export default function About() {
    return (               
        <div className="">
            <title>About Jaren</title>
            <h1 className="text-5xl font-black pt-3">
                about me
            </h1>
            <section>
                <h2 className=" font-thin text-3xl pb-5">
                    My Current Strong Suites
                </h2>
                <div className="grid grid-rows-2 md:grid-cols-2 gap-10 mx-5">
                    <div className="">
                        <h2 className="text-center font-thin text-2xl pb-5">
                            Tech Experience
                        </h2>
                        <TechAccordian className="size-10" />
                    </div>
                    <div>
                        <h2 className="text-center font-thin text-2xl pb-5">
                            Deployment Experience
                        </h2>
                        <PlatformAccordian/>
                    </div>
                </div>
            </section>            
        </div>
    )
}