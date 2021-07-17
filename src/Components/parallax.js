//PARALLAX

const parallaxEvent = () => document.addEventListener('mousemove', parallax);

function parallax(e){
  document.querySelectorAll('.bubble').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      var X = (window.innerWidth - e.pageX * speed) / 100;
      var Y = (window.innerHeight - e.pageY * speed) / 100;
      layer.style.transform = `translateX(${X}px) translateY(${Y}px)`;
   })

}

export {parallaxEvent};