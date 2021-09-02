import React, { useState } from 'react'
import PropTypes from "prop-types";


export const AddCategory = ({ setCategories }) => {

    const [InputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubit = (e) => {
        e.preventDefault();

        if (InputValue.trim().length > 2) {
            setCategories(cats => [InputValue,...cats]);
            setInputValue("");
        }
    }
    return (
        <form onSubmit={handleSubit} >
            <input
                type="text"
                value={InputValue}
                onChange={handleInputChange}

            />
        </form>
    )
}


AddCategory.protoType = {
    setCategories: PropTypes.func.isRequired
}