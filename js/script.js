const loadImg = async () => {
  const img = document.getElementsByTagName("img")[0];
  fetch("https://aws.random.cat/meow").then(function (response) {
    response.json().then(function (convertido) {
     img.src = convertido.file;
    });
  });
};
