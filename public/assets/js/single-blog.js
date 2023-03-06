

const id = sessionStorage.getItem("id");
console.log(id)

function fetchBlogs() {
    fetch('https://apidiogo-production.up.railway.app/blogs/' + id)
        .then(response => response.json())
        .then(blogs => renderBlog(blogs))
        
}

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
    <li><a onclick="getID('${blog5.id}')" href="single-news.html">${blog5.title}.</a></li>
    `
})

    
}

function renderBlog(blogs){
    blogs.data.forEach(function(blog){
        document.getElementById("title").innerHTML = blog.title;
        document.getElementById("description").innerHTML = blog.description
        document.getElementById("image_url").style.backgroundImage = `url('${blog.image_url}')`

    });
    
}


function getID(blog_id){
    var id = blog_id;
    sessionStorage.setItem("id", id)
    console.log(id)
}


fetchBlogs5();
fetchBlogs();
