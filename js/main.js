// main.js

// Función Arrow para crear un nuevo post
const createPost = (title, description, date) => {
    posts.push({ title, description, date, comments: [] });
    displayPosts();
};

// Función Arrow para añadir un comentario a un post
const addComment = (postIndex, comment) => {
    posts[postIndex].comments.push(comment);
    displayPosts();
};

// Función Arrow para editar un comentario
const editComment = (postIndex, commentIndex, newComment) => {
    posts[postIndex].comments[commentIndex] = newComment;
    displayPosts();
};

// Función Arrow para eliminar un comentario
const deleteComment = (postIndex, commentIndex) => {
    posts[postIndex].comments.splice(commentIndex, 1);
    displayPosts();
};

// Función para filtrar un post por palabra clave del título
const filterPosts = keyword => {
    const filteredPosts = posts.filter(post => post.title.includes(keyword));
    displayFilteredPosts(filteredPosts);
};

// Función para mostrar posts dinamicamente
const displayPosts = () => {
    $('#postsContainer').empty();
    posts.forEach((post, index) => {
        const postHtml = `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <span>${post.date}</span>
                <div class="comments">
                    ${post.comments.map((comment, i) => `<p>${comment}</p><button onclick="deleteComment(${index}, ${i})">Delete</button>`).join('')}
                </div>
                <input type="text" id="newComment${index}" placeholder="Add a comment">
                <button onclick="addComment(${index}, $('#newComment${index}').val())">Add Comment</button>
            </div>
        `;
        $('#postsContainer').append(postHtml);
    });
};

// Función para mostrar posts filtrados
const displayFilteredPosts = filteredPosts => {
    $('#postsContainer').empty();
    filteredPosts.forEach(post => {
        const postHtml = `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <span>${post.date}</span>
                <div class="comments">
                    ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
                </div>
            </div>
        `;
        $('#postsContainer').append(postHtml);
    });
};

$(document).ready(() => {
    // Mostrar Posts
    displayPosts();

    // Evento para filtrar Posts
    $('#filterButton').click(() => {
        const keyword = $('#filterInput').val();
        filterPosts(keyword);
    });
});
