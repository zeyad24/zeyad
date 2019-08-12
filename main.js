$(document).ready(function () {
    $('.menu-toggler').on('click',function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    
     $('.top-nav .nav-link').on('click',function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
  
});
this.alert('welcome to our unofficial web site for barça community');
var questions=[
    {
        prompt:"what is the greet scoccer for BARCA?\n (a)messi\n (b)suarez\n (c)cotionuo ",
        answer:"a"
    },
    {
        prompt:"how many times has barca won la liga?\n (a)7\n (b)26\n (c)20 ",
        answer:"b"
    },
    {
        prompt:"who is the most player who take part in matches ?\n (a)messi\n (b)inista\n (c)xavi",
        answer:"c"
    },
     {
        prompt:"who is the best coach for barca ?\n (a)valverdi\n (b)pep gardiola\n (c)inreki",
        answer:"b"
    },
     {
        prompt:"who scored the 5th goal in real madrid in 2019 ?\n (a)suarez\n (b)vidal\n (c)cotinuo",
        answer:"b"
    },
    {
        prompt:"who is the pistolero ?\n (a)suarez\n (b)ZEYAD MOHSEN\n (c)AHMED KAMAL",
        answer:"a"
    },
]
var score=0;
for(var i=0 ; i<questions.length; i++){
    var response=window.prompt(questions[i].prompt);
    if(response==questions[i].answer){
        score++;
    //    alert('corect!');
       }else{
           alert('WRONG!')
       }
}
alert("You Got " + score + "/" +questions.length );
if(score==6){
    alert('you are form best barca fans')
}else if(score==5){
    alert('you are from good barca fans')
}else if(score==4){
    alert('you are from bad barca fans')
}else{
    alert('you should go and support pyramides as they do not have history')
}
