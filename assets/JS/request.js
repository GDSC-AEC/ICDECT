async function httpGet(theUrl)
{
  let response = fetch(theUrl);
  let data = (await response).json();
  return data
}


async function para(id, data){
    const para = document.createElement("p");
    const i = document.createElement("i");
    i.className = "bx bx-badge-check";
    i.innerHTML = ` ${data}`;
    document.getElementById(id).appendChild(para).appendChild(i);
}

async function LoadNames(){
    let Odata = await httpGet('https://ismt-dynamic.herokuapp.com/organizing')
    let Idata = await httpGet('https://ismt-dynamic.herokuapp.com/international')
    let Ndata = await httpGet('https://ismt-dynamic.herokuapp.com/national')
    let Tdata = await httpGet('https://ismt-dynamic.herokuapp.com/technical')



    // for Organizing
    Odata.forEach(
        function(value, index) {
        if ( index != 0 ) {
            para('Organizing', value)
        }
    });
    

    // for International
    Idata.forEach(
        function(value, index) {
        if ( index != 0 ) {
            para('International', value)
        }
    });


    // for National
    Ndata.forEach(
        function(value, index) {
        if ( index != 0 ) {
            para('National', value)
        }
    });


    // for Technical
    Tdata.forEach(
        function(value, index) {
        if ( index != 0 ) {
            para('Technical', value)
        }
    });


}

