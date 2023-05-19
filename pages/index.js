import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Deepak Choudhary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
         <div>
            <h1>Welcome to My Portfolio</h1>
            <p>Check out my projects:</p>
            <Link href="/projects">
              <a>Go to Projects</a>
            </Link>
          </div>
      </main>

      <Footer />
    </div>
  )
}
