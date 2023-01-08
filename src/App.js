import { createGlobalStyle } from "styled-components";
import TodoTemplate from "components/template/TodoTemplate";
import TodoHead from "components/widget/TodoHead";
import TodoList from "components/widget/TodoList";
import TodoCreate from "components/widget/TodoCreate";

const GlobalStyle = createGlobalStyle`
body {
    background: #e9ecef;
}
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </>
    );
}

export default App;
