import React from "react";
import withLog from '../hoc/withLog';
import passProps from "../hoc/passProps";
import withToggle from "../hoc/withToggle";

const data = {
    title: "Laptop",
    http:
        "https://image.shutterstock.com/image-illustration/modern-laptop-clipping-path-screen-260nw-98896718.jpg",
    description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quo!",
    price: "25$"
};

const Card = (props) => {
    const { title, description, http, price } = props;
    return (
        <div
            style={{
                width: "250px",
                border: "3px solid black",
                padding: "5px"
            }}
        >
            <h2>{title}</h2>
            <img style={{ width: "100%" }} src={http} alt="img" />
            <p>{description}</p>
            <p style={{ fontWeight: "800" }}>{price}</p>
        </div>
    );
};

export default withToggle(data)(Card);
