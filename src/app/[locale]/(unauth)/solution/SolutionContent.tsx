'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { AuroraBackground } from '@/components/ui/aurora-background';
import Image from 'next/image';
import { CardHoverEffect } from "@/components/ui/card-hover-effect";

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-64 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-4/6 mb-4"></div>
    </div>
  );
}

export default function SolutionContent({ solutions, t }) {
  return (
    <AuroraBackground>
      <main className="flex-grow relative overflow-hidden min-h-screen flex flex-col justify-center">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Suspense fallback={<LoadingSkeleton />}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="mb-8 text-4xl md:text-5xl font-bold text-center">
                  <TextGenerateEffect words={t('title')} />
                </h1>
                <MotionDiv 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mb-12"
                >
                  <Image 
                    src="/about.jpg" 
                    alt={t('solution_image_alt')} 
                    width={1200}
                    height={600}
                    className="w-full h-auto max-h-64 object-cover rounded-lg shadow-2xl"
                  />
                </MotionDiv>
                <p className="mb-12 text-lg md:text-xl text-center">{t('description')}</p>
                <CardHoverEffect items={solutions} />
              </MotionDiv>
            </Suspense>
          </div>
        </div>
      </main>
    </AuroraBackground>
  );
}