// comments.js

// Función para añadir un comentario a un post específico
const addComment = (postIndex, commentText) => {
    if (!posts[postIndex].comments) {
        posts[postIndex].comments = [];
    }
    posts[postIndex].comments.push(commentText);
    displayPosts();
};

// Función para eliminar un comentario de un post específico
const deleteComment = (postIndex, commentIndex) => {
    if (posts[postIndex].comments && posts[postIndex].comments.length > commentIndex) {
        posts[postIndex].comments.splice(commentIndex, 1);
        displayPosts();
    }
};
