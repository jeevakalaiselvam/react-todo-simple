import "./Section.css";
import React from "react";

const Section = (props) => {
    const flexDirection = props.flex;
    //const randomColor = getRandomColor();
    const classes = "section " + props.className;
    return (
        <div
            className={classes}
            style={{
                flexDirection: flexDirection,
            }}
        >
            {props.children}
        </div>
    );
};

// function getRandomColor() {
//     var letters = "0123456789ABCDEF";
//     var color = "#";
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

export default Section;
