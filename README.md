# RNRedditApp

React Native Reddit demo app 🚀

https://user-images.githubusercontent.com/54537095/155430706-cc641631-1dbf-4628-8548-10c3f8951e12.mov

## Setting Up

### Android

1. Create a file called `local.properties` at `RNRedditApp/android/` with the following line:

#### For Windows users:
````
sdk.dir=C:\\Users\\UserName\\AppData\\Local\\Android\\sdk
````
_Replace UserName with your pc user name . Also make sure the folder is sdk or Sdk._

#### For Mac users:
````
sdk.dir = /Users/USERNAME/Library/Android/sdk
````
_Where USERNAME is your MacOS username._

#### For Linux (Ubuntu) users:
````
sdk.dir = /home/USERNAME/Android/Sdk
````
_Where USERNAME is your linux username (Linux paths are case-sensitive: make sure the case of `S` in `Sdk` matches)._
<br />

2. Run `yarn start`

3. Run `yarn android`

### iOS

1. Run `cd ios && pod install && cd ..`

3. Run `yarn start`

5. Run `yarn ios`

## Available Scripts

In the project directory, you can run:

- `yarn android`: Build and install de app in Android (debug mode).

- `yarn ios`: Build and install de app in iOS (debug mode).

- `yarn start`: Starts the metro bundler.

- `yarn test`: Run jest tests.
