import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, TrendingUp, Award, Users, CheckCircle } from 'lucide-react'

function App() {
  const splitRef = useRef(null)
  const worksRef = useRef(null)
  const [votes, setVotes] = useState({ pupa: 0, lupa: 0 })
  const [hasVoted, setHasVoted] = useState(false)
  
  const isSplitInView = useInView(splitRef, { once: true, margin: "-100px" })
  const isWorksInView = useInView(worksRef, { once: true, margin: "-100px" })

  const handleVote = (side) => {
    if (!hasVoted) {
      setVotes(prev => ({ ...prev, [side]: prev[side] + 1 }))
      setHasVoted(true)
    }
  }

  const totalVotes = votes.pupa + votes.lupa
  const pupaPercent = totalVotes > 0 ? Math.round((votes.pupa / totalVotes) * 100) : 50
  const lupaPercent = totalVotes > 0 ? Math.round((votes.lupa / totalVotes) * 100) : 50

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 animate-gradient">
      {/* НАВИГАЦИЯ */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-orange-600/90 backdrop-blur-xl border-b-4 border-yellow-400 shadow-2xl">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-6 flex justify-between items-center">
          <div className="text-2xl tracking-tight font-black">
            <span className="text-yellow-300">ПУПА</span>
            <span className="text-white"> & </span>
            <span className="text-cyan-300">ЛУПА</span>
          </div>
          <div className="hidden md:flex gap-12 text-sm tracking-wide font-bold">
            <a href="#split" className="text-white hover:text-yellow-300 transition-colors">ДУАЛЬНОСТЬ</a>
            <a href="#works" className="text-white hover:text-yellow-300 transition-colors">РАБОТЫ</a>
            <a href="#vote" className="text-white hover:text-yellow-300 transition-colors">ГОЛОСОВАНИЕ</a>
          </div>
        </div>
      </nav>

      {/* ГЛАВНЫЙ ЭКРАН - ТОЛЬКО ВИДЕО */}
      <section className="relative h-screen overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-video-2.MOV?" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-transparent to-pink-900/60" />
      </section>

      {/* SPLIT SCREEN - ПУПА vs ЛУПА */}
      <section id="split" ref={splitRef} className="min-h-screen flex flex-col md:flex-row">
        {/* ЛУПА - ЛЕВАЯ ЧАСТЬ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isSplitInView ? 1 : 0, x: isSplitInView ? 0 : -50 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Фоновые изображения */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-2 gap-4 h-full">
              <img src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?" alt="" className="w-full h-full object-cover" />
              <img src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-13.jpg?" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="relative z-10">
            <motion.h2 
              initial={{ scale: 0.8 }}
              animate={{ scale: isSplitInView ? 1 : 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-7xl md:text-9xl font-black text-white mb-8 drop-shadow-2xl"
            >
              ЛУПА
            </motion.h2>
            
            <div className="space-y-6 mb-12">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border-4 border-white/40 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-3">
                  <TrendingUp className="w-8 h-8 text-yellow-300" />
                  <h3 className="text-2xl font-black text-white">РЕАЛИСТ</h3>
                </div>
                <p className="text-white/90 text-lg font-medium">
                  Мастер извлекать уроки из грандиозных провалов
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border-4 border-white/40 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-3">
                  <Users className="w-8 h-8 text-yellow-300" />
                  <h3 className="text-2xl font-black text-white">ВЫЖИВАЛЬЩИК</h3>
                </div>
                <p className="text-white/90 text-lg font-medium">
                  Коллекционер историй "почти получилось"
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-8 border-white/50 shadow-2xl transform hover:scale-105 transition-transform">
              <img 
                src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?" 
                alt="Лупа"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-3xl font-black text-white drop-shadow-lg">
                  "Я собираю материал"
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ПУПА - ПРАВАЯ ЧАСТЬ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isSplitInView ? 1 : 0, x: isSplitInView ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Фоновые изображения */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-2 gap-4 h-full">
              <img src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-4.jpg?" alt="" className="w-full h-full object-cover" />
              <img src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-5.jpg?" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="relative z-10">
            <motion.h2 
              initial={{ scale: 0.8 }}
              animate={{ scale: isSplitInView ? 1 : 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-7xl md:text-9xl font-black text-white mb-8 drop-shadow-2xl"
            >
              ПУПА
            </motion.h2>
            
            <div className="space-y-6 mb-12">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border-4 border-white/40 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-3">
                  <Award className="w-8 h-8 text-purple-900" />
                  <h3 className="text-2xl font-black text-white">ВИЗИОНЕР</h3>
                </div>
                <p className="text-white/90 text-lg font-medium">
                  Создатель невозможных мечт и строитель империй
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border-4 border-white/40 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-3">
                  <Heart className="w-8 h-8 text-purple-900" />
                  <h3 className="text-2xl font-black text-white">ДОСТИГАТОР</h3>
                </div>
                <p className="text-white/90 text-lg font-medium">
                  Победитель 47 воображаемых наград
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-8 border-white/50 shadow-2xl transform hover:scale-105 transition-transform">
              <img 
                src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-4.jpg?" 
                alt="Пупа"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-3xl font-black text-white drop-shadow-lg">
                  "Я сам тренд"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* СЕКЦИЯ РАБОТ - ФОТО ГАЛЕРЕЯ */}
      <section id="works" ref={worksRef} className="py-32 px-8 md:px-16 bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800">
        <div className="max-w-[1800px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isWorksInView ? 1 : 0, y: isWorksInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white text-center mb-20 drop-shadow-2xl"
          >
            НАШИ <span className="text-yellow-300">РАБОТЫ</span>
          </motion.h2>

          {/* Масштабная сетка изображений */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'user-photo-5.jpg',
              'user-photo-7.jpg',
              'user-photo-12.jpg',
              'user-photo-13.jpg',
              'user-photo-14.jpg',
              'user-photo-17.jpg',
              'user-photo-18.jpg',
              'user-photo-1.jpg'
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isWorksInView ? 1 : 0, scale: isWorksInView ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl group cursor-pointer"
              >
                <img 
                  src={`https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/${photo}?`}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ ГОЛОСОВАНИЯ */}
      <section id="vote" className="py-32 px-8 md:px-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl">
              ВЫБЕРИ СТОРОНУ
            </h2>
            <p className="text-2xl md:text-3xl text-white/80 font-bold">
              Кто круче: Пупа или Лупа?
            </p>
          </motion.div>

          {/* Результаты голосования */}
          {hasVoted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-4 border-white/30"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-center flex-1">
                  <p className="text-5xl font-black text-yellow-300 mb-2">{pupaPercent}%</p>
                  <p className="text-xl font-bold text-white">ПУПА</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-5xl font-black text-cyan-300 mb-2">{lupaPercent}%</p>
                  <p className="text-xl font-bold text-white">ЛУПА</p>
                </div>
              </div>
              <div className="h-8 bg-white/20 rounded-full overflow-hidden flex">
                <motion.div
                  initial={{ width: '50%' }}
                  animate={{ width: `${pupaPercent}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center"
                >
                  <span className="text-white font-black text-sm">{votes.pupa}</span>
                </motion.div>
                <motion.div
                  initial={{ width: '50%' }}
                  animate={{ width: `${lupaPercent}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center"
                >
                  <span className="text-white font-black text-sm">{votes.lupa}</span>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Кнопки голосования */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.button
              whileHover={{ scale: hasVoted ? 1 : 1.05 }}
              whileTap={{ scale: hasVoted ? 1 : 0.95 }}
              onClick={() => handleVote('pupa')}
              disabled={hasVoted}
              className={`relative overflow-hidden group ${hasVoted ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
            >
              <div className="absolute inset-0">
                <img 
                  src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-4.jpg?"
                  alt="Пупа"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/95 via-orange-600/70 to-orange-600/50 group-hover:from-orange-500/95 transition-all duration-500" />
              </div>
              <div className="relative z-10 py-24 px-8">
                <h3 className="text-6xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                  Я ЗА ПУПУ
                </h3>
                {hasVoted && votes.pupa > 0 && (
                  <CheckCircle className="w-16 h-16 text-white mx-auto" />
                )}
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: hasVoted ? 1 : 1.05 }}
              whileTap={{ scale: hasVoted ? 1 : 0.95 }}
              onClick={() => handleVote('lupa')}
              disabled={hasVoted}
              className={`relative overflow-hidden group ${hasVoted ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
            >
              <div className="absolute inset-0">
                <img 
                  src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg?"
                  alt="Лупа"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/95 via-cyan-600/70 to-cyan-600/50 group-hover:from-cyan-500/95 transition-all duration-500" />
              </div>
              <div className="relative z-10 py-24 px-8">
                <h3 className="text-6xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                  Я ЗА ЛУПУ
                </h3>
                {hasVoted && votes.lupa > 0 && (
                  <CheckCircle className="w-16 h-16 text-white mx-auto" />
                )}
              </div>
            </motion.button>
          </div>

          {hasVoted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white/60 text-xl mt-8 font-medium"
            >
              Спасибо за голос! Но помни: они — один и тот же человек 😉
            </motion.p>
          )}
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="py-20 px-8 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 border-t-8 border-yellow-400">
        <div className="max-w-[1800px] mx-auto text-center">
          <div className="text-5xl font-black mb-8">
            <span className="text-yellow-300">ПУПА</span>
            <span className="text-white"> & </span>
            <span className="text-cyan-300">ЛУПА</span>
          </div>
          
          <div className="flex justify-center gap-12 mb-8 text-lg font-bold">
            <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors">ИНСТАГРАМ</a>
            <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors">ТВИТТЕР</a>
            <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors">ЛИНКЕДИН</a>
          </div>
          
          <p className="text-white/60 text-sm font-medium">
            © 2024 ПУПА & ЛУПА. ВСЕ ПРОТИВОРЕЧИЯ ЗАЩИЩЕНЫ.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App