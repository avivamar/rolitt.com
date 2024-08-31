'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/ui/carousel";

// ... 其他导入和 stripePromise

export function PreOrderContent({ t }) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePreOrder = async () => {
    // ... 处理预订逻辑
  };

  return (
    <>
      <StarsBackground />
      <ShootingStars />
      <div className="container mx-auto px-4 py-16 relative z-10">
      <main className="relative overflow-hidden">
        <StarsBackground />
        <ShootingStars />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="mb-8 text-5xl md:text-6xl font-bold text-center">
              {t('title')}
            </h1>
            <p className="mb-12 text-xl text-center">{t('description')}</p>
            
            <Carousel className="mb-12">
              <Image src="/images/robot-toy-1.jpg" alt="Robot Toy 1" width={800} height={600} className="rounded-lg shadow-2xl" />
              <Image src="/images/robot-toy-2.jpg" alt="Robot Toy 2" width={800} height={600} className="rounded-lg shadow-2xl" />
              <Image src="/images/robot-toy-3.jpg" alt="Robot Toy 3" width={800} height={600} className="rounded-lg shadow-2xl" />
            </Carousel>

            <Tabs defaultValue="features" className="mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">{t('features')}</TabsTrigger>
                <TabsTrigger value="specs">{t('specs')}</TabsTrigger>
                <TabsTrigger value="rules">{t('preOrderRules')}</TabsTrigger>
              </TabsList>
              <TabsContent value="features">
                <Card>
                  <CardContent className="space-y-2 pt-6">
                    <ul className="list-disc list-inside space-y-2">
                      <li>{t('feature1')}</li>
                      <li>{t('feature2')}</li>
                      <li>{t('feature3')}</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="specs">
                <Card>
                  <CardContent className="space-y-2 pt-6">
                    <ul className="list-disc list-inside space-y-2">
                      <li>{t('spec1')}</li>
                      <li>{t('spec2')}</li>
                      <li>{t('spec3')}</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="rules">
                <Card>
                  <CardContent className="space-y-2 pt-6">
                    <ul className="list-disc list-inside space-y-2">
                      <li>{t('rule1')}</li>
                      <li>{t('rule2')}</li>
                      <li>{t('rule3')}</li>
                      <li>{t('rule4')}</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold mb-4">{t('earlyBirdOffer')}</h3>
              <p className="text-xl mb-6">{t('offerDescription')}</p>
              <Badge variant="secondary" className="mb-4">{t('limitedTimeOffer')}</Badge>
              <Button
  onClick={handlePreOrder}
  disabled={isLoading}
  className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 text-xl font-bold rounded-full transform hover:scale-105 transition duration-300 shadow-lg"
>
  {isLoading ? t('processing') : t('preOrderNow')}
</Button>
            </div>

            <div className="text-center text-sm opacity-75">
              <p>{t('termsAndConditions')}</p>
            </div>
          </motion.div>
        </div>
      </main>
      </div>
    </>
  );
}