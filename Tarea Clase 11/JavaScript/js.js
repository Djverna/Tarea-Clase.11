//--------IF------------
var topping = prompt("ingresa topping que desea con su helado (Oreo, KitKat, Kinder): ");
var helado = 500;
if (topping == "Oreo" || topping == "oreo") {
    var precio = 10;
    var preciofinal = helado + precio;
    alert("El precio del helado es: $" + preciofinal);
}
else if (topping == "KitKat" || topping == "kitkat") {
    var precio = 15;
    var preciofinal = helado + precio;
    alert("El precio del helado es: $" + preciofinal);
}
else if (topping == "Kinder" || topping == "kinder") {
    var precio = 20;
    var preciofinal = helado + precio;
    alert("El precio del helado es: $" + preciofinal);
}
else {
    alert("No tenemos este topping");
}

//------- SWITCH --------
// var menu = prompt("Ingrese menú deseado (Carne, Pescado o Verduras) ");
// switch (menu){
// case "Carne":
// alert("La carne vendrá con vino tinto")
// break;
// case "Pescado":
// alert("La Pescado vendrá con vino blanco")
// break;
// case "Verdura":
// alert("La Verdura vendrá con agua")
// break;
// default:
//     alert("ingrese su menú (Carne, Pescado o Verduras)")
// }

//-----FOR-----------
// var lista = ["Joaqui", "Maite", "Maricel", "ludmila", "David"];
// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i])
// }
// lista.push ("Donato");
// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i])
// }


//------WHILE------
// var numero= 0;
// while (numero < 11){
//     alert("El número es menor que 11, el valor es " + numero);
//     numero= numero + 1;
// }