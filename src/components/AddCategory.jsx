import React from "react";
import { useState } from "react";

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("Escribe aqui...");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = (e) => {
        setInputValue("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories((cats) => [inputValue, ...cats]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onClick={handleClick}
            />
        </form>
    );
};

export default AddCategory;
