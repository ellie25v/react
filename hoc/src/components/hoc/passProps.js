import * as React from 'react';

const passProps = props => BaseComponent => {
    console.log(`${BaseComponent.name} props:`, props);
    return <BaseComponent {...props} />;
};

export default passProps;