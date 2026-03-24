import 'package:flutter/material.dart';
import '../services/auth_service.dart';
import '../services/session_service.dart';
import 'login_page.dart';

class PerfilPage extends StatelessWidget {
  const PerfilPage({super.key});

  @override
  Widget build(BuildContext context) {
    final session = SessionService();
    final auth = AuthService();

    return FutureBuilder(
      future: session.getUser(),
      builder: (context, snapshot) {
        final user = snapshot.data;
        if (user == null) {
          return const Center(child: Text('Sin datos de sesión.'));
        }
        return ListView(
          padding: const EdgeInsets.all(20),
          children: [
            ListTile(title: const Text('Nombre'), subtitle: Text(user.fullName)),
            ListTile(title: const Text('Correo'), subtitle: Text(user.email)),
            ListTile(title: const Text('Teléfono'), subtitle: Text(user.telefono)),
            ListTile(title: const Text('Dirección'), subtitle: Text(user.direccion)),
            ListTile(title: const Text('Distrito'), subtitle: Text(user.distrito)),
            const SizedBox(height: 20),
            ElevatedButton.icon(
              onPressed: () async {
                await auth.logout();
                if (!context.mounted) return;
                Navigator.pushAndRemoveUntil(
                  context,
                  MaterialPageRoute(builder: (_) => const LoginPage()),
                  (_) => false,
                );
              },
              icon: const Icon(Icons.logout),
              label: const Text('Cerrar sesión'),
            ),
          ],
        );
      },
    );
  }
}
