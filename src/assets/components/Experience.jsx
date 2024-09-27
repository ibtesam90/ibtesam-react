import React from "react";
import ExperienceCard from "./ExperienceCard";
import data from "../data/experience.json"

function Experiences(){
    return (
        <>
            <h2 className="mt-5">Experience</h2>
            <div className="">
                <div className="row justify-content-center">
                    {data.map(experience => (
                        <ExperienceCard detail={experience} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Experiences