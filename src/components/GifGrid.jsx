import React from "react";
// import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
    // const [counter, setCounter] = useState(0);
    // const [images, setImages] = useState([]);

    const { data: images, loading } = useFetchGifs(category);
    // console.log(loading);

    // useEffect(() => {
    //     getGifs(category).then((imgs) => setImages(imgs));
    // }, [category]);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <h2>Cargando...</h2>}
            <div className="grid">
                {/* {counter} */}
                {/* {/* <button onClick={() => setCounter(counter + 1)}>Counter</button> */}

                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};

export default GifGrid;
