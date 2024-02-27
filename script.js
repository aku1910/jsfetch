const table = document.getElementById("table")
const thead = document.getElementById("thead")
const tbody = document.getElementById("tbody")
const theadtr = document.getElementById("theadtr")

fetch("https://northwind.vercel.app/api/products").then(item => item.json()).then(data => {
    for (const key in data[0]) {
        const th = document.createElement("th")
        th.innerHTML = (key)
        theadtr.append(th)
    }
    data.forEach(element => {
        const tr = document.createElement("tr")
        for (const key in element) {
            const td = document.createElement("td")
            td.innerHTML = element[key]
            tr.append(td)
        }
        tbody.append(tr)
    });
})


// const cards = document.querySelector(".cards");
// fetch("https://api.tvmaze.com/shows").then(response => response.json()).then(data => {
//         data.forEach(element => {
//             const name = document.createElement("h2")
//             name.innerHTML =` Name : ${element.name}`
//             const card = document.createElement("div");
//             card.style.width = "15%"
//             const language = document.createElement("p")
//             language.innerHTML =` Language : ${element.language}`
//             const image = document.createElement("img");
//             const rating = document.createElement("p")
//             const genres = document.createElement("p")
//             const status = document.createElement("p")
//             const runtime = document.createElement("p")
//             const premiered = document.createElement("p")
//             const ended = document.createElement("p")
//             const network = document.createElement("p")
//             network.innerHTML =` Country : ${element.network && element.network.country.name}`
//             ended.innerHTML =` Ended : ${element.ended}`
//             premiered.innerHTML = `Premier : ${element.premiered}`
//             runtime.innerHTML =` Runtime : ${element.runtime} min`
//             status.innerHTML = ` Status : ${element.status}`
//             genres.innerHTML =` Genres: ${element.genres}`
//             rating.innerHTML =` Rating : ${element.rating && element.rating.average}`
//             if (element.image.medium) {
//                 image.src = element.image.medium;
//                 image.alt = element.name
//             }
//             card.appendChild(image);
//             card.append(name)
//             card.append(rating)
//             card.append(language)
//             card.append(genres)
//             card.append(status)
//             card.append(runtime)
//             card.append(premiered)
//             card.append(ended)
//             card.append(network)
//             cards.appendChild(card);
//         });
//     })
//     .catch(error => {
//         console.error("error:", error);
//     });