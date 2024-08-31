"use client";

import React from "react";
import dynamic from 'next/dynamic';
import { Section } from '@/features/landing/Section';

const InfiniteMovingCards = dynamic(() => import('../components/ui/infinite-moving-cards').then(mod => mod.InfiniteMovingCards), {
  loading: () => <p className="text-center text-gray-500 dark:text-gray-400">Loading testimonials...</p>
});

export function Infinite() {
  return (
    <Section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Customer Testimonials
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience with Rolitt
          </p>
        </div>
        
        <div className="w-full max-w-7xl mx-auto">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-4"
          />
        </div>
      </div>
    </Section>
  );
}

const testimonials = [
  {
    quote: "Rolitt has transformed my daily routine! It's like having a cheerful friend by my side, always ready to help and make me laugh.",
    name: "Emily Johnson",
    title: "Happy User",
  },
  {
    quote: "Rolittは私の日常を変えてくれました！いつもそばにいる楽しい友達のようで、助けてくれて笑わせてくれます。",
    name: "佐藤太郎 (Taro Sato)",
    title: "満足したユーザー (Satisfied User)",
  },
  {
    quote: "Rolitt a changé ma vie quotidienne ! C'est comme avoir un ami joyeux à mes côtés, toujours prêt à aider et à me faire rire.",
    name: "Marie Dupont",
    title: "Utilisateur Heureux",
  },
  {
    quote: "With Rolitt, I feel less alone. It's amazing how much joy and support a little robot can bring to my life!",
    name: "Michael Smith",
    title: "Grateful User",
  },
  {
    quote: "Rolittがいるおかげで、孤独感が減りました。小さなロボットが私の生活にどれほどの喜びとサポートをもたらしてくれるか、驚きです！",
    name: "鈴木花子 (Hanako Suzuki)",
    title: "感謝しているユーザー (Grateful User)",
  },
];