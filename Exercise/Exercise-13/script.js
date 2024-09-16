function createCard(title, cName, views, months, duration, thumbnail){
    let view;
    if (views<1000000 && views>1000){
        view = views/1000 + "k";
    }
    else if(views>= 1000000){
        view = views/1000000 + "M";
    }
    else{
        view = views;
    }
    let html = `
            <div class="card">
				<div class="image">
					<img src="${thumbnail}" alt="">
					<div class="capsule">${duration}</div>
				</div>
				<div class="text">
					<h1>${title}</h1>
					<p>${cName} . ${view} views . ${months} months ago</p>
				</div>
			</div>`
            document.querySelector(".container").innerHTML = document.querySelector(".container") + html;
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "card.png")