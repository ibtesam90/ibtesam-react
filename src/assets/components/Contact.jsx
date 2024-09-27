import React from "react";

function Contact(){
    return (
        <>
            <h2 className="mt-5">Contact</h2>

            <div className="mt-5">
                <address>
                    Lahore Development Authority,<br />
                    Khayaban-e-Firdousi, Johar Town, Lahore <br />
                    Mobile No.: +92-325-8122184 <br />
                </address>
            </div>
            <div class="d-flex justify-content-start align-items-center">
                <a href="https://www.facebook.com/XXai1n" class="text-decoration-none mx-2" target="_blank">
                    <i class="fab fa-facebook fa-2x" style={{ color: 'darkblue' }}></i>
                </a>
                <a href="mailto:muhammadibtesam@yahoo.com" class="text-decoration-none mx-2">
                    <i class="fas fa-envelope fa-2x" style={{ color: 'darkblue' }}></i>
                </a>
                <a href="https://www.instagram.com/your-instagram-id" class="text-decoration-none mx-2" target="_blank">
                    <i class="fab fa-instagram fa-2x" style={{ color: 'darkblue' }}></i>
                </a>
                <a href="https://github.com/ibtesam90" className="text-decoration-none mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x" style={{ color: 'darkblue' }}></i>
                </a>
            </div>
        </>
    )
}

export default Contact;