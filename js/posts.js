// posts.js

// Array para almacenar posts
let posts = [];

// Función para incializar datos de posts 
const initializePosts = () => {
    // Post de Ejemplo
    posts.push({
        title: "Post de Bienvenida",
        description: "Este es un post de Bienvenida de la aplicación de Red Social.",
        date: new Date().toLocaleDateString(),
        comments: []
    });
    displayPosts();
};

// Llamada a la Incialización de Posts
$(document).ready(() => {
    initializePosts();
});
