import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoEditor.css";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 컨텐츠 리셋시키기
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    } else {
      onCreate(content);
      // inputRef.current.value = "";
      setContent("");
    }
  };
  // enter key 눌러도 컨텐츠가 리셋 되는 코드 / 13 = enter의 keycode /
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="TodoEditor">
      <h4>✍🏻오늘의 Todo 작성하기✍🏻</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          // input 태그에서 커서가 있는 상태에서 key가 눌렸을 때 함수 실행
          onKeyDown={onKeyDown}
          placeholder="오늘의 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
