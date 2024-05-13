document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('.tabs li');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
      // Remove 'active' class from all tabs and tab contents
      tabs.forEach(tab => tab.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add 'active' class to the clicked tab and corresponding tab content
      tab.classList.add('active');
      tabContents[index].classList.add('active');
    });
  });
});
