import ProjectCardComponent from "@/app/components/projectCard"


const Project = () => {
  
  const CardsProjects = [
    {
        src: "/governorweb.JPG",
        detail: "The Governor House Initiative website is developed using Next.js and Tailwind CSS",
        h3: "Governor Initiative Web",
        link: "https://governorsindh-one.vercel.app/"
    },
    {
        src: "/organicplantweb.JPG",
        detail: "The Organic Plant website is crafted using Next.js and fully custom CSS",
        h3: "Organic Plants",
        link: "https://organicplants.vercel.app/"
    },
    {
        src: "/todoApp.JPG",
        detail: "A TodoList app built with React to efficiently manage tasks using add and delete features",
        h3: "TodoList App",
        link: "https://mini-projects-neon.vercel.app/"
    },
    {
        src: "/countdownTimer.JPG",
        detail: "Built a Countdown Timer app with Next.js and styled using Tailwind CSS for a responsive design",
        h3: "CountDown Timer",
        link: "https://countdowntimer-six.vercel.app/"
    },
    {
        src: "/website-01.JPG",
        detail: "Created a static website using HTML, CSS, and JavaScript for a clean and responsive design.",
        h3: "Website 01",
        link: "https://ssengineering.vercel.app/"
    },
    {
        src: "/resultApp.JPG",
        detail: "Built a Student Result app with Next.js for efficient result display and management",
        h3: "Student Result",
        link: "https://result-giaic.vercel.app/"
    },
    {
        src: "/resumebuilder.JPG",
        detail: "A Simple Resume Builder App By Shahroz",
        h3: "Resume Builder App",
        link: "https://milestone05-flame.vercel.app/"
    },
    {
        src: "/timerApp-02.JPG",
        detail: "Developed a simple Timer app using HTML, CSS,and TypeScript for basic time tracking.",
        h3: "CountDown Timer",
        link: "https://count-down-timer-taupe.vercel.app/"
    },
    {
        src: "/resultapp002.JPG",
        detail: "A Simple Result App For Giaic Q2 Students.",
        h3: "Result App Giaic Q2",
        link: "https://result-app-coral.vercel.app/"
    },
    {
        src: "/portfolio.JPG",
        detail: "This Is My First Portfolio Website Built With HTML,CSS & JavaScript",
        h3: "PortFolio 1st Website",
        link: "https://portfolioweb01.vercel.app/"
    },
    {
        src: "/portfolio-02.JPG",
        detail: "This Is My 2nd Portfolio Website Built With NextJS,Tailwind & TypeScript",
        h3: "PortFolio 2nd Website",
        link: "https://portfolioweb02.vercel.app/"
    },
    {
        src: "/portfolio",
        detail: "This Is My 2nd Portfolio Website Built With NextJS,Tailwind & TypeScript",
        h3: "PortFolio 2nd Website",
        link: "https://portfolioweb02.vercel.app/"
    },
];
  return (
    <>

        <h2 className="text-4xl font-semibold mb-6 text-center text-[#0a6335]">Projects</h2>
      
        <div className="mt-4 flex justify-center md:justify-center items-center flex-wrap md:overflow-y-scroll md:h-80 p-5">
        {CardsProjects.map((elem,i)=><ProjectCardComponent key={i} Project={elem}/>)}
        </div>


      
    </>
  )
}

export default Project



