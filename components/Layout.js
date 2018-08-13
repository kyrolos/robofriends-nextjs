import Head from 'next/head';
import Header from './Header';


const Layout = (props) => (  
  <div className='tc'>
    <Head>
      <title>Robofriend App</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel='shortcut icon' href='../static/favicon.ico" type="image/x-icon' />
      <link rel='icon' href='../static/favicon.ico' type='image/x-icon' />
      <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css" />
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
