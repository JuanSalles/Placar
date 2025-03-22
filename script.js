async function fetchRankingData() {
    const response = await fetch('rankingData.json');
    return await response.json();
}

function renderRanking(data, startIndex) {
    const rankingBody = document.getElementById("rankingBody");
    rankingBody.innerHTML = ""; // Limpa o ranking atual

    const endIndex = Math.min(startIndex + 10, data.length);
    const currentData = data.slice(startIndex, endIndex);

    currentData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.classList.add("table-row", "slide-in");
        row.innerHTML = `
            <td class="position">${entry.pos}º</td>
            <td class="text-center">${entry.carro}</td>
            <td><div class="row-container">${entry.equipe} <span class="text-gray-400 text-xs">${entry.local}</span></div></td>
            <td class="text-center voltas">${entry.voltas}</td>
        `;

        // Adiciona a animação com atraso para cada linha
        setTimeout(() => {
            row.classList.add("fade-in");
            rankingBody.appendChild(row);
        }, index * 300); // Atraso de 300ms entre cada linha
    });
}

function clearRankingWithAnimation(callback) {
    const rows = document.querySelectorAll("#rankingBody .table-row");
    const rankingBody = document.getElementById("rankingBody");

    if (rows.length === 0) {
        // Se não houver linhas, chama o callback imediatamente
        callback();
        return;
    }

    Array.from(rows).reverse().forEach((row, index) => {
        // Adiciona a classe de saída com atraso
        setTimeout(() => {
            row.classList.add("slide-out");
        }, index * 100); // Atraso de 100ms entre cada linha
    });

    // Aguarda o término da animação antes de limpar e chamar o callback
    setTimeout(() => {
        rankingBody.innerHTML = ""; // Limpa o ranking
        callback(); // Chama o callback para renderizar o próximo grupo
    }, rows.length * 100 + 300); // Tempo total da animação
}

async function startRankingLoop() {
    const data = await fetchRankingData();
    let startIndex = 0;

    // Exibe o primeiro grupo imediatamente
    renderRanking(data, startIndex);

    // Inicia o loop para exibir os próximos grupos após 10 segundos
    setInterval(() => {
        clearRankingWithAnimation(() => {
            startIndex = (startIndex + 10) % data.length; // Avança 10 posições, reinicia no final
            renderRanking(data, startIndex); // Exibe o próximo grupo
        });
    }, 10000); // Troca a cada 10 segundos
}

document.addEventListener("DOMContentLoaded", startRankingLoop);