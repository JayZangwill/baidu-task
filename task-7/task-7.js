function prepare()
{
    var navNode=document.getElementsByTagName("nav")[0];
    var links=navNode.getElementsByTagName("a");
    var elem=document.getElementById("line");
    elem.style.marginLeft="0px";
    navNode.onmouseout=function()
    {
        move("line",0,10);
    }
    links[0].onmousemove=function()
    {
        move("line",0,10);
    }
     links[1].onmouseover=function()
    {
        move("line",105,10);
    }
      links[2].onmouseover=function()
    {
        move("line",225,10);
    }
       links[3].onmouseover=function()
    {
        move("line",343,10);
    }
        links[4].onmouseover=function()
    {
        move("line",460,10);
    }
         links[5].onmouseover=function()
    {
        move("line",570,10);
    }
}
function move(elementId,final_x,second)
{
    var elem=document.getElementById(elementId);
    if(elem.times)
        {
            clearInterval(elem.times);
        }
    var x=parseInt(elem.style.marginLeft);
    if(x==final_x) return true;
    if(x<final_x)
        {
            var dist=Math.ceil((final_x-x)/10);
            x+=dist;
        }
    if(x>final_x)
        {
            var dist=Math.ceil((x-final_x)/10);
            x-=dist;
        }
    elem.style.marginLeft=x+"px";
    elem.times=setTimeout("move('"+elementId+"',"+final_x+","+second+")",second);
}
window.onload=prepare;
