
const projects = [
    {
        name: "SpendWise - Expense Tracker",
        description: "A personal expense and budget tracking application to manage income, expenses and financial activities.",
      image: "assets/BudgetPlan.png",
        technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        liveDemo: "#",
        github: "#"
    },
    {
        name: "Daily Task Management System",
        description: "A task management application that allows users to create, view, update and delete daily tasks.",
        image: "assets/DailyTask.png",
        technologies: ["Java", "Spring Boot", "Hibernate","MySQL", "REST APIs"],
        liveDemo: "#",
        github: "#"
    },
    {
        name: "CryptonPay - Cryptocurrency Converter",
        description: "A web application that converts GBP into different cryptocurrencies such as Bitcoin, Litecoin and Ethereum.",
        image: "assets/junomoney.png",
        technologies: ["HTML", "CSS", "JavaScript","React APTs"],
        liveDemo: "#",
        github: "#"
    }
];

// Select HTML container
const projectsContainer = document.getElementById("projectsContainer");

// Loop through projects
projects.forEach(function(project) {

    // Create project card
    const card = document.createElement("div");
    card.classList.add("project-card");

    // Create project image
    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.name;

    // Create project content
    const content = document.createElement("div");
    content.classList.add("project-content");

    // Create project title
    const title = document.createElement("h3");
    title.textContent = project.name;

    // Create project description
    const description = document.createElement("p");
    description.textContent = project.description;

    // Create technologies container
    const techContainer = document.createElement("div");
    techContainer.classList.add("project-tech");

    // Display technology tags
    project.technologies.forEach(function(technology) {

        const tech = document.createElement("span");
        tech.textContent = technology;

        techContainer.appendChild(tech);

    });

    // Create project links container
    const links = document.createElement("div");
    links.classList.add("project-links");

    // Create Live Demo button
    const liveButton = document.createElement("a");
    liveButton.textContent = "Live Demo";
    liveButton.href = project.liveDemo;

    // Create GitHub button
    const githubButton = document.createElement("a");
    githubButton.textContent = "GitHub";
    githubButton.href = project.github;

    // Add buttons to links container
    links.appendChild(liveButton);
    links.appendChild(githubButton);

    // Add content to project content
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(techContainer);
    content.appendChild(links);

    // Add image and content to card
    card.appendChild(projectImage);
    card.appendChild(content);

    // Add card to webpage
    projectsContainer.appendChild(card);

});
