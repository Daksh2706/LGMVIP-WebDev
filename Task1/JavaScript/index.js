$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('#navbar').removeClass('fixed-top');
    } else {
       $('#navbar').addClass('fixed-top');
    }
});

$("#video_projects .owl-carousel").owlCarousel({
   loop: true,
   nav: false,
   dots: false,
   responsive : {
       0: {
           items: 1
       },
       600: {
           items: 2
       },
       1000 : {
           items: 3
       }
   }
});
$("#LIZ .owl-carousel").owlCarousel({
   loop: true,
   nav: false,
   dots: false,
   responsive : {
       0: {
           items: 3
       },
       600: {
           items: 5
       },
       1000 : {
           items: 7
       }
   }
});

const changePic = (e)=>{
    document.getElementById("main_image").src = e;
}

$(document).ready(function(){
    $("img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  
  $("video").click(function(){
    var v = $("video > source");
    var t = v.attr("src");
    $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
    $("#myModal").modal();  
  });
  });


var post=[
    {
      postTitle: "Lorem ipsum dolor",
      postAbstract: "Qui iure voluptate vel molestiae soluta ab laboriosam placeat sit natus voluptates sed dolores aspernatur. Sed repellendus quod et ullam quibusdam est aliquid velit 33 perspiciatis officiis sit dolores voluptatem non nulla sunt eum quisquam culpa.",
      postThumb: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        
        
    },
    {
      postTitle: "Lorem ipsum dolor",
      postAbstract: "Qui iure voluptate vel molestiae soluta ab laboriosam placeat sit natus voluptates sed dolores aspernatur. Sed repellendus quod et ullam quibusdam est aliquid velit 33 perspiciatis officiis sit dolores voluptatem non nulla sunt eum quisquam culpa.",
      postThumb: "https://images.unsplash.com/photo-1521790945508-bf2a36314e85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=892&q=80",
      
      
    },
    {
      postTitle: "Lorem ipsum dolor",
      postAbstract: "Qui iure voluptate vel molestiae soluta ab laboriosam placeat sit natus voluptates sed dolores aspernatur. Sed repellendus quod et ullam quibusdam est aliquid velit 33 perspiciatis officiis sit dolores voluptatem non nulla sunt eum quisquam culpa.",
      postThumb: "https://images.unsplash.com/photo-1630257574393-042a3fe24dc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    
   ];
  
   var postLength = post.length;
   //Empty container:
   $(".posts-box").empty();
   //Loop:
   for (i=0; i<postLength; i++) {
     //Create thumb structure:
     var listItem =
       '<li>'+
         '<div class="card">'+
           '<a class="button" >'+
             '<img src="'+post[i].postThumb+'">'+
           '</a>'+
           '<div>'+
             '<h3>'+post[i].postTitle+'</h3>'+
             '<p>'+post[i].postAbstract+'</p>'+
           '</div>'+
           '<div>'+
             '<a class="button5" style="border:none;">Explore</a>'+
           '</div>'+
         '</div>'+
       '</li>';
     //Append thumb:
     $(".posts-box").append(listItem);
   };