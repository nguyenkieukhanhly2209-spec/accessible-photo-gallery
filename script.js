function upDate(previewPic) {
    console.log("Triggered for: " + previewPic.alt);
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

// Hàm chạy khi trang vừa tải xong để gán tabindex tự động
window.onload = function() {
    console.log("Page loaded successfully. Adding tabindex...");
    let images = document.querySelectorAll("img.preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex to image " + (i + 1));
        
        // Bổ sung sự kiện cho bàn phím (focus và blur)
        images[i].addEventListener("focus", function() {
            upDate(this);
        });
        images[i].addEventListener("blur", function() {
            unDo();
        });
    }
}
