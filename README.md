# React Native Reddit App

React Native Reddit listing demo app 🚀

Builded with: [__TypeScript__](https://www.typescriptlang.org/), [__React Native__](https://reactnative.dev/), [__Axios__](https://github.com/axios/axios), [__Testing Library__](https://testing-library.com/) and [__Reddit API__](https://github.com/reddit-archive/reddit/wiki/json).

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

2. Run `yarn`

3. Run `yarn start`

4. Run `yarn android`

### iOS

1. Run `yarn`

2. Run `cd ios && pod install && cd ..`

3. Run `yarn start`

4. Run `yarn ios`

## Available Scripts

In the project directory, you can run:

- `yarn android`: Build and install de app in Android (debug mode).

- `yarn ios`: Build and install de app in iOS (debug mode).

- `yarn start`: Starts the metro bundler.

- `yarn test`: Run jest tests.

## Useful Information

- Subreddit can be easily modified from `src/utils/contants` in `SUBREDDIT` constant. This will affect the whole app, including API calls and header title _(default subreddit is `r/pics`)_.

- The app is available for `iOS >= 12` and `Android API >= 21`.

- The project is using __Prettier ESlint__ as default formatter.
