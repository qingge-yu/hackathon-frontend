import './AboutPage.css'

export default function AboutPage() {
    return (
        <div className='aboutPage'>
            <h1><b>What is </b>navigat<b style={{ color: "#3476EF" }}>edu</b>?</h1>
            <svg className="aboutBG" width="1120" height="688" viewBox="0 0 1120 688" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1120 500C1120 785.255 854.755 1094 569.5 1094C284.245 1094 0 785.255 0 500C0 214.745 284.245 0 569.5 0C854.755 0 1120 214.745 1120 500Z" fill="#F2CF66" />
            </svg>
            <p>NavigatEDU is your guide to discovering the digital world with confidence. Join us on this exciting journey as we equip you with the knowledge and tools to thrive in the digital age.</p>
        </div>
    )
}