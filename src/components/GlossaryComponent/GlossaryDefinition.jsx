import "./GlossaryDefinition.css"

const GlossaryDefinition = (props) => {
    let Gdefinitions={
        Browser: "A software Program that lets you view web pages on your computer.",
        URL: "Universal ",
        Hyperlink: "",
        SearchEngine: ""
    }

    return (
        <div className="glossary-component">
            <h1>{props.definitions}</h1>
            <p>{Gdefinitions[props.definitions]}</p>
        </div>
    )

}

export default GlossaryDefinition