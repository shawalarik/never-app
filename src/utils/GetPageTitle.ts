const GLOB_APP_TITLE = 'Alarik App'

export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} - ${GLOB_APP_TITLE}`
  }
  return `${GLOB_APP_TITLE}`
}