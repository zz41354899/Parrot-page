import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// 導入鸚鵡圖片
import budgie1 from '../assets/hdq0dloAA3mk.webp'
import budgie2 from '../assets/TO5rXjvN4y1M.jpeg'
import budgie3 from '../assets/Ca2uUGBahpVJ.jpg'
import macaw1 from '../assets/eHa5m4XBNtbF.jpg'
import macaw2 from '../assets/SFhZm5d7xIG6.jpg'
import macaw3 from '../assets/0bHVaDyxA6Zg.jpg'
import colorful1 from '../assets/24V2HNEnGlZM.jpg'
import colorful2 from '../assets/Tr4IRj3LJtP9.jpg'
import cockatiel from '../assets/GlA4CYsRy0vt.jpg'

const ParrotCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const parrotData = [
    {
      id: 1,
      name: "虎皮鸚鵡",
      englishName: "Budgerigar",
      image: budgie1,
      description: "小巧可愛的虎皮鸚鵡是最受歡迎的寵物鳥之一，擁有鮮豔的羽毛和活潑的個性。",
      characteristics: ["容易飼養", "善於模仿", "社交性強", "壽命8-12年"],
      colors: ["綠色", "藍色", "黃色", "白色"]
    },
    {
      id: 2,
      name: "金剛鸚鵡",
      englishName: "Macaw",
      image: macaw1,
      description: "大型鸚鵡中的王者，擁有絢麗的羽毛和強大的智慧，是鸚鵡界的明星。",
      characteristics: ["智商極高", "壽命長達80年", "需要大空間", "情感豐富"],
      colors: ["紅色", "藍色", "黃色", "綠色"]
    },
    {
      id: 3,
      name: "彩色鸚鵡",
      englishName: "Colorful Parrot",
      image: colorful1,
      description: "色彩繽紛的鸚鵡品種，每一隻都像是大自然的藝術品，美麗動人。",
      characteristics: ["色彩豐富", "個性溫和", "適應力強", "觀賞價值高"],
      colors: ["多彩混合", "彩虹色系"]
    },
    {
      id: 4,
      name: "玄鳳鸚鵡",
      englishName: "Cockatiel",
      image: cockatiel,
      description: "擁有可愛冠羽的玄鳳鸚鵡，性格溫順親人，是理想的家庭寵物。",
      characteristics: ["性格溫順", "容易親近", "會吹口哨", "壽命15-20年"],
      colors: ["灰色", "黃色", "白色", "珍珠色"]
    },
    {
      id: 5,
      name: "藍色虎皮鸚鵡",
      englishName: "Blue Budgie",
      image: budgie2,
      description: "美麗的藍色虎皮鸚鵡，擁有獨特的藍色羽毛，是虎皮鸚鵡的珍貴變種。",
      characteristics: ["顏色稀有", "活潑好動", "學習能力強", "群居性動物"],
      colors: ["天藍色", "深藍色", "白色"]
    },
    {
      id: 6,
      name: "綠翅金剛鸚鵡",
      englishName: "Green-winged Macaw",
      image: macaw2,
      description: "體型巨大的綠翅金剛鸚鵡，擁有紅色身體和綠色翅膀，威武壯觀。",
      characteristics: ["體型最大", "力量強大", "極其聰明", "需要專業照護"],
      colors: ["紅色", "綠色", "藍色"]
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % parrotData.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, parrotData.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % parrotData.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + parrotData.length) % parrotData.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentParrot = parrotData[currentSlide]

  return (
    <section id="parrot-carousel" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* 標題區域 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            鸚鵡品種大觀園
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            探索各種美麗的鸚鵡品種，每一種都有獨特的魅力和特色，找到最適合你的羽毛朋友
          </p>
        </motion.div>

        {/* 主要輪播區域 */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 圖片區域 */}
            <motion.div 
              className="relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={currentParrot.image}
                    alt={currentParrot.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* 導航按鈕 */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg"
                  onClick={nextSlide}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* 圖片指示器 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {parrotData.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                          ? 'bg-white shadow-lg scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 資訊區域 */}
            <motion.div 
              className="space-y-6"
              key={currentSlide}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Info className="w-6 h-6 text-purple-600" />
                  <span className="text-sm font-medium text-purple-600 tracking-wide">品種介紹</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {currentParrot.name}
                </h3>
                
                <p className="text-lg text-gray-600 italic">
                  {currentParrot.englishName}
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {currentParrot.description}
              </p>

              {/* 特徵標籤 */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800">主要特徵</h4>
                <div className="flex flex-wrap gap-2">
                  {currentParrot.characteristics.map((characteristic, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                    >
                      {characteristic}
                    </span>
                  ))}
                </div>
              </div>

              {/* 顏色變種 */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800">常見顏色</h4>
                <div className="flex flex-wrap gap-2">
                  {currentParrot.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                了解更多飼養資訊
              </Button>
            </motion.div>
          </div>
        </div>

        {/* 縮圖導航 */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4 overflow-x-auto pb-4 px-4">
            {parrotData.map((parrot, index) => (
              <button
                key={parrot.id}
                className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  currentSlide === index 
                    ? 'border-purple-500 shadow-lg scale-110' 
                    : 'border-gray-200 hover:border-purple-300 hover:scale-105'
                }`}
                onClick={() => goToSlide(index)}
              >
                <img
                  src={parrot.image}
                  alt={parrot.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ParrotCarousel

