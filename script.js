var beers = [];

$('.post-beer').click(function(){
    var name = $("#beer-name").val();
    var cat = $("#beer-cat").val();
    addBeer(name, cat);
    renderBeers();
});

function addBeer(name, cat){
    var Beer = { 
            "name": name,
            "category": cat
        };
    beers.push(Beer);
}

function renderBeers(){
    var ul = $('.beers .beers-list');
    ul.empty();
    beers.forEach(function(element) {
        //ul.append("<li>Appended item</li>");
        if(element.name && element.category){
            ul.append("<li>" + "name: " + element.name + " category: " + element.category + "</li>");
        }
        
      });
    
}