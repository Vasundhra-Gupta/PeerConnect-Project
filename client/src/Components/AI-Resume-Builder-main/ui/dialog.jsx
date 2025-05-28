import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '../utils';
import { forwardRef } from 'react';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            'fixed inset-0 z-50 bg-[#00000080]', // Semi-transparent black overlay
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            className
        )}
        {...props}
    />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = forwardRef(
    ({ className, setOpenDialog, children, ...props }, ref) => (
        <DialogPortal>
            <DialogOverlay />
            <DialogPrimitive.Content
                ref={ref}
                className={cn(
                    'fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%]',
                    'border border-[#4977ec20] bg-[#f6f6f6] shadow-lg shadow-[#4977ec10]', // Theme colors
                    'data-[state=open]:animate-in data-[state=closed]:animate-out',
                    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
                    'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
                    'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
                    'rounded-xl p-6 space-y-4',
                    className
                )}
                {...props}
            >
                {children}
                <DialogPrimitive.Close
                    onClick={() => setOpenDialog(false)}
                    className={cn(
                        'absolute right-4 top-4 rounded-full p-1.5',
                        'text-[#4977ec] hover:text-[#3b62c2]',
                        'hover:bg-[#4977ec15] transition-colors',
                        'focus:outline-none focus:ring-2 focus:ring-[#4977ec40]',
                        'disabled:pointer-events-none'
                    )}
                >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
            </DialogPrimitive.Content>
        </DialogPortal>
    )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }) => (
    <div
        className={cn(
            'flex flex-col space-y-2 text-center sm:text-left',
            className
        )}
        {...props}
    />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }) => (
    <div
        className={cn(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3',
            'pt-4 border-t border-[#4977ec20]', // Theme border color
            className
        )}
        {...props}
    />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(
            'text-xl font-semibold leading-none tracking-tight text-[#1a1a1a]', // Dark text
            className
        )}
        {...props}
    />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn(
            'text-sm text-[#555555]', // Medium gray text
            'leading-relaxed',
            className
        )}
        {...props}
    />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};
