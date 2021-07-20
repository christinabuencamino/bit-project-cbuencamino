async function y1k3s() { 
    console.log(name1)
    console.log(name2)
    console.log(name3)
    console.log(name4)

    let params = new URLSearchParams({
        'code' : "Vgu84ge2a6OvRB7UJ46/Plm6Dazri3jTezT2r/UFMbbp6YB9MevAHA==",
        'name1': document.getElementById("name1").value,
        'name2': document.getElementById("name2").value,
        'name3': document.getElementById("name3").value,
        'name4': document.getElementById("name4").value,
        })
    

    let resp = await fetch("https://week1function.azurewebsites.net/api/twocatz?" + params.toString(),{
        method: 'GET',
    })

    console.log(resp);

    let catResp = await resp.json();

    document.getElementById("image1").src = catResp.catpic1;
    document.getElementById("image2").src = catResp.catpic2;
    document.getElementById("image3").src = catResp.catpic3;
    document.getElementById("image4").src = catResp.catpic4; 
}
