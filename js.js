// ----- Alerts e Prompt -----
document.getElementById("btnAlert1").addEventListener("click", function () {
    alert("Este é um alerta simples. Use alerts para mensagens rápidas.");
});

document.getElementById("btnAlert2").addEventListener("click", function () {
    // Com template strings
    const time = new Date().toLocaleTimeString();
    alert(`Alerta 2 — horário atual: ${time}`);
});

document.getElementById("btnPrompt").addEventListener("click", function () {
    // Coletar dados simples com prompt
    const name = prompt("Qual é o seu nome?");
    if (name === null || name.trim() === "") {
        alert("Você não informou o nome.");
    } else {
        alert(`Olá, ${name.trim()}! Bem-vindo ao projeto.`);
    }
});

// ----- Contador -----
let count = 0;
const counterEl = document.getElementById("counter");

function renderCounter() {
    // Atualiza o DOM com o valor atual (manipulação do DOM e template)
    counterEl.textContent = count;
}

document.getElementById("incBtn").addEventListener("click", function () {
    count += 1; // incremento
    renderCounter();
});

document.getElementById("decBtn").addEventListener("click", function () {
    count -= 1; // decremento
    renderCounter();
});

document.getElementById("resetBtn").addEventListener("click", function () {
    count = 0; // reset
    renderCounter();
});

// ----- Formulário com validação -----
const form = document.getElementById("sampleForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const email = document.getElementById("inputEmail").value.trim();
    const ageValue = document.getElementById("inputAge").value.trim();
    const age = ageValue === "" ? null : Number(ageValue);

    if (!email) {
        formMessage.textContent = "Por favor, preencha o email.";
        return;
    }

    if (!age || isNaN(age) || age <= 0) {
        formMessage.textContent = "Informe uma idade válida (maior que 0).";
        return;
    }

    formMessage.textContent = "";
    alert(`Dados válidos! Email: ${email}, Idade: ${age}`);
    form.reset();
});

// ----- Caixa que muda de cor ao clicar e hover -----
const colorBox = document.getElementById("colorBox");
const colors = ["#fee2e2", "#e0f2fe", "#ecfdf5", "#fff7ed", "#ede9fe"];
let colorIndex = 0;

function toggleColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    colorBox.style.background = colors[colorIndex];
    colorBox.textContent = `Cor atual: ${colors[colorIndex]}`;
}

colorBox.addEventListener("click", toggleColor);

// Hover: muda a borda para destacar (event listeners mouseover/mouseout)
colorBox.addEventListener("mouseover", function () {
    colorBox.style.borderColor = "rgba(13,110,253,0.6)";
});
colorBox.addEventListener("mouseout", function () {
    colorBox.style.borderColor = "#d1d5db";
});

// ----- Lista dinâmica (adicionar / remover) -----
let items = ["Aprender HTML", "Praticar CSS", "Estudar JavaScript"];
const itemsList = document.getElementById("itemsList");

// Função que renderiza a lista no DOM usando loop (for)
function renderList() {
    // Limpa lista atual
    itemsList.innerHTML = "";

    // Loop para criar elementos <li>
    for (let i = 0; i < items.length; i++) {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center";
        li.textContent = items[i];

        // Botão remover
        const removeBtn = document.createElement("button");
        removeBtn.className = "btn btn-sm btn-outline-danger";
        removeBtn.textContent = "X";
        removeBtn.addEventListener(
            "click",
            (function (index) {
                return function () {
                    // Remove item por índice (exemplo de closure)
                    items.splice(index, 1);
                    renderList();
                };
            })(i)
        );

        li.appendChild(removeBtn);
        itemsList.appendChild(li);
    }
}

// Eventos para adicionar item
document.getElementById("addItemBtn").addEventListener("click", function () {
    const value = document.getElementById("newItemInput").value.trim();
    if (value === "") {
        alert("Digite um item antes de adicionar.");
        return;
    }
    items.push(value);
    document.getElementById("newItemInput").value = "";
    renderList();
});

document.getElementById("addPromptBtn").addEventListener("click", function () {
    const value = prompt("Digite o novo item:");
    if (value === null) return;
    const trimmed = value.trim();
    if (trimmed === "") {
        alert("Valor vazio não será adicionado.");
        return;
    }
    items.push(trimmed);
    renderList();
});

renderCounter();
renderList();
