var textoResultado = document.querySelector(".textoResultado"),
    botonResultado = document.querySelector(".resultado button"),
    muñeco = document.querySelector(".muñeco"),
    botonCopiar = document.querySelector(".botonCopiar"),
    textoDispositivos = document.querySelector(".dispositivos");

botonCopiar.onclick = function () {

    navigator.clipboard
        .writeText(textoResultado.value)
        .then(
            () => alert("Texto copiado")
        );
}

document.querySelector(".encriptar").onclick = function () {

    mostrar();

    let ingresoTexto = document.querySelector(".ingresoTexto").value.toLowerCase();

    textoResultado.value = ingresoTexto.replaceAll(/[a|e|i|o|u]/gi, (vocal) =>
        vocal == 'a' ? vocal.replace(vocal, "ai") :
            vocal == 'e' ? vocal.replace(vocal, "enter") :
                vocal == 'i' ? vocal.replace(vocal, "imes") :
                    vocal == 'o' ? vocal.replace(vocal, "ober") :
                        vocal == 'u' ? vocal.replace(vocal, "ufat") : vocal);

    ajusteVentana();
}

document.querySelector(".desencriptar").onclick = function () {

    mostrar();

    let ingresoTexto = document.querySelector(".ingresoTexto").value.toLowerCase();

    textoResultado.value = ingresoTexto.replaceAll(/(ai|enter|imes|ober|ufat)/gi, (frase) =>
        frase == 'ai' ? frase.replace(frase, "a") :
            frase == 'enter' ? frase.replace(frase, "e") :
                frase == 'imes' ? frase.replace(frase, "i") :
                    frase == 'ober' ? frase.replace(frase, "o") :
                        frase == 'ufat' ? frase.replace(frase, "u") : frase);

    ajusteVentana();
}

function mostrar() {

    textoResultado.value = "";

    muñeco.style.display = 'none';
    textoDispositivos.style.display = "none";
    textoResultado.style.display = "block";
    botonResultado.style.display = "block";
}

function alturaResultado(resultado) {
    resultado.style.height = "1px";
    resultado.style.height = (25 + resultado.scrollHeight) + "px";
}

function ajusteVentana() {

    if (document.documentElement.clientWidth < 933) {

        alturaResultado(textoResultado);
    } else {

        textoResultado.style.height = "405px";
    }
}