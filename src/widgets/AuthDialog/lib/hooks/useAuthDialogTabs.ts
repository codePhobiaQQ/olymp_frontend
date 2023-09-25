import {useDispatch, useSelector} from "react-redux";
import {getActiveAuthTab} from "./../../model/selectors/authDialogSelectors.ts";
import {tabType} from "./../../model/types/AuthDialogSchema.ts";
import {AuthDialogActions} from "@widgets/AuthDialog";
import {PREV_REGISTRATION_TAB_LS_KEY} from "@widgets/AuthDialog/lib/consts/localstorage.ts";

interface useAuthDialogTabsPayload {
  activeTab: tabType
  setRegistrationSharedTab: () => void,
  setRegistrationTeacherTab: () => void,
  setRegistrationStudentsTab: () => void,
  setRegistrationUniversitiesTab: () => void,
  setLoginTab: () => void,
  setForgotPasswordTab: () => void,
  setPrevRegistrationTab: () => void
}

export const useAuthDialogTabs = (): useAuthDialogTabsPayload => {
  const activeTab = useSelector(getActiveAuthTab)
  const dispatch = useDispatch()
  const {setActiveTab} = AuthDialogActions

  const setRegistrationSharedTab = () => {
    dispatch(setActiveTab('registration_shared'))
  }

  const setRegistrationTeacherTab = () => {
    dispatch(setActiveTab('registration_teachers'))
  }

  const setRegistrationStudentsTab = () => {
    dispatch(setActiveTab('registration_students'))
  }

  const setRegistrationUniversitiesTab = () => {
    dispatch(setActiveTab('registration_universities'))
  }

  const setPrevRegistrationTab = () => {
    const prevRegTab = localStorage.getItem(PREV_REGISTRATION_TAB_LS_KEY) as tabType || 'registration_shared'
    dispatch(setActiveTab(prevRegTab))
  }

  const setLoginTab = () => {
    dispatch(setActiveTab('login'))
  }

  const setForgotPasswordTab = () => {
    dispatch(setActiveTab('forgotPassword'))
  }

  return {
    activeTab,
    setRegistrationSharedTab,
    setRegistrationTeacherTab,
    setRegistrationStudentsTab,
    setRegistrationUniversitiesTab,
    setLoginTab,
    setForgotPasswordTab,
    setPrevRegistrationTab
  }
}