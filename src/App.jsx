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
      {/* НАВИГАЦИЯ */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-6 flex justify-between items-center">
          <div className="text-lg tracking-tight">
            <span className="font-light text-black/40">ПУПА</span>
            <span className="font-black text-black"> & </span>
            <span className="font-light text-black/40">ЛУПА</span>
          </div>
          <div className="hidden md:flex gap-12 text-sm tracking-wide">
            <a href="#manifesto" className="text-black/40 hover:text-black transition-colors">МАНИФЕСТ</a>
            <a href="#works" className="text-black/40 hover:text-black transition-colors">РАБОТЫ</a>
            <a href="#testimonials" className="text-black/40 hover:text-black transition-colors">ОТЗЫВЫ</a>
          </div>
        </div>
      </nav>

      {/* ГЛАВНЫЙ ЭКРАН */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Фоновое видео */}
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

        {/* Контент героя */}
        <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-16 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[140px] leading-[0.85] tracking-tighter mb-8">
              <span className="font-extralight text-black/30 block">ПУПА</span>
              <span className="font-black text-black">&</span>
              <span className="font-extralight text-black/30 block">ЛУПА</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-black/60 mb-16 max-w-3xl mx-auto">
              ДУАЛЬНОСТЬ СОВРЕМЕННОГО СУЩЕСТВОВАНИЯ
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-sm md:text-base font-light text-black/40 tracking-widest"
            >
              ДВЕ СТОРОНЫ · ОДИН ГЕНИЙ · БЕСКОНЕЧНЫЕ ПРОТИВОРЕЧИЯ
            </motion.div>
          </motion.div>
        </div>

        {/* Индикатор прокрутки */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-black/20 to-transparent" />
        </motion.div>
      </section>

      {/* СЕКЦИЯ МАНИФЕСТА */}
      <section id="manifesto" ref={manifestoRef} className="py-32 md:py-48 px-8 md:px-16 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isManifestoInView ? 1 : 0, y: isManifestoInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-black/80 mb-6">
              МАНИФЕСТ
            </h2>
            <div className="w-24 h-[1px] bg-black/20" />
          </motion.div>

          {/* Две колонки */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Колонка ЛУПА */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isManifestoInView ? 1 : 0, x: isManifestoInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black/5">
                <img 
                  src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?" 
                  alt="Лупа"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div>
                <h3 className="text-4xl md:text-5xl font-thin tracking-tighter text-black/40 mb-6">
                  ЛУПА
                </h3>
                <p className="text-xs tracking-[0.3em] font-medium text-black/30 mb-6">
                  РЕАЛИСТ · ВЫЖИВАЛЬЩИК
                </p>
                <div className="space-y-4 text-base md:text-lg font-light leading-relaxed text-black/50">
                  <p>
                    Мастер извлекать уроки из грандиозных провалов. Коллекционер историй "почти получилось". 
                    Эксперт превращения катастроф в анекдоты.
                  </p>
                  <p>
                    Обладатель 73 незавершённых проектов. Специалист по креативной прокрастинации. 
                    Профессиональный перфекционист и саботажник самого себя.
                  </p>
                  <p className="font-medium text-black/70">
                    "Я не проваливаюсь. Я собираю материал."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Колонка ПУПА */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isManifestoInView ? 1 : 0, x: isManifestoInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 md:mt-32"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black/5">
                <img 
                  src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-4.jpg?" 
                  alt="Пупа"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-6">
                  ПУПА
                </h3>
                <p className="text-xs tracking-[0.3em] font-medium text-black/40 mb-6">
                  ВИЗИОНЕР · ДОСТИГАТОР
                </p>
                <div className="space-y-4 text-base md:text-lg font-light leading-relaxed text-black/70">
                  <p>
                    Создатель невозможных мечт. Строитель империй из воздуха. 
                    Тот, кто видит возможности там, где другие видят препятствия.
                  </p>
                  <p>
                    Победитель 47 воображаемых наград. Фигурант в публикациях, которых ещё не существует. 
                    Пионер движений, которые ещё не начались.
                  </p>
                  <p className="font-medium text-black">
                    "Я не следую трендам. Я сам тренд."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ РАБОТ */}
      <section id="works" ref={worksRef} className="py-32 md:py-48 px-8 md:px-16 bg-black/[0.02]">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isWorksInView ? 1 : 0, y: isWorksInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-black/80 mb-6">
              ПОРТФОЛИО
            </h2>
            <div className="w-24 h-[1px] bg-black/20" />
          </motion.div>

          {/* Триумфы Пупы */}
          <div className="mb-32">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-black mb-12">
              ТРИУМФЫ ПУПЫ
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
                    alt="Проект 1"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-black mb-2">Революционная Концепция #1</h4>
                <p className="text-sm font-light text-black/50">Разрушаем индустрии, которые об этом не просили</p>
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
                    alt="Проект 2"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-black mb-2">Визионерская Инициатива</h4>
                <p className="text-sm font-light text-black/50">Настолько опережает время, что никто пока не понимает</p>
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
                    alt="Проект 3"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-black mb-2">Проект Смены Парадигмы</h4>
                <p className="text-sm font-light text-black/50">Меняем игру, придумывая новые правила</p>
              </motion.div>
            </div>
          </div>

          {/* Уроки Лупы */}
          <div>
            <h3 className="text-3xl md:text-4xl font-thin tracking-tight text-black/40 mb-12">
              УРОКИ ЛУПЫ... 
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
                    alt="Урок 1"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-medium tracking-tight text-black/70 mb-2">Великий Поворот</h4>
                <p className="text-sm font-light text-black/40">Когда планы от А до Я не сработали, мы изобрели план Ω</p>
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
                    alt="Урок 2"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-medium tracking-tight text-black/70 mb-2">Обучающий Опыт</h4>
                <p className="text-sm font-light text-black/40">Мастер-класс о том, как НЕ надо делать (теперь в формате NFT)</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ ОТЗЫВОВ */}
      <section id="testimonials" ref={testimonialsRef} className="py-32 md:py-48 px-8 md:px-16 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isTestimonialsInView ? 1 : 0, y: isTestimonialsInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-black/80 mb-6">
              ОТЗЫВЫ
            </h2>
            <div className="w-24 h-[1px] bg-black/20" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Похвала Пупе */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isTestimonialsInView ? 1 : 0, x: isTestimonialsInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Quote className="w-16 h-16 text-black/10 mb-8" />
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-black mb-12">
                Пупа — гений-визионер. Работа с ним изменила мой взгляд на всё. 
                Чистая гениальность в человеческом обличии.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-black/5">
                  <img 
                    src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-17.jpg?" 
                    alt="Сторонник"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="font-bold text-black">Александра Чен</p>
                  <p className="text-sm text-black/40">Точно Не Родственница</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-xs tracking-[0.3em] font-medium text-black/20">
                КОМАНДА ПУПЫ
              </div>
            </motion.div>

            {/* Критика Лупы */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isTestimonialsInView ? 1 : 0, x: isTestimonialsInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative md:mt-24"
            >
              <Quote className="w-16 h-16 text-black/5 mb-8" />
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-black/50 mb-12">
                Лупа? Ну... он определённо... настойчивый. Это я признаю. 
                Старание есть. Результаты? Всё ещё ждём.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-black/5">
                  <img 
                    src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-18.jpg?" 
                    alt="Критик"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="font-medium text-black/70">Маркус Вебб</p>
                  <p className="text-sm text-black/30">Профессиональный Скептик</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-xs tracking-[0.3em] font-medium text-black/10">
                КОМАНДА ЛУПЫ
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ФУТЕР / ПРИЗЫВ К ДЕЙСТВИЮ */}
      <footer className="py-32 md:py-48 px-8 md:px-16 bg-black text-white">
        <div className="max-w-[1800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter mb-12 leading-tight">
              ВЫБЕРИ<br />СВОЮ СТОРОНУ
            </h2>
            
            <p className="text-xl md:text-2xl font-light text-white/60 mb-20 max-w-3xl mx-auto">
              Ты за команду Пупы или команду Лупы?<br />
              В любом случае, мы — один и тот же человек.
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-24">
              <button className="group px-12 py-6 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-lg tracking-widest font-medium flex items-center gap-3">
                Я ЗА ПУПУ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group px-12 py-6 border-2 border-white/30 hover:border-white/60 text-white/60 hover:text-white/90 transition-all duration-300 text-lg tracking-widest font-light flex items-center gap-3">
                Я ЗА ЛУПУ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="space-y-4 text-sm tracking-[0.3em] font-light text-white/40">
              <div className="flex justify-center gap-12">
                <a href="#" className="hover:text-white transition-colors">ИНСТАГРАМ</a>
                <a href="#" className="hover:text-white transition-colors">ТВИТТЕР</a>
                <a href="#" className="hover:text-white transition-colors">ЛИНКЕДИН</a>
              </div>
              <p className="text-xs">
                © 2024 ПУПА & ЛУПА. ВСЕ ПРОТИВОРЕЧИЯ ЗАЩИЩЕНЫ.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App