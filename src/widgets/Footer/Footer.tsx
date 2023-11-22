import { messengersData } from '@shared/data/messengersData'
import cls from './Footer.module.scss'
import cn from 'classnames'
import AppImage from '@shared/ui/AppImage/AppImage'
import AppLink from '@shared/ui/AppLink/AppLink'
import { ReactComponent as LogoFooter } from '@shared/assets/images/svg/logo-footer.svg'
import Text from '@shared/ui/Text/Text'
import { olympData } from '@shared/data/olympData'
import { otherEventsData } from '@shared/data/otherEventsData'
import TopNavigation from '../Header/ui/TopNavigation/TopNavigation'

interface FooterI {
  className?: string
}

const Footer = ({ className = '' }: FooterI) => {
  return (
    <div className={cn(className, cls.Footer)}>
      <div className={cn(cls.FooterTopPart)}>
        <div className={cn(cls.ContactsPart, cls.FooterCol)}>
          <div className={cn(cls.FooterColInner)}>
            <LogoFooter />

            <div className={cn(cls.MessengersWrapper)}>
              {Object.values(messengersData).map((messenger) => (
                <div key={messenger.name} className={cls.MessengerItem}>
                  <AppImage wrapperClassName={cls.MessengerItemImage} src={messenger.image} />
                </div>
              ))}
            </div>

            <div className={cls.ContactsLinks}>
              <AppLink
                theme='default'
                className={cls.ContactLink}
                to={'mailto:support@v-olymp.ru'}
                text="support@v-olymp.ru"
              />
              <AppLink
                theme='default'
                className={cls.ContactLink}
                to={'tel:84959893789'}
                text="8 (495) 989 37 89"
              />
            </div>
          </div>
        </div>

        <div className={cn(cls.Olymps, cls.FooterCol)}>
          <div className={cn(cls.FooterColInner)}>
            <Text className={cls.FooterColTitle} text={'олимпиады, входящие в перерчень'} />
            <ul className={cls.FooterList}>
              {Object.values(olympData).map((olymp) => (
                <li className={cls.FooterListItemWrapper} key={olymp.name}>
                  <AppLink
                    className={cls.FooterListItem}
                    text={olymp.name}
                    theme='default'
                    to={olymp.path}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={cn(cls.Other, cls.FooterCol)}>
          <div className={cn(cls.FooterColInner)}>
            <Text className={cls.FooterColTitle} text={'другие мероприятия'} />
            <ul className={cls.FooterList}>
              {Object.values(otherEventsData).map((event) => (
                <li className={cls.FooterListItemWrapper} key={event.name}>
                  <AppLink
                    className={cls.FooterListItem}
                    text={event.name}
                    theme='default'
                    to={event.path}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={cn(cls.FooterBottomPart)}>
        <TopNavigation className={cls.FooterNavigation} />
      </div>
    </div>
  )
}

export default Footer
