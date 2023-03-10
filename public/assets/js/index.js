function fetchBlogs3(){
    fetch('https://apidiogo-production.up.railway.app/blogs/few3')
    .then(response => response.json())
    .then(blogs3 => renderBlog3(blogs3))
}


const blogC = document.getElementById("blogs3");
function renderBlog3(blogs3){
blogC.innerHTML=""
var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',	'Novembro', 'Dezembro'];

    blogs3.data.forEach(function(blog3){
        const date = new Date(blog3.__createdtime__)
        blogC.innerHTML +=`
        <div class="col-lg-4 col-md-6">
        <div class="single-latest-news">
            <a onclick="getID('${blog3.id}')"href="single-news.html?id=${blog3.id}"><div id="${blog3.id}" class="latest-news-bg news-bg-1" style="background-image: url('${blog3.image_url}');"></div></a>
            <div class="news-text-box">
                <h3><a href="single-news.html">${blog3.title}.</a></h3>
                <p class="blog-meta">
                    <span class="date"><i class="fas fa-calendar"></i> ${date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear()}</span>
                </p>
                <p class="excerpt">${descBlog(blog3.description)}</p>
                <a onclick="getID('${blog3.id}')" href="single-news.html?id=${blog3.id}" id="readmore" class="read-more-btn">Ler mais <i class="fas fa-angle-right"></i></a>
                </div>
        </div>`
        
    })
}

function getID(blog_id){
    var id = blog_id;
    sessionStorage.setItem("id", id)
    console.log(id)
}




function descBlog(blog_string){
    var string = blog_string;
    if(string.length > 150){
        return string.substring(0,150) + "..."
    }
    return string;
}

fetchBlogs3();