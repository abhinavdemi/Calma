'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageCircle, Wind, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/chat', label: 'Chat', icon: MessageCircle },
  { href: '/breathe', label: 'Breathe', icon: Wind },
  { href: '/community', label: 'Community', icon: Users },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-sand-100 border-t border-sand-200 nav-safe">
      <div className="max-w-lg mx-auto flex items-stretch">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-all duration-300',
                isActive
                  ? 'text-sage-500'
                  : 'text-sand-400 hover:text-sand-600'
              )}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2 : 1.5}
                className="transition-all duration-300"
              />
              <span
                className={cn(
                  'text-xs font-sans transition-all duration-300',
                  isActive ? 'font-medium' : 'font-normal'
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
