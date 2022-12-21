const limit = 1001;
// const space = document.getElementById("bg");

export default {
  rand: function () {
    return Math.random();
  },

  createStar: function () {
    const star = document.createElement("div");
    star.className = "star";

    return star;
  },

  create: function (space: any) {
    for (let i = 0; i <= limit; i++) {
      const star = this.createStar();
      star.style.top = `${this.rand() * 100}%`;
      star.style.left = `${this.rand() * 100}%`;
      star.style.animationDelay = `${this.rand() * 8}s`;
      space.appendChild(star);
    }
  },
};
