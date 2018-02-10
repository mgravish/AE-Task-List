var newItem = '<div class="task-line"><div class="check-box"><svg height="28" width="28"><g id="check-box" stroke="none" class="test" stroke-width="1" fill="none" fill-rule="evenodd"><circle cx="14" cy="14" r="10" fill="#57a56c" fill-opacity="0.1" stroke="#848484" stroke-width="2" onclick="clickHandler(event)"/><polyline id="check" stroke="#FFFFFF" stroke-width="4" points="8 14 13 18 20 10" onclick="clickHandler(event)"/></g></svg></div><input type="text" class="task" placeholder="Write a task..." onkeydown="keyHandler(event)">';


function keyHandler(e){
    var keycode = e.charCode || e.keyCode;
    var taskline = e.target.parentElement;
    var tasklist = e.target.parentElement.parentElement;
    var taskarray = Array.prototype.slice.call(tasklist.children);
    
    var nxt = taskline.nextElementSibling;
    var prv = taskline.previousElementSibling;
    
    if (keycode  == 13){ //Enter key's
        $(".task-list").append(newItem);
        e.preventDefault();
        if(e.target.parentElement.nextElementSibling){
            e.target.parentElement.nextElementSibling.childNodes[1].focus();
        }
    }
    if(keycode == 38){ //Up Arrow
        if(prv){
            $(prv).find(".task")[0].focus();
        } 
        e.preventDefault();
    }
    
    if(keycode == 40){  //Down Arrow
        if(nxt){
            $(nxt).find(".task")[0].focus();
        }
        e.preventDefault();
    }
    
    if(keycode == 8){  //Delete Key
        var txt=e.target.value;
        if(txt==""){
            if(prv){
                $(prv).find(".task")[0].focus();
                e.target.parentElement.remove();
            }
        }
    }
}

function clickHandler(e){
    var circ = $(e.target.parentElement).find("circle")[0];
    var check = $(e.target.parentElement).find("polyline")[0];
    var text = $(e.target.parentElement.parentElement.parentElement.parentElement).find("input")[0];
    if($(circ).css("fill-opacity")==0.1) {
        $(circ).css({ fillOpacity: "1.0" });
        $(check).css({ transform: "scale(1)" });
        $(text).css({ color: "#828282" });
        $(text).css({ textDecoration: "line-through" });
        
    }
    else {
        $(circ).css({ fillOpacity: "0.1" });
        $(check).css({ transform: "scale(0)" });
        $(text).css({ color: "white" });
        $(text).css({ textDecoration: "none" });
    }
}
