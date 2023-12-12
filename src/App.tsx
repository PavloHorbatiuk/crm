import Header from "./components/Header/Header";
import Calendar from "./components/Calendar/Calendar";

function App() {
    return (
        <div>
            <Header />
            <Calendar year={2023} month={12} />
        </div>
    );
}

export default App;