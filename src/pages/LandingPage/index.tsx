import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import Countdown from 'react-countdown';
import * as yup from 'yup';

type SubmitProps = {
  name: string;
  email: string;
};


const subscriptionSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Você precisa inserir um email válido').required('Email é obrigatório'),
});

export function LadingPage () {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<SubmitProps>({
    resolver: yupResolver(subscriptionSchema)
  });

  const handleSubscription: SubmitHandler<SubmitProps> = (values) => {
    navigate('/obrigado');
  };

  return (
    <>
      <main>
        <section className='lg:grid lg:grid-cols-2 bg-gradient-to-l from-green-400 via-black to-black'>
          <div className='flex flex-col py-8 lg:py-16 xl:py-32 w-full'>
            <h1 className='text-5xl font-semibold text-white lg:text-8xl xl:text-9xl lg:font-black px-4 lg:px-8 xl:px-16'>BLACK WEEK</h1>
            <img className='px-4 lg:px-8 xl:px-16' src="./images/Suzano_2022.png" alt="Suzano 2022" />
            <h2 className='px-4 font-semibold text-white text-2xl my-4 lg:text-4xl xl:text-5xl lg:py-4 bg-gradient-to-r from-green-500 to-transparent lg:px-8 lg:my-8 xl:px-16 xl:font-bold'>
              Dia 18 até 24 de Novembro
            </h2>
            <div className='px-4 lg:px-16 xl:px-32'>
              <span className='text-white xl:text-3xl'>
                Inscreva-se para economizar no papel e acompanhar todas as novidades do período com as melhores ofertas do ano!
              </span>
              <form className='pt-4 flex flex-col' onSubmit={handleSubmit(handleSubscription)}>
                <fieldset className='flex flex-col gap-4 lg:gap-2 xl:gap-4'>
                  <input type="text" placeholder='Nome' {...register('name')} className='p-4 rounded-md' />
                  {errors.name ? (<span className='text-red-400 text-md'>{errors.name.message}</span>) : null}
                  <input type="text" placeholder='Email' {...register('email')} className='p-4 rounded-md' />
                  {errors.email ? (<span className='text-red-400 text-md'>{errors.email.message}</span>) : null}
                  <button type="submit" className='bg-[#FFF002] p-4 lg:p-2 rounded-md font-bold'>
                    EU QUERO DESCONTO!
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
          <div className='flex justify-end'>
            <img className='px-4 mb-[-5px] lg:mb-[-8px] xl:mb-[-10px] lg:object-contain lg:mt-auto' src="./images/hero-image.webp" alt="Desconto" />
          </div>
        </section>

        <section className='bg-[#FFF002] py-16 xl:py-24 text-6xl lg:text-9xl flex justify-center'>
          <Countdown date={'2022-11-18T00:00:00'} />
        </section>

        <section className='bg-black text-white px-4 py-16 xl:py-40'>
          <div className='xl:px-56 xl:grid xl:grid-cols-2'>
            <div>
              <h3 className='text-[#34B456] text-5xl font-semibold xl:text-6xl xl:font-bold'>Papel Report</h3>
              <p className='xl:text-4xl xl:py-8 text-3xl py-8 '>Solução de máxima performance para o report do dia a dia do seu negócio!</p>
            </div>
            <div className='px-12 xl:flex xl:justify-center'>
              <img src="./images/produto_papel_report.png" alt="Papel Report" />
            </div>
          </div>
          <div className='py-8 xl:px-56'>
            <h4 className='text-[#FFF002] text-2xl xl:text-3xl font-bold'>Principais características: </h4>
            <div className='grid grid-cols-2 gap-4 py-8 xl:flex xl:justify-between xl:py-16 xl:pr-32 text-black'>
              <div className='bg-[#FFF002] p-8 rounded-md font-bold flex flex-col justify-items-center justify-between shadow-lg shadow-[#FFF00275]'>
                <img className='w-[100px] h-[100px] mx-auto' src="./images/new-icons/nao-atola.webp" alt="Impressora" />
                {/* <h5 className='pt-4 text-xl xl:text-xl text-center'>Não atola</h5> */}
              </div>
              <div className='bg-[#FFF002] p-8 rounded-md font-bold flex flex-col justify-items-center justify-between shadow-lg shadow-[#FFF00275]'>
                <img className='w-[100px] h-[100px] mx-auto' src="./images/new-icons/resiste-mais.webp" alt="Impressora" />
                {/* <h5 className='pt-4 text-xl xl:text-xl text-center'>Resiste mais</h5> */}
              </div>
              <div className='bg-[#FFF002] p-8 rounded-md font-bold flex flex-col justify-items-center justify-between shadow-lg shadow-[#FFF00275]'>
                <img className='w-[100px] h-[100px] mx-auto' src="./images/new-icons/nao-borra.webp" alt="Impressora" />
                {/* <h5 className='pt-4 text-xl xl:text-xl text-center'>Não borra</h5> */}
              </div>
              <div className='bg-[#FFF002] p-8 rounded-md font-bold flex flex-col justify-items-center justify-between shadow-lg shadow-[#FFF00275]'>
                <img className='w-[100px] h-[100px] mx-auto' src="./images/new-icons/sustentavel.webp" alt="Impressora" />
                {/* <h5 className='pt-4 text-xl xl:text-xl text-center'>Sustentável</h5> */}
              </div>
            </div>
          </div>
        </section>

        <img className='absolute xl:mt-[-72px]' src="./images/faixa.png" alt="Black Week Suzano 2022" />

        <section className='bg-[#0D1812] text-white py-16 px-4 xl:py-40'>
          <div className='xl:px-56 xl:grid xl:grid-cols-2'>
            <div>
              <h3 className='text-[#34B456] text-5xl font-semibold xl:text-6xl xl:font-bold'>VISTA</h3>
              <p className='xl:text-4xl xl:py-8 text-3xl py-8 '>O papel referência do mercado por seu máximo desempenho de impressão para capas e embalagens</p>
            </div>
            <div className='px-12 xl:flex xl:justify-center'>
              <img src="./images/produto_papelvista_suzano.png" alt="Papel Vista" />
            </div>
          </div>
          <div className='py-8 xl:px-56'>
            <h4 className='text-[#FFF002] text-2xl xl:text-3xl font-bold'>Principais características: </h4>
            <div className='grid grid-cols-2 gap-4 py-8 xl:flex xl:justify-between xl:py-16 xl:pr-32 text-black'>
              <div className='bg-[#FFF002] p-8 rounded-md font-bold flex flex-col justify-items-center justify-between shadow-lg shadow-[#FFF00275]'>
                <img className='w-[100px] h-[100px] mx-auto' src="./images/new-icons/alta-gramatura.webp" alt="Alta gramatura" />
                {/* <h5 className='xl:pt-4 xl:text-xl'>Alta gramatura</h5> */}
              </div>
              <div className='bg-[#FFF002] p-8 rounded-md font-bold flex flex-col justify-items-center justify-between shadow-lg shadow-[#FFF00275]'>
                <img className='w-[100px] h-[100px] mx-auto' src="./images/new-icons/impressora.webp" alt="Impressão fosca" />
                {/* <h5 className='xl:pt-4 xl:text-xl'>Impressão fosca</h5> */}
              </div>
              <div className='bg-[#FFF002] p-8 rounded-md font-bold flex flex-col justify-items-center justify-between shadow-lg shadow-[#FFF00275]'>
                <img className='w-[100px] h-[100px] mx-auto' src="./images/new-icons/acabamento-diferenciado.webp" alt="Acabamento diferenciado" />
                {/* <h5 className='xl:pt-4 xl:text-xl'>Acabamento <br /> diferenciado</h5> */}
              </div>
              <div className='bg-[#FFF002] p-8 rounded-md font-bold flex flex-col justify-items-center justify-between shadow-lg shadow-[#FFF00275]'>
                <img className='w-[100px] h-[100px] mx-auto' src="./images/new-icons/superiro-aos-concorrentes.webp" alt="Superior aos concorrentes" />
                {/* <h5 className='xl:pt-4 xl:text-xl'>Superior aos <br /> concorrentes</h5> */}
              </div>
            </div>
          </div>
        </section>

        <img className='absolute xl:mt-[-72px]' src="./images/faixa.png" alt="Black Week Suzano 2022" />

        <section className='bg-black py-16 xl:py-40 px-4 xl:px-80'>
          <h2 className='text-[#34B456] text-5xl font-semibold xl:text-6xl xl:font-bold xl:pb-16' >FAQ</h2>

          <div id="accordion-collapse" data-accordion="collapse" className='py-8'>

            <h2 id="accordion-collapse-heading-1">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 bg-gray-100 dark:bg-[#FFF002]  text-gray-900 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span className='text-black text-2xl font-semibold'>O que é Black Week?</span>
                <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="text-2xl mb-2 text-gray-500 dark:text-gray-400">A Black Week é um dos principais eventos do ano e acontece sempre na semana da Black Friday em novembro. Nesse ano você terá acesso a descontos imperdíveis pela Loja Suzano!</p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-2">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 bg-gray-100 dark:bg-[#FFF002]  text-gray-900 dark:text-white" data-accordion-target="#accordion-collapse-body-2" aria-expanded="true" aria-controls="accordion-collapse-body-2">
                <span className='text-black text-2xl font-semibold'>Como aproveitar a Black Week Suzano?</span>
                <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-2" className="" aria-labelledby="accordion-collapse-heading-1">
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="text-2xl mb-2 text-gray-500 dark:text-gray-400">Para aproveitar as melhores ofertas da Black Week, você deve realizar a sua inscrição no formulário no topo da página, além de efetuar o seu cadastro na Loja Suzano.
                </p>
                <p>
                  Feito isso, confira o seu e-mail que estaremos informando vocês semanalmente sobre o evento, condições e o cupom de desconto!
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-3">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 bg-gray-100 dark:bg-[#FFF002]  text-gray-900 dark:text-white" data-accordion-target="#accordion-collapse-body-3" aria-expanded="true" aria-controls="accordion-collapse-body-3">
                <span className='text-black text-2xl font-semibold'>Por que devo comprar nesse período?</span>
                <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-3" className="" aria-labelledby="accordion-collapse-heading-1">
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="text-2xl mb-2 text-gray-500 dark:text-gray-400">Esse é o período dos maiores descontos do varejo no ano, se tornando a melhor oportunidade para você comprar nossos produtos com preço baixo!</p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-3">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 bg-gray-100 dark:bg-[#FFF002]  text-gray-900 dark:text-white" data-accordion-target="#accordion-collapse-body-3" aria-expanded="true" aria-controls="accordion-collapse-body-3">
                <span className='text-black text-2xl font-semibold'>Quais condições e regras de compra?</span>
                <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-3" className="" aria-labelledby="accordion-collapse-heading-1">
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="text-2xl mb-2 text-gray-500 dark:text-gray-400">Os cupons de desconto para o papel Report podem ser usados para compras de no máximo 20 caixas por pessoa. Enquanto, o cupom de desconto do Vista vai ter</p>
              </div>
            </div>

          </div>

        </section>

        <section className='bg-[#0D1813] text-center xl:text-4xl  text-2xl px-8 py-16 text-white xl:py-32'>
          <h3 className='xl:pb-8'>Você pode entrar em contato conosco pelo chat ou através de nossos telefones</h3>
          <div className='xl:text-3xl text-2xl py-8'>
            <p>Whatsapp:<br></br> (11) 4000-1222</p>
            <p>Regiões Metropolitanas:<br></br> 4000-1222</p>
            <p>Demais localidades: <br></br> 0800 9411 222</p>
          </div>
        </section>

        <section className='bg-white flex justify-center py-16 xl:py-24'>
          <img src="./images/suzano-logo.png" alt="Logo Suzano" />
        </section>
      </main>


    </>
  );
}