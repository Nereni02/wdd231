// scripts/directory.js

// ✅ Display current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ✅ Directory element reference
const directory = document.getElementById("directory");

// ✅ Fetch member data and display it
async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error loading member data:", error);
  }
}

// ✅ Function to build member cards dynamically
function displayMembers(members) {
  directory.innerHTML = ""; // Clear previous content
  members.forEach((member) => {
    const article = document.createElement("article");
    article.classList.add("member-card");

    // Membership level text
    let levelText = "";
    switch (member.membershipLevel) {
      case 3:
        levelText = "🌟 Gold Member";
        break;
      case 2:
        levelText = "⭐ Silver Member";
        break;
      default:
        levelText = "Member";
    }

    article.innerHTML = `
      <img src="${member.image}" alt="${member.name} Logo" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p class="membership">${levelText}</p>
    `;

    directory.appendChild(article);
  });
}

// ✅ View toggle buttons
const gridButton = document.getElementById("grid-view");
const listButton = document.getElementById("list-view");

gridButton.addEventListener("click", () => {
  directory.classList.add("grid-view");
  directory.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
  directory.classList.add("list-view");
  directory.classList.remove("grid-view");
});

// ✅ Call the fetch function
getMembers();
