import styled from "styled-components";
import TodoItem from "components/widget/TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="운동하기" done={true}></TodoItem>
            <TodoItem text="밥먹기" done={false}></TodoItem>
        </TodoListBlock>
    );
}

export default TodoList;
