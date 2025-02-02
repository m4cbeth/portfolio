import { SiFirebase } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { SiVercel } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiWordpress } from "react-icons/si";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const iconSize = 33

export async function TechAccordian() {
    const techAccordianItems = [
        {icon: <FaHtml5 className="transition-all" size={iconSize}/>, name: "HTML", body: htmlBody()},
        {icon: <FaJs className="transition-all" size={iconSize}/>, name: "JavaScript",body:  jsBody()},
        {icon: <FaCss3 className="transition-all" size={iconSize}/>, name: "CSS", body: cssBody()},
        {icon: <FaNodeJs className="transition-all" size={iconSize}/>, name: "Node", body: nodeBody()},
        {icon: <FaReact className="transition-all" size={iconSize}/>, name: "React", body: reactBody()},
        {icon: <SiFirebase className="transition-all" size={iconSize}/>, name: "Firebase",body:  fireBody()},
        {icon: <RiNextjsFill className="transition-all" size={iconSize}/>, name: "Next.js", body: nextBody()},
        {icon: <RiTailwindCssFill className="transition-all" size={iconSize}/>, name: "Tailwind CSS", body: tailwindBody()},
        {icon: <FaGitAlt className="transition-all" size={iconSize}/>, name: "Git", body: gitBody()},
        {icon: <SiExpress className="transition-all" size={iconSize}/>, name: "Express", body: expressBody() },
        {icon: <DiPostgresql className="transition-all -translate-x-2" size={iconSize*1.4}/>, name: "PostgreSQL", body: postgresBody()},
        {icon: <SiPrisma className="transition-all" size={iconSize}/>, name: "Prisma", body: "Prismabody"},
    ]
    return (
        <div className="container max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
            {techAccordianItems.map((tech,i) => {
                return (                                      
                    <AccordionItem  key={tech.name+i} value={"item-"+i}>
                        <AccordionTrigger className="text-2xl font-thin">
                            {tech.icon}{tech.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-lg font-light">
                            {tech.body}
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
            </Accordion>
        </div>
    )
}

export async function PlatformAccordian(params) {
    
    const platformAccordianItems = [
        {icon: <SiVercel className="transition-all" size={iconSize}/>, name: "Vercel", body: "Body"},
        {icon: <SiNetlify   className="transition-all" size={iconSize}/>, name: "Netlify", body: "Body"},
        {icon: <SiFirebase  className="transition-all" size={iconSize}/>, name: "Firebase", body: "Body"},
        {icon: <SiRender    className="transition-all" size={iconSize}/>, name: "Render", body: "Body"},
        {icon: <SiHeroku  className="transition-all" size={iconSize}/>, name: "Herkoku", body: "Body"},
        {icon: <SiWordpress   className="transition-all" size={iconSize}/>, name: "Wordpress", body: "Body"},
    ]

    return (
        <div className="container max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
            {platformAccordianItems.map((plat,index) => {
                return (                                      
                    <AccordionItem  key={plat.name+index} value={"item-"+index}>
                        <AccordionTrigger className="text-2xl font-thin">
                            {plat.icon}{plat.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-lg font-light">
                            {plat.body}
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
            </Accordion>
        </div>
    )
}


/* 
THE WRITE UPS FOR EACH SECTION BELOW. (along with a "star" helper function for 'how well know')
*/

const htmlBody = () => (
<div>
    {stars(4.5)}
    <p>
        HTML, where it all began. When I was 14 a friend found a website called HTML Primers that was just an amazing resource on the web
        (back when most &quot;structuring&quot; was doing with tables! I don&apos;t think &quot;div&quot; even existed yet).
    </p>
    <p>
        I now am at a good level of knowledge with HTML, and use good fundementals when it comes to semantic html, leveraging the proper tags
        and giving a website a solid structure of mains, sections and articles before going to down with divs. 
    </p>
</div>
)
const jsBody = () => (
<div>
    {stars(4.5)}
    Oh JS, my first love. Back in high school once I had ingested HTML primer, 
    I started addeding all sorts of easter eggs and annoying things to my websites. Ohhh Javascript.
</div>
)
const cssBody = () => (
<div>
    {stars(1)}
    Friggin CSS. One star. I&apos;m terrible at it, always have been. Still out here struggling to center a div. And I&apos;ve tried everything!
    CSS-in-JS, modules, styles components, you name it. But then, just when all home was lost... well, see below (TailwindCSS).
</div>
)
const reactBody = () => (
<div>
    {stars(5)}
    <p>
        I love react for a very specific reason. When I first started learning it, I think it was a bit of a doozy. There were class components
        and functional components. Stateful components or &quot;dummy&quot; components. A lot of this.that = this.that and binding, and render return.
    </p>
    <p>
        It kinda felt awesome and dumb at the same time. And a lot of it felt like it could be so much more &quot;functional&quot;. And I mean, literally,
        just more functions. And I kinda did that on my own, bending the system to my way of just using functions and functions that take functions and
        return functions.
    </p>
    <p>
        And then, I kinda gave up coding for a while. But I kept reading about the updates. Hearing about hooks, reading about them, and going, &quot;
        hey, that&apos;s basically what I was doing&quot;. Then coming back to react, just as the Context API was rolling out so I could also say goodbye
        to Redux (you&apos;ll notice it&apos;s not on this list).
    </p>

</div>
)
const nodeBody = () => (
<div>
    {stars(3.5)}
    Node.js, the beast that brought js off the browser. I don&apos;t know node as well as I&apos;d like to, as there are I'm sure
    countless cool features I have yet to discover or learn. However, I do know js very well, so where a lot of developers might
    lean on bash to write a quick script, or test a small function, I will fire up a terminal and type in &apos;node&apos; and go!
</div>
)
const nextBody = () => (
<div>
    {stars(4.5)}
    I was late to adopt Next.js. I didn&apos;t have much concern for SSR and SEO. It seemed to me at the time, that making something,
    either you want to make it interactive, or you want to optimize for search. Why would you try to combine the two? However, I slowly
    learned all of the advantages of the metaframework, and began to build projects with it (this website for example).<br/>
    But now, being an early adopter of the new paradigm of Next 13 and onward, I feel very strong in my Next abilities.
</div>
)
const tailwindBody = () => (
<div>
    {stars(5)}
    Tailwind is one of those things you will hear 1000 times, &quot;once you try it, you will never go back&quot;. But I scoffed. I said I would
    never be one of those people. I hated the ugly, verbose, at times, cryptic nature of it. I wanted nothing to do with it.<br/>
    However, CSS has been a nearly life long struggle for me. Semantic CSS, BEM, styled components, no matter the approach, as projects 
    got larger, the CSS always became increasingly unmanagable.<br/>
    Until I finally gave in and tried TailwindCSS.<br/>
    Within an hour I was understanding why people loved it, and I was immediately in love. Tailwind has been at the heart of my styling
    strategy ever since.
</div>
)
const gitBody = () => (
<div>
    I learned the basics of git a long time ago, and for a long time used it for nothing more than cloning, forking, basic tracking (the
    classic amateur git add . && git commit -m "beign message" && git push, that accomplishes almost nothing). But then I started to push 
    myself to branch out a little bit, pun intended! For the past while, I've been getting into the practice of using branches to organize
    the work being done on a project. Previously, I'd be haphazardly making changes to 10 different files for 20 different reasons and 
    making commits with messages like, "have no clue, forgot what I&apos;m even doing". Also, learning the hard way, several times over
    many years to make many small commits along the way. Save scumming if you will. Shameful perhaps in some gaming circles, but a life 
    saver in the development world.
</div>
)
const expressBody = () => (
<div>
    {stars(4)}
    Express is another one that holds a special place in my heart, again because of the fear of ever daunting <i>backend</i>.
    I had several beginner and a few intermediate projects under my belt, before I realize this <i>was</i> backend! I was doing it!    
</div>
)
const postgresBody = () => (
<div>    
    {stars(2.5)}
    <span>
        One of the newer things I&apos;ve learned, ironically it being the oldest. And I&apos;m certain I&apos;m at the Duning Kruger
        phase of learning, hence the low rating, because although I feel very comfortable and have worked my way around with it,
        I know there&apos;s a depth I&apos;ve yet to experience. I&apos;m looking forward to future opprotunities to expand my skills here!
        I&apos;m finally coming to see the wisdom of relational databases (oops forgot I had this line here, work this in earlier.
    </span>
</div>)
const fireBody = () => (<div>
    {stars(5)}    
    <p>
        Firebase just clicks for me. But Firebase also fueled my imposter syndrome longer than I needed.
        Here I was, making apps, but it felt like I was cheating. I felt like I didn&apos;t know auth, I didn&apos;t know databases,
        I didn&apos;t know how to &quot;structure&quot; anything, I didn&apos;t know if anything I was doing was &quot;front end&quot; or &quot;back end&quot;. It just felt
        like a cool system where you could apply JS to make things work the way you wanted.
    </p>

    <p>
        And, granted, at the time I didn&apos;t know a lot, but I couldn&apos;t see the forest for the trees.
        I didn&apos;t see that I was learning, and that
        I could credibly call myself a &quot;full stack developer&quot; even if I didn&apos;t know Kubernetes.
    </p>

    <p>
        Sometimes the stack doesn&apos;t matter if the project kicks the trick.
    </p>
</div>)

const stars = (numOfStars = 1) => (
    <div className="flex">
    {Array.from({ length: numOfStars }, (_, i) => (
        <MdOutlineStar key={"fullstar"+i} />
    ))}
    {numOfStars%1===0 ? "" : <MdOutlineStarHalf />}
    {Array.from({ length: 5-numOfStars }, (_, i) => (
        <MdOutlineStarBorder key={"emptystar"+i} />
    ))}
    </div>
)