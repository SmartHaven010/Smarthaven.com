export default function Home(){return(<main><div className="container">
<nav className="nav"><div className="brand"><img src="/logo.svg" alt="SmartHaven" width="28" height="28"/><span>SmartHaven</span><small>Smarten up your home</small></div>
<div><a className="btn secondary" href="#products">Bekijk producten</a><a className="btn" style={{marginLeft:10}} href="#cta">Start met shoppen</a></div></nav>
<section className="hero"><div className="hero-card"><p className="kicker">Smart Home • Comfort • Security</p>
<h1>De <em>slimme</em> webshop voor een slimmer thuis</h1>
<p>Ontdek zorgvuldig geselecteerde smart home gadgets met hoge marges, snelle levering en topkwaliteit.
Van slimme lampen tot video-deurbellen — alles op één plek.</p>
<div><a className="btn" href="#products">Ontdek producten</a><a className="btn secondary" style={{marginLeft:10}} href="#cta">Waarom SmartHaven?</a></div></div>
<div className="hero-visual"><div className="glow" /><img alt="Smart devices collage" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:.7}}
src="https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?q=80&w=1600&auto=format&fit=crop"/></div></section>
<section id="products"><p className="kicker">Populair</p><h2 className="section-title">Onze bestsellers</h2>
<div className="grid"><article className="card"><img src="https://images.unsplash.com/photo-1582719478173-2d4a5b4cbbf3?q=80&w=1200&auto=format&fit=crop" alt="Slimme LED Lamp"/><h3>Slimme LED Lamp</h3><p>Stel scènes in, dimmen en automatiseren via app of spraak.</p></article>
<article className="card"><img src="https://images.unsplash.com/photo-1617957742040-5f9b82b1f345?q=80&w=1200&auto=format&fit=crop" alt="Slimme Deurbel"/><h3>Slimme Deurbel</h3><p>2‑weg audio, nachtzicht en notificaties op je telefoon.</p></article>
<article className="card"><img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200&auto=format&fit=crop" alt="Slimme Thermostaat"/><h3>Slimme Thermostaat</h3><p>Bespaar energie met slimme schema’s en geofencing.</p></article></div></section>
<section id="cta" className="hero-card" style={{marginTop:24}}><h2 className="section-title">Klaar om je huis slimmer te maken?</h2>
<p>SmartHaven – Smarten up your home, simplify your life.</p>
<div style={{marginTop:10}}><a className="btn" href="#products">Bekijk assortiment</a><a className="btn secondary" style={{marginLeft:10}} href="mailto:support@smarthaven.com">Contact</a></div></section>
<footer className="footer"><span>© {new Date().getFullYear()} SmartHaven. Alle rechten voorbehouden.</span>
<span><a href="#">Privacy</a> · <a href="#">Voorwaarden</a> · <a href="#">Retourbeleid</a></span></footer></div></main>)}
