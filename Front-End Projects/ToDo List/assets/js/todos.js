//on li click
    //text inside li is gray
    //strikethrouh effect


//if gray - click returns to normal

//     //selects all lis and invokes function upon click
//     $('li').on("click", function(){
//         //checks if clicked li is gray
//         if($(this).css("color") === "rgb(128, 128, 128)"){   
//             //changes css properties to have a color of black and text decoration to none
//             $(this).css({
//                 color :  "black",
//                 textDecoration : "none"
//             });    
//         }
//             //changes css properties to have a color of gray and text decoration to linethrough
//         else{
//             $(this).css({
//                 color :  "gray",
//                 textDecoration : "line-through"
//             });    
//     }  
// });

//  Important Note: The blocks of code above are done below in much less code. This is why we keep CSS and JS seperate, let the CSS handle the syling and the JS decides when we want to use those styles. In the event that a change is permanent though, it is preferable to use JS. Ex: deleting something

    //selects all lis and invokes function upon click
        //when an "li" is clicked inside of a "ul"
    $('ul').on("click", "li", function(){ 
        //toggles class .clicked
        $(this).toggleClass("clicked");
    });


//on X click
    //text fades out
    //text is deleted

    //all spans clicked
    $('ul').on("click", "span", function(event){
        //removes parent element (li) and fades out the item in line with the span
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
        //stops execution of li on clicks 
        event.stopPropagation();
    });

//on input enter
    //text added to the list
    $("input[type='text']").keypress(function(){
        //if enter is pressed
        if(event.which===13){
          //grab the value of the text
          todoText=$(this).val();
          //clears box after enter
          $(this).val("");
          //append an li to ul 
            //selects ul
            //append string to ul as html
          $('ul').append("<li><span><i class='fa fa-trash-o'aria-hidden='true'></i></span> "+ todoText +"</li>") //adds html to the ul
        }
    })

    $(".fa-plus").on("click", function(){
         $("input[type='text']").fadeToggle(500);
    })

