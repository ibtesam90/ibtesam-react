import React from "react";

function Home(){

    return (
        <div class="container px-2 py-3 text-center col-12">
            <h1 class="display-5 fw-bold title">Dr. Muhammad Ibtesam</h1>
            <div>
                <img src="" alt="" />
              <img class="d-block mx-auto mb-4" src="../../public/images/ibtesam.jpg" alt="" width="150" height="150" style={{borderRadius: "50%", border:"7px solid teal"}}/>
            </div>
            <div class=" mx-">
                <p class="lead mb-4" style={{textAlign: "justify"}}>Dr. Muhammad Ibtesam did his B.Sc in Electrical Engineering from University of Engineering and Techonology, Taxila, Pakistan in 2011. After completion of his bachelor's study, he joined Prime Telecommunications Engineering Services (Pvt.) Ltd. as BSS Engineer. He moved on to next job in Jan '13 as a Project Coordinator in Hyquip Sources and Services Pvt. Ltd., Lahore. From November 2013, he joined Lahore Development Authority (LDA) as an Assistant Director in General Cadre. He worked in different department in LDA.</p>
                <p class="lead mb-4" style={{textAlign: "justify"}}>He is a technology enthusiast and learns different technologies. His craving to learn new things led him learning the web development using SERN stack. The current website is also a pet project in learning to write different static React websites.
                    Further, projects can be seen on his github page, which can be visited from the Contact page.
                </p>
                <p class="lead mb-4" style={{textAlign: "justify"}}>In year 2017, He won a <b>scholarship</b> titled <b style={{color:"goldenrod"}}>Human Resource Development Initiative for UESTPs</b> worth approx. <b>USD 80,000</b> for MS leading to PhD. Under the scholarship, he got admission in the <b style={{color:"goldenrod"}}>Hanyang University, South Korea (ERICA Campus)</b> in Department of Computer Science and Engineering. He joined the Multimedia Systems Lab under the supervision of Dr. Sungju Park. Where he was successful in publishing 7 papers
                    , out of which 2 were published in IEEE Transactions as first author. Details of the publications can be seen <a href="/publications" style={{textDecoration:"none"}}>here.</a></p>
                
                <p class="lead mb-4" style={{textAlign: "justify"}}>His primary focus during the research was to develop the efficient testing mechanism for the AI accelerators. He was able to significantly reduce the test time, 
                    test power and peak test power for the systolic AI accelerators. The reduced peak test power further enhanced the reliability of the tests conducted.
                </p>
            </div>
            
          </div>
    )
}

export default Home;