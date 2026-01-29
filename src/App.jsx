import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Quote } from 'lucide-react'

function App() {
  const manifestoRef = useRef(null)
  const worksRef = useRef(null)
  const testimonialsRef = useRef(null)
  
  const isManifestoInView = useInView(manifestoRef, { once: true, margin: "-100px" })
  const isWorksInView = useInView(worksRef, { once: true, margin: "-100px" })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-6 flex justify-between items-center">
          <div className="text-lg tracking-tight">
            <span className="font-light text-black/40">PUPA</span>
            <span className="font-black text-black"> & </span>
            <span className="font-light text-black/40">LUPA</span>
          </div>
          <div className="hidden md:flex gap-12 text-sm tracking-wide">
            <a href="#manifesto" className="text-black/40 hover:text-black transition-colors">MANIFESTO</a>
            <a href="#works" className="text-black/40 hover:text-black transition-colors">WORKS</a>
            <a href="#testimonials" className="text-black/40 hover:text-black transition-colors">VOICES</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-video-2.MOV?" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-16 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[140px] leading-[0.85] tracking-tighter mb-8">
              <span className="font-extralight text-black/30 block">PUPA</span>
              <span className="font-black text-black">&</span>
              <span className="font-extralight text-black/30 block">LUPA</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-black/60 mb-16 max-w-3xl mx-auto">
              THE DUALITY OF MODERN EXISTENCE
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-sm md:text-base font-light text-black/40 tracking-widest"
            >
              TWO SIDES · ONE GENIUS · INFINITE CONTRADICTIONS
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-black/20 to-transparent" />
        </motion.div>
      </section>

      {/* MANIFESTO SECTION */}
      <section id="manifesto" ref={manifestoRef} className="py-32 md:py-48 px-8 md:px-16 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isManifestoInView ? 1 : 0, y: isManifestoInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-black/80 mb-6">
              THE MANIFESTO
            </h2>
            <div className="w-24 h-[1px] bg-black/20" />
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* PUPA Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isManifestoInView ? 1 : 0, x: isManifestoInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black/5">
                <img 
                  src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?" 
                  alt="Pupa"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-6">
                  PUPA
                </h3>
                <p className="text-xs tracking-[0.3em] font-medium text-black/40 mb-6">
                  THE VISIONARY · THE ACHIEVER
                </p>
                <div className="space-y-4 text-base md:text-lg font-light leading-relaxed text-black/70">
                  <p>
                    Creator of impossible dreams. Builder of empires from thin air. 
                    The one who sees opportunities where others see obstacles.
                  </p>
                  <p>
                    Winner of 47 imaginary awards. Featured in publications that don't exist yet. 
                    Pioneer of movements that haven't started.
                  </p>
                  <p className="font-medium text-black">
                    "I don't follow trends. I am the trend."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* LUPA Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isManifestoInView ? 1 : 0, x: isManifestoInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 md:mt-32"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black/5">
                <img 
                  src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-4.jpg?" 
                  alt="Lupa"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div>
                <h3 className="text-4xl md:text-5xl font-thin tracking-tighter text-black/40 mb-6">
                  LUPA
                </h3>
                <p className="text-xs tracking-[0.3em] font-medium text-black/30 mb-6">
                  THE REALIST · THE SURVIVOR
                </p>
                <div className="space-y-4 text-base md:text-lg font-light leading-relaxed text-black/50">
                  <p>
                    Master of learning from spectacular failures. Collector of "almost made it" stories. 
                    Expert in turning disasters into anecdotes.
                  </p>
                  <p>
                    Holder of 73 unfinished projects. Specialist in creative procrastination. 
                    Professional overthinker and self-saboteur.
                  </p>
                  <p className="font-medium text-black/70">
                    "I'm not failing. I'm gathering material."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORKS SECTION */}
      <section id="works" ref={worksRef} className="py-32 md:py-48 px-8 md:px-16 bg-black/[0.02]">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isWorksInView ? 1 : 0, y: isWorksInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-black/80 mb-6">
              THE PORTFOLIO
            </h2>
            <div className="w-24 h-[1px] bg-black/20" />
          </motion.div>

          {/* Pupa's Triumphs */}
          <div className="mb-32">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-black mb-12">
              PUPA'S TRIUMPHS
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isWorksInView ? 1 : 0, y: isWorksInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden bg-black/5 mb-6">
                  <img 
                    src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-5.jpg?" 
                    alt="Project 1"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-black mb-2">Revolutionary Concept #1</h4>
                <p className="text-sm font-light text-black/50">Disrupting industries that didn't ask to be disrupted</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isWorksInView ? 1 : 0, y: isWorksInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group cursor-pointer md:mt-12"
              >
                <div className="aspect-[4/5] overflow-hidden bg-black/5 mb-6">
                  <img 
                    src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-7.jpg?" 
                    alt="Project 2"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-black mb-2">Visionary Initiative</h4>
                <p className="text-sm font-light text-black/50">So ahead of its time, nobody understands it yet</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isWorksInView ? 1 : 0, y: isWorksInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden bg-black/5 mb-6">
                  <img 
                    src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-12.jpg?" 
                    alt="Project 3"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-black mb-2">Paradigm Shift Project</h4>
                <p className="text-sm font-light text-black/50">Changing the game by making up new rules</p>
              </motion.div>
            </div>
          </div>

          {/* Lupa's Lessons */}
          <div>
            <h3 className="text-3xl md:text-4xl font-thin tracking-tight text-black/40 mb-12">
              LUPA'S ... LESSONS
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isWorksInView ? 1 : 0, y: isWorksInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-black/5 mb-6">
                  <img 
                    src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-13.jpg?" 
                    alt="Lesson 1"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-medium tracking-tight text-black/70 mb-2">The Great Pivot</h4>
                <p className="text-sm font-light text-black/40">When plan A through Z didn't work, we invented plan Ω</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isWorksInView ? 1 : 0, y: isWorksInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="group cursor-pointer md:mt-16"
              >
                <div className="aspect-video overflow-hidden bg-black/5 mb-6">
                  <img 
                    src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-14.jpg?" 
                    alt="Lesson 2"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-medium tracking-tight text-black/70 mb-2">Learning Experience</h4>
                <p className="text-sm font-light text-black/40">A masterclass in what not to do (now available as NFT)</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" ref={testimonialsRef} className="py-32 md:py-48 px-8 md:px-16 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isTestimonialsInView ? 1 : 0, y: isTestimonialsInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-black/80 mb-6">
              THE VOICES
            </h2>
            <div className="w-24 h-[1px] bg-black/20" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Praise for Pupa */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isTestimonialsInView ? 1 : 0, x: isTestimonialsInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Quote className="w-16 h-16 text-black/10 mb-8" />
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-black mb-12">
                Pupa is a visionary genius. Working with them changed my perspective on everything. 
                Pure brilliance in human form.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-black/5">
                  <img 
                    src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-17.jpg?" 
                    alt="Supporter"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="font-bold text-black">Alexandra Chen</p>
                  <p className="text-sm text-black/40">Definitely Not Related</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-xs tracking-[0.3em] font-medium text-black/20">
                TEAM PUPA
              </div>
            </motion.div>

            {/* Critique for Lupa */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isTestimonialsInView ? 1 : 0, x: isTestimonialsInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative md:mt-24"
            >
              <Quote className="w-16 h-16 text-black/5 mb-8" />
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-black/50 mb-12">
                Lupa? Well... they're certainly... persistent. I'll give them that. 
                The effort is there. The results? Still waiting.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-black/5">
                  <img 
                    src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-18.jpg?" 
                    alt="Critic"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="font-medium text-black/70">Marcus Webb</p>
                  <p className="text-sm text-black/30">Professional Skeptic</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-xs tracking-[0.3em] font-medium text-black/10">
                TEAM LUPA
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER / CTA */}
      <footer className="py-32 md:py-48 px-8 md:px-16 bg-black text-white">
        <div className="max-w-[1800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter mb-12 leading-tight">
              CHOOSE<br />YOUR SIDE
            </h2>
            
            <p className="text-xl md:text-2xl font-light text-white/60 mb-20 max-w-3xl mx-auto">
              Are you Team Pupa or Team Lupa?<br />
              Either way, we're the same person.
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-24">
              <button className="group px-12 py-6 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-lg tracking-widest font-medium flex items-center gap-3">
                I'M FOR PUPA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group px-12 py-6 border-2 border-white/30 hover:border-white/60 text-white/60 hover:text-white/90 transition-all duration-300 text-lg tracking-widest font-light flex items-center gap-3">
                I'M FOR LUPA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="space-y-4 text-sm tracking-[0.3em] font-light text-white/40">
              <div className="flex justify-center gap-12">
                <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                <a href="#" className="hover:text-white transition-colors">TWITTER</a>
                <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
              </div>
              <p className="text-xs">
                © 2024 PUPA & LUPA. ALL CONTRADICTIONS RESERVED.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App