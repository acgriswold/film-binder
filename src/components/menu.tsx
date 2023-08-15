'use client';

import { useCallback } from 'react';
import { Sailboat } from 'lucide-react';
import { WindowTitlebar } from 'tauri-controls';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { AboutDialog } from './about-dialog';
import { ExamplesNav } from './examples-nav';
import { MenuModeToggle } from './menu-mode-toggle';
import { Dialog, DialogTrigger } from './ui/dialog';

export function Menu() {
  const closeWindow = useCallback(async () => {
    const { appWindow } = await import('@tauri-apps/plugin-window');
    appWindow.close();
  }, []);

  return (
    <WindowTitlebar windowControlsProps={{ platform: 'windows' }}>
      <Menubar className="rounded-none border-b border-none pl-2 lg:pl-3">
        <MenubarMenu>
          {/* App Logo */}
          <div className="inline-flex h-fit w-fit items-center text-cyan-500">
            <Sailboat className="h-5 w-5" />
          </div>
        </MenubarMenu>

        {/* App Menu */}
        <MenubarMenu>
          <MenubarTrigger className="font-bold">App</MenubarTrigger>
          <Dialog modal={false}>
            <MenubarContent>
              <DialogTrigger asChild>
                <MenubarItem>About App</MenubarItem>
              </DialogTrigger>

              <MenubarSeparator />
              <MenubarItem>
                Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>

            <AboutDialog />
          </Dialog>
        </MenubarMenu>

        {/* Theme Menu */}
        <MenuModeToggle />

        {/* Examples Menu */}
        <ExamplesNav />
      </Menubar>
    </WindowTitlebar>
  );
}
