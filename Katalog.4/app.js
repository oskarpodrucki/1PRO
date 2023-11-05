    function max(){
    document.getElementById("body").style.gridTemplateColumns = "50% 50%"
    document.getElementById("body").style.transition = "0.5s"               
    }

    function min(){
    document.getElementById("body").style.gridTemplateColumns = "5% 95%" 
    document.getElementById("body").style.transition = "0.5s"
    }

    
    
    function red(){
    document.getElementById("div2").style.backgroundColor = "red";
    document.getElementById("div2").style.transition = "0.5s"
    }

    function blue(){
    document.getElementById("div2").style.backgroundColor = "blue";
    document.getElementById("div2").style.transition = "0.5s"
    }

    function green(){
    document.getElementById("div2").style.backgroundColor = "green";
    document.getElementById("div2").style.transition = "0.5s"
    }

    
    
    function plus(){
        var l1 = parseInt(document.getElementById("i1").value)
        var l2 = parseInt(document.getElementById("i2").value)
        console.log(l1 + l2)
        document.getElementById("h.1").innerHTML = (l1 + l2)
        
    }

    function minus(){
        var l1 = parseInt(document.getElementById("i1").value)
        var l2 = parseInt(document.getElementById("i2").value)
        console.log(l1 - l2)
        document.getElementById("h.1").innerHTML = (l1 - l2)
    }

    function ml(){
        var l1 = parseInt(document.getElementById("i1").value)
        var l2 = parseInt(document.getElementById("i2").value)
        console.log(l1 * l2)
        document.getElementById("h.1").innerHTML = (l1 * l2)
    }

    function divi(){
        var l1 = parseInt(document.getElementById("i1").value)
        var l2 = parseInt(document.getElementById("i2").value)
        console.log(l1 / l2)
        document.getElementById("h.1").innerHTML = (l1 / l2)
    }

    function bg(){
        var l1 = parseInt(document.getElementById("i1").value)
        var l2 = parseInt(document.getElementById("i2").value)
        if(l1>l2){
            document.getElementById("i1").style.backgroundColor = "purple";
            document.getElementById("i1").style.transition = "0.5s"
            document.getElementById("i2").style.backgroundColor = "orange";
            document.getElementById("i2").style.transition = "0.5s"
        }else if(l1<l2){
            document.getElementById("i2").style.backgroundColor = "purple";
            document.getElementById("i2").style.transition = "0.5s"
            document.getElementById("i1").style.backgroundColor = "orange";
            document.getElementById("i1").style.transition = "0.5s"
        }
    }

