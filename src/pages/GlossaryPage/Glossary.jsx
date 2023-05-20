//Import modules
import { useState } from 'react'
import GlossaryDefinition from '../../components/GlossaryComponent/GlossaryDefinition'
import Button from 'react-bootstrap/Button';

// Import CSS
import './Glossary.css'

const Glossary = () => {
    
    // To make definitions pop up when clicked
    const [GDefShow, setGDefShow] = useState("");

    function handleLessonClick(name) {
        setGDefShow(name)
    }

    return (
        <div className="glossary">
            <ul>
                <li><Button onClick={() => handleLessonClick('Browser')}>Browser</Button></li>
                <li><Button onClick={() => handleLessonClick('URL')}>URL</Button></li>
                <li><Button onClick={() => handleLessonClick('Hyperlink')}>Hyperlink</Button></li>
                <li><Button onClick={() => handleLessonClick('SearchEngine')}>Search Engine</Button></li>
            </ul>
            <GlossaryDefinition definitions={GDefShow} />
        </div>
    )
}

export default Glossary