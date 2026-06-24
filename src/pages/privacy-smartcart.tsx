import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const SmartCartPrivacy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidad - SmartCart</title>
        <meta name="description" content="Política de Privacidad de la aplicación SmartCart (Lista de compras de supermercado)." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-[#f6f6f2] text-[#222] font-sans antialiased">
        {/* Header simple */}
        <header className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#eaeaea]">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">●</span>
            <span className="text-lg font-black tracking-wide uppercase">Marlon</span>
          </div>
          <Link href="/" className="px-4 py-2 bg-[#222] text-[#fff] rounded-full text-sm font-bold shadow-sm hover:bg-[#444] transition duration-200">
            ← Volver al Portafolio
          </Link>
        </header>

        {/* Content Section */}
        <main className="max-w-3xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#eaeaea]">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-[#222]">
              Política de Privacidad
            </h1>
            <p className="text-sm font-semibold text-gray-500 mb-8">
              Aplicación: <span className="text-[#222] font-bold">SmartCart (Lista de Mercado)</span><br />
              Última actualización: 24 de junio de 2026
            </p>

            <div className="space-y-8 text-gray-700 leading-relaxed text-base">
              
              <section>
                <h2 className="text-xl font-bold text-[#222] mb-3">1. Información General</h2>
                <p>
                  Esta política de privacidad rige el uso de la aplicación móvil <strong>SmartCart</strong> ("la Aplicación") creada por <strong>Marlon</strong> como una aplicación comercial con soporte publicitario y servicios opcionales de sincronización. Este servicio se proporciona tal cual y está diseñado para ser utilizado de acuerdo con los términos descritos en este documento.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#222] mb-3">2. Recopilación y Uso de la Información</h2>
                <p className="mb-4">
                  Para ofrecer una mejor experiencia al usar nuestro Servicio, la Aplicación puede requerir que nos proporcione cierta información de identificación personal, o hacer uso de funciones específicas de su dispositivo. La información solicitada se manejará bajo las siguientes pautas:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Almacenamiento Local (SQLite & AsyncStorage):</strong> Todos los datos sobre tus listas de compras, precios, productos personalizados y configuraciones locales se guardan de forma segura y directa en la memoria física de tu dispositivo. Estos datos son completamente privados y no se comparten de forma externa a menos que actives explícitamente la sincronización en línea.
                  </li>
                  <li>
                    <strong>Sincronización en la Nube (Supabase):</strong> Si decides activar y registrarte para las funciones de respaldo y sincronización en línea de tus finanzas o listas, los datos necesarios para proporcionar este servicio se transmitirán y guardarán cifrados en servidores gestionados de forma segura por <strong>Supabase</strong>.
                  </li>
                  <li>
                    <strong>Servicios de Publicidad (Google AdMob):</strong> La Aplicación utiliza servicios de terceros que pueden recopilar información utilizada para identificar tu dispositivo de forma anónima con el fin de proporcionar anuncios personalizados. Puedes ver la política de privacidad del proveedor de servicios de publicidad aquí:
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline block mt-1 font-semibold"
                    >
                      → Política de Privacidad de Google AdMob
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#222] mb-3">3. Permisos del Dispositivo</h2>
                <p className="mb-3">
                  Para que las funciones avanzadas de la Aplicación operen correctamente, se solicitan los siguientes permisos en su dispositivo Android:
                </p>
                <div className="space-y-3 pl-4 border-l-2 border-[#eaeaea]">
                  <p>
                    <strong>Cámara (CAMERA):</strong> Utilizado de forma exclusiva cuando abres el lector de códigos de barras para buscar o añadir productos rápidamente a tu lista. Las imágenes capturadas por la cámara son procesadas en tiempo real de manera local en el procesador del dispositivo y nunca se guardan, transmiten ni comparten con servidores externos.
                  </p>
                  <p>
                    <strong>Grabar Audio (RECORD_AUDIO):</strong> Utilizado únicamente para permitir la entrada y dictado por voz, facilitando la adición de productos a las listas mediante voz sin tener que escribir. La aplicación no graba, almacena ni transmite el audio fuera del dispositivo.
                  </p>
                  <p>
                    <strong>Vibración (VIBRATE):</strong> Utilizado para emitir pequeñas señales de vibración (hápticas) como respuesta interactiva y confirmación táctil al escanear correctamente un código de barras o presionar ciertos elementos de la interfaz.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#222] mb-3">4. Proveedores de Servicios de Terceros</h2>
                <p className="mb-2">
                  Podemos emplear a empresas e individuos de terceros debido a las siguientes razones: facilitar nuestro Servicio, prestar el Servicio en nuestro nombre o analizarnos en cómo se utiliza nuestro Servicio. Queremos informar a los usuarios de este Servicio que estos terceros tienen acceso a su información personal únicamente para realizar las tareas asignadas en nuestro nombre y están obligados a no divulgarla ni utilizarla para ningún otro fin.
                </p>
                <p>
                  Los servicios externos integrados en la app son:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Google Play Services</li>
                  <li>Google AdMob (Anuncios)</li>
                  <li>Supabase (Base de datos y Autenticación en línea)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#222] mb-3">5. Seguridad de los Datos</h2>
                <p>
                  Valoramos su confianza al proporcionarnos su información personal, por lo que nos esforzamos por utilizar medios comercialmente aceptables para protegerla. Sin embargo, recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro y confiable, por lo que no podemos garantizar su seguridad absoluta.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#222] mb-3">6. Enlaces a Otros Sitios</h2>
                <p>
                  Este Servicio puede contener enlaces a otros sitios. Si hace clic en un enlace de un tercero, será dirigido a ese sitio. Tenga en cuenta que estos sitios externos no son operados por nosotros. Por lo tanto, le recomendamos encarecidamente que revise la Política de privacidad de estos sitios web, ya que no tenemos control ni asumimos ninguna responsabilidad por el contenido o las prácticas de privacidad de ningún sitio o servicio de terceros.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#222] mb-3">7. Privacidad de los Menores</h2>
                <p>
                  Estos Servicios no están dirigidos a personas menores de 13 años. No recopilamos a sabiendas información de identificación personal de niños menores de 13 años. En el caso de que descubramos que un niño menor de 13 años nos ha proporcionado información personal, la eliminaremos inmediatamente de nuestros servidores. Si usted es padre o tutor y tiene conocimiento de que su hijo nos ha proporcionado información personal, comuníquese con nosotros para realizar las acciones necesarias.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#222] mb-3">8. Cambios a esta Política de Privacidad</h2>
                <p>
                  Es posible que actualicemos nuestra Política de privacidad periódicamente. Por lo tanto, se recomienda revisar esta página de vez en cuando para ver si hay cambios. Le notificaremos cualquier cambio publicando la nueva Política de privacidad en esta página. Estos cambios entran en vigencia inmediatamente después de su publicación.
                </p>
              </section>

              <section className="pt-6 border-t border-[#eaeaea]">
                <h2 className="text-xl font-bold text-[#222] mb-3">9. Contacto</h2>
                <p>
                  Si tiene alguna pregunta o sugerencia sobre nuestra Política de privacidad, no dude en ponerse en contacto a través de la sección de contacto en mi portafolio web o escribiendo directamente a mi correo electrónico de desarrollo.
                </p>
              </section>

            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-[#eaeaea] py-8 text-center text-sm text-gray-500">
          <div className="max-w-4xl mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} Marlon. Todos los derechos reservados.</p>
            <p className="mt-1">Desarrollador Fullstack & Creador de SmartCart.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SmartCartPrivacy;
