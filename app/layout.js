export const metadata = {
  title: "Indofil M-45 PPT Generator",
  description: "Generate a PowerPoint about Indofil M-45 (Mancozeb 75% WP)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif', background: '#0b1220', color: '#e5e7eb', margin: 0 }}>
        <div style={{ maxWidth: 860, margin: '48px auto', padding: '0 20px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
