import './globals.css';

export const metadata = {
  title: 'Kimberley Quality Training & Labour Hire',
  description:
    'Aboriginal-owned training company delivering nationally accredited training, plant competency support, and workforce mentoring across the Kimberley and regional Western Australia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
