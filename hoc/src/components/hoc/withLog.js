import React from "react";

// const withLog = BaseComponent => {
//     return function (props) {
//         console.log("props :", props);
//         return (
//             <div>
//                 <BaseComponent {...props} />
//             </div>
//         );
//     };
// };

const withLog = BaseComponent => (props) => {
    console.log(`${BaseComponent.name} props:`, props);
    return <BaseComponent {...props} />
};
export default withLog;


