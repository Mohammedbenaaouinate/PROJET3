/*document.getElementById("formulaire").addEventListener("submit",function(e){
        var erreur;
        var username=document.getElementById("username");
        var password=document.getElementById("password");
        var confirmpassword=document.getElementById("confirmpassword");
        if(!username.value)
        {
            erreur="Veuillez saisir votre user name";

        }
        if(!password.value)
        {
            erreur="Veuillez saisir votre user name";

        }
        if(!confirmpassword.value)
        {
            erreur="Veuillez saisir votre user name";

        }
        if(erreur)
        {
            e.preventDefault();
            document.getElementById("erreur").innerHTML=erreur;
            return false;
        }
        else{
          alert("Formulaire enregistrer avec succes!");
        }
    });
    */
   var erreur;
   var username=document.getElementById("username");
   if(username=="")
   {
       erreur="un champ invalid";
       document.getElementById("username").innerHTML=erreur;
   }