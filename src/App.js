import {numbersArray} from "./generate/generate";
import generate from "./generate/generate";

const App = () => {
    for (let i = 0; i < 5; i++) {
        const gen = generate.hate();
        if (numbersArray.includes(gen)) {
            console.log("совпадение " + gen);
            i--;
        } else {
            numbersArray[i] = gen;
            console.log(gen);
        }
    }
    console.log(numbersArray);
    numbersArray.sort((a,b)=> a > b ? 1:-1);
    console.log(numbersArray);
    return (
        <div>Hello world</div>
    );
};

export default App;
