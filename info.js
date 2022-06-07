//get ip
$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function( location ) {
        $('#ip').html(location.IPv4);
    }
});
//browser check
if (navigator.userAgent.indexOf("Chrome")>-1){
    document.getElementById("browser").textContent="Chrome";
}
else if (navigator.userAgent.indexOf("Firefox")>-1){
    document.getElementById("browser").textContent="Firefox";
}
else if (navigator.userAgent.indexOf("Safari")>-1){
    document.getElementById("browser").textContent="Safari";
}
//cookies
if (navigator.cookieEnabled){
    document.getElementById("cookies").textContent="cookies Enabled";
}
else{
    document.getElementById("cookies").textContent="cookies Disabled";

}
//languages
document.getElementById("lang").textContent=navigator.language;
//check if mobile
try {
    if (navigator.userAgentData.mobile){
        document.getElementById("mobile").textContent="mobile";
    }
    else {
        document.getElementById("mobile").textContent="not mobile";
    }
}
catch (err){
    document.getElementById("mobile").textContent="your browser dont support";
}
//ad blocker use
let fakeAd = document.createElement("div");
fakeAd.className =
    "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"

fakeAd.style.height = "1px"

document.body.appendChild(fakeAd)

let x_width = fakeAd.offsetHeight;
let msg = document.getElementById("msg")


if(x_width){
    console.log(" No AdBlocker detected")
    var btn=document.getElementById("adblocker")
    btn.textContent="no AdBlocker detected";

}else{
    console.log("AdBlocker detected")
    var btn2=document.getElementById("adblocker")
    btn2.textContent="ad blocker deact";
}
//charge check
if (navigator.userAgent.indexOf("Chrome")>-1){
    battery()
}
else if (navigator.userAgent.indexOf("Firefox")>-1){
    battery()
}
else if (navigator.userAgent.indexOf("Safari")>-1){
    x.textContent="Safari not support";
}
function battery() {

    navigator.getBattery().then(battery => {
        let m = ""
        let c = ""
        var btn4=document.getElementById("batt");
        m = battery.level * 100 + "%"
        if (battery.charging) {
            m += " ⚡";
            btn4.className="btn btn-lg btn-success";
        }
        else{
            if (battery.level*100<80){
                btn4.className="btn btn-lg btn-warning";
            }
            if (battery.level*100<20){
                btn4.className="btn btn-lg btn-danger";
            }
        }

        console.log(c, m);
        document.getElementById("batt").innerHTML = m;
        document.getElementById("batt").style.color = "black";
    })
}
