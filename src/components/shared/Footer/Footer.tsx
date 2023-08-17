import { messengersData } from '@/shared/data/messengersData'
import LogoFooter from '../assets/svg/LogoFooter'
import cls from './Footer.module.scss'
import cn from 'classnames'
import AppImage from '../ui/AppImage/AppImage'
import AppLink, { AppLinkTheme } from '../ui/AppLink/AppLink'
import Typography from '../ui/Typography/Typography'
import { olympData } from '@/shared/data/olympData'
import { otherEventsData } from '@/shared/data/otherEventsData'
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
            <LogoFooter className={cn(cls.FooterLogo)} />
            <div className={cn(cls.MessengersWrapper)}>
              {Object.values(messengersData).map((messenger) => (
                <div key={messenger.name} className={cls.MessengerItem}>
                  <AppImage wrapperClassName={cls.MessengerItemImage} src={messenger.image} />
                </div>
              ))}
            </div>
            <div className={cls.ContactsLinks}>
              <AppLink
                theme={AppLinkTheme.DEFAULT_LINK}
                className={cls.ContactLink}
                to={'support@v-olymp.ru'}
                text="support@v-olymp.ru"
              />
              <AppLink
                theme={AppLinkTheme.DEFAULT_LINK}
                className={cls.ContactLink}
                to={'8 (495) 989 37 89'}
                text="8 (495) 989 37 89"
              />
            </div>
          </div>
        </div>
        <div className={cn(cls.Olymps, cls.FooterCol)}>
          <div className={cn(cls.FooterColInner)}>
            <Typography className={cls.FooterColTitle} text={'олимпиады, входящие в перерчень'} />
            <ul className={cls.FooterList}>
              {Object.values(olympData).map((olymp) => (
                <li className={cls.FooterListItemWrapper} key={olymp.name}>
                  <AppLink
                    className={cls.FooterListItem}
                    text={olymp.name}
                    theme={AppLinkTheme.DEFAULT_LINK}
                    to={olymp.path}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cn(cls.Other, cls.FooterCol)}>
          <div className={cn(cls.FooterColInner)}>
            <Typography className={cls.FooterColTitle} text={'другие мероприятия'} />
            <ul className={cls.FooterList}>
              {Object.values(otherEventsData).map((event) => (
                <li className={cls.FooterListItemWrapper} key={event.name}>
                  <AppLink
                    className={cls.FooterListItem}
                    text={event.name}
                    theme={AppLinkTheme.DEFAULT_LINK}
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
