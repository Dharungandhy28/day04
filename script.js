//1.How to compare two JSON have the same property without the same order?

var obj1={
    name: "person1",
    age: 5
};
var obj2={
    age: 5,
    name: "person1"
};
//to compare we use JSON stringify
JSON.stringify(obj1)===JSON.stringify(obj2);
console.log(obj1);

//2.Use the rest countries api and display all the country flags.
//3.Use the same countries and print all countries name,region,subregion,populations.
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(request);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag);
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);
    };
    
}