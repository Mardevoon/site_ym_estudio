//Inclusão do cabeçalho e rotapé
function includeHTML(elementId, file) { // Inserir header e footer

    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar ' + file, error));
}
includeHTML("header", "/html/header.html");
includeHTML("footer", "/html/footer.html");


//Página home
document.addEventListener("DOMContentLoaded", function () { //Função da sessão Simplificando sua experiência no seu projeto.
    const accordionData = [
        {
            title: "Atendimento exclusivo e próximo",
            content: "Cada cliente é tratado de forma única. Você será ouvido, compreendido e acompanhado em todas as fases do projeto.",
            image: "/assets/pag_hm/se_01.png"
        },
        {
            title: "Personalização",
            content: "Não criamos projetos prontos. Cada ideia é moldada de acordo com suas necessidades, garantindo que o resultado final seja verdadeiramente seu.",
            image: "/assets/pag_hm/se_02.png"
        },
        {
            title: "Qualidade técnica",
            content: "Nosso compromisso com a qualidade é inegociável. Desde o planejamento até a execução, cada detalhe é pensado e executado com cuidado e precisão.",
            image: "/assets/pag_hm/se_03.png"
        },
        {
            title: "Tecnologia e inovação",
            content: "Utilizamos modelagem 3D e renderizações realistas, para que você possa visualizar o seu projeto como nunca antes.",
            image: "/assets/pag_hm/se_04.png"
        },
        {
            title: "Acompanhamento contínuo",
            content: "Acompanhar a obra é uma das etapas mais importantes. Garantimos que tudo saia conforme o planejado, com total transparência e comprometimento. Opcional!",
            image: "/assets/pag_hm/se_05.png"
        }
    ];

    const accordionContainer = document.getElementById("accordionFlush");
    const imageDisplay = document.getElementById("image-display");

    accordionData.forEach((item, index) => {
        const isActive = index === 0 ? "show" : "";
        const btnClass = index === 0 ? "" : "collapsed";
        const ariaExpanded = index === 0 ? "true" : "false";

        // Criando o item do accordion
        const accordionItem = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading${index}">
                    <button class="accordion-button ${btnClass}" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#flush-collapse${index}" aria-expanded="${ariaExpanded}" 
                        aria-controls="flush-collapse${index}" onclick="updateImage('${item.image}')">
                        ${item.title}
                    </button>
                </h2>
                <div id="flush-collapse${index}" class="accordion-collapse collapse ${isActive}" 
                    aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlush">
                    <div class="accordion-body">${item.content}</div>
                </div>
            </div>
        `;
        accordionContainer.innerHTML += accordionItem;
    });

    // Função para atualizar a imagem
    window.updateImage = function (imageSrc) {
        imageDisplay.style.opacity = 0;
        setTimeout(() => {
            imageDisplay.src = imageSrc;
            imageDisplay.style.opacity = 1;
        }, 300);
    };

    // Carregar a primeira imagem automaticamente
    updateImage(accordionData[0].image);
});


//Página Projetos
const imagens = [
    "/assets/pag_pj/img/1.jpg",
    "/assets/pag_pj/img/2.jpg",
    "/assets/pag_pj/img/3.jpg",
    "/assets/pag_pj/img/4.jpg",
    "/assets/pag_pj/img/5.jpg",
    "/assets/pag_pj/img/6.jpg",
    "/assets/pag_pj/img/7.jpg",
    "/assets/pag_pj/img/8.jpg",
    "/assets/pag_pj/img/9.jpg",
    "/assets/pag_pj/img/10.jpg",
    "/assets/pag_pj/img/11.jpg",
    "/assets/pag_pj/img/12.jpg",
    "/assets/pag_pj/img/13.jpg",
    "/assets/pag_pj/img/14.jpg",
    "/assets/pag_pj/img/15.jpg",
    "/assets/pag_pj/img/16.jpg",
    "/assets/pag_pj/img/17.jpg",
    "/assets/pag_pj/img/18.jpg",
    "/assets/pag_pj/img/19.jpg",
    "/assets/pag_pj/img/20.jpg",
    "/assets/pag_pj/img/21.jpg",
    "/assets/pag_pj/img/22.jpg",
    "/assets/pag_pj/img/23.jpg",
    "/assets/pag_pj/img/24.jpg",
    "/assets/pag_pj/img/25.jpg",
    "/assets/pag_pj/img/26.jpg",
    "/assets/pag_pj/img/27.jpg",
    "/assets/pag_pj/img/28.jpg",
    "/assets/pag_pj/img/29.jpg",
    "/assets/pag_pj/img/30.jpg",
    "/assets/pag_pj/img/31.jpg",
    "/assets/pag_pj/img/32.jpg",
    "/assets/pag_pj/img/33.jpg",
    "/assets/pag_pj/img/34.jpg",
    "/assets/pag_pj/img/35.jpg",
    "/assets/pag_pj/img/36.jpg",
    "/assets/pag_pj/img/37.jpg",
    "/assets/pag_pj/img/38.jpg",
    "/assets/pag_pj/img/39.jpg",
    "/assets/pag_pj/img/40.jpg",
    "/assets/pag_pj/img/41.jpg",
    "/assets/pag_pj/img/42.jpg",
    "/assets/pag_pj/img/43.jpg",
    "/assets/pag_pj/img/44.jpg",
    "/assets/pag_pj/img/45.jpg",
    "/assets/pag_pj/img/46.jpg",
    "/assets/pag_pj/img/47.jpg",
    "/assets/pag_pj/img/48.jpg",
    "/assets/pag_pj/img/49.jpg",
    "/assets/pag_pj/img/50.jpg",
    "/assets/pag_pj/img/51.jpg",
    "/assets/pag_pj/img/52.jpg",
    "/assets/pag_pj/img/53.jpg",
    "/assets/pag_pj/img/54.jpg",
    "/assets/pag_pj/img/55.jpg",
    "/assets/pag_pj/img/56.jpg",
    "/assets/pag_pj/img/57.jpg",
    "/assets/pag_pj/img/58.jpg",
    "/assets/pag_pj/img/59.jpg",
    "/assets/pag_pj/img/60.jpg",
    "/assets/pag_pj/img/61.jpg",
    "/assets/pag_pj/img/62.jpg",
    "/assets/pag_pj/img/63.jpg",
    "/assets/pag_pj/img/64.jpg",
    "/assets/pag_pj/img/65.jpg",
    "/assets/pag_pj/img/66.jpg",
    "/assets/pag_pj/img/67.jpg",
    "/assets/pag_pj/img/68.jpg",
    "/assets/pag_pj/img/69.jpg",
    "/assets/pag_pj/img/70.jpg",
    "/assets/pag_pj/img/71.jpg",
    "/assets/pag_pj/img/72.jpg",
    "/assets/pag_pj/img/73.jpg",
    "/assets/pag_pj/img/74.jpg",
    "/assets/pag_pj/img/75.jpg",
    "/assets/pag_pj/img/76.jpg",
    "/assets/pag_pj/img/78.jpg",
    "/assets/pag_pj/img/79.jpg",
    "/assets/pag_pj/img/80.jpg",
    "/assets/pag_pj/img/81.jpg",
    "/assets/pag_pj/img/82.jpg",
    "/assets/pag_pj/img/83.jpg",
    "/assets/pag_pj/img/84.jpg",
    "/assets/pag_pj/img/85.jpg",
    "/assets/pag_pj/img/86.jpg",
    "/assets/pag_pj/img/87.jpg",
    "/assets/pag_pj/img/88.jpg",
    "/assets/pag_pj/img/89.jpg",
    "/assets/pag_pj/img/90.jpg",
    "/assets/pag_pj/img/91.jpg",
    "/assets/pag_pj/img/92.jpg",
    "/assets/pag_pj/img/93.jpg",
    "/assets/pag_pj/img/94.jpg",
    "/assets/pag_pj/img/95.jpg",
    "/assets/pag_pj/img/96.jpg",
    "/assets/pag_pj/img/97.jpg",
    "/assets/pag_pj/img/98.jpg",
    "/assets/pag_pj/img/99.jpg",
    "/assets/pag_pj/img/100.jpg",
    "/assets/pag_pj/img/101.jpg",
    "/assets/pag_pj/img/102.jpg",
    "/assets/pag_pj/img/103.jpg",
    "/assets/pag_pj/img/104.jpg",
    "/assets/pag_pj/img/105.jpg",
    "/assets/pag_pj/img/106.jpg",
    "/assets/pag_pj/img/107.jpg",
    "/assets/pag_pj/img/108.jpg",
    "/assets/pag_pj/img/109.jpg",
    "/assets/pag_pj/img/110.jpg",
    "/assets/pag_pj/img/111.jpg",
    "/assets/pag_pj/img/112.jpg"
];

  // Container onde as imagens serão inseridas
  const container = document.getElementById("projetos-container");
  // Função para criar os elementos dinamicamente
  function carregarImagens() {
    imagens.forEach((src, index) => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-sm-6";
  
      const thumbnail = document.createElement("div");
      thumbnail.className = "thumbnail";
  
      const imgContainer = document.createElement("div");
      imgContainer.className = "img-container";
  
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Projeto ${index + 1}`;
      img.className = "image rounded-4";
      img.addEventListener("click", () => openLightbox(index));
  
      // Montando a estrutura
      imgContainer.appendChild(img);
      thumbnail.appendChild(imgContainer);
      col.appendChild(thumbnail);
      container.appendChild(col);
    });
  }
  // Lightbox funcionalidade
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  let currentIndex = 0;
  // Função para abrir o lightbox
  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = imagens[currentIndex];
    lightbox.style.display = "flex";
  }
  // Função para fechar o lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  // Mudar imagem no lightbox
  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= imagens.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = imagens.length - 1;
    lightboxImg.src = imagens[currentIndex];
  }
  // Fecha o modal ao clicar fora da imagem
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
  // Carrega as imagens dinamicamente
  carregarImagens();
  