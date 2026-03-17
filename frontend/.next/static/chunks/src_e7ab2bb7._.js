(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/app/admin/comprobantes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminComprobantesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/design/admin/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/design/admin/components/Table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/design/admin/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/src/design/admin/components/Badge.tsx [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.js [app-client] (ecmascript)");
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
;
;
;
const formatPEN = function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN"
    }).format(n);
};
const formatDate = (iso)=>{
    if (!iso) return "-";
    const d = new Date(iso);
    return d.toLocaleString("es-PE", {
        dateStyle: "medium",
        timeStyle: "short"
    });
};
function AdminComprobantesPage() {
    _s();
    const { isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const admin = isAdmin();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [comprobantes, setComprobantes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Filtros
    const [globalFilter, setGlobalFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tipoFilter, setTipoFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [estadoFilter, setEstadoFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sorting, setSorting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        pageIndex: 0,
        pageSize: 10
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminComprobantesPage.useEffect": ()=>{
            if (!admin) return;
            const load = {
                "AdminComprobantesPage.useEffect.load": async ()=>{
                    setLoading(true);
                    setError(null);
                    try {
                        var _res_data;
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/facturacion/admin/comprobantes?pagina=1&limite=500");
                        const list = Array.isArray((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.comprobantes) ? res.data.comprobantes : [];
                        setComprobantes(list);
                    } catch (e) {
                        var _this, _e_response;
                        const msg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(e) ? ((_this = (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data) === null || _this === void 0 ? void 0 : _this.message) || e.message : "No se pudieron cargar los comprobantes";
                        setError(msg);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AdminComprobantesPage.useEffect.load"];
            load();
        }
    }["AdminComprobantesPage.useEffect"], [
        admin
    ]);
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminComprobantesPage.useMemo[columns]": ()=>[
                {
                    header: {
                        "AdminComprobantesPage.useMemo[columns]": ()=>"Tipo"
                    }["AdminComprobantesPage.useMemo[columns]"],
                    accessorKey: "tipo",
                    cell: {
                        "AdminComprobantesPage.useMemo[columns]": (param)=>{
                            let { getValue } = param;
                            const tipo = String(getValue() || "").toLowerCase();
                            const variant = tipo === "factura" ? "info" : "success";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                variant: variant,
                                size: "sm",
                                children: tipo || "-"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 82,
                                columnNumber: 8
                            }, this);
                        }
                    }["AdminComprobantesPage.useMemo[columns]"],
                    filterFn: {
                        "AdminComprobantesPage.useMemo[columns]": (row, _columnId, filterValue)=>{
                            const fv = String(filterValue || "").toLowerCase();
                            if (!fv) return true;
                            return String(row.original.tipo || "").toLowerCase() === fv;
                        }
                    }["AdminComprobantesPage.useMemo[columns]"]
                },
                {
                    header: {
                        "AdminComprobantesPage.useMemo[columns]": ()=>"Serie-Número"
                    }["AdminComprobantesPage.useMemo[columns]"],
                    id: "serie_numero",
                    accessorFn: {
                        "AdminComprobantesPage.useMemo[columns]": (row)=>{
                            var _row_serie, _row_numero;
                            return "".concat((_row_serie = row.serie) !== null && _row_serie !== void 0 ? _row_serie : "", "-").concat((_row_numero = row.numero) !== null && _row_numero !== void 0 ? _row_numero : "").replace(/^-/, '') || "";
                        }
                    }["AdminComprobantesPage.useMemo[columns]"],
                    cell: {
                        "AdminComprobantesPage.useMemo[columns]": (param)=>{
                            let { getValue } = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-slate-900",
                                children: String(getValue() || "-")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 94,
                                columnNumber: 31
                            }, this);
                        }
                    }["AdminComprobantesPage.useMemo[columns]"]
                },
                {
                    header: {
                        "AdminComprobantesPage.useMemo[columns]": ()=>"Cliente"
                    }["AdminComprobantesPage.useMemo[columns]"],
                    id: "cliente",
                    accessorFn: {
                        "AdminComprobantesPage.useMemo[columns]": (row)=>{
                            var _row_cliente, _row_cliente1;
                            return ((_row_cliente = row.cliente) === null || _row_cliente === void 0 ? void 0 : _row_cliente.nombre) || ((_row_cliente1 = row.cliente) === null || _row_cliente1 === void 0 ? void 0 : _row_cliente1.razon_social) || "";
                        }
                    }["AdminComprobantesPage.useMemo[columns]"],
                    cell: {
                        "AdminComprobantesPage.useMemo[columns]": (param)=>{
                            let { row } = param;
                            const c = row.original.cliente || {};
                            const nombre = c.nombre || c.razon_social || "-";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-700",
                                children: nombre
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 103,
                                columnNumber: 16
                            }, this);
                        }
                    }["AdminComprobantesPage.useMemo[columns]"]
                },
                {
                    header: {
                        "AdminComprobantesPage.useMemo[columns]": ()=>"Estado"
                    }["AdminComprobantesPage.useMemo[columns]"],
                    accessorKey: "estado",
                    cell: {
                        "AdminComprobantesPage.useMemo[columns]": (param)=>{
                            let { getValue } = param;
                            const estado = String(getValue() || "-").toLowerCase();
                            const variant = estado.includes("acept") || estado.includes("emit") ? "success" : estado.includes("rechaz") ? "danger" : estado.includes("pend") ? "warning" : "muted";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                variant: variant,
                                size: "sm",
                                children: estado || "-"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 112,
                                columnNumber: 16
                            }, this);
                        }
                    }["AdminComprobantesPage.useMemo[columns]"],
                    filterFn: {
                        "AdminComprobantesPage.useMemo[columns]": (row, _col, filterValue)=>{
                            const fv = String(filterValue || "").toLowerCase();
                            if (!fv) return true;
                            return String(row.original.estado || "").toLowerCase().includes(fv);
                        }
                    }["AdminComprobantesPage.useMemo[columns]"]
                },
                {
                    header: {
                        "AdminComprobantesPage.useMemo[columns]": ()=>"Emitido"
                    }["AdminComprobantesPage.useMemo[columns]"],
                    accessorKey: "created_at",
                    cell: {
                        "AdminComprobantesPage.useMemo[columns]": (param)=>{
                            let { getValue } = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-600",
                                children: formatDate(String(getValue()))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 123,
                                columnNumber: 31
                            }, this);
                        }
                    }["AdminComprobantesPage.useMemo[columns]"]
                },
                {
                    header: {
                        "AdminComprobantesPage.useMemo[columns]": ()=>"Total"
                    }["AdminComprobantesPage.useMemo[columns]"],
                    accessorKey: "total",
                    cell: {
                        "AdminComprobantesPage.useMemo[columns]": (param)=>{
                            let { getValue } = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-900",
                                children: formatPEN(Number(getValue() || 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 128,
                                columnNumber: 31
                            }, this);
                        }
                    }["AdminComprobantesPage.useMemo[columns]"]
                },
                {
                    header: {
                        "AdminComprobantesPage.useMemo[columns]": ()=>"Archivos"
                    }["AdminComprobantesPage.useMemo[columns]"],
                    id: "archivos",
                    cell: {
                        "AdminComprobantesPage.useMemo[columns]": (param)=>{
                            let { row } = param;
                            const a = row.original.archivos || {};
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-2",
                                children: [
                                    a.pdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                                            variant: "outline-primary",
                                            size: "sm"
                                        }),
                                        href: a.pdf,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "PDF"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this) : null,
                                    a.xml ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                                            variant: "outline-secondary",
                                            size: "sm"
                                        }),
                                        href: a.xml,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "XML"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this) : null,
                                    a.img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                                            variant: "outline-secondary",
                                            size: "sm"
                                        }),
                                        href: a.img,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "IMG"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this);
                        }
                    }["AdminComprobantesPage.useMemo[columns]"]
                }
            ]
    }["AdminComprobantesPage.useMemo[columns]"], []);
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data: comprobantes,
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
    // Filtro manual por tipo y estado (aplicar antes de pasar a la tabla)
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminComprobantesPage.useMemo[filteredData]": ()=>{
            return comprobantes.filter({
                "AdminComprobantesPage.useMemo[filteredData]": (c)=>{
                    var _c_cliente, _c_cliente1;
                    const tipoOk = tipoFilter ? String(c.tipo || "").toLowerCase() === tipoFilter : true;
                    const estadoOk = estadoFilter ? String(c.estado || "").toLowerCase().includes(estadoFilter) : true;
                    const glob = (globalFilter || "").toLowerCase();
                    var _c_serie, _c_numero;
                    const serieNumero = "".concat((_c_serie = c.serie) !== null && _c_serie !== void 0 ? _c_serie : "", "-").concat((_c_numero = c.numero) !== null && _c_numero !== void 0 ? _c_numero : "").toLowerCase();
                    const clienteNombre = String(((_c_cliente = c.cliente) === null || _c_cliente === void 0 ? void 0 : _c_cliente.nombre) || ((_c_cliente1 = c.cliente) === null || _c_cliente1 === void 0 ? void 0 : _c_cliente1.razon_social) || "").toLowerCase();
                    const globOk = glob ? serieNumero.includes(glob) || clienteNombre.includes(glob) : true;
                    return tipoOk && estadoOk && globOk;
                }
            }["AdminComprobantesPage.useMemo[filteredData]"]);
        }
    }["AdminComprobantesPage.useMemo[filteredData]"], [
        comprobantes,
        tipoFilter,
        estadoFilter,
        globalFilter
    ]);
    // Actualizar data en la tabla cuando haya filtros manuales
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminComprobantesPage.useEffect": ()=>{
            table.setOptions({
                "AdminComprobantesPage.useEffect": (prev)=>({
                        ...prev,
                        data: filteredData
                    })
            }["AdminComprobantesPage.useEffect"]);
        }
    }["AdminComprobantesPage.useEffect"], [
        filteredData
    ]);
    if (!admin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3",
                    children: "No estás autenticado como administrador."
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                        variant: "primary",
                        size: "sm"
                    }),
                    href: "/admin/login",
                    children: "Ir al login admin"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/comprobantes/page.tsx",
            lineNumber: 187,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-semibold",
                        children: "Comprobantes emitidos"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: tipoFilter,
                                onChange: (e)=>setTipoFilter(e.target.value.toLowerCase()),
                                className: "rounded-md border border-slate-300 bg-white px-2 py-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Todos los tipos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "boleta",
                                        children: "Boleta"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "factura",
                                        children: "Factura"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: estadoFilter,
                                onChange: (e)=>setEstadoFilter(e.target.value.toLowerCase()),
                                className: "rounded-md border border-slate-300 bg-white px-2 py-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Todos los estados"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "emit",
                                        children: "Emitido/Aceptado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "pend",
                                        children: "Pendiente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "rech",
                                        children: "Rechazado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "anul",
                                        children: "Anulado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Buscar cliente o serie/número…",
                                value: globalFilter,
                                onChange: (e)=>setGlobalFilter(e.target.value),
                                className: "w-56 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-900 focus:ring-2 focus:ring-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClasses"])({
                                    variant: "outline-secondary",
                                    size: "sm"
                                }),
                                onClick: ()=>{
                                    setGlobalFilter("");
                                    setTipoFilter("");
                                    setEstadoFilter("");
                                },
                                children: "Limpiar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Cargando..."
            }, void 0, false, {
                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this),
            !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 rounded-xl border border-slate-200 bg-white p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "h-6 w-40 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this),
                    [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-8 gap-3 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-5 w-20"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-5 w-20"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-5 w-56 col-span-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-5 w-24"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-5 w-24"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-8 w-40 justify-self-end col-span-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                lineNumber: 243,
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
                                            fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 21
                                        }, this)
                                    }, h.id, false, {
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, hg.id, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TBody"], {
                        children: [
                            table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tr"], {
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Td"], {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                        }, cell.id, false, {
                                            fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this))
                                }, row.id, false, {
                                    fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)),
                            !loading && table.getRowModel().rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tr"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$design$2f$admin$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Td"], {
                                    className: "text-center text-slate-500 px-3 py-6",
                                    colSpan: columns.length,
                                    children: "No hay comprobantes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                lineNumber: 258,
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
                            filteredData.length,
                            " comprobantes"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                        lineNumber: 295,
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
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 299,
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
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 306,
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
                                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/comprobantes/page.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/comprobantes/page.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s(AdminComprobantesPage, "useik08WCtOtlljFySzUAKWZY+Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"]
    ];
});
_c = AdminComprobantesPage;
var _c;
__turbopack_context__.k.register(_c, "AdminComprobantesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e7ab2bb7._.js.map