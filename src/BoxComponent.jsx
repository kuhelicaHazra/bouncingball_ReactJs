
import './App.css';
import { useRef , useEffect} from 'react';

export default function BoxComponent() {
  var canvasRef = useRef();
    var l,x,y,vx,vy,radius;
  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    l = canvas.getContext('2d'); 
    x = Math.floor(Math.random() * window.innerWidth);
    y = Math.floor(Math.random() * window.innerHeight);
    vx = Math.floor(Math.random() * 30); //speed
    vy = Math.floor(Math.random() * 30); // speed
    radius = 20;
    move();
  },[])
 function move() {
   requestAnimationFrame(move);
 
   l.clearRect(0, 0, window.innerWidth, window.innerHeight);
 
   // Creating a circle
   l.beginPath();
   l.fillStyle = "red";
   l.arc(x, y, radius, 0, Math.PI * 2, false);
   l.fill();


l.fillStyle = "yellow";
l.fillRect(20, 10, 650, 350); // x,y corrdinagtes . width,height

l.fillStyle = "lightblue";
l.fillRect(700, 10, 650, 350);
l.fillStyle = "lightgreen";
l.fillRect(700, 400, 650, 350);
 
l.fillStyle = "pink";
l.fillRect(20, 400, 650, 350);
   // Conditions sso that the ball bounces
   // from the edges
   if (radius + x > window.innerWidth)
     vx = 0 - vx;
 
   if (x - radius < 0)
     vx = 0 - vx;
 
   if (y + radius > window.innerHeight)
     vy = 0 - vy;
 
   if (y - radius < 0)
     vy = 0 - vy;
 
   x = x + vx;
   y = y + vy;
 
 }
  return (
    <>
    <canvas className="canvas" ref={canvasRef}></canvas>
    </>

  );
}

