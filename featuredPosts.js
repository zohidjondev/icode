document.addEventListener("DOMContentLoaded", async () => {
  const postGrid = document.querySelector(".post-grid");

  try {
    const response = await fetch("posts.json");
    if (!response.ok) throw new Error("Could not fetch posts.");

    const posts = await response.json();

    // Sort posts by date in descending order
    const sortedPosts = posts.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    // Get only the latest 3 posts
    const latestPosts = sortedPosts.slice(0, 3);

    postGrid.innerHTML = ""; // Clear existing content

    latestPosts.forEach((post) => {
      const postElement = document.createElement("article");
      const postDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      postElement.classList.add("post");

      const coverImagePath = `/icode/Posts/${post.folder}/cover.jpg`;
      const fallbackImagePath = "/icode/Style/Imgs/default.png";

      // Check if the image exists
      const img = new Image();
      img.src = coverImagePath;

      img.onload = () => {
        // If image loads successfully
        postElement.style.backgroundImage = `url('${coverImagePath}')`;
        postElement.style.backgroundSize = "cover";
        postElement.style.backgroundPosition = "center";
      };

      img.onerror = () => {
        // If image fails to load, use a fallback image
        console.warn(
          `Cover image not found for ${post.folder}, using fallback.`
        );
        postElement.style.backgroundImage = `url('${fallbackImagePath}')`;
        postElement.style.backgroundSize = "cover";
        postElement.style.backgroundPosition = "center";
      };

      postElement.innerHTML = `
        <div class="post-overlay"></div>
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <p class="post-date">${postDate}</p>
        <a href="post.html?post=${post.folder}">Batafsil o'qish</a>
      `;

      postGrid.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error loading posts:", error);
    postGrid.innerHTML = `<p>Unable to load posts. Please try again later.</p>`;
  }
});
