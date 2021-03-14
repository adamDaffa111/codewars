class Kata {
  static getVolumeOfCuboid(length, width, height){
    return new Array(length,width,height).reduce((equals,numb) => equals *= numb);
  }
}
console.log(Kata.getVolumeOfCuboid(2,5,7));