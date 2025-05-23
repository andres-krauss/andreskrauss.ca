// slideshow.js
(function () {
    const target = document.getElementById('my-slideshow');
    if (!target) return;

    const style = document.createElement('style');
    style.textContent = `
    .glintfall-slideshow {
      position: relative;
      max-width: 80%;
      margin-inline: auto;
      margin-block: var(--space-block);
      overflow: hidden;
    }

    .glintfall-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      pointer-events: none;
    }

    .glintfall-slide.active {
      position: relative;
      opacity: 1;
      pointer-events: auto;
    }

    .glintfall-slide img {
      width: 100%;
      height: auto;
      display: block;
    }

    .glintfall-caption-box {
      position: absolute;
      bottom: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      text-align: center;
      padding: 8px;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.5s ease, transform 0.5s ease;
      font-size: 16px;
      z-index: 5;
      pointer-events: none;
    }

    /* 🔥 Hover triggers caption reveal */
    .glintfall-slideshow:hover .glintfall-caption-box {
      opacity: 1;
      transform: translateY(0);
    }

    .glintfall-nav {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
      pointer-events: none;
    }

    .glintfall-nav button {
      pointer-events: all;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-size: 20px;
    }
    `;
    document.head.appendChild(style);

    const html = `
    <div class="glintfall-slideshow">
      <div class="glintfall-slide active">
        <img src="media/projects/networking/ccc_2025.jpg" />
      </div>
      <div class="glintfall-slide">
        <img src="media/projects/glintbloom-demo.PNG" />
      </div>

      <div class="glintfall-caption-box" id="glint-caption">Hosted competition; very happy with large showing</div>

      <div class="glintfall-nav">
        <button id="glint-prev">❮</button>
        <button id="glint-next">❯</button>
      </div>
    </div>
    `;

    target.innerHTML = html;

    const slides = Array.from(target.querySelectorAll('.glintfall-slide'));
    const captions = [
        'Hosted competition; very happy with large showing.',
        'Webui viewer alternative to Obsidian noteapp; exp w/geo shapes.',
        'Road into the trees',
    ];

    const captionBox = target.querySelector('#glint-caption');
    let index = 0;
    let timer;

    function showImage(newIndex) {
        slides[index].classList.remove('active');
        index = (newIndex + slides.length) % slides.length;
        slides[index].classList.add('active');
        captionBox.textContent = captions[index];
    }

    function startTimer() {
        timer = setInterval(() => showImage(index + 1), 10000);
    }

    target.querySelector('#glint-prev').addEventListener('click', () => {
        clearInterval(timer);
        showImage(index - 1);
        startTimer();
    });

    target.querySelector('#glint-next').addEventListener('click', () => {
        clearInterval(timer);
        showImage(index + 1);
        startTimer();
    });

    startTimer();
})();
