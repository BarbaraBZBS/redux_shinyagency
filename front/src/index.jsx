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
import { SurveyProvider } from './utils/context'
import { Provider } from 'react-redux'
import store from './utils/store'


const root = ReactDOM.createRoot( document.getElementById( 'root' ) )
root.render(
    <Provider store={ store }>
        <React.StrictMode>
            <BrowserRouter>
                <SurveyProvider>
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
                </SurveyProvider>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
)
