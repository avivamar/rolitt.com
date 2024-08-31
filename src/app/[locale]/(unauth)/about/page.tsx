'use client';

import { useTranslations } from 'next-intl';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from 'next/image';
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
        <StarsBackground />
        <ShootingStars />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-12"
            >
              <Image 
                src="/about.png" 
                alt={t('about_image_alt')} 
                width={1440}
                height={720}
                className="w-full h-auto max-h-[480px] object-cover rounded-lg shadow-2xl"
              />
            </motion.div>

            <h1 className="mb-8 text-4xl md:text-5xl font-bold text-center">
              <TextGenerateEffect words={t('title')} />
            </h1>
            <p className="mb-12 text-xl text-left">{t('description')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
  whileHover={{ scale: 1.02 }}
  className="bg-card text-card-foreground dark:dark:fill-[#EBFF7F] dark:text-white p-8 rounded-xl shadow-lg dark:shadow-2xl dark:shadow-primary/20 transition-all duration-300"
>
  <h2 className="mb-4 text-2xl text-center font-semibold text-primary dark:text-primary-foreground">{t('mission_title')}</h2>
  <p className="text-lg dark:text-gray-300">{t('mission_description')}</p>
</motion.div>
<motion.div 
  whileHover={{ scale: 1.02 }}
  className="bg-card text-card-foreground dark:dark:fill-[#EBFF7F] dark:text-white p-8 rounded-xl shadow-lg dark:shadow-2xl dark:shadow-primary/20 transition-all duration-300"
>
  <h2 className="mb-4 text-2xl text-center font-semibold text-primary dark:text-primary-foreground">{t('vision_title')}</h2>
  <p className="text-lg dark:text-gray-300">{t('vision_description')}</p>
</motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}