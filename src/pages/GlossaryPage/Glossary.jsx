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
        <div>
            <GlossaryDefinition definitions={GDefShow} />
            <svg className="glossary"width="693" height="816" viewBox="0 0 693 816" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M693 443.78C693 670.587 549.079 816 357.712 816C166.345 816 0 670.587 0 443.78C0 216.973 187.701 0 379.068 0C570.434 0 693 216.973 693 443.78Z" fill="#F2CF66"/>
            </svg>
            <ul className="glossarydefinitions">
                <li><Button variant="link" onClick={() => handleLessonClick('Browser')}>Browser</Button></li>
                <li><Button variant="link" onClick={() => handleLessonClick('URL')}>URL</Button></li>
                <li><Button variant="link" onClick={() => handleLessonClick('Hyperlink')}>Hyperlink</Button></li>
                <li><Button variant="link" onClick={() => handleLessonClick('SearchEngine')}>Search Engine</Button></li>
            </ul>
            
        </div>
    )
}

export default Glossary