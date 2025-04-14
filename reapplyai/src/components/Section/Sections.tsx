import { useState } from "react";

import Button from "../Button/Button";
import Section from "./Section";

import "./section.css"

const init = [<Section key={1}/>, <Section key={2}/>, <Section key={3}/>];

export default function Sections() {
    const [key, setKey] = useState(4);
    const [sections, setSections] = useState(init);
    
    function addSection() {
        setSections([...sections, <Section key={key}/>]);
        setKey(key + 1);
    }

    return (
        <div>
            <div className="sections">
                <form action="">
                    {sections}
                </form>
            </div>
            <div className="buttons">
              <Button name="+Add Section" onClick={addSection}/>
              <Button name="Submit" onClick={() => console.log("Submitted!")}/>
            </div>
        </div>
    );
}