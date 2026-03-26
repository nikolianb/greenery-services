export default function Logo({ variant = 'light', size = 'md' }) {
  const imgSize = size === 'sm' ? 'h-8' : 'h-10';

  return (
    <img
      src="/logo.png"
      alt="Greenery Services Logo"
      className={`${imgSize} w-auto`}
    />
  );
}
