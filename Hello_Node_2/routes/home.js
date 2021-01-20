// express Routing

// 1. express framework import
var express = require("express");

// 2. express framework를 사용하여 router객체 생성 
var router = express.Router();

// get("/")는 app.js에서 Router로 설정한 주소와
// 합성되어 실제 요청 주소가 된다
// @RequestMapping으로 설정되는 주소 URL들 
router.get("/",function(req,res){
    res.send("HOME GET Mapping");
});
router.get("/my",function(req,res){
    // res.send("My GET Mapping");
    res.render("home");
});
/*
client에서 서버로 request를 수행할 때
변수에 값을 담아서 보내는 방법
1. 보안적 측면, 내용적 측면에서 매우 좋은 방법
form, input을 이용하여 데이터를 담아서 보내는 방법
2. 간단한 데이터를 서버로 보내고자 할 때
query문자열로 만들어서 보내느 방법
http://localhost:3000/url?변수1=값&변수2=값&변수3=값
가. 전체 query문자열이 255자를 넘어가면 데이터가 잘린다
나. 데이터가 주소창에 노출되어 보안에 취약하다 
다. 서버로 전송되는 변수이름이 노출되어 보안에 취약하다. 

3. RestFul방식 (nodejs기본방식)
간단한 데이터를 서버로 보낼 때 query문자열을 대체하는 방법
params 주소 사용
http://localhost:3000/input/30/40/50이런 주소를 서버로 전송하면
~/input/까지는 url로 인식이 되고 이후의 30,40,50이라는 값은 
params변수에 담아서 서버에서 사용할 수 있도록 하는 체계
*/
// client에서 input 주소 뒤에 어떤 문자열을 포함하면 
// nation이라는 변수에 받아서 처리할 수 있다. 
router.get("/input/:nation",function(req,res){
    let nation = req.params.nation;
    res.send(nation);
})
router.post("/input",function(req,res){
    // res.send("INPUT POST Mapping");
    let m_user = req.body.m_user;
    // res.send("입력한 user : " + m_user);
    res.render("home",{m_user:m_user});
});
router.post("/",function(req,res){
    res.send("HOME POST Mapping");
});

// express를 사용한 router설정객체를 
// app.js에서 import하여 사용 할 수 있도록 내보내는 기능
module.exports = router;