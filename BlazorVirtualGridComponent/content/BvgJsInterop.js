function getTime() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var ms = addZero(d.getMilliseconds(), 2);
    return h + ":" + m + ":" + s + "." + ms;
}

function addZero(i, j = 1) {
    if (i < 10) {
        i = "0" + i;
    }
    if (j === 2) {
        if (i < 100) {
            i = "0" + i;
        }
    }
    return i;
}





window.BvgJsFunctions = {
    Alert: function (msg) {
        alert(msg);
        return true; 
    },
    GetElementActualWidth: function (el) {
        
        if (document.getElementById(el) !== null) {
            let rect = document.getElementById(el).getBoundingClientRect();
            return rect.width;
        }
        else {
            return 0;
        }
    },
    GetElementActualHeight: function (el) {

        if (document.getElementById(el) !== null) {
            let rect = document.getElementById(el).getBoundingClientRect();
            return rect.height;
        }
        else {
            return 0;
        }
    },
    GetElementActualTop: function (el) {

        if (document.getElementById(el) !== null) {
            let rect = document.getElementById(el).getBoundingClientRect();
            return rect.y;
        }
        else {
            return 0;
        }
    },
    GetWindowHeight: function () {
        return window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
      
    },
    SetElementScrollLeft: function (el, val) {
        if (document.getElementById(el) !== null) {
            document.getElementById(el).scrollLeft=val;
            return true;
        }
        else {
            return false;
        }
    },
    GetElementScrollLeft: function (el) {
        if (document.getElementById(el) !== null) {
            return document.getElementById(el).scrollLeft + document.getElementById(el).clientWidth;
        }
        else {
            return 0;
        }
    },
    SetFocus: function (el) {
        if (document.getElementById("divCell" + el) !== null) {

            document.getElementById("divCell" + el).focus();
            return true;
        }
        else {

            return false;
        }
    },
    UpdateRowContentBatch: function (l) {
        
        b = JSON.parse(Blazor.platform.toJavaScriptString(l));

        for (var i = 0; i < b.length; i += 3) {
            if (b[i+2] === "b") {

                if (document.getElementById("chCell" + b[i]) !== null) {
                    if (b[i + 1].toLowerCase() === "true") {
                        document.getElementById("chCell" + b[i]).checked = true;
                    }
                    else {
                        document.getElementById("chCell" + b[i]).checked = false;
                    }

                    if (document.getElementById("chCell" + b[i]).hidden) {
                        document.getElementById("chCell" + b[i]).hidden = false;
                        document.getElementById("spCell" + b[i]).hidden = true;
                    }
                }
            }
            else {
                if (document.getElementById("spCell" + b[i]) !== null) {
                    document.getElementById("spCell" + b[i]).removeChild(document.getElementById("spCell" + b[i]).lastChild);

                    var c = document.createTextNode(b[i + 1]);

                    document.getElementById("spCell" + b[i]).appendChild(c);

                    if (document.getElementById("spCell" + b[i]).hidden) {
                        document.getElementById("spCell" + b[i]).hidden = false;
                        document.getElementById("chCell" + b[i]).hidden = true;     
                    }
                }
            }
        }

        
        return true;
    }, 
    UpdateRowWidthsBatch: function (l) {

        b = JSON.parse(Blazor.platform.toJavaScriptString(l));

        for (var i = 0; i < b.length; i += 3) {

            if (document.getElementById("tdCell" + b[i]) !== null) {
                document.getElementById("tdCell" + b[i]).setAttribute("style", "width:" + b[i + 1] + "px");
                document.getElementById("divCell" + b[i]).setAttribute("style", "width:" + (b[i + 2]-5) + "px");

            }
        }
        return true;
    },
    UpdateColContentsBatch: function (l) {
       
        b = JSON.parse(Blazor.platform.toJavaScriptString(l));

        for (var i = 0; i < b.length; i += 4) {

                if (document.getElementById("spCol" + b[i]) !== null) {

                    document.getElementById("spCol" + b[i]).removeChild(document.getElementById("spCol" + b[i]).lastChild);

                    var c = document.createTextNode(b[i + 1]);
                    document.getElementById("spCol" + b[i]).appendChild(c);


                    document.getElementById("spCol" + b[i]).setAttribute("style", "width:" + b[i + 3] + "px");
                    document.getElementById("divCol" + b[i]).setAttribute("style", "width:" + b[i + 2] + "px");
                } 
        }
        return true;
    },
    SetAttributeBatch: function (l, attr) {

        b = JSON.parse(Blazor.platform.toJavaScriptString(l));

        for (var i = 0; i < b.length; i += 2) {

            if (document.getElementById("tdCell" + b[i]) !== null) {
                document.getElementById("tdCell" + b[i]).setAttribute(Blazor.platform.toJavaScriptString(attr), b[i + 1]);
            }
        }
        return true;
    },
    UpdateElementContentBatchMonoByteArray: function (l) {

        b = JSON.parse(new TextDecoder("utf-8").decode(Blazor.platform.toUint8Array(l)));

        for (var i = 0; i < b.length; i += 2) {
            if (document.getElementById(b[i]) !== null) {
                document.getElementById(b[i]).innerText = b[i + 1];
            }
        }

        return true;
    },
    SetValueToCheckBox: function (el, val) {

        if (document.getElementById(el) !== null) {
            if (val.toLowerCase() === "true") {
                document.getElementById(el).checked = true;
            }
            else {
                document.getElementById(el).checked = false;
            }
        }


        return true;
    },
    UpdateFrozenNonFrozenWidth: function (l) {

        b = JSON.parse(Blazor.platform.toJavaScriptString(l));

       

        if (document.getElementById("FrozenTd1") !== null) {
            document.getElementById("FrozenTd1").setAttribute("style", b[0]);
        }
        if (document.getElementById("FrozenDiv1") !== null) {
            document.getElementById("FrozenDiv1").setAttribute("style", b[0]);
        }
        if (document.getElementById("FrozenTable1") !== null) {
            document.getElementById("FrozenTable1").setAttribute("style", b[1]);
        }

        if (document.getElementById("NonFrozenTd1") !== null) {
            document.getElementById("NonFrozenTd1").setAttribute("style", b[2]);
        }
        if (document.getElementById("NonFrozenDiv1") !== null) {
            document.getElementById("NonFrozenDiv1").setAttribute("style", b[2]);
        }
        if (document.getElementById("NonFrozenTable1") !== null) {
            document.getElementById("NonFrozenTable1").setAttribute("style", b[3]);
        }
       
        return true;
    }


    
};
