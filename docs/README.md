## 7. Core Components

- In Android and iOS development, we employed a fundamental building block called a "view" for user interfaces

- A view is a small rectangular element on the screen that can display text, images, or responed to user input

- Android - views are written in Kotlin or Java

- iOS - view are writtten in Swift or Object-C

- React Native - views using javascript through React components

- At runtime, React Native generates the corresponding Android and iOS views for these components

### Core Components contd.

- React Native offers a collection of essiontial pre-build components known as "Core components", which are readily avaiable for building your native app's user interface

  - View

  - Text

  - Image

  - ScrollView

  - TextInput

## 8. View

- The View component is a fundamental core component is React Native that serves as a build block for creating user interfaces

- it functions as a container that supports layout using flxbox, styling, touch handling, and accessibility controls

- In web development terms, the View component can be compared to the `<div>` tag

- The View component is typically nested inside other views and can have zero or more children of any type

## 9. Text

- Component for displaying text

- It supports nesting, styling and touch handling

- Depending on the target platform, React Native will translate this component to either a UITextView(iOS), a TextView(Android), or a 'p'(Web)

## 10. Image

- The Image component enables us to display various types of images, including

  - Static images

  - Network images

  - Images from the local disk, such as the camera roll

- Reat Native seamlessly translate the Image component to platform-specific counterparts:

  - UIImageView for iOS

  - ImageView for Android

  - 'img' for the Web

## 11. ScrollView

- ScrollView component wrpas the platform-specific scrolling functionality

- ScrollViews require ad bounded height to function properly

## 12. Button

- The button component allows user to trigget actions

- The Button component has platform-specific rendering for iOS and Android

## 13. Pressable

- Pressable is a wrapper component that detects various stages of press interactions on its defined children

- You can create a custom button using Pressable

  - onPressIn is called when press is activated

  - onLongPress is triggered when a press is held for longer thant 500 milliseconds

  - onPressOut is called when the press gesture is deactivated

## 14. Modal

- Modal is a screen that overlays the app content to provide important information or prompt the user for a decision

- Since they are purposefully interruptive make sure you use them only when necessary

## 15. Status Bar

- The StatusBar component allow you to control the application's status bar

- The status bar is the zone, typically at the top of the screen, that display the current time, Wi-Fi and networ information, battery level other status icons
