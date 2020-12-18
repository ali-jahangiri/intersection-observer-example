// ALL ELEMENTS THAT NEED TO HAVE A ANIMATION FOR EXAMPLE WHEN WE REACH THAT , SHOULD HAVE A CLASS OF "IO-ANIME"
// or other way to achive that , we can use data-io=true and get that elements

const IoHandler = (elementsTarget, onReach) => {
  const IO = new IntersectionObserver((entrise) => {
    entrise.map(({ target, isIntersecting, intersectionRatio }) => {
      // disice what to do when reach to that elements
      if (typeof onReach === "string") {
        isIntersecting
          ? target.classList.add(onReach)
          : target.classList.remove(onReach);
      } else onReach(target, isIntersecting, intersectionRatio);
    });
  });
  elementsTarget.forEach((element) => {
    IO.observe(element);
  });
  //   If we was SPA we need to clean up
  //   therefore =>
  //   useEffect(() => {
  //     .....
  //     return () => {
  //     IO.disconnect(elements)
  //  }
  //  })
};

const IONodes = document.querySelectorAll(".io-anime");
const callback = (target, isIntersecting, intersectionRatio) => {
  if (isIntersecting) {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
};
IoHandler(IONodes, callback);
