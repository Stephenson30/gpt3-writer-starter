import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT-3 Writer" key="title"/>
        <meta property="og:description" content="build by stephen" key="description"/>

      </Head>
      <body>
      <header className='head'>
          <h3>SPOT</h3>
          <div>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
            </ul>
          </div>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
