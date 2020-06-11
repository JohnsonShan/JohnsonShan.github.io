if (document.querySelector('.my-footer') != null) {
document.querySelector('.my-footer').innerHTML = `
<p class='shadow-sm p-3 mb-5 bg-white rounded '>
© Copyright  ${new Date().getFullYear()}  Johnson Shan - All Rights Reserved
</p> 
`;
}
if (document.querySelector('.my-nav') != null) {
    document.querySelector('.my-nav').innerHTML = `
<ul class='shadow-sm p-3 mb-5 bg-white rounded '>
<li><a href="index.html">Home</a></li>
<li><a href="practice.html ">Practice</a></li>
<li><a href="studylog.html">StudyLog</a></li>
</ul>
`;
}

if (document.querySelector('.my-nav-blog') != null) {
    document.querySelector('.my-nav-blog').innerHTML = `
<ul class='shadow-sm p-3 mb-5 bg-white rounded '>
<li><a href="../index.html">Home</a></li>
<li><a href="../practice.html ">Practice</a></li>
<li><a href="../studylog.html">StudyLog</a></li>
</ul>
`;
}

