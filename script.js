// Jednoduchý lightbox pre galériu
(function () {
  var lb = document.getElementById('lightbox');
  var img = lb.querySelector('img');
  var cap = lb.querySelector('p');

  function close() { lb.hidden = true; img.removeAttribute('src'); }

  document.getElementById('gallery').addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    e.preventDefault();
    img.src = a.href;
    img.alt = a.querySelector('img').alt;
    cap.textContent = a.parentElement.querySelector('figcaption').textContent;
    lb.hidden = false;
  });

  lb.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
