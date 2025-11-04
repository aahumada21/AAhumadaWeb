export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0f1115]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="text-base font-semibold tracking-tight text-slate-100">
            Grupo AAhumada
          </a>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a className="transition hover:text-[#c2a676]" href="#inicio">
              Inicio
            </a>
            <a className="transition hover:text-[#c2a676]" href="#nosotros">
              Nosotros
            </a>
            <a className="transition hover:text-[#c2a676]" href="#empresas">
              Empresas
            </a>
            <a className="transition hover:text-[#c2a676]" href="#contacto">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24" id="inicio">
        <section className="grid gap-12 rounded-4xl border border-slate-800 bg-[#13161d] p-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-[#c2a676]/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#c2a676]">
              Grupo multidisciplinario
            </span>
            <div className="space-y-4">
              <h1 className="font-playfair text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
                Grupo AAhumada
              </h1>
              <p className="text-xl text-slate-300">
                Diseño, tecnología y manufactura con propósito.
              </p>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-slate-300">
              Creamos y gestionamos proyectos que combinan artesanía, innovación y software. Desde
              muebles tapizados a medida hasta alimentos gourmet y soluciones SaaS con IA.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#empresas"
                className="inline-flex items-center justify-center rounded-full bg-[#c2a676] px-6 py-3 text-sm font-semibold text-[#14161d] transition hover:bg-[#b79960]"
              >
                Conocer nuestros proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-[#c2a676] hover:text-[#c2a676]"
              >
                Contáctanos
              </a>
            </div>
            <dl className="grid gap-3 text-sm text-slate-400 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-[#191d27] px-4 py-3">
                <dt className="text-xs uppercase tracking-[0.25em] text-slate-500">Experiencia</dt>
                <dd className="mt-2 font-playfair text-3xl font-semibold text-slate-100">1 año</dd>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-[#191d27] px-4 py-3">
                <dt className="text-xs uppercase tracking-[0.25em] text-slate-500">Proyectos</dt>
                <dd className="mt-2 font-playfair text-3xl font-semibold text-slate-100">4</dd>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-[#191d27] px-4 py-3">
                <dt className="text-xs uppercase tracking-[0.25em] text-slate-500">Alianzas</dt>
                <dd className="mt-2 font-playfair text-3xl font-semibold text-slate-100">2 sectores</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-slate-700 bg-[#161922] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c2a676]">
              Nuestra esencia
            </p>
            <p className="text-base leading-relaxed text-slate-300">
              Somos un equipo apasionado por transformar desafíos en oportunidades, integrando diseño,
              tecnología y manufactura de forma ágil y humana.
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#c2a676]" />
                <span>Proyectos a medida, desde la estrategia hasta la ejecución.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#c2a676]" />
                <span>Equipos interdisciplinarios y procesos colaborativos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#c2a676]" />
                <span>Experiencias con impacto real y enfoque sostenible.</span>
              </li>
            </ul>
          </div>
        </section>

        <section
          className="rounded-4xl border border-slate-800 bg-[#141821] p-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] md:p-12"
          id="nosotros"
        >
          <div className="max-w-3xl space-y-6">
            <h2 className="font-playfair text-3xl font-semibold text-slate-50">Quiénes somos</h2>
            <p className="text-lg leading-relaxed text-slate-300">
              Grupo AAhumada es un grupo empresarial chileno dedicado a crear, desarrollar y escalar
              proyectos en diferentes industrias. Integramos diseño, manufactura y tecnología para
              entregar productos y experiencias con alma.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Trabajamos bajo demanda, con foco en calidad, materiales nobles y procesos eficientes.
              Cada marca del grupo tiene identidad propia, pero comparte una misma filosofía: construir
              valor real y relaciones de largo plazo.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-700 bg-[#181c26] p-6">
              <h3 className="font-playfair mb-2 text-lg font-semibold text-[#c2a676]">Misión</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Conectar diseño, tecnología y artesanía para crear marcas que mejoren la vida de las
                personas y los negocios.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-[#181c26] p-6">
              <h3 className="font-playfair mb-2 text-lg font-semibold text-[#c2a676]">Visión</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Ser un referente en Chile por la calidad de nuestros productos y la innovación aplicada,
                expandiendo nuestras marcas a mercados internacionales.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-[#181c26] p-6 sm:col-span-2 lg:col-span-1">
              <h3 className="font-playfair mb-3 text-lg font-semibold text-[#c2a676]">Valores</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Calidad sin atajos: materiales y procesos seleccionados.</li>
                <li>Innovación útil: tecnología al servicio de personas y resultados.</li>
                <li>Artesanía con respeto: cuidado por los oficios y sus técnicas.</li>
                <li>Transparencia: comunicación clara y compromisos cumplidos.</li>
                <li>Sustentabilidad responsable: decisiones de largo plazo.</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className="space-y-8 rounded-4xl border border-slate-800 bg-[#13161d] p-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] md:p-12"
          id="empresas"
        >
          <div className="space-y-4">
            <h2 className="font-playfair text-3xl font-semibold text-slate-50">
              Líneas de Negocio — Grupo AAhumada
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              En Grupo AAhumada impulsamos proyectos que combinan diseño, manufactura y tecnología. Cada
              línea nace desde una idea con propósito y evoluciona hasta convertirse en una marca
              independiente, manteniendo siempre nuestra esencia: crear con alma.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="flex h-full flex-col gap-6 rounded-3xl border border-slate-700 bg-[#191d27] p-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c2a676]">
                  La Casa del Tapiz · En operación
                </p>
                <h3 className="font-playfair text-xl font-semibold text-slate-100">
                  Diseño y fabricación de muebles
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                La Casa del Tapiz es nuestra marca principal, dedicada al diseño y producción artesanal de
                sofás, sillones y piezas personalizadas. Fabricamos bajo demanda utilizando maderas nobles,
                tapices seleccionados y un enfoque 100% a domicilio.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                Cada mueble es una colaboración entre el cliente y nuestro equipo, buscando lograr
                funcionalidad, estética y durabilidad.
              </p>
              <dl className="mt-auto space-y-2 text-xs text-slate-400">
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Estado:</dt>
                  <dd>Activa</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Sitio web:</dt>
                  <dd>
                    <a
                      href="https://lacasadeltapiz.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#c2a676] transition hover:text-[#b79960]"
                    >
                      lacasadeltapiz.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Sector:</dt>
                  <dd>Mobiliario y decoración</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Redes:</dt>
                  <dd>
                    <a
                      href="https://www.instagram.com/lacasadeltapiz_"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#c2a676] transition hover:text-[#b79960]"
                    >
                      Instagram · @lacasadeltapiz_
                    </a>
                  </dd>
                </div>
              </dl>
            </article>

            <article className="flex h-full flex-col gap-6 rounded-3xl border border-slate-700 bg-[#191d27] p-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c2a676]">
                   IA-Marketing · En desarrollo
                </p>
                <h3 className="font-playfair text-xl font-semibold text-slate-100">
                  Automatización inteligente para marcas
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                IA-Marketing es un servicio para que las empresas puedan crear publicidad con inteligencia
                artificial, incorporando una tecnología de múltiples prompts que personaliza mensajes y
                piezas según cada audiencia.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                La plataforma automatiza la generación de campañas y contenidos, facilitando la iteración
                creativa sin depender de equipos técnicos complejos. Actualmente en etapa de desarrollo
                interno y validación de modelo.
              </p>
              <dl className="mt-auto space-y-2 text-xs text-slate-400">
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Estado:</dt>
                  <dd>En desarrollo (lanzamiento 2025)</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Sector:</dt>
                  <dd>Software · Inteligencia Artificial</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Redes:</dt>
                  <dd className="text-slate-500">Próximamente</dd>
                </div>
              </dl>
            </article>

            <article className="flex h-full flex-col gap-6 rounded-3xl border border-slate-700 bg-[#191d27] p-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c2a676]">
                  Salsa de Ajo · En proceso de creación
                </p>
                <h3 className="font-playfair text-xl font-semibold text-slate-100">
                  Alimentos gourmet con identidad
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                Salsa de Ajo es una línea de Ahumada gourmet creada con el propósito de rescatar sabores
                caseros y ofrecer productos honestos y saludables.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                Desarrollamos recetas equilibradas, con control total de ingredientes y procesos, buscando
                posicionarla como una alternativa artesanal premium. Actualmente en fase de pruebas y
                desarrollo de identidad visual.
              </p>
              <dl className="mt-auto space-y-2 text-xs text-slate-400">
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Estado:</dt>
                  <dd>En proceso de creación</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Sector:</dt>
                  <dd>Alimentos · Gastronomía artesanal</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Redes:</dt>
                  <dd>
                    <a
                      href="https://www.instagram.com/ahumada.gourmet"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#c2a676] transition hover:text-[#b79960]"
                    >
                      Instagram · @ahumada.gorumet
                    </a>
                  </dd>
                </div>
              </dl>
            </article>

            <article className="flex h-full flex-col gap-6 rounded-3xl border border-slate-700 bg-[#191d27] p-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c2a676]">
                  Ahumada Labs · Incubadora interna
                </p>
                <h3 className="font-playfair text-xl font-semibold text-slate-100">
                  Innovación y prototipos con visión de futuro
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                Ahumada Labs es el espacio de experimentación del grupo, donde nacen y se validan nuevas
                ideas que pueden transformarse en futuras marcas. Funciona como laboratorio de innovación,
                prototipado y diseño interdisciplinario.
              </p>
              <dl className="mt-auto space-y-2 text-xs text-slate-400">
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Estado:</dt>
                  <dd>Conceptual · I+D</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Sector:</dt>
                  <dd>Innovación · Prototipado · Diseño</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-slate-200">Redes:</dt>
                  <dd className="text-slate-500">Próximamente</dd>
                </div>
              </dl>
            </article>
          </div>
        </section>

        <section className="rounded-4xl border border-slate-800 bg-[#13161d] p-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] md:p-12" id="fundador">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div className="space-y-3">
              <h2 className="font-playfair text-3xl font-semibold text-slate-50">Agustín Ahumada</h2>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c2a676]">
                Fundador · Chile, 2002
              </p>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              <p>
                Agustín Ahumada es el fundador de Grupo AAhumada, empresa chilena dedicada al diseño,
                manufactura y desarrollo tecnológico. Desde joven mostró interés por la creación y la
                construcción, combinando el trabajo artesanal con la innovación digital.
              </p>
              <p>
                Su visión ha sido integrar diferentes disciplinas —diseño, tecnología y gastronomía— bajo
                una misma filosofía: crear con propósito y alma.
              </p>
              <p>
                Actualmente lidera el desarrollo de La Casa del Tapiz, marca enfocada en muebles tapizados
                a medida; e IA-Marketing, plataforma SaaS con inteligencia artificial.
              </p>
            </div>
          </div>
        </section>

        <section
          className="space-y-6 rounded-4xl border border-slate-800 bg-[#13161d] p-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] md:p-12"
          id="contacto"
        >
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-[#c2a676]/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#c2a676]">
              Contacto
            </span>
            <h2 className="font-playfair text-3xl font-semibold text-slate-50">Conversemos</h2>
            <p className="text-base leading-relaxed text-slate-300">
              Objetivo: permitir que te contacten fácil y rápido.
            </p>
          </div>
          <dl className="grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Correo</dt>
              <dd className="mt-3 text-lg">
                <a
                  href="mailto:contacto@aahumada.com"
                  className="text-[#c2a676] transition hover:text-[#b79960]"
                >
                  contacto@aahumada.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                WhatsApp / Teléfono
              </dt>
              <dd className="mt-3 text-lg">
                <a
                  href="https://wa.me/56949186386"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#c2a676] transition hover:text-[#b79960]"
                >
                  +56 9 4918 6386
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Redes sociales
              </dt>
              <dd className="mt-3 text-lg">
                <a
                  href="https://www.instagram.com/grupo_aahumada"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#c2a676] transition hover:text-[#b79960]"
                >
                  Instagram · @grupo_aahumada
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-[#0f1115] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="font-playfair text-lg font-semibold text-slate-100">Grupo AAhumada</p>
            <p>© 2025 Grupo AAhumada SpA</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#politicas" className="text-slate-400 transition hover:text-[#c2a676]">
              Políticas
            </a>
            <a
              href="https://www.instagram.com/grupo_aahumada"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-[#c2a676]"
            >
              Instagram
            </a>
            <a href="mailto:contacto@aahumada.com" className="text-slate-400 transition hover:text-[#c2a676]">
              contacto@aahumada.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
