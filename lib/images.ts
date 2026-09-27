/**
 * Photography library.
 *
 * These are representative, high-quality training photographs served from the
 * Unsplash CDN (free to use under the Unsplash License). They are rendered in
 * monochrome by the <Photo> component to keep the black & white identity.
 *
 * To use Carnage Gym's own photography: drop files into /public/images and
 * replace a `src` below with e.g. '/images/training-floor.jpg'. Every page
 * reads from this file, so one edit updates the whole site.
 */

const u = (id: string) => `https://images.unsplash.com/${id}`;

export type SiteImage = { src: string; alt: string };

export const images = {
  hero: {
    src: u('photo-1534438327276-14e5300c3a48'),
    alt: 'Dark, moody gym floor lined with dumbbells and training equipment',
  },
  lifter: {
    src: 'https://www.shutterstock.com/shutterstock/videos/27081754/thumb/12.jpg?ip=x480strenth',
    alt: 'Athlete gripping a loaded barbell under dramatic low light',
  },
  homeIntro: {
    src: 'https://media.istockphoto.com/id/2037469911/photo/biceps-training-with-dumbbell.jpg?s=612x612&w=0&k=20&c=Tv8Ask1clk4s7Kx-9byl7GwX78PcUDyifMd26R37LOk=',
    alt: 'Athlete training biceps with a dumbbell',
  },
  freeWeights: {
    src: 'https://i.pinimg.com/736x/4c/23/67/4c2367c6a01cc8c5e3e7bd565aad8037.jpg',
    alt: 'Dumbbell free weights in a gym',
  },
  interior: {
    src: u('photo-1540497077202-7c8a3999166f'),
    alt: 'Wide view of a gym interior with rows of strength machines',
  },
  dumbbells: {
    src: u('photo-1593079831268-3381b0db4a77'),
    alt: 'Close-up of heavy dumbbells resting on a rack',
  },
  cable: {
    src: u('photo-1581009146145-b5ef050c2e1e'),
    alt: 'Athlete training on a cable machine with intense focus',
  },
  kettlebell: {
    src: u('photo-1583454110551-21f2fa2afe61'),
    alt: 'Athlete mid-set in a functional training session',
  },
  plates: {
    src: u('photo-1526506118085-60ce8714f8c5'),
    alt: 'Weight plates and strength equipment in a dark gym',
  },
  chalk: {
    src: u('photo-1532029837206-abbe2b7620e3'),
    alt: 'Athlete preparing for a heavy lift with chalked hands',
  },
  cardio: {
    src: 'https://i.pinimg.com/736x/cd/cf/9a/cdcf9a4c20b63421dd8e420e6ee77ea4.jpg',
    alt: 'Row of cardio machines in a modern gym',
  },
  rack: {
    src: u('photo-1605296867304-46d5465a13f1'),
    alt: 'Neat rack of dumbbells along a gym wall',
  },
  focus: {
    src: u('photo-1599058917212-d750089bc07e'),
    alt: 'Athlete standing in focus between sets',
  },
  floor: {
    src: u('photo-1571902943202-507ec2618e8f'),
    alt: 'Open training floor with equipment ready for use',
  },
} satisfies Record<string, SiteImage>;
