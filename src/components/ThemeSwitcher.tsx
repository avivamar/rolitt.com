'use client';

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    audioRef.current = new Audio('/sounds/switch-theme.wav');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error('Error playing audio:', error));
    }
  };

  return (
    <Button onClick={toggleTheme} variant="outline" className="p-2">
      {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
    </Button>
  );
};

export default ThemeSwitcher;