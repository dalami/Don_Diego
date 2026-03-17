// ── DATOS PRODUCTOS ──────────────────────────────────────────────────
const productos = {
  bondiola: {
    titulo: "BONDIOLA DESMECHADA",
    precio: "$15.000",
    presentacion: "300gr",
    imagenes: [
      { url: "images/bondiola_coccion.png", label: "Cocción Sous Vide 20hs" },
      {
        url: "images/bondiola_envasada.png",
        label: "Envasado con faja Don Diego",
      },
      {
        url: "images/bondiola_servida.png",
        label: "Textura desmechada perfecta",
      },
    ],
    proceso:
      "Marinado en seco (24h) y cocción lenta a 75°C (20h). El colágeno se funde logrando una carne que se deshace sola.",
    detalle: "Ideal para sandwiches gourmet, tacos o para elevar tus pastas.",
    servicio:
      "Sugerimos servir en pan suave con una ensalada de repollo fresca.",
    regeneracion:
      "Sumergir la bolsa (cerrada) en agua caliente a 85°C por 15-20 minutos.",
  },
  osobuco: {
    titulo: "OSOBUCO PREMIUM AL MALBEC",
    precio: "$15.000",
    presentacion: "Doble Rodaja",
    imagenes: [
      { url: "images/osobuco_coccion.png", label: "Precisión técnica 74°C" },
      { url: "images/osobuco_envasado.png", label: "Presentación al vacío" },
      { url: "images/osobuco_cocido.png", label: "Resultado: Terneza extrema" },
    ],
    proceso:
      "Braseado al vacío durante 24 horas a 74°C. La carne se vuelve increíblemente tierna y untuosa.",
    detalle:
      "Acompañado de una reducción melosa de sus propios jugos y vino tinto.",
    servicio:
      "Perfecto sobre un puré cremoso de papas o un risotto de parmesano.",
    regeneracion:
      "Sumergir la bolsa (cerrada) en agua caliente a 85°C por 20-25 minutos.",
  },
  lentejas: {
    titulo: "LENTEJAS GOURMET",
    precio: "$12.000",
    presentacion: "400gr",
    imagenes: [
      { url: "images/lentejas_coccion.png", label: "Estofado lento artesanal" },
      {
        url: "images/lentejas_envasada.png",
        label: "Pack listo para regenerar",
      },
      { url: "images/lentejas_plato.png", label: "Sugerencia de presentación" },
    ],
    proceso:
      "Cocción tradicional a fuego lento con sofrito de vegetales frescos y un blend de especias seleccionado para resaltar el sabor casero.",
    detalle:
      "Listas para disfrutar solas o como una guarnición nutritiva y reconfortante.",
    servicio: "Quedan increíbles con un toque de aceite de oliva crudo.",
    regeneracion:
      "Sumergir la bolsa (cerrada) en agua caliente a 85°C hasta descongelar.",
  },
  goulash: {
        titulo: "GOULASH GOURMET",
        precio: "$15000",
        presentacion: "400gr",
        imagenes: [
          { url: "images/goulash_coccion.png", label: "Cocción Sous Vide 20hs" },
          { url: "images/goulash_envasado.png", label: "Pack al vacío individual" },
          { url: "images/goulash_plato.png", label: "Resultado: Carne ultra tierna" },
        ],
        proceso: "Dados de ternera premium braseados al vacío durante 20 horas a 74°C con pimentón y una reducción de vegetales.",
        detalle: "Un guiso húngaro clásico con una vuelta de tuerca técnica. Sabores intensos y carne que se deshace.",
        servicio: "Ideal para acompañar con Spätzle (ñoquis húngaros), arroz blanco o un puré rústico.",
        regeneracion: "Sumergir la bolsa (cerrada) en agua caliente a 85°C por 15-20 minutos.",
      },
};

// ── DATOS COLECCIONES ────────────────────────────────────────────────
const colecciones = {
  chutneys: {
    titulo: "CHUTNEYS ARTESANALES",
    descripcionGeneral:
      "Elaborados a fuego lento con ingredientes frescos y especias seleccionadas. El complemento perfecto para elevar cada plato.",
    emoji: "🫙",
    color: "#8B4513",
    colorSecundario: "#D4872A",
    variedades: [
      //{ id: "chutney-mango",    nombre: "Chutney de Mango & Jengibre",       precio: "$4.500", presentacion: "200g", emoji: "🥭",
      //  descripcion:  "Mango maduro con jengibre fresco, notas cítricas y un toque de ají molido.",
      //  proceso:      "Cocción lenta de 2 horas con mango, jengibre, vinagre de manzana y especias. Equilibrio perfecto entre dulce y picante.",
      //  maridaje:     "Ideal con quesos blandos, carnes frías o como glaze para pollo y cerdo.",
      //  conservacion: "Una vez abierto, conservar en heladera hasta 30 días.", imagen: "images/chutney_mango.png" },
      {
        id: "chutney-ciruela-cebolla",
        nombre: "Chutney de Ciruela & Cebolla Morada",
        precio: "$5000",
        presentacion: "360g",
        emoji: "🍑",
        descripcion:
          "Ciruelas maduras, cebolla morada caramelizada, azúcar mascabo, vinagre de manzana, anís estrella y canela. Equilibrio entre dulzor, acidez y especias.",
        proceso:
          "Maceración de 12 horas para integrar sabores y cocción lenta hasta lograr textura untuosa y concentración natural. Sin conservantes artificiales.",
        maridaje:
          "Ideal para tablas de quesos, carnes asadas, bondiola braseada o como contraste en sándwiches gourmet.",
        conservacion:
          "Producto pasteurizado. Conservar en lugar fresco y seco. Una vez abierto, mantener refrigerado hasta 30 días.",
        imagen: "./Don Diego/images/CiruelaCebolla.png",
      },
      //{ id: "chutney-tomate",   nombre: "Chutney de Tomate & Albahaca",       precio: "$4.000", presentacion: "200g", emoji: "🍅",
      //  descripcion:  "Tomates perita asados con albahaca fresca, ajo y aceto balsámico.",
      //  proceso:      "Tomates horneados para concentrar sabor, luego cocción con hierbas frescas y vinagre. Textura rústica y aromática.",
      //  maridaje:     "Exquisito con pasta, sobre bruschetta o como base de pizza gourmet.",
      // conservacion: "Una vez abierto, conservar en heladera hasta 21 días.", imagen: "images/chutney_tomate.png" },
      //  { id: "chutney-cebolla",  nombre: "Chutney de Cebolla Caramelizada",   precio: "$4.000", presentacion: "200g", emoji: "🧅",
      //    descripcion:  "Cebollas moradas caramelizadas durante horas con vino tinto y tomillo.",
      //    proceso:      "3 horas de cocción a fuego muy bajo con azúcar mascabo y Malbec. La paciencia es el ingrediente principal.",
      //    maridaje:     "El compañero ideal de una hamburguesa gourmet, sandwiches o tabla de quesos.",
      //    conservacion: "Una vez abierto, conservar en heladera hasta 30 días.", imagen: "images/chutney_cebolla.png" },
    ],
  },
  // mermeladas: {
  // titulo: "MERMELADAS ARTESANALES",
  //  descripcionGeneral: "Pequeños lotes, fruta real, sin conservantes. Cada frasco es un trabajo de amor y paciencia.",
  //  emoji: "🍓",
  //  color: "#9B2335",
  // colorSecundario: "#E8425A",
  // variedades: [
  //  {
  //    id: "mermelada-frutilla", nombre: "Mermelada de Frutilla", precio: "$4.000", presentacion: "220g", emoji: "🍓",
  //    descripcion: "Frutillas frescas de temporada, mínimo azúcar, máximo sabor natural.",
  //    proceso: "Fruta entera macerada con azúcar 12 horas y cocción rápida para preservar color y vitaminas. Sin pectina artificial.",
  //    maridaje: "Clásica con tostadas y manteca, pero también increíble con queso brie o yogur natural.",
  //    conservacion: "Una vez abierto, conservar en heladera hasta 3 semanas.", imagen: "images/mermelada_frutilla.png"
  //  },
  //  {
  //    id: "mermelada-durazno", nombre: "Mermelada de Durazno & Vainilla", precio: "$4.000", presentacion: "220g", emoji: "🍑",
  //    descripcion: "Duraznos maduros con semillas reales de vainilla Bourbon. Suave y aromática.",
  //    proceso: "Duraznos pelados y macerados con vainilla fresca. Cocción en dos etapas para lograr trozos enteros en almíbar perfumado.",
  //    maridaje: "Sobre pancakes, cheesecake o como relleno de medialunas caseras.",
  //    conservacion: "Una vez abierto, conservar en heladera hasta 3 semanas.", imagen: "images/mermelada_durazno.png"
  //  },
  //  {
  //    id: "mermelada-higo", nombre: "Mermelada de Higo & Nuez", precio: "$4.500", presentacion: "220g", emoji: "🫐",
  //    descripcion: "Higos negros con nueces tostadas y un toque de ron añejo. Sofisticada y compleja.",
  //   proceso: "Higos frescos reducidos lentamente con miel de caña, nueces tostadas y un splash de ron oscuro.",
  //    maridaje: "La pareja ideal del queso azul, camembert o en una tabla gourmet completa.",
  //    conservacion: "Una vez abierto, conservar en heladera hasta 3 semanas.", imagen: "images/mermelada_higo.png"
  //  },
  //  {
  //    id: "mermelada-citrica", nombre: "Mermelada Cítrica (Naranja & Pomelo)", precio: "$4.000", presentacion: "220g", emoji: "🍊",
  //    descripcion: "Blend de naranja y pomelo rosa con zestes confitados. Intensa, amarga y elegante.",
  //    proceso: "Cítricos de estación con cocción larga para suavizar los zestes. Sabor vibrante y levemente amargo.",
  //    maridaje: "Perfecta en scones ingleses, con panceta o como glaze para pato y pollo.",
  //    conservacion: "Una vez abierto, conservar en heladera hasta 4 semanas.", imagen: "images/mermelada_citrica.png"
  //  },
  //  ],
  // },
};

