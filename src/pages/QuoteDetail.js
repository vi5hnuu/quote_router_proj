import { Fragment } from "react"
import { Outlet, useParams } from "react-router-dom"
import HighlightedQuote from './../components/quotes/HighlightedQuote'
import useHttp from "../hooks/use-http"
import { getSingleQuote } from "../lib/api"
import { useEffect } from "react"
import LoadingSpinner from "../components/UI/LoadingSpinner"

function QuoteDetail() {
    const params = useParams()
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote)

    useEffect(() => {
        sendRequest(params.quoteId)
    }, [sendRequest, params.quoteId])

    if (status === 'pending') {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className="centered focused">{error}</p>
    }


    return <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
        <Outlet />
    </Fragment>
}
export default QuoteDetail