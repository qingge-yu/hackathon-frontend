import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <p>© 2023 navigatedu. All right reserved.</p>
            <div>
                <Link to='/privacy-policy' className="footerLink">Privacy Policy</Link>
                <Link to='/terms-of-service' className="footerLink">Terms of Service</Link>
            </div>
        </div>
    )
}