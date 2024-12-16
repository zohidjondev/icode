const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("post");

const postTitle = document.getElementById("post-title");
const postContent = document.getElementById("post-content");

async function getPostDetails(postId) {
  try {
    const response = await fetch("posts.json");
    if (!response.ok) throw new Error("Could not fetch posts data");

    const posts = await response.json();

    // Find the post with the matching folder name
    const post = posts.find((p) => p.folder === postId);
    if (!post) throw new Error("Post not found");

    return post;
  } catch (error) {
    console.error("Error fetching post details:", error);
    return null;
  }
}

async function renderPost(postId) {
  try {
    // Fetch post details
    const post = await getPostDetails(postId);
    if (!post) {
      throw new Error("Post details not found");
    }

    // Use the title from the JSON instead of the folder name
    postTitle.textContent = post.title;

    // Fetch and render the markdown content
    const response = await fetch(`/icode/Posts/${postId}/post.md`);
    if (!response.ok) throw new Error("Markdown file not found");

    const markdownContent = await response.text();
    postContent.innerHTML = marked.parse(markdownContent);
  } catch (error) {
    postTitle.textContent = "Post Not Found";
    postContent.innerHTML = `<p>Sorry, the post you're looking for doesn't exist.</p>`;
    console.error("Error loading the post:", error);
  }
}

if (postId) {
  renderPost(postId);
} else {
  postTitle.textContent = "No Post Selected";
  postContent.innerHTML = `<p>Please select a post from the menu.</p>`;
}
