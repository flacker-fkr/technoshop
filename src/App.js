import React, { useState } from 'react';

// 1. BASE DE DATOS OPTIMIZADA CON IMÁGENES DE ALTA CALIDAD DE HARDWARE REAL
const inventarioCompleto = [
  { 
    id: 1, 
    nombre: "Laptop Gamer Asus ROG Strix SCAR 16", 
    precio: 28999, 
    marca: "Asus", 
    categoria: "Gamer", 
    tag: "Oferta Relámpago", 
    espec: "Intel i9, 16GB RAM, RTX 4060, SSD 1TB", 
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 2, 
    nombre: "Laptop HP Victus 16 Gaming AMD", 
    precio: 16499, 
    marca: "HP", 
    categoria: "Gamer", 
    tag: "Hot Sale -25%", 
    espec: "Ryzen 5, 8GB RAM, RTX 3050, 512GB SSD", 
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 3, 
    nombre: "MacBook Air M3 Ultra Slim Apple", 
    precio: 21199, 
    marca: "Apple", 
    categoria: "Oficina", 
    tag: "Cupón: TECHNO", 
    espec: "Chip M3, 8-core CPU, 256GB SSD, Color Medianoche", 
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 4, 
    nombre: "Laptop Lenovo IdeaPad Slim 3", 
    precio: 11200, 
    marca: "Lenovo", 
    categoria: "Oficina", 
    tag: "Liquidación", 
    espec: "AMD Ryzen 5, 8GB RAM, 512GB SSD", 
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 5, 
    nombre: "Monitor Gamer MSI Optix 27\"", 
    precio: 5499, 
    marca: "MSI", 
    categoria: "Gamer", 
    tag: "15% OFF Directo", 
    espec: "165Hz, 1ms, Curvo, Panel VA, FullHD", 
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 6, 
    nombre: "Teclado Mecánico Corsair K70 RGB", 
    precio: 2899, 
    marca: "Corsair", 
    categoria: "Gamer", 
    tag: "Oferta Express", 
    espec: "Switches Cherry MX Red, Aluminio Anodizado", 
    img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 7, 
    nombre: "PC Escritorio Corsair Cyber Beast", 
    precio: 34500, 
    marca: "Corsair", 
    categoria: "Novedad", 
    tag: "Nuevo Ingreso", 
    espec: "Ryzen 7, 32GB RAM, RTX 4070, Enfriamiento Líquido", 
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 8, 
    nombre: "PC Alienware Aurora R16 Neón", 
    precio: 45999, 
    marca: "Alienware", 
    categoria: "Novedad", 
    tag: "Exclusivo En Línea", 
    espec: "Intel i9 14th Gen, 64GB RAM, RTX 4080, SSD 2TB", 
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 9, 
    nombre: "Audífonos Asus ROG Theta 7.1", 
    precio: 6200, 
    marca: "Asus", 
    categoria: "Novedad", 
    tag: "Top Novedad", 
    espec: "Sonido Envolvente Real, Micrófono con IA", 
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 10, 
    nombre: "Mouse Gamer Razer DeathAdder V3", 
    precio: 1899, 
    marca: "Razer", 
    categoria: "Gamer", 
    tag: "Más Vendido", 
    espec: "63g Ultra-ligero, Sensor óptico 30K DPI", 
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80" 
  }
];

function App() {
  const [carrito, setCarrito] = useState([]);
  const [seccionActual, setSeccionActual] = useState("Todos");
  const [marcaFiltro, setMarcaFiltro] = useState("Todas");
  const [precioMax, setPrecioMax] = useState(50000);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const agregarAlCarrito = (item) => setCarrito([...carrito, item]);
  const vaciarCarrito = () => setCarrito([]);
  const totalPrecio = carrito.reduce((sum, item) => sum + item.precio, 0);

  const productosFiltrados = inventarioCompleto.filter(prod => {
    const cumpleSeccion = seccionActual === "Todos" || 
                         (seccionActual === "Ofertas" && (prod.tag.includes("Oferta") || prod.tag.includes("Sale") || prod.tag.includes("OFF"))) || 
                         (seccionActual === "Novedades" && prod.categoria === "Novedad");
    const cumpleMarca = marcaFiltro === "Todas" || prod.marca === marcaFiltro;
    const cumplePrecio = prod.precio <= precioMax;
    return cumpleSeccion && cumpleMarca && cumplePrecio;
  });

  return (
    <div style={{ backgroundColor: '#070712', color: '#fff', fontFamily: 'sans-serif', minHeight: '100vh', margin: 0, paddingBottom: '60px' }}>
      
      {/* NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', borderBottom: '2px solid #ff007f', backgroundColor: '#0e0e22', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(255,0,127,0.3)' }}>
        <div onClick={() => setSeccionActual("Todos")} style={{ color: '#ff007f', textShadow: '0 0 10px #ff007f', fontWeight: 'bold', fontSize: '24px', cursor: 'pointer' }}>👾 TECHNO SHOP</div>
        
        <div style={{ display: 'flex', gap: '25px', fontSize: '15px', fontWeight: 'bold' }}>
          <span onClick={() => { setSeccionActual("Todos"); setMenuAbierto(false); }} style={{ cursor: 'pointer', color: seccionActual === "Todos" ? '#00f0ff' : '#fff' }}>Inicio</span>
          <span onClick={() => { setSeccionActual("Ofertas"); setMenuAbierto(false); }} style={{ cursor: 'pointer', color: seccionActual === "Ofertas" ? '#ff007f' : '#fff' }}>🔥 Venta Flash</span>
          <span onClick={() => { setSeccionActual("Novedades"); setMenuAbierto(false); }} style={{ cursor: 'pointer', color: seccionActual === "Novedades" ? '#00f0ff' : '#fff' }}>✨ Novedades</span>
        </div>

        <button onClick={() => setMenuAbierto(!menuAbierto)} style={{ background: 'none', border: 'none', color: '#00f0ff', fontSize: '26px', cursor: 'pointer' }}>☰</button>
      </nav>

      {/* Menú Desplegable Móvil */}
      {menuAbierto && (
        <div style={{ backgroundColor: '#0e0e22', borderBottom: '2px solid #00f0ff', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'center', fontWeight: 'bold' }}>
          <span onClick={() => { setSeccionActual("Todos"); setMenuAbierto(false); }} style={{ color: '#fff', cursor: 'pointer' }}>Inicio</span>
          <span onClick={() => { setSeccionActual("Ofertas"); setMenuAbierto(false); }} style={{ color: '#ff007f', cursor: 'pointer' }}>🔥 Venta Flash</span>
          <span onClick={() => { setSeccionActual("Novedades"); setMenuAbierto(false); }} style={{ color: '#00f0ff', cursor: 'pointer' }}>✨ Novedades</span>
        </div>
      )}

      {/* HERO SECTION */}
      {seccionActual === "Todos" && (
        <div style={{ margin: '20px', padding: '50px 20px', borderRadius: '15px', background: 'linear-gradient(135deg, #1f0033 0%, #000933 100%)', border: '2px solid #ff007f', boxShadow: '0 0 20px rgba(255, 0, 127, 0.4)', textAlign: 'center' }}>
          <h2 style={{ color: '#ff007f', textShadow: '0 0 15px #ff007f', fontSize: '2.5rem', margin: '0 0 10px 0' }}>💥 VENTA TECHNO FLASH 2026 💥</h2>
          <p style={{ color: '#00f0ff', fontSize: '18px', margin: '0 0 25px 0', textShadow: '0 0 5px #00f0ff' }}>Hardware premium y periféricos de alta gama en stock.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <button onClick={() => setSeccionActual("Ofertas")} style={{ backgroundColor: '#ff007f', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 0 10px #ff007f' }}>Ver Ofertas</button>
            <button onClick={() => setSeccionActual("Novedades")} style={{ backgroundColor: 'transparent', color: '#00f0ff', border: '1px solid #00f0ff', padding: '12px 30px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>Novedades</button>
          </div>
        </div>
      )}

      {/* FILTROS */}
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <section style={{ backgroundColor: '#0e0e22', padding: '20px', borderRadius: '12px', border: '1px solid #00f0ff', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <label style={{ color: '#00f0ff', fontWeight: 'bold', marginRight: '10px' }}>Filtrar Marca:</label>
            <select value={marcaFiltro} onChange={(e) => setMarcaFiltro(e.target.value)} style={{ backgroundColor: '#161638', color: '#fff', border: '1px solid #ff007f', padding: '10px', borderRadius: '6px', fontWeight: 'bold' }}>
              <option value="Todas">Todas las marcas</option>
              <option value="Asus">Asus</option>
              <option value="Apple">Apple</option>
              <option value="Lenovo">Lenovo</option>
              <option value="HP">HP</option>
              <option value="MSI">MSI</option>
              <option value="Corsair">Corsair</option>
              <option value="Razer">Razer</option>
              <option value="Alienware">Alienware</option>
            </select>
          </div>

          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ color: '#00f0ff', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Presupuesto: <span style={{ color: '#ff007f' }}>${precioMax.toLocaleString()} MXN</span></label>
            <input type="range" min="1000" max="50000" step="500" value={precioMax} onChange={(e) => setPrecioMax(Number(e.target.value))} style={{ width: '100%', accentColor: '#ff007f' }} />
          </div>
        </section>

        {/* CONTENIDO PRINCIPAL */}
        <section>
          <h2 style={{ color: '#00f0ff', textShadow: '0 0 5px #00f0ff', marginBottom: '25px' }}>
            💎 {seccionActual === "Todos" ? "Catálogo" : seccionActual === "Ofertas" ? "🔥 Ofertas" : "✨ Novedades"} ({productosFiltrados.length} Equipos Verificados)
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px' }}>
            {productosFiltrados.map((prod) => (
              <div key={prod.id} style={{ backgroundColor: '#0e0e22', border: '1px solid #ff007f', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 5px 15px rgba(0,0,0,0.6)' }}>
                
                {/* CONTENEDOR DE IMAGEN VERIFICADA DE ALTA RESOLUCIÓN */}
                <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: '#000' }}>
                  <img src={prod.img} alt={prod.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#ff007f', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>
                    {prod.tag}
                  </span>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ color: '#00f0ff', fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold' }}>{prod.marca}</span>
                    <h3 style={{ margin: '5px 0 10px 0', fontSize: '16px', color: '#fff', fontWeight: 'bold' }}>{prod.nombre}</h3>
                    <p style={{ color: '#999', fontSize: '12px', margin: '0 0 15px 0', lineHeight: '1.4' }}>{prod.espec}</p>
                  </div>
                  
                  <div>
                    <p style={{ color: '#ff007f', fontSize: '22px', fontWeight: 'bold', margin: '0 0 15px 0' }}>${prod.precio.toLocaleString('es-MX')} MXN</p>
                    <button onClick={() => agregarAlCarrito(prod)} style={{ backgroundColor: '#ff007f', color: '#fff', border: 'none', width: '100%', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
                      🛍️ Añadir a la Bolsa
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* BOLSA DE COMPRAS */}
        <section style={{ border: '2px solid #00f0ff', padding: '25px', borderRadius: '12px', backgroundColor: '#0e0e22', boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)' }}>
          <h2 style={{ color: '#00f0ff', marginTop: 0, display: 'flex', justifyContent: 'space-between' }}>
            <span>🛍️ Mi Bolsa de Compras</span>
            <span style={{ fontSize: '16px', background: '#00f0ff', color: '#000', padding: '3px 12px', borderRadius: '20px', fontWeight: 'bold' }}>{carrito.length}</span>
          </h2>
          
          {carrito.length === 0 ? (
            <p style={{ color: '#888', fontStyle: 'italic' }}>Tu bolsa está vacía.</p>
          ) : (
            <div>
              <div style={{ maxHeight: '250px', overflowY: 'auto', marginBottom: '25px', borderBottom: '1px solid #1c1c3a' }}>
                {carrito.map((item, index) => (
                  <div key={index} style={{ padding: '12px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#fff' }}>{item.nombre}</strong>
                      <span style={{ marginLeft: '10px', fontSize: '11px', color: '#ff007f', border: '1px solid #ff007f', padding: '1px 5px', borderRadius: '4px' }}>{item.marca}</span>
                    </div>
                    <span style={{ color: '#00f0ff', fontWeight: 'bold' }}>${item.precio.toLocaleString()} MXN</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '24px' }}>Total: <span style={{ color: '#ff007f', textShadow: '0 0 5px #ff007f' }}>${totalPrecio.toLocaleString()} MXN</span></h3>
                <button onClick={vaciarCarrito} style={{ backgroundColor: 'transparent', color: '#ff007f', border: '1px solid #ff007f', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Vaciar Bolsa</button>
              </div>
            </div>
          )}
        </section>

      </main>

      <footer style={{ marginTop: '60px', textAlign: 'center', color: '#333', fontSize: '13px', borderTop: '1px solid #121226', paddingTop: '25px' }}>
        <p>TechnoShop v3.5 - Sprint Completado © 2026</p>
      </footer>
    </div>
  );
}

export default App;