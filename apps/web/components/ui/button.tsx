import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium font-sans transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-sand-600 text-sand-50 hover:bg-sand-700 active:scale-[0.98]',
        secondary:
          'bg-sand-200 text-sand-800 hover:bg-sand-300 active:scale-[0.98]',
        ghost:
          'text-sand-600 hover:bg-sand-100 hover:text-sand-700',
        outline:
          'border border-sand-300 bg-transparent text-sand-700 hover:bg-sand-100',
        sage:
          'bg-sage-300 text-sand-900 hover:bg-sage-400 active:scale-[0.98]',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4',
        lg: 'h-13 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
