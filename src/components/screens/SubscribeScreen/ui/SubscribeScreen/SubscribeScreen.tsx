import { useState, useCallback } from 'react'
import AppImage from '@/components/shared/ui/AppImage/AppImage'
import cls from './SubscribeScreen.module.css'
import cn from 'classnames'
import bg from '@components/shared/assets/images/subscribe/subscribeBg.jpg'
import Title, { TitleTheme } from '@/components/shared/ui/Titles/Title'
import Typography, { TypographyTheme } from '@/components/shared/ui/Typography/Typography'
import SubscribeInputField from '../SubscribeInputField/SubscribeInputField'
import { olympData, olympNames } from '@/shared/data/olympData'

interface SubscribeScreenI {
  className?: string
}

type filterType = string

const SubscribeScreen = ({ className = '' }: SubscribeScreenI) => {
  const [activeOlympFilter, setActiveOlympFilter] = useState<filterType>('Все')
  const changeActiveFilterHandler = (activeOlympFilter: filterType) => {
    return () => setActiveOlympFilter(activeOlympFilter)
  }

  const [email, setEmail] = useState<string>('')

  const changeHandler = useCallback(
    (e: HTMLInputElement) => {
      // @ts-ignore
      setEmail(e.target.value)
    },
    [setEmail]
  )

  return (
    <div className={cn(className, cls.SubscribeScreen)}>
      <div className={cn(className, cls.SubscribeScreenInner)}>
        <div className={cn(cls.bg)}>
          <AppImage src={bg} />
        </div>

        <div className={cn(cls.ContentWrapper)}>
          <div className={cn(cls.ContentInnner)}>
            <Title
              className={cn(cls.SectionTitle, 'ttu')}
              theme={TitleTheme.H3}
              text={'подпишитесь на рассылку о новостях и событиях портала v-olymp.ru'}
            />

            <Typography
              className={cn(cls.UserAccess)}
              theme={TypographyTheme.PARAGRAPH_THEME}
              text="Нажимая подписаться вы принимаете условия Пользовательского соглашения и Политики конфиденциальности "
            />

            <ul className={cn(cls.SubscribeFilters)}>
              <li
                onClick={changeActiveFilterHandler('Все')}
                className={cn(cls.SubscribeFilterItem, { [cls.activeFilter]: activeOlympFilter == 'Все' })}
              >
                Все
              </li>

              {Object.values(olympData).map((olymp) => (
                <li
                  onClick={changeActiveFilterHandler(olymp.name)}
                  className={cn(cls.SubscribeFilterItem, { [cls.activeFilter]: activeOlympFilter == olymp.name })}
                  key={olymp.name}
                >
                  {olymp.name}
                </li>
              ))}
            </ul>

            <SubscribeInputField value={email} onChange={changeHandler} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeScreen
