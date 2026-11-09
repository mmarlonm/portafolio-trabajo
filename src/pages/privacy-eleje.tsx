import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LegalShell from '../components/LegalShell';

type Lang = 'es' | 'en';

const UPDATED: Record<Lang, string> = { es: '9 de noviembre de 2026', en: 'November 9, 2026' };

const Sec: React.FC<{ title: string; last?: boolean; children: React.ReactNode }> = ({ title, last, children }) => (
  <section className={last ? 'pt-6 border-t border-[#eaeaea]' : undefined}>
    <h2 className="text-xl font-bold text-[#222] mb-3">{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc pl-6 space-y-2">{children}</ul>
);

const ContactLink: React.FC<{ label: string }> = ({ label }) => (
  <Link href="/" className="text-blue-600 hover:underline font-semibold">
    {label}
  </Link>
);

const Spanish: React.FC = () => (
  <>
    <Sec title="1. Quiénes somos">
      <p>
        Esta política describe cómo el juego para Android <strong>EL EJE</strong> (identificador de paquete{' '}
        <code className="text-sm bg-gray-100 px-1 rounded">com.mgmtechsolutions.eleje</code>, "la Aplicación") trata la información. La Aplicación es
        desarrollada y publicada por <strong>MGM Tech Solutions</strong> ("nosotros"). EL EJE es un juego de defensa de torres que se juega por completo
        en tu teléfono.
      </p>
    </Sec>

    <Sec title="2. En resumen">
      <List>
        <li><strong>No recopilamos, almacenamos en servidores, compartimos ni vendemos ningún dato personal.</strong></li>
        <li>No hay cuentas, registro ni inicio de sesión, y no tenemos servidores propios.</li>
        <li>La Aplicación no se conecta a Internet: no envía ni recibe información.</li>
        <li>No contiene publicidad, compras dentro de la aplicación, herramientas de analítica, rastreadores ni SDK de terceros que recojan datos.</li>
      </List>
    </Sec>

    <Sec title="3. Permisos del dispositivo">
      <p>
        EL EJE <strong>no solicita ningún permiso</strong> del dispositivo: ni ubicación, ni contactos, ni cámara, ni micrófono, ni fotos o archivos, ni
        acceso a Internet. Tampoco usa el identificador de publicidad.
      </p>
    </Sec>

    <Sec title="4. Datos guardados en tu dispositivo">
      <p>
        Para que puedas continuar tu partida, el juego guarda localmente tu progreso (oleada, créditos y configuración de la torre) y tus ajustes
        (volumen y opciones). Esta información permanece en el almacenamiento privado de la Aplicación y no nos llega. Se elimina al desinstalar la
        Aplicación o al borrar sus datos desde los ajustes de Android.
      </p>
      <p>
        Si tienes activada la copia de seguridad de Android, el propio sistema puede incluir ese progreso en tu copia de seguridad de Google; eso lo
        gestiona Google bajo su{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">política de privacidad</a>,
        no nosotros.
      </p>
    </Sec>

    <Sec title="5. Con quién compartimos información">
      <p>
        Con nadie: la Aplicación no integra ningún proveedor externo y no transmite datos. Podríamos divulgar información si una ley o una autoridad
        competente lo exige, aunque no almacenamos información de los usuarios.
      </p>
    </Sec>

    <Sec title="6. Conservación y eliminación de datos">
      <p>
        Como no operamos servidores ni cuentas de usuario, no conservamos datos tuyos y no hay nada que eliminar de nuestro lado. Para borrar lo que
        está en tu teléfono, usa <em>Ajustes de Android → Aplicaciones → EL EJE → Almacenamiento → Borrar datos</em> o desinstala la Aplicación.
      </p>
    </Sec>

    <Sec title="7. Menores de edad">
      <p>
        EL EJE no está dirigido a menores de 13 años y no recoge datos de ninguna persona, de cualquier edad.
      </p>
    </Sec>

    <Sec title="8. Tus derechos">
      <p>
        Dependiendo de tu país (por ejemplo, el RGPD en Europa o las leyes de privacidad de varios estados de EE. UU.), puedes tener derecho a acceder,
        corregir, eliminar o limitar el uso de tus datos. Como no recopilamos datos personales, no tenemos información tuya que consultar o corregir.
        Si tienes dudas, contáctanos.
      </p>
    </Sec>

    <Sec title="9. Cambios a esta política">
      <p>
        Si el juego cambiara de forma que afecte a tu privacidad (por ejemplo, si añadiera conexión a Internet o publicidad), actualizaremos esta
        página y la ficha de Google Play antes de publicar esa versión, y cambiaremos la fecha de "Última actualización".
      </p>
    </Sec>

    <Sec title="10. Contacto" last>
      <p>
        MGM Tech Solutions. Para preguntas sobre esta política o sobre EL EJE, escríbenos desde el formulario de contacto de nuestro portafolio:{' '}
        <ContactLink label="mmarlonm.github.io/portafolio-trabajo" /> (botón <em>Contáctame</em>).
      </p>
    </Sec>
  </>
);

const English: React.FC = () => (
  <>
    <Sec title="1. Who we are">
      <p>
        This policy describes how the Android game <strong>EL EJE</strong> (package name{' '}
        <code className="text-sm bg-gray-100 px-1 rounded">com.mgmtechsolutions.eleje</code>, "the App") handles information. The App is developed and
        published by <strong>MGM Tech Solutions</strong> ("we"). EL EJE is a tower-defense game that is played entirely on your phone.
      </p>
    </Sec>

    <Sec title="2. In short">
      <List>
        <li><strong>We do not collect, store on servers, share or sell any personal data.</strong></li>
        <li>There are no accounts, sign-up or sign-in, and we have no servers of our own.</li>
        <li>The App does not connect to the Internet: it sends and receives no information.</li>
        <li>It contains no ads, in-app purchases, analytics tools, trackers or third-party SDKs that collect data.</li>
      </List>
    </Sec>

    <Sec title="3. Device permissions">
      <p>
        EL EJE <strong>requests no device permissions</strong>: no location, contacts, camera, microphone, photos or files, and no Internet access. It
        does not use the advertising ID either.
      </p>
    </Sec>

    <Sec title="4. Data stored on your device">
      <p>
        So you can resume your game, the App stores your progress (wave, credits and tower setup) and your settings (volume and options) locally. This
        stays in the App's private storage and never reaches us. It is deleted when you uninstall the App or clear its data in Android settings.
      </p>
      <p>
        If Android backup is enabled on your device, the system itself may include this progress in your Google backup; that is handled by Google under
        its{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">privacy policy</a>,
        not by us.
      </p>
    </Sec>

    <Sec title="5. Who we share information with">
      <p>
        No one: the App integrates no external providers and transmits no data. We might disclose information if required by law or a competent
        authority, although we do not store user information.
      </p>
    </Sec>

    <Sec title="6. Retention and deletion">
      <p>
        Because we run no servers or user accounts, we hold no data about you and there is nothing to delete on our side. To erase what is on your phone,
        use <em>Android Settings → Apps → EL EJE → Storage → Clear data</em> or uninstall the App.
      </p>
    </Sec>

    <Sec title="7. Children">
      <p>
        EL EJE is not directed at children under 13 and does not collect data from anyone, of any age.
      </p>
    </Sec>

    <Sec title="8. Your rights">
      <p>
        Depending on where you live (for example GDPR in Europe or several US state privacy laws), you may have the right to access, correct, delete or
        restrict the use of your data. Since we do not collect personal data, we have no information about you to access or correct. If you have
        questions, contact us.
      </p>
    </Sec>

    <Sec title="9. Changes to this policy">
      <p>
        If the game changes in a way that affects your privacy (for example, by adding Internet access or ads), we will update this page and the Google
        Play listing before releasing that version, and change the "Last updated" date.
      </p>
    </Sec>

    <Sec title="10. Contact" last>
      <p>
        MGM Tech Solutions. For questions about this policy or EL EJE, write to us through the contact form on our portfolio:{' '}
        <ContactLink label="mmarlonm.github.io/portafolio-trabajo" /> (<em>Contáctame</em> button).
      </p>
    </Sec>
  </>
);

const COPY: Record<Lang, { title: string; desc: string; h1: string; updated: string; app: string; footer: string; toggle: string }> = {
  es: {
    title: 'Política de Privacidad - EL EJE',
    desc: 'Política de privacidad de EL EJE, el juego de defensa de torres de MGM Tech Solutions.',
    h1: 'Política de Privacidad',
    updated: 'Última actualización',
    app: 'Aplicación',
    footer: 'Desarrollo de apps móviles y software a la medida.',
    toggle: 'English',
  },
  en: {
    title: 'Privacy Policy - EL EJE',
    desc: 'Privacy policy for EL EJE, the tower-defense game by MGM Tech Solutions.',
    h1: 'Privacy Policy',
    updated: 'Last updated',
    app: 'App',
    footer: 'Mobile apps and custom software development.',
    toggle: 'Español',
  },
};

const ElEjePrivacy: React.FC = () => {
  const [lang, setLang] = useState<Lang>('es');

  // La misma URL sirve en inglés con #en (útil para la ficha en inglés de Play Console).
  useEffect(() => {
    if (window.location.hash === '#en') setLang('en');
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const switchLang = () => {
    const next: Lang = lang === 'es' ? 'en' : 'es';
    setLang(next);
    window.history.replaceState(null, '', next === 'en' ? '#en' : window.location.pathname + window.location.search);
  };

  const t = COPY[lang];
  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      <LegalShell footerNote={t.footer}>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#eaeaea]">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#222]">{t.h1}</h1>
            <button
              type="button"
              onClick={switchLang}
              className="shrink-0 px-3 py-1.5 border border-[#222] rounded-full text-xs font-bold hover:bg-[#222] hover:text-white transition duration-200"
            >
              {t.toggle}
            </button>
          </div>
          <p className="text-sm font-semibold text-gray-500 mb-8">
            {t.app}: <span className="text-[#222] font-bold">EL EJE</span>
            <br />
            {t.updated}: {UPDATED[lang]}
          </p>
          <div className="space-y-8 text-gray-700 leading-relaxed text-base break-words">{lang === 'es' ? <Spanish /> : <English />}</div>
        </div>
      </LegalShell>
    </>
  );
};

export default ElEjePrivacy;
