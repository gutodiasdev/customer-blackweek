import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export function ThankYou () {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Muito Obrigado - Suzano Black Week</title>
      </Helmet>
      <main className='flex flex-col justify-center gap-24 px-4 lg:px-40 bg-black h-screen w-full'>
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
        <button className='bg-[#FFF002] p-4 lg:p-4 rounded-md lg:w-[45%] font-bold text-black xl:text-4xl xl:mt-8'>
          <a href="https://loja.suzano.com.br/" target='_blank' rel="noreferrer">
            QUERO ME CADASTRAR NO ECOMMERCE!
          </a>
        </button>
      </main>
    </>
  );
}