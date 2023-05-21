//Import modules
import { useState } from 'react'
import GlossaryDefinition from '../../components/GlossaryComponent/GlossaryDefinition'
import Button from 'react-bootstrap/Button';

// Import CSS
import './Glossary.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Glossary = () => {

    // To make definitions pop up when clicked
    const [GDefShow, setGDefShow] = useState("");

    function handleLessonClick(name) {
        setGDefShow(name)
    }

    return (
        <div>
            <div className="glossary-container">
                <ul className="glossary-list">
                    <h1>Glossary</h1>
                    <li><Button variant="link" onClick={() => handleLessonClick('Browser')}>Browser</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('URL')}>URL</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('Hyperlink')}>Hyperlink</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('Search Engine')}>Search Engine</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('Software')}>Software</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('Program')}>Program</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('Website')}>Website</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('Tabs')}>Tabs</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('Bookmarks')}>Bookmarks</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('Back Button')}>Back Button</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('Forward Button')}>Forward Button</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('Refresh')}>Refresh</Button></li>
                    <li><Button variant="link" onClick={() => handleLessonClick('History')}>History</Button></li>
                </ul>
                <GlossaryDefinition definitions={GDefShow} />
                <svg className="glossary-definition" width="693" height="600" viewBox="0 0 693 816" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M693 443.78C693 670.587 549.079 816 357.712 816C166.345 816 0 670.587 0 443.78C0 216.973 187.701 0 379.068 0C570.434 0 693 216.973 693 443.78Z" fill="#F2CF66" />
                </svg>
            </div>
        </div>
    )
}

export default Glossary