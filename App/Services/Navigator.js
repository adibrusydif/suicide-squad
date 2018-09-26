import { NavigationActions } from 'react-navigation'

export function navigate (routeName, params) {
  return NavigationActions.navigate({ routeName, params })
}

export function resetNavigate (routeName, params) {
  return NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName, params })
    ]
  })
}
