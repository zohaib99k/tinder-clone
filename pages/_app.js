import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://czit3ghfclxs.usemoralis.com:2053/server'
      appId='AltvQ0WgGFdcHOlJpDHhukizEHx1uBT36hw26IDs'
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp
