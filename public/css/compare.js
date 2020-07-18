function clicked(inputt){
    console.log(inputt.id);
    var mainGun = document.querySelector("h1").innerHTML;
    window.location.replace("/compare/"+mainGun+"/"+inputt.id);
}