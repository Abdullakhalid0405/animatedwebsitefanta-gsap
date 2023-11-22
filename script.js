var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",//target div for animation
    start: "0% 95%",//screen position value
    end: "70% 50%",
    scrub: true,//reverse animation direction
    //markers: true,//view point position
}})

tl.to("#fanta",{//waha sai yaha means that fanta from up to down
    top:"120%",
    left:"0%",
},'orange')
tl.to("#orange-cut",{//waha sai yaha means that
    top:"160%",
    left:"23%",
},'orange')
tl.to("#orange",{//waha sai yaha means that
    width:"15%",
    top:"160%",
    right:"10%",
},'orange')
tl.to("#leaf",{//waha sai yaha means that
    top:"110%",
    rotate:"130deg",
    left:"70%",
},'orange')
tl.to("#leaf2",{//waha sai yaha means that
    top:"110%",
    rotate:"130deg",
    left:"0%",
},'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",//target div for animation
    start: "0% 95%",//screen position value
    end: "20% 50%",
    scrub: true,//reverse animation direction
    //markers: true,//view point position
}})

tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-100%",
    top:"90%",
},'ca')
tl2.from("#cocacola",{
    rotate:"-90deg",
    left:"-100%",
    top:"90%",
},'ca')
tl2.from(".lemon2",{
    rotate:"90deg",
    left:"100%",
    top:"90%",
},'ca')
tl2.from("#pepsi",{
    rotate:"90deg",
    left:"100%",
    top:"90%",
},'ca')
tl2.to("#orange-cut",{
    width:"18%",
    left:"41%",
    top:"205%",
},'ca')
tl2.to("#fanta",{
    width:"35%",
    top:"210%",
    left:"32%",
},'ca')

