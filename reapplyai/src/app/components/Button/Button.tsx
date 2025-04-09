import React, { MouseEventHandler } from "react";

import "./button.css"

interface buttonProps {
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button(props: buttonProps) {
    return (
        <button className="button" onClick={props.onClick}>{props.name}</button>
    );
}