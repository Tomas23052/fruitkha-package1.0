function fetchBlogs() {
    fetch('https://apidiogo-production.up.railway.app/blogs/')
        .then(response => response.json())
        .then(blogs => renderBlog(blogs))
}

const blogsC = document.getElementById('blogs')
function renderBlog(blogs){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    blogsC.innerHTML = ""
    blogs.data.forEach(function(blog){
        const date = new Date(blog.__createdtime__)
        blogsC.innerHTML += `
        <div class="col-lg-4 col-md-6">
        <div class="single-latest-news">
            <a onclick="getID('${blog.id}')"href="single-news.html"><div id="${blog.id}" class="latest-news-bg news-bg-1" style="background-image: url('${blog.image_url}');"></div></a>
            <div class="news-text-box">
                <h3><a href="single-news.html">${blog.title}.</a></h3>
                <p class="blog-meta">
                    <span class="date"><i class="fas fa-calendar"></i> ${date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear()}</span>
                </p>
                <p class="excerpt">${descBlog(blog.description)}</p>
                <a href="single-news.html" id="readmore" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
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

fetchBlogs();