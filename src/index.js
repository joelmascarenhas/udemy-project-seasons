import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    //JS function, not specific to React
    state = { lat: null, errorMessage: '' };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Component was rendered to screen');
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('Component was updated')
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
            //return <div>Lat: {this.state.lat}</div>
        }
        else {
            return <Spinner message="Please accept location request ..."/>
            //return <div>Loading!</div>
        }
    }

    //React requires render method otherwise it will throw error
    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );

    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);