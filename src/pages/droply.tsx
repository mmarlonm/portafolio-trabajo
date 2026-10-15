import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LegalShell from '../components/LegalShell';

const BASE = '/portafolio-trabajo';

const FEATURES = [
  ['Gota de agua con slow motion', 'La gota se forma en el borde, cae y se abre en una tarjeta de cristal con tu mensaje.'],
  ['17 efectos', 'Aqua, Aurora, Burbuja, Vórtice, Cometa y Escarcha, más Pulso neón y Meteorito (premium).'],
  ['De temporada', 'Halloween, Día de Muertos y Navidad: calabazas, cempasúchil, árbol de luces y más.'],
  ['A tu medida', 'Tiempo en pantalla, altura y posición de la gota, vibración al caer y apps que activan Droply.'],
  ['Privada por diseño', 'Tus notificaciones se procesan solo en tu teléfono. No hay cuentas ni servidores.'],
  ['Se sincroniza con la barra', 'Al descartar una tarjeta, Droply la borra también de la barra de notificaciones.'],
];

const SHOTS = [1, 2, 3, 4, 5, 6, 7, 8];

const FAQ = [
  [
    'No me aparece la animación',
    'Casi siempre falta un permiso. Abre Droply y concede, en este orden: Acceso a notificaciones, Mostrar sobre otras aplicaciones y (en Android 14 o superior) Pantalla completa. En Ajustes → Probar con la pantalla bloqueada puedes comprobarlo. En algunos teléfonos también hay que quitar a Droply de la optimización de batería.',
  ],
  [
    'Una app no activa Droply',
    'Revisa Ajustes → Apps bloqueadas: ahí eliges qué aplicaciones se ignoran.',
  ],
  [
    'Compré un efecto y no aparece',
    'En la pestaña Efectos pulsa "Restaurar compras". Se recuperan con la misma cuenta de Google con la que compraste.',
  ],
  [
    '¿Qué pasa con mis notificaciones?',
    'Se leen solo para dibujarlas, se quedan en la memoria del teléfono mientras la tarjeta está en pantalla y no se envían a ningún sitio. Puedes quitar el permiso cuando quieras desde los ajustes de Android.',
  ],
  [
    '¿Cómo quito los anuncios?',
    'El banner de la parte inferior desaparece al comprar cualquier efecto premium. El anuncio con recompensa es opcional y solo aparece si tú lo eliges para probar un efecto 24 horas. Nunca hay anuncios en la pantalla de bloqueo.',
  ],
];

const DroplyPage: React.FC = () => (
  <>
    <Head>
      <title>Droply - Notificaciones con efecto</title>
      <meta name="description" content="Droply convierte tus notificaciones en animaciones sobre la pantalla: gota de agua, aurora, calabazas, regalos y más. Soporte y privacidad." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
    </Head>

    <LegalShell wide footerNote="Droply es una aplicación de MGM Tech Solutions.">
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#eaeaea] flex flex-col md:flex-row items-center gap-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BASE}/droply/icon.png`} alt="Icono de Droply" width={112} height={112} className="rounded-3xl shadow-md" />
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Droply</h1>
          <p className="text-xl text-gray-700 mt-2">Tus notificaciones, con efecto.</p>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            Cada notificación llega como una gota de agua, una aurora, una calabaza o un regalo, directamente sobre tu pantalla, incluso con el teléfono bloqueado.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-4 py-2 rounded-full bg-[#222] text-white text-sm font-bold">Próximamente en Google Play</span>
            <Link href="/privacy-droply/" className="px-4 py-2 rounded-full border border-[#222] text-sm font-bold hover:bg-[#222] hover:text-white transition duration-200">
              Política de privacidad
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {SHOTS.map((n) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={n}
              src={`${BASE}/droply/shot-${n}.jpg`}
              alt={`Captura ${n} de Droply`}
              width={180}
              height={320}
              loading="lazy"
              className="rounded-2xl shadow-md border border-[#eaeaea] snap-start shrink-0 h-80 w-auto"
            />
          ))}
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {FEATURES.map(([title, text]) => (
          <div key={title} className="bg-white rounded-2xl p-6 border border-[#eaeaea] shadow-sm">
            <h2 className="font-bold text-lg mb-1">{title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#eaeaea]">
        <h2 className="text-2xl font-extrabold mb-6">Cómo empezar</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Abre Droply y lee el aviso sobre el acceso a notificaciones.</li>
          <li>Concede <strong>Acceso a notificaciones</strong> y <strong>Mostrar sobre otras aplicaciones</strong>.</li>
          <li>En Android 14 o superior, concede también <strong>Pantalla completa</strong> desde Ajustes.</li>
          <li>Elige un efecto en la pestaña Efectos y pulsa "Probar".</li>
        </ol>
      </section>

      <section className="mt-10 bg-white rounded-3xl p-8 md:p-12 shadow-sm break-words border border-[#eaeaea]">
        <h2 className="text-2xl font-extrabold mb-6">Preguntas frecuentes y soporte</h2>
        <div className="space-y-6">
          {FAQ.map(([q, a]) => (
            <div key={q}>
              <h3 className="font-bold">{q}</h3>
              <p className="text-gray-600 mt-1 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 pt-6 border-t border-[#eaeaea] text-gray-700">
          ¿Algo más? Escríbenos desde el botón <em>Contáctame</em> de nuestro{' '}
          <Link href="/" className="text-blue-600 hover:underline font-semibold">portafolio</Link>. Tratamos tus datos como se explica en la{' '}
          <Link href="/privacy-droply/" className="text-blue-600 hover:underline font-semibold">política de privacidad</Link>
          {' '}(<Link href="/privacy-droply/#en" className="text-blue-600 hover:underline font-semibold">English</Link>).
        </p>
      </section>
    </LegalShell>
  </>
);

export default DroplyPage;
