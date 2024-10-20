
const About = () => {
  return (
    <section className="text-white md:h-fit">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-6 text-center text-[#0a6335]">About Me</h2>

        {/* Introduction */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0a6335] mb-2 border-b-[1px] inline-block">A Passionate Front-End Developer</h3>
          <p className="text-sm  text-zinc-400">
          I am a passionate front-end developer with a solid foundation in HTML, CSS, JavaScript, and TypeScript. I enjoy creating responsive, user-friendly web applications that focus on clean design and seamless functionality. As someone who is always eager to learn and grow, I am currently expanding my skill set by learning React.js and Next.js to enhance my ability to build modern, high-performance web solutions.
          </p>
          </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0a6335] mt-2 border-b-[1px] inline-block">Current Studies</h3>
          <p className="text-sm mt-2  text-zinc-400">
          I am currently in the second quarter of an Artificial Intelligence course, having successfully cleared the first quarter with a 95 percentile. My journey continues as I enhance my skills in both AI and front-end developmen

          </p>
        </div>
        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0a6335] mt-2 border-b-[1px] inline-block">Future Goals</h3>
          <p className="text-sm mt-2  text-zinc-400 mb-5">
          As I continue to master modern web development technologies, my goal is to work on more complex, scalable projects. I am excited to explore new opportunities where I can merge my front-end expertise with my growing knowledge in Artificial Intelligence, contributing to innovative and impactful solutions.
          </p>
        </div>
    
      </div>
    </section>
  );
};

export default About;
