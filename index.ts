interface CircleInfo{
    radius?:number;
    color?:string;

}
class Circle{
    circleRadius:number;
    circleColor:string;

    constructor (obj: CircleInfo)
    {
        this.circleRadius=obj.radius;
        this.circleColor=obj.color;
    }
    
    getRadius():number
    {
        return this.circleRadius;
    }
    setRadius(obj:CircleInfo):void
    {
        this.circleRadius=obj.radius;
    }
    getColor():string
    {
        return this.circleColor;
    }
    setColor(obj:CircleInfo):void{
        this.circleColor=obj.color;
    }
    getArea():number{
        return (Math.PI*this.circleRadius*this.circleRadius)
    }
    getCircumference():number{
        return  (2*Math.PI*this.circleRadius);
    }
    toString():string{
        return "Radius"+this.circleRadius+" Color"+this.circleColor;
    }
}

//Area of the circle
(<HTMLElement>(document.getElementById('getarea'))).addEventListener('click',()=>{

    let radius = +((<HTMLInputElement>document.getElementById('radius')).value);
    let color = (<HTMLInputElement>document.getElementById('color')).value

    let c:CircleInfo={
        radius,
            color
    }
        
    let circle1=new Circle(c);
    //console.log(circle1.getArea().toFixed(2));
    (<HTMLInputElement>document.getElementById('area')).style.color=circle1.getColor();
    (<HTMLInputElement>document.getElementById('area')).innerText=" "+circle1.getArea().toFixed(2)

});
//circumference of the circle
(<HTMLElement>(document.getElementById('getCircumferece'))).addEventListener('click',()=>{

    let radius = +((<HTMLInputElement>document.getElementById('radius')).value);
    let color = (<HTMLInputElement>document.getElementById('color')).value

    let c:CircleInfo={
        radius,
            color
    }
        
    let circle1=new Circle(c);
   // console.log(circle1.getCircumference().toFixed(2));
   (<HTMLInputElement>document.getElementById('circum')).style.color=circle1.getColor();
    (<HTMLInputElement>document.getElementById('circum')).innerText=" "+circle1.getCircumference().toFixed(2).toString();
    
});

(<HTMLElement>(document.getElementById('reset1'))).addEventListener('click',()=>{
   
    (<HTMLFormElement>document.getElementById('form1')).reset();
    (<HTMLInputElement>document.getElementById('circum')).innerText="";
    (<HTMLInputElement>document.getElementById('area')).innerText="";
});