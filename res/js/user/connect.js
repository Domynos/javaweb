
$(function(){
Esgi.module = Esgi.module || {}
Esgi.module.user = Esgi.module.user || {}

Esgi.module.user.Connect = function (cfg) {
        new Esgi.html.Form({
             url : APP_CONTEXT+'/user/connect',
             renderTo : cfg.id,
             inputs : [
                {
                  type : "Text",
                  name : 'login',
                  label: 'Enter login'
                },{
                  type : "Password",
                  name : 'password',
                  label: 'Enter password'
                }
             ]
        });
}

});

