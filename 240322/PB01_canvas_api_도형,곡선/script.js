const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //그림을 그릴 준비/ 디자인 속성과 함수가 생김

// // 라인그리기
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

// // 삼각형 만들기1
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();

// 삼각형만들기2
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// // ctx.lineTo(50, 50);
// ctx.stroke();

// // 리본만들기
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// // ctx.lineTo(50, 50);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.fillStyle = "powderblue";
// ctx.fill(); //사각형이 아닌경우
// // ctx.stroke(); //stroke 주지 않을경우 fill 값만

// // 원그리기
// ctx.fillStyle = "plum";
// ctx.strokeStyle = "powderblue";

// ctx.beginPath();
// // 좌표 : x축 200, 150 / 반지름 길이 :100 / 0도에서 시작 360도로 반시계방향으로 돔
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true); //arc =아치, true= 반시계방향
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

// // 뚫린 반원
// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
// ctx.arc(200, 100, 50, 0, (Math.PI / 180) * 180, false); //false = 시계방향
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// ctx.stroke();
// ctx.closePath();

// // 호 그리기
// ctx.strokeStyle = "plum";
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.stroke();

// // 타원 그리기1 (정석적인 방법)
// ctx.strokeStyle = "darkgreen";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, (Math.PI / 180) * 360);
// ctx.stroke();

// // 타원그리기2
// ctx.strokeStyle = "blue";
// ctx.scale(1, 0.7); // 비율에 맞춰서 원을 만듦
// ctx.beginPath();
// ctx.arc(200, 150, 80, 0, (Math.PI / 180) * 360, true);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 150, 30, 0, (Math.PI / 180) * 360, false);
// ctx.stroke();
// ctx.closePath();

// // 기울어진 타원 그리기
// ctx.strokeStyle = "darkgreen";
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, (Math.PI / 180) * 360); //-30도 = 반시계방향
// ctx.stroke();

// -----------2차 베지에 / quadraticCurveTo()-----------------
// // 곡선 만들기
// ctx.beginPath();
// ctx.moveTo(50, 200);
// // 베지에 곡선 : 조절점을 만들어 위치에 따라서 곡선을 만듦
// ctx.quadraticCurveTo(200, 50, 350, 200); // 조절점은 앞에둬야 함 조절점 x 200, y 50
// ctx.stroke();

// // 물결 만들기
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100); //마지막: 도착지점 좌표
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// -----------3차 베지에 / bezierCurveTo ()-----------------
// // 물결 만들기
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100); // 조절점이 두 개
// ctx.stroke();

// ----------------------------------------------------------------
// // 세모 안에 동그라미
// let triangle = new Path2D();
// triangle.moveTo(100, 100);
// triangle.lineTo(300, 100);
// triangle.lineTo(200, 260);
// triangle.closePath();

// let circle = new Path2D();
// circle.arc(200, 155, 50, 0, (Math.PI / 180) * 360);

// ctx.fillStyle = "green";
// ctx.stroke(triangle);
// ctx.fill(circle);

// -----------------------------------------------------------------

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.fillStyle = "powderblue";
// ctx.strokeStyle = "black";

// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "plum";
// ctx.fillRect(50, 50, 120, 100);

// ctx.clearRect(70, 80, 80, 45);

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // ctx.fillStyle = "rgb(200,0,0)"; //속성값 정의
// ctx.fillStyle = "powderblue";
// ctx.fillRect(10, 10, 50, 100); // 왼쪽 시작, 오른쪽 끝 w:50, h:100

// JS 세계관
// 시간: 1초 / 밀리초 1000
// 각도: 1도 45도  -> deg x
// Radian => 라디언 / 래디언
// 1래디언 = PI / 180 => 우리가 사용하는 각도로 변환 180도
// (PI / 180) * 180 => PI * 1
// Math.PI * 1
// Math.PI * 0.5 = 90도
// Math.PI * 1.5 = 270도

// 360도 표현
// (PI / 180) * 360 => PI * 2
// Math.PI * 2

// const radians = (Math.PI / 180) * 180;
// 3d => sin / cos / tan
