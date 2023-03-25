function fetchBlogs5(){
    fetch('https://apidiogo-production.up.railway.app/blogs/few')
    .then(response => response.json())
    .then(blogs5 => renderBlog5(blogs5))
}

const blogC = document.getElementById("blogs5");
function renderBlog5(blogs5){
blogC.innerHTML=""
blogs5.data.forEach(function(blog5){
    blogC.innerHTML +=`
    <li><a onclick="getID('${blog5.id}')" href="notícia.html?id=${blog5.id}">${blog5.title}.</a></li>
    `
})
}

function getID(blog_id){
    var id = blog_id;
    sessionStorage.setItem("id", id)
}


fetchBlogs5();