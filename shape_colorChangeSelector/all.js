 //DOM
 const standard =  document.querySelector(".standard");
 const squareBtn = document.querySelector(".square");
 const circleBtn = document.querySelector(".circle");
 const triangleBtn = document.querySelector(".triangle");
 const colorChange = document.querySelector(".colorChange");
 
//正方形切換按鈕
 squareBtn.addEventListener("click",()=>{
     standard.setAttribute('class', 'squ');
    
 })
 
 //圓形切換按鈕
 circleBtn.addEventListener("click",()=>{
     standard.setAttribute('class', 'cir');
    
 })

 //三角形切換按鈕
 triangleBtn.addEventListener("click",()=>{
     standard.setAttribute('class', 'tri');

 })

 //形狀顏色改變
 colorChange.addEventListener("change",(e)=>{
 const color = e.target.value;
 console.log(color);
 standard.style.cssText=`background-color:${color}; border-color: transparent transparent ${color} transparent;`;
 })
