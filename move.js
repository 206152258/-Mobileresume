
var result=`
/*面试官你好
 *我是孙聪
 *来自武汉商学院
 *只用文字介绍太单调了
 *我就用代码来介绍吧
 *首先准备一些样式
 */

body{
    background:rgb(222,222,222);
}
*{
    transition:all 1s;
}
#code{
    border:1px solid green;
    padding:10px;
    
}
/*现在我们来一点高亮*/
.token.selector{
    color:#690;
}
.token.punctuation
{
    color:#999;
}
.token.property{
    color:#dd4a68;
}
/*现在我们加点3D效果*/
#code{
    transform:skewY(170deg);
}
/*不玩了，现在正式开始我的自我介绍*/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}
`
var result2=`
    /*现在我们需要一张白纸*/
    #paper{
        position:fixed;
        right:0;
        width:50%;
        height:100%;
        background-color:gray;
        
        display:fixed;
        justify-content:center;
        align-items:center; 
        transform:skewY(20deg);
    }
    #paper>.content{
    background-color:white;
    height:100%;
    width:100%;
    }
    `
    var md=`
    #自我介绍
    我叫xxxx
    199612出生 
    xxx年毕业 
    学习前端一年 
    项目：苹果风格轮播  个人简历  无缝轮播  canvas画板
    `
function writeCode(prefix,code,fn){
    var n=0;
    var domCode=document.querySelector('#code');
    domCode.innerHTML=prefix||'';
    var clear=setInterval(() => {
    n++;
    styleTag.innerHTML=prefix+code.substring(-1,n);
    // code.innerHTML=result.substring(-1,n);
    domCode.innerHTML=Prism.highlight(prefix+code.substring(-1,n),Prism.languages.css)
    domCode.scrollTop=1000;
    if(n>=code.length){
        clearInterval(clear);
         fn.call();
        
    }
   
}, 10);
}
writeCode('',result,()=>{createPaper(
    ()=>{
        console.log(2);
       writeCode(result,result2,()=>{
           writeMarkdown(md);
       });
    }
)});



function createPaper(fn){
    var paper=document.createElement('div');
     paper.id='paper';
    document.body.appendChild(paper);
    var content=document.createElement('pre');
    content.className='content';
    paper.appendChild(content);
    fn.call();
    
}

    

function fn3(fn){
    
    console.log(2);
    var n=0;
    var id=setInterval(() => {
        n++;
        code.innerHTML=Preresult+result.substring(0,n);
        code.innerHTML=Prism.highlight(code.innerHTML,Prism.languages.css);
        styleTag.innerHTML=Preresult+result.substring(0,n);
        if(n>=result.length){
            clearInterval(id);
        }
    }, 50);
}

function writeMarkdown(markdown,fn){
    let dompaper=document.querySelector('#paper>.content');
    let n=0;
    console.log(dompaper);
    var clear=setInterval(() => {
        n++;
        // code.innerHTML=result.substring(-1,n);
        dompaper.innerHTML=markdown.substring(0,n);
        dompaper.scrollTop=dompaper.scrollHeight;
        if(n>=markdowm.length){
            clearInterval(clear);
             fn.call();
            
        }
       
    }, 10);

}
// 代码高亮
// var Prism = require('prismjs');

// // The code snippet you want to highlight, as a string
// var code = "var data = 1;";

// // Returns a highlighted HTML string
// var html = Prism.highlight(code, Prism.languages.javascript, 'javascript');