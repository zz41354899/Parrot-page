import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Heart, Star, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

// 導入鸚鵡圖片
import parrot1 from '../assets/24V2HNEnGlZM.jpg'
import parrot2 from '../assets/eHa5m4XBNtbF.jpg'
import parrot3 from '../assets/SFhZm5d7xIG6.jpg'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [parrot1, parrot2, parrot3]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToCarousel = () => {
    const carouselSection = document.getElementById('parrot-carousel')
    carouselSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-100 to-green-100">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-pink-300 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側文字內容 */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-2 text-orange-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium tracking-wide">發現鸚鵡的奇妙世界</span>
                <Star className="w-5 h-5 fill-current" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-green-600 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                可愛鸚鵡
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl">陪伴你的生活</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                探索色彩繽紛的鸚鵡世界，了解這些聰明可愛的羽毛朋友如何為你的生活帶來歡樂與驚喜。
                從虎皮鸚鵡到金剛鸚鵡，每一種都有獨特的魅力等待你發現！
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={scrollToCarousel}
              >
                <Heart className="w-5 h-5 mr-2" />
                探索鸚鵡品種
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-green-500 bg-green-500 text-white hover:bg-green-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                了解飼養指南
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>專業飼養建議</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>品種完整介紹</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>親子共同體驗</span>
              </div>
            </motion.div>
          </motion.div>

          {/* 右側圖片 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {heroImages.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`可愛鸚鵡 ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentImageIndex === index ? 1 : 0,
                    scale: currentImageIndex === index ? 1 : 1.1
                  }}
                  transition={{ duration: 1 }}
                />
              ))}
              
              {/* 圖片指示器 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* 浮動裝飾元素 */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Star className="w-6 h-6 text-white fill-current" />
            </motion.div>
          </motion.div>
        </div>

        {/* 向下滾動指示器 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToCarousel}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
          >
            <span className="text-sm font-medium">探索更多</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

