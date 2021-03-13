const datosGenerales = [
    {   dato: "Luis Alfredo Lopez Cruz"   },
    {   dato: "932 169 4856"    },
    {   dato: "dj_97@outlook.com"  },
    {   dato: "21 de marzo de 1997"  },
    {   dato: "Mexicana"   },
    {   dato: "Soltero"   }, 
    {   dato: "LOCL970321G60"    },
    {   dato: "LOCL970321HCSPRS08"  }
];


datosGenerales.forEach( function(persona) {
    let node = document.createElement('li');
    let texto = document.createTextNode(`${persona.dato}`);
    node.appendChild(texto);
    document.getElementById("datos").appendChild(node);
}); 
