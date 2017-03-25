/**
 * Created by Administrator on 2017/1/6.
 */
$(function(){
  $("#register-form").validate({
      rules:{
          r_username:{
              required:true,
              minlength:11,
              isMobile:true
          },
          r_password:{
              required:true,
              minlength:8,
              maxlength:16
          },
          r_repsw:{
              equalTo:"#psw"
          }

      },
      messages:{
          r_username:{
              required:"用户名不能为空",
              minlength:"长度只能为11位数字",
              isMobile:"请填写正确的手机号"
          },
          r_password:{
              required:"密码不能为空",
              minlength:"长度不能小于8",
              maxlength:"长度不能大于16"
          },
          r_repsw:{
              equalTo:"两次输入不一致"

          }


      }

  })
    $.validator.addMethod("isMobile",function(value,element){
        var length = value.length;
        var mobile = /^(15[0-9]{9})|(18[0-9]{9})|(13[0-9]{9})$/;
        return this.optional(element)||(length == 11&&mobile.test(value));
    },"请输入正确格式手机号");
})