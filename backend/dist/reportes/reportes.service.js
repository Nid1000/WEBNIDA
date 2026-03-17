"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReportesService = class ReportesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    toFloat(n) {
        if (n === null || typeof n === 'undefined')
            return 0;
        const s = String(n);
        const f = parseFloat(s);
        return isNaN(f) ? 0 : f;
    }
    async ventasDiarias(params) {
        const where = {};
        if (params.desde || params.hasta) {
            where.created_at = {};
            if (params.desde)
                where.created_at.gte = new Date(params.desde);
            if (params.hasta)
                where.created_at.lte = new Date(params.hasta);
        }
        const pedidos = await this.prisma.pedido.findMany({
            where: { ...where, estado: { not: 'cancelado' } },
            select: { created_at: true, total: true },
            orderBy: { created_at: 'asc' },
        });
        const map = new Map();
        for (const p of pedidos) {
            const key = p.created_at.toISOString().slice(0, 10);
            const prev = map.get(key) ?? 0;
            map.set(key, prev + this.toFloat(p.total));
        }
        const data = Array.from(map.entries()).map(([fecha, total]) => ({
            fecha,
            total,
        }));
        return { status: 200, body: { data } };
    }
    async ventasSemanales(params) {
        const where = {};
        if (params.desde || params.hasta) {
            where.created_at = {};
            if (params.desde)
                where.created_at.gte = new Date(params.desde);
            if (params.hasta)
                where.created_at.lte = new Date(params.hasta);
        }
        const pedidos = await this.prisma.pedido.findMany({
            where: { ...where, estado: { not: 'cancelado' } },
            select: { created_at: true, total: true },
            orderBy: { created_at: 'asc' },
        });
        const startOfWeek = (date) => {
            const d = new Date(date);
            const day = d.getDay();
            const diff = (day + 6) % 7;
            d.setDate(d.getDate() - diff);
            d.setHours(0, 0, 0, 0);
            return d;
        };
        const map = new Map();
        for (const p of pedidos) {
            const sow = startOfWeek(p.created_at);
            const key = sow.toISOString().slice(0, 10);
            const prev = map.get(key) ?? 0;
            map.set(key, prev + this.toFloat(p.total));
        }
        const data = Array.from(map.entries()).map(([semana, total]) => ({
            semana,
            total,
        }));
        return { status: 200, body: { data } };
    }
    async ventasMensuales(params) {
        const where = {};
        if (params.desde || params.hasta) {
            where.created_at = {};
            if (params.desde)
                where.created_at.gte = new Date(params.desde);
            if (params.hasta)
                where.created_at.lte = new Date(params.hasta);
        }
        const pedidos = await this.prisma.pedido.findMany({
            where: { ...where, estado: { not: 'cancelado' } },
            select: { created_at: true, total: true },
            orderBy: { created_at: 'asc' },
        });
        const startOfMonth = (date) => {
            const d = new Date(date);
            d.setDate(1);
            d.setHours(0, 0, 0, 0);
            return d;
        };
        const map = new Map();
        for (const p of pedidos) {
            const som = startOfMonth(p.created_at);
            const key = som.toISOString().slice(0, 7);
            const prev = map.get(key) ?? 0;
            map.set(key, prev + this.toFloat(p.total));
        }
        const data = Array.from(map.entries()).map(([mes, total]) => ({
            mes,
            total,
        }));
        return { status: 200, body: { data } };
    }
    async topProductos(params) {
        const whereDetalle = {
            producto_id: { not: null },
            pedido: { estado: { not: 'cancelado' } },
        };
        if (params.desde || params.hasta) {
            whereDetalle.pedido.created_at = {};
            if (params.desde)
                whereDetalle.pedido.created_at.gte = new Date(params.desde);
            if (params.hasta)
                whereDetalle.pedido.created_at.lte = new Date(params.hasta);
        }
        const detalles = await this.prisma.pedidoDetalle.findMany({
            where: whereDetalle,
            include: {
                producto: {
                    select: { id: true, nombre: true, categoria_id: true, imagen: true },
                },
                pedido: { select: { id: true, created_at: true, estado: true } },
            },
        });
        const agg = new Map();
        for (const d of detalles) {
            const id = d.producto_id;
            if (!id)
                continue;
            const prev = agg.get(id) || {
                producto_id: id,
                nombre: d.producto?.nombre || `Producto ${id}`,
                imagen: d.producto?.imagen ?? null,
                cantidad: 0,
                subtotal: 0,
            };
            prev.cantidad += d.cantidad;
            prev.subtotal += this.toFloat(d.subtotal);
            agg.set(id, prev);
        }
        const items = Array.from(agg.values()).sort((a, b) => b.cantidad - a.cantidad);
        const limite = params.limite ?? 10;
        return { status: 200, body: { data: items.slice(0, limite) } };
    }
    async topCategorias(params) {
        const whereDetalle = {
            producto_id: { not: null },
            pedido: { estado: { not: 'cancelado' } },
        };
        if (params.desde || params.hasta) {
            whereDetalle.pedido.created_at = {};
            if (params.desde)
                whereDetalle.pedido.created_at.gte = new Date(params.desde);
            if (params.hasta)
                whereDetalle.pedido.created_at.lte = new Date(params.hasta);
        }
        const detalles = await this.prisma.pedidoDetalle.findMany({
            where: whereDetalle,
            include: {
                producto: { select: { id: true, nombre: true, categoria_id: true } },
                pedido: { select: { id: true, created_at: true, estado: true } },
            },
        });
        const agg = new Map();
        for (const d of detalles) {
            const catId = d.producto?.categoria_id;
            if (!catId)
                continue;
            const prev = agg.get(catId) || {
                categoria_id: catId,
                nombre: '',
                cantidad: 0,
                subtotal: 0,
            };
            prev.cantidad += d.cantidad;
            prev.subtotal += this.toFloat(d.subtotal);
            agg.set(catId, prev);
        }
        const categoriasIds = Array.from(agg.keys());
        if (categoriasIds.length) {
            const cats = await this.prisma.categoria.findMany({
                where: { id: { in: categoriasIds } },
                select: { id: true, nombre: true },
            });
            const mapCats = new Map(cats.map((c) => [c.id, c.nombre]));
            for (const id of categoriasIds) {
                const item = agg.get(id);
                item.nombre = mapCats.get(id) || `Categoría ${id}`;
            }
        }
        const items = Array.from(agg.values()).sort((a, b) => b.cantidad - a.cantidad);
        const limite = params.limite ?? 10;
        return { status: 200, body: { data: items.slice(0, limite) } };
    }
};
exports.ReportesService = ReportesService;
exports.ReportesService = ReportesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportesService);
//# sourceMappingURL=reportes.service.js.map