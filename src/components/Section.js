import "./Section.css";
import React from "react";

/**
 * @author Jeeva Kalaiselvam
 * @param {Object} props Props containing necessary configuration element for Section component. Most important configuration is flex direction.
 * @returns HTML element representing a logical section that can contain one or more components.
 */
const Section = (props) => {
    const flexDirection = props.flex;
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

export default Section;
