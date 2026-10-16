import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LegalShell from '../../components/LegalShell';

const BASE = '/portafolio-trabajo';

// Paso 1: la página del grupo de Google (cualquiera puede unirse).
const GROUP_URL = 'https://groups.google.com/g/pruebas-droply';

// Paso 2: el enlace de participación de Play Console (Pruebas cerradas → Testers → Cómo se unen los testers).
// Déjalo vacío hasta que Google apruebe la versión: mientras tanto el paso 2 se muestra como "muy pronto".
const OPT_IN_URL = '';

const Step: React.FC<{ n: number; title: string; children: React.ReactNode }> = ({ n, title, children }) => (
  <li className="flex gap-4">
    <span className="shrink-0 w-9 h-9 rounded-full bg-[#222] text-white font-black flex items-center justify-center">{n}</span>
    <div className="flex-1">
      <h2 className="text-lg font-extrabold leading-snug">{title}</h2>
      <div className="mt-2 text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  </li>
);

const Button: React.FC<{ href?: string; children: React.ReactNode }> = ({ href, children }) =>
  href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-3 rounded-full bg-[#222] text-white text-sm font-bold hover:bg-[#444] transition duration-200">
      {children}
    </a>
  ) : (
    <span className="inline-block px-5 py-3 rounded-full bg-gray-200 text-gray-500 text-sm font-bold cursor-not-allowed">{children}</span>
  );

const DroplyTest: React.FC = () => (
  <>
    <Head>
      <title>Prueba Droply antes que nadie</title>
      <meta name="description" content="Únete a las pruebas de Droply, la app que anima tus notificaciones, en 3 pasos." />
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
    </Head>

    <LegalShell footerNote="Droply es una aplicación de MGM Tech Solutions.">
      <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[#eaeaea]">
        <div className="flex items-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE}/droply/icon.png`} alt="Icono de Droply" width={72} height={72} className="rounded-2xl shadow-md" />
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">Prueba Droply antes que nadie</h1>
            <p className="mt-1 text-gray-600">Tus notificaciones, con efecto. Gratis y en 3 pasos.</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-[#f6f6f2] border border-[#eaeaea] text-sm text-gray-700 leading-relaxed">
          <strong>Necesitas:</strong> un teléfono <strong>Android 8.0 o superior</strong> y tu cuenta de <strong>Gmail</strong> iniciada en la Play Store de ese
          teléfono. (En iPhone no está disponible.)
        </div>

        <ol className="mt-8 space-y-8">
          <Step n={1} title="Únete al grupo de pruebas">
            <p>
              Entra con <strong>el mismo Gmail que usas en tu teléfono</strong> y pulsa <em>Unirse al grupo</em>.
            </p>
            <Button href={GROUP_URL}>Unirme al grupo</Button>
          </Step>

          <Step n={2} title="Hazte tester">
            {OPT_IN_URL ? (
              <>
                <p>
                  Ya en el grupo, abre este enlace <strong>con el mismo Gmail</strong> y pulsa <em>Convertirme en tester</em>. Después pulsa <em>Descargar en Google Play</em>.
                </p>
                <Button href={OPT_IN_URL}>Hacerme tester</Button>
              </>
            ) : (
              <>
                <p>Este paso se activa en cuanto Google apruebe la versión de prueba. Haz el paso 1 ahora y vuelve a esta página en unos días.</p>
                <Button>Muy pronto</Button>
              </>
            )}
          </Step>

          <Step n={3} title="Instala y abre Droply">
            <p>Instálala desde Google Play como cualquier otra app. Al abrirla te explicará y te pedirá estos permisos, que solo sirven para animar tus notificaciones (no se guardan ni se envían a ningún sitio):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Acceso a notificaciones</li>
              <li>Mostrar sobre otras apps</li>
              <li>Pantalla completa (solo en Android 14 o superior)</li>
            </ul>
          </Step>
        </ol>

        <div className="mt-10 p-5 rounded-2xl bg-[#222] text-white leading-relaxed">
          <h2 className="text-lg font-extrabold">Lo más importante</h2>
          <p className="mt-2 text-gray-200">
            Google exige que la prueba dure <strong>14 días seguidos</strong>. Por favor <strong>no te des de baja ni desinstales la app</strong> durante ese tiempo; no hace
            falta usarla a diario. ¡Gracias por ayudarme a publicarla!
          </p>
        </div>
      </section>

      <section className="mt-8 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[#eaeaea]">
        <h2 className="text-2xl font-extrabold mb-5">Qué puedes probar</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Cambiar de efecto en la pestaña <em>Efectos</em> y pulsar <em>Probar</em>.</li>
          <li>Ir a <em>Ajustes → Probar con la pantalla bloqueada</em> y bloquear el teléfono.</li>
          <li>Borrar notificaciones desde el teléfono y comprobar que no se quedan en Droply.</li>
          <li>Contarme si algo se vio raro o si algún permiso fue difícil de entender (con una captura me ayudas mucho).</li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          Los anuncios que veas durante la prueba son de prueba; por favor no los toques. Más información en la{' '}
          <Link href="/privacy-droply/" className="text-blue-600 hover:underline font-semibold">política de privacidad</Link> y en la{' '}
          <Link href="/droply/" className="text-blue-600 hover:underline font-semibold">página de Droply</Link>.
        </p>
      </section>

      <section className="mt-8 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[#eaeaea]">
        <h2 className="text-2xl font-extrabold mb-5">Si algo no funciona</h2>
        <div className="space-y-5 text-gray-700">
          <div>
            <h3 className="font-bold">El enlace del paso 2 dice que no existe o que no estoy autorizado</h3>
            <p className="text-gray-600 mt-1">
              Abre el enlace con el <strong>mismo Gmail con el que te uniste al grupo</strong> (arriba a la derecha puedes cambiar de cuenta). Si te acabas de unir, espera unos
              minutos y vuelve a intentarlo.
            </p>
          </div>
          <div>
            <h3 className="font-bold">No me aparece el botón de descargar</h3>
            <p className="text-gray-600 mt-1">Primero debes estar en el grupo (paso 1) y haberte hecho tester (paso 2).</p>
          </div>
          <div>
            <h3 className="font-bold">Dice que la app no es compatible con mi dispositivo</h3>
            <p className="text-gray-600 mt-1">Necesita Android 8.0 o superior.</p>
          </div>
        </div>
      </section>
    </LegalShell>
  </>
);

export default DroplyTest;
