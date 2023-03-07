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
            <button onclick="updateBlog('${blog.id}')" id="button">Update</button>
            <button onclick="deleteBlog('${blog.id}')" id="delete">Delete</button>
        </div>`
    })
}

const customHeaders={
    "Content-Type": "application/json",
}

function deleteBlog(blogId){
    fetch('https://apidiogo-production.up.railway.app/delete/' + blogId, {
        method: 'POST',
        headers: customHeaders,

    }).then(response => response.json());
    alert("Artigo Apagado!")
    fetchBlogs();
}

function updateBlog(blogId){
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const image_url = document.getElementById('image_url');
    const data = {
        id: blogId,
        title: title.value,
        description: description.value,
        image_url: image_url.value
    }
    fetch('https://apidiogo-production.up.railway.app/edit', {
        method: 'POST',
        headers: customHeaders,
        body: JSON.stringify(data),
        
    }).then((response) => response.json());
    alert("Artigo Atualizado!");
    fetchBlogs();
}

fetchBlogs();
