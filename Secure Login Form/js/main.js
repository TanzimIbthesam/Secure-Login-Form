
$(document).ready(function(){
 $('#for_pass').click(function(){
  $('#for_pass').text('Forget Password Form');
   $('#for_pop').fadeIn(200);
 
 
 })
 $('#close').click(function(){
     $('#for_pass').text('Forget Password');
   $('#for_pop').fadeOut(200);
 
 
 })
 $('#passtwo').keyup(function(){
    if($('#passone').val() != $('#passtwo').val()){
        $('#pass_match').fadeIn(100);
       }else{
        $('#pass_match').fadeOut(100);
        
       }
       return true;
 })
 


 });

