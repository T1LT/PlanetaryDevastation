const Utils = {
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return [Math.sin(deg) * length, Math.cos(deg) * length];
  },
  distance(pos1, pos2) {
    return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2);
  },
  setMag(vec, newMag) {
    let currentMag = this.distance(vec, [0, 0]);
    return [vec[0] * (newMag / currentMag), vec[1] * (newMag / currentMag)];
  }
};

module.exports = Utils;