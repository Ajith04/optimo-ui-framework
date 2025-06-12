
    document.querySelectorAll('.nav-link').forEach(link => {
    
      const linkUrl = new URL(link.href, window.location.origin);
      if (linkUrl.pathname === window.location.pathname) {
        link.classList.add('active');
      }
    });
  
  document.getElementById("openModalBtn").onclick = function () {
    document.getElementById("myModal").classList.add("active");
  };
  
  document.querySelectorAll(".closeModalBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.getElementById("myModal").classList.remove("active");
    });
  });
  
  
  document.querySelector(".modal__backdrop").onclick = function () {
    document.getElementById("myModal").classList.remove("active");
  };
  