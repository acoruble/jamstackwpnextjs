import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
                  @font-face {
                    font-family: 'MontserratAlternates';
                    src: url('../public/fonts/MontserratAlternates-Regular.ttf');
                    font-weight: bold;
                    font-style: normal;
                    font-display: swap;
                  }
                `}</style>
    </div>
  );
}

export default MyApp
