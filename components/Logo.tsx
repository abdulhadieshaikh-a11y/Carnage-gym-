import Image from 'next/image';

/**
 * CARNAGE GYM brand mark.
 *
 * The supplied wordmark is recreated as a transparent SVG for use on the
 * site's dark header and footer.
 */
const LOGO: { light: string; dark?: string; width: number; height: number } = {
  light: '/carnage-logo.svg',
  width: 700,
  height: 140,
};

type Props = { tone?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string };

export default function Logo({ tone = 'light', size = 'md', className = '' }: Props) {
  if (LOGO) {
    const src = tone === 'dark' && LOGO.dark ? LOGO.dark : LOGO.light;
    const h = size === 'lg' ? 64 : size === 'sm' ? 32 : 40;
    return (
      <Image
        src={src}
        alt="Carnage Gym"
        width={Math.round((LOGO.width / LOGO.height) * h)}
        height={h}
        priority
        className={className}
      />
    );
  }

  return null;
}
