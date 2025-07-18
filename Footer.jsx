import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "鸚鵡品種": [
      "虎皮鸚鵡",
      "金剛鸚鵡",
      "玄鳳鸚鵡",
      "愛情鳥",
      "和尚鸚鵡"
    ],
    "飼養指南": [
      "新手入門",
      "日常照護",
      "健康管理",
      "訓練技巧",
      "營養餵食"
    ],
    "社群服務": [
      "線上諮詢",
      "社群活動",
      "專家問答",
      "經驗分享",
      "緊急救援"
    ]
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "電子郵件",
      value: "hello@parrotworld.com"
    },
    {
      icon: Phone,
      label: "客服專線",
      value: "0800-123-456"
    },
    {
      icon: MapPin,
      label: "服務地區",
      value: "全台灣地區"
    }
  ]

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-600"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "#",
      color: "hover:text-red-600"
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* 主要內容區域 */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* 品牌區域 */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                鸚鵡世界
              </h3>
              <p className="text-gray-300 leading-relaxed">
                致力於推廣正確的鸚鵡飼養知識，
                讓每一隻鸚鵡都能在愛與關懷中快樂成長。
              </p>
            </div>

            {/* 聯絡資訊 */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <IconComponent className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-300">{contact.value}</span>
                  </div>
                )
              })}
            </div>

            {/* 社群連結 */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-gray-600`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* 連結區域 */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 分隔線 */}
      <div className="border-t border-gray-700"></div>

      {/* 版權區域 */}
      <motion.div 
        className="container mx-auto px-4 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© {currentYear} 鸚鵡世界. 版權所有</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>用愛打造</span>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-orange-400 transition-colors">
              隱私政策
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              服務條款
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Cookie 政策
            </a>
          </div>
        </div>
      </motion.div>

      {/* 裝飾性背景元素 */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </footer>
  )
}

export default Footer

