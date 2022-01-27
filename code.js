/*dineroDiego = prompt("Diego cuanto dinero tienes?");
dineroDiego = parseInt(dineroDiego);

if (dineroDiego > 0.6 && dineroDiego < 1) {
    alert("Diego comprate el helado de agua");
    alert("Y te sobran " + (dineroDiego - 0.6));
}

else if (dineroDiego >= 1 && dineroDiego < 1.6) {
    alert("Diego comprate el helado de crema");
    alert("Y te sobran " + (dineroDiego - 1));

}
else if (dineroDiego >= 1.6 && dineroDiego < 1.7) {
    alert("Diego comprate el helado de crema y choco");
    alert("Y te sobran " + (dineroDiego - 1.6));

}
else if (dineroDiego >= 1.7 && dineroDiego < 1.8) {
    alert("Diego comprate el helado de crema y choco con fresa");
    alert("Y te sobran " + (dineroDiego - 1.7))

}
else if (dineroDiego >= 1.8 && dineroDiego < 2.9) {
    alert("Diego comprate el helado de crema y coco");
    alert("Y te sobran " + (dineroDiego - 1.8));

}
else if (dineroDiego >= 2.9) {
    alert("Diego comprate el tarro de 1/4 de helado");
    alert("Y te sobran " + (dineroDiego - 2.9));
}

else {
    alert("No te alcanza para ni gapen")

}

dineroAlonso = prompt("Alonso cuanto dinero tienes?");
dineroAlonso = parseInt(dineroAlonso);

if (dineroAlonso > 0.6 && dineroAlonso < 1) {
    alert("Alonso comprate el helado de agua");
    alert("Y te sobran " + (dineroAlonso - 0.6));
}

else if (dineroAlonso >= 1 && dineroAlonso < 1.6) {
    alert("Alonso comprate el helado de crema");
    alert("Y te sobran " + (dineroAlonso - 1));

}
else if (dineroAlonso >= 1.6 && dineroAlonso < 1.7) {
    alert("Alonso comprate el helado de crema y choco");
    alert("Y te sobran " + (dineroAlonso - 1.6));

}
else if (dineroAlonso >= 1.7 && dineroAlonso < 1.8) {
    alert("Alonso comprate el helado de crema y choco con fresa");
    alert("Y te sobran " + (dineroAlonso - 1.7));

}
else if (dineroAlonso >= 1.8 && dineroAlonso < 2.9) {
    alert("Alonso comprate el helado de crema y coco");
    alert("Y te sobran " + (dineroAlonso - 1.8));

}
else if (dineroAlonso >= 2.9) {
    alert("Alonso comprate el tarro de 1/4 de helado");
    alert("Y te sobran " + (dineroAlonso - 2.9));
}

else {
    alert("No te alcanza para ni gapen")

}

dineroSebas = prompt("Sebas cuanto dinero tienes?");
dineroSebas = parseInt(dineroDiego);

if (dineroSebas > 0.6 && dineroSebas < 1) {
    alert("Sebas comprate el helado de agua");
    alert("Y te sobran " + (dineroSebas - 0.6));
}

else if (dineroSebas >= 1 && dineroSebas < 1.6) {
    alert("Sebas comprate el helado de crema");
    alert("Y te sobran " + (dineroSebas - 1));

}
else if (dineroSebas >= 1.6 && dineroSebas < 1.7) {
    alert("Sebas comprate el helado de crema y choco");
    alert("Y te sobran " + (dineroSebas - 1.6));

}
else if (dineroSebas >= 1.7 && dineroSebas < 1.8) {
    alert("Sebas comprate el helado de crema y choco con fresa");
    alert("Y te sobran " + (dineroSebas - 1.7));

}
else if (dineroSebas >= 1.8 && dineroSebas < 2.9) {
    alert("Sebas comprate el helado de crema y coco");
    alert("Y te sobran " + (dineroSebas - 1.8));

}
else if (dineroSebas >= 2.9) {
    alert("Sebas comprate el tarro de 1/4 de helado");
    alert("Y te sobran " + (dineroSebas - 2.9));
}

else {
    alert("No te alcanza para ni gapen")

}*/

/*let free = false;

const validarCliente = (time) => {
    let edad = prompt("Cual es tu edad");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis");
            free = true;
        } else {
            alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
        }
    } else {
        alert("mira papu, sos menor de edad entonces no podes entrar");
    }
}

validarCliente(23);
validarCliente(2);*/

class animal {
    constructor(raza, edad, color) {
        this.raza = raza;
        this.edad = edad;
        this.color = color;
    }
}

perro = new animal("Salchicha",2,"barsino");
console.log(perro)