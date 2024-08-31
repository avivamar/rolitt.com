"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { Button } from '@/components/ui/button';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import Link from 'next/link';


export default function AppPage() {
  const t = useTranslations('App');

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl text-muted-foreground">{t('description')}</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <Image
                src="/app/rolitt-app-mockup.png"
                alt="App Screenshot"
                width={482}
                height={960}
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-3xl font-semibold mb-4">{t('features')}</h2>
              <ul className="space-y-2 text-lg">
                <li>{t('feature1')}</li>
                <li>{t('feature2')}</li>
                <li>{t('feature3')}</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row justify-center gap-4">
  <Button
    variant="outline"
    size="lg"
    className="flex items-center justify-center gap-2"
    disabled
    asChild
  >
    <Link href="#">
      <FaGooglePlay className="w-6 h-6 text-[#00C853]" />
      Google Play
    </Link>
  </Button>
  <Button
    variant="outline"
    size="lg"
    className="flex items-center justify-center gap-2"
    disabled
    asChild
  >
    <Link href="#">
      <FaApple className="w-6 h-6 text-[#000000] dark:text-[#FFFFFF]" />
      App Store
    </Link>
  </Button>
</div>
            <p className="mt-4 text-muted-foreground">{t('comingSoon')}</p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}