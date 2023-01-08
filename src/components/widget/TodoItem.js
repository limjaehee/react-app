import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    display: none;
    transition: 0.2s;

    &:hover {
        color: #ff6b6b;
    }
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    &:hover {
        ${Remove} {
            display: inherit;
        }
    }
`;

const CheckCircle = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 16px;
    border: 1px solid #ddd;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${(props) =>
        props.done &&
        css`
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 16px;
    color: #495057;
    ${(props) =>
        props.done &&
        css`
            color: #ced4da;
        `}
`;

function TodoItem({ id, done, text }) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;
