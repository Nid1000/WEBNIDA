import 'dart:convert';
import 'package:dio/dio.dart';
import '../models/app_user.dart';
import 'api_cliente.dart';
import 'api_endpoints.dart';
import 'session_service.dart';

class AuthService {
  final Dio _api = ApiClient().dio;
  final SessionService _session = SessionService();

  Future<AppUser> login(String email, String password) async {
    try {
      final res = await _postFirstAvailable(
        ApiEndpoints.loginCandidates,
        data: {'email': email, 'password': password},
      );

      if (res.statusCode != 200 && res.statusCode != 201) {
        throw Exception('No se pudo iniciar sesión.');
      }

      final data = _normalize(res.data);
      final user = AppUser.fromApi(data);
      await _session.saveUser(user);
      return user;
    } on DioException catch (e) {
      throw Exception(_errorMessage(e, fallback: 'No se pudo iniciar sesión.'));
    }
  }

  Future<void> register({
    required String nombre,
    required String apellido,
    required String telefono,
    required String direccion,
    required String distrito,
    required String email,
    required String password,
  }) async {
    try {
      final res = await _postFirstAvailable(
        ApiEndpoints.registerCandidates,
        data: {
          'nombre': nombre,
          'apellido': apellido,
          'telefono': telefono,
          'direccion': direccion,
          'distrito': distrito,
          'email': email,
          'password': password,
        },
      );

      if (res.statusCode != 200 && res.statusCode != 201) {
        throw Exception('No se pudo registrar el usuario.');
      }
    } on DioException catch (e) {
      throw Exception(
        _errorMessage(e, fallback: 'No se pudo registrar el usuario.'),
      );
    }
  }

  Future<void> logout() => _session.clear();

  Map<String, dynamic> _normalize(dynamic body) {
    if (body is Map<String, dynamic>) return body;
    if (body is String) return jsonDecode(body) as Map<String, dynamic>;
    return {};
  }

  Future<Response<dynamic>> _postFirstAvailable(
    List<String> paths, {
    required Map<String, dynamic> data,
  }) async {
    DioException? lastError;
    for (final path in paths) {
      try {
        return await _api.post(path, data: data);
      } on DioException catch (e) {
        lastError = e;
        final statusCode = e.response?.statusCode ?? 0;
        if (statusCode == 404 || statusCode == 405) {
          continue;
        }
        rethrow;
      }
    }

    if (lastError != null) {
      throw lastError;
    }
    throw Exception('No se encontró un endpoint compatible en el backend.');
  }

  String _errorMessage(DioException error, {required String fallback}) {
    final response = error.response?.data;
    if (response is Map<String, dynamic>) {
      final message =
          response['message'] ?? response['error'] ?? response['msg'];
      if (message is String && message.trim().isNotEmpty) return message;
    }
    if (response is String && response.trim().isNotEmpty) return response;

    switch (error.type) {
      case DioExceptionType.connectionTimeout:
      case DioExceptionType.sendTimeout:
      case DioExceptionType.receiveTimeout:
        return 'La API tardó demasiado en responder.';
      case DioExceptionType.connectionError:
        return 'No se pudo conectar con la API en ${ApiEndpoints.baseUrl}. Revisa que el backend esté encendido y que la URL sea correcta.';
      default:
        return fallback;
    }
  }
}
