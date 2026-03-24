import 'package:flutter/material.dart';
import '../theme/app_colors.dart';
import '../services/products_service.dart';
import '../widgets/delicias_appbar.dart';
import '../widgets/delicias_card.dart';

class PromocionesPage extends StatefulWidget {
  const PromocionesPage({super.key});

  @override
  State<PromocionesPage> createState() => _PromocionesPageState();
}

class _PromocionesPageState extends State<PromocionesPage> {
  final _service = ProductsService();
  bool _loading = true;
  List<Map<String, dynamic>> _products = [];
  String _error = '';

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final products = await _service.fetchProducts(
        featuredOnly: true,
        limit: 10,
      );
      if (!mounted) return;
      setState(() {
        _products = products
            .where((p) => p['featured'] == true || p['promotion'] == true)
            .toList();
        _loading = false;
      });
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _loading = false;
        _error = 'No se pudieron cargar las promociones.';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const DeliciasAppBar(title: 'Promociones'),
      body: SafeArea(
        child: _loading
            ? const Center(child: CircularProgressIndicator())
            : _error.isNotEmpty
            ? Center(
                child: Text(_error, style: const TextStyle(color: Colors.red)),
              )
            : ListView(
                padding: const EdgeInsets.all(18),
                children: [
                  DeliciasCard(
                    child: const Text(
                      'Promociones y productos destacados cargados desde tu sistema web.',
                      style: TextStyle(
                        color: AppColors.text,
                        fontWeight: FontWeight.w800,
                      ),
                    ),
                  ),
                  const SizedBox(height: 14),
                  ..._products.map(_promoCard),
                  if (_products.isEmpty)
                    const DeliciasCard(
                      child: Text(
                        'No hay promociones destacadas disponibles por ahora.',
                        style: TextStyle(color: AppColors.muted),
                      ),
                    ),
                ],
              ),
      ),
    );
  }

  Widget _promoCard(Map<String, dynamic> product) {
    final imageUrl = (product['imageUrl'] ?? '').toString();
    final price = ((product['price'] as num?) ?? 0).toDouble();

    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: DeliciasCard(
        child: Row(
          children: [
            Container(
              width: 64,
              height: 64,
              decoration: BoxDecoration(
                color: const Color(0xFFE3C25A),
                borderRadius: BorderRadius.circular(14),
              ),
              clipBehavior: Clip.antiAlias,
              child: imageUrl.isNotEmpty
                  ? Image.network(
                      imageUrl,
                      fit: BoxFit.cover,
                      errorBuilder: (_, _, _) => const Icon(
                        Icons.bakery_dining,
                        color: AppColors.text,
                      ),
                    )
                  : const Icon(Icons.bakery_dining, color: AppColors.text),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    (product['name'] ?? 'Producto').toString(),
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w900,
                    ),
                  ),
                  const SizedBox(height: 6),
                  Wrap(
                    spacing: 6,
                    runSpacing: 6,
                    children: const [
                      _PromoBadge(label: 'Destacado', color: Color(0xFFC07B12)),
                      _PromoBadge(label: 'Web', color: Color(0xFF0B3D91)),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'S/${price.toStringAsFixed(2)}',
                    style: const TextStyle(
                      color: Colors.red,
                      fontWeight: FontWeight.w900,
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    (product['desc'] ?? 'Disponible en tu catalogo web')
                        .toString(),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      color: AppColors.muted,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PromoBadge extends StatelessWidget {
  final String label;
  final Color color;

  const _PromoBadge({required this.label, required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        label,
        style: const TextStyle(
          color: Colors.white,
          fontSize: 10,
          fontWeight: FontWeight.w900,
        ),
      ),
    );
  }
}
