import React from 'react';

export default React.createContext({
    chosenFormat: "",
    updateChosenFormat: (choice) => {console.log(choice)}
});
