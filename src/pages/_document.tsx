import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <div className='h-full bg-gray-100'>
        <body className='h-full'>
          <Main />
          <NextScript />
        </body>
      </div>
    </Html>
  );
}
