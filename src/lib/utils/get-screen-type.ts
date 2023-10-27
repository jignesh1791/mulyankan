export type ScreenTypes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const getScreenType = (currentScreenWidth: number): ScreenTypes => {
  if (currentScreenWidth >= 1440) {
    return 'xxl';
  } else if (currentScreenWidth >= 1200) {
    return 'xl';
  } else if (currentScreenWidth >= 672) {
    return 'lg';
  } else if (currentScreenWidth >= 375) {
    return 'md';
  } else {
    return 'sm';
  }
};
