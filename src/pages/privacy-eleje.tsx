import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LegalShell from '../components/LegalShell';

type Lang = 'es' | 'en';

const UPDATED: Record<Lang, string> = { es: '9 de noviembre de 2026', en: 'November 9, 2026' };

const Ext: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
    {children}
  </a>
);

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
        desarrollada y publicada por <strong>MGM Tech Solutions</strong> ("nosotros"). EL EJE es un juego de defensa de torres que se juega en tu teléfono.
      </p>
    </Sec>

    <Sec title="2. En resumen">
      <List>
        <li>No hay cuentas, registro ni inicio de sesión, y no tenemos servidores propios. <strong>No recopilamos datos personales por nuestra cuenta.</strong></li>
        <li>El juego funciona sin conexión; tu progreso y ajustes se guardan solo en tu teléfono.</li>
        <li>La Aplicación muestra anuncios de <strong>Google AdMob</strong>; ese servicio de Google trata algunos datos como se explica en la sección 5.</li>
        <li>Los anuncios <strong>nunca interrumpen la partida</strong>: solo hay un banner en los menús, al terminar un nivel y al terminar la partida, y un anuncio con recompensa <strong>opcional</strong> que tú eliges ver.</li>
        <li>No hay compras dentro de la aplicación, ni herramientas de analítica propias, ni otros SDK de terceros.</li>
      </List>
    </Sec>

    <Sec title="3. Permisos del dispositivo">
      <p>
        EL EJE no pide acceso a tu ubicación, contactos, cámara, micrófono, fotos ni archivos. Las bibliotecas de anuncios de Google añaden estos permisos
        técnicos, que solo se usan para cargar y mostrar anuncios, medirlos y gestionar el consentimiento:
      </p>
      <List>
        <li><strong>Acceso a Internet y estado de la red.</strong></li>
        <li><strong>Identificador de publicidad</strong> (permiso <code className="text-sm bg-gray-100 px-1 rounded">AD_ID</code>) y los permisos de la API de anuncios de Android (identificador de publicidad, temas y atribución): puedes restablecer el identificador o desactivar la personalización de anuncios en los ajustes de tu dispositivo.</li>
        <li><strong>Tareas técnicas en segundo plano</strong> (mantener el dispositivo activo y servicio en primer plano), que usa el SDK de anuncios para cargarlos.</li>
      </List>
    </Sec>

    <Sec title="4. Datos guardados en tu dispositivo">
      <p>
        Para que puedas continuar tu partida, el juego guarda localmente tu progreso (oleada, créditos y configuración de la torre) y tus ajustes
        (volumen y opciones). Esta información permanece en el almacenamiento privado de la Aplicación y no nos llega. Se elimina al desinstalar la
        Aplicación o al borrar sus datos desde los ajustes de Android.
      </p>
      <p>
        Si tienes activada la copia de seguridad de Android, el propio sistema puede incluir ese progreso en tu copia de seguridad de Google; eso lo
        gestiona Google bajo su <Ext href="https://policies.google.com/privacy">política de privacidad</Ext>, no nosotros.
      </p>
    </Sec>

    <Sec title="5. Publicidad (Google AdMob) y consentimiento">
      <p>
        EL EJE muestra anuncios mediante <strong>Google AdMob</strong>: un banner pequeño en el menú principal, al terminar un nivel y al terminar la
        partida, y un anuncio con recompensa <strong>opcional</strong> (por ejemplo, para ganar créditos del juego) que solo se muestra si tú pulsas el
        botón. No hay anuncios mientras juegas ni al abrir la Aplicación.
      </p>
      <p>
        Para servir y medir anuncios, Google AdMob puede recopilar de forma automática la <strong>dirección IP</strong> (de la que puede deducir una
        ubicación aproximada), el <strong>identificador de publicidad</strong> y otros identificadores del dispositivo, <strong>interacciones</strong> con la
        Aplicación y los anuncios (inicios de la app, toques, visualizaciones de vídeo) e <strong>información de diagnóstico</strong> (rendimiento de la
        app y del SDK), con fines de publicidad, análisis y prevención del fraude. Estos datos viajan cifrados (TLS). Google actúa como responsable de ese
        tratamiento; más información en{' '}
        <Ext href="https://policies.google.com/technologies/partner-sites">Cómo usa Google los datos de sitios y apps que usan sus servicios</Ext>.
      </p>
      <List>
        <li>En el Espacio Económico Europeo, el Reino Unido y otras regiones donde la ley lo exige, te pedimos <strong>consentimiento</strong> al abrir la Aplicación mediante el formulario de Google (UMP), y no se piden anuncios hasta que lo resuelves. Puedes cambiar tu elección en <em>Opciones → Privacidad y anuncios</em>.</li>
        <li>Puedes restablecer tu identificador de publicidad o desactivar la personalización de anuncios en los ajustes de tu dispositivo (<em>Google → Anuncios</em>) o en <Ext href="https://adssettings.google.com">adssettings.google.com</Ext>.</li>
        <li>Solicitamos anuncios no dirigidos a menores y con clasificación de contenido para adolescentes o inferior.</li>
      </List>
    </Sec>

    <Sec title="6. Con quién compartimos información">
      <p>
        Nosotros no vendemos información personal ni la compartimos con terceros. El único proveedor integrado en la Aplicación es Google AdMob
        (publicidad), que trata datos como se describe arriba bajo sus propias políticas. Podríamos divulgar información si una ley o una autoridad
        competente lo exige, aunque nosotros no almacenamos información de los usuarios.
      </p>
    </Sec>

    <Sec title="7. Conservación y eliminación de datos">
      <p>
        Como no operamos servidores ni cuentas de usuario, no conservamos datos tuyos y no hay nada que eliminar de nuestro lado. Para borrar lo que
        está en tu teléfono, usa <em>Ajustes de Android → Aplicaciones → EL EJE → Almacenamiento → Borrar datos</em> o desinstala la Aplicación. Los
        datos que trata Google AdMob los gestionas desde los controles de tu cuenta de Google.
      </p>
    </Sec>

    <Sec title="8. Menores de edad">
      <p>
        EL EJE no está dirigido a menores de 13 años y no recopilamos a sabiendas información de niños. Si eres padre, madre o tutor y crees que un
        menor nos ha dado información, contáctanos para atenderlo.
      </p>
    </Sec>

    <Sec title="9. Tus derechos">
      <p>
        Dependiendo de tu país (por ejemplo, el RGPD en Europa o las leyes de privacidad de varios estados de EE. UU.), puedes tener derecho a acceder,
        corregir, eliminar o limitar el uso de tus datos y a retirar tu consentimiento. Como no almacenamos datos personales en servidores propios, no
        tenemos información tuya que consultar o corregir; para lo que trata Google (anuncios) puedes ejercer esos derechos en los controles de tu
        cuenta de Google y en <em>Opciones → Privacidad y anuncios</em>. Si tienes dudas, contáctanos.
      </p>
    </Sec>

    <Sec title="10. Cambios a esta política">
      <p>
        Si el juego cambiara de forma que afecte a tu privacidad (por ejemplo, si añadiera compras o analítica), actualizaremos esta página y la ficha
        de Google Play antes de publicar esa versión, y cambiaremos la fecha de "Última actualización".
      </p>
    </Sec>

    <Sec title="11. Contacto" last>
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
        published by <strong>MGM Tech Solutions</strong> ("we"). EL EJE is a tower-defense game played on your phone.
      </p>
    </Sec>

    <Sec title="2. In short">
      <List>
        <li>There are no accounts, sign-up or sign-in, and we have no servers of our own. <strong>We do not collect personal data ourselves.</strong></li>
        <li>The game works offline; your progress and settings are stored only on your phone.</li>
        <li>The App shows ads from <strong>Google AdMob</strong>; that Google service handles some data as explained in section 5.</li>
        <li>Ads <strong>never interrupt a match</strong>: there is only a banner in the menus, after a level and after a game, plus an <strong>optional</strong> rewarded ad that you choose to watch.</li>
        <li>There are no in-app purchases, no analytics tools of our own and no other third-party SDKs.</li>
      </List>
    </Sec>

    <Sec title="3. Device permissions">
      <p>
        EL EJE does not ask for access to your location, contacts, camera, microphone, photos or files. Google's ads libraries add these technical
        permissions, which are only used to load and show ads, measure them and manage consent:
      </p>
      <List>
        <li><strong>Internet and network state access.</strong></li>
        <li><strong>Advertising ID</strong> (<code className="text-sm bg-gray-100 px-1 rounded">AD_ID</code> permission) and the Android ads API permissions (advertising ID, topics and attribution): you can reset the ID or turn off ad personalization in your device settings.</li>
        <li><strong>Background technical tasks</strong> (keeping the device awake and a foreground service), which the ads SDK uses to load ads.</li>
      </List>
    </Sec>

    <Sec title="4. Data stored on your device">
      <p>
        So you can resume your game, the App stores your progress (wave, credits and tower setup) and your settings (volume and options) locally. This
        stays in the App's private storage and never reaches us. It is deleted when you uninstall the App or clear its data in Android settings.
      </p>
      <p>
        If Android backup is enabled on your device, the system itself may include this progress in your Google backup; that is handled by Google under
        its <Ext href="https://policies.google.com/privacy">privacy policy</Ext>, not by us.
      </p>
    </Sec>

    <Sec title="5. Advertising (Google AdMob) and consent">
      <p>
        EL EJE shows ads through <strong>Google AdMob</strong>: a small banner in the main menu, after a level and after a game, and an{' '}
        <strong>optional</strong> rewarded ad (for example, to earn in-game credits) that is only shown if you tap the button. There are no ads while
        you play or when you open the App.
      </p>
      <p>
        To serve and measure ads, Google AdMob may automatically collect the <strong>IP address</strong> (from which it may infer an approximate
        location), the <strong>advertising ID</strong> and other device identifiers, <strong>interactions</strong> with the App and ads (app launches,
        taps, video views) and <strong>diagnostic information</strong> (app and SDK performance), for advertising, analytics and fraud prevention. This
        data is encrypted in transit (TLS). Google is responsible for that processing; see{' '}
        <Ext href="https://policies.google.com/technologies/partner-sites">How Google uses information from sites or apps that use its services</Ext>.
      </p>
      <List>
        <li>In the European Economic Area, the United Kingdom and other regions where the law requires it, we ask for your <strong>consent</strong> when you open the App using Google's form (UMP), and no ads are requested until you answer. You can change your choice in <em>Options → Privacy and ads</em>.</li>
        <li>You can reset your advertising ID or turn off ad personalization in your device settings (<em>Google → Ads</em>) or at <Ext href="https://adssettings.google.com">adssettings.google.com</Ext>.</li>
        <li>We request ads that are not directed at children and are rated for teens or lower.</li>
      </List>
    </Sec>

    <Sec title="6. Who we share information with">
      <p>
        We do not sell personal information or share it with third parties. The only provider built into the App is Google AdMob (advertising), which
        handles data as described above under its own policies. We might disclose information if required by law or a competent authority, although we
        do not store user information.
      </p>
    </Sec>

    <Sec title="7. Retention and deletion">
      <p>
        Because we run no servers or user accounts, we hold no data about you and there is nothing to delete on our side. To erase what is on your phone,
        use <em>Android Settings → Apps → EL EJE → Storage → Clear data</em> or uninstall the App. Data handled by Google AdMob is managed from your
        Google account controls.
      </p>
    </Sec>

    <Sec title="8. Children">
      <p>
        EL EJE is not directed at children under 13 and we do not knowingly collect information from children. If you are a parent or guardian and
        believe a child has given us information, contact us so we can address it.
      </p>
    </Sec>

    <Sec title="9. Your rights">
      <p>
        Depending on where you live (for example GDPR in Europe or several US state privacy laws), you may have the right to access, correct, delete or
        restrict the use of your data and to withdraw consent. Since we do not store personal data on servers of our own, we have no information about
        you to access or correct; for what Google handles (ads) you can exercise those rights in your Google account controls and in{' '}
        <em>Options → Privacy and ads</em>. If you have questions, contact us.
      </p>
    </Sec>

    <Sec title="10. Changes to this policy">
      <p>
        If the game changes in a way that affects your privacy (for example, by adding purchases or analytics), we will update this page and the Google
        Play listing before releasing that version, and change the "Last updated" date.
      </p>
    </Sec>

    <Sec title="11. Contact" last>
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
