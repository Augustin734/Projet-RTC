(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/chat/[channelId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
let typingTimeout = null;
function ChatPage() {
    _s();
    const { channelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [channelName, setChannelName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [serverId, setServerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [typingText, setTypingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Récupération infos channel via API nom server
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            const fetchChannel = {
                "ChatPage.useEffect.fetchChannel": async ()=>{
                    const token = localStorage.getItem("token");
                    if (!token) return router.push("/connexion");
                    try {
                        // Utilisation de la route testée GET /channels/:channelId
                        const res = await fetch(`http://localhost:3001/channels/${channelId}`, {
                            headers: {
                                Authorization: "Bearer " + token
                            }
                        });
                        if (!res.ok) throw new Error("Impossible de récupérer le channel");
                        const data = await res.json();
                        setChannelName(data.data.name);
                        setServerId(data.data.server_id);
                    } catch (err) {
                        console.error(err);
                        alert("Erreur lors de la récupération du channel");
                        router.push("/server");
                    }
                }
            }["ChatPage.useEffect.fetchChannel"];
            fetchChannel();
        }
    }["ChatPage.useEffect"], [
        channelId,
        router
    ]);
    // --- Récupération messages persistants MongoDB ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            const fetchMessages = {
                "ChatPage.useEffect.fetchMessages": async ()=>{
                    const token = localStorage.getItem("token");
                    if (!token) return;
                    try {
                        const res = await fetch(`http://localhost:3001/message/channel/${channelId}`, {
                            headers: {
                                Authorization: "Bearer " + token
                            }
                        });
                        if (!res.ok) throw new Error("Impossible de récupérer les messages");
                        const data = await res.json();
                        // On mappe pour correspondre à la structure du front
                        const mappedMessages = data.data.map({
                            "ChatPage.useEffect.fetchMessages.mappedMessages": (m)=>({
                                    type: "chat",
                                    sender: m.userId,
                                    text: m.content,
                                    _id: m._id,
                                    createdAt: m.createdAt
                                })
                        }["ChatPage.useEffect.fetchMessages.mappedMessages"]);
                        setMessages(mappedMessages);
                    } catch (err) {
                        console.error(err);
                    }
                }
            }["ChatPage.useEffect.fetchMessages"];
            if (channelId) fetchMessages();
        }
    }["ChatPage.useEffect"], [
        channelId
    ]);
    // Connexion socket + listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            const token = localStorage.getItem("token");
            if (!token) return;
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("http://localhost:3001", {
                auth: {
                    token
                },
                autoConnect: false
            });
            // msg système
            s.on("system", {
                "ChatPage.useEffect": (msg)=>{
                    setMessages({
                        "ChatPage.useEffect": (prev)=>[
                                ...prev,
                                {
                                    type: "system",
                                    text: msg
                                }
                            ]
                    }["ChatPage.useEffect"]);
                }
            }["ChatPage.useEffect"]);
            // msg chnl
            s.on("channel message", {
                "ChatPage.useEffect": (data)=>{
                    setMessages({
                        "ChatPage.useEffect": (prev)=>[
                                ...prev,
                                {
                                    type: "chat",
                                    sender: data.sender,
                                    text: data.msg
                                }
                            ]
                    }["ChatPage.useEffect"]);
                }
            }["ChatPage.useEffect"]);
            // users online
            s.on("channel users", {
                "ChatPage.useEffect": (data)=>{
                    if (String(data.channelId) === String(channelId)) {
                        setUsers(data.users);
                    }
                }
            }["ChatPage.useEffect"]);
            // typing
            s.on("typing", {
                "ChatPage.useEffect": (data)=>{
                    setTypingText(data.isTyping ? `${data.user} est en train d'écrire...` : "");
                }
            }["ChatPage.useEffect"]);
            s.connect();
            s.emit("join channel", channelId);
            setSocket(s);
            return ({
                "ChatPage.useEffect": ()=>{
                    s.emit("leave channel", channelId);
                    s.disconnect();
                }
            })["ChatPage.useEffect"];
        }
    }["ChatPage.useEffect"], [
        channelId
    ]);
    // Typing avec debounce
    const handleTyping = (value)=>{
        setInput(value);
        if (!socket) return;
        socket.emit("typing", {
            channelId,
            isTyping: true
        });
        if (typingTimeout) clearTimeout(typingTimeout);
        typingTimeout = setTimeout(()=>{
            socket.emit("typing", {
                channelId,
                isTyping: false
            });
        }, 900);
    };
    // Envoi message
    const send = (e)=>{
        e.preventDefault();
        if (!input.trim()) return;
        socket.emit("channel message", {
            channelId,
            msg: input
        });
        socket.emit("typing", {
            channelId,
            isTyping: false
        });
        setInput("");
    };
    // Quitter le channel
    const leaveChannel = ()=>{
        if (!socket) return;
        socket.emit("leave channel", channelId);
        socket.disconnect();
        router.push(`/channel/${serverId}`);
    };
    // Supprimer le channel
    const deleteChannel = async ()=>{
        const token = localStorage.getItem("token");
        if (!token) return;
        try {
            // Utilisation de la route testée DELETE /channels/:channelId
            const res = await fetch(`http://localhost:3001/channels/${channelId}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            if (!res.ok) throw new Error("Impossible de supprimer le channel");
            alert("Channel supprimé !");
            router.push(`/channel/${serverId}`);
        } catch (err) {
            console.error(err);
            alert("Erreur lors de la suppression du channel");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-app",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: channelName
                    }, void 0, false, {
                        fileName: "[project]/app/chat/[channelId]/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: leaveChannel,
                        children: "Leave"
                    }, void 0, false, {
                        fileName: "[project]/app/chat/[channelId]/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/chat/[channelId]/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "actions",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: deleteChannel,
                    children: "Supprimer le channel"
                }, void 0, false, {
                    fileName: "[project]/app/chat/[channelId]/page.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/chat/[channelId]/page.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "users",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Utilisateurs :"
                    }, void 0, false, {
                        fileName: "[project]/app/chat/[channelId]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    " ",
                    users.join(", ") || "..."
                ]
            }, void 0, true, {
                fileName: "[project]/app/chat/[channelId]/page.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            typingText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "typing",
                children: typingText
            }, void 0, false, {
                fileName: "[project]/app/chat/[channelId]/page.tsx",
                lineNumber: 209,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "messages",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    children: messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: m.type === "system" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "system",
                                children: m.text
                            }, void 0, false, {
                                fileName: "[project]/app/chat/[channelId]/page.tsx",
                                lineNumber: 216,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "message other",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "author",
                                        children: m.sender
                                    }, void 0, false, {
                                        fileName: "[project]/app/chat/[channelId]/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "content",
                                        children: m.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/chat/[channelId]/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/chat/[channelId]/page.tsx",
                                lineNumber: 218,
                                columnNumber: 17
                            }, this)
                        }, i, false, {
                            fileName: "[project]/app/chat/[channelId]/page.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/chat/[channelId]/page.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/chat/[channelId]/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: send,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: input,
                        onChange: (e)=>handleTyping(e.target.value),
                        placeholder: "Message…"
                    }, void 0, false, {
                        fileName: "[project]/app/chat/[channelId]/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/app/chat/[channelId]/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/chat/[channelId]/page.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/chat/[channelId]/page.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s(ChatPage, "W5BDwxLXU4BqZGB97p4oiudXe/w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ChatPage;
var _c;
__turbopack_context__.k.register(_c, "ChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_chat_%5BchannelId%5D_page_tsx_143ebf0b._.js.map