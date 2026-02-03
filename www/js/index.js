document.addEventListener("deviceready", () => {

    // Show splash for 2 seconds
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("intro").style.display = "flex";
    }, 2000);

    document.getElementById("startBtn").addEventListener("click", () => {
        window.location.href = "map.html";
    });

});
