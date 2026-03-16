// Function to search universities by country
async function searchUniversity() {

    const country = document.getElementById("countryInput").value;
    const resultsDiv = document.getElementById("results");

    // Error handling for empty input
    if (country === "") {
        resultsDiv.innerHTML = "<p>Please enter a country name.</p>";
        return;
    }

    const apiURL = `http://universities.hipolabs.com/search?country=${country}`;

    try {

        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        if (data.length === 0) {
            resultsDiv.innerHTML = "<p>No universities found.</p>";
            return;
        }

        let output = "<ul>";

        data.slice(0, 10).forEach(university => {
            output += `
                <li>
                    <strong>${university.name}</strong><br>
                    Website: <a href="${university.web_pages[0]}" target="_blank">${university.web_pages[0]}</a>
                </li>
                <br>
            `;
        });

        output += "</ul>";

        resultsDiv.innerHTML = output;

    } catch (error) {

        resultsDiv.innerHTML = "<p>Error retrieving data from the API.</p>";

    }
}