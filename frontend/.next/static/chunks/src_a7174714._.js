(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/currency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPEN",
    ()=>formatPEN
]);
const formatPEN = (value)=>{
    try {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN',
            minimumFractionDigits: 2
        }).format(value || 0);
    } catch (e) {
        return "S/. ".concat(Number(value || 0).toFixed(2));
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/design/admin/components/StatusBadge.tsx [app-client] (ecmascript) <export default as StatusBadge>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/design/admin/components/StatusBadge.tsx [app-client] (ecmascript)");
}),
"[project]/src/design/admin/components/Alert.tsx [app-client] (ecmascript) <export default as Alert>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/design/admin/components/Alert.tsx [app-client] (ecmascript)");
}),
"[project]/src/design/admin/components/Badge.tsx [app-client] (ecmascript) <export default as Badge>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/design/admin/components/Badge.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/ui/Skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const roundedMap = {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl"
};
function Skeleton(param) {
    let { className = "", rounded = "md", style, ...props } = param;
    const radius = roundedMap[rounded] || "rounded-md";
    const base = "skeleton ".concat(radius, " ").concat(className).trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        className: base,
        style: style
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Skeleton.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c = Skeleton;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/productos/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminProductosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/design/admin/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/design/admin/components/Table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/design/admin/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StatusBadge$3e$__ = __turbopack_context__.i("[project]/src/design/admin/components/StatusBadge.tsx [app-client] (ecmascript) <export default as StatusBadge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/src/design/admin/components/Alert.tsx [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/src/design/admin/components/Badge.tsx [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Normaliza src para evitar errores en next/image con URLs inválidas
const normalizeProductImageSrc = (src)=>{
    if (!src || typeof src !== "string") return null;
    const trimmed = src.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
    if (trimmed.startsWith("/")) return trimmed; // paths internos como /uploads/...
    if (trimmed.startsWith("uploads/")) return "/".concat(trimmed);
    // Como fallback, asumir que es un nombre de archivo dentro de /uploads
    return "/uploads/".concat(trimmed);
};
;
;
;
;
;
function AdminProductosPageContent() {
    _s();
    const [productos, setProductos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [globalFilter, setGlobalFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sorting, setSorting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        pageIndex: 0,
        pageSize: 10
    });
    const [mostrarSoloBajo, setMostrarSoloBajo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const LOW_STOCK_THRESHOLD = 5;
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedCategoriaId, setSelectedCategoriaId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [categoriasList, setCategoriasList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminProductosPageContent.useEffect": ()=>{
            const sp = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get('categoria');
            const initial = sp ? parseInt(sp, 10) : NaN;
            setSelectedCategoriaId(!isNaN(initial) ? initial : null);
        }
    }["AdminProductosPageContent.useEffect"], [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminProductosPageContent.useEffect": ()=>{
            const fetchCategorias = {
                "AdminProductosPageContent.useEffect.fetchCategorias": async ()=>{
                    try {
                        var _res_data, _res_data1;
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/categorias');
                        const data = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) || ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.categorias) || res.data;
                        const list = Array.isArray(data) ? data : Array.isArray(data === null || data === void 0 ? void 0 : data.categorias) ? data.categorias : [];
                        setCategoriasList(list.map({
                            "AdminProductosPageContent.useEffect.fetchCategorias": (c)=>({
                                    id: Number(c.id),
                                    nombre: String(c.nombre || '')
                                })
                        }["AdminProductosPageContent.useEffect.fetchCategorias"]));
                    } catch (e) {
                    // no-op
                    }
                }
            }["AdminProductosPageContent.useEffect.fetchCategorias"];
            fetchCategorias();
        }
    }["AdminProductosPageContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminProductosPageContent.useEffect": ()=>{
            const fetchProductos = {
                "AdminProductosPageContent.useEffect.fetchProductos": async ()=>{
                    setLoading(true);
                    try {
                        var _res_data, _res_data1, _res_data2;
                        const base = '/api/productos?pagina=1&limite=200';
                        const url = selectedCategoriaId ? "".concat(base, "&categoria=").concat(selectedCategoriaId) : base;
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(url);
                        const data = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) || ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.productos) || ((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.items) || res.data;
                        setProductos(Array.isArray(data) ? data : []);
                        setError(null);
                    } catch (e) {
                        var _this, _e_response;
                        const msg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(e) ? ((_this = (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data) === null || _this === void 0 ? void 0 : _this.message) || e.message : 'No se pudieron cargar los productos';
                        setError(msg);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AdminProductosPageContent.useEffect.fetchProductos"];
            fetchProductos();
            // Reiniciar paginación cuando cambia el filtro de categoría
            setPagination({
                "AdminProductosPageContent.useEffect": (prev)=>({
                        ...prev,
                        pageIndex: 0
                    })
            }["AdminProductosPageContent.useEffect"]);
        }
    }["AdminProductosPageContent.useEffect"], [
        selectedCategoriaId
    ]);
    const toggleDestacado = async (p)=>{
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/api/productos/".concat(p.id), {
                destacado: !p.destacado
            });
            const actualizado = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.producto) || res.data;
            setProductos((prev)=>prev.map((item)=>{
                    var _actualizado_destacado;
                    return item.id === p.id ? {
                        ...item,
                        destacado: (_actualizado_destacado = actualizado === null || actualizado === void 0 ? void 0 : actualizado.destacado) !== null && _actualizado_destacado !== void 0 ? _actualizado_destacado : !p.destacado
                    } : item;
                }));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success((actualizado === null || actualizado === void 0 ? void 0 : actualizado.destacado) ? "Producto marcado como destacado" : "Producto ya no es destacado");
        } catch (e) {
            var _this, _e_response;
            const msg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(e) ? ((_this = (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data) === null || _this === void 0 ? void 0 : _this.message) || e.message : 'No se pudo actualizar el producto';
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
    };
    const eliminar = async (p)=>{
        if (!confirm('¿Eliminar el producto "'.concat(p.nombre, '"?'))) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/api/productos/".concat(p.id));
            setProductos((prev)=>prev.filter((item)=>item.id !== p.id));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Producto eliminado");
        } catch (e) {
            var _this, _e_response;
            const msg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(e) ? ((_this = (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data) === null || _this === void 0 ? void 0 : _this.message) || e.message : 'No se pudo eliminar el producto';
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
    };
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminProductosPageContent.useMemo[columns]": ()=>[
                {
                    header: {
                        "AdminProductosPageContent.useMemo[columns]": ()=>"ID"
                    }["AdminProductosPageContent.useMemo[columns]"],
                    accessorKey: "id"
                },
                {
                    header: {
                        "AdminProductosPageContent.useMemo[columns]": ()=>"Nombre"
                    }["AdminProductosPageContent.useMemo[columns]"],
                    accessorKey: "nombre",
                    cell: {
                        "AdminProductosPageContent.useMemo[columns]": (param)=>{
                            let { row } = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    ({
                                        "AdminProductosPageContent.useMemo[columns]": ()=>{
                                            const imgSrc = normalizeProductImageSrc(row.original.imagen);
                                            return imgSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-14 w-14 overflow-hidden rounded-md border border-slate-200 bg-white flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: imgSrc,
                                                    alt: row.original.nombre || "Producto",
                                                    width: 56,
                                                    height: 56,
                                                    className: "h-full w-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/productos/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-14 w-14 overflow-hidden rounded-md border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "Sin imagen"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/productos/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this);
                                        }
                                    })["AdminProductosPageContent.useMemo[columns]"](),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-slate-900",
                                        children: row.original.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/productos/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 141,
                                columnNumber: 9
                            }, this);
                        }
                    }["AdminProductosPageContent.useMemo[columns]"],
                    filterFn: {
                        "AdminProductosPageContent.useMemo[columns]": (row, _columnId, filterValue)=>{
                            const name = String(row.original.nombre || "").toLowerCase();
                            return name.includes(String(filterValue || "").toLowerCase());
                        }
                    }["AdminProductosPageContent.useMemo[columns]"]
                },
                {
                    header: {
                        "AdminProductosPageContent.useMemo[columns]": ()=>"Categoría"
                    }["AdminProductosPageContent.useMemo[columns]"],
                    id: "categoria",
                    accessorFn: {
                        "AdminProductosPageContent.useMemo[columns]": (row)=>{
                            var _row_categoria;
                            var _row_categoria_nombre, _ref;
                            return (_ref = (_row_categoria_nombre = (_row_categoria = row.categoria) === null || _row_categoria === void 0 ? void 0 : _row_categoria.nombre) !== null && _row_categoria_nombre !== void 0 ? _row_categoria_nombre : row.categoria_id) !== null && _ref !== void 0 ? _ref : "-";
                        }
                    }["AdminProductosPageContent.useMemo[columns]"],
                    cell: {
                        "AdminProductosPageContent.useMemo[columns]": (param)=>{
                            let { getValue } = param;
                            var _getValue;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: String((_getValue = getValue()) !== null && _getValue !== void 0 ? _getValue : "-")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 172,
                                columnNumber: 31
                            }, this);
                        }
                    }["AdminProductosPageContent.useMemo[columns]"]
                },
                {
                    header: {
                        "AdminProductosPageContent.useMemo[columns]": ()=>"Precio"
                    }["AdminProductosPageContent.useMemo[columns]"],
                    accessorKey: "precio",
                    cell: {
                        "AdminProductosPageContent.useMemo[columns]": (param)=>{
                            let { getValue } = param;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPEN"])(Number(getValue() || 0));
                        }
                    }["AdminProductosPageContent.useMemo[columns]"],
                    sortingFn: "basic"
                },
                {
                    header: {
                        "AdminProductosPageContent.useMemo[columns]": ()=>"Stock"
                    }["AdminProductosPageContent.useMemo[columns]"],
                    accessorKey: "stock",
                    cell: {
                        "AdminProductosPageContent.useMemo[columns]": (param)=>{
                            let { getValue } = param;
                            const s = Number(getValue() || 0);
                            const variant = s === 0 ? "danger" : s <= LOW_STOCK_THRESHOLD ? "warning" : "success";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                variant: variant,
                                size: "md",
                                className: "min-w-[100px] justify-center",
                                children: s === 0 ? "Agotado" : "".concat(s, " en stock")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this);
                        }
                    }["AdminProductosPageContent.useMemo[columns]"],
                    sortingFn: "basic"
                },
                {
                    header: {
                        "AdminProductosPageContent.useMemo[columns]": ()=>"Estado"
                    }["AdminProductosPageContent.useMemo[columns]"],
                    accessorKey: "activo",
                    cell: {
                        "AdminProductosPageContent.useMemo[columns]": (param)=>{
                            let { getValue } = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StatusBadge$3e$__["StatusBadge"], {
                                active: Boolean(getValue())
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 197,
                                columnNumber: 31
                            }, this);
                        }
                    }["AdminProductosPageContent.useMemo[columns]"]
                },
                {
                    header: {
                        "AdminProductosPageContent.useMemo[columns]": ()=>"Acciones"
                    }["AdminProductosPageContent.useMemo[columns]"],
                    id: "acciones",
                    cell: {
                        "AdminProductosPageContent.useMemo[columns]": (param)=>{
                            let { row } = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin/productos/".concat(row.original.id),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                                            variant: "outline-primary",
                                            size: "sm"
                                        }),
                                        children: "Editar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/productos/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                                            variant: row.original.destacado ? "warning" : "outline-secondary",
                                            size: "sm"
                                        }),
                                        onClick: {
                                            "AdminProductosPageContent.useMemo[columns]": ()=>toggleDestacado(row.original)
                                        }["AdminProductosPageContent.useMemo[columns]"],
                                        children: row.original.destacado ? "Quitar destacado" : "Destacar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/productos/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                                            variant: "outline-danger",
                                            size: "sm"
                                        }),
                                        onClick: {
                                            "AdminProductosPageContent.useMemo[columns]": ()=>eliminar(row.original)
                                        }["AdminProductosPageContent.useMemo[columns]"],
                                        children: "Eliminar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/productos/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 203,
                                columnNumber: 9
                            }, this);
                        }
                    }["AdminProductosPageContent.useMemo[columns]"]
                }
            ]
    }["AdminProductosPageContent.useMemo[columns]"], []);
    // Memorizar datos filtrados para evitar recalcular y recrear arrays en cada render
    const filteredProductos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminProductosPageContent.useMemo[filteredProductos]": ()=>{
            return mostrarSoloBajo ? productos.filter({
                "AdminProductosPageContent.useMemo[filteredProductos]": (p)=>Number(p.stock || 0) <= LOW_STOCK_THRESHOLD
            }["AdminProductosPageContent.useMemo[filteredProductos]"]) : productos;
        }
    }["AdminProductosPageContent.useMemo[filteredProductos]"], [
        productos,
        mostrarSoloBajo
    ]);
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data: filteredProductos,
        columns,
        state: {
            globalFilter,
            sorting,
            pagination
        },
        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreRowModel"])(),
        getFilteredRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilteredRowModel"])(),
        getSortedRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSortedRowModel"])(),
        getPaginationRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaginationRowModel"])()
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-slate-900",
                        children: "Productos"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin/productos/nuevo",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                            variant: "primary",
                            size: "sm"
                        }),
                        children: "Nuevo producto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/productos/page.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Buscar por nombre…",
                        value: globalFilter !== null && globalFilter !== void 0 ? globalFilter : "",
                        onChange: (e)=>setGlobalFilter(e.target.value),
                        className: "w-full md:w-64 rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-900 focus:ring-2 focus:ring-slate-300"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                            variant: mostrarSoloBajo ? "outline-primary" : "outline-secondary",
                            size: "sm"
                        }),
                        onClick: ()=>{
                            setMostrarSoloBajo((v)=>!v);
                            setPagination((prev)=>({
                                    ...prev,
                                    pageIndex: 0
                                }));
                        },
                        children: mostrarSoloBajo ? "Ver todos" : "Ver stock bajo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm text-slate-600",
                                children: "Categoría:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "rounded-md border border-slate-300 bg-white px-2 py-1 text-sm",
                                value: selectedCategoriaId !== null && selectedCategoriaId !== void 0 ? selectedCategoriaId : '',
                                onChange: (e)=>{
                                    const val = e.target.value ? Number(e.target.value) : null;
                                    setSelectedCategoriaId(val);
                                    const params = new URLSearchParams(window.location.search);
                                    if (val) params.set('categoria', String(val));
                                    else params.delete('categoria');
                                    router.replace("/admin/productos?".concat(params.toString()));
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Todas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/productos/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    categoriasList.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.id,
                                            children: c.nombre
                                        }, c.id, false, {
                                            fileName: "[project]/src/app/admin/productos/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/productos/page.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            !loading && (()=>{
                const agotados = productos.filter((p)=>Number(p.stock || 0) === 0);
                const bajoStock = productos.filter((p)=>Number(p.stock || 0) > 0 && Number(p.stock || 0) <= LOW_STOCK_THRESHOLD);
                const hayAlertas = agotados.length > 0 || bajoStock.length > 0;
                if (!hayAlertas) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                    variant: agotados.length > 0 ? "danger" : "warning",
                    title: agotados.length > 0 ? "Productos agotados o con stock bajo" : "Productos con stock bajo",
                    className: "mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            agotados.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Agotados: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: agotados.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/productos/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 307,
                                columnNumber: 17
                            }, this),
                            bajoStock.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Bajo stock (≤ ",
                                    LOW_STOCK_THRESHOLD,
                                    "): ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: bajoStock.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/productos/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 57
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 312,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex flex-wrap gap-2",
                                children: [
                                    ...agotados.slice(0, 5),
                                    ...bajoStock.slice(0, 5)
                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                        variant: Number(p.stock || 0) === 0 ? "danger" : "warning",
                                        children: [
                                            p.nombre,
                                            " — ",
                                            Number(p.stock || 0)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/app/admin/productos/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 316,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 305,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/productos/page.tsx",
                    lineNumber: 300,
                    columnNumber: 11
                }, this);
            })(),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/admin/productos/page.tsx",
                lineNumber: 329,
                columnNumber: 9
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 rounded-xl border border-slate-200 bg-white p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "h-6 w-32 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this),
                    [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-6 gap-3 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-5 w-12"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/productos/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-5 w-40 col-span-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/productos/page.tsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-5 w-24"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/productos/page.tsx",
                                    lineNumber: 340,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-5 w-20"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/productos/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-8 w-32 justify-self-end"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/productos/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/admin/productos/page.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/productos/page.tsx",
                lineNumber: 334,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THead"], {
                        children: table.getHeaderGroups().map((hg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tr"], {
                                children: hg.headers.map((h)=>{
                                    var _h_column_getIsSorted;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Th"], {
                                        children: h.isPlaceholder ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1",
                                            onClick: h.column.getToggleSortingHandler(),
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(h.column.columnDef.header, h.getContext()),
                                                (_h_column_getIsSorted = ({
                                                    asc: "↑",
                                                    desc: "↓"
                                                })[h.column.getIsSorted()]) !== null && _h_column_getIsSorted !== void 0 ? _h_column_getIsSorted : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/productos/page.tsx",
                                            lineNumber: 355,
                                            columnNumber: 21
                                        }, this)
                                    }, h.id, false, {
                                        fileName: "[project]/src/app/admin/productos/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, hg.id, false, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TBody"], {
                        children: [
                            table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tr"], {
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Td"], {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                        }, cell.id, false, {
                                            fileName: "[project]/src/app/admin/productos/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this))
                                }, row.id, false, {
                                    fileName: "[project]/src/app/admin/productos/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this)),
                            !loading && table.getRowModel().rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tr"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Td"], {
                                    className: "text-center text-slate-500 px-3 py-6",
                                    colSpan: columns.length,
                                    children: "No hay productos"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/productos/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/productos/page.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-600",
                        children: [
                            "Página ",
                            table.getState().pagination.pageIndex + 1,
                            " de ",
                            table.getPageCount(),
                            " — ",
                            filteredProductos.length,
                            " productos"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                                    variant: "outline-secondary",
                                    size: "sm"
                                }),
                                onClick: ()=>table.previousPage(),
                                disabled: !table.getCanPreviousPage(),
                                children: "Anterior"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                                    variant: "outline-primary",
                                    size: "sm"
                                }),
                                onClick: ()=>table.nextPage(),
                                disabled: !table.getCanNextPage(),
                                children: "Siguiente"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "rounded-md border border-slate-300 bg-white px-2 py-1 text-sm",
                                value: table.getState().pagination.pageSize,
                                onChange: (e)=>table.setPageSize(Number(e.target.value)),
                                children: [
                                    10,
                                    20,
                                    50
                                ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: size,
                                        children: [
                                            size,
                                            " por página"
                                        ]
                                    }, size, true, {
                                        fileName: "[project]/src/app/admin/productos/page.tsx",
                                        lineNumber: 410,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/productos/page.tsx",
                                lineNumber: 404,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/productos/page.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/productos/page.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/productos/page.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_s(AdminProductosPageContent, "KC1Q+j28Y/IJy9RRIjrjenAqWVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"]
    ];
});
_c = AdminProductosPageContent;
function AdminProductosPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: "Cargando productos..."
        }, void 0, false, {
            fileName: "[project]/src/app/admin/productos/page.tsx",
            lineNumber: 421,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminProductosPageContent, {}, void 0, false, {
            fileName: "[project]/src/app/admin/productos/page.tsx",
            lineNumber: 422,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/productos/page.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
_c1 = AdminProductosPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdminProductosPageContent");
__turbopack_context__.k.register(_c1, "AdminProductosPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a7174714._.js.map