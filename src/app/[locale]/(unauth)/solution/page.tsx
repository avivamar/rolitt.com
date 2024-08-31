'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AuroraBackground } from '@/components/ui/aurora-background';
import Image from 'next/image';
import { HoverEffect } from "@/components/ui/card-hover-effect";

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function SolutionPage() {
    const t = useTranslations('Solution');
  
    const solutions = [
        {
          title: t('solution1_title'),
          description: t('solution1_description'),
          link: '/solution/1',
        },
        {
          title: t('solution2_title'),
          description: t('solution2_description'),
          link: '/solution/2',
        },
        {
          title: t('solution3_title'),
          description: t('solution3_description'),
          link: '/solution/3',
        },
        {
          title: t('solution4_title'),
          description: t('solution4_description'),
          link: '/solution/4',
        },
      ];
  
      return (
        <>
          <Navbar />
          <AuroraBackground>
          <main className="flex-grow relative overflow-hidden min-h-screen pb-16 flex flex-col justify-start bg-white dark:bg-black">              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="absolute top-0 left-0 w-full h-full"
              />
              <div className="container mx-auto px-4 py-20 md:py-24 relative z-10">                <Suspense fallback={<div>Loading...</div>}>
                  <MotionDiv 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                  >
                    <MotionDiv 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="mb-8"
                    >
                      <Image 
                        src="/solution.jpg" 
                        alt={t('solution_image_alt')} 
                        width={1200}
                        height={600}
                        className="w-full h-auto max-h-64 object-cover rounded-lg shadow-2xl"
                      />
                    </MotionDiv>
      
                    <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white">
                      <TextGenerateEffect words={t('title')} />
                    </h1>
                    <p className="mb-8 text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-200">{t('description')}</p>
                    
                    <HoverEffect items={solutions} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" />                  </MotionDiv>
                </Suspense>
              </div>
            </main>
          </AuroraBackground>
          <Footer />
          </>
  );
}

