// ===== Responsive Navigation =====
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// ===== Dynamic Footer =====
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// ===== Courses Data =====
const courses = [
  { subject: "CSE", number: 110, title: "Introduction to Programming", credits: 2, completed: true },
  { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, completed: true },
  { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: false },
  { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 2, completed: false },
  { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, completed: false },
  { subject: "WDD", number: 231, title: "Frontend Web Development I", credits: 2, completed: false },
  { subject: "WDD", number: 330, title: "Web Backend Development", credits: 2, completed: false }
];

// ===== Display and Filter Functions =====
const courseContainer = document.querySelector("#courseContainer");
const totalCredits = document.querySelector("#totalCredits");
const allBtn = document.querySelector("#allBtn");
const wddBtn = document.querySelector("#wddBtn");
const cseBtn = document.querySelector("#cseBtn");

function displayCourses(courseList) {
  courseContainer.innerHTML = "";

  courseList.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) card.classList.add("completed");

    card.innerHTML = `
      <h3>${course.subject} ${course.number}</h3>
      <p>${course.title}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
    `;
    courseContainer.appendChild(card);
  });

  const total = courseList.reduce((sum, c) => sum + c.credits, 0);
  totalCredits.textContent = `Total Credits: ${total}`;
}

// ===== Button Filters =====
allBtn.addEventListener("click", () => displayCourses(courses));
wddBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "WDD")));
cseBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "CSE")));

// ===== Initialize =====
displayCourses(courses);
