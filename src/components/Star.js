import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star({selected = false, onSelect = f => f}) {
    return <FaStar
        color={selected ? "yellow" : "gray"}
        onClick={onSelect} 
        size={60}
        className={selected ? "star selected" : "star"}
        aria-hidden="true"
    />;
}

export default Star;