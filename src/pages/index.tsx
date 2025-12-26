import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

// ...existing code...

const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const galleryImages = [
    { src: '/jringenieria1.png', alt: 'JR Ingeniería 1' },
    { src: '/jringenieria3.png', alt: 'JR Ingeniería 3' },
    { src: '/jringenieria4.png', alt: 'JR Ingeniería 4' },
    { src: '/ternium1.png', alt: 'Ternium 1' },
    { src: '/ternium2.png', alt: 'Ternium 2' },
    { src: '/ternium3.png', alt: 'Ternium 3' },
    { src: '/sierra-negra1.png', alt: 'Sierra Negra 1' },
    { src: '/sierra-negra2.png', alt: 'Sierra Negra 2' },
    { src: '/utcv.jpg', alt: 'UTCV Universidad' },
    { src: '/bepensa.png', alt: 'Bepensa' },
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const openProcessModal = () => {
    setShowProcessModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProcessModal = () => {
    setShowProcessModal(false);
    document.body.style.overflow = 'unset';
  };

  const openContactModal = () => {
    setShowContactModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContactModal = () => {
    setShowContactModal(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitStatus('idle');
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => closeContactModal(), 2000);
  } catch (error) {
    console.error('EmailJS error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          closeModal();
        }
        if (showProcessModal) {
          closeProcessModal();
        }
        if (showContactModal) {
          closeContactModal();
        }
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedImage, showProcessModal, showContactModal]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="portfolio-wrapper">
        <main className="main">
          <section className="hero-section custom-hero">
            <div className="custom-hero-left">
              <div className="custom-header-row">
                <span className="custom-header-dot">●</span>
                <span className="custom-header-name">Marlon</span>
              </div>
              <div className="custom-hero-content">
                <h2 className="custom-hero-intro">Hola, soy Marlon</h2>
                <h1 className="custom-hero-title">
                  <span className="custom-hero-title-big">Fullstack</span>
                  <span className="custom-hero-title-script"> Developer</span>
                </h1>
                <p className="custom-hero-description">
                  Desarrollo soluciones completas como fullstack developer: desde el backend robusto hasta interfaces modernas y funcionales, creando aplicaciones que resuelven problemas reales y potencian tu negocio.
                </p>
                <button className="custom-hero-contact-btn" onClick={openContactModal}>Contáctame <span className="custom-hero-arrow">→</span></button>
              </div>
              <div className="custom-hero-tags-row">
                <span className="custom-hero-tag">Desarrollo Web</span>
                <span className="custom-hero-tag">Aplicaciones Móviles</span>
                <span className="custom-hero-tag">UI/UX Moderno</span>
                <span className="custom-hero-tag">Soluciones a Medida</span>
              </div>
            </div>
            <div className="custom-hero-image-bg">
              <Image
                src="/profile-image.png"
                alt="Proyecto"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover', borderRadius: '24px' }}
              />

            </div>
            <div className="custom-hero-right">
              <div className="custom-hero-stats">
                <div><span className="custom-hero-stat-value">7+</span><span className="custom-hero-stat-label">Años de experiencia</span></div>
                <div><span className="custom-hero-stat-value">8+</span><span className="custom-hero-stat-label">Proyectos realizados</span></div>
                <div><span className="custom-hero-stat-value">Fullstack</span><span className="custom-hero-stat-label">Developer</span></div>
                <div><span className="custom-hero-stat-value">100%</span><span className="custom-hero-stat-label">Compromiso</span></div>
              </div>
            </div>
          </section>
          <section className="about-section">
            <div className="about-left">
              <h2 className="about-title">CREANDO EXPERIENCIAS DIGITALES ÚNICAS</h2>
            </div>
            <div className="about-right">
              <p className="about-description">
                Soy Marlon, desarrollador fullstack apasionado por crear aplicaciones web y móviles que marcan la diferencia.
              </p>
              <p className="about-details">
                Me especializo en el desarrollo de soluciones tecnológicas modernas, adaptadas a las necesidades de cada cliente y enfocadas en la mejor experiencia de usuario.
              </p>
            </div>
          </section>
          <section className="portfolio-section">
            <h2 className="portfolio-title">PORTFOLIO</h2>
            <div className="portfolio-cards">
              <div className="portfolio-card">
                <Image src="/jringenieria1.png" alt="JR Ingeniería" width={600} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ borderRadius: '24px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                <div className="portfolio-card-info">
                  <span className="portfolio-card-title">JR INGENIERÍA</span>
                  <span className="portfolio-card-desc">Sistema de gestión integral para empresa de ingeniería</span>
                  {/* <span className="portfolio-card-tag">Desarrollo Web</span> */}
                </div>
              </div>
              <div className="portfolio-card">
                <Image src="/ternium1.png" alt="Ternium" width={600} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ borderRadius: '24px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                <div className="portfolio-card-info">
                  <span className="portfolio-card-title">TERNIUM</span>
                  <span className="portfolio-card-desc">Solución tecnológica para empresa siderúrgica</span>
                  {/* <span className="portfolio-card-tag">Desarrollo Web</span> */}
                </div>
              </div>
              <div className="portfolio-card">
                <Image src="/sierra-negra1.png" alt="Sierra Negra" width={600} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ borderRadius: '24px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                <div className="portfolio-card-info">
                  <span className="portfolio-card-title">SIERRA NEGRA</span>
                  <span className="portfolio-card-desc">Plataforma digital para gestión de proyectos</span>
                  {/* <span className="portfolio-card-tag">Desarrollo Web</span> */}
                </div>
              </div>
              <div className="portfolio-card">
                <Image src="/utcv.jpg" alt="UTCV Universidad" width={600} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ borderRadius: '24px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                <div className="portfolio-card-info">
                  <span className="portfolio-card-title">UTCV UNIVERSIDAD</span>
                  <span className="portfolio-card-desc">Sistema de gestión académica para universidad</span>
                  {/* <span className="portfolio-card-tag">Desarrollo Web</span> */}
                </div>
              </div>
              <div className="portfolio-card">
                <Image src="/bepensa.png" alt="Bepensa" width={600} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ borderRadius: '24px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                <div className="portfolio-card-info">
                  <span className="portfolio-card-title">BEPENSA</span>
                  <span className="portfolio-card-desc">Solución tecnológica para empresa de distribución</span>
                  {/* <span className="portfolio-card-tag">Desarrollo Web</span> */}
                </div>
              </div>
            </div>
          </section>
          <section className="skills-section">
            <div className="skills-left">
              <h2 className="skills-title">TECNOLOGÍAS Y HABILIDADES</h2>
              <p className="skills-description">
                Experto en desarrollo fullstack con experiencia en backend, frontend, bases de datos y cloud. Utilizo las mejores herramientas y frameworks para crear soluciones robustas y escalables.
              </p>
              <button className="contact-btn" onClick={openContactModal}>Contáctame <span className="arrow">→</span></button>
            </div>
            <div className="skills-right">
              <div className="skills-grid">
                <div className="skill-item"><span className="skill-value">Node.js</span><span className="skill-label">Backend</span></div>
                <div className="skill-item"><span className="skill-value">Web API .NET</span><span className="skill-label">Servicios</span></div>
                <div className="skill-item"><span className="skill-value">MongoDB</span><span className="skill-label">NoSQL</span></div>
                <div className="skill-item"><span className="skill-value">SQL Server</span><span className="skill-label">Relacional</span></div>
                <div className="skill-item"><span className="skill-value">React</span><span className="skill-label">Frontend</span></div>
                <div className="skill-item"><span className="skill-value">Angular</span><span className="skill-label">Frontend</span></div>
                <div className="skill-item"><span className="skill-value">Git</span><span className="skill-label">Control de versiones</span></div>
                <div className="skill-item"><span className="skill-value">Azure Functions</span><span className="skill-label">Cloud</span></div>
                <div className="skill-item"><span className="skill-value">SignalR</span><span className="skill-label">Realtime</span></div>
                <div className="skill-item"><span className="skill-value">Material Design</span><span className="skill-label">UI</span></div>
                <div className="skill-item"><span className="skill-value">Bootstrap</span><span className="skill-label">UI</span></div>
                <div className="skill-item"><span className="skill-value">npm</span><span className="skill-label">Paquetería</span></div>
                <div className="skill-item"><span className="skill-value">SharePoint</span><span className="skill-label">Colaboración</span></div>
              </div>
            </div>
          </section>
          <section className="process-section">
            <h2 className="process-title">MI PROCESO DE TRABAJO</h2>
            <div className="process-content">
              <div className="process-steps">
                <div className="process-step"><strong>ANÁLISIS Y PLANIFICACIÓN</strong><br />Entiendo tus necesidades y defino la mejor estrategia tecnológica siguiendo estándares CMMI.</div>
                <div className="process-step"><strong>DESARROLLO Y DISEÑO</strong><br />Construyo la solución con las mejores prácticas, metodologías ágiles y procesos CMMI para garantizar la más alta calidad.</div>
                <div className="process-step"><strong>CONTROL DE CALIDAD CMMI</strong><br />Aplico procesos CMMI nivel 5+ para asegurar gestión de calidad, métricas y mejora continua en cada etapa del proyecto.</div>
                <div className="process-step"><strong>ENTREGA Y SOPORTE</strong><br />Aseguro la calidad mediante pruebas exhaustivas, documentación completa y te acompaño en la implementación con soporte continuo.</div>
              </div>
              <div className="process-image">
                <Image src="/proceso-trabajo.svg" alt="Proceso de Trabajo CMMI" width={320} height={400} sizes="(max-width: 768px) 100vw, 320px" style={{ borderRadius: '24px', objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '320px', display: 'block' }} />
              </div>
            </div>
          </section>
          <section className="gallery-section">
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => openModal(image.src)}
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={200}
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 200px"
                    style={{ borderRadius: '16px', objectFit: 'cover', width: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>
          </section>
          
          {/* Image Modal */}
          {selectedImage && (
            <div className="image-modal-overlay" onClick={closeModal}>
              <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="image-modal-close" onClick={closeModal}>×</button>
                <Image
                  src={selectedImage}
                  alt="Imagen ampliada"
                  width={1200}
                  height={800}
                  sizes="100vw"
                  style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }}
                />
              </div>
            </div>
          )}
          <section className="faq-section">
            <h2 className="faq-title">PREGUNTAS FRECUENTES</h2>
            <ul className="faq-list">
              <li>¿Cuál es tu proceso de trabajo?</li>
              <li>¿Cuánto tiempo tarda un proyecto?</li>
              <li>¿Qué entregables recibo?</li>
              <li>¿Ofreces soporte después de la entrega?</li>
              <li>¿Cómo puedo iniciar mi proyecto?</li>
            </ul>
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <button className="process-info-btn" onClick={openProcessModal}>
                Conoce mi Proceso de Desarrollo
              </button>
            </div>
          </section>
          
          {/* Process Modal */}
          {showProcessModal && (
            <div className="process-modal-overlay" onClick={closeProcessModal}>
              <div className="process-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="process-modal-close" onClick={closeProcessModal}>×</button>
                <h2 className="process-modal-title">PROCESO DE DESARROLLO DE SOFTWARE</h2>
                <div className="process-modal-body">
                  <div className="process-modal-step">
                    <div className="process-modal-step-number">1</div>
                    <div className="process-modal-step-content">
                      <h3>ANÁLISIS Y PLANIFICACIÓN</h3>
                      <p>
                        Primero, nos reunimos contigo para entender completamente tu negocio, tus necesidades y tus objetivos. 
                        Analizamos qué problema quieres resolver o qué oportunidad quieres aprovechar. Luego, creamos un plan 
                        detallado que incluye qué funcionalidades tendrá tu software, cómo se verá, cuánto tiempo tomará 
                        desarrollarlo y cuál será la inversión. Es como crear los planos antes de construir una casa: todo queda 
                        claro desde el inicio para evitar sorpresas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-modal-step">
                    <div className="process-modal-step-number">2</div>
                    <div className="process-modal-step-content">
                      <h3>DESARROLLO Y DISEÑO</h3>
                      <p>
                        Aquí es donde construimos tu software. Primero diseñamos cómo se verá y cómo funcionará, creando 
                        prototipos que puedes ver y probar antes de que esté terminado. Luego, nuestros programadores escriben 
                        el código que hace que todo funcione. Trabajamos en etapas pequeñas, mostrándote avances regularmente 
                        para que puedas ver el progreso y hacer ajustes si es necesario. Es un proceso colaborativo donde tu 
                        opinión es fundamental.
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-modal-step">
                    <div className="process-modal-step-number">3</div>
                    <div className="process-modal-step-content">
                      <h3>CONTROL DE CALIDAD CMMI</h3>
                      <p>
                        Antes de entregarte el software, lo probamos exhaustivamente. Revisamos que todo funcione correctamente, 
                        que sea seguro, rápido y fácil de usar. Seguimos estándares internacionales de calidad (CMMI nivel 5+) 
                        que garantizan que tu software sea confiable y profesional. Es como revisar un auto antes de entregarlo: 
                        probamos todos los sistemas, corregimos cualquier problema y nos aseguramos de que esté perfecto para ti.
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-modal-step">
                    <div className="process-modal-step-number">4</div>
                    <div className="process-modal-step-content">
                      <h3>ENTREGA Y SOPORTE</h3>
                      <p>
                        Una vez que todo está listo y probado, te entregamos tu software completamente funcional, junto con 
                        la documentación necesaria y te enseñamos cómo usarlo. Pero nuestro trabajo no termina ahí: te 
                        ofrecemos soporte continuo para resolver cualquier duda, hacer mejoras o agregar nuevas funcionalidades 
                        en el futuro. Estamos contigo para asegurar que tu software siga siendo útil y actualizado.
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-modal-benefits">
                    <h3>¿Por qué este proceso es importante para ti?</h3>
                    <ul>
                      <li>✓ Sabes exactamente qué recibirás y cuándo</li>
                      <li>✓ Puedes ver avances y dar tu opinión durante el desarrollo</li>
                      <li>✓ Recibes un software de alta calidad, probado y confiable</li>
                      <li>✓ Tienes soporte continuo después de la entrega</li>
                      <li>✓ Evitas sorpresas y costos inesperados</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Contact Modal */}
          {showContactModal && (
            <div className="contact-modal-overlay" onClick={closeContactModal}>
              <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="contact-modal-close" onClick={closeContactModal}>×</button>
                <h2 className="contact-modal-title">CONTÁCTAME</h2>
                <p className="contact-modal-subtitle">Completa el formulario y me pondré en contacto contigo pronto</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-group">
                    <label htmlFor="name">Nombre *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div className="contact-form-group">
                    <label htmlFor="email">Correo Electrónico *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div className="contact-form-group">
                    <label htmlFor="subject">Asunto *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="¿Sobre qué quieres hablar?"
                    />
                  </div>
                  
                  <div className="contact-form-group">
                    <label htmlFor="message">Mensaje *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Cuéntame sobre tu proyecto o pregunta..."
                    />
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="contact-form-success">
                      ✓ ¡Mensaje enviado exitosamente! Me pondré en contacto contigo pronto.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="contact-form-error">
                      ✗ Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="contact-form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
              </div>
            </div>
          )}
          
          <footer className="footer">
            <div className="footer-content">
              <span>Fullstack Developer</span>
              <span className="footer-name">Marlon</span>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Home;