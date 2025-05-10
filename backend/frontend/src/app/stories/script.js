document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("storyModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.querySelector(".close");
  
    // Open modal
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    // Close modal when 'x' is clicked
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal if clicked outside content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  