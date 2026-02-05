function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}

function searchContent() {
    let keyword = document.getElementById("searchInput").value.toLowerCase();
    let sections = document.querySelectorAll(".content");

    for (let section of sections) {
        if (section.innerText.toLowerCase().includes(keyword)) {
            section.scrollIntoView({ behavior: "smooth" });
            return;
        }
    }

    alert("Không tìm thấy món ăn!");
}
