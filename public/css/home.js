const gunInfo = {
    akm:"akm",
    m762:"m762",
    dp_28:"dp_28",
    slr:"slr",
    groza:"groza",
    kar98:"kar98",
    m24:"m24",
    mk14:"mk14",
    mk47:"mk47",
    rk1895:"rk1895",
    sks:"sks",
    aug_a3:"aug_a3",
    m416:"m416",
    m16a14:"m16a4",
    m249:"m249",
    mini14:"mini14",
    scar_l:"scar_l",
    awm:"awm",
    s686:"s686",
    s12k:"s12k",
    s1897:"s1897",
    crossbow:"crossbow",
    p1911:"p1911",
    thompson:"thompson",
    ump9:"ump9" 
}

function showList(input) {
	var datalist = document.querySelector("datalist");
	if (input.value) {
		datalist.id = "talk-list";    		
	} else {
		datalist.id = "";
  }
console.log(gunInfo);
   for(name in gunInfo){

    if(input.value==name){
        window.location.replace("/guns/"+name);
   }

  }
  }