
const skills = [
    { name: "React.js", category: "Frontend", icon: "devicon-react-original colored" },
    { name: "JavaScript", category: "Frontend", icon: "devicon-javascript-plain colored" },
    { name: "HTML", category: "Frontend", icon: "devicon-html5-plain colored" },
    { name: "CSS", category: "Frontend", icon: "devicon-css3-plain colored" },
    { name: "Tailwind CSS", category: "Frontend", icon: "devicon-tailwindcss-original colored" },
    { name: "Java", category: "Backend", icon: "devicon-java-plain colored" },
    { name: "Spring Boot", category: "Backend", icon: "devicon-spring-original colored" },
    { name: "MySQL", category: "Database", icon: "devicon-mysql-plain colored" },
    { name: "REST APIs", category: "Other", icon: "fa-solid fa-cloud" },
    { name: "Building Web Applications", category: "Other", icon: "fa-solid fa-code" }
];

// Select HTML container
const skillsContainer = document.getElementById("skillsContainer");

// Loop through skills
skills.forEach(function(skill) {

    // Create card
    const card = document.createElement("div");
    card.classList.add("skill-card");

    // Create icon
    const skillIcon = document.createElement("i");
    skillIcon.className = skill.icon;

    // Create skill heading
    const skillName = document.createElement("h3");
    skillName.textContent = skill.name;

    // Create category
    const skillCategory = document.createElement("p");
    skillCategory.textContent = skill.category;

    // Add elements to card
    card.appendChild(skillIcon);
    card.appendChild(skillName);
    card.appendChild(skillCategory);

    // Add card to webpage
    skillsContainer.appendChild(card);

});
