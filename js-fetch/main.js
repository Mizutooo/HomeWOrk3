const posts = document.querySelector(".posts");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
// let sort = "";

const getData = (sort, page) => {
  posts.innerHTML = "<div></div>";
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_sort=${sort}&_order=desc&_page=${page}`,
  )
    .then(async (response) => await response.json())
    .then(
      async (json) =>
        await json?.forEach((item) => {
          const post = document.createElement("div");
          post.className = "post";
          post.innerHTML = `
            <h2><span>${item.id}.</span> ${item.title.toUpperCase()}</h2>
            <p>${item.body}</p>
     `;

          posts.appendChild(post);
        }),
    );
};
getData();
button1.addEventListener("click", (e) => {
  //   sort = "id";
  //   console.log(sort);
  getData("id");
});

button2.addEventListener("click", () => {
  //   sort = "name";
  //   console.log(sort);
  getData("name");
});
button3.addEventListener("click", () => {
  //   sort = "body";
  //   console.log(sort);
  getData("body");
});

const list = document.createElement("ul");
list.className = "pagination";
document.body.appendChild(list);

Array.from(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]).forEach((item) => {
  const listItem = document.createElement("li");
  listItem.addEventListener("click", (e) => {
    e.preventDefault();
    getData("", item);
  });
  listItem.textContent = item;
  listItem.className = "number";
  list.appendChild(listItem);
});

const post = 1; 

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post}`)
  .then(response => response.json())
  .then(comments => {
    console.log(comments); 
  })
  .catch(error => {
    console.error(error);
  });

  const commentsButton = document.getElementById('comments-button');
  const commentsList = document.getElementById('comments-list');
  const postId = 1;

commentsButton.addEventListener('click', () => {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(comments => {

      commentsList.innerHTML = '';

      commentsButton.innerHTML = '';
      
      comments.forEach(comment => {
        const li = document.createElement('li');
        li.innerText = comment.body;
        commentsList.appendChild(li);
      });
      
      commentsList.style.display = 'block';
    })
    .catch(error => {
      console.error(error);
    });
});