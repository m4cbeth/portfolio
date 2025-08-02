import { TechAccordian, PlatformAccordian } from "@/components/made-components/portfolio-accordian";
import Head from "next/head";

export default function About() {
    return (               
        <div className="container mx-auto">
            <Head>
                <title>About Jaren</title>
            </Head>
            <h1 className="text-5xl font-black pt-3">
                about me
            </h1>
            <h2 className=" font-thin text-3xl pb-5">
                My Current Strong Suites
            </h2>
            <section>
                <div className="flex flex-col md:justify-center gap-10 mx-5">
                    <div className="flex-1">
                        <h2 className="text-center font-thin text-2xl pb-5">
                            Tech Experience
                        </h2>
                        <TechAccordian className="size-10" />
                    </div>
                    <div className="flex-1">
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