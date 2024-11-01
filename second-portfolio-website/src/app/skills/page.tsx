import Card from "../components/card";

const cardImages = [
  { src: "/html.png" ,
    h3:"HTML",
    percentage:"90%",
    detail:" HTML:The standard markup language used to structure web content"},

  { src: "/css.png" ,h3:"CSS",percentage:"85%",detail:" CSS:A stylesheet language used to style the appearance of web pages." },
  { src: "/java.png",h3:"JavaScript",percentage:"70%",detail:" JavaScript:A dynamic programming language that adds interactivity to websites." },
  { src: "/tailwind.png",h3:"Tailwind CSS",percentage:"70%",detail:"Tailwind CSS:A utility-first CSS framework for building custom designs quickly with pre-built classes."},
  { src: "/typescript.png",h3:"TypeScript",percentage:"75%",detail:" TypeScript:A strongly typed superset of JavaScript that enhances code scalability."},
  { src: "/reactjs.png",h3:"ReactJS",percentage:"65%",detail:" React:A JavaScript library for building user interfaces with reusable components"},
  { src: "/nextjs.png",h3:"NextJS",percentage:"70%",detail:"Next.js:A React framework for building optimized, server-side rendered web applications."},
  { src: "/figma.png",h3:"Figma",percentage:"60%",detail:"Figma is a cloud-based design tool that enables UI/UX designers to collaborate on design and prototyping"},
  { src: "/nodejs.png",h3:"Node JS",percentage:"60%",detail:"Node.js is a server-side JavaScript runtime that enables building scalable web applications"},

];

const Skills = () => {
  

  return (
    <div>

      <h2 className="text-4xl font-semibold mb-6 text-center text-[#0a6335]">Skills</h2>
    <div className="mt-4 flex justify-center md:justify-around items-center flex-wrap md:overflow-y-scroll md:h-80 p-5">
    {cardImages.map((elem,i)=><Card key={i} Card={elem}/>)}
    </div>

    </div>
  );
};

export default Skills;
