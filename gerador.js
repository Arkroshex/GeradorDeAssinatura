function adicionarValor() {

    let nam = document.getElementById("username").value;
    let sur = document.getElementById("surname").value;
    let job = document.getElementById("job").value;
    let nome = nam + " " + sur;
 master

    let espacoDiv = '<div class="row justify-content-center" style="margin-top: 15rem;margin-bottom: 5rem;"><div class="card"><div id="dadosDeUsuario" class="card-header"></div><ul class="list-group list-group-flush" style="text-align: center;"><p><h5>Código-fonte:</h5></p><li class="list-group-item" style="max-width: 40rem;"><textarea name="CaixaResultado" id="codigoFonte" cols="60" rows="3" style="font-family: monospace; font-size: smaller;"></textarea></li><li class="list-group-item"><a href="" onclick="copiar()" class="btn btn-primary">Copiar o texto</a></li></ul></div></div>'
    //let espacoDiv = '<div class="row justify-content-center" style="margin-top: 15rem;margin-bottom: 5rem;"><div class="card"><div id="dadosDeUsuario" class="card-header"></div><ul class="list-group list-group-flush" style="text-align: center;"><h5>Código-fonte:</h5><li class="list-group-item" style="max-width: 40rem;"><code id="codigoFonte"></code></li></ul></div></div>'
    let result =   '<div><br></div><div data-zbluepencil-ignore="true" id="Zm-_Id_-Sgn"><div><span class="font" style="font-family:verdana, sans-serif"><span class="size" style="font-size:13.3333px">Atenciosamente,</span></span><br></div><div><br></div><div id="Zm-_Id_-Sgn"><table cellpadding="0" cellspacing="0" style="font-size: 9pt; font-family: Arial,go sans-serif; line-height: 14px"><tbody><tr><td colspan="2" style="width: 480px; padding-bottom: 5px; color: rgb(60, 60, 59)"><div><span class="colour" style="color:rgb(60, 60, 59)"><span class="font" style="font-family:Arial, sans-serif"><b><span class="size" style="font-size:11pt">' + nome + '</span></b></span></span><br></div></td></tr><tr><td colspan="2" style="width: 480px; color: rgb(23, 147, 210); padding-bottom: 5px; height: 24px"><span class="font" style="font-family:Arial, sans-serif"><span class="size" style="font-size:11pt"><span class="colour" style="color:rgb(51, 51, 51)">' + job + '</span></span></span><br></td></tr><tr><td colspan="2" style="width: 480px; padding-bottom: 2px; border-top: 1px dotted; border-top-color: rgb(19, 19, 19)"><br></td></tr><tr><td style="width: 120px; vertical-align: middle" valign="middle"><div><img alt="" src="https://bitbucket.org/DCOMTITAN/titan-visual/raw/46394864a3125de27cdf56c2b8ef1ad7d3747834/Marca/Logo_nome_letra_grossa_sem_fundo.png" style="" width="109" height="109"><br></div><div></div><br></div></td><td style="width: 360px; color: rgb(19, 19, 19); font-family: Arial, sans-serif; vertical-align: middle" valign="middle"><div><span class="colour" style="color:rgb(19, 19, 19)"><span class="size" style="font-size:9pt"><span class="font" style="font-family:Arial, sans-serif">EPUFBA - 8º Andar. Sala 8.3.5.&nbsp;</span><span class="font" style="font-family:arial, helvetica, sans-serif, sans-serif">|</span><span class="font" style="font-family:Arial, sans-serif">R. Prof. Aristídes Novis, Nº 2, Federação.</span></span></span><br></div><div><span class="colour" style="color:rgb(19, 19, 19)"><span class="size" style="font-size:9pt"><span class="font" style="font-family:Arial, sans-serif">Salvador - BA</span></span></span><br></div><div><span class="colour" style="color:rgb(19, 19, 19)"><span class="size" style="font-size:9pt"><span class="font" style="font-family:Arial, sans-serif">CEP: 40210-630</span></span><span class="font" style="font-family:Arial, sans-serif"></span></span><br></div><table cellpadding="0" cellspacing="0"><tbody><tr><td style="padding-top: 2px; padding-left: 1px"><span style="display: inline-block; height: 23px"><span><a href="https://www.facebook.com/titanufba/" target="_blank"><img alt="Facebook icon"  src="https://bitbucket.org/DCOMTITAN/titan-visual/raw/fceabc28d8271cfd23180321d610a23f6a6a9115/%C3%ADcones/facebook-pantone.png" style="border: 0"; height= 25px; width= 25px></a><a href="https://www.instagram.com/titan_ci" target="_blank"><span style="padding-left: 13px"><img alt="Instagram icon"  src="https://bitbucket.org/DCOMTITAN/titan-visual/raw/fceabc28d8271cfd23180321d610a23f6a6a9115/%C3%ADcones/instagram-pantone.png" style="border: 0"; height= 25px; width= 25px></span> </a><a href="https://pt.linkedin.com/company/ufbatitan" target="_blank"><span style="padding-left: 13px"><img alt="Linkedin icon"  src="https://bitbucket.org/DCOMTITAN/titan-visual/raw/fceabc28d8271cfd23180321d610a23f6a6a9115/%C3%ADcones/linkedin-pantone.png" style="border: 0"; height= 25px; width=25px ></span></a></span></span></td></tr></tbody></table></td></tr></tbody></table></div></div>'; 
 master
    let source = '<div><br></div><div data-zbluepencil-ignore="true" id="Zm-_Id_-Sgn"><div><span class="font" style="font-family:verdana, sans-serif"><span class="size" style="font-size:13.3333px">Atenciosamente,</span></span><br></div><div><br></div><div id="Zm-_Id_-Sgn"><table cellpadding="0" cellspacing="0" style="font-size: 9pt; font-family: Arial, sans-serif; line-height: 14px"><tbody><tr><td colspan="2" style="width: 480px; padding-bottom: 5px; color: rgb(60, 60, 59)"><div><span class="colour" style="color:rgb(60, 60, 59)"><span class="font" style="font-family:Arial, sans-serif"><b><span class="size" style="font-size:11pt">' + nome + '</span></b></span></span><br></div></td></tr><tr><td colspan="2" style="width: 480px; color: rgb(23, 147, 210); padding-bottom: 5px; height: 24px"><span class="font" style="font-family:Arial, sans-serif"><span class="size" style="font-size:11pt"><span class="colour" style="color:rgb(51, 51, 51)">' + job + '</span></span></span><br></td></tr><tr><td colspan="2" style="width: 480px; padding-bottom: 2px; border-top: 1px dotted; border-top-color: rgb(19, 19, 19)"><br></td></tr><tr><td style="width: 120px; vertical-align: middle" valign="middle"><div><img alt="" src="https://bitbucket.org/DCOMTITAN/titan-visual/raw/46394864a3125de27cdf56c2b8ef1ad7d3747834/Marca/Logo_nome_letra_grossa_sem_fundo.png" style="" width="109" height="109"><br></div><div></div><br></div></td><td style="width: 360px; color: rgb(19, 19, 19); font-family: Arial, sans-serif; vertical-align: middle" valign="middle"><div><span class="colour" style="color:rgb(19, 19, 19)"><span class="size" style="font-size:9pt"><span class="font" style="font-family:Arial, sans-serif">EPUFBA - 8º Andar. Sala 8.3.5.&nbsp;</span><span class="font" style="font-family:arial, helvetica, sans-serif, sans-serif">|</span><span class="font" style="font-family:Arial, sans-serif">R. Prof. Aristídes Novis, Nº 2, Federação.</span></span></span><br></div><div><span class="colour" style="color:rgb(19, 19, 19)"><span class="size" style="font-size:9pt"><span class="font" style="font-family:Arial, sans-serif">Salvador - BA</span></span></span><br></div><div><span class="colour" style="color:rgb(19, 19, 19)"><span class="size" style="font-size:9pt"><span class="font" style="font-family:Arial, sans-serif">CEP: 40210-630</span></span><span class="font" style="font-family:Arial, sans-serif"></span></span><br></div><table cellpadding="0" cellspacing="0"><tbody><tr><td style="padding-top: 2px; padding-left: 1px"><span style="display: inline-block; height: 23px"><span><a href="https://www.facebook.com/titanufba/" target="_blank"><img alt="Facebook icon"  src="https://bitbucket.org/DCOMTITAN/titan-visual/raw/fceabc28d8271cfd23180321d610a23f6a6a9115/%C3%ADcones/facebook-pantone.png" style="border: 0"; height= 25px; width= 25px></a><a href="https://www.instagram.com/titan_ci" target="_blank"><span style="padding-left: 13px"><img alt="Instagram icon"  src="https://bitbucket.org/DCOMTITAN/titan-visual/raw/fceabc28d8271cfd23180321d610a23f6a6a9115/%C3%ADcones/instagram-pantone.png" style="border: 0"; height= 25px; width= 25px></span> </a><a href="https://pt.linkedin.com/company/ufbatitan" target="_blank"><span style="padding-left: 13px"><img alt="Linkedin icon"  src="https://bitbucket.org/DCOMTITAN/titan-visual/raw/fceabc28d8271cfd23180321d610a23f6a6a9115/%C3%ADcones/linkedin-pantone.png" style="border: 0"; height= 25px; width=25px ></span></a></span></span></td></tr></tbody></table></td></tr></tbody></table></div></div>'

    document.getElementById("jobField").innerHTML = job
    document.getElementById("nome").innerHTML = nome
    document.getElementById('codigoFonte').innerText = source;
    alert('Obrigado por testar minha ferramenta! Sinta-se à vontade para sugerir melhoras ou modificar para si!')
    }


    function copiar() {
        /* Get the text field */
        var copyText = document.getElementById("codigoFonte");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Texto copiado! ");
      } 

