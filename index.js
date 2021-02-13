var Circle = /** @class */ (function () {
    function Circle(obj) {
        this.circleRadius = obj.radius;
        this.circleColor = obj.color;
    }
    Circle.prototype.getRadius = function () {
        return this.circleRadius;
    };
    Circle.prototype.setRadius = function (obj) {
        this.circleRadius = obj.radius;
    };
    Circle.prototype.getColor = function () {
        return this.circleColor;
    };
    Circle.prototype.setColor = function (obj) {
        this.circleColor = obj.color;
    };
    Circle.prototype.getArea = function () {
        return (Math.PI * this.circleRadius * this.circleRadius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * Math.PI * this.circleRadius);
    };
    Circle.prototype.toString = function () {
        return "Radius" + this.circleRadius + " Color" + this.circleColor;
    };
    return Circle;
}());
//Area of the circle
(document.getElementById('getarea')).addEventListener('click', function () {
    var radius = +(document.getElementById('radius').value);
    var color = document.getElementById('color').value;
    var c = {
        radius: radius,
        color: color
    };
    var circle1 = new Circle(c);
    //console.log(circle1.getArea().toFixed(2));
    document.getElementById('area').style.color = circle1.getColor();
    document.getElementById('area').innerText = " " + circle1.getArea().toFixed(2);
});
//circumference of the circle
(document.getElementById('getCircumferece')).addEventListener('click', function () {
    var radius = +(document.getElementById('radius').value);
    var color = document.getElementById('color').value;
    var c = {
        radius: radius,
        color: color
    };
    var circle1 = new Circle(c);
    // console.log(circle1.getCircumference().toFixed(2));
    document.getElementById('circum').style.color = circle1.getColor();
    document.getElementById('circum').innerText = " " + circle1.getCircumference().toFixed(2).toString();
});
(document.getElementById('reset1')).addEventListener('click', function () {
    document.getElementById('form1').reset();
    document.getElementById('circum').innerText = "";
    document.getElementById('area').innerText = "";
});
