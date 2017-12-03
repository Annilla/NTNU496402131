<!doctype html>
<html><!-- InstanceBegin template="/Templates/chiao_ni_PAGE.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="utf-8">
<meta name="keywords" content="Design thinking is everywhere, portfolio, Chiao Ni, Chang, UI Designer, Front-End Engineer, Web Designer, Art Director, resume, project, 張巧倪, 作品集">
<meta name="description" content="Welcome to Chiao Ni's Portfolio Website. Design thinking is everywhere.">

<!--FOR facebook SEO-->
<meta property="og:title" content="CHIAO NI- UI Designer / Front-End Engineer" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://web.ntnu.edu.tw/~496402131/" />
<meta property="og:image" content="http://web.ntnu.edu.tw/~496402131/img/thumbnail.jpg" />
<meta property="og:image:type" content="image/jpg" />
<meta property="og:image:width" content="200" />
<meta property="og:image:height" content="200" />
<meta property="og:description" content="張巧倪的作品網站 - My Portfolio - Design thinking is everywhere!" />
<!--FOR facebook SEO-->

<!-- InstanceBeginEditable name="doctitle" -->
<title>CHIAO NI- UI Designer / Front-End Engineer</title>
<script type="text/javascript">
function check(){
	if(document.getElementById("name").validity.valueMissing){
		alert("尚未輸入姓名. NAME must not be empty.");
		return false;
		}
	if(document.getElementById("email").validity.valueMissing){
		alert("尚未輸入信箱. EMAIL must not be empty.");
		return false;
		}
	if(document.getElementById("subject").validity.valueMissing){
		alert("尚未輸入信件標題. SUBJECT must not be empty.");
		return false;
		}
	if(document.getElementById("message").validity.valueMissing){
		alert("尚未輸入訊息. MESSAGE must not be empty.");
		return false;
		}
	if(document.getElementById("email").validity.valid){        return true;
	}
		else{
			alert("電子郵件輸入錯誤. There is an error in EMAIL.");
			return false;
			}
	}
	
</script>
<!-- InstanceEndEditable -->

<!--For different screen size-->
<meta name="viewport" content="width=device-width">
<link href="css/chiao_ni.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="css/chiao_ni_M.css" media="only screen and (min-width:600px) and (max-width:979px)">
<link rel="stylesheet" href="css/chiao_ni_S.css" media="only screen and (max-width:599px)">
<!--For different screen size-->

<!--For different Web Clip-->
<link rel="shortcut icon" href="img/icon.ico">
<link rel="apple-touch-icon" href="img/icon144.png">
<!--For different Web Clip-->

<!--menu for mobile-->
<script type="text/javascript">
var menuTouch = false;
function menuOut(){
	document.getElementById("menuBar").style.display = "block";
	}
function menuIn(){
	if(menuTouch == true){
		document.getElementById("menuBar").style.display = "none";
	menuTouch = false;}
	}
</script>
<!--menu for mobile-->
<!--google analytics-->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-53403504-1', 'auto');
  ga('send', 'pageview');

</script>
<!--google analytics-->
<!-- InstanceBeginEditable name="head" -->
<!-- InstanceEndEditable -->
</head>

<body onResize="if(window.screen.width>600){menuOut();}">
<div id="menuIcon" onMouseDown="menuTouch=true;menuOut();">≡</div>
<div id="header">
  <div class="PinkBack">
    <div id="menuContain"><!-- InstanceBeginEditable name="menuBar" -->
      <ul id="menuBar">
        <li class="menuNonSelect"><a href="index.html">HOME</a></li>
        <li class="menuNonSelect"><a href="resume.html">RESUME</a></li>
        <li class="menuNonSelect"><a href="project.html">PROJECT</a></li>
        <li class="menuSelect"><a href="contact.php">CONTACT</a></li>
      </ul>
      <!-- InstanceEndEditable --> 
      <!--menuBar end--> 
    </div>
    <!--menuContain end-->
    <div class="clearBoth"></div>
    <!--clearBoth end--> 
  </div>
  <!--PinkBack end-->
  <div id="menuLogo">
    <div class="logoTitle">CHIAO*NI</div>
    <div class="logoDescribe">UI Designer / Front Engineer</div>
  </div>
  <!--menuLogo end--> 
