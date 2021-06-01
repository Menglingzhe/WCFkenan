function username() {
    var username = document.getElementById("username").value;  //用户名
    //用户名的判断
    if (username == "") 
           {document.getElementById("usernames").innerHTML = "<font color='red'>用户名不可以为空</font>";return false;}
    else if (username != ""){ 
        if (username.length < 3) 
           {document.getElementById("usernames").innerHTML = "<font color='red'>用户名至少3位</font>";return false;}
        else if(username.length>6)
           {document.getElementById("usernames").innerHTML = "<font color='red'>用户名至多6位</font>";return false;}
        else 
           {document.getElementById("usernames").innerHTML = "<font color='green'>恭喜你，您的用户名可以使用</font>";return true;}}
    }

    function personname() {
    var personname = document.getElementById("personname").value;  //用户名
    //用户名的判断
    if (personname == "") 
           {document.getElementById("personnames").innerHTML = "<font color='red'>姓名不可以为空</font>";return false;}
    else if (personname != ""){ 
        if (personname.length < 2) 
           {document.getElementById("personnames").innerHTML = "<font color='red'>姓名至少2位</font>";return false;}
        else if(personname.length>4)
           {document.getElementById("personnames").innerHTML = "<font color='red'>姓名至多4位</font>";return false;}
        else
           {document.getElementById("personnames").innerHTML = "<font color='green'>姓名格式正确</font>";return true;}}
    }

    function password() {
    var psw = document.getElementById("psw").value;  //密码				
    //密码的判断
    if (psw == "") 
           {document.getElementById("psws").innerHTML = "<font color='red'>密码不可以为空</font>";return false;}
    else if (psw != "") {
        if (psw.length < 6) 
           {document.getElementById("psws").innerHTML = "<font color='red'>密码至少六位</font>";return false;}
        else 
           {document.getElementById("psws").innerHTML = "<font color='green'>密码设置成功！</font>";return true;}}
    }

    function passwords() {
    var psw = document.getElementById("psw").value;
    var p = document.getElementById("psw-enter").value;
    if (p != psw) 
       {document.getElementById("psws-enter").innerHTML = "<font color='red'>密码与确认密码不同</font>";}
    else
       {document.getElementById("psws-enter").innerHTML = "<font color='green'>确认密码输入正确</font>";}
    }

    function hobby(){
         var c=0;
	for (var i=0;i<document.myform.hobby.length;i++)
       {if (document.myform.hobby[i].checked==true)c++;}
	if (c==0)
        {document.getElementById("hobbys").innerHTML = "<font color='red'>至少选择一个爱好</font>";}
    else
        {document.getElementById("hobbys").innerHTML = "<font color='red'></font>";}
    }

    function check() {
    if (username() && personname() && password() && passwords && hobby()) 
        {return true;}
    else 
        {return false;}
    }