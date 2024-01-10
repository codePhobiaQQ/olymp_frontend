import { useState } from 'react'
import AppImage from '@shared/ui/AppImage/AppImage'
import cls from './SubscribeScreen.module.scss'
import cn from 'classnames'
import bg from '@shared/assets/images/subscribe/subscribeBg.jpg'
import { Title } from '@shared/ui/titles'
import Text from '@shared/ui/Text/Text'
// import SubscribeInputField from '../SubscribeInputField/SubscribeInputField'
import { olympData } from '@shared/data/olympData'

interface SubscribeScreenI {
  className?: string
}

type filterType = string

const SubscribeScreen = ({ className = '' }: SubscribeScreenI) => {
  const [activeOlympFilter, setActiveOlympFilter] = useState<filterType>('Все')
  const changeActiveFilterHandler = (activeOlympFilter: filterType) => {
    return () => setActiveOlympFilter(activeOlympFilter)
  }

  // const [email, setEmail] = useState<string>('')

  // const changeHandler = useCallback(
  //   (e: HTMLInputElement) => {
  //     // @ts-ignore
  //     setEmail(e.target.value)
  //   },
  //   [setEmail]
  // )

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
              tag='h3'
              text={'подпишитесь на рассылку о новостях и событиях портала v-olymp.ru'}
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

            {/*<SubscribeInputField value={email} onChange={changeHandler} />*/}

            <Text
              className={cn(cls.UserAccess)}
              text="Нажимая подписаться вы принимаете условия Пользовательского соглашения и Политики конфиденциальности "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeScreen
