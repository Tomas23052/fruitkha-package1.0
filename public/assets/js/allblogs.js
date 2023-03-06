function fetchBlogs() {
    fetch('https://apidiogo-production.up.railway.app/blogs/')
        .then(response => response.json())
        .then(blogs => renderBlog(blogs))
}

const blogsC = document.getElementById('blogs')
function renderBlog(blogs){
    blogsC.innerHTML = ""
    blogs.data.forEach(function(blog){
        blogsC.innerHTML += `
        <div class="blog" data-id=${blog.id}>
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <img src= "${blog.image_url}">
            <button id="button">Show</button>
            <button id="delete" name="${blog.id}">Delete</button>
        </div>`
    })
}

fetchBlogs();
