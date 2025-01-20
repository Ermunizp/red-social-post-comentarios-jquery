// main.js

// Arrow function to create a new post
const createPost = (title, description, date) => {
    posts.push({ title, description, date, comments: [] });
    displayPosts();
};

// Arrow function to add a comment to a post
const addComment = (postIndex, comment) => {
    posts[postIndex].comments.push(comment);
    displayPosts();
};

// Arrow function to edit a comment
const editComment = (postIndex, commentIndex, newComment) => {
    posts[postIndex].comments[commentIndex] = newComment;
    displayPosts();
};

// Arrow function to delete a comment
const deleteComment = (postIndex, commentIndex) => {
    posts[postIndex].comments.splice(commentIndex, 1);
    displayPosts();
};

// Function to filter posts by keyword in title
const filterPosts = keyword => {
    const filteredPosts = posts.filter(post => post.title.includes(keyword));
    displayFilteredPosts(filteredPosts);
};

// Function to display posts dynamically
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

// Function to display filtered posts
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
    // Initial posts display
    displayPosts();

    // Event listener for filtering posts
    $('#filterButton').click(() => {
        const keyword = $('#filterInput').val();
        filterPosts(keyword);
    });
});
