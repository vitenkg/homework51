import {array} from "./generate/generate";
import generate from "./generate/generate";
import {Component} from "react";
import './App.css';

class App extends Component {
    state = {
        numbers:[1,1,1,1,1],
    };

    generateNumbers = () => {
        for (let i = 0; i < 5; i++) {
            const gen = generate.hate();
            if (array.includes(gen)) {
                console.log("совпадение " + gen);
                i--;
            } else {
                array[i] = gen;
            }
        }

        array.sort((a, b) => a > b ? 1 : -1);

        this.setState({
            numbers: array
        });
    };

    render() {
        return (
            <div className="app">
                <button onClick={this.generateNumbers}>New Numbers</button>
                <div>
                    <p>{this.state.numbers[0]}</p>
                    <p>{this.state.numbers[1]}</p>
                    <p>{this.state.numbers[2]}</p>
                    <p>{this.state.numbers[3]}</p>
                    <p>{this.state.numbers[4]}</p>
                </div>
            </div>
        );
    }
}

export default App;
