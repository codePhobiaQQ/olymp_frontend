import Title, { TitleTheme } from '@shared/ui/Title/Title'
import cls from './OrganisatorsAndPartnersScreen.module.scss'
import cn from 'classnames'
import Text from '@shared/ui/Text/Text.tsx'
import AppLink, { AppLinkTheme } from '@shared/ui/AppLink/AppLink.tsx'

interface OrganisatorsAndPartnersI {
  className?: string
}

const OrganisatorsAndPartnersScreen = ({ className = '' }: OrganisatorsAndPartnersI) => {
  return (
    <section className={cn(className, cls.OrganisatorsAndPartnersScreen)}>
      <div className={cn(cls.container)}>
        <div className={cn(cls.TopSideInfo)}>
          <div className={cn(cls.TopSideInfoLeft)}>
            <Title theme={TitleTheme.H2} className={cn(cls.SectionTitle)} text="организаторы и партнеры" />
          </div>
          <div className={cn(cls.TopSideInfoRight)}>
            <Text
              className={cls.Text}
              text={
                'Межрегиональная олимпиада школьников имени И.Я. Верченко по математике и криптографии проводится в Институте криптографии, связи \n' +
                'и информатики Академии ФСБ России'
              }
            />

            <AppLink
              className={cn(cls.AddressLink)}
              theme={AppLinkTheme.DEFAULT_LINK}
              to={''}
              text={'119602, г Москва, Мичуринский проспект, д.70'}
            />
            <AppLink
              className={cn(cls.TelLink)}
              theme={AppLinkTheme.DEFAULT_LINK}
              to={'tel:84959893131'}
              text={'8(495) 989-31-31'}
            />
            <AppLink
              className={cn(cls.MailLink)}
              theme={AppLinkTheme.DEFAULT_LINK}
              to={'mailto:academy.fsb.ru'}
              text={'academy.fsb.ru'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrganisatorsAndPartnersScreen
