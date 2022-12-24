import QuoteList from './../components/quotes/QuoteList'
import { useLocation, useNavigate } from 'react-router-dom'
import classes from './AllQuotes.module.css'
import { getAllQuotes } from '../lib/api'
import useHttp from '../hooks/use-http'
import { useEffect } from 'react'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from './../components/quotes/NoQuotesFound'




function AllQuote() {
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getAllQuotes)
    const navigate = useNavigate()
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const isSortingAsc = queryParams.get('sort') === 'asc'
    function changeSortingHandler() {
        navigate(
            {
                pathname: location.pathname,
                search: `?sort=${isSortingAsc ? 'desc' : 'asc'}`
            }
        )
    }
    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }
    if (error) {
        return <p className='centered focused'>{error}</p>
    }
    if (status === 'completed' && (!loadedQuote || loadedQuote.length === 0)) {
        return <NoQuotesFound />
    }
    return <section className={classes.container}>
        <div className={classes.action}>
            <button onClick={changeSortingHandler}>{`Sort ${isSortingAsc ? 'Descending' : 'Ascending'}`}</button>
        </div>
        <QuoteList quotes={loadedQuote} asc={isSortingAsc} />
    </section>
}
export default AllQuote