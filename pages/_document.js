import Document, {Head, Main, NextScript} from 'next/document'
export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <link rel="stylesheet" href="/_next/static/style.css"/>
          <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>

          <script src="path/to/your/bundle.js"></script>
        </Head>
        <body>
          <Main/>
          <NextScript/>
          <div className="container"></div>
        </body>
      </html>
    )
  }
}
