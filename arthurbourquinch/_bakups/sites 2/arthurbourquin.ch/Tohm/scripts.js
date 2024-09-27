// Function to create HTML content for the first 12 items
function renderHtml(data) {
    const container = document.getElementById('content-container');
    container.innerHTML = ""; // Clear existing content

    data.slice(0, 12).forEach((item, index) => {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        contentDiv.innerHTML = `
            <div class="video-container">
                <iframe src="${item.link[0].link}" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="text-container">
                <div class="title">${index + 1}. ${item.title1}</div>
                <div class="description">${item.description}</div>
                <div class="date">${item.year}</div>
                <div class="credits">${item.prod}</div>
            </div>
        `;
        container.appendChild(contentDiv);
    });
}

// Function to apply filters and render content
function applyFilters() {
    const category = document.getElementById('category').value;
    const filteredData = TohmWorks.filter(item => !category || item.cat[category]);

    renderHtml(filteredData);
}

// Initial rendering
renderHtml(TohmWorks);
