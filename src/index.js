import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "reset-css";
import './scss/main.scss';


const Index = () => {
    return (
        <App/>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('root')
);

