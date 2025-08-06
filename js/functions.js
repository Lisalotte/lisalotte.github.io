  const SVG_NS = "http://www.w3.org/2000/svg";
  const circles = [];

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

    // Store circle's movement data
    circles.push({
      element: circle,
      cx: x,
      cy: y,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    });

  }

  function animateCircles() {
    circles.forEach((c) => {
      c.cx += c.speedX;
      c.cy += c.speedY;

      // Bounce the circles back if they hit the edge of the screen
      if (c.cx < 0 || c.cx > window.innerWidth) c.speedX *= -1;
      if (c.cy < 0 || c.cy > window.innerHeight) c.speedY *= -1;

      c.element.setAttribute("cx", c.cx);
      c.element.setAttribute("cy", c.cy);
    });

    requestAnimationFrame(animateCircles);
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

    // Start animation
    animateCircles();
  }

  spawnCircles();


  // Opening and closing content
  const development = document.getElementById("development");
  const artworks = document.getElementById("artworks");

  document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.getElementById("closeButton");

    const graphicDesign = document.getElementById("graphicDesign");
    const development = document.getElementById("development");
    const artworks = document.getElementById("artworks");

    const graphicDesignButton = document.getElementById("graphicDesignButton");
    const developmentButton = document.getElementById("devButton");
    const artworksButton = document.getElementById("artButton");

    function toggleSection(section) {
      if (section.classList.contains("portfolio__container--closed")) {
        section.classList.remove("portfolio__container--closed");
        if (!closeButton.classList.contains("portfolio__arrow--wrapper-visible")) closeButton.classList.add("portfolio__arrow--wrapper-visible");
      } else {
        section.classList.add("portfolio__container--closed");
        if (closeButton.classList.contains("portfolio__arrow--wrapper-visible")) closeButton.classList.remove("portfolio__arrow--wrapper-visible");
      }
    }

    // Graphic Design Section
    if (graphicDesignButton) {
      graphicDesignButton.addEventListener("click", function () {
        toggleSection(graphicDesign);
      });
    }

    // Development Section
    if (developmentButton) {
      developmentButton.addEventListener("click", function () {
        toggleSection(development);
      });
    }

    // Artworks Section
    if (artworksButton) {
      artworksButton.addEventListener("click", function () {
        toggleSection(artworks);
      });
    }

    function closeAll() {
      if (!graphicDesign.classList.contains("portfolio__container--closed")) {
        graphicDesign.classList.add("portfolio__container--closed");
      }
      if (!development.classList.contains("portfolio__container--closed")) {
        development.classList.add("portfolio__container--closed");
      }
      if (!artworks.classList.contains("portfolio__container--closed")) {
        artworks.classList.add("portfolio__container--closed");
      }
      if (closeButton.classList.contains("portfolio__arrow--wrapper-visible")) closeButton.classList.remove("portfolio__arrow--wrapper-visible");
    }

    if (closeButton) {
      closeButton.addEventListener("click", closeAll);
    }

    // Close when pressing ESC key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeAll();
      }
    });
  });
