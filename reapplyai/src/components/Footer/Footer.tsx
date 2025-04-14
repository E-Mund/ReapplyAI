import "./footer.css"

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <Image src="/title.svg" alt="ReapplyAI" width="80" height="60" className="logo"/>
            </div>
        </footer>
    );
};