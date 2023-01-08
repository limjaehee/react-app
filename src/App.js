import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
body {
    background: #e9ecef;
}
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <TodoTemplate>하이</TodoTemplate>
        </>
    );
}

export default App;
