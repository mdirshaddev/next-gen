// Global CSS
import 'src/app/globals.css';

// Theme
import { BrandingCssVarsProvider } from 'src/modules/theme';

export const metadata = {
  title: 'Md Irshad - 💫 Software Developer',
  description: 'My Personal Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="__next">
        <BrandingCssVarsProvider>{children}</BrandingCssVarsProvider>
      </body>
    </html>
  );
}
