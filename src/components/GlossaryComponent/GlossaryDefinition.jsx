import "./GlossaryDefinition.css"

const GlossaryDefinition = (props) => {
    let Gdefinitions = {
        Browser: "A software Program that lets you view digital content on the internet.",
        URL: 'The address that identifies a webpage on the internet. It usually starts with "http://" or "https://" followed by the domain name and specific page.',
        Hyperlink: "A clickable link on a webpage that redirects users to another webpage or resource when clicked.",
        "Search Engine": "A clickable link on a webpage that redirects users to another webpage or resource when clicked.",
        Software: "The programs, applications, and other operating information used by a computer.",
        Program: "A series of coded software instructions to control the operation of a computer or other machine. Sometimes also referred to as an application.",
        Website: "A collection of webpages and related content accessible through a specific domain or URL.",
        Tabs: "A second or further document or page that can be opened on your web browser.",
        Bookmarks: 'A method of saving the address of a web page. Sometimes they are referred to as “favorites".',
        "Back Button": "A common web browser feature that navigates to the previous web page you were on.",
        "Forward Button": "",
        Refresh: "",
        History: "",
    }

    return (
        <div className="glossary-component">
            <h1>{props.definitions}</h1>
            <p>{Gdefinitions[props.definitions]}</p>
        </div>
    )

}

export default GlossaryDefinition