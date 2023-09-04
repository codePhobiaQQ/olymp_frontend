export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)

  console.log(section, 'section')

  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth', // Добавляем плавный скролл
    })
  }
}
