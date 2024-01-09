import cn from 'classnames';
import AppLink, { AppLinkI } from './../AppLink/AppLink.tsx';
import Text, { TextI } from '@shared/ui/Text/Text.tsx';
import { HStack } from '@shared/ui/Stack';
import ArrowSvg, { ArrowSvgI } from '@shared/assets/svg/ArrowSvg.tsx';

type ArrowLinkProps = {
  className?: string;
  linkProps: Omit<AppLinkI, 'children' & 'content'>
  textProps?: TextI
  arrowProps?: ArrowSvgI
};

export const ArrowLink = (props: ArrowLinkProps) => {
  const { className = '', textProps, linkProps, arrowProps } = props;

  return (
    <AppLink {...linkProps} className={cn(className, linkProps?.className)}>
      <HStack max justify='between'>
        <Text {...textProps} fontSize={textProps?.fontSize ?? '18'} />
        <ArrowSvg {...arrowProps} className={arrowProps?.className || 'w_18 h_18'} />
      </HStack>
    </AppLink>
  );
};