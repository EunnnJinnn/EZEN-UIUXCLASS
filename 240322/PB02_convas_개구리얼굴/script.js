const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(1, 0.6);

// face
ctx.fillStyle = "darkgreen";
ctx.beginPath();
ctx.arc(150, 150, 90, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// eye_left
ctx.beginPath();
ctx.fillStyle = "white";
ctx.strokeStyle = "darkgreen";
ctx.arc(110, 70, 30, 0, (Math.PI / 180) * 360, false);
ctx.fill();
ctx.stroke();

// eye circle_left
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(110, 90, 15, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// eye_right
ctx.beginPath();
ctx.fillStyle = "white";
ctx.strokeStyle = "darkgreen";
ctx.arc(190, 70, 30, 0, (Math.PI / 180) * 360, false);
ctx.fill();
ctx.stroke();

// eye circle_right
ctx.beginPath();
ctx.fillStyle = "black";

ctx.arc(190, 90, 15, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// mouse
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.arc(150, 160, 50, 0, (Math.PI / 180) * 180, false);
ctx.stroke();

// shy_left
ctx.beginPath();
ctx.fillStyle = "plum";
ctx.lineWidth = 3;
ctx.arc(100, 130, 15, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// shy_right
ctx.beginPath();
ctx.fillStyle = "plum";
ctx.lineWidth = 3;
ctx.arc(200, 130, 15, 0, (Math.PI / 180) * 360, false);
ctx.fill();
