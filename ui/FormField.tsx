"use client";

import React, { useState } from "react";

const FormField = ({
    label,
    placeholder,
}: {
    label: string;
    placeholder: string;
}) => {
    const [labelFocus, setLabelFocus] = useState(false);

    const handleLabelFocus = () => {
        if (document.getElementById("input")?.onclick) {
            return setLabelFocus(true);
        }
        return setLabelFocus(false);
    };

    return (
        <div className="flex flex-col gap-y-2">
            <label
                htmlFor=""
                className={`${labelFocus
                    ? "translate-y-0 translate-x-0"
                    : "translate-y-9 translate-x-4"} 
                text-sm font-medium transition-all duration-300 transform select-text
                w-20`}
            >
                {label}
            </label>
            <input
                id="input"
                type="password"
                onClick={handleLabelFocus}
                className={`${labelFocus ? "" : ""}
                border border-slate-400 placeholder:text-white
                outline-none rounded-md py-2 px-4 text-start
                focus:border-primary text-sm font-medium`}
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormField;
