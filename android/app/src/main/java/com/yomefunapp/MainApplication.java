package com.yomefunapp;

import android.app.Application;
import com.facebook.react.ReactApplication;

import org.devio.rn.splashscreen.SplashScreen;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import io.realm.react.RealmReactPackage;
import com.horcrux.svg.SvgPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SplashScreenReactPackage(),
            new RealmReactPackage(),
            new SvgPackage(),
            new PhotoViewPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
