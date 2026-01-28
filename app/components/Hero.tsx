export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: '20px'
    }}>
      <h1 style={{
        fontSize: '64px',
        color: '#7c3aed'
      }}>
        Daniel Silva
      </h1>

      <h2 style={{
        fontSize: '28px',
        fontWeight: 'normal'
      }}>
        Editor de Reels para negócios
      </h2>

      <p style={{
        fontSize: '20px',
        maxWidth: '600px',
        opacity: 0.85
      }}>
        Transformo vídeos curtos em atenção, autoridade e clientes no Instagram.
      </p>

      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        className="whatsapp"
      >
        Falar comigo no WhatsApp
      </a>
    </section>
  )
}

