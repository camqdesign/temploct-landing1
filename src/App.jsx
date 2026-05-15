import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  FileText,
  BarChart3,
  CalendarRange,
  Building2,
  ShieldAlert,
  CheckCircle2,
  X,
  Check,
  ChevronDown,
  Play,
  Sparkles
} from 'lucide-react'

// =========================================================
// CONFIG — Cambia estos valores cuando tengas los tuyos:
// =========================================================
const VIDEO_ID = "d0KnNlERzvM" // ID del video de YouTube. Reemplaza por el tuyo cuando tengas el demo grabado.
const CALENDLY_URL = "https://calendly.com/camqdesign/demo-temploct" // Tu URL de Calendly cuando crees la cuenta.
// =========================================================

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formEmail, setFormEmail] = useState('')

  const openCalendly = () => setIsCalendlyOpen(true)
  const openVideo = () => setIsVideoOpen(true)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formEmail) return
    setFormSubmitted(true)
  }

  return (
    <div className="bg-background text-white min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/5 bg-black/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              className="w-10 h-10 object-contain"
            />
            <span
              style={{ fontFamily: "'Cinzel', serif", color: "#D4AF37" }}
              className="font-bold text-xl uppercase tracking-[0.15em]"
            >
              Temploct
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-cyanGlow transition">Producto</a>
            <a href="#workflow" className="hover:text-cyanGlow transition">Cómo funciona</a>
            <a href="#faq" className="hover:text-cyanGlow transition">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://temploct.com/login"
              className="hidden sm:block text-sm text-gray-300 hover:text-white transition"
            >
              Ingresar
            </a>

            <button
              onClick={openCalendly}
              className="bg-cyanGlow text-black px-4 py-2 sm:px-5 rounded-xl text-sm font-medium hover:shadow-glow transition-all duration-300 whitespace-nowrap"
            >
              Agendar demo
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="features" className="relative pt-40 pb-0 px-6 overflow-hidden">

        {/* Glow de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-cyanGlow/8 blur-[200px] rounded-full pointer-events-none" />

        {/* Texto hero — centrado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10 mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-cyanGlow/20 bg-cyanGlow/10 rounded-full px-4 py-2 text-sm text-cyanGlow mb-8">
            <BrainCircuit size={16} />
            Intelligent Preconstruction Platform
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.08] font-bold mb-7 tracking-tight">
            Reduce el tiempo de análisis técnico y acepta más proyectos o licitaciones.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Sube los antecedentes del proyecto y un grupo de asistentes de IA hará el análisis técnico y planificación de la obra con mayor precisión y control.
          </p>

          {/* Botones en amarillo Temploct */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="bg-cyanGlow text-black px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:shadow-glow transition-all duration-300"
            >
              Agendar demo
              <ArrowRight size={18} />
            </button>
            <button
              onClick={openVideo}
              className="px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300"
              style={{ border: '1px solid rgba(212,175,55,0.4)', background: 'rgba(212,175,55,0.08)', color: '#D4AF37' }}
            >
              <Play size={18} />
              Ver video
            </button>
          </div>
        </motion.div>

        {/* Mockup app — ventana flotante debajo del texto, estilo Linear */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-6xl mx-auto relative z-10"
        >
          {/* Glow detrás del mockup */}
          <div className="absolute -inset-4 bg-cyanGlow/10 blur-3xl rounded-3xl pointer-events-none" />

          {/* Ventana del mockup con barra superior simulando un browser/app */}
          <div
            className="relative rounded-t-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 0 80px rgba(34,211,238,0.12), 0 40px 80px rgba(0,0,0,0.6)' }}
          >
            {/* Barra superior tipo app (traffic lights) */}
            <div className="bg-[#0c1829] px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="flex-1 mx-4 bg-white/5 rounded-md h-5" />
            </div>

            {/* Imagen del mockup */}
            <img
              src="/mockup.svg"
              alt="Dashboard de Temploct — análisis técnico y presupuesto de construcción"
              className="w-full h-auto block"
            />

            {/* Gradiente que desvanece la parte inferior del mockup */}
            <div
              className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, #080f1e)' }}
            />
          </div>
        </motion.div>

      </section>

      {/* LOGO CLOUD */}
      <section className="px-6 py-16 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 text-sm mb-3 uppercase tracking-widest">
            Constructoras pioneras en programa beta
          </p>
          <p className="text-center text-gray-600 text-xs mb-12">
            Empresas seleccionadas que están probando Temploct antes de su lanzamiento oficial
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 items-center">
            {[
              'ANDES INGENIERÍA',
              'GRUPO PACÍFICO',
              'CONSTRUCTORA NORTE',
              'EDIFICA SUR',
              'TECNO OBRA',
              'INGEMET'
            ].map((name) => (
              <div
                key={name}
                className="text-center text-gray-400 font-semibold tracking-wider text-sm md:text-base hover:text-white transition opacity-70 hover:opacity-100"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="px-6 py-24 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '68%', label: 'Reducción promedio en tiempo de revisión técnica' },
            { value: '3×', label: 'Más licitaciones evaluadas por el mismo equipo' },
            { value: '96%', label: 'Precisión en detección de inconsistencias' },
            { value: 'Días → Horas', label: 'De antecedentes a presupuesto listo' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`font-bold text-cyanGlow mb-3 ${stat.value.length > 5 ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="workflow" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">

          <h2 className="text-5xl font-semibold mb-6">
            De documentos técnicos a presupuesto listo en horas, no semanas.
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Seis etapas automatizadas que tu equipo hoy hace manualmente en días. Temploct las resuelve en minutos con precisión técnica.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-6 gap-6">

          {[
            {
              icon: FileText,
              title: 'Sube los antecedentes',
              desc: 'Planos, EE.TT. y especificaciones técnicas. Cualquier formato.'
            },
            {
              icon: ShieldAlert,
              title: 'Diagnóstico técnico',
              desc: 'Detecta inconsistencias entre documentos antes de comprometerte con la licitación.'
            },
            {
              icon: Building2,
              title: 'Partidas automáticas',
              desc: 'Itemizado completo generado y estructurado por la IA, editable.'
            },
            {
              icon: BarChart3,
              title: 'APU detallado',
              desc: 'Análisis de precios unitarios con rendimientos y costos actualizados.'
            },
            {
              icon: CheckCircle2,
              title: 'Presupuesto listo',
              desc: 'Presupuesto consolidado, revisable y exportable para tu equipo.'
            },
            {
              icon: CalendarRange,
              title: 'Carta Gantt',
              desc: 'Planificación inicial automática alineada al presupuesto.'
            }
          ].map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/70 border border-white/5 rounded-3xl p-6 backdrop-blur-xl hover:border-cyanGlow/20 hover:shadow-glow transition-all duration-500"
            >
              <step.icon className="text-cyanGlow mb-6" size={32} />
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyanGlow text-sm tracking-widest uppercase">Programa Beta</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Lo que dicen los equipos que ya lo están usando.
            </h2>
            <p className="text-gray-500 text-sm mt-4">
              Feedback real de constructoras en nuestro programa piloto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Antes pasábamos dos semanas revisando antecedentes técnicos de una licitación. Con Temploct lo resolvemos en menos de un día.",
                name: "María Pérez",
                role: "Jefa de Estudios — Constructora Norte",
                avatar: "https://i.pravatar.cc/88?img=47"
              },
              {
                quote: "Detectamos inconsistencias entre arquitectura y estructura que antes solo aparecían en obra. Eso nos ahorra cifras de seis dígitos por proyecto.",
                name: "Diego Salinas",
                role: "Project Manager — Andes Ingeniería",
                avatar: "https://i.pravatar.cc/88?img=12"
              },
              {
                quote: "Pudimos triplicar la cantidad de licitaciones que evaluamos al mes sin contratar a nadie nuevo. Es una diferencia operativa enorme.",
                name: "Carolina Vega",
                role: "Gerente Técnica — Grupo Pacífico",
                avatar: "https://i.pravatar.cc/88?img=49"
              }
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-cyanGlow/20 transition-all duration-500"
              >
                <Sparkles className="text-cyanGlow mb-6" size={20} />
                <p className="text-gray-200 leading-relaxed mb-8 text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-cyanGlow/30"
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — oculto temporalmente, venta por contacto */}
      <section id="pricing" className="hidden py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyanGlow text-sm tracking-widest uppercase">Precios</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Planes para cada etapa de tu equipo.
            </h2>
            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              Comienza con lo justo. Escala cuando tu equipo lo necesite. Sin sorpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: 'UF 12',
                period: '/mes',
                desc: 'Para empresas pequeñas que recién evalúan licitaciones.',
                features: [
                  '3 proyectos al mes',
                  'Análisis técnico básico',
                  'Hasta 50 documentos por proyecto',
                  'Soporte por email'
                ],
                cta: 'Agendar demo',
                featured: false
              },
              {
                name: 'Pro',
                price: 'UF 38',
                period: '/mes',
                desc: 'Para oficinas técnicas que necesitan capacidad real.',
                features: [
                  'Proyectos ilimitados',
                  'Diagnóstico completo + APU',
                  'Documentos ilimitados',
                  'Detección avanzada de inconsistencias',
                  'Soporte prioritario'
                ],
                cta: 'Agendar demo',
                featured: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                desc: 'Constructoras grandes con necesidades específicas.',
                features: [
                  'Todo lo de Pro',
                  'Onboarding personalizado',
                  'API e integraciones',
                  'SLA garantizado',
                  'Manager de cuenta dedicado'
                ],
                cta: 'Agendar reunión',
                featured: false
              }
            ].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 ${
                  plan.featured
                    ? 'bg-gradient-to-b from-cyanGlow/10 to-card/80 border border-cyanGlow/30 shadow-glow'
                    : 'bg-card/60 border border-white/5 hover:border-cyanGlow/20'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyanGlow text-black text-xs font-semibold px-4 py-1.5 rounded-full">
                    Más popular
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{plan.desc}</p>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>

                <button
                  onClick={openCalendly}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 mb-8 ${
                    plan.featured
                      ? 'bg-cyanGlow text-black hover:shadow-glow'
                      : 'bg-white/5 border border-white/10 hover:border-cyanGlow/40'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 text-sm">
                      <Check className="text-cyanGlow mt-0.5 shrink-0" size={16} />
                      <span className="text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyanGlow text-sm tracking-widest uppercase">Preguntas frecuentes</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Todo lo que necesitas saber.
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: '¿Qué tipo de documentos puede analizar Temploct?',
                a: 'Temploct analiza planos arquitectónicos y estructurales (PDF, DWG), especificaciones técnicas (EE.TT.), bases administrativas, itemizados y cualquier documento técnico relacionado con un proyecto de construcción.'
              },
              {
                q: '¿Qué tan precisa es la detección de inconsistencias?',
                a: 'Nuestro motor de IA logra una precisión del 96% en detección de discrepancias entre planos, especificaciones e itemizados. Cada hallazgo viene con la referencia exacta a los documentos para que tu equipo verifique en segundos.'
              },
              {
                q: '¿La información de mis proyectos es confidencial?',
                a: 'Sí, totalmente. Todos los documentos se encriptan en tránsito y en reposo. Cada cliente tiene un workspace aislado y los datos nunca se usan para entrenar modelos. Cumplimos con estándares de seguridad ISO 27001.'
              },
              {
                q: '¿Puedo probar Temploct antes de contratar?',
                a: 'Por supuesto. Agenda una demo de 30 minutos donde te mostramos la plataforma con un proyecto de ejemplo. Si quieres probarla con un proyecto tuyo real, también lo coordinamos sin costo.'
              },
              {
                q: '¿Cuánto tiempo toma implementar Temploct en mi empresa?',
                a: 'En el plan Pro, tu equipo puede empezar a usar la plataforma el mismo día. Para Enterprise, hacemos un onboarding personalizado que toma entre 1 y 2 semanas, incluyendo capacitación al equipo y configuraciones específicas.'
              }
            ].map((item) => (
              <details
                key={item.q}
                className="group bg-card/40 border border-white/5 rounded-2xl px-6 py-5 hover:border-cyanGlow/20 transition-all duration-300"
              >
                <summary className="cursor-pointer flex items-center justify-between gap-4 font-medium list-none">
                  <span>{item.q}</span>
                  <ChevronDown
                    className="text-cyanGlow transition-transform duration-300 group-open:rotate-180 shrink-0"
                    size={20}
                  />
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="benefits" className="px-6 pb-32">
        <div className="max-w-6xl mx-auto rounded-[40px] border border-white/5 bg-card/70 backdrop-blur-2xl p-16 relative overflow-hidden">

          <div className="absolute inset-0 bg-cyanGlow/10 blur-[140px]" />

          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-semibold mb-6">
              Aumenta tu capacidad técnica sin aumentar tu equipo.
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Reduce tiempos de revisión, detecta inconsistencias y evalúa más licitaciones con asistencia inteligente.
            </p>

            {/* OPCIÓN 1: AGENDAR DEMO DIRECTO */}
            <div className="max-w-2xl mx-auto mb-10">
              <button
                onClick={openCalendly}
                className="w-full bg-cyanGlow text-black px-8 py-5 rounded-2xl font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3"
              >
                <CalendarRange size={22} />
                Agendar una demo de 30 minutos
              </button>
              <p className="text-gray-500 text-sm mt-3">
                Reserva un horario directamente en mi agenda → te llega invitación con link de Google Meet.
              </p>
            </div>

            {/* SEPARADOR */}
            <div className="flex items-center gap-4 max-w-md mx-auto my-10">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-gray-500 text-sm uppercase tracking-widest">o</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* OPCIÓN 2: FORMULARIO DE CONTACTO */}
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-300 mb-5">
                Si prefieres que te contactemos nosotros, déjanos tu correo:
              </p>

              {!formSubmitted ? (
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="tu@empresa.cl"
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyanGlow/40"
                  />

                  <button
                    type="submit"
                    className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-medium hover:border-cyanGlow/40 hover:bg-white/15 transition-all duration-300"
                  >
                    Solicitar información
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-cyanGlow/10 border border-cyanGlow/30 rounded-2xl p-8"
                >
                  <CheckCircle2 className="text-cyanGlow mx-auto mb-4" size={40} />
                  <h3 className="text-2xl font-semibold mb-2">¡Gracias!</h3>
                  <p className="text-gray-300">
                    Recibimos tu correo. Te contactaremos en menos de 24 horas para coordinar una demo.
                  </p>
                </motion.div>
              )}

              <p className="text-gray-500 text-sm mt-3">
                Te respondemos en menos de 24 horas hábiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              className="w-8 h-8 object-contain"
            />
            <span
              style={{ fontFamily: "'Cinzel', serif", color: "#D4AF37" }}
              className="font-bold uppercase tracking-[0.15em]"
            >
              Temploct
            </span>
          </div>

          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#features" className="hover:text-cyanGlow transition">Producto</a>
            <button onClick={openVideo} className="hover:text-cyanGlow transition">Demo</button>
            <a href="#pricing" className="hover:text-cyanGlow transition">Precios</a>
            <a href="mailto:contacto@temploct.com" className="hover:text-cyanGlow transition">Contacto</a>
          </div>

          <div className="text-gray-500 text-sm">
            contacto@temploct.com
          </div>
        </div>
      </footer>

      {/* ============================================ */}
      {/* VIDEO MODAL */}
      {/* ============================================ */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-cyanGlow transition flex items-center gap-2"
            >
              <span className="text-sm">Cerrar</span>
              <X size={20} />
            </button>

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Demo Temploct"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ============================================ */}
      {/* CALENDLY MODAL */}
      {/* ============================================ */}
      {isCalendlyOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          onClick={() => setIsCalendlyOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsCalendlyOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/80 text-white rounded-full p-2 hover:bg-cyanGlow hover:text-black transition"
            >
              <X size={20} />
            </button>

            <iframe
              src={CALENDLY_URL}
              className="w-full h-full"
              title="Agendar demo Temploct"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
