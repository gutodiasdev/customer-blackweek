import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export function ThankYou () {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const tagManagerArgs = {
    gtmId: 'GTM-KLFRFSR',
    events: {
      blackweek: true
    }
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  });

  return (
    <>
      <Helmet>
        <title>Muito Obrigado - Suzano Black Week</title>
      </Helmet>
      <main className='flex flex-col justify-center gap-24 px-4 lg:px-72 bg-black h-screen w-full'>
        <button
          className='text-slate-100 border-[1px] border-slate-100 px-4 py-2 rounded-md mt-8 w-[25%] lg:w-[5%]'
          onClick={handleBackToHome}
        >
          Voltar
        </button>
        <div className='text-slate-100'>
          <h2 className='text-[3rem] font-semibold'>Muito obrigado!</h2>
          <p className='text-[1rem]'>Em breve você receberá um contato</p>
        </div>
        <div className='flex flex-col justify-center gap-16 bg-black h-screen w-full'>
          <button className='bg-[#FFF002] p-4 lg:p-4 rounded-md lg:w-[60%] font-bold text-black xl:text-4xl xl:mt-8'>
            <a href="https://loja.suzano.com.br/suzano/pt/login?utm_source=google_ads&utm_medium=lp_black_friday&utm_campaign=ja_sou_cliente_suzano" target='_blank' rel="noreferrer">
              JÁ SOU CLIENTE, QUERO IR ÀS COMPRAS
            </a>
          </button>
          <button className='bg-[#FFF002] p-4 lg:p-4 rounded-md lg:w-[60%] font-bold text-black xl:text-4xl xl:mt-8'>
            <a href="https://loja.suzano.com.br/customer/form?utm_source=google_ads&utm_medium=lp_black_friday&utm_campaign=cadastro_novo_clientes " target='_blank' rel="noreferrer">
              QUERO ME CADASTRAR NO ECOMMERCE!
            </a>
          </button>
        </div>
      </main>
    </>
  );
}