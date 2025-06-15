import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import MaterialTheme from '../src/MaterialTheme'; // Assuming MaterialTheme.jsx will be handled or converted
import Footer from '../src/components/Footer/Footer'; // Assuming Footer.jsx will be converted to Footer.tsx

import './globals.css'; // Placeholder for global styles
// Import other global CSS files as needed:
import '../src/index.scss';
import '../src/common/css/style.css';
import 'simplebar/dist/simplebar.min.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={MaterialTheme}>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
