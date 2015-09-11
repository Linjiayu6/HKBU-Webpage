$(document).ready(function() {
	/*slide*/
	/*hide the slide navigation*/
	$(".slidenavleft,.slidenavright").show();


  $(".slideol li").hover(function() {
        var index=$(this).index();
        $(this).css('opacity','1');        
        $(".slideul li").eq(index).show().siblings().hide();
  }, function() {
        
  });

    /*Dropdown list Start*/
    /*for navulcontent Start*/
    $(".navulcontent").children('li').hover(function() {
        /* Stuff to do when the mouse enters the element */
        
        $(this).children("a").css({
            background: 'rgb(255,255,255)',
            color: '#072A5F'
        });  

        $(".nav").css('overflow', 'visible');
        $(this).children().siblings("a").css({
            background: 'rgb(255,255,255)',
            color: '#072A5F'
        });  

        $(this).children().slideDown('slow',function(){

            $(this).find("li").css('border-bottom', '1px solid #002147');
            $(this).find("li").hover(function() {
                /* Stuff to do when the mouse enters the element */
               $(this).css('background', '#002147');
            }, function() {
                /* Stuff to do when the mouse leaves the element */
               $(this).css('background', 'rgba(0, 33, 71, 0.6)'); 
            });
            
        });
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(".nav").css('overflow', 'hidden');
        $(this).children("a").css({
            background: '#002147',
            color: 'rgb(255,255,255)'
        }); 
        $(this).children('ul, .submenudiv').hide("fast").siblings("a").css({
            background: '#002147',
            color: 'rgb(255,255,255)'
        });
    });
   
   /*for navulcontent End*/
   /*Dropdown list End*/

   /*for footer-list hover Start*/
   $(".col-2 .footer-list li").hover(function() {
       $(this).css({
           'background-color': '#f2f1eb',
           'border': '1px solid #002147'
       });
       $(this).find('a').css('color', '#002147');

   }, function() {
       $(this).css('background-color', '#002147');
       $(this).find('a').css('color', '#fff');
   });

   /*for footer-list hover End*/


});











