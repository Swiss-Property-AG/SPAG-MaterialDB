function search() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.trim();
  
    if (query) {
      // Replace the URL below with the URL of the search engine you want to use.
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(searchUrl, '_blank');
    }
  }
  