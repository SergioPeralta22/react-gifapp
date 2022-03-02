import React from "react";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiffExpertApp = () => {
    // const categories = ["One punch ", "Samurai X", "Dragon Ball Z"];

    const [categories, setCategories] = useState([""]);

    // const handleAddCategory = () => {
    //     //?recuerda que para agregar nuevos elementos a un arreglo existente usar spread!
    //     // setCategories([...categories, "Evangelion"]);
    //     //? ademas se puede usar un callback.

    //     setCategories((cats) => [...cats, "Pokemon"]);

    //     //! El nuevo estado es un arreglo con todos los valores anteriores mas el que le estoy agregando.Por eso el SPREAD
    // };

    return (
        <div>
            <h1> GiffExpertApp </h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {/* {categories.map((category, i) => {
                    return <li key={i}>{category}</li>;
                })} */}
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </div>
    );
};

export default GiffExpertApp;
