import "./GlossaryDefault.css"

import defaultImg from "../../images/Browser.png"

export default function GlossaryDefault() {
    return (
        <div className="glossary-component">
            <h1 className="glossaryDefaultText">Click a term on the left for a definition.</h1>
            <img src={defaultImg} alt="background img" className="glossaryBG" />
        </div>
    )
}