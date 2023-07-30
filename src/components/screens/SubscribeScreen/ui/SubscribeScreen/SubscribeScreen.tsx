import { useState, useCallback } from 'react'
import AppImage from '@/components/shared/ui/AppImage/AppImage'
import cls from './SubscribeScreen.module.css'
import cn from 'classnames'
import bg from '@components/ui/assets/images/subscribe/subscribeBg.jpg'
import Title, { TitleTheme } from '@/components/shared/ui/Titles/Title'
import Typography, { TypographyTheme } from '@/components/shared/ui/Typography/Typography'
import SubscribeInputField from '../SubscribeInputField/SubscribeInputField'

interface SubscribeScreenI {
	className?: string
}

const SubscribeScreen = ({ className = '' }: SubscribeScreenI) => {
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
							className={'ttu'}
							theme={TitleTheme.H3}
							text={'подпишитесь на рассылку о новостях и событиях портала v-olymp.ru'}
						/>
						<Typography
							theme={TypographyTheme.PARAGRAPH_THEME}
							text='Нажимая подписаться вы принимаете условия Пользовательского соглашения и Политики конфиденциальности '
						/>

						{/* <SubscribeInputField value={email} onChange={changeHandler} /> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SubscribeScreen
