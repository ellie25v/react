import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {useRouter} from "./router"


const App = () => {
    const routing = useRouter(false)
    return (
        <>
        <Router>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        {routing}
        </Router>
        </>
    );
}

export default App;