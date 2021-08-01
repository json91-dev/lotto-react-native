### 테스트 빌드

```
npm run dev-android // 안드로이드 DEV 빌드       
npm run prod-android // 안드로이드 PROD 빌드
npm run dev-ios // IOS DEV 빌드
npm run prod-ios // IOS PROD 빌드
```

### Android app bundle 빌드
```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
./gradlew bundleRelease
```


### Android apk 빌드

```
 ./gradlew assembleRelease
```
