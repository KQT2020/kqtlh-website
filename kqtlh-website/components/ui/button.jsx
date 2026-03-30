export function Button({ className = '', variant = 'default', size = 'default', ...props }) {
  const base =
    'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-stone-400 disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-stone-900 text-white hover:bg-stone-800',
    outline: 'border border-stone-300 text-stone-900 hover:bg-stone-100',
  };

  const sizes = {
    default: 'h-10 px-4 py-2 text-sm',
    lg: 'h-12 px-6 py-3 text-base',
  };

  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()} {...props} />;
}
