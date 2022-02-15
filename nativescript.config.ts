import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.test82',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;