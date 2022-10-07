import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
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

class Form extends React.Component {
    state = {
        userName: '',
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(response.data)
        this.setState({userName: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="GitHub username"
                    required
                    onChange={
                        event => {
                            this.setState({userName: event.target.value})
                        }
                    }
                    value={this.state.userName}
                />
                <button>Add card</button>
            </form>
        );
    }
}

class App extends React.Component {

    state = {
        profiles: [],
    }

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }))
    };

    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
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
