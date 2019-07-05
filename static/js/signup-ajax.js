function  emailValidation(str) {
    // alert(str);
    $.ajax({
        type: "GET",
        url: "/signup/updated_signup/"+str,
        // data: {column},

        // cache: true,

        success: function(data){
            //    $("#resultarea").text(data);
            // alert('hello');
            // console.log(data);
            // alert(str);
            console.log(data);
            if(str=="") {
                $('.error').css('display','none');
            }else if(str!=""){
                $('.error').html(data);
                $('.error').css('display','block');
            }
            // $('.error').html(data);

        }
    });
}