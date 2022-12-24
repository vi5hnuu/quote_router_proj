import { Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuote from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
import Comments from "./components/comments/Comments";
import { Link } from "react-router-dom";
import { loader as loadQuote } from "./pages/QuoteDetail";
import { action as newQuoteAction } from "./pages/NewQuote";
import { loader as loadQuotes } from "./pages/AllQuotes";


//Todo : Not Working

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Navigate to='/quotes' replace />} />
    <Route path='/quotes' element={<AllQuote />} loader={loadQuotes} />
    <Route path='/quotes/:quoteId' element={<QuoteDetail />} loader={loadQuote}>
      <Route
        index
        element={
          <div className='centered'>
            <Link className='btn--flat' to='comments'>
              Load Comments
            </Link>
          </div>
        }
      />
      <Route path='comments' element={<Comments />} />
    </Route>
    <Route path='/new-quote' element={<NewQuote />} action={newQuoteAction} />
    <Route path='*' element={<NotFound />} />
  </Route>
))

function App() {
  return <RouterProvider router={router} />
}

export default App;
