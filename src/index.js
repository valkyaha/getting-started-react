import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const testData = [
    {
        "avatar_url": "https://avatars.githubusercontent.com/u/26414043?v=4",
        "name": "Miguel Ángel López",
        "company": "Inno-it",
    }
]


const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card {...profile}/>)}
    </div>
)

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile" style={{margin: '1rem'}}>
                <img src={profile.avatar_url} alt=""/>
                <div className="info" style={{display: "inline-block", marginLeft: 10}}>
                    <div className="name" style={{fontSize: '125%'}}> {profile.name}</div>
                    <div className="company"> {profile.company}</div>
                </div>
            </div>
        );
    }
}

class Form extends React.Component{
    render() {
        return(
            <form action="">
                <input type="text" placeholder="GitHub username"/>
                <button>Add card</button>
            </form>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form/>
                <CardList profiles={testData}/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App title={"The gitHubPage cards app"}/>
    </React.StrictMode>
);

reportWebVitals();
