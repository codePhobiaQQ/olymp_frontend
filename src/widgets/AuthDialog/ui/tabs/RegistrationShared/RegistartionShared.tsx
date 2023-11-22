import cn from 'classnames';
import Button from '@shared/ui/Button/Button.tsx';

import { ReactComponent as Logo } from '@shared/assets/svg/logo/fullLogo.svg';
import { ReactComponent as Student } from '@shared/assets/svg/auth/student.svg';
import { ReactComponent as  Teacher } from '@shared/assets/svg/auth/teacher.svg';
import { ReactComponent as University } from '@shared/assets/svg/auth/university.svg';

import cls from './../../../ui/tabs/LoginTab/LoginTab.module.scss';
import { VStack } from '@shared/ui/Stack';
import Text from '@shared/ui/Text/Text.tsx';
import { Rules } from './../../../ui/shared/Rules/Rules.tsx';
import { useAuthDialogTabs } from '@widgets/AuthDialog/lib/hooks/useAuthDialogTabs.ts';

export const RegistrationShared = () => {
  const { setRegistrationStudentsTab, setRegistrationUniversitiesTab, setRegistrationTeacherTab } = useAuthDialogTabs()

  return (
    <VStack className={cn(cls.LoginTab)} align='center' max gap='48'>
      <Logo className={cn(cls.Logo)} />

      <VStack align='center' max gap='24'>
        <VStack align='center' max gap='12'>
          <Text weight='medium' textAlign='center' fontSize='26' className={cn(cls.DialogTitle)} text='Регистрация' />
          <Text isParagraph fontSize='16' weight='regular' textAlign='center' className={cn(cls.DialogTitle)}
                text='На нашем сайте существует несколько различных видов регистрации:' />
        </VStack>

        <VStack align='center' gap='16' max>
          <Button onClick={setRegistrationStudentsTab} className={cn(cls.RegBtn)} colorTheme='grey_transparent' variant='auth'>
            <Student />
            <Text>Регистрация для школьников</Text>
          </Button>
          <Button onClick={setRegistrationTeacherTab} className={cn(cls.RegBtn)} colorTheme='grey_transparent' variant='auth'>
            <Teacher />
            <Text>Регистрация для преподавателей</Text>
          </Button>
          <Button onClick={setRegistrationUniversitiesTab} className={cn(cls.RegBtn)} colorTheme='grey_transparent' variant='auth'>
            <University />
            <Text>Регистрация для ВУЗов</Text>
          </Button>
        </VStack>

        <Text textAlign='center'>
          Есть аккаунт? <Text className={cn(cls.OfferSpan)} text='Войти' isParagraph={false} />
        </Text>
      </VStack>

      <Rules introText='Зарегистрировавшись, вы соглашаетесь ' />
    </VStack>
  );
};