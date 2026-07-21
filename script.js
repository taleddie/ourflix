const categories = [
  {
    title: "Filmes que assistimos juntos",
    items: [
      { id:"aj1", title:"Cinema Paradiso", g:"g1", cat:"Drama", who:"escolha nossa", synopsis:"Um garoto que cresce apaixonado por cinema, guiado por um projecionista que vira quase um pai.", why:"Foi o primeiro filme que vimos juntos, numa noite de chuva.", message:"Toda vez que reencontro esse filme, reencontro aquela noite com você." },
      { id:"aj2", title:"Modo Avião", g:"g2", cat:"Comédia romântica", who:"escolha nossa", synopsis:"Dois estranhos presos num aeroporto durante uma tempestade descobrem que talvez não seja tão ruim assim.", why:"Rimos tanto que os vizinhos bateram na parede.", message:"Ainda ouço sua risada quando penso nessa cena do aeroporto." },
      { id:"aj3", title:"Maré Alta", g:"g3", cat:"Drama", who:"escolha nossa", synopsis:"Uma família reconstrói os laços durante um verão inteiro à beira-mar.", why:"Assistimos na época em que planejávamos nossa viagem para o litoral.", message:"Um dia a gente vive esse verão de verdade." }
    ]
  },
  {
    title: "Filmes que me lembram você",
    items: [
      { id:"mv1", title:"Um Dia Qualquer", g:"g4", cat:"Drama romântico", who:"recomendado por mim", synopsis:"A vida inteira de um casal contada em um único dia, repetido ao longo dos anos.", why:"A trilha sonora tem aquela música que você sempre cantarola.", message:"Cada 'um dia qualquer' com você vale um filme inteiro." },
      { id:"mv2", title:"Girassóis de Julho", g:"g5", cat:"Comédia dramática", who:"recomendado por mim", synopsis:"Uma jovem decide plantar um jardim inteiro de girassóis para provar a si mesma que consegue recomeçar.", why:"Você tem essa mesma teimosia bonita de recomeçar sempre.", message:"Você me lembra sol até nos dias fechados." }
    ]
  },
  {
    title: "Filmes que eu recomendo",
    items: [
      { id:"rc1", title:"O Mapa Perdido", g:"g6", cat:"Aventura", who:"recomendado por mim", synopsis:"Dois amigos seguem um mapa desenhado à mão por um avô que nunca mais viram.", why:"Achei que ia te fazer pensar em viagem — e em nós.", message:"Bora desenhar nosso próprio mapa também?" },
      { id:"rc2", title:"Sala 12", g:"g1", cat:"Suspense leve", who:"recomendado por mim", synopsis:"Um grupo de amigos reencontra segredos antigos numa sessão de cinema à meia-noite.", why:"Sei que você curte um suspense com final surpreendente.", message:"Prometo não estragar o final desta vez." }
    ]
  },
  {
    title: "Filmes que você ama e agora me lembram de você",
    items: [
      { id:"vc1", title:"Valsa de Outono", g:"g2", cat:"Romance", who:"seu favorito", synopsis:"Duas pessoas se reencontram anos depois, no mesmo lugar onde se despediram.", why:"Você já assistiu um monte de vezes e sempre chora no mesmo trecho.", message:"Depois que vi com você, esse filme ficou nosso também." },
      { id:"vc2", title:"Bússola Interna", g:"g3", cat:"Drama", who:"seu favorito", synopsis:"Uma pessoa aprende, aos poucos, a confiar nas próprias escolhas.", why:"Você citou esse filme na primeira vez que me contou seus planos.", message:"Gosto de ouvir seus planos. Sempre." }
    ]
  },
  {
    title: "Filmes que ainda quero assistir com você",
    items: [
      { id:"aq1", title:"A Próxima Sessão", g:"g4", cat:"Drama romântico", who:"nossa lista", synopsis:"Um casal marca de assistir ao mesmo filme todo aniversário, em lugares diferentes do mundo.", why:"Ainda não vimos, mas parece a nossa cara.", message:"Bota na fila — semana que vem é nossa vez." },
      { id:"aq2", title:"Constelações", g:"g5", cat:"Ficção científica", who:"nossa lista", synopsis:"Duas pessoas se encontram em universos paralelos, em versões levemente diferentes da mesma história.", why:"Você mencionou querer ver e eu simplesmente esqueci — de propósito, pra ver com você.", message:"Faz parte da lista de coisas que eu quero fazer com você, de novo e de novo." }
    ]
  }
];

function render(){
  const root = document.getElementById('rows');
  root.innerHTML = categories.map(cat => `
    <div class="row">
      <div class="row-head">
        <h2>${cat.title}</h2>
        <span>${cat.items.length} títulos</span>
      </div>
      <div class="track">
        ${cat.items.map(m => `
          <div class="card" tabindex="0" role="button" aria-label="${m.title}" onclick="openDetail('${m.id}')" onkeydown="if(event.key==='Enter')openDetail('${m.id}')">
            <div class="poster ${m.g}">
              <span class="ptitle">${m.title}</span>
            </div>
            <div class="stub">♥</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

const all = categories.flatMap(c => c.items.map(i => ({...i, catTitle:c.title})));

function openDetail(id){
  let m = all.find(x => x.id === id);
  if(!m){
    m = { id:"cp1", g:"g1", title:"", cat:"Românce", who:"nosso clássico",
      synopsis:"Este site nasceu da vontade de transformar memórias em algo que pudesse ser revisitado sempre que a saudade aparecesse. Cada filme, detalhe, frase e referência foi escolhido para representar um pedaço da nossa história, como se o nosso relacionamento pudesse existir dentro de um catálogo de cinema. A ideia nunca foi criar um presente perfeito, e sim um lugar onde fosse possível lembrar que o nosso amor também merece ser assistido várias vezes, porque algumas histórias nunca cansam, apenas ganham novos significados a cada vez que voltamos para elas.",
      why:"Porque  EU TE AMO!",
      message:"Espero que você aprecie cada detalhe desse site." };
  }
  document.getElementById('sheet-poster').className = 'sheet-poster ' + m.g;
  document.getElementById('sheet-title-mini').textContent = m.title;
  document.getElementById('sheet-title').textContent = m.title;
  document.getElementById('sheet-cat').textContent = m.cat;
  document.getElementById('sheet-who').textContent = m.who;
  document.getElementById('sheet-synopsis').textContent = m.synopsis;
  document.getElementById('sheet-why').textContent = m.why;
  document.getElementById('sheet-message').textContent = m.message;
  const overlay = document.getElementById('overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDetail(){
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeDetail(); });

render();

//header

const bellBtn = document.getElementById('bellBtn');
const notifPanel = document.getElementById('notifPanel');
 
bellBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  notifPanel.classList.toggle('open');
});
 
document.addEventListener('click', (e) => {
  if (!notifPanel.contains(e.target) && e.target !== bellBtn) {
    notifPanel.classList.remove('open');
  }
});
 
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') notifPanel.classList.remove('open');
});

// data

const startDate = new Date("2026-02-21T13:40:00");

function updateRelationshipTime() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    const partes = [];

    if (years > 0) partes.push(`${years}a`);
    if (months > 0) partes.push(`${months}m`);
    if (days > 0) partes.push(`${days}d`);

    partes.push(`${hours}h`);
    partes.push(`${minutes}min`);

    document.getElementById("relationship-time").textContent = partes.join(" ");
}

updateRelationshipTime();
setInterval(updateRelationshipTime, 60000);