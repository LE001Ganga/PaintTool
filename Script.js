function _(selector){
    return document.querySelector(selector);
  }
  function setup(){
    let canvas = createCanvas(650, 600);
    canvas.parent("canvas-wrapper");
    background(255);
  }
  function mouseDragged(){
    let type = _("#pen-pencil").checked?"pencil":_("#pen-arc").checked?"arc":"brush";
    let size = parseInt(_("#pen-size").value);
    let color = _("#pen-color").value;
    fill(color);
    stroke(color);
    if(type == "pencil"){
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
    else if(type=="arc"){
      noFill();
      arc(pmouseX, pmouseY, 500, 500, 0, HALF_PI);
    } 
    else {
      ellipse(mouseX, mouseY, size, size);
    }
  }
 