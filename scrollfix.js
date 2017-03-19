function scrollcodebox() {
    $(document).ready(function() {
        $("#main").animate({
            scrollTop: snum
        }, "slow"), snum += 70
    })
}