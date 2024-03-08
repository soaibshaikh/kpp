const counters = document.querySelectorAll("#value");
const animationSpeed = 300;

counters.forEach((count) => {
  const incrementCount = () => {
    const finalValue = Number(count.getAttribute("data-target"));
    const currentCount = Number(count.innerText);

    const incrementValue = finalValue / animationSpeed;

    if (currentCount < finalValue) {
      count.innerText = Math.ceil(currentCount + incrementValue);
      setTimeout(incrementCount, 1);
    } else {
      currentCount.innerText = finalValue;
    }
  };

  incrementCount();
});
