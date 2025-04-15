import React, { MouseEventHandler } from "react";

import "./button.css"

interface buttonProps {
    name: string;
    type?: "submit" | "reset" | "button";
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button(props: buttonProps) {
    return (
        <button className="button" type={props.type} onClick={props.onClick}>
            {props.name}
        </button>
    );
}