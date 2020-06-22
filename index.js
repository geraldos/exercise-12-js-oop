class TwoDimentionalFigure {
    constructor(side, height, long, width, pedestal, fingers) {
        this.side = side
        this.height = height
        this.width = width
        this.long = long
        this.pedestal = pedestal
        this.fingers = fingers
    }

    areaSquare() {
        return this.side * this.side
    }

    aroundSquare() {
        return 4 * this.side
    }

    areaRectangle() {
        return this.long * this.width
    }

    aroundRectangle() {
        return 2 * (this.long + this.width)
    }

    areaRightTriangle() {
        return 0.5 * this.pedestal * this.height
    }

    aroundRightTriangle() {
        return this.side + this.side + this.side
    }

    areaCircle() {
        return 2 * 3.14 * this.fingers
    }

    aroundCircle() {
        return 3.14 * this.fingers * this.fingers
    }
}

const areaSquaree = new TwoDimentionalFigure(4)
console.log('side * side    side = 4')
console.log(areaSquaree.areaSquare())

const aroundSquaree = new TwoDimentionalFigure(5)
console.log('4 * side     side = 5')
console.log(aroundSquaree.aroundSquare())

const areaRectanglee = new TwoDimentionalFigure(0, 0, 10, 5)
console.log('long * width     long = 10, width = 5')
console.log(areaRectanglee.areaRectangle())

const aroundRectanglee = new TwoDimentionalFigure(0, 0, 10, 5)
console.log('2 * (long + width)     long = 10, width = 5')
console.log(aroundRectanglee.aroundRectangle())

const areaRightTrianglee = new TwoDimentionalFigure(0, 10, 0, 0, 15)
console.log('0.5 * pedestal * height     pedestal = 10, height = 15')
console.log(areaRightTrianglee.areaRightTriangle())

const aroundRightTrianglee = new TwoDimentionalFigure(5)
console.log('side + side + side     side = 5')
console.log(aroundRightTrianglee.aroundRightTriangle())

const areaCirclee = new TwoDimentionalFigure(0, 0, 0, 0, 0, 9)
console.log('2 * 3.14 * fingers     fingers = 9')
console.log(areaCirclee.areaCircle())

const aroundCirclee = new TwoDimentionalFigure(0, 0, 0, 0, 0, 9)
console.log('3.14 * fingers * fingers    fingers = 9')
console.log(aroundCirclee.aroundCircle())

class ThreeDimen {
    constructor(side, long, width, height) {
        this.side = side
        this.long = long
        this.width = width
        this.height = height
    }

    VKubus() {
        return this.side * this.side * this.side
    }

    LKubus() {
        return 6 * (this.side * this.side)
    }

    KKubus() {
        return 12 * this.side
    }

    VBalok() {
        return this.long * this.width * this.height
    }

    LBalok() {
        return 2 * (this.long + this.width + this.height)
    }

    KBalok() {
        return 4 * (this.long + this.width + this.height)
    }
}

const VolmeKubus = new ThreeDimen(10)
console.log('side * side * side    side = 10')
console.log(VolmeKubus.VKubus())

const LuasKubus = new ThreeDimen(10)
console.log('6 * (side * side)    side = 10')
console.log(LuasKubus.LKubus())

const KelilingKubus = new ThreeDimen(10)
console.log('12 * side    side = 10')
console.log(KelilingKubus.KKubus())

const VolmeBalok = new ThreeDimen(0, 5, 6, 7)
console.log('long * width * height    long = 5, width = 6, height = 7')
console.log(VolmeBalok.VBalok())

const LuasBalok = new ThreeDimen(0, 5, 6, 7)
console.log('2 * (long + width + height)    long = 5, width = 6, height = 7')
console.log(LuasBalok.LBalok())

const KelilingBalok = new ThreeDimen(0, 5, 6, 7)
console.log('4 * (long + width + height)    long = 5, width = 6, height = 7')
console.log(KelilingBalok.KBalok())