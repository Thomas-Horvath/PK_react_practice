import { useState } from "react"
import Button from "../Button/Button";


function Count() {
    const [number, setNumber] = useState(0);

    const handleClick = () => {
        setNumber((previousState) => {
            // itt mindig csak ez előző érték érhető el!!! 
            // console.log(previousState, number)
            return previousState + 1
        });

    }
    return (
        <div>
            <h2>Count: {number}</h2>
            <Button children="Add 1" handleOnClick={handleClick} />
        </div>
    )
}

export default Count