var mouseevent="empty";

canvas=document.getElementById('myCanvas');
ctx  =  canvas.getContext("2d");
 color=document.getElementById("Color");
 width_of_line=document.getElementById("Width");
radius=document.getElementById("Radius");

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
  color=document.getElementById("Color");
  width_of_line=document.getElementById("Width");
radius=document.getElementById("Radius");
  mouseevent="mouseUp";
  }
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {
   mouseevent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
  
    
    if (mouseevent=="mouseDown") {
      
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    
      
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
  ctx.beginPath();
  ctx.strokeStyle=color;
  ctx.lineWidth=width_of_line;
  ctx.moveTo(last_position_of_x,last_position_of_y);
  ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
  ctx.stroke();
  mouseevent="mouseDown";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
  last_position_of_touch_x=current_position_of_touch_x;
  last_position_of_touch_y=current_position_of_touch_y
}
canvas.addEventListener("touchmove",my_touchmove);
function touchmove(e) {
  current_position_of_touch_x=e.touches[0].clientX - offsetLeft;
  current_position_of_touch_y=e.touches[0].clientY - offsetTop;
  ctx.beginPath();
  ctx.strokeStyle=color;
  ctx.lineWidth=width_of_line;
  ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y);
  ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
  ctx.stroke();

  last_position_of_touch_x=current_position_of_touch_x;
  last_position_of_touch_y=current_position_of_touch_y;
}