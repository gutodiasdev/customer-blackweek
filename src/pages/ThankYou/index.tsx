import TagManager from 'react-gtm-module';
import { Helmet } from 'react-helmet';

export function ThankYou () {
  TagManager.initialize({
    gtmId: 'GTM-WBWQND6',
    events: {
      conversion: 'pageview'
    },
    dataLayer: {
      event: 'pageview',
      page: {
        url: window.location.href,
        title: 'conversão black week'
      }
    }
  });

  return (
    <>
      <Helmet>
        <title>Muito Obrigado - Suzano Black Week</title>
      </Helmet>
      <main className='flex justify-center items-center bg-black h-screen w-full'>
        <div className='text-slate-100'>
          <h2 className='text-[3rem] font-semibold'>Muito obrigado!</h2>
          <p className='text-[1rem]'>Em breve você receberá um contato</p>
        </div>
      </main>
    </>
  );
}