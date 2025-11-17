
document.getElementById('identificarBtn').addEventListener('click', function() {

    let codigo = document.getElementById('codigoInput').value;
    let resultado = document.getElementById('resultado');
    let tipoCuerpo;

    switch (codigo) {
        case '1':
            tipoCuerpo = 'Estrella';
            break;
        case '2':
            tipoCuerpo = 'Planeta';
            break;
        case '3':
            tipoCuerpo = 'Cometa';
            break;
        case '4':
            tipoCuerpo = 'Asteroide';
            break;
        case '5':
            tipoCuerpo = 'Galaxia';
            break;
        default:
            tipoCuerpo = 'Código no válido';
    }

    resultado.textContent = tipoCuerpo;
});