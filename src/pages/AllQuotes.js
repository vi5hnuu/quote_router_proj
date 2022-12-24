import QuoteList from './../components/quotes/QuoteList'
import { Await, defer, useLoaderData, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import classes from './AllQuotes.module.css'
import { getAllQuotes } from '../lib/api'
import { Suspense } from 'react'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from './../components/quotes/NoQuotesFound'




function AllQuote() {
    const loaderPromise = useLoaderData()
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

    // if (error) {
    //     return <p className='centered focused'>{error}</p>
    // }
    // if (status === 'completed' && (!loadedQuote || loadedQuote.length === 0)) {
    //     return <NoQuotesFound />
    // }
    return <section className={classes.container}>
        <div className={classes.action}>
            <button onClick={changeSortingHandler}>{`Sort ${isSortingAsc ? 'Descending' : 'Ascending'}`}</button>
        </div>
        <Suspense fallback={<div className='centered'>
            <LoadingSpinner />
        </div>}>
            <Await resolve={loaderPromise.quotes} errorElement={<p>Error loading quotes.</p>}>
                {(loadedQuotes) => <QuoteList quotes={loadedQuotes} asc={isSortingAsc} />}
            </Await>
        </Suspense>
    </section>
}
export default AllQuote


export function loader() {
    return defer({ quotes: getAllQuotes() })
}