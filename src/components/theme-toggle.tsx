'use client';

import * as React from 'react';
import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from '@/components/ui/dropdown-menu';

const themes = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
    'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
    'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
    'night', 'coffee', 'winter'
];

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    const currentThemeIsDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

    if (newTheme === 'light' || newTheme === 'dark' || newTheme === 'system') {
        document.documentElement.removeAttribute('data-theme');
        setTheme(newTheme);
    } else {
        document.documentElement.setAttribute('data-theme', newTheme);
        // Apply dark class if needed, but let data-theme drive colors
        if (currentThemeIsDark) {
             if (!document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.add('dark');
             }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
             }
        }
        // We set the base next-theme to light/dark to handle non-themed component overrides
        setTheme(currentThemeIsDark ? 'dark' : 'light'); 
    }
  };

  const handleModeToggle = () => {
    const currentDataTheme = document.documentElement.getAttribute('data-theme');
    const isCurrentlyDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

    if (isCurrentlyDark) {
      document.documentElement.classList.remove('dark');
      if (currentDataTheme) {
        setTheme('light');
      } else {
        handleThemeChange('light');
      }
    } else {
      document.documentElement.classList.add('dark');
       if (currentDataTheme) {
        setTheme('dark');
      } else {
        handleThemeChange('dark');
      }
    }
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" onClick={handleModeToggle}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('dark')}>
          Dark
        </DropdownMenuItem>
         <DropdownMenuItem onClick={() => handleThemeChange('system')}>
          System
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            <span>More Themes</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
                {themes.filter(t => t !== 'light' && t !== 'dark').map((themeName) => (
                    <DropdownMenuItem key={themeName} onClick={() => handleThemeChange(themeName)}>
                        {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

    