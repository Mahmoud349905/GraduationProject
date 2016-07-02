
/****************** Nav-bar Toggle ***********/
$(document).ready(function(){
  $('button').click(function(){
      $('.menu').toggleClass('show');
  });
  $('ul.nav li a').click(function () {
        var page = $(this).attr('href');
        $('#content').load('content/' + page + '.html');
         var txt = $(this).text();
        document.getElementById("activ").innerHTML = txt;
        document.getElementById("activ").style.marginTop = "20px"
        return false;
    });
    
});

/************** Show post div ****************/
function showDiv() {
    var text1 = document.getElementById('full').value;
    document.getElementById("post-p").innerHTML = text1;
    document.getElementById("post-div").style.display = "block";
}
/**************** show comment div *************************/
function showDiv1() {
    if($('#comment-div:visible').length == 0)
{
    document.getElementById("comment-div").style.display = "block";
}
    else if($('#comment-div:visible').length != 0)
{
    document.getElementById("comment-div").style.display = "none";
}
}
/**************** show like colour *************************/
function showDiv2() { 
    if($('#like-1:visible').length == 0)
{
    document.getElementById("like-1").style.display = "inline-block";
    document.getElementById("like").style.color = "red";
    document.getElementById("like-1").style.color = "red";
}
    else if($('#like-1:visible').length != 0)
{
    document.getElementById("like-1").style.display = "none";
    document.getElementById("like").style.color = "#337ab7";
    
}
}

/**************** submit comment *************************/
function showDiv3() {
    if($('#my-comment:visible').length == 0)
{
    document.getElementById("my-comment").style.display = "block";
    var text1 = document.getElementById('full2').value;
    document.getElementById("-comment").innerHTML = text1;
}
    else if($('#my-comment:visible').length != 0)
{
    document.getElementById("comment-div").style.display = "none";
}
    
}
function showDiv4() { 
    if($('#like-2:visible').length == 0)
{
    document.getElementById("like-2").style.display = "inline-block";
    document.getElementById("like1").style.color = "red";
    document.getElementById("like-2").style.color = "red";
}
    else if($('#like-2:visible').length != 0)
{
    document.getElementById("like-2").style.display = "none";
    document.getElementById("like1").style.color = "#337ab7";
    
}
}