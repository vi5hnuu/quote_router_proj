import classes from './Footer.module.css'
import github_icon from './../../asset/images/github_icon.gif'
import instagram_icon from './../../asset/images/instagram_icon.gif'
import linkedin_icon from './../../asset/images/linkedin_icon.gif'
import twitter_icon from './../../asset/images/twitter_icon.gif'
import whatsapp_icon from './../../asset/images/whatsapp_icon.gif'

function Footer() {
    return <footer className={classes.footer}>
        <div className={classes.social}>
            <a href='https://github.com/vi5hnuu' target='_blank' rel='noreferrer'><img src={github_icon} alt='github link' /></a>
            <a href='https://www.linkedin.com/in/vi5hnukumar/' target='_blank' rel='noreferrer'><img src={linkedin_icon} alt='linkedin link' /></a>
            <a href='https://www.instagram.com/kvi5hnu/' target='_blank' rel='noreferrer'><img src={instagram_icon} alt='instagram link' /></a>
            <a href='https://twitter.com/vi5hnukumar' target='_blank' rel='noreferrer'><img src={twitter_icon} alt='twitter link' /></a>
            <a href='https://api.whatsapp.com/send?phone=+919785855892&text=Hello vishnu!' target='_blank' rel='noreferrer'><img src={whatsapp_icon} alt='whatsapp link' /></a>
        </div>
        <div className={classes.footer_links}>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Terms</a></li>
                <li><a href='#'>Privacy Policy</a></li>
            </ul>
        </div>
        <div className={classes.copyright}>
            <p>Future Coder &copy; 2023</p>
        </div>
    </footer>
}

export default Footer