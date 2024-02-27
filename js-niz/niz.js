function dodajTxt(){
    const fragment = document.createDocumentFragment();
    const input = fragment
        .appendChild(document.createElement("p"))
        .appendChild(document.createElement("input"))
    input.type = "number"; 

    document.body.appendChild(fragment);
}

function urediNiz(){
    let brojElemenata = document.getElementsByTagName('input').length;
    let niz = [];

    for (let i = 0; i < brojElemenata; i++) {
            if(document.getElementsByTagName('input')[i].value == ''){
                continue;
            }
                niz.push(
                    document.getElementsByTagName('input')[i].value);  
            }
        
    // console.log(brojElemenata);
    // console.log(niz);
    niz.sort((a, b) => a - b);
    alert(niz);
}
