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
  'light',
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
  const { theme: mode, setTheme } = useTheme();
  const [colorTheme, setColorTheme] = React.useState('light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorTheme);
  }, [colorTheme]);

  const handleModeToggle = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };
  
  const isDark = mode === 'dark';

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
              {themes.map((t) => (
                <DropdownMenuItem key={t} onClick={() => setColorTheme(t)} className="capitalize">
                  {t === 'light' ? 'Default' : t}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
