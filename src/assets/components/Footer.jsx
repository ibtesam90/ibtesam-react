import React from "react";


function Footer(){

    return (
    <div class="container" style={{background: "radial-gradient(circle at 85.4% 50.8%, rgb(14, 72, 222) 0%, rgb(3, 22, 65) 74.2%)"}}>
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center pb-5 mb-">
            <li class="nav-item"><a href="/" class="nav-link px-2 text-white">Introduction</a></li>
            <li class="nav-item"><a href="/education" class="nav-link px-2 text-white">Education</a></li>
            <li class="nav-item"><a href="/publications" class="nav-link px-2 text-white">Publications</a></li>
            <li class="nav-item"><a href="/experience" class="nav-link px-2 text-white">Experience</a></li>
            <li class="nav-item"><a href="/projects" class="nav-link px-2 text-white">Projects</a></li>
            <li class="nav-item"><a href="/contact" class="nav-link px-2 text-white">Contact</a></li>
          </ul>
        </footer>
      </div>
    )
}

export default Footer