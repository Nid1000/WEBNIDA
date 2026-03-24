import 'package:flutter/foundation.dart';

class AppConfig {
  static const _apiBaseUrlFromEnv = String.fromEnvironment('API_BASE_URL', defaultValue: '');

  static String get apiBaseUrl {
    if (_apiBaseUrlFromEnv.isNotEmpty) return _apiBaseUrlFromEnv;
    if (kIsWeb) return 'http://localhost:5001/api';

    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return 'http://10.0.2.2:5001/api';
      case TargetPlatform.windows:
      case TargetPlatform.linux:
      case TargetPlatform.macOS:
        return 'http://localhost:5001/api';
      case TargetPlatform.iOS:
      case TargetPlatform.fuchsia:
        return 'http://localhost:5001/api';
    }
  }

  static const pusherKey = String.fromEnvironment(
    'PUSHER_KEY',
    defaultValue: '1e3a8925dd99d50c035e',
  );
  static const pusherCluster = String.fromEnvironment(
    'PUSHER_CLUSTER',
    defaultValue: 'mt1',
  );
  static const pusherChannelPrefix = String.fromEnvironment(
    'PUSHER_CHANNEL_PREFIX',
    defaultValue: 'pedido.',
  );
  static const pusherEventName = String.fromEnvironment(
    'PUSHER_EVENT_NAME',
    defaultValue: 'pedido.estado.actualizado',
  );
}
