import classNames from 'classnames';
export const ComponentSizes = {
  lg: 'lg' as ComponentSizeVariants,
  xl: 'lg' as ComponentSizeVariants,
  full: 'full' as ComponentSizeVariants,
};

export type ComponentSizeVariants = 'lg' | 'xl' | 'full';

export type GapSizes = 'gap-xl' | 'gap-x-0';

// @TODO: break out the grid class later so we don't have to tell each component to span 12 columns every time we render it
// const baseGridClasses = 'grid ';
// const defaultGridClasses = 'grid-cols-1' + baseGridClasses;
// const moreGridClasses = 'grid-cols-1 gap-y-0 md:grid-cols-12 md:gap-xl' + baseGridClasses;

// TODO: what are we doing with the event fields??
//
export type ComponentWrapperProps = {
  children?: React.ReactNode | React.ReactNode[];
  dataComponent?: string;
  variant: ComponentSizeVariants;
  backgroundVariant: string;
  gap?: GapSizes;
  backgroundColor: string;
  className?: string;
};

const containerVariants: Record<ComponentWrapperProps['variant'], string> = {
  full: 'w-full',
  xl: 'xl:mx-auto md:max-w-screen-xl',
  lg: 'lg:mx-auto md:max-w-screen-lg',
};
const containerBgVariants: Record<ComponentWrapperProps['backgroundVariant'], string> | '' = {
  Dark: 'theme-dark bg-theme-bg',
  Gray: 'theme-gray bg-light-grey',
  Light: 'theme-light',
};

const backgroundColorValue: Record<ComponentWrapperProps['backgroundColor'], string> = {
  primaryT90: 'bg-primary-t-90',
  secondaryS60: 'bg-secondary-s-60',
  gray50: 'bg-gray-50',
};

const Component = ({
  children,
  variant,
  dataComponent,
  backgroundVariant,
  gap,
  backgroundColor,
  className,
}: ComponentWrapperProps): JSX.Element => {
  const gridClass = `component-grid-container lg:grid grid-cols-2 gap-y-0  px-m md:grid-cols-12 px-[16px] md:px-[32px] lg:px-[24px] xl:px-[0px] md:${
    gap || 'gap-xl'
  }`;

  return (
    <section
      className={`component ${className && className} ${
        backgroundColor === 'gray50' ? 'bg-gray-50' : ''
      } ${backgroundVariant} ${
        backgroundVariant === 'heroBanner'
          ? 'pb-[48px] pt-[0px] lg:pb-[80px] lg:pt-[0px]'
          : backgroundVariant === 'hero'
          ? 'py-[0px] lg:pt-[0px]'
          : backgroundVariant === 'noSpaceComponent'
          ? 'py-[0px]'
          : backgroundVariant === 'searchComponent'
          ? 'single-search-component-container'
          : backgroundVariant !== 'undefined' && backgroundVariant !== ''
          ? 'pb-[48px] lg:pb-[64px]'
          : 'py-[48px] lg:py-[80px]'
      }`}
      data-component={dataComponent}
    >
      <div
        className={classNames(
          containerVariants[variant],
          backgroundColorValue[backgroundColor],
          containerBgVariants[backgroundVariant]
        )}
      >
        <div className={gridClass}>{children}</div>
      </div>
    </section>
  );
};
export default Component;
