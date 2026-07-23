/* eslint-disable react-refresh/only-export-components */
import Providers from '@/app/providers';
import '@mantine/core/styles.css';
import './globals.css';
import Header from '@/shared/components/header/Header';
import { cormorant } from '@/app/fonts';

export const metadata = {
  title: 'Coffee Moon',
  description: 'Coffee shop landing page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cormorant.variable}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
