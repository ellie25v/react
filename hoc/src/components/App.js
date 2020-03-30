import React from "react";
import Card from "./card/Card";

const newData = {
    title: "Desktop",
    http:
        "https://image.shutterstock.com/image-illustration/modern-laptop-clipping-path-screen-260nw-98896718.jpg",
    description: "Lorem, ipsum dolor.",
    price: "250$"
};


const App = () => {
    return (
        <div>
            <Card newData={newData} />
        </div>

    )
};

export default App;
