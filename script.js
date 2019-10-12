var wrapper = document.body.querySelector(".wrapper");

var array = [{message:"HULLO", color:"red"}, {message:"Hi there!", color:"blue"}, {message:"Sup homie", color:"green"}];

for (i=0; i < array.length; i++ ) {
  var box = document.createElement("div");
  box.style.width="300px"
  box.style.height="100px"
  box.style.backgroundColor = array[i].color
  var msg = document.createElement("h1");
  msg.innerHTML = array[i].message
  box.appendChild(msg);

  box.addEventListener('click', function () {
           var messge = this.getElementsByTagName("h1")[0]
            if(messge.style.display=="block"){
              messge.style.display="none";
            }else{
              messge.style.display="block";
            }
        });
  
  
  wrapper.appendChild(box);
};