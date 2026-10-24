import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wapasify — Campus Lost & Found',
  description:
    'One calm, trusted place to search campus finds, report a missing item, and coordinate safe handover.',
};

export const viewport: Viewport = {
  themeColor: '#f4f5f0',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
