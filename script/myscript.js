$(document).ready(function validate(){
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    });
    jQuery.validator.addMethod("tntraemail", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.-]+@+tntra.io*$/i.test(value);
    });
    jQuery.validator.addMethod("phnumber", function(value, element) {
        return this.optional(element) || /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/i.test(value);
    });

    //Select child-checkbox classes all checkbox and add disabled attributes to them
    $('.child-checkbox input[type=checkbox]').attr('disabled', true); 

    //When we check parent-checkbox then remove disabled attributes to its child checkboxes
    $(document).on('click', '.parent-checkbox input[type=checkbox]', function (event) {
        if ($(this).is(":checked")) {
            $(this).closest(".container").
                find(".child-checkbox > input[type=checkbox]").attr("disabled", false);
        } 
        else 
        {
            $(this).closest(".container").find(".child-checkbox > input[type=checkbox]").attr("disabled", true);
        }
    });


 $(function(){sun(); 
    function sun(){
      var options = "<option value=''>"+ "-Select Pick-up Time-" +"</option>";
      for(var time1 = 00 ; time1 <=23; time1++){
        options += "<option value="+time1+":00"+">"+ time1+":00" +"</option>";
      }
      $("#time1").html(options);
      $("#time2").html(options);
      $("#time3").html(options);
      $("#time4").html(options);
      $("#time5").html(options);
      $("#time6").html(options);
      $("#time7").html(options);
      
    }
  });

  $(function() {
    enable_cb();
        $("#checkbox1").click(enable_cb);
    });
      
    function enable_cb() {
        enable_Sun();
        enable_Mon();
        enable_Tue();
        enable_wed();
        enable_thu();
        enable_fri();
        enable_sat();

        $("#sun").prop("checked", false);
        $("#Mon").prop("checked", false);
        $("#Tue").prop("checked", false);
        $("#Wed").prop("checked", false);
        $("#Thu").prop("checked", false);
        $("#Fri").prop("checked", false);
        $("#Sat").prop("checked", false); 
        $("#time1").prop("disabled", true);
        $("#time2").prop("disabled", true);
        $("#time3").prop("disabled", true);
        $("#time4").prop("disabled", true);
        $("#time5").prop("disabled", true);
        $("#time6").prop("disabled", true);
        $("#time7").prop("disabled", true);
        
        $("#time1").val("");
        $("#time2").val("");
        $("#time3").val("");
        $("#time4").val("");
        $("#time5").val("");
        $("#time6").val("");
        $("#time7").val("");
        $("#time1-error").hide();
        $("#time1").removeClass("error");
        $("#time2-error").hide();
        $("#time2").removeClass("error");
        $("#time3-error").hide();
        $("#time3").removeClass("error");
        $("#time4-error").hide();
        $("#time4").removeClass("error");
        $("#time5-error").hide();
        $("#time5").removeClass("error");
        $("#time6-error").hide();
        $("#time6").removeClass("error");
        $("#time7-error").hide();
        $("#time7").removeClass("error");

       
        $(".cb").prop("disabled", !this.checked);
      }         



$(function() {
    enable_Sun();
        $("#checkbox2").click( enable_Sun);
    });
          
    function enable_Sun() {
        $("#time1").val("");
        $(".sun").prop("disabled", !this.checked);
                }    
$(function() {
    enable_Mon();
         $("#checkbox3").click( enable_Mon);
     });
                  
    function enable_Mon() {
        $("#time2").val("");
        $(".mon").prop("disabled", !this.checked);
        }  
$(function() {
    enable_Tue();
        $("#checkbox4").click( enable_Tue);
        });
                      
    function enable_Tue() {
        $("#time3").val("");
        $(".tue").prop("disabled", !this.checked);
    } 
$(function() {
    enable_wed();
            $("#checkbox5").click( enable_wed);
    });
                          
    function enable_wed() {
        $("#time4").val("");
        $(".wed").prop("disabled", !this.checked);
    } 
$(function() {
    enable_thu();
            $("#checkbox6").click( enable_thu);
    });
                              
    function enable_thu() {
        $("#time5").val("");
        $(".thur").prop("disabled", !this.checked);
    } 
$(function() {
    enable_fri();
            $("#checkbox7").click( enable_fri);
    });
                              
    function enable_fri() {
        $("#time6").val("");
        $(".fri").prop("disabled", !this.checked);
    } 
$(function() {
    enable_sat();
            $("#checkbox8").click( enable_sat);
    });
                              
    function enable_sat() {
        $("#time7").val("");
        $(".sat").prop("disabled", !this.checked);
    } 


     $("#formdemo").validate({
        rules:{
            name: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            age: {
                required: true,
                number:true,
            },

            number: {
                required: true,
                minlength: 10,
                number: true,
                phnumber:true,
                minlength:10,
                maxlength:10,
            },
            email:{
                required: true,
                tntraemail : true,
            },

            gender: {
                required:true,
            },

            checkbox1: {
                required:true,
            },
            time1 :{
                required:true,
            }, 
            time2 :{
                required:true,
            } ,
            time3 :{
                required:true,
            }, 
            time4 :{
                required:true,
            }, 
            time5 :{
                required:true,
            },
            time6 :{
                required:true,
            } ,
            time7 :{
                required:true,
            } ,
           


        },
        messages: {
            name: {
                required: "please enter your name",
                lettersonly: "Please enter characters only",
            },
            age: {
                required:"Please enter your age",
                number: "Only numeric value accepted",
            },
            number: {
                required: "please enter contact number",
                minlength: "contact number needs atleast 10 numeric values",
                number: "Only numeric value accepted" ,
                phnumber: "Please enter number starting with 789"
            },
            email: {
                required: "please enter your email address",
                tntraemail : "Please enter valid tntra email format",
            },

            gender: {
                required:"You must select male, female or others",
            },

            time1: {
                required: "Please select an option from the list",
            },
           

        },

    });


    //input data is printed to the redirected page:
        var data = " ";
        $("#btnsubmit").bind("click", function(){
            var d1 = $("#name").val();
            localStorage.setItem("name1",d1);
            var d2 = $("#age").val();
            localStorage.setItem("age1",d2);
            var d3 = $("#number").val();
            localStorage.setItem("nm",d3);
            var d4 = $("#email").val();
            localStorage.setItem("email1",d4);
            var d5 = $('input[name="gender"]:checked').val();
            localStorage.setItem("gd",d5);
            var d6 = $("#time1").val();
            localStorage.setItem("t1",d6);
            var d7 = $("#time2").val();
            localStorage.setItem("t2",d7);
            var d8 = $("#time3").val();
            localStorage.setItem("t3",d8);
            var d9 = $("#time4").val();
            localStorage.setItem("t4",d9);
            var d10 = $("#time5").val();
            localStorage.setItem("t5",d10);
            var d11 = $("#time6").val();
            localStorage.setItem("t6",d11);
            var d12 = $("#time7").val();
            localStorage.setItem("t7",d12);

            

            data = data + "<tr><td>" + d1 + "</td><td>"+ d2 +"</td><td>" + d3 +"</td><td>" + d4 +"</td><td>" + d5 +"</td><td>" + d6 +"</td><td>" + d7 +"</td><td>" + d8 +"</td><td>" + d9 +"</td><td>" + d10 +"</td><td>" + d11 +"</td><td>" + d12 +"</td></tr>";

            $("#output").html(data);
        });
        
        
});

