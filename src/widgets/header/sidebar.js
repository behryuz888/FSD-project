export function initSidebar() {
  const mobileButton = document.querySelector('.iconCatalog-xl');
  const sidebar = document.querySelector('.sidebar');
  const closeButton = document.querySelector('.sidebar-toggle');

  const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  };

  mobileButton.addEventListener('click', toggleSidebar);
  closeButton.addEventListener('click', toggleSidebar);
}
//Uchirma