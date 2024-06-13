// import express from "express";

// const express = require("express");

// const app = express();

// app.use();

// 2024년 => 다양한 엔지니어들이 저마다의 모듈을 사용하더라도 여튼 현시점에서 가장 최신 문법으로 변형된 타입의 문법을 사용하는 것이 가장 적합한 선택!!!

// 인간 신의 권위 도전 패망!!
// 바벨탑 : 신 하늘 && 하늘 닿을 수 있을만큼 탑을 높게 쌓아서 올라가면
// 프로그래밍 언어 : 구문법 & 신문법 => 하나로 통일 소통!!!

// console.log("Hello World!");

// import "./db";
// import express from "express";
// import morgan from "morgan";
// import globalRouter from "./routers/globalRouter";
// import userRouter from "./routers/userRouter";
// import videoRouter from "./routers/videoRouter";

// const PORT = 4000;

// console.log(process.cwd());

// const app = express();
// const morganMiddleWare = morgan("dev");

// app.set("view engine", "pug");
// app.set("views", process.cwd() + "/src/views");
// app.use(morganMiddleWare);
// app.use(express.urlencoded({ extended: true }));
// app.use("/", globalRouter);
// app.use("/users", userRouter);
// app.use("/videos", videoRouter);

// const handleListening = () => {
//   console.log(`🧙🏻‍♀️ Server listening onPort http://localhost:${PORT} 🦹🏻‍♀️`);
// };

// // 4000 포트
// app.listen(PORT, handleListening);

import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const morganMiddleWare = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morganMiddleWare);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;