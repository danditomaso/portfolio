// setup namespacing for application
import projectData from "./data";
console.log(projectData);

const fadeTiming = 0.3;
const logo = document.querySelector(".hero-header-logo");
const navOverlay = document.querySelector(".overlay-nav");
const portfolio = document.querySelector(".portfolio");
const portfolioContent = document.querySelector(".portfolio-content");
const menuListItem = navOverlay.querySelectorAll(".overlay-nav-item");
const portfolioDevices = document.querySelectorAll(".portfolio-preview-devices");
const menuButton = document.querySelector("#menuButton");
const menuIcon = menuButton.children[0];
const menu = document.querySelector("#menu");
let menuOpen = false;

// error handling function, will recieve all errors thrown from functions.
const showError = (event) => {
  console.error("Error", event);
};

// Toggle hamburger menu
const toggleNav = () => {
  menuButton.style.background = "transparent";
  logo.style.background = "transparent";
  // If menuOpen is true, show the nav overlay.
  if (menuOpen) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
    TweenLite.to(navOverlay, fadeTiming, { opacity: 1, display: "grid" });
  } else {
    // If menuOpen is false, hide  the nav overlay.
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    TweenLite.to(navOverlay, fadeTiming, { opacity: 0, display: "none" });
    menuButton.style.background = "black";
    logo.style.background = "black";
  }
  // flip menuOpen to the opposite state before completing this function
  menuOpen = !menuOpen;
};

// Capture any clicks to hamburger menu element
menuButton.addEventListener("click", () => toggleNav);

// Fade out navigation menu when nav item is clicked on
menuListItem.forEach((element) => {
  element.addEventListener("click", (event) => {
    try {
      const { fadeTiming } = app;
      const { navOverlay } = DOM;
      TweenLite.to(navOverlay, fadeTiming, { opacity: 0, display: "none", onComplete: toggleNav });
    } catch (event) {
      showError(event);
    }
  });
});

const renderTechUsed = (techArr) => {
  return ` ${techArr.map((tech) => `<li>${tech}</li>`)}`;
};

export const portfolioMarkup = (portfolio) => `<article class="portfolio-item">
            <div class="flex-column">
              <div class="column-item">
                <h4 class="portfolio-item-title">${portfolio.title}</h4>
                <p class="portfolio-item-text">
                  ${portfolio.shortTitle}
                </p>
                <label for="${
                  portfolio.shortName
                }" class="row btn">More Details<span class="portfolio-item-detailsarrow"><i class="fas fa-arrow-right"></i></span></label>
              </div>
              <div class="column-item portfolio-item-image">
                <img lazy src="${portfolio.screenshot}"  alt="${portfolio.altText}" />
              </div>
            </div>
            <input type="checkbox" name="halpqLabel" id="${
              portfolio.shortName
            }" class="visuallyhidden" />
            <section class="portfolio-preview">
              <div class="flex-column">
                <div class="column-item">
                  <p class="portfolio-preview-text">
                   ${portfolio.description} 
                  </p>
                  <a href="${
                    portfolio.hlink
                  }" class="portfolio-preview-links btn" target="_blank" rel="noopener">View Site</a>
                  <a href="${
                    portfolio.gLink
                  }" class="portfolio-preview-links btn" target="_blank" rel="noopener">View Repo
                  </a>
                </div>
                <div class="column-item portfolio-preview-tech">
                  <h4>Built using:</h4>
                  <ul>
                    ${renderTechUsed(portfolio.techUsed)} 
                  </ul>
                </div>
              </div>
              <div class="portfolio-preview-devices">
                <h4>Preview</h4>
                <ul class="portfolio-preview-devices-list">
                  <li title="mobile">
                    <i class="fas fa-mobile-alt fa-3x" data-size="mobile"></i>
                  </li>
                  <li title="tablet">
                    <i class="fas fa-tablet-alt fa-3x" data-size="tablet"></i>
                  </li>
                  <li title="desktop">
                    <i class="fas fa-desktop fa-3x" data-size="desktop"></i>
                  </li>
                </ul>
              </div>
              <div class="portfolio-preview-site">
                <iframe src="${
                  portfolio.wLink
                }" loading="lazy" frameborder="0" allow-same-origin="allow-same-origin" class="portfolio-preview-embed desktop">
                </iframe>
              </div>
            </section>
          </article>
          <!-- End of portfolio item -->`;

const _portfolioContent = projectData.map((portfolioItem) => portfolioMarkup(portfolioItem));
portfolioContent.innerHTML = _portfolioContent;

// For all portfolio device icons add event listener to each (this may need to be refactored)
portfolioDevices.forEach((element) => {
  element.addEventListener("click", function (event) {
    try {
      const { target } = event;
      if (target.nodeName === "I") {
        const parentElem = this.offsetParent;
        const previewWindow = parentElem.querySelector(".portfolio-preview-embed");
        // change preview window depending on which preview window icon is clicked
        const deviceSize = target.dataset.size;
        previewWindow.classList.remove("desktop", "tablet", "mobile");
        switch (deviceSize) {
          case "mobile":
            if (!previewWindow.classList.contains(".mobile")) {
              previewWindow.classList.add("mobile");
            }
            break;
          case "tablet":
            if (!previewWindow.classList.contains(".tablet")) {
              previewWindow.classList.add("tablet");
            }
            break;
          case "desktop":
            if (!previewWindow.classList.contains(".desktop")) {
              previewWindow.classList.toggle("desktop");
            }
            break;
        }
      }
    } catch (event) {
      showError(event);
    }
  });
});
