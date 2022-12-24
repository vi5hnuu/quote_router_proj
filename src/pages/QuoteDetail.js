import { Fragment, Suspense } from "react"
import { Await, defer, Outlet, useLoaderData, useNavigation } from "react-router-dom"
import HighlightedQuote from './../components/quotes/HighlightedQuote'
import { getSingleQuote } from "../lib/api"
import LoadingSpinner from "../components/UI/LoadingSpinner"

function QuoteDetail() {
    const loaderpromise = useLoaderData()

    return <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={loaderpromise.quote} errorElement={<p>Error loading quote.</p>}>
            {(loadedQuote) =>
                <Fragment>
                    <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
                    <Outlet />
                </Fragment>
            }

        </Await>
    </Suspense>
}
export default QuoteDetail

export async function loader({ params }) {
    return defer({
        quote: getSingleQuote(params.quoteId)
    })
}