const area = document.getElementById('area');

area.addEventListener('input', () => {

    area.value = area.value.replace(/\s+/g, "").toUpperCase();

});

const percentual = document.getElementById('percentual');

percentual.addEventListener('input', () => {

    let valor = percentual.value.replace('%', ''); // Remove o % se já tiver
    
    valor = valor.replace(/\D/g, ''); // Remove qualquer caractere que não seja número
    
    percentual.value = valor + '%'; // Adiciona o %
    
});

const horimetro1 = document.getElementById('horimetro-1');
const horimetro2 = document.getElementById('horimetro-2');
const horas = document.getElementById('horas');

function horasCalculadas() {

    const valor1 = parseFloat(horimetro1.value) || 0;
    
    const valor2 = parseFloat(horimetro2.value) || 0;

    horas.value = valor2 - valor1;

}

horimetro2.addEventListener('input', horasCalculadas);