// ── MODAL: PRODUCTO SOUS VIDE ────────────────────────────────────────
function openModal(id) {
  const p = productos[id];
  const body = document.getElementById("modal-body");

  const slidesHTML = p.imagenes
    .map(
      (img) => `
        <div class="foto-slide" role="img" aria-label="${img.label}">
          <img src="${img.url}" alt="${img.label}" loading="lazy"
               onerror="this.src='https://placehold.co/400x225/f0e6d3/8B4513?text=Don+Diego'">
          <div class="foto-label">${img.label}</div>
        </div>
      `,
    )
    .join("");

  const dotsHTML = p.imagenes
    .map(
      (_, i) => `
        <button class="carrusel-dot ${i === 0 ? "active" : ""}" onclick="goToSlide(${i})" aria-label="Ver imagen ${i + 1}"></button>
      `,
    )
    .join("");

  body.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid var(--naranja-fuego);padding-bottom:5px;margin-bottom:16px;">
          <h2 id="modal-title" style="font-family:'Oswald';color:var(--bordo);margin:0;font-size:1.8rem;">${p.titulo}</h2>
          <span style="font-family:'Oswald';font-size:1.6rem;color:var(--negro-carbon);font-weight:bold;">${p.precio}</span>
        </div>

        <div class="carrusel-detalle">
          <button class="carrusel-arrow carrusel-prev" onclick="changeSlide(-1)" aria-label="Imagen anterior">&#8249;</button>
          <div class="carrusel-track" id="carrusel-track">${slidesHTML}</div>
          <button class="carrusel-arrow carrusel-next" onclick="changeSlide(1)" aria-label="Imagen siguiente">&#8250;</button>
        </div>
        <div class="carrusel-dots" id="carrusel-dots">${dotsHTML}</div>

        <p style="font-size:0.9rem;font-weight:bold;color:var(--naranja-fuego);margin-bottom:16px;text-transform:uppercase;">📦 ${p.presentacion}</p>

        <div class="info-row">
          <strong>El Proceso</strong>
          <p>${p.proceso}</p>
        </div>
        <div class="info-row">
          <strong>Recomendación</strong>
          <p>${p.detalle} ${p.servicio}</p>
        </div>
        <div class="info-highlight">
          <strong>⚡ Del Freezer a la Mesa</strong>
          <p>${p.regeneracion}</p>
        </div>

        <a href="https://wa.me/542254414211?text=Hola!%20Quiero%20pedir%20${encodeURIComponent(p.titulo)}"
           target="_blank" rel="noopener noreferrer" class="wa-btn">RESERVAR POR WHATSAPP</a>
      `;

  currentSlide = 0;
  showModal();
}

// ── MODAL: COLECCIÓN ─────────────────────────────────────────────────
function openColeccion(tipo) {
  const col = colecciones[tipo];
  const body = document.getElementById("modal-body");

  const variedadesHTML = col.variedades
    .map(
      (v) => `
        <button class="variedad-card" onclick="openVariedad('${tipo}','${v.id}')"
                style="--col-color:${col.color};--col-secondary:${col.colorSecundario};">
          <span class="variedad-emoji">${v.emoji}</span>
          <div class="variedad-info">
            <strong>${v.nombre}</strong>
            <span class="variedad-precio">${v.precio} · ${v.presentacion}</span>
          </div>
          <span class="variedad-arrow">→</span>
        </button>
      `,
    )
    .join("");

  body.innerHTML = `
        <div style="border-bottom:2px solid ${col.colorSecundario};padding-bottom:12px;margin-bottom:20px;">
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:2.2rem;">${col.emoji}</span>
            <h2 id="modal-title" style="font-family:'Oswald';color:${col.color};margin:0;font-size:1.8rem;letter-spacing:2px;">${col.titulo}</h2>
          </div>
          <p style="color:#666;font-size:0.9rem;margin:10px 0 0;line-height:1.6;">${col.descripcionGeneral}</p>
        </div>

        <p style="font-size:0.75rem;letter-spacing:1px;color:#999;text-transform:uppercase;margin-bottom:12px;">ELEGÍ TU VARIEDAD</p>

        <div class="variedades-lista">${variedadesHTML}</div>

        <a href="https://wa.me/542254414211?text=Hola!%20Quiero%20consultar%20por%20${encodeURIComponent(col.titulo)}"
           target="_blank" rel="noopener noreferrer" class="wa-btn">CONSULTAR POR WHATSAPP</a>
      `;

  showModal();
}

// ── MODAL: VARIEDAD ESPECÍFICA ───────────────────────────────────────
function openVariedad(tipo, variedadId) {
  const col = colecciones[tipo];
  const v = col.variedades.find((x) => x.id === variedadId);
  const body = document.getElementById("modal-body");

  body.innerHTML = `
        <button class="btn-volver" onclick="openColeccion('${tipo}')" style="--col-color:${col.color};">
          ← Volver a ${col.titulo}
        </button>

        <div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid ${col.colorSecundario};padding-bottom:8px;margin-bottom:16px;">
          <h2 id="modal-title" style="font-family:'Oswald';color:${col.color};margin:0;font-size:1.5rem;display:flex;align-items:center;gap:8px;">
            <span>${v.emoji}</span> ${v.nombre}
          </h2>
          <span style="font-family:'Oswald';font-size:1.5rem;color:var(--negro-carbon);font-weight:bold;white-space:nowrap;margin-left:10px;">${v.precio}</span>
        </div>

        <div style="background:linear-gradient(135deg,${col.color}18,${col.colorSecundario}28);border-radius:10px;padding:32px;text-align:center;margin-bottom:16px;">
          <img src="${v.imagen}" alt="${v.nombre}" loading="lazy"
               onerror="this.parentElement.innerHTML='<span style=\\'font-size:5rem;\\'>${v.emoji}</span>'"
               style="max-width:100%;border-radius:8px;max-height:180px;object-fit:cover;">
        </div>

        <p style="font-size:0.85rem;font-weight:bold;color:${col.colorSecundario};margin-bottom:16px;text-transform:uppercase;">📦 Presentación: ${v.presentacion}</p>

        <div class="info-row" style="background:#fafafa;padding:14px;border-radius:8px;border-left:3px solid ${col.colorSecundario};">
          <strong style="color:#888;">Descripción</strong>
          <p>${v.descripcion}</p>
        </div>
        <div class="info-row" style="margin-top:14px;">
          <strong>El Proceso</strong>
          <p>${v.proceso}</p>
        </div>
        <div class="info-row">
          <strong>Maridaje & Uso</strong>
          <p>${v.maridaje}</p>
        </div>
        <div class="info-highlight">
          <strong>🫙 Conservación</strong>
          <p>${v.conservacion}</p>
        </div>

        <a href="https://wa.me/542254414211?text=Hola!%20Quiero%20pedir%20${encodeURIComponent(v.nombre)}"
           target="_blank" rel="noopener noreferrer" class="wa-btn">PEDIR POR WHATSAPP</a>
      `;

  document.querySelector(".modal-content").scrollTop = 0;
}

// ── HELPERS MODAL ────────────────────────────────────────────────────
function showModal() {
  const modal = document.getElementById("modal-container");
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  setTimeout(() => modal.querySelector(".close-btn").focus(), 50);
}

function closeModal() {
  document.getElementById("modal-container").style.display = "none";
  document.body.style.overflow = "auto";
}

window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("modal-container")) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    document.getElementById("modal-container").style.display === "block"
  )
    closeModal();
});

// ── CARRUSEL ─────────────────────────────────────────────────────────
let currentSlide = 0;

function updateCarrusel() {
  const track = document.getElementById("carrusel-track");
  if (!track) return;
  const total = track.children.length;
  track.style.animation = "none";
  track.style.transform = `translateX(-${(currentSlide * 100) / total}%)`;
  document
    .querySelectorAll(".carrusel-dot")
    .forEach((d, i) => d.classList.toggle("active", i === currentSlide));
}

function changeSlide(dir) {
  const track = document.getElementById("carrusel-track");
  if (!track) return;
  currentSlide =
    (currentSlide + dir + track.children.length) % track.children.length;
  updateCarrusel();
}

function goToSlide(i) {
  currentSlide = i;
  updateCarrusel();
}

// ── WA FLOTANTE OCULTO EN FOOTER ────────────────────────────────────
const waFloat = document.getElementById("whatsapp-float");
const footer = document.getElementById("main-footer");
new IntersectionObserver(
  ([e]) => waFloat.classList.toggle("wa-hidden", e.isIntersecting),
  { threshold: 0.1 },
).observe(footer);

// --- CONTADOR DE VISITAS PRIVADO ---
const cuentaVisitas = async () => {
    const namespace = "dondiego-pinamar"; // Un nombre único para tu web
    const key = "home"; // La clave de la página
    
    try {
        // Esta API suma 1 cada vez que alguien entra
        const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
        const data = await response.json();
        const totalVisitas = data.value;

        // ESCUCHA SECRETA: Si presionás la tecla "v", te muestra el número
        window.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'v') {
                alert(`Don Diego - Total de visitas acumuladas: ${totalVisitas}`);
            }
        });
    } catch (error) {
        console.log("Error al contar visitas");
    }
};

// Ejecutar al cargar la página
cuentaVisitas();