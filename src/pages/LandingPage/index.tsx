import { SubmitHandler, useForm } from 'react-hook-form';

type SubmitProps = {
  name: string;
  email: string;
  phone: string;
  niche: string;
};

export function LadingPage () {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SubmitProps>();

  const handleSubscription: SubmitHandler<SubmitProps> = (values) => {
    console.log(values);
  };

  return (
    <main>
      <section className='flex bg-gradient-to-l from-green-400 via-black to-black'>
        <div className='flex flex-col lg:py-16'>
          <h1 className='lg:text-8xl lg:font-black lg:text-white  lg:px-8'>BLACK WEEK</h1>
          <img className='lg:px-8' src="./images/Suzano_2022.png" alt="Suzano 2022" />
          <h2 className='lg:text-white lg:text-4xl lg:py-4 bg-gradient-to-r from-green-500 to-transparent lg:px-8 lg:my-8'>
            Dia 19 até 24 de Novembro
          </h2>
          <div className=' lg:px-16'>
            <span className='text-white'>
              Inscreva-se para economizar no papel e acompanhar todas as novidades do período com as melhores ofertas do ano!
            </span>
            {!isSubmitting ? (
              <form className='lg:pt-4 lg:flex lg:flex-col' onSubmit={handleSubmit(handleSubscription)}>
                <fieldset className='lg:flex lg:flex-col lg:gap-2'>
                  <input type="text" placeholder='Nome' {...register('name')} className='lg:p-2 lg:rounded-md' />
                  <input type="email" placeholder='Email' {...register('email')} className='lg:p-2 lg:rounded-md' />
                  <input type="text" placeholder='Telefone' {...register('phone')} className='lg:p-2 lg:rounded-md' />
                  <select {...register('niche')} placeholder='Seguimento' className='lg:p-2 lg:rounded-md'>
                    <option value="empresa">Empresa</option>
                    <option value="grafica">Gráfica</option>
                    <option value="papelaria">Papelaria</option>
                    <option value="pessoafisica">Pessoa Física</option>
                  </select>
                  <button type="submit" className='bg-[#FFF002] lg:p-2 lg:rounded-md lg:font-bold'>
                    EU QUERO DESCONTO!
                  </button>
                </fieldset>
              </form>) : (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              </svg>
            )}
          </div>
        </div>
        <div>
          <img className='mb-[-8px]' src="./images/hero-image.webp" alt="Desconto" />
        </div>
      </section>
      <section>
        Days count
      </section>
      <section>
        <div>
          <div>
            <h3>LOJA VIRTUAL SUZADO</h3>
            <p>O <span>cupom de desconto</span> da Black Week Suzano 2022, vai ser disponibilizado exclusivamente para nosso ecommerce</p>
          </div>
          <div>
            <img src="./images/monitor.png" alt="Loja Virtual Suzano" />
          </div>
        </div>
        <h4>Cadastre-se em nossa Loja Virtual para aproveitar todas as ofertas de fim de ano!</h4>
        <button>
          <a href="https://loja.suzano.com.br/" target='_blank' rel="noreferrer">
            QUERO ME CADASTRAR NO ECOMMERCE!
          </a>
        </button>
      </section>
      <img src="./images/faixa.png" alt="Black Week Suzano 2022" />
      <section>
        <div>
          <div>
            <h3>Papel Report</h3>
            <p>Solução de máxima performance para o report do dia a dia do seu negócio!</p>
          </div>
          <div>
            <img src="./images/produto_papel_report.png" alt="Papel Report" />
          </div>
        </div>
        <div>
          <h4>Principais características: </h4>
          <div>
            <div>
              <img src="./images/icons/printer.png" alt="Impressora" />
              <h5>Não atola</h5>
            </div>
            <div>
              <img src="./images/icons/paper-stack" alt="Impressora" />
              <h5>Resiste mais</h5>
            </div>
            <div>
              <img src="./images/icons/printer.png" alt="Impressora" />
              <h5>Não borra</h5>
            </div>
            <div>
              <img src="./images/icons/printer.png" alt="Impressora" />
              <h5>Sustentável</h5>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h3>VISTA</h3>
            <p>O papel referência do mercado por seu máximo desempenho de impressão para capas e embalagens</p>
          </div>
          <div>
            <img src="./images/produto_papelvista_suzano.png" alt="Papel Vista" />
          </div>
        </div>
        <div>
          <h4>Principais características: </h4>
          <div>
            <div>
              <img src="./images/icons/papeis-empilhados-de-papelaria.png" alt="Alta gramatura" />
              <h5>Alta gramatura</h5>
            </div>
            <div>
              <img src="./images/icons/impressora.png" alt="Impressão fosca" />
              <h5>Impressão fosca</h5>
            </div>
            <div>
              <img src="./images/icons/nao-e-igual-a.png" alt="Acabamento diferenciado" />
              <h5>Acabamento diferenciado</h5>
            </div>
            <div>
              <img src="./images/icons/seta-superior-direita.png" alt="Superior aos concorrentes" />
              <h5>Superior aos concorrentes</h5>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>FAQ</h2>

        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span>What is Flowbite?</span>
              <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
              <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
              <span>Is there a Figma file available?</span>
              <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
              <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
              <span>What are the differences between Flowbite and Tailwind UI?</span>
              <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
            <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
              <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
              </ul>
            </div>
          </div>
        </div>

      </section>
      <section>
        <h3>Você pode entrar em contato conosco pelo chat ou através de nossos telefones</h3>
        <div>
          <p>Whatsapp: (11) 4000-1222</p>
          <p>Regiões Metropolitanas: 4000-1222</p>
          <p>Demais localidades: 0800 9411 222</p>
        </div>
      </section>
    </main>
  );
}