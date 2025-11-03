export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-sky-100 via-slate-50 to-transparent" />

      <header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight text-slate-900">
            Grupo AAhumada
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a className="hover:text-slate-900" href="#inicio">
              Inicio
            </a>
            <a className="hover:text-slate-900" href="#nosotros">
              Nosotros
            </a>
            <a className="hover:text-slate-900" href="#empresas">
              Empresas
            </a>
            <a className="hover:text-slate-900" href="#contacto">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-28 px-6 pb-24 pt-24" id="inicio">
        <section className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
              Innovacion con proposito
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Impulsamos soluciones que conectan personas, ideas y tecnologia.
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              En Grupo AAhumada unimos talento multidisciplinario para crear experiencias memorables.
              Acompanamos a nuestros aliados desde la estrategia hasta la ejecucion, con un enfoque
              humano y sostenible.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
              >
                Conversemos
              </a>
              <a
                href="#nosotros"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                Conoce nuestra historia
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-10 shadow-xl">
            <div className="pointer-events-none absolute -left-24 top-10 h-32 w-32 rounded-full bg-sky-200 blur-3xl" />
            <div className="pointer-events-none absolute -right-6 bottom-6 h-32 w-32 rounded-full bg-indigo-200 blur-3xl" />
            <div className="relative space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Nuestra esencia
              </p>
              <p className="text-xl font-medium leading-relaxed text-slate-700">
                Somos un equipo apasionado por transformar desafios en oportunidades. Creemos en la
                colaboracion, la curiosidad permanente y la excelencia como motor de cada proyecto.
              </p>
              <div className="grid grid-cols-2 gap-6 text-center text-sm">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-3xl font-semibold text-slate-900">15+</p>
                  <p className="text-slate-500">Anos de experiencia</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-3xl font-semibold text-slate-900">120+</p>
                  <p className="text-slate-500">Proyectos entregados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-12" id="nosotros">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Quienes somos?</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Grupo AAhumada nace de la vision de Alejandro Ahumada, emprendedor y estratega digital
              que ha liderado iniciativas en distintos sectores productivos. Reunimos especialistas en
              innovacion, marketing, tecnologia y diseno para acompanar a organizaciones que buscan un
              impacto real en sus comunidades.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Visión</h3>
              <p className="text-slate-600">
                Ser el aliado estrategico preferido por empresas que necesitan evolucionar sus modelos
                de negocio desde la creatividad y la tecnologia.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Misión</h3>
              <p className="text-slate-600">
                Disenar soluciones integrales que conecten necesidades reales con propuestas de valor
                viables, sostenibles y medibles.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Valores</h3>
              <p className="text-slate-600">
                Transparencia, colaboracion y aprendizaje continuo. Cada proyecto es una oportunidad
                para crecer junto a nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12" id="empresas">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Empresas del grupo</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Diversificamos nuestras capacidades en unidades de negocio que se complementan entre si,
              manteniendo un mismo estandar de excelencia y servicio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Estrategia
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Ahumada Consulting</h3>
              <p className="mt-3 flex-1 text-slate-600">
                Consultoria integral para redefinir modelos de negocios, optimizar procesos y
                acompanar la transformacion digital de organizaciones.
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700"
              >
                Coordinar una reunion &gt;
              </a>
            </article>

            <article className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Marketing
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Ahumada Creative Lab</h3>
              <p className="mt-3 flex-1 text-slate-600">
                Estrategias de marca, contenido y experiencias digitales memorables, orientadas a
                conectar con audiencias especificas y medir resultados.
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700"
              >
                Solicitar portafolio &gt;
              </a>
            </article>

            <article className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Tecnologia
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Ahumada Tech Solutions</h3>
              <p className="mt-3 flex-1 text-slate-600">
                Desarrollo de plataformas, automatizaciones y data analytics para acelerar la
                innovacion en ecosistemas corporativos y startups.
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700"
              >
                Conocer casos de uso &gt;
              </a>
            </article>
          </div>
        </section>

        <section className="space-y-10" id="contacto">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Contacto</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Cuentanos sobre tu proximo desafio y encontremos juntos el camino para llevarlo al
              siguiente nivel.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr_1.2fr]">
            <form className="space-y-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div>
                <label className="block text-sm font-semibold text-slate-700" htmlFor="name">
                  Nombre y apellido
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700" htmlFor="email">
                  Correo electronico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="nombre@empresa.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700" htmlFor="company">
                  Empresa
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Nombre de tu organizacion"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700" htmlFor="message">
                  En que podemos ayudarte?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Cuentanos brevemente el alcance del proyecto"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Enviar mensaje
              </button>
            </form>

            <aside className="space-y-8 rounded-3xl bg-slate-900 p-10 text-white shadow-lg">
              <div>
                <h3 className="text-lg font-semibold">Visitanos</h3>
                <p className="mt-2 text-sm text-slate-200">
                  Av. Innovación 1234, Piso 7<br />
                  Santiago de Chile
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Escribenos</h3>
                <p className="mt-2 text-sm text-slate-200">
                  contacto@grupoahumada.com<br />
                  +56 9 1234 5678
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Síguenos</h3>
                <p className="mt-2 text-sm text-slate-200">
                  LinkedIn - Instagram - YouTube
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Grupo AAhumada. Todos los derechos reservados.</p>
          <p className="text-slate-400">Construyendo alianzas que generan valor.</p>
        </div>
      </footer>
    </div>
  );
}
