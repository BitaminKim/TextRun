/*消息轮播 start*/
function msgStart(){
    loadMsg(function(data){
        console.log(data)
        var i = data.length;
        while(i--){//过滤掉没消息的
            data[i].message===0 && data.splice(i,1);
        }
        if(data.length != 0){//不为空
            document.getElementsByClassName("msgBox")[0].style.display = "block";
            updateMsg(data);
        }

    });
}

function loadMsg(callback) {
    // loginModule.LoadMsg(function (info){
    //     if(info.code != 1){
    //         alert(info.msg);
    //         return;
    //     }
    //     $.isFunction(callback) && callback(info.data);
    // });
    callback( [{value:'123456789'},{value:'987654321'},{value:'999999999'}]);
}

function updateMsg(data){
    var html = "";
    var msgBoxAnimate = document.getElementsByClassName("msgBoxAnimate")[0];
    while(msgBoxAnimate.hasChildNodes()){
        msgBoxAnimate.removeChild(msgBoxAnimate.firstChild);
    }
    for(val of data){
        msgBoxAnimate.appendChild(addElement("span"," "+val.value+" "));
    }
    if(data.length == 1){//只有一个身份的情况不用轮播
        msgBoxAnimate.classList.remove("msgBoxAnimate");
        msgBoxAnimate.classList.add("msgBoxNotAnimate");
        // $msgBoxAnimate[0].style.webkitAnimationPlayState = "paused";
    }else{
        for(val of data){
            msgBoxAnimate.appendChild(addElement("span"," "+val.value+" "));
        }
    }
}

function addElement(parent,children){
    parent = document.createElement(parent);
    children = document.createTextNode(children);
    parent.appendChild(children);
    return parent;

}

// $(".msgBoxAnimate").mousemove(function () { this.style.webkitAnimationPlayState = "paused";});//放上去暂停 CSS处理
// $(".msgBoxAnimate").mouseout(function () { this.style.webkitAnimationPlayState = "running";});//移出来开始 CSS处理
msgStart();
setInterval(function(){
    msgStart();
}, 1000*60);