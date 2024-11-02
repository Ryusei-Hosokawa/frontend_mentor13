import React from "react";
import { useState } from "react";

export default function useCartBox() {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => {
        setIsVisible((prev) => !prev);
    }
    
    return {
        isVisible,
        toggle,
    };
}
