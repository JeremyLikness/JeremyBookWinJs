(function () {

    var books = [
        {
            title: "Programming the Windows Runtime by Example",
            img: "http://jeremylikness.com/images/showcover_half.jpg",
            link: "http://bit.ly/winrtexample" },
        {
            title: "Building Windows 8 Apps with C# and XAML",
            img: "http://jeremylikness.com/images/buildingwind8cover.jpg",
            link: "http://www.amazon.com/gp/product/0321822161/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0321822161&linkCode=as2&tag=cei0e-20"},
        {
            title: "Designing Silverlight Business Applications",
            img: "http://jeremylikness.com/images/designingsilverlightcover.jpg",
            link: "http://www.amazon.com/gp/product/0321810414/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0321810414&linkCode=as2&tag=cei0e-20"
        }];

    function onPointerDown(evt) {
        WinJS.UI.Animation.pointerDown(evt.target);
        evt.preventDefault();
    }

    function onPointerUp(evt) {
        WinJS.UI.Animation.pointerUp(evt.target);
        evt.preventDefault();
    }

    function addPointerDownHandlers(target) {
        target.addEventListener("pointerdown", onPointerDown, false);
        target.addEventListener("touchstart", onPointerDown, false);
        target.addEventListener("mousedown", onPointerDown, false);
    }

    function addPointerUpHandlers(target) {
        target.addEventListener("pointerup", onPointerUp, false);
        target.addEventListener("touchend", onPointerUp, false);
        target.addEventListener("mouseup", onPointerUp, false);
    }

    WinJS.Namespace.define("Book.ListView", {
        data: new WinJS.Binding.List(books)
    });

    WinJS.Application.onready = function () {
        WinJS.UI.processAll();
        WinJS.UI.Animation.enterPage(document.getElementById('mainDiv'), null).then(function () {
            var controls = document.getElementsByClassName("book"), i;
            for (i = 0; i < controls.length; i+=1) {
                addPointerDownHandlers(controls[i]);
                addPointerUpHandlers(controls[i]);
            }
        });
    };

    WinJS.Application.start();
})();