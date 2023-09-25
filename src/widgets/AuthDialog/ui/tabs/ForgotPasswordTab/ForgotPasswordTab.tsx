import cn from 'classnames';
import cls from './ForgotPasswordTab.module.scss';
import {VStack} from "@shared/ui/Stack";
import Text from "@shared/ui/Text/Text.tsx";
import {InputWithLabel} from "@shared/ui/InputWithLabel/InputWithLabel.tsx";
import {SwitcherBtn as RegistrationTabBtn} from './../../shared/SwitcherBtn/SwitcherBtn.tsx'
import Button from "@shared/ui/Button/Button.tsx";
import {useAuthDialogTabs} from "@widgets/AuthDialog/lib/hooks/useAuthDialogTabs.ts";

type ForgotTabProps = {
};

export const ForgotPasswordTab = (props: ForgotTabProps) => {
  const {} = props
  const { setPrevRegistrationTab } = useAuthDialogTabs()

  return (
    <VStack className={cn(cls.ForgotPasswordTab)} align='center' max gap='40'>
      <Text className={cn(cls.DialogTitle)} text='восстановить пароль'/>

      <VStack align='center' max gap='16'>
        <InputWithLabel placeholder='example@yandex.ru' label={'E-mail*'}/>
        <RegistrationTabBtn onClick={setPrevRegistrationTab} size='m' text='Регистрация' />
      </VStack>

      <Button colorTheme='blue_fill' variant='default'>Оправить</Button>
    </VStack>
  );
};