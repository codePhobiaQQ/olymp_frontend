import cn from 'classnames';
import cls from './LoginTab.module.scss';
import {VStack} from "@shared/ui/Stack";
import Text from "@shared/ui/Text/Text.tsx";
import {ReactComponent as Logo} from '@shared/assets/svg/logo/fullLogo.svg'
import {InputWithLabel} from "@shared/ui/InputWithLabel/InputWithLabel.tsx";
import Button from "@shared/ui/Button/Button.tsx";
import {SwitcherBtn as ForgotPasswordBtn} from './../../shared/SwitcherBtn/SwitcherBtn.tsx'
import {useAuthDialogTabs} from "@widgets/AuthDialog/lib/hooks/useAuthDialogTabs.ts";

type LoginTabProps = {};

export const LoginTab = (props: LoginTabProps) => {
  const {} = props
  const {setForgotPasswordTab} = useAuthDialogTabs()

  return (
    <VStack className={cn(cls.LoginTab)} align='center' max gap='48'>
      <Logo className={cn(cls.Logo)}/>
      <VStack align='center' max gap='16'>
        <Text className={cn(cls.DialogTitle)} text='Вход в аккаунт'/>
        <InputWithLabel placeholder='example@yandex.ru' label={'E-mail'}/>
        <InputWithLabel placeholder='test password' type={'password'} label={'Пароль'}
                        extraLabelComponent={<ForgotPasswordBtn onClick={setForgotPasswordTab} size='sm'
                                                                text='Забыли пароль ?'/>}/>
      </VStack>
      <Button colorTheme='blue_fill' variant='default'>Войти</Button>
      <Text align='center'>
        Авторизовавшись на сайте, вы соглашаетесь
        с <Text className={cn(cls.OfferSpan)} isParagraph={false}>Пользовательским соглашением</Text> и <Text
        className={cn(cls.OfferSpan)} isParagraph={false}>Правилами портала</Text>
      </Text>
    </VStack>
  );
};


