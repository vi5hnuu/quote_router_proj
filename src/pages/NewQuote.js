import QuoteForm from './../components/quotes/QuoteForm'
import { useNavigate } from 'react-router-dom';
import classes from './NewQuote.module.css'
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import { useEffect } from 'react';

function NewQuote() {
    const { sendRequest, status } = useHttp(addQuote, false)
    const navigate = useNavigate()
    useEffect(() => {
        if (status === 'completed') {
            navigate('/quotes')
        }
    }, [navigate, status])
    function addQuoteHandler(quoteData) {
        sendRequest(quoteData)
    }
    return <section className={classes.container}>
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </section>

}
export default NewQuote