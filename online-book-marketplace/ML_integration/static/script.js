async function getBooks() {

    let book = document.getElementById("bookInput").value;

    let res = await fetch("https://curliness-enforced-dormitory.ngrok-free.dev/recommend", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ book_title: book })
    });

    let data = await res.json();

    let container = document.getElementById("results");
    container.innerHTML = "";

    data.recommended_books.forEach(book => {

        let card = document.createElement("div");

        card.style.width = "150px";
        card.style.padding = "10px";
        card.style.border = "1px solid #ccc";
        card.style.borderRadius = "10px";
        card.style.textAlign = "center";

        card.innerHTML = `
            <img src="${book.image}" style="width:120px;height:160px;object-fit:cover;border-radius:8px;">
            <p><b>${book.title}</b></p>
        `;

        container.appendChild(card);
    });
}