document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = async (id, file) => {
    try {
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error(`Failed to load ${file}: ${response.statusText}`);
      }
      const text = await response.text();
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = text;
      } else {
        console.error(`Element with ID '${id}' not found in the DOM.`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  loadComponent("header", "../../components/Header/header.html");
  loadComponent("footer", "../../components/Footer/footer.html");
});
