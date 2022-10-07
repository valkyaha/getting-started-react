import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://placehold.it/75"/>
                <div className="info">
                    <div className="name"> Name here ...</div>
                    <div className="company"> Company here ...</div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Card />
            </div>
        );
    }
}

// const App = ({title}) => (
//     <div className="header">{title}</div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App title={"The gitHubPage cards app"}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
