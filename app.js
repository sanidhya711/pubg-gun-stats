const express = require("express");
const app = express();
const gunInfo = require("./guninfo");
const bodyParser = require("body-parser");
const guninfo = require("./guninfo");
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var filters = {
    map:"erangle",
    ammo:"",
    type:"",
    firingMode:""
    // sort_by:"",
    // sort_from:"",
};
var defaultFilters = {
    map:"erangle",
    ammo:"",
    type:"",
    firingMode:""
    // sort_by:"",
    // sort_from:"",
};
var searchedGuns = [] ;
var searched;


app.get("/",function(req,res){
    var gunNames=[];

    for(gun in gunInfo){
        var propertyMatches = 0;
        for(filter in filters){
           var gunPrperties = gunInfo[gun][filter];
           var filterProperties = filters[filter];
           if(gunPrperties.includes(filterProperties)){
               propertyMatches++;
           }
        }

         if(propertyMatches == 4){
            gunNames.push(gunInfo[gun].name);
         }
        

    }

if(JSON.stringify(filters)===JSON.stringify(defaultFilters)){
var showClearFilter = "hide";
}else{
var showClearFilter = "show"
}

res.render("home",{allGuns:gunInfo,gunNames:gunNames,showClearFilter:showClearFilter});
})

app.get("/guns/:gunName",function(req,res){
gunRequested = req.params.gunName;
 var requestGunInfo = (gunInfo[gunRequested])
    res.render("individual-gun",{gun:requestGunInfo})
})

app.get("/search",function(req,res) {
    for(gun in gunInfo){
        var gunName = gunInfo[gun].name;
        if(gunName.includes(searched)){
            searchedGuns.push(gunName);
        }
    }
    res.render("search",{searchedGuns:searchedGuns});
})


app.post("/search",function(req,res) {
    searchedGuns = []
    res.redirect("/search");
    searched = req.body.searched;
})

app.post("/clearfilters",function(req,res){
    filters = defaultFilters;
    res.redirect("/");
})


app.post("/",function(req,res){
filters = {
    map:req.body.map,
    ammo:req.body.ammo,
    type:req.body.type,
    firingMode:req.body.firing_mode
    // sort_by:req.body.sort_by,
    // sort_from:req.body.sort_from
}
res.redirect("/")
})


app.get("/compare/:gunName",function(req,res) {
    var mainGun = req.params.gunName;
    res.render("compare",{mainGun:mainGun,gunInfo:guninfo});
})


app.get("/tables",function(req,res){
res.render("tables",{gunInfo:gunInfo});
})





app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on port 3000");
})