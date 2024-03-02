function search() {
    const query = document.getElementById('searchQuery').value;
    fetch(`/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('searchResults');
            resultsContainer.innerHTML = ''; // Clear previous results
            data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.textContent = `Nom: ${product.nom}, Description: ${product.description}`;
                resultsContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Erreur:', error));
}
