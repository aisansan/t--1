var product = ['整蛋白','短肽','呵童','健素','保素','康素','呵肾','呵透',];
var product_c;
var bing_c;
var ai;
var shen;
var birthday;
var sex;
var shengao;
var tizhong;
var huodong;
var jinshi;
function test(){
console.log("product_c："+product_c);
console.log();
console.log("ai:"+ai);
console.log("shengao:"+shengao);
console.log("tizhong:"+tizhong);
console.log("sex:"+sex);
console.log("birthday:"+birthday);
}
// function ages(str)
// {
// var r  =   str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
// if(r==null)return   false;
// var   d=   new   Date(r[1],   r[3]-1,   r[4]);
// if   (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4])
// {
// var   Y   =   new   Date().getFullYear();
// return("年龄   =   "+   (Y-r[1])   +"   周岁");
// }
// return("输入的日期格式错误！");
// }
/*根据出生日期算出年龄*/  
function ages(strBirthday){         
    var returnAge;  
    var strBirthdayArr=strBirthday.split("-");  
    var birthYear = strBirthdayArr[0];  
    var birthMonth = strBirthdayArr[1];  
    var birthDay = strBirthdayArr[2];  
      
    d = new Date();  
    var nowYear = d.getFullYear();  
    var nowMonth = d.getMonth() + 1;  
    var nowDay = d.getDate();  
      
    if(nowYear == birthYear){  
        returnAge = 0;//同年 则为0岁  
    }  
    else{  
        var ageDiff = nowYear - birthYear ; //年之差  
        if(ageDiff > 0){  
            if(nowMonth == birthMonth) {  
                var dayDiff = nowDay - birthDay;//日之差  
                if(dayDiff < 0)  
                {  
                    returnAge = ageDiff - 1;  
                }  
                else  
                {  
                    returnAge = ageDiff ;  
                }  
            }  
            else  
            {  
                var monthDiff = nowMonth - birthMonth;//月之差  
                if(monthDiff < 0)  
                {  
                    returnAge = ageDiff - 1;  
                }  
                else  
                {  
                    returnAge = ageDiff ;  
                }  
            }  
        }  
        else  
        {  
            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天  
        }  
    }  
      
    return returnAge;//返回周岁年龄  
  }
function beeW(shengao,tizhong,sex,birthday){
	var  beew= (655.1+1.85*shengao+9.563*(tizhong/2)-4.676*ages(birthday))*4.181;
	console.log('bee='+beew);
	return beew;

}
function getHeight(){
var win_height = $(window).height()-40;
return win_height;
}
function heightAuto(that){
console.log(that);
$(that).css('height', 'auto');
}
function next(s,d){
heightAuto(s);
$(d).height(getHeight());
$(d).show();
$.smoothScroll({scrollTarget: d});
}
function bmi(t,s){
var bmi = (t/2)/((s/100)*(s/100));
console.log(bmi);
if(bmi>=18.5){
return 0;
}
else {
return 3;
}
}
function caculate(){
var zongfen = Number(fen0) + bmi(tizhong,shengao) + Number(fen7);
console.log('bmi:'+bmi(tizhong,shengao));
if(p>=0.05)
{
zongfen +=  Number(fen4);
}
if(isxiajiang){
zongfen +=  Number(fen6);
}
return zongfen;
}
function start(){
$("#start").click(function(event) {
$(".hello2").hide();
$("#qqq0").height(getHeight());
$("#qqq0").show();
});
//问题1
$("#qqq0 .answer-wrap label").click(function(event) {
fen0 = $(this).attr('fen');
if(fen0=="1"){
$('#qqq12').hide();
next('#qqq0','#qqq11');
}
else {
$('#qqq11').hide();
next('#qqq0','#qqq12')}
});
//问题2-1
$("#qqq11  .yuan").click(function(event) {
$("qqq12").hide();
$("qqq121").hide();
$("qqq122").hide();
product_c = $(this).attr('fen');
next('#qqq11','#qqq2');
});
//问题2-2
$("#qqq12  label").click(function(event) {
$("qqq11").hide();
bing_c = Number($(this).attr('fen'));
if(bing_c>=0 && bing_c <=3){
$('#qqq121').hide();
$('#qqq122').hide();
next('#qqq12','#qqq2');
}
else if(bing_c == 4){
$('#qqq122').hide();
next('#qqq12','#qqq121');
}
else {
$('#qqq121').hide();
next('#qqq12','#qqq122')
}
});
//问题2-2-1
$("#qqq121 label").click(function(event) {
ai = Number($(this).attr('fen'));
next('#qqq121','#qqq2');
});
//问题2-2-2
$("#qqq122 label").click(function(event) {
shen = Number($(this).attr('fen'));
next('#qqq122','#qqq2');
});
//问题3
$("#qqq2 label").click(function(event) {
birthday = $('#birthday').val();
if(birthday){next('#qqq2','#qqq3');}
else{
alert("请输入出生日期");
}

});
//问题4
$("#qqq3 .sex").click(function(event) {
sex = $(this).attr("sex");
console.log("sex:"+sex);
next("#qqq3","#qqq4");
});
//问题5
$("#qqq4 label").click(function(event) {
console.log("shengao:"+shengao);
next("#qqq4","#qqq5");
});
//问题6
$("#qqq5 label").click(function(event) {
tizhong = Number($("#tizhong").val());
console.log("tizhong:"+tizhong);
next("#qqq5","#qqq6");
});
//问题7
$("#qqq6 label").click(function(event) {
huodong = $(this).attr("fen");
console.log("huodong:"+huodong);
next("#qqq6","#qqq7");
});
//问题8
$("#qqq7 label").click(function(event) {
jinshi = $(this).attr("fen");
shengao = Number($("#shengao").val());
console.log("jinshi:"+jinshi);
console.log(ages(birthday));
test();
if(sex==1){
	console.log(beeW(shengao,tizhong,sex,birthday));
}

});  
//
$("#qqq8 label").click(function(event) {
fen7 = $(this).attr('fen');
shengao = Number($("#shengao").val());
var zongfen = caculate();
$(".wenjuan").hide();
$("#fenshu").html(zongfen);
if(Number(zongfen)>=3){
$('#jianyi').html("<b style='color:#f29d16;'>你有营养不良或有营养风险，应进行营养干预</b>");
}
else {
$('#jianyi').html("<b style='color:green;'>您的身体很健康,请记得每周按时复查</b>");
}
$(".result").show();
console.log(caculate());
});
$("#restart").click(function(event) {
location.href= "http://shop.jindu999.com/t";
});




}
function init(){
start();
}
init();
$("#birthday").calendar({
value:["1989-3-26"],
});
//['10','11','12','13','14','15','16','17','18','19',] -->
//<!-- ['0','1','2','3','4','5','6','7','8','9',] -->
//<!-- ['0斤','1斤','2斤','3斤','4斤','5斤','6斤','7斤','8斤','9斤',] -->
//<!-- ['10','11','12','13','14','15','16','17','18','19',] -->										<script>
// function abc(){
// 	shengao = $("#shengao").val();
// 	console.log(shengao);
// 	console.log("改变了");
// }
$("#shengao").picker({
title: "请选择您的身高",
cols: [
{
textAlign: 'center',
// onChange:abc(),
// onClose:abc(),
values: ['140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160', '161', '162', '163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188'],
displayValues:['140cm','141cm','142cm','143cm','144cm','145cm','146cm','147cm','148cm','149cm','150cm','151cm','152cm','153cm','154cm','155cm','156cm','157cm','158cm','159cm','160cm', '161cm', '162cm', '163cm', '164cm', '165cm', '166cm', '167cm', '168cm', '169cm', '170cm', '171cm', '172cm', '173cm', '174cm', '175cm', '176cm', '177cm', '178cm', '179cm', '180cm', '181cm', '182cm', '183cm', '184cm', '185cm', '186cm', '187cm', '188cm']
}
]
});
$("#tizhong").picker({
title: "请选择您的体重",
cols: [
{
textAlign: 'center',
values: ['50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126','127','128','129','130','131','132','133','134','135','136','137','138','139','140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180','181','182','183','184','185','186','187','188','189',],
displayValues:['50斤','51斤','52斤','53斤','54斤','55斤','56斤','57斤','58斤','59斤','60斤','61斤','62斤','63斤','64斤','65斤','66斤','67斤','68斤','69斤','70斤','71斤','72斤','73斤','74斤','75斤','76斤','77斤','78斤','79斤','80斤','81斤','82斤','83斤','84斤','85斤','86斤','87斤','88斤','89斤','90斤','91斤','92斤','93斤','94斤','95斤','96斤','97斤','98斤','99斤','100斤','101斤','102斤','103斤','104斤','105斤','106斤','107斤','108斤','109斤','110斤','111斤','112斤','113斤','114斤','115斤','116斤','117斤','118斤','119斤','120斤','121斤','122斤','123斤','124斤','125斤','126斤','127斤','128斤','129斤','130斤','131斤','132斤','133斤','134斤','135斤','136斤','137斤','138斤','139斤','140斤','141斤','142斤','143斤','144斤','145斤','146斤','147斤','148斤','149斤','150斤','151斤','152斤','153斤','154斤','155斤','156斤','157斤','158斤','159斤','160斤','161斤','162斤','163斤','164斤','165斤','166斤','167斤','168斤','169斤','170斤','171斤','172斤','173斤','174斤','175斤','176斤','177斤','178斤','179斤','180斤','181斤','182斤','183斤','184斤','185斤','186斤','187斤','188斤','189斤',]
}
]
});
$("#xiajiang").picker({
title: "体重下降多少斤？",
cols: [
{
textAlign: 'center',
values: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'],
displayValues:['0斤','1斤','2斤','3斤','4斤','5斤','6斤','7斤','8斤','9斤','10斤','11斤','12斤','13斤','14斤','15斤','16斤','17斤','18斤','19斤','20斤','21斤','22斤','23斤','24斤','25斤','26斤','27斤','28斤','29斤','30斤','31斤','32斤','33斤','34斤','35斤','36斤','37斤','38斤','39斤','40斤','41斤','42斤','43斤','44斤','45斤','46斤','47斤','48斤','49斤','50斤以上']
}
]
});
$(".bt-item").click(function(event) {
/* Act on the event */
$(".bt-item").css('background-color', '#0a7309');
$(this).css('background-color', '#025a02');
});