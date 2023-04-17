const socialMediaIcons = {
  telegram: { className: "fa-telegram", timeout: 4000 },
  instagram: { className: "fa-instagram", timeout: 4000 },
  twitter: { className: "fa-twitter", timeout: 4000 },
  youtube: { className: "fa-youtube", timeout: 6000 },
  facebook: { className: "fa-facebook-f", timeout: 6000 },
};

function createSocialMediaIcon(icon) {
  const element = document.createElement("i");
  element.classList.add(icon.className);
  element.classList.add("fa-brands");
  element.style.left = Math.random() * window.innerWidth + "px";
  element.style.animationDuration = Math.random() * 5 + 3 + "s";
  element.style.opacity = Math.random();
  element.style.fontSize = Math.random() * 10 + 10 + "px";
  document.body.append(element);
  setTimeout(() => {
    element.remove();
  }, icon.timeout);
}

for (const icon in socialMediaIcons) {
  setInterval(() => {
    createSocialMediaIcon(socialMediaIcons[icon]);
  }, 100);
}
