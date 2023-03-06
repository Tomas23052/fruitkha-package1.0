const id = sessionStorage.getItem("id");
console.log(id)

function fetchBlogs() {
    fetch('https://apidiogo-production.up.railway.app/blogs/' + id)
        .then(response => response.json())
        .then(blogs => renderBlog(blogs))
        
}



function renderBlog(blogs){
    blogs.data.forEach(function(blog){
        document.getElementById("title").innerHTML = blog.title;
        document.getElementById("description").innerHTML = blog.description
        document.getElementById("image_url").style.backgroundImage = `url('${blog.image_url}')`

    });
    
}

fetchBlogs();
