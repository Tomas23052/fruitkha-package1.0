function createBlog(){

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const image_url = document.getElementById('image_url');
    console.log(title.value)
    console.log(description.value)
    console.log(image_url.value)
    const data= {
        title: title.value,
        description: description.value,
        image_url: image_url.value
    };
    const customHeaders={
        "Content-Type": "application/json",
    }
    fetch('https://apidiogo-production.up.railway.app/add', {
        method: 'POST',
        headers: customHeaders,
        body: JSON.stringify(data),

    }).then((response) => response.json())
    .then((data)=> {
        console.log(data);
    });
}

const btn = document.getElementById("publish");

btn.addEventListener("click", function handleChange(event){
    createBlog();
    alert("Artigo Publicado!")
     
 });

