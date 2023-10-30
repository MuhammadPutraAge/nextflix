'use client';

import { Navbar } from "@/components";
import { store } from "@/redux";
import GlobalStyle from "@/styles/GlobalStyles";
import { Provider } from "react-redux";

// export const metadata = {
//   title: "Nextflix",
//   description: "Next JS based movies web app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <GlobalStyle />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
