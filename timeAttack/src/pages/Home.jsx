import React, { useState } from "react";
// import shortid from "shortid";

const Home = () => {
  const [todo, setTodo] = useState([
    {
      // id: shortid.generate(),
      title: "",
      body: "",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  console.log("읽어오나", todo);
  // const data = useSelector((state)=>{
  //   return state;
  // });

  const titleHandler = (e) => setTitle(e.target.value);
  const contentHandler = (e) => setcontent(e.target.value);

  //생성 ????
  const addbtnHandler = () => {
    const newTodo = {
      // id: shortid.generate(),
      title,
      content,
      isDone: false,
    };
    setTodo(...todo, newTodo);
    setTitle("");
    setcontent("");
  };

  //done 버튼 // 아이디가 주어지고 아이디 값이 일치하면 객체... a, isDone : 추가 였나
  const clickMoveBtn = (id) => {
    const newTodo = todo.map((item) => {
      if (id === item.id) {
        return { ...todo, isDone: !item.isDone };
      } else {
        return { ...todo };
      }
    });
    setTodo(newTodo);
  };

  //삭제 버튼
  const deletBtnHandler = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  return (
    <div>
      <section>
        <div>
          <p>생성</p>
          <label>제목</label>
          <input value={title} onChange={titleHandler} />

          <br />
          <label>내용</label>
          <input value={content} onChange={contentHandler} />
          <br />
          <button onClick={addbtnHandler}>add</button>
        </div>

        <div>
          <p>TodoList</p>
          {todo.map(function (item) {
            if (!item.isDone) {
              return (
                <div>
                  <div>{item.title}</div>
                  <div>{item.content}</div>
                  <button onClick={() => clickMoveBtn(item.id)}>
                    완료누르면돈으로
                  </button>
                  <button onClick={() => deletBtnHandler(item.id)}>삭제</button>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
