$(document).ready(function() {
   $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder:'000.000.000-00'
    })

    $('#cep').mask('00.000-000', {
        placeholder:'00.000-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }

        },
        messages: {
            nome: 'Preencha seu nome completo',
            telefone: 'Preencha seu telefone',
            email: 'Preencha seu e-mail',
            cpf: 'Preencha seu cpf',
            endereco: 'Preencha seu endereço completo',
            cep: 'Preencha seu cep'
        },
    })
})