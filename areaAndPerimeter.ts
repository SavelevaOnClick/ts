abstract class Figure {
  abstract area(): number;
  abstract perimeter(): number;
}
class Circle extends Figure {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
class Rectangle extends Figure {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    if (width <= 0 || height <= 0) {
      throw new Error("Not correct data");
    }
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return (this.width + this.height) * 2;
  }
}
class Triangle extends Figure {
  aSide: number;
  bSide: number;
  cSide: number;
  constructor(aSide: number, bSide: number, cSide: number) {
    super();
    if (
      !(aSide + bSide > cSide && aSide + cSide > bSide && bSide + cSide > aSide)
    ) {
      throw new Error("Not correct data");
    }
    this.aSide = aSide;
    this.bSide = bSide;
    this.cSide = cSide;
  }
  area(): number {
    const semiPerimeter: number = (this.aSide + this.bSide + this.cSide) / 2;
    return (
      (semiPerimeter *
        (semiPerimeter - this.aSide) *
        (semiPerimeter - this.bSide) *
        (semiPerimeter - this.cSide)) **
      (1 / 2)
    );
  }
  perimeter(): number {
    return this.aSide + this.bSide + this.cSide;
  }
}
