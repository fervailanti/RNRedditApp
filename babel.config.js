module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.js',
          '.ts',
          '.tsx',
          '.jsx',
          '.json',
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.tsx',
        ],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@services': './src/services',
          '@context': './src/context',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}
