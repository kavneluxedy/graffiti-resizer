import React from 'react';
import useResize from '../hooks/useResize';

const GegeFileInput = () => {

    const {setFile,setWidth,setHeight,modifiedImg,loading,error} =  useResize();
    
    return (
        <div>
            <input onChange={(e) => setWidth(e.currentTarget.value)} type="text"/>
            <input onChange={(e) => setHeight(e.currentTarget.value)} type="text"/>
            <input onChange={(e) => setFile(e.target.files[0])} type="file" />
            { loading && <span>Loading</span>}
            { error && <span>Error</span>}
            { modifiedImg && <img src={modifiedImg}/>}
        </div>
    );
};

export default GegeFileInput;