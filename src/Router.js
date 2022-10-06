import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export class Router extends React.Component {
    render() {
        return (
            <>
                <div className="App">
                    <Router>
                    <Routes>
                        <Route exact path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                    </Router>
                </div>
            </>
        )
    }
}