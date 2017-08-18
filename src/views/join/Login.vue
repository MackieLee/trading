<template>
    <div class="login-box">
        <div class="ad">
            <img src="../../assets/img/bg-login.png" />
        </div>
        <form class="login-form">
            <div class="error">
                <span v-if="error_1">帐户名与密码不匹配</span>
                <span v-if="error_2">该账号不存在</span>
            </div>
            <div class="user">
               <input type="text" name="user" placeholder="用户名" /> 
            </div>
            <div class="pwd">
                <input type="password" name="pwd" placeholder="密码" />
            </div>
            <div class="error">
                <span v-if="error_3">验证码输入错误</span>
            </div>
            <div class="check-code">
                <input type="text" name="remember" placeholder="请输入验证码"/>
                <span class="ck-code"></span>
            </div>
            <div class="login-btn">
                <button class="submit" type="submit">登录</button>
            </div>
            <div class="others">
                <p>其他登录方式:</p>
                <span><a>QQ</a></span>
                <span><a>wechat</a></span>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name:'login',
  data(){
    return{
        error_1:"",
        error_2:"",
        error_3:""
    }
  }
}
</script>
<style lang="scss" scoped>
    .login-box{
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        .ad{
            width: 688px;
            display: flex;
            justify-content: center;
        }
        .login-form{
            padding: 20px;
            .error{
                margin: 10px 0;
                span{
                    color: #f71137;
                }
            }
            input{
                height: 20px;
                padding: 5px 10px;
                font-size: 12px;
                line-height: 1.5;
                border-radius: 3px;
                border: 1px solid #66afe9;
                width: 250px;
                margin-bottom: 23px;
            }
            .check-code input{
                width: 30%;
            }
            .submit{
                width: 100%;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
            }
            .others{
                p{
                    font-size: 14px;
                    font-weight: 600;
                    margin:20px 0;
                }
                span{
                    margin: 0 10px;
                }
            }
        }
    }
</style>


