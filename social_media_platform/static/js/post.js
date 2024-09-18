// Get the search input and button elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

// Add an event listener to the search button
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== '') {
    // Simulate API response data
    const searchData = [
      {
        profile_picture: 'profile-picture1.jpg',
        username: 'user1',
        bio: 'This is a sample bio for user1'
      },
      {
        profile_picture: 'profile-picture2.jpg',
        username: 'user2',
        bio: 'This is a sample bio for user2'
      },
      {
        profile_picture: 'profile-picture3.jpg',
        username: 'user3',
        bio: 'This is a sample bio for user3'
      }
    ];

    // Display the search results
    searchResults.innerHTML = '';
    searchData.forEach(result => {
      const searchResultHTML = `
        <div class="search-result">
          <img src="${result.profile_picture}" alt="Profile Picture">
          <div class="result-info">
            <h2>${result.username}</h2>
            <p>Username: @${result.username}</p>
            <p>Bio: ${result.bio}</p>
          </div>
          <button class="follow-btn">Follow</button>
        </div>
      `;
      searchResults.innerHTML += searchResultHTML;
      searchResults.classList.toggle('d-none');
    });
  }
});






















// document.addEventListener('DOMContentLoaded', () => {
//     const postButton = document.getElementById('post-btn');
//     const postContent = document.getElementById('post-content');
//     const postsContainer = document.getElementById('posts');
    
//     postButton.addEventListener('click', () => {
//         const content = postContent.value.trim();
        
//         if (content) {
//             const postElement = document.createElement('div');
//             postElement.className = 'post';
//             postElement.innerHTML = `<p>${content}</p>`;
            
//             postsContainer.prepend(postElement);
//             postContent.value = ''; // Clear the textarea
//         }
//     });
// });


// function active(){
//     let postspace = document.getElementById("feed");
//     let text = document.getElementById("textbtn");
//     if (postspace.style.display=="none") {
//         postspace.style.display="block";
//         text.innerHTML="Create new post";
//     }else{
//         postspace.style.display="none";
//         text.innerHTML="Click here to Create new post";
//     }
// }