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
      <main className='flex flex-col justify-center items-center bg-black h-screen w-full'>
        <div className='text-slate-100'>
          <h2 className='text-[3rem] font-semibold'>Muito obrigado!</h2>
          <p className='text-[1rem]'>Em breve você receberá um contato</p>
        </div>
        <button
          className='text-slate-100 border-[1px] border-slate-100 px-4 py-2 rounded-md mt-8'
          onClick={handleBackToHome}
        >
          Voltar
        </button>
      </main>
    </>
  );
}