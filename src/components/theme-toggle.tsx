'use client';

import * as React from 'react';
import { Moon, Palette, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';

const themes = [
  'forest',
  'cyberpunk',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'valentine',
  'halloween',
  'garden',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [colorTheme, setColorTheme] = React.useState('light');

  React.useEffect(() => {
    // When the component mounts, find the color theme from the current class string
    const currentTheme = themes.find(t => document.documentElement.classList.contains(t)) || 'light';
    setColorTheme(currentTheme);
  }, []);

  React.useEffect(() => {
    // When theme changes (e.g., via localStorage), update the color theme state
    const currentTheme = themes.find(t => theme?.includes(t)) || 'light';
    setColorTheme(currentTheme);
  }, [theme]);


  const handleModeToggle = (checked: boolean) => {
    const newMode = checked ? 'dark' : 'light';
    if (colorTheme && colorTheme !== 'light' && colorTheme !== 'dark') {
      setTheme(`${newMode} ${colorTheme}`);
    } else {
      setTheme(newMode);
    }
  };

  const handleColorChange = (newColor: string) => {
      setColorTheme(newColor);
      const isDark = resolvedTheme?.includes('dark');
      if (newColor === 'light') {
          setTheme(isDark ? 'dark' : 'light')
      } else {
        setTheme(isDark ? `dark ${newColor}` : newColor);
      }
  }

  const isDark = resolvedTheme === 'dark' || (resolvedTheme?.includes('dark') ?? false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-between p-2">
            <div className='flex items-center gap-2'>
                {isDark ? <Moon size={16} /> : <Sun size={16} />}
                <span>{isDark ? 'Dark' : 'Light'} Mode</span>
            </div>
            <Switch
                checked={isDark}
                onCheckedChange={handleModeToggle}
            />
        </div>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Color Themes</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => handleColorChange('light')} className="capitalize">
                    Default
                </DropdownMenuItem>
              {themes.map((t) => (
                <DropdownMenuItem key={t} onClick={() => handleColorChange(t)} className="capitalize">
                  {t}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}