import React, { useContext } from 'react';
import { ImageOptionsContext } from './ImageOptionsContext';

const MyComponent = () => {
    const context = React.useContext(ImageOptionsContext);

    return (
        <div>
            {context.name}   
        </div>
    );
}

export default MyComponent;
