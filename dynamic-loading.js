let limit = 3; 
let page = 1; 


function fetchPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error: ' + response.status);
            }
            return response.json();
        })
        .then((posts) => {
            let container = document.getElementById("mainTable");
          
            posts.forEach((post) => {
                const article = document.createElement("article");
                const title = document.createElement("h1");
                title.textContent = post.title;
                const body = document.createElement("p");
                body.textContent = post.body;
                article.appendChild(title);
                article.appendChild(body);
                container.appendChild(article);
               
            });
            page++; 
        })
}


fetchPost();
fetchPost();


window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight -1) {
        fetchPost(); 
    }
});
