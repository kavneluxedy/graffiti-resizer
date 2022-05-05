import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Output = () => {
    const { src } = useOutletContext()

    return (
        <div>
            <img
            src={src}
            className="finalImg"
            />
        </div>
    );
}

export default Output;