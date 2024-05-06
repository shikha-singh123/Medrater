import React from 'react';
import ReactDOM from 'react-dom';
import {App,appRouter} from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const AppLayout=()=>{
    return(
<div>
<BrowserRouter>
<App />

</BrowserRouter>
</div>
)

};
 const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);