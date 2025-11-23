export default function HomePage() {
  return (
    <main>
      <h1 style={{ fontSize: 34, margin: 0 }}>Indofil M-45</h1>
      <p style={{ marginTop: 8, color: '#9aa4b2' }}>Comprehensive product overview (Mancozeb 75% WP)</p>

      <section style={{ marginTop: 28, lineHeight: 1.6 }}>
        <p>
          Click the button below to generate and download a professionally formatted
          PowerPoint presentation covering composition, mode of action, benefits,
          recommended uses, application guidelines, safety, and more.
        </p>
      </section>

      <div style={{ marginTop: 24 }}>
        <a
          href="/Indofil-M-45-Presentation.pptx"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
            color: 'white',
            textDecoration: 'none',
            padding: '12px 18px',
            borderRadius: 10,
            fontWeight: 600,
            boxShadow: '0 10px 25px rgba(37,99,235,0.25)'
          }}
        >
          Download PPTX
        </a>
      </div>

      <footer style={{ marginTop: 36, fontSize: 13, color: '#9aa4b2' }}>
        The PPT is pre-generated and served statically for reliability.
      </footer>
    </main>
  );
}
