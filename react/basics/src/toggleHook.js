import { useCallback } from "react";
import { useState } from "react";

export default function usetoggle(initial = false){
    let [value , setVal] = useState(initial);

    let toggle = useCallback(() => {
        setVal((value) => !value)
    },[])

    return [value , toggle]
}