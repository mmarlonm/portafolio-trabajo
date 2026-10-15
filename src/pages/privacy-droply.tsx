import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LegalShell from '../components/LegalShell';

type Lang = 'es' | 'en';

const UPDATED: Record<Lang, string> = { es: '15 de octubre de 2026', en: 'October 15, 2026' };

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
        Esta política describe cómo la aplicación móvil <strong>Droply</strong> (identificador de paquete{' '}
        <code className="text-sm bg-gray-100 px-1 rounded">com.mgmtechsolutions.droply</code>, "la Aplicación") trata la información. La Aplicación es
        desarrollada y publicada por <strong>MGM Tech Solutions</strong> ("nosotros"). Droply muestra tus notificaciones con efectos animados sobre la
        pantalla del teléfono.
      </p>
    </Sec>

    <Sec title="2. En resumen">
      <List>
        <li>El contenido de tus notificaciones se procesa <strong>solo en tu teléfono</strong>: no se guarda y no se envía a ningún servidor.</li>
        <li>No hay cuentas, registro ni servidores propios. No recopilamos datos personales por nuestra cuenta.</li>
        <li>La Aplicación muestra anuncios de <strong>Google AdMob</strong> y vende efectos mediante <strong>Google Play</strong>; esos servicios de Google tratan algunos datos como se explica abajo.</li>
        <li>Nunca mostramos anuncios sobre tu pantalla de bloqueo ni dentro de tus notificaciones.</li>
      </List>
    </Sec>

    <Sec title="3. Notificaciones: se procesan solo en tu teléfono">
      <p>
        Para animar tus notificaciones, Droply necesita el permiso de <strong>Acceso a notificaciones</strong> de Android, que tú concedes
        manualmente en los ajustes del sistema después de leer un aviso dentro de la Aplicación. Con ese permiso, cuando llega una notificación,
        la Aplicación lee el nombre de la aplicación que la envía, su título y su texto para dibujarla en pantalla.
      </p>
      <List>
        <li><strong>No se guardan:</strong> ese contenido permanece únicamente en la memoria del teléfono mientras la tarjeta está en pantalla y se descarta al cerrarla.</li>
        <li><strong>No se envían</strong> a ningún servidor, nuestro ni de terceros, y no se usan para publicidad, análisis ni perfiles.</li>
        <li>Puedes <strong>excluir aplicaciones</strong> en <em>Ajustes → Apps bloqueadas</em>: Droply ignora sus notificaciones.</li>
        <li>Puedes <strong>retirar el permiso</strong> en cualquier momento desde los ajustes de Android (<em>Acceso a notificaciones</em>).</li>
        <li>Al descartar una tarjeta, Droply pide a Android que también borre esa notificación de la barra del teléfono; no hace nada más con ella.</li>
      </List>
    </Sec>

    <Sec title="4. Permisos del dispositivo">
      <p>Droply solicita únicamente los permisos que necesita para su función:</p>
      <List>
        <li><strong>Acceso a notificaciones:</strong> leer las notificaciones entrantes para animarlas (ver sección 3).</li>
        <li><strong>Mostrar sobre otras aplicaciones:</strong> dibujar la animación encima de la pantalla actual, incluida la pantalla de bloqueo.</li>
        <li><strong>Intención de pantalla completa:</strong> mostrar la animación cuando el teléfono está bloqueado o con la pantalla apagada. En Android 14 y posteriores, el sistema te pide concederlo manualmente.</li>
        <li><strong>Mantener el dispositivo activo:</strong> encender la pantalla y mantenerla encendida mientras dura la animación.</li>
        <li><strong>Publicar notificaciones:</strong> Droply publica una notificación propia, silenciosa (sin sonido ni vibración), que Android necesita para mostrar la animación a pantalla completa.</li>
        <li><strong>Acceso a Internet y estado de la red:</strong> los agregan Google Play y el SDK de anuncios, y solo se usan para mostrar anuncios y procesar compras.</li>
      </List>
      <p>Droply no pide acceso a tus contactos, ubicación, cámara, micrófono, fotos ni archivos.</p>
    </Sec>

    <Sec title="5. Datos guardados en tu dispositivo">
      <p>
        Droply guarda localmente tus preferencias: efecto elegido, tiempo en pantalla, posición de la gota, aplicaciones bloqueadas, efectos
        desbloqueados y la fecha de vencimiento de las pruebas de 24 horas. Estos datos no salen de tu teléfono y se eliminan al borrar los datos
        de la Aplicación o desinstalarla. La Aplicación no crea copias de seguridad en la nube de estos datos.
      </p>
    </Sec>

    <Sec title="6. Compras dentro de la aplicación">
      <p>
        Los efectos premium se compran mediante <strong>Google Play</strong>. Google procesa el pago y nosotros solo recibimos la confirmación de
        qué efectos compraste. No tenemos acceso a tu tarjeta ni a tus datos de pago. Aplican los términos y la{' '}
        <Ext href="https://policies.google.com/privacy">política de privacidad de Google</Ext>.
      </p>
    </Sec>

    <Sec title="7. Publicidad (Google AdMob) y consentimiento">
      <p>
        Droply muestra anuncios mediante <strong>Google AdMob</strong>: un banner fijo en la parte inferior de la aplicación (que se oculta si compras un efecto) y un
        anuncio con recompensa, <strong>opcional</strong>, que permite probar un efecto premium durante 24 horas. No hay anuncios sobre la pantalla
        de bloqueo, en la animación de las notificaciones ni dentro de ellas.
      </p>
      <p>
        Para servir y medir anuncios, Google AdMob puede recopilar el <strong>identificador de publicidad</strong> del dispositivo, la dirección IP
        (de la que puede deducir una ubicación aproximada), información del dispositivo y de la aplicación, y datos sobre la interacción con los
        anuncios. Google actúa como responsable de ese tratamiento; más información en{' '}
        <Ext href="https://policies.google.com/technologies/partner-sites">Cómo usa Google los datos de sitios y apps que usan sus servicios</Ext>.
      </p>
      <List>
        <li>En el Espacio Económico Europeo, el Reino Unido y otras regiones donde la ley lo exige, te pedimos <strong>consentimiento</strong> al abrir la Aplicación mediante el formulario de Google (UMP). Puedes cambiar tu elección en <em>Ajustes → Privacidad y anuncios</em>.</li>
        <li>Puedes restablecer tu identificador de publicidad o desactivar la personalización de anuncios en los ajustes de tu dispositivo (<em>Google → Anuncios</em>) o en <Ext href="https://adssettings.google.com">adssettings.google.com</Ext>.</li>
        <li>Solicitamos anuncios no dirigidos a menores y con clasificación de contenido para adolescentes o inferior.</li>
      </List>
    </Sec>

    <Sec title="8. Con quién compartimos información">
      <p>
        Nosotros no vendemos información personal ni la compartimos con terceros. Los únicos proveedores integrados en la Aplicación son Google Play
        (compras) y Google AdMob (publicidad), que tratan datos como se describe arriba bajo sus propias políticas. Podemos divulgar información si una ley
        o una autoridad competente lo exige, aunque nosotros no almacenamos información de los usuarios.
      </p>
    </Sec>

    <Sec title="9. Conservación y eliminación de datos">
      <p>
        Como no operamos servidores ni cuentas de usuario, no conservamos datos tuyos y no hay nada que eliminar de nuestro lado. Para borrar lo
        que está en tu teléfono, usa <em>Ajustes de Android → Aplicaciones → Droply → Almacenamiento → Borrar datos</em> o desinstala la Aplicación. Los
        datos que tratan Google AdMob y Google Play los gestionas desde los controles de tu cuenta de Google.
      </p>
    </Sec>

    <Sec title="10. Seguridad">
      <p>
        Al no transmitir ni almacenar el contenido de tus notificaciones fuera del teléfono, reducimos el riesgo al mínimo. Aun así, ningún
        sistema es 100 % seguro, por lo que no podemos garantizar una seguridad absoluta.
      </p>
    </Sec>

    <Sec title="11. Menores de edad">
      <p>
        Droply no está dirigida a menores de 13 años y no recopilamos a sabiendas información de niños. Si eres padre, madre o tutor y crees que un
        menor nos ha dado información, contáctanos para atenderlo.
      </p>
    </Sec>

    <Sec title="12. Tus derechos">
      <p>
        Dependiendo de tu país (por ejemplo, el RGPD en Europa o las leyes de privacidad de varios estados de EE. UU.), puedes tener derecho a
        acceder, corregir, eliminar o limitar el uso de tus datos y a retirar tu consentimiento. Como no almacenamos datos personales en
        servidores propios, no tenemos información tuya que consultar o corregir; para lo que trate Google (anuncios, pagos) puedes ejercer esos
        derechos en los controles de tu cuenta de Google. Si tienes dudas, contáctanos.
      </p>
    </Sec>

    <Sec title="13. Cambios a esta política">
      <p>
        Podemos actualizar esta política. Publicaremos la nueva versión en esta misma dirección y cambiaremos la fecha de "Última actualización".
        Los cambios entran en vigor al publicarse.
      </p>
    </Sec>

    <Sec title="14. Contacto" last>
      <p>
        MGM Tech Solutions. Para preguntas sobre esta política o sobre Droply, escríbenos desde el formulario de contacto de nuestro portafolio:{' '}
        <ContactLink label="mmarlonm.github.io/portafolio-trabajo" /> (botón <em>Contáctame</em>). También puedes ver la{' '}
        <Link href="/droply/" className="text-blue-600 hover:underline font-semibold">página de soporte de Droply</Link>.
      </p>
    </Sec>
  </>
);

const English: React.FC = () => (
  <>
    <Sec title="1. Who we are">
      <p>
        This policy describes how the mobile app <strong>Droply</strong> (package name{' '}
        <code className="text-sm bg-gray-100 px-1 rounded">com.mgmtechsolutions.droply</code>, "the App") handles information. The App is developed
        and published by <strong>MGM Tech Solutions</strong> ("we"). Droply shows your notifications with animated effects on your phone's screen.
      </p>
    </Sec>

    <Sec title="2. In short">
      <List>
        <li>The content of your notifications is processed <strong>only on your phone</strong>: it is not stored and not sent to any server.</li>
        <li>There are no accounts, sign-ups or servers of our own. We do not collect personal data ourselves.</li>
        <li>The App shows ads from <strong>Google AdMob</strong> and sells effects through <strong>Google Play</strong>; those Google services handle some data as explained below.</li>
        <li>We never show ads over your lock screen or inside your notifications.</li>
      </List>
    </Sec>

    <Sec title="3. Notifications: processed only on your phone">
      <p>
        To animate your notifications, Droply needs Android's <strong>Notification access</strong> permission, which you grant manually in the
        system settings after reading a notice inside the App. With it, when a notification arrives, the App reads the name of the app that sent
        it, its title and its text in order to draw it on screen.
      </p>
      <List>
        <li><strong>Not stored:</strong> that content stays only in the phone's memory while the card is on screen and is discarded when it closes.</li>
        <li><strong>Not sent</strong> to any server, ours or a third party's, and not used for advertising, analytics or profiling.</li>
        <li>You can <strong>exclude apps</strong> in <em>Settings → Blocked apps</em>: Droply ignores their notifications.</li>
        <li>You can <strong>revoke the permission</strong> at any time from Android's settings (<em>Notification access</em>).</li>
        <li>When you dismiss a card, Droply asks Android to also clear that notification from the status bar; it does nothing else with it.</li>
      </List>
    </Sec>

    <Sec title="4. Device permissions">
      <p>Droply only requests the permissions it needs to work:</p>
      <List>
        <li><strong>Notification access:</strong> read incoming notifications to animate them (see section 3).</li>
        <li><strong>Display over other apps:</strong> draw the animation on top of the current screen, including the lock screen.</li>
        <li><strong>Full-screen intent:</strong> show the animation when the phone is locked or the screen is off. On Android 14 and later the system asks you to grant it manually.</li>
        <li><strong>Keep the device awake:</strong> turn the screen on and keep it on while the animation plays.</li>
        <li><strong>Post notifications:</strong> Droply posts a silent notification of its own (no sound or vibration) that Android needs in order to show the animation full screen.</li>
        <li><strong>Internet and network state:</strong> added by Google Play and the ads SDK; used only to show ads and process purchases.</li>
      </List>
      <p>Droply does not ask for access to your contacts, location, camera, microphone, photos or files.</p>
    </Sec>

    <Sec title="5. Data stored on your device">
      <p>
        Droply saves your preferences locally: chosen effect, on-screen time, drop position, blocked apps, unlocked effects and the expiry time of
        24-hour trials. This data never leaves your phone and is deleted when you clear the App's data or uninstall it. The App does not back this
        data up to the cloud.
      </p>
    </Sec>

    <Sec title="6. In-app purchases">
      <p>
        Premium effects are bought through <strong>Google Play</strong>. Google processes the payment and we only receive confirmation of which
        effects you purchased. We have no access to your card or payment details. Google's terms and{' '}
        <Ext href="https://policies.google.com/privacy">privacy policy</Ext> apply.
      </p>
    </Sec>

    <Sec title="7. Advertising (Google AdMob) and consent">
      <p>
        Droply shows ads through <strong>Google AdMob</strong>: a banner fixed at the bottom of the app (hidden if you buy an effect) and an{' '}
        <strong>optional</strong> rewarded ad that lets you try a premium effect for 24 hours. There are no ads over the lock screen, in the
        notification animation or inside notifications.
      </p>
      <p>
        To serve and measure ads, Google AdMob may collect the device's <strong>advertising ID</strong>, the IP address (from which it may infer an
        approximate location), device and app information, and data about how you interact with ads. Google is responsible for that processing; see{' '}
        <Ext href="https://policies.google.com/technologies/partner-sites">How Google uses information from sites or apps that use its services</Ext>.
      </p>
      <List>
        <li>In the European Economic Area, the United Kingdom and other regions where the law requires it, we ask for your <strong>consent</strong> when you open the App using Google's form (UMP). You can change your choice in <em>Settings → Privacy and ads</em>.</li>
        <li>You can reset your advertising ID or turn off ad personalization in your device settings (<em>Google → Ads</em>) or at <Ext href="https://adssettings.google.com">adssettings.google.com</Ext>.</li>
        <li>We request ads that are not directed at children and are rated for teens or lower.</li>
      </List>
    </Sec>

    <Sec title="8. Who we share information with">
      <p>
        We do not sell personal information or share it with third parties. The only providers built into the App are Google Play (purchases) and
        Google AdMob (advertising), which handle data as described above under their own policies. We may disclose information if required by law or
        a competent authority, although we do not store user information.
      </p>
    </Sec>

    <Sec title="9. Retention and deletion">
      <p>
        Because we run no servers or user accounts, we hold no data about you and there is nothing to delete on our side. To erase what is on your
        phone, use <em>Android Settings → Apps → Droply → Storage → Clear data</em> or uninstall the App. Data handled by Google AdMob and Google Play
        is managed from your Google account controls.
      </p>
    </Sec>

    <Sec title="10. Security">
      <p>
        By not transmitting or storing the content of your notifications outside the phone, we keep risk to a minimum. Even so, no system is 100%
        secure, so we cannot guarantee absolute security.
      </p>
    </Sec>

    <Sec title="11. Children">
      <p>
        Droply is not directed at children under 13 and we do not knowingly collect information from children. If you are a parent or guardian and
        believe a child has given us information, contact us so we can address it.
      </p>
    </Sec>

    <Sec title="12. Your rights">
      <p>
        Depending on where you live (for example GDPR in Europe or several US state privacy laws), you may have the right to access, correct, delete
        or restrict the use of your data and to withdraw consent. Since we do not store personal data on servers of our own, we have no information
        about you to access or correct; for what Google handles (ads, payments) you can exercise those rights in your Google account controls. If you
        have questions, contact us.
      </p>
    </Sec>

    <Sec title="13. Changes to this policy">
      <p>
        We may update this policy. We will post the new version at this same address and change the "Last updated" date. Changes take effect when
        published.
      </p>
    </Sec>

    <Sec title="14. Contact" last>
      <p>
        MGM Tech Solutions. For questions about this policy or Droply, write to us through the contact form on our portfolio:{' '}
        <ContactLink label="mmarlonm.github.io/portafolio-trabajo" /> (<em>Contáctame</em> button). You can also visit the{' '}
        <Link href="/droply/" className="text-blue-600 hover:underline font-semibold">Droply support page</Link>.
      </p>
    </Sec>
  </>
);

const COPY: Record<Lang, { title: string; desc: string; h1: string; updated: string; app: string; footer: string; toggle: string }> = {
  es: {
    title: 'Política de Privacidad - Droply',
    desc: 'Política de privacidad de Droply, la aplicación que anima tus notificaciones.',
    h1: 'Política de Privacidad',
    updated: 'Última actualización',
    app: 'Aplicación',
    footer: 'Desarrollo de apps móviles y software a la medida.',
    toggle: 'English',
  },
  en: {
    title: 'Privacy Policy - Droply',
    desc: 'Privacy policy for Droply, the app that animates your notifications.',
    h1: 'Privacy Policy',
    updated: 'Last updated',
    app: 'App',
    footer: 'Mobile apps and custom software development.',
    toggle: 'Español',
  },
};

const DroplyPrivacy: React.FC = () => {
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
            {t.app}: <span className="text-[#222] font-bold">Droply</span>
            <br />
            {t.updated}: {UPDATED[lang]}
          </p>
          <div className="space-y-8 text-gray-700 leading-relaxed text-base break-words">{lang === 'es' ? <Spanish /> : <English />}</div>
        </div>
      </LegalShell>
    </>
  );
};

export default DroplyPrivacy;
