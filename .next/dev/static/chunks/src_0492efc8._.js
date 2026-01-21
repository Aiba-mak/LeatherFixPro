(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/gallery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "galleryImages",
    ()=>galleryImages
]);
const galleryImages = [
    {
        src: "/images/gallery/automotive/automotive1.jpg",
        category: "Automotive",
        alt: "Sleek automotive leather repair"
    },
    {
        src: "/images/gallery/automotive/automotive2.jpg",
        category: "Automotive",
        alt: "Custom leather panel refinish"
    },
    {
        src: "/images/gallery/commercial/commercial1.jpg",
        category: "Commercial",
        alt: "Commercial seating restoration in progress"
    },
    {
        src: "/images/gallery/commercial/commercial2.jpg",
        category: "Commercial",
        alt: "Lobby furniture returned to showroom brightness"
    },
    {
        src: "/images/gallery/furniture/furniture1.jpg",
        category: "Furniture",
        alt: "High-end sofa repair with matching dye"
    },
    {
        src: "/images/gallery/furniture/furniture2.jpg",
        category: "Furniture",
        alt: "Living room lounge renewed and protected"
    },
    {
        src: "/images/gallery/rv-marine/rv1.jpg",
        category: "RV & Marine",
        alt: "RV leather lounge refreshed on-site"
    },
    {
        src: "/images/gallery/rv-marine/rv2.jpg",
        category: "RV & Marine",
        alt: "Marine seating with renewed sheen and stitching"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Gallery.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/gallery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const filterOptions = [
    "All",
    "Furniture",
    "Automotive",
    "RV & Marine",
    "Commercial"
];
function Gallery() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(filterOptions[0]);
    const [lightboxImage, setLightboxImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const visibleImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Gallery.useMemo[visibleImages]": ()=>{
            if (activeCategory === "All") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"];
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"].filter({
                "Gallery.useMemo[visibleImages]": (image)=>image.category === activeCategory
            }["Gallery.useMemo[visibleImages]"]);
        }
    }["Gallery.useMemo[visibleImages]"], [
        activeCategory
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            if (!lightboxImage) {
                return undefined;
            }
            const handleKeyUp = {
                "Gallery.useEffect.handleKeyUp": (event)=>{
                    if (event.key === "Escape") {
                        setLightboxImage(null);
                    }
                }
            }["Gallery.useEffect.handleKeyUp"];
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            window.addEventListener("keyup", handleKeyUp);
            return ({
                "Gallery.useEffect": ()=>{
                    document.body.style.overflow = previousOverflow;
                    window.removeEventListener("keyup", handleKeyUp);
                }
            })["Gallery.useEffect"];
        }
    }["Gallery.useEffect"], [
        lightboxImage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery",
        className: "section gallery-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title",
                children: "Gallery"
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "section-description",
                children: "Curated highlights from automotive, furniture, marine, and commercial projects. Tap any preview to see a larger finish."
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery-filter-group",
                        children: filterOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `gallery-filter ${activeCategory === option ? "active" : ""}`,
                                onClick: ()=>setActiveCategory(option),
                                children: option
                            }, option, false, {
                                fileName: "[project]/src/components/Gallery.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "gallery-count",
                        children: [
                            visibleImages.length,
                            " ",
                            visibleImages.length === 1 ? "photo" : "photos"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Gallery.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Gallery.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-grid",
                children: visibleImages.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "gallery-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "gallery-trigger",
                                onClick: ()=>setLightboxImage(image),
                                "aria-label": `Open ${image.category} image`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: image.src,
                                    alt: image.alt,
                                    width: 400,
                                    height: 280,
                                    className: "gallery-thumb",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Gallery.jsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Gallery.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                className: "gallery-caption",
                                children: image.category
                            }, void 0, false, {
                                fileName: "[project]/src/components/Gallery.jsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, image.src, true, {
                        fileName: "[project]/src/components/Gallery.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            lightboxImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-lightbox",
                role: "presentation",
                onClick: ()=>setLightboxImage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gallery-lightbox-inner",
                    onClick: (event)=>event.stopPropagation(),
                    role: "dialog",
                    "aria-modal": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "gallery-lightbox-close",
                            onClick: ()=>setLightboxImage(null),
                            "aria-label": "Close preview",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Gallery.jsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: lightboxImage.src,
                            alt: lightboxImage.alt,
                            width: 1000,
                            height: 650,
                            className: "gallery-lightbox-image",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/Gallery.jsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "gallery-lightbox-meta",
                            children: lightboxImage.alt
                        }, void 0, false, {
                            fileName: "[project]/src/components/Gallery.jsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Gallery.jsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.jsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Gallery.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Gallery, "rj9DkQqgtpmDTtNhnTy1BUo7H4Y=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0492efc8._.js.map