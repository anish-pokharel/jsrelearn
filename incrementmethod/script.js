const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  //   console.log(counter);

  counter.innerHTML = 0;
  const updateCounter = () => {
    const targetCounter = counters.getAttribute("data-target");
    console.log(typeof targetCounter);
  };
  updateCounter();
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus id
    voluptatem placeat ad distinctio ratione numquam deleniti recusandae ipsa.
    Ipsum ex ab reiciendis? Quia maxime eum aut veniam. Reprehenderit!
  </p>;
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus id
    voluptatem placeat ad distinctio ratione numquam deleniti recusandae ipsa.
    Ipsum ex ab reiciendis? Quia maxime eum aut veniam. Reprehenderit!
  </p>;
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus id
    voluptatem placeat ad distinctio ratione numquam deleniti recusandae ipsa.
    Ipsum ex ab reiciendis? Quia maxime eum aut veniam. Reprehenderit!
  </p>;
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus id
    voluptatem placeat ad distinctio ratione numquam deleniti recusandae ipsa.
    Ipsum ex ab reiciendis? Quia maxime eum aut veniam. Reprehenderit!
  </p>;
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus id
    voluptatem placeat ad distinctio ratione numquam deleniti recusandae ipsa.
    Ipsum ex ab reiciendis? Quia maxime eum aut veniam. Reprehenderit!
  </p>;
});
