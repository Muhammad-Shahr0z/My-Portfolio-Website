"use client"

import { useEffect, useState } from "react";


const page = () => {


    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{

      setIsLoaded(true)
    
    
      console.log("running");
  })
    

 
    return (



    <>
    
    {/* <!-- Skills Section Html code  --> */}
    <section id="skills">
      <h2>Skills</h2>

      <h5>HTML</h5>
      <div className="outer">
      <div className={`innerhtml ${isLoaded ? 'animateHtml' : ''}`}></div>
        <span>90%</span>
      </div>

      <h5>Css</h5>
    
      <div className="outer">
      <div className={`innercss ${isLoaded ? 'animateCss' : ''}`}></div>
        <span>80%</span>
      </div>

      <h5>JavaScript</h5>
      <div className="outer">
      <div className={`innerhtml ${isLoaded ? 'animateJavascript' : ''}`}></div>
        <span>75%</span>
      </div>

      <h5>Tailwind Css</h5>
      <div className="outer">
      <div className={`innertailwindcss ${isLoaded ? 'animatetailwind' : ''}`}></div>
        <span>80%</span>
      </div>

      <h5>ReactJS</h5>
      <div className="outer">
      <div className={`innerreactjs ${isLoaded ? 'animateReactjs' : ''}`}></div>
        <span>65%</span>
      </div>
     
      <h5>NextJs</h5>
      <div className="outer">
      <div className={`innernextjs ${isLoaded ? 'animateNextjs' : ''}`}></div>
        <span>65%</span>
      </div>

    </section>

    
    </>
  )
}

export default page