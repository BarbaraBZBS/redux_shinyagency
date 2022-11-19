import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'
import { Provider } from 'react-redux'
import store from './utils/store'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot( document.getElementById( 'root' ) )
root.render(
    <QueryClientProvider client={ queryClient }>
        <Provider store={ store }>
            <React.StrictMode>
                <BrowserRouter>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/survey/:questionNumber" element={ <Survey /> } />
                        <Route path="/results" element={ <Results /> } />
                        <Route path="/freelances" element={ <Freelances /> } />
                        <Route
                            path="/profile/:id"
                            element={ <Profile props /> }
                        />
                        <Route path="*" element={ <Error /> } />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </React.StrictMode>
        </Provider>
    </QueryClientProvider>
)
