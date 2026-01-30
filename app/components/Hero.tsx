export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Daniel Silva</h1>

        <h2>
          Editor de <span>Reels</span> para Negócios
        </h2>

        <p>
          Transformo vídeos curtos em atenção, autoridade
          e clientes no Instagram.
        </p>

        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          className="whatsapp-button"
        >
          Falar comigo no WhatsApp
        </a>
      </div>

      <div className="hero-visual">
        <div className="glow"></div>

        <div className="frame camera">
          <span>SEU VÍDEO AQUI</span>
        </div>
      </div>
    </section>
  );
}

