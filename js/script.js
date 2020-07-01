const $campoBusca = $('.busca');

    $campoBusca.on('input', function () {
        const $textoCampoBusca = $(this).val().trim();

        if ($textoCampoBusca.length > 0) {
            $('.cartao').hide().filter(function () {
                return $(this).find(".cartao-conteudo").text().match(new RegExp($textoCampoBusca, "i"));
            }).show().replace("$textoCampoBusca","<span>${$textoCampoBusca}</span>");
        } else {
            $('.cartao').show();
            
         })
         
         /*   const $campoBusca1 = $('.busca');
        
            $campoBusca1.on('input', function () {
                const $textoCampoBusca2 = $(this).val().trim();
        
                if ($textoCampoBusca2.length > 0) {
                    $('.cartao').hide().filter(function () {
                        return $(this).find(".cartao-conteudo").text().match(new RegExp($textoCampoBusca2, "i"));
                    }).show().replace("$textoCampoBusca2","<span>${$textoCampoBusca2}</span>");
                } else {
                    $('.cartao').show();
                }
            })
          
        }*/
   
  
// **************************

