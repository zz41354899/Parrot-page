import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Send, Gift, Bell, Users, Star, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // 模擬 API 呼叫
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1500)
  }

  const benefits = [
    {
      icon: Gift,
      title: "獨家內容",
      description: "每週精選鸚鵡照護小貼士"
    },
    {
      icon: Bell,
      title: "最新資訊",
      description: "第一時間獲得新品種介紹"
    },
    {
      icon: Users,
      title: "社群活動",
      description: "參與線上線下鸚鵡愛好者聚會"
    },
    {
      icon: Star,
      title: "專家建議",
      description: "獸醫師和專家的專業飼養指導"
    }
  ]

  const socialLinks = [
    {
      name: "Facebook",
      icon: "📘",
      url: "#",
      description: "加入我們的 Facebook 社群"
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "#",
      description: "追蹤可愛鸚鵡日常"
    },
    {
      name: "YouTube",
      icon: "📺",
      url: "#",
      description: "觀看飼養教學影片"
    },
    {
      name: "Line",
      icon: "💬",
      url: "#",
      description: "加入 Line 官方帳號"
    }
  ]

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                歡迎加入鸚鵡大家庭！
              </h3>
              
              <p className="text-lg text-gray-600 mb-8">
                感謝您的訂閱！我們已經將歡迎禮包發送到您的信箱，
                請查收您的第一份鸚鵡飼養指南。
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-2xl mb-2">{social.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左側內容 */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-2 text-orange-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wide">加入我們的社群</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  不要錯過任何
                  <br />
                  鸚鵡小知識！
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  訂閱我們的電子報，獲得最新的鸚鵡飼養資訊、品種介紹、健康小貼士，
                  以及獨家的社群活動邀請。讓我們一起打造更美好的鸚鵡生活！
                </p>
              </div>

              {/* 訂閱表單 */}
              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="輸入您的電子郵件地址"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full focus:border-orange-500 focus:outline-none text-lg"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        立即訂閱
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  我們重視您的隱私，絕不會將您的資料分享給第三方。
                  您可以隨時取消訂閱。
                </p>
              </motion.form>

              {/* 社群連結 */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  或者，在社群媒體上關注我們
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                      whileHover={{ scale: 1.05, y: -2 }}
                      title={social.description}
                    >
                      <span className="text-xl">{social.icon}</span>
                      <span className="font-medium text-gray-700">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* 右側優點列表 */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  訂閱者專屬福利
                </h3>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* 統計數據 */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-600">5,000+</div>
                      <div className="text-sm text-gray-600">訂閱者</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-600">50+</div>
                      <div className="text-sm text-gray-600">品種介紹</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">100+</div>
                      <div className="text-sm text-gray-600">飼養小貼士</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

