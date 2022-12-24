import { Fragment } from 'react'
import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout(props) {
    return <Fragment>
        <MainNavigation />
        <main className={classes.main}>
            <Outlet />
        </main>
        <Footer />
    </Fragment>
}

export default Layout