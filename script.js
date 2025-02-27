// Get elements
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const body = document.body;

// Function to toggle the sidebar
function toggleSidebar() {
  // Toggle the 'open' class to slide the sidebar in/out
  sidebar.classList.toggle('open');

  // Prevent or allow page scroll based on sidebar state
  if (sidebar.classList.contains('open')) {
    body.classList.add('sidebar-open');
  } else {
    body.classList.remove('sidebar-open');
  }
}

// Add event listener for the sidebar toggle button
sidebarToggle.addEventListener('click', toggleSidebar);

// Close the sidebar when the screen width is above 901px
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    sidebar.classList.remove('open');
    body.classList.remove('sidebar-open');
  }
});
