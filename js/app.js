import { User, options, tab, Users } from "./modules_js.js";

document.addEventListener("DOMContentLoaded", e => {
  //fonction main js

  /* objst et des méthodes déjà dans le langage */
  console.log(e.target.firstElementChild); // document html
  // à afficher dans la console navigateur
  /* 
        const let 
     */
  const element_h1 = document.querySelector("h1")
  //event gestionnaire pour cliquer
element_h1.addEventListener("click",(e)=>{
    
  //Sweet alert
  Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
  });
})

element_h2.addEventListener("click",(e)=>{
  
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  });
})
  console.log(typeof User);
  User.user_print();
  // Opérateur

  /* 
  =
  += ajouter
  -= enlever
  ++ +1
  -- -1
  % modulo
  * mult
  /
  <=
  >=
  >
  <
  ||
  &&
  */
  let nombre = Number(10);
  let nombre_1 = String("9");
  const version = parseFloat(prompt("saisir un chiffre",""))
  nombre === nombre_1 ? console.log(true) : console.log(false);
  console.log(nombre * 2);

  nombre % 3 === 1 ? console.log("chiffre paire") : console.log("chiffre impaire")
  console.log(version.toFixed(2))



  /* Chaînage optionnel en JavaScript {}?. */
  /* npm install --save-dev @babel/plugin-proposal-optional-chaining */
  // Définition de l'objet person avec une propriété address pouvant être nulle

  const tab = ["html", "css", true];
  const tab_1 = ["xml"]
  const tab_2 = ["Python", ...tab, ...tab_2]

  tab_2.push(tab, tab_1)
  console.table(tab_2)

  let i = 0;
  /*while(i < tab.length){
    
    
    console.log(tab[i])
    i++;
  }*/
  /*for(let i = 0; i < tab.length; i++){
      console.log((i+1)+" : "+tab[i]+"\n")
  }*/
  /*for(let index in tab){
      console.log(index+" "+tab[index])
  }*/

  tab.map((index,element) => {
    console.log(element+ ' ' +index)
});

for(let index in Users){
  console.log(index+" "+Users[index])
}
/* Object.keys(Users).forEach((props)=>{
  console.log(props + ': ' + Users[props]);
}); */

/*Object.keys(User).forEach(props) => {
  console.log(props + ': ' + User[props]);
}*/

});


