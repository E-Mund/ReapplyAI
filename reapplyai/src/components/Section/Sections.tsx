import { useState } from "react";

import Button from "@/components/Button/Button";
import Section from "./Section";

import "./section.css";

const init = [<Section key={1}/>];

export default function Sections() {
    const [key, setKey] = useState(2);
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
          <Button name="+Add Section" onClick={addSection}/>
        </div>
    );
}