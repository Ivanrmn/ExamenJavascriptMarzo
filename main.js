var shoe = {
    "model": "Sacai x Nike LDV Waffle",
    "colour": "Varsity Blue/Del Sol/Varsity Red",
    "code": "BV0073-400",
    "avaliable": "07/03/19",
    "price": "180$"
};

var raffles = {

    "Antonia Milano": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/AntoniaMilano.jpg",
        "country": "Italy",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "4 to 12 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.antonia.it/164-shoes"
    },

    "END": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/End.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "5 to 12 UK",
        "Opens": "live",
        "Closes": "07/03 @ 12AM GMT",
        "url": "https://launches.endclothing.com/"
    },

    "Foot Patrol": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/FootPatrol.png",
        "country": "France",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "36.5 to 47.5 EU",
        "Opens": "live",
        "Closes": "04/02 @ 10AM CET",
        "url": "https://www.footpatrol.com/customer-service/raffle-fr/"
    },

    "Holypop": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/HolyPop.png",
        "country": "Italy",
        "purchase": "Online FCFS",
        "collection": "Postage Available",
        "Sizes": "TBC",
        "Opens": "announced",
        "Closes": "07/02 @ 12AM CET",
        "url": "https://www.holypopstore.com/en/footwear"
    },

    "Offspring": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/OffSpring.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "3.5 to 7 UK",
        "Opens": "live",
        "Closes": "closed",
        "url": "https://www.offspring.co.uk/release-dates"
    },

    "SNS": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SNS.jpg",
        "country": "Swe, UK, Ger, Fr",
        "purchase": "Online Raffle",
        "collection": "Post and Collect",
        "Sizes": "4 to 13 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.sneakersnstuff.com/en/937/sns-raffles"
    },

    "Solebox": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg'git",
        "country": "Germany",
        "purchase": "In-Store/Online",
        "collection": "Post and Collect",
        "Sizes": "41 to 46 EU",
        "Opens": "announced",
        "Closes": "When sold out",
        "url": "https://www.solebox.com/en/Footwear/"
    },

};

window.onload = function() {
    /*
    document.getElementsByClassName("modelo").innerHTML(shoe.model);
    document.getElementsByClassName("color").innerHTML(shoe.colour);
    document.getElementsByClassName("price").innerHTML(shoe.code + "|" + shoe.avaliable + "|" + shoe.price);
    */
    $(".modelo").appendChild(shoe.model);
    $(".color").appendChild(shoe.colour);
    $(".price").appendChild(shoe.code + "|" + shoe.avaliable + "|" + shoe.price);

    var cerrado = "CLOSED";
    var abierto = "ENTER RAFFLE";
    var noAbierto = "ANNOUNCED";
    var suscribirte = "Mark as entered";
    var eliminarSuscripcion = "Entered";

    var rifas = JSON.parse(raffles);

    var list = "";
    for(var i = 0; i < rifas.length; i++) {
    list += "<li><img src='" + rifas[i].logo + "'>" +
    "<p>" + rifas[i].country + "</p>" + 
    "<p>" + rifas[i].purchase + "</p>" +
    "<p>" + rifas[i].collection + "</p>" +
    "<p>" + rifas[i].Sizes + "</p>" +
    "<p>" + rifas[i].Opens + "</p>" +
    "<p>" + rifas[i].Closes + "</p>"
    
    if (rifas[i].Opens == "closed") {
        + "<button style='background-color: red;'  href=' " + rifas[i].url + "' class='botonRifa'>" + cerrado + "</button></li>";
    } else if (rifas[i].Opens == "announced") {
        + "<button style='background-color: gray;'  href=' " + rifas[i].url + "' class='botonRifa'>" + noAbierto + "</button></li>";
    } else {
        + "<button style='background-color: green;' href=' " + rifas[i].url + "' class='botonRifa'>" + abierto + "</button></li>";
    }

    + "<p class='suscribirte'>" + suscribirte + "</p>"
}

    $(".container-rifas").innerHTML = "<ul>" + list + "</ul>"; 

    if($(".suscribirte").val() == suscribirte) {
        $(".suscribirte").val().delete();
        $(".suscribirte").appendChild(eliminarSuscripcion);
    } else {
        $(".suscribirte").val().delete();
        $(".suscribirte").appendChild(suscribirte);
    }

    localStorage.setItem([rifas]);

    for (rifas in localStorage) {
        var value = localStorage[rifas];
        localStorage.setItem([rifas]);
    }

    for(var i = 0; i < localStorage.length; i++) {
        var name = localStorage.key(i);
        var value = localStorage.getItem(name);
    }
}









