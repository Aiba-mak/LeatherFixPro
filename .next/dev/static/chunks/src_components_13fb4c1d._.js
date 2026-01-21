(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Gallery({ images }) {
    _s();
    const [lightboxImage, setLightboxImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            if (!lightboxImage) {
                document.body.style.overflow = "";
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
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "section-description",
                children: "Recent on-site work across automotive, marine, and residential interiors. Tap any preview to open the lightbox and see the finish in more detail."
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-grid",
                children: images.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "gallery-item",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "gallery-trigger",
                            onClick: ()=>setLightboxImage(image),
                            "aria-label": "Open gallery preview",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: image.src,
                                alt: image.alt,
                                width: 400,
                                height: 280,
                                className: "gallery-thumb",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Gallery.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Gallery.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, image.src, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 43,
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
                            fileName: "[project]/src/components/Gallery.tsx",
                            lineNumber: 73,
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
                            fileName: "[project]/src/components/Gallery.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "gallery-lightbox-meta",
                            children: lightboxImage.alt
                        }, void 0, false, {
                            fileName: "[project]/src/components/Gallery.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Gallery.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Gallery.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Gallery, "LZ+41VVpNbgz6yn2CV/QrysFx4I=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QuoteForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuoteForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const FALLBACK_FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME"; // Replace REPLACE_ME with your real Formspree form ID.
const MAX_FILES = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/heic",
    "image/heif"
];
function QuoteForm() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [photoError, setPhotoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previews, setPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const previewUrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        completed: 0,
        total: 0
    });
    const formspreeEndpoint = ("TURBOPACK compile-time value", "https://formspree.io/f/mjggweno") || FALLBACK_FORMSPREE_ENDPOINT;
    const cloudName = ("TURBOPACK compile-time value", "dssqppqac");
    const uploadPreset = ("TURBOPACK compile-time value", "snglkr0f");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuoteForm.useEffect": ()=>{
            return ({
                "QuoteForm.useEffect": ()=>{
                    previewUrlsRef.current.forEach(URL.revokeObjectURL);
                }
            })["QuoteForm.useEffect"];
        }
    }["QuoteForm.useEffect"], []);
    const clearPhotos = ()=>{
        previewUrlsRef.current.forEach((url)=>URL.revokeObjectURL(url));
        previewUrlsRef.current = [];
        setPreviews([]);
        setSelectedFiles([]);
        setPhotoError("");
    };
    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleFileInputChange = (event)=>{
        const files = event.target.files;
        if (!files?.length) {
            return;
        }
        setPhotoError("");
        const rawFiles = Array.from(files);
        const remainingSlots = MAX_FILES - selectedFiles.length;
        const selected = [];
        const errors = [];
        for (const file of rawFiles){
            if (selected.length >= remainingSlots) {
                errors.push(`You can select up to ${MAX_FILES} photos total.`);
                break;
            }
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                errors.push(`${file.name} isn’t a supported format. Only JPG, PNG, WebP, and HEIC files are allowed.`);
                continue;
            }
            if (file.size > MAX_FILE_SIZE) {
                errors.push(`${file.name} exceeds the 10 MB per-photo limit.`);
                continue;
            }
            selected.push(file);
        }
        if (selected.length) {
            const previewUrls = selected.map((file)=>URL.createObjectURL(file));
            previewUrlsRef.current = [
                ...previewUrlsRef.current,
                ...previewUrls
            ];
            setSelectedFiles((prev)=>[
                    ...prev,
                    ...selected
                ]);
            setPreviews((prev)=>[
                    ...prev,
                    ...previewUrls
                ]);
        }
        if (errors.length) {
            setPhotoError(errors.join(" "));
        } else {
            setPhotoError("");
        }
        event.target.value = "";
    };
    const handleRemovePhoto = (index)=>{
        setSelectedFiles((prev)=>{
            const updated = [
                ...prev
            ];
            updated.splice(index, 1);
            return updated;
        });
        setPreviews((prev)=>{
            const updated = [
                ...prev
            ];
            const [removedUrl] = updated.splice(index, 1);
            if (removedUrl) {
                URL.revokeObjectURL(removedUrl);
                previewUrlsRef.current = previewUrlsRef.current.filter((url)=>url !== removedUrl);
            }
            return updated;
        });
    };
    const uploadToCloudinary = async (file)=>{
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset ?? "");
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
            method: "POST",
            body: formData
        });
        const payload = await response.json().catch(()=>({}));
        if (!response.ok) {
            const message = payload?.error?.message || "Unable to upload photos. Please try again.";
            throw new Error(message);
        }
        return payload.secure_url;
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setStatus("submitting");
        setErrorMessage("");
        setPhotoError("");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const photoUrls = [];
        try {
            if (selectedFiles.length > 0) {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                setIsUploading(true);
                setUploadProgress({
                    completed: 0,
                    total: selectedFiles.length
                });
                for(let i = 0; i < selectedFiles.length; i += 1){
                    const secureUrl = await uploadToCloudinary(selectedFiles[i]);
                    photoUrls.push(secureUrl);
                    setUploadProgress((prev)=>({
                            ...prev,
                            completed: prev.completed + 1
                        }));
                }
            }
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message,
                    photo_urls: photoUrls.join("\n"),
                    _subject: "New quote request from LeatherFixPro site"
                })
            });
            if (!response.ok) {
                const data = await response.json().catch(()=>({}));
                throw new Error(data.error || "Unable to send your message. Please try again.");
            }
            clearPhotos();
            setFormData({
                name: "",
                phone: "",
                email: "",
                message: ""
            });
            setStatus("success");
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unable to send your message. Please try again.";
            setErrorMessage(message);
            setStatus("error");
        } finally{
            setIsUploading(false);
            setUploadProgress({
                completed: 0,
                total: 0
            });
        }
    };
    const isSubmitDisabled = status === "submitting" || isUploading;
    const uploadHint = isUploading && uploadProgress.total > 0 ? `Uploading ${uploadProgress.completed}/${uploadProgress.total}…` : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "quote-form",
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "form-label",
                children: [
                    "Name",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "form-input",
                        name: "name",
                        value: formData.name,
                        onChange: handleChange,
                        required: true,
                        type: "text",
                        placeholder: "Full name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "form-label",
                children: [
                    "Phone",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "form-input",
                        name: "phone",
                        value: formData.phone,
                        onChange: handleChange,
                        required: true,
                        type: "tel",
                        placeholder: "+1 (555) 555-5555"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "form-label",
                children: [
                    "Email (optional)",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "form-input",
                        name: "email",
                        value: formData.email,
                        onChange: handleChange,
                        type: "email",
                        placeholder: "you@example.com"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "form-label",
                children: [
                    "Message",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "form-input",
                        name: "message",
                        value: formData.message,
                        onChange: handleChange,
                        required: true,
                        rows: 4,
                        placeholder: "Describe the job, location, and timing needs."
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "form-label",
                children: [
                    "Photos (optional)",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "form-input",
                        type: "file",
                        accept: "image/jpeg,image/png,image/webp,image/heic,image/heif",
                        multiple: true,
                        onChange: handleFileInputChange
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-hint",
                        children: [
                            selectedFiles.length,
                            "/",
                            MAX_FILES,
                            " photos selected. JPG, PNG, WebP, HEIC only. Max 10 MB/photo."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            photoError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-status error",
                children: photoError
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 282,
                columnNumber: 22
            }, this),
            previews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "photo-preview-grid",
                children: previews.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "photo-preview",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: url,
                                alt: `Selected photo ${index + 1}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteForm.tsx",
                                lineNumber: 287,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "photo-remove",
                                type: "button",
                                onClick: ()=>handleRemovePhoto(index),
                                children: "Remove"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteForm.tsx",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${url}-${index}`, true, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 286,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this),
            status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-status success",
                children: "Quote request sent! We'll be in touch shortly."
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 300,
                columnNumber: 9
            }, this),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-status error",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 302,
                columnNumber: 30
            }, this),
            uploadHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-status info",
                children: uploadHint
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 303,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "quote-submit",
                type: "submit",
                disabled: isSubmitDisabled,
                children: isSubmitDisabled ? "Sending…" : "Send Request"
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuoteForm.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_s(QuoteForm, "x02mHykXvwVLQrYCM1nhW+LHiYo=");
_c = QuoteForm;
var _c;
__turbopack_context__.k.register(_c, "QuoteForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_13fb4c1d._.js.map