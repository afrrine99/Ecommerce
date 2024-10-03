function viewMore() {
    var moreInfo = document.getElementById("moreInfo");
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
    } else {
        moreInfo.style.display = "none";
    }
}