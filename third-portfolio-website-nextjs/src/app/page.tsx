const Home = () => {
  return (
    <div>
      {/* <!-- Home Section Html code  --> */}

      <section id="home">
        {/* <!-- Left Side Dive  --> */}
        <div className="leftDiv">
          <h3>Hello, It's Me</h3>
          <h1 className="mainHeading">
            <span>Muhammad </span>Shahroz
          </h1>
          <h4>And I'm a Frontend Developer</h4>

          <p>
            Passionate Front-End Developer skilled in crafting responsive and
            visually appealing websites. Dedicated to bringing creative ideas to
            life through clean code and innovative design.
          </p>

    
          <div className="links">
            <a className="downloadButton" href="shahrozsCv.pdf" download>
              Download CV
            </a>
          </div>
        </div>

        {/* <!-- Left Side Dive  --> */}
        <div className="rightDiv">
          <div className="profilePic">
            <img src="/images/shahrozpic.jpg" alt="IMAGE" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
