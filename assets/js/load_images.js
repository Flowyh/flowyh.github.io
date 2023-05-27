function insertAfter(referenceNode, newNode) {
  referenceNode.insertAdjacentElement("afterend", newNode);
}

function promiseLoadImg(url, classes) {
  const file = url.split("/").pop();
  const filename = file.replace(/\.[^/.]+$/, "");
  const alt = filename.split("_").join(" ");

  const P = new Promise((resolve, reject) => {
    const parent = document.getElementById(filename);
    if (!parent) return reject(url);

    const element = document.createElement("img");
    element.setAttribute("alt", alt);
    element.setAttribute("src", url);

    if (classes) for (const c of classes) element.classList.add(c);

    insertAfter(parent, element);

    element.onload = () => resolve(url);
    element.onerror = () => reject(url);
  });
}

function loadSiteImages() {
  Promise.all([
    promiseLoadImg("assets/images/avatar.png", ["about__avatar", "container"]),
    promiseLoadImg("assets/images/aws_logo.png", ["skill"]),
    promiseLoadImg("assets/images/bees.png"),
    promiseLoadImg("assets/images/c_logo.png", ["skill"]),
    promiseLoadImg("assets/images/cpu_usage_tracker.png"),
    promiseLoadImg("assets/images/docker_logo.png", ["skill"]),
    promiseLoadImg("assets/images/dynamodb_logo.png", ["skill"]),
    promiseLoadImg("assets/images/git_logo.png", ["skill"]),
    promiseLoadImg("assets/images/julia_logo.png", ["skill"]),
    promiseLoadImg("assets/images/linux_logo.png", ["skill"]),
    promiseLoadImg("assets/images/mongodb_logo.png", ["skill"]),
    promiseLoadImg("assets/images/mysql_logo.png", ["skill"]),
    promiseLoadImg("assets/images/nodejs_logo.png", ["skill"]),
    promiseLoadImg("assets/images/petersen.png", ["petersen"]),
    promiseLoadImg("assets/images/python_logo.png", ["skill"]),
    promiseLoadImg("assets/images/scala_logo.png", ["skill"]),
    promiseLoadImg("assets/images/trylma.png"),
  ])
    .then(() => {
      console.debug("All images loaded!");
    })
    .catch(() => {
      console.error("Some images couldn't be loaded!");
    });
}

loadSiteImages();
