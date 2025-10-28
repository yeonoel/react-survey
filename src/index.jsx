import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header/Header';
import Error from './components/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import { SurveyProvider, ThemeProvider } from './utils/context';
import StyleGlobal from './utils/styles/GlobalStyle';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <React.StrictMode>
            <Router>
                  <ThemeProvider>
                        <SurveyProvider>
                              <StyleGlobal />
                              <Header />
                              <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route
                                          path="/survey"
                                          element={<Survey />}
                                    />
                                    <Route
                                          path="/survey/:questionNumber"
                                          element={<Survey />}
                                    />
                                    <Route
                                          path="/results"
                                          element={<Results />}
                                    />
                                    <Route
                                          path="/freelances"
                                          element={<Freelances />}
                                    />
                                    <Route path="*" element={<Error />} />
                              </Routes>
                              <Footer />
                        </SurveyProvider>
                  </ThemeProvider>
            </Router>
      </React.StrictMode>,
);
