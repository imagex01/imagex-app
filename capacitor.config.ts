import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.imagex',
  appName: 'ImageX',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
