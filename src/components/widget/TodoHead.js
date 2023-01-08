import styled from "styled-components";
import FormattedTime from "components/common/FormattedTime";

const TodoHeadBlock = styled.div`
    padding: 25px;
    border-bottom: 1px solid #efefef;
    h2 {
        margin: 0px;
        font-size: 30px;
        color: #333;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 10px;
        font-weight: bold;
    }
`;

function TodoHead() {
    return (
        <TodoHeadBlock>
            <h2>
                <FormattedTime
                    time={new Date()}
                    format="YYYY년 MM월 dd일 (E)"
                ></FormattedTime>
            </h2>
            <div className="tasks-left">할일 2개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
