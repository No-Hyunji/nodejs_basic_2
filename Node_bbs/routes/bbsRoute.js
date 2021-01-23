var express = require("express");
var router = express.Router();
/*
현재까지 사용중인 프로그래밍 언어에서 날짜, 시간과 관련하여 
수없이 많은 issue들이 있다. 
JS(node) Date라는 내장 클래스가 있다. 
이 내장 클래스도 이슈가 있어서 실제로 DB와 연동하여 사용 할 때 
문제들을 일으킨다. 
그래서 내장 Date 클래스가 있음에도 불구하고
nodejs에서는 moment라는 외부모듈을 거의 표준적으로 사용하여
날짜와 시간을 관리한다. 
Date 클래스를 날짜와 숫자 형태의 문자열로 변환하는 일을 수행하고
날짜와 관련된 여러가지 연산을 수행하는 기능이 내장되어있다. 
*/
const moment = require("moment");

// bbsModel에 선언된 Schema를 가져와서 bbsVO모델 생성
var bbsVO = require("../models/bbsModel");

// localhost:3000/bbs/list URL접근했을 때
router.get("/list", function (req, res) {
  // bbsVO Model을 통해서 데이터를 모두 읽어오고(fint(조건문))
  // find문에 조건이 없어서 모두 읽어옴.
  // fint()가 정상적으로 수행되면 .then( function(bbsList) {})
  bbsVO.find().then(function (bbsList) {
    // bbsList.pug파일을 읽어서 rendering을 수행하도록 설정
    // rendering을 수행 할 때 bbsList파일을 ModelAttribute형식으로
    // 담아서 전송을 한다
    // 현재버전인 14.x버전에서는 {bbsList}라고 표현을 하면
    // 실제로 전달되는 방식은 {bbsList : bbsList}
    res.render("bbsList", { bbsList }); // {bbsList:bbsList}
  });
});

// localhost:3000/bbs/write URL요청
router.get("/write", function (req, res) {
  // bbsWrite.pug파일을 rendering하여 요청전송
  res.render("bbsWrite");
});

// form에 데이터를 입력하고 전송버튼을 눌러서 클릭했을 때 호출되는 URL
// form, input에 입력된 데이터를 담아서 보내면 그 데이터를
// 수신하는 함수
router.post("/write", function (req, res) {
  // req.body객체에 input의 name에 속성에 설정된 변수이름으로
  // 자동으로 담겨서 전송이 된다.
  // let b_title = req.body.b_title;
  // let b_write = req.body.b_write;
  // let b_text = req.body.b_text;

  // req.body객체에 b_date, b_time, b_write, b_count변수를 생성하고
  // 각각의 변수에 값을 세팅하라
  req.body.b_date = moment(new Date()).format("YYYY-MM-DD");
  req.body.b_time = moment(new Date()).format("HH:mm:ss");
  req.body.b_count = 0;

  // form에서 전송받은 데이터를 통째로 bbsVO객체로 생성하라
  // data에는 form에서 입력하여 전송한 데이터(작성자, 제목, 내용)와
  // 서버에서 임의로 추가한 데이터(날자, 시간, 카운트)를 모두 모아서
  // 하나의 vo객체러 생성을 하고
  // 거기에 DB CRUD와 관련된 함수들을 함께 추가하여 객체로 생성을해준다.
  let data = new bbsVO(req.body);

  // Data Create하기
  data
    .save() // 생성한 bbsVO(data)에 저장된 데이터를 mongoDB의 table에 insert
    .then(function (bbsVO) {
      // insert가 성공하면
      // res.json(bbsVO); // client에게 다시 데이터를 보여라
      // 완료가 되면 리스트 화면으로 점프
      res.redirect("/bbs/list");
    })
    .catch(function (error) {
      // insert가 실패하면
      console.error(error); // 오류메세지를 콘솔에 보여라
      // 웹화면에 데이터 추가가 잘못되었다는 메세지를 보여주는
      // 코드를 수행해야 한다.
    });

  // res.write(b_title);
  // res.write(b_write);
  // res.end(b_text);
  // res.json(req.body);
});

// localhost:3000/bbs/view/id값 URL 요청
// id값 : bbs의 각 라인(item)의 PK값
// PK값을 가지고 tbl_bbs에서 1개의 item값을 추출하여
// detail view에 보여주기
router.get("/view/:id", function (req, res) {
  let id = req.params.id;

  // findOne : findById()
  // {where : {_id:id}}
  // table의 _id값이 list에서 전달받은 id값과
  // 일치하는 item이 있는지 검사하는 코드
  bbsVO
    //   PK(_id)값이 id와 일치하는 데이터가 있는지 찾아라
    .findOne({ _id: id })
    .then(function (result) {
      // PK값과 일치하는 item이 있으면 그 결과를 result에 담아준다
      // res.json(result);
      // bbsView.pug를 rendering할 때 bbsVO라는 이름으로 전달하여 주어라
      res.render("bbsView", { bbsVO: result });
    })
    .catch(function (error) {
      console.error(error);
    });

  // res.send(id);
});

module.exports = router;
