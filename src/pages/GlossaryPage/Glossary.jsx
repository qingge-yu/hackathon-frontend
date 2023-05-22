//Import modules
import { useState } from 'react'
import { Link } from 'react-router-dom'
import GlossaryDefinition from '../../components/GlossaryComponent/GlossaryDefinition'
import GlossaryDefault from '../../components/GlossaryDefault/GlossaryDefault'
import Button from 'react-bootstrap/Button';

// Import CSS
import './Glossary.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'd
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Glossary = () => {

    // To make definitions pop up when clicked
    const [GDefShow, setGDefShow] = useState("");
    const [selectedButton, setSelectedButton] = useState(null)
    const [searchInput, setSearchInput] = useState("")

    function handleLessonClick(name) {
        setGDefShow(name)
    }

    const handleButtonClick = (buttonText) => {
        setSelectedButton(buttonText)
    }

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    // }

    const items = [
        {
            id: 0,
            name: 'browser'
        },
        {
            id: 1,
            name: 'url'
        },
        {
            id: 2,
            name: 'search engine'
        },
        {
            id: 3,
            name: 'software'
        },
        {
            id: 4,
            name: 'program',
        },
        {
            id: 5,
            name: 'website'
        },
        {
            id: 6,
            name: 'tabs'
        },
        {
            id: 7,
            name: 'bookmark'
        },
        {
            id: 8,
            name: 'back button'
        },
        {
            id: 9,
            name: 'forward button'
        },
        {
            id: 10,
            name: 'refresh'
        },
        {
            id: 11,
            name: 'history'
        },
        {
            id: 12,
            name: 'hyperlink'
        }
    ]

    const handleOnSearch = (string, results) => {
        setSearchInput(results)
    }


    return (
        <div className="glossary-container">
            <p className="directoryPath">
                <Link to="/" className="homeLink">Home</Link> / Glossary
            </p>
            <div className="glossary-left">
                <ul className="glossary-list">
                    <div className="searchBar">
                        <h2>Glossary</h2>
                        {/* <span><FontAwesomeIcon className="fab fa-react fa-1x" style={{ color: 'black' }} icon={faMagnifyingGlass} /></span> */}
                        {/* <input
                            className='glossaryInput'
                            type="search"
                            placeholder='Search'
                            onChange={handleChange}
                            value={searchInput} /> */}
                        <div style={{ width: 200, marginLeft: '2rem' }}>
                            <ReactSearchAutocomplete
                                items={items}
                                onSearch={handleOnSearch}
                                value={searchInput}
                            />
                        </div>
                    </div>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Browser' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Browser'); handleButtonClick('Browser') }}
                    >Browser</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'URL' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('URL'); handleButtonClick('URL') }}
                    >URL</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Hyperlink' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Hyperlink'); handleButtonClick('Hyperlink') }}
                    >Hyperlink</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Search Engine' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Search Engine'); handleButtonClick('Search Engine') }}
                    >Search Engine</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Software' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Software'); handleButtonClick('Software') }}
                    >Software</Button></li>
                    <li className="gItem" ><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Program' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Program'); handleButtonClick('Program') }}
                    >Program</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Website' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Website'); handleButtonClick('Website') }}
                    >Website</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Tabs' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Tabs'); handleButtonClick('Tabs') }}
                    >Tabs</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Bookmarks' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Bookmarks'); handleButtonClick('Bookmarks') }}
                    >Bookmarks</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Back Button' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Back Button'); handleButtonClick('Back Button') }}
                    >Back Button</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Forward Button' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Forward Button'); handleButtonClick('Forward Button') }}
                    >Forward Button</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'Refresh' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('Refresh'); handleButtonClick('Refresh') }}
                    >Refresh</Button></li>
                    <li className="gItem"><Button variant="link"
                        style={{ fontWeight: selectedButton === 'History' ? 'bold' : 'normal' }}
                        onClick={() => { handleLessonClick('History'); handleButtonClick('History') }}
                    >History</Button></li>
                </ul>
            </div>
            {GDefShow ? <GlossaryDefinition definitions={GDefShow} /> : <GlossaryDefault />}
        </div>
    )
}

export default Glossary