import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => { // promena velicine ekrana
            setWindowSize({ // setovanje 
                width: window.innerWidth, // prati(racuna) vrednost sirine ekrana
                height: window.innerHeight // prati(racuna) vrednost visine ekrana
            })
        }

        handleResize(); // poziva akciju

        window.addEventListener("resize", handleResize); // 
        
        // kada se aplikacija zatvori pokrenula bi funkciju čišćenja i uklonila taj slušalac događaja i zbog toga definisemo cleanUp funkciju ispod

        // const cleanUp = () => {
        //     //console.log('runs if a useEffect dep changes') // pokrece se 
            
        // }

        return () =>  window.removeEventListener("resize", handleResize); // umesto cleanUp funkcije
    }, []) // sprecava stalno ponavljanje vec se pokrece samo jednom

    return windowSize;
}

export default useWindowSize;