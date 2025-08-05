  const SVG_NS = "http://www.w3.org/2000/svg";

  function spawnCircle(parent, s) {

    const circle = document.createElementNS(SVG_NS, 'circle');
    const size = Math.floor(Math.random() * s) + 2;
    const opacity = Math.floor(Math.random() * 90) + 10;
    const color = `#9F86DE`;

    circle.setAttribute("r", size);

    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("opacity", `${opacity}%`);
    // circle.setAttribute("fill", '--accent-color');

    parent.appendChild(circle);
  }

  function spawnCircles() {
    
    const circleContainer = document.getElementById("circle-container");

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");

    for (let i = 0; i < 40; i++) {
        spawnCircle(svg, 3);
    }

    for (let i = 0; i < 7; i++) {
        spawnCircle(svg, 6);
    }

    circleContainer.appendChild(svg);
  }