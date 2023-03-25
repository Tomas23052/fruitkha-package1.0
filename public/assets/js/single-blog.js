


const params = new Proxy(new URLSearchParams(window.location.search),{
    get: (searhParams,prop) => searhParams.get(prop),
});

let value = params.id;

function fetchBlogs() {
    fetch('https://apidiogo-production.up.railway.app/blogs/' + params.id)
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
    <li><a onclick="getID('${blog5.id}')" href="notícia.html?id=${blog5.id}">${blog5.title}.</a></li>
    `
})

    
}

function renderBlog(blogs){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    blogs.data.forEach(function(blog){
        const date = new Date(blog.__createdtime__)
        document.getElementById("titleM").innerHTML = blog.title;
        document.getElementById("title").innerHTML = blog.title;
        document.getElementById("description").innerHTML = blog.description
        document.getElementById("titled").innerHTML = "Notícia sobre " + blog.title;
        document.getElementById("image_url").style.backgroundImage = `url('${blog.image_url}')`
        document.getElementById("date").innerHTML = `<span id="date" class="date"><i class="fas fa-calendar"></i>${date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear()}</span>`

    });
    
}


function getID(blog_id){
    var id = blog_id;
    sessionStorage.setItem("id", id)
    
}


fetchBlogs5();
fetchBlogs();