</div>
<!--header end-->
<div id="main" onMouseDown="if(menuTouch==true){menuIn();}"><!-- InstanceBeginEditable name="mainContain" -->
  <div id="mainContainPAGE">
    <div class="mainTitle">CONTACT</div>
    <div class="contactContain">
      <div class="mainContact"> <img src="img/contact.png" width="51" height="50" alt=""/> Find me in <a href="https://www.facebook.com/profile.php?id=100002453201106&sk=about" target="_blank"><img src="img/FBpink.png" width="18" height="36" alt="Find me in facebook" title="Find me in facebook" border="0"/></a> &nbsp; <a href="http://www.google.com/+張巧倪" target="_blank"><img src="img/GplusPink.png" width="33" height="34" alt="Find me in google+" title="Find me in google+" border="0"/></a><br>
        張巧倪 - Chiao Ni, Chang<br>
        PHONE +886-911-580-973<br>
        E-MAIL anny09117011@gmail.com </div>
      <div class="mainForm">
        <form name="contact">
          <p>
            <input name="name" type="text" required="required" id="name" placeholder="NAME" title="Your NAME" class="InputPink">
          </p>
          <p>
            <input name="email" type="email" required="required" id="email" placeholder="E-MAIL" title="Your E-MAIL" class="InputGreen">
          </p>
          <p>
            <input name="subject" type="text" required="required" id="subject" placeholder="SUBJECT" title="SUBJECT" class="InputPink">
          </p>
          <p>
            <textarea name="message" required id="message" placeholder="MESSAGE" title="Your MESSAGE" class="InputMessage"></textarea>
          </p>
          <p class="contactBTN">
            <input name="submit" type="submit" class="contactSubmit" id="submit" formaction="contactSend.php" formmethod="POST" title="SUBMIT" value="SUBMIT" onClick="return check()">
          </p>
        </form>
      </div>
      <div class="clearBoth"></div>
    </div>
  </div>
  <!-- InstanceEndEditable --></div>
<!--main end-->
<div id="footer" onMouseDown="if(menuTouch==true){menuIn();}">
  <div id="footerContain">
    <div class="footerInfo1">
      <div class="footerInfoImg1"></div>
      <div class="footerInfoTxt">+886-911-580-973</div>
    </div>
    <div class="footerInfo2">
      <div class="footerInfoImg2"></div>
      <div class="footerInfoTxt">anny09117011@gmail.com</div>
    </div>
    <div class="footerInfo3">
      <div class="footerInfoImg3"></div>
      <div class="footerInfoTxt"><a href="https://www.facebook.com/sharer/sharer.php?u=http://web.ntnu.edu.tw/~496402131/" target="_blank" title="Share on Facebook"><img src="img/FBwhite.png" width="18" height="36" alt="Share on Facebook" border="0"/></a> <a href="https://twitter.com/home?status=http://web.ntnu.edu.tw/~496402131/" target="_blank" title="Share on Twitter"><img src="img/Twittershite.png" width="38" height="31" alt="Share on Twitter" border="0"/></a> <a href="https://plus.google.com/share?url=http://web.ntnu.edu.tw/~496402131/" target="_blank" title="Share on Google+"><img src="img/Gpluswhite.png" width="33" height="34" alt="Share on Google+" border="0"/></a></div>
    </div>
    <div class="footerInfo4">
      <div class="footerInfoImg4"></div>
      <div class="footerInfoTxt">© 2014-2017 by <br>
        Chiao-Ni, Chang.</div>
    </div>
    <div class="clearBoth"></div>
  </div>
  <!--footerContain end--> 
</div>
<!--footer end-->
</body>
<!-- InstanceEnd --></html>
