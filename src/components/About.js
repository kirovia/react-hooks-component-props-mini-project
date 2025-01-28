import React from "react"

function About(props) {
    return (
        <aside>
            <img src={props.image ? props.image : "https://via.placeholder.com/215Links to an external site."} alt="blog logo"></img>
            <p>{props.about}</p>
        </aside>
    )
}

export default About