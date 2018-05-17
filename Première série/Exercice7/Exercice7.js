function valider()
        {
            var pointure = document.getElementById("pointure").value;
            var année_naissance = document.getElementById("année_naissance").value;

            alert(((((pointure*2)+5)*50)-année_naissance)+1766);

}
