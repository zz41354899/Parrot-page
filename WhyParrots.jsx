import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Heart, Brain, Users, Clock, Star, Sparkles, Music, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

// 導入圖片
import happyParrot from '../assets/Z2DgZVOkxIGW.jpg'
import familyParrot from '../assets/iuyljPDblH70.jpg'
import smartParrot from '../assets/v7G0M8QTgoDT.jpg'

const WhyParrots = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Brain,
      title: "超高智商",
      description: "鸚鵡擁有驚人的學習能力和記憶力，能夠學會說話、解決問題，甚至理解簡單的概念。",
      details: "研究顯示，某些鸚鵡的智商相當於3-5歲的兒童，能夠進行邏輯思考和情感表達。",
      image: smartParrot,
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "情感豐富",
      description: "鸚鵡是極具情感的動物，能與主人建立深厚的感情連結，成為真正的家庭成員。",
      details: "牠們會表達喜怒哀樂，懂得安慰主人，甚至會因為主人的情緒變化而調整自己的行為。",
      image: happyParrot,
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Users,
      title: "社交天才",
      description: "鸚鵡天生具有強烈的社交需求，喜歡與人互動，能夠成為家庭聚會的焦點。",
      details: "牠們會模仿人類的行為和聲音，參與家庭活動，甚至學會不同家庭成員的說話方式。",
      image: familyParrot,
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "長久陪伴",
      description: "許多鸚鵡品種擁有很長的壽命，能夠陪伴你度過人生的重要階段。",
      details: "大型鸚鵡可以活到80年以上，小型鸚鵡也有15-30年的壽命，是真正的終生伴侶。",
      image: smartParrot,
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const benefits = [
    {
      icon: Music,
      title: "天然音樂家",
      description: "會唱歌、吹口哨，為家庭帶來歡樂的音樂氛圍"
    },
    {
      icon: Sparkles,
      title: "色彩繽紛",
      description: "美麗的羽毛色彩，如同活的藝術品裝點你的生活"
    },
    {
      icon: Shield,
      title: "忠誠守護",
      description: "會保護主人，對陌生人保持警覺，是可靠的家庭守護者"
    },
    {
      icon: Star,
      title: "獨特個性",
      description: "每隻鸚鵡都有獨特的個性和喜好，充滿驚喜"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* 標題區域 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            為什麼選擇鸚鵡？
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            鸚鵡不只是寵物，更是聰明、有趣、充滿愛心的家庭夥伴。
            讓我們一起探索鸚鵡為你的生活帶來的無限可能！
          </p>
        </motion.div>

        {/* 主要特色區域 */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左側圖片 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <motion.img
                  key={activeFeature}
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* 漸層覆蓋 */}
                <div className={`absolute inset-0 bg-gradient-to-t ${features[activeFeature].color} opacity-20`}></div>
              </div>

              {/* 浮動裝飾 */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Heart className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            {/* 右側內容 */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* 特色選項 */}
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                        activeFeature === index
                          ? 'border-blue-500 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveFeature(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                          {activeFeature === index && (
                            <motion.p 
                              className="text-blue-600 mt-3 font-medium"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                            >
                              {feature.details}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 額外優點網格 */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA 區域 */}
        <motion.div 
          className="text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            準備好迎接你的羽毛朋友了嗎？
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            加入我們的社群，獲得專業的飼養建議、品種選擇指南，以及與其他鸚鵡愛好者的交流機會
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              開始你的鸚鵡之旅
            </Button>
            <Button 
              size="lg"
              className="bg-green-500 text-white hover:bg-green-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              下載飼養指南
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyParrots

