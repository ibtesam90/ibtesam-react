import React from "react";

function ExperienceCard(props){

    const newLocal = props.detail['jobDescription'];
    return (
        <div className="col-12 col-md-6 col-lg-4 d-flex mt-5">
            <div className="card h-100">
                <div className="card-body">
                <h4 className="card-title">{props.detail['title']}</h4>
                <h5 className="card-subtitle mb-2 text-body-secondary">{props.detail['organization']}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.detail['startingDate']} - {props.detail['endDate']}</h6>
                <ul className="card-text">
                    {newLocal.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    )

}

export default ExperienceCard;