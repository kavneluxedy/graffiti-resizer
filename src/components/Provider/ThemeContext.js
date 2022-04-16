import React from 'react';

export default React.createContext({
    theme: "",
    updateTheme: (name) => {console.log(name)}
});
