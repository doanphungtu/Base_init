## Base_init

**Description**

- React native 0.63.3
- Redux saga
- React-native-vector-icons
- React navigation 5
- React-native-skeleton-placeholder [Link](https://github.com/chramos/react-native-skeleton-placeholder)
- React-navigation-shared-element [Link](https://github.com/IjzerenHein/react-navigation-shared-element/tree/navigation-v5)

**Note**

- Firstly, when you start project, you should run
  ```sh
  chmod +x gradlew
  ```
- When install React-navigation-shared-element, you can
  `cd ios => pod install`
- Using Vector-icon, you can loadFont() and link it.
  - Add in podfile : `pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'`
  - Add in android/build.gradle:
    `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"`
