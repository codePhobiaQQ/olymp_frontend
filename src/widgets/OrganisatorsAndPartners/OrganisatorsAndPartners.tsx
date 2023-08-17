import Title from '@/components/shared/ui/Titles/Title'
import cls from './OrganisatorsAndPartners.module.css'
import cn from 'classnames'
import acadosBg from '@/components/shared/assets/univ/acados.jpg'
import Typography, { TypographyTheme } from '@/components/shared/ui/Typography/Typography'
import AppLink, { AppLinkTheme } from '@/components/shared/ui/AppLink/AppLink'
import { organisatorsData } from '@/shared/data/organisatorsData'
import ButtonWithArrow from '@/components/shared/ui/Button/ButtonWithArrow'
import AppImage from '@shared/ui/AppImage/AppImage'

interface OrganisatorsAndPartnersI {
  className?: string
}

const OrganisatorsAndPartners = ({ className = '' }: OrganisatorsAndPartnersI) => {
  return (
    <section className={cn(className, cls.OrganisatorsAndPartners)}>
      <div className={cn(cls.OrganisatorsAndPartnersInner)}>
        <Title className={cn(cls.SectionTitle)} text="организаторы и партнеры" />

        <div className={cn(className, cls.ContentWrapper)}>
          <div className={cn(className, cls.Contacts)}>
            <Typography
              className={cn(cls.Where)}
              text="Межрегиональная олимпиада школьников имени И.Я. Верченко по математике и криптографии проводится в Институте криптографии, связи 
и информатики Академии ФСБ России"
              theme={TypographyTheme.PARAGRAPH_THEME}
            />
            <AppLink
              className={cn(cls.InfoLink)}
              theme={AppLinkTheme.DEFAULT_LINK}
              to="/"
              text="119602, г Москва, Мичуринский проспект, д.70"
            />
            <AppLink className={cn(cls.InfoLink)} theme={AppLinkTheme.DEFAULT_LINK} to="/" text="8(495) 989-31-31" />
            <AppLink className={cn(cls.InfoLink)} theme={AppLinkTheme.DEFAULT_LINK} to="/" text="academy.fsb.ru" />
          </div>
          <div className={cn(className, cls.UnivList)}>
            <ul>
              {Object.values(organisatorsData).map((organisator) => (
                <li key={organisator.name} className={cls.UnivListItem}>
                  {organisator.name}
                </li>
              ))}
            </ul>
            <ButtonWithArrow text="Полный список ВУЗов" />
          </div>
        </div>
      </div>

      <div className={cn(cls.UniversityImageWrapper)}>
        <AppImage className={cn(cls.UniversityImage)} src={acadosBg} />
      </div>
    </section>
  )
}

export default OrganisatorsAndPartners
