import classes from './NotFound.module.css'
import NotFound_PageIcon from './../asset/svg/NotFound_PageIcon.svg'

function NotFound() {
    return <div className={`centered ${classes.notfound}`}>
        <img src={NotFound_PageIcon} alt='404 not found.' />
    </div>
}

export default NotFound