$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('a.like').on('click',function(event){
    event.preventDefault();
    //Browser...Don't go to this link, I got it.
    data = {post_id : $(this).attr("value")};
    var yo = $(this);
    console.log(data);
    $.post("/postvote/new", data, function(){
      yo.hide();
    });  
  });

  $('a.comment_like').on('click',function(event){
    event.preventDefault();
    //Browser...Don't go to this link, I got it.
    data = {comment_id : $(this).attr("value")};
    var ya = $(this);
    console.log(data);
    $.post("/commentvote/new", data, function(){
      ya.hide();
    });  
  });

});


