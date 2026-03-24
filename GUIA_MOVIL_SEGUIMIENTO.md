# Guía de ejecución - app móvil de seguimiento

## 1. Dependencias
```bash
flutter pub get
```

## 2. Ejecutar con la API del backend web
### Android Emulator
```bash
flutter run --dart-define=API_BASE_URL=http://10.0.2.2:5001/api
```

### Celular físico en la misma red
```bash
flutter run --dart-define=API_BASE_URL=http://TU_IP_LOCAL:5001/api
```

## 3. Activar Pusher
Reemplaza las variables por las de tu backend:
```bash
flutter run   --dart-define=API_BASE_URL=http://TU_IP_LOCAL:5001/api   --dart-define=PUSHER_KEY=tu_key   --dart-define=PUSHER_CLUSTER=tu_cluster   --dart-define=PUSHER_CHANNEL_PREFIX=private-pedido.   --dart-define=PUSHER_EVENT_NAME=pedido.estado.actualizado
```

Para pruebas rápidas desde la consola de Pusher sin autenticación de canales privados, puedes usar canal público:
```bash
flutter run --dart-define=API_BASE_URL=http://TU_IP_LOCAL:5001/api --dart-define=PUSHER_KEY=tu_key --dart-define=PUSHER_CLUSTER=tu_cluster --dart-define=PUSHER_CHANNEL_PREFIX=pedido. --dart-define=PUSHER_EVENT_NAME=pedido.estado.actualizado
```

## 4. Endpoints que consume
- POST `/api/login`
- POST `/api/register`
- GET `/api/orders`
- GET `/api/orders/:id`
- GET `/api/orders/:id/tracking` (si existe; si no, usa `/orders/:id`)

## 5. Qué se corrigió
- estructura con modelos y services;
- sesión persistida con SharedPreferences;
- seguimiento de pedido desacoplado del resto de pantallas;
- soporte de tiempo real con `pusher_channels_flutter: ^2.6.0`;
- base URL configurable para emulador, web o celular real.


## Si te daba error antes

Esta versión ya incluye:
- permiso INTERNET en Android;
- cleartext HTTP habilitado para pruebas locales con `http://TU_IP:5001/api`;
- limpieza de carpetas `build/` y `.dart_tool/`;
- estructura enfocada en seguimiento de pedidos.

## Comandos recomendados

```bash
flutter clean
flutter pub get
flutter run --dart-define=API_BASE_URL=http://10.0.2.2:5001/api
```

En celular físico usa tu IP local en vez de `10.0.2.2`.
