import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Quiz />} />
                <Route path="/result">
                    <Route index element={<Quiz />} />
                    <Route path=":score" element={<Results />} />
                </Route>
            </Routes>
        </div>
    );
}
export default App;
