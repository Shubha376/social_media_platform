// script.js

document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.getElementById('post-btn');
    const postContent = document.getElementById('post-content');
    const postsContainer = document.getElementById('posts');
    
    postButton.addEventListener('click', () => {
        const content = postContent.value.trim();
        
        if (content) {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `<p>${content}</p>`;
            
            postsContainer.prepend(postElement);
            postContent.value = ''; // Clear the textarea
        }
    });
});
