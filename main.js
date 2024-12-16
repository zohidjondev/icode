document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const post = params.get("post");

  if (post) {
    fetch(`Posts/${post}/post.md`) // Ensure it fetches from the correct folder
      .then((response) => {
        if (!response.ok) throw new Error("Markdown file not found");
        return response.text();
      })
      .then((markdown) => {
        const content = document.getElementById("post-content");
        content.innerHTML = marked.parse(markdown);
      })
      .catch((error) => {
        console.error("Error loading the post:", error);
        document.getElementById("post-content").innerHTML =
          `<p>Unable to load the post. Please try again later.</p>`;
      });
  } else {
    document.getElementById("post-content").innerHTML =
      `<p>No post selected. Please choose a post to view its content.</p>`;
  }
});
