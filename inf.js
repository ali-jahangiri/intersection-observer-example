const container = document.querySelector(".container");

// two way we can achive this perpose
//  1 => find last element inisde container for that elements
//  2 => caculate the last elements

const infinitIO = (containerElement, onReach) => {
  let updatedContainer = containerElement.lastElementChild;
  console.log(updatedContainer);
  const IO = new IntersectionObserver((entrise) => {
    entrise.map((elements) => {
      // onReach(elements, updatedContainer))
      if (elements.isIntersecting) {
        onReach();
        updatedContainer = containerElement.lastElementChild;
      }
    });
  });

  IO.observe(updatedContainer);
};
let globalN = 0;
const createFaz = (data, stage = 1) => {
  globalN++;
  const step = 10;
  debugger;
  data.slice(0, step * globalN).map(({ title, body }) => {
    container.innerHTML += `<div class="intes-con"><h2>${title}</h2><p>${body}</p></div>`;
  });
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    let count = 0;
    createFaz(data);
    infinitIO(container, () => {
      createFaz(data);
    });
  });
