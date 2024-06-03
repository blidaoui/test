"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/components/Navbar/MonCompte/GererRestaurant/page",{

/***/ "(app-pages-browser)/./app/components/Admin/CommandeList.tsx":
/*!***********************************************!*\
  !*** ./app/components/Admin/CommandeList.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _barrel_optimize_names_MdAddTask_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdAddTask!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CommandeList = ()=>{\n    _s();\n    const [commande, setCommande] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [Update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sms, setSms] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [telephone, setTelephone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onSubmitSMS = async ()=>{\n        const data = localStorage.getItem(\"phonenumber\");\n        const res = await fetch(\"http://localhost:8000/backend/user/send_SMS\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                phoneNumber: data.télephone,\n                message: \"votre commande est prete\"\n            })\n        });\n        const jsonData = await res.json();\n        if (jsonData.message === \"Message envoy\\xe9 avec succ\\xe8s\") {}\n    };\n    const fetchCommande = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:8000/backend/panier\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (response.ok) {\n                const data = await response.json();\n                setCommande(data); // Set the users state with the fetched data\n            } else {\n                console.error(\"Failed to fetch Commande\");\n            }\n        } catch (error) {\n            console.error(\"Error fetching Commande:\", error);\n        }\n    };\n    const changeEtat = async (id, etat_commande, phone)=>{\n        try {\n            const response = await fetch(\"http://localhost:8000/backend/panier/\".concat(id), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    etat_Commande: etat_commande\n                })\n            });\n            if (response.ok) {\n                // Update the local state to reflect the changes\n                setCommande((prevState)=>prevState.map((item)=>item.id === id ? {\n                            ...item,\n                            etat_Commande: etat_commande\n                        } : item));\n                const res = await fetch(\"http://localhost:8000/backend/user/send_SMS\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        phoneNumber: phone,\n                        message: \"Votre commande est prete\"\n                    })\n                });\n            } else {\n                console.error(\"Failed to update status:\", response.status, response.statusText);\n            }\n        } catch (error) {\n            console.error(\"Error updating status:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCommande();\n    }, [\n        Update\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Liste des commandes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"titre \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"etat_Commande\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"prix\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"id_user\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"ModeRetrait.Mode\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"ModeRetrait.time\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"createdAt\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"accepter\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"refus\\xe9\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: commande.map((commandeItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: Object.values(commandeItem.cartItem).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: item.title\n                                            }, index, false, {\n                                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                                lineNumber: 121,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: commandeItem.etat_Commande\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: commandeItem.prix\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: commandeItem.id_user\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: commandeItem.ModeRetrait.Mode\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \" \",\n                                            commandeItem.ModeRetrait.time\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: commandeItem.createdAt\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            onClick: ()=>{\n                                                changeEtat(commandeItem.id, \"commande prete\", commandeItem.ModeRetrait.phoneNumber);\n                                                setUpdate(!Update);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdAddTask_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdAddTask, {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, commandeItem.id, true, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\restaurant-tailwind-nextjs-free-main\\\\app\\\\components\\\\Admin\\\\CommandeList.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CommandeList, \"D3bIj8gGhqNQDSsliAk1NAE7bQM=\");\n_c = CommandeList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommandeList);\nvar _c;\n$RefreshReg$(_c, \"CommandeList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FkbWluL0NvbW1hbmRlTGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDVjtBQUNFO0FBYzNDLE1BQU1LLGVBQXlCOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQWEsRUFBRTtJQUN2RCxNQUFNLENBQUNNLFFBQU9DLFVBQVUsR0FBR1AsK0NBQVFBLENBQVU7SUFFN0MsTUFBTSxDQUFDUSxLQUFLQyxPQUFPLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNWSxjQUFjO1FBQ3BCLE1BQU1DLE9BQVdDLGFBQWFDLE9BQU8sQ0FBQztRQUNwQyxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sK0NBQStDO1lBQ25FQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2JDLGFBQWFWLEtBQUtXLFNBQVM7Z0JBQzNCQyxTQUFVO1lBQ2xCO1FBQ047UUFDQSxNQUFNQyxXQUFXLE1BQU1WLElBQUlXLElBQUk7UUFFL0IsSUFBSUQsU0FBU0QsT0FBTyxLQUFLLG9DQUE4QixDQUV2RDtJQUNBO0lBRUUsTUFBTUcsZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1aLE1BQU0sd0NBQXdDO2dCQUNuRUMsUUFBUTtnQkFDUkMsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO1lBQ2hEO1lBQ0EsSUFBSVUsU0FBU0MsRUFBRSxFQUFFO2dCQUNmLE1BQU1qQixPQUFPLE1BQU1nQixTQUFTRixJQUFJO2dCQUNoQ3RCLFlBQVlRLE9BQU8sNENBQTRDO1lBQ2pFLE9BQU87Z0JBQ0xrQixRQUFRQyxLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLDRC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bW1hbmRlTGlzdC50c3g/NmY1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IE1kQWRkVGFzayB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBSaUNoYXREZWxldGVMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29tbWFuZGUge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgZXRhdDogc3RyaW5nO1xyXG4gIHByaXg6IHN0cmluZztcclxuICBpZF91c2VyOiBudW1iZXI7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgTW9kZVJldHJhaXQ6IHsgTW9kZTogc3RyaW5nOyB0aW1lOiBzdHJpbmcgfTtcclxuICBjYXJ0SXRlbTogeyBba2V5OiBzdHJpbmddOiB7IHRpdGxlOiBzdHJpbmcgfSB9O1xyXG4gIGV0YXRfQ29tbWFuZGU6IHN0cmluZzsgLy8gVXBkYXRlZCBwcm9wZXJ0eSBuYW1lXHJcbn1cclxuXHJcbmNvbnN0IENvbW1hbmRlTGlzdDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbW1hbmRlLCBzZXRDb21tYW5kZV0gPSB1c2VTdGF0ZTxDb21tYW5kZVtdPihbXSk7XHJcbiAgY29uc3QgW1VwZGF0ZSxzZXRVcGRhdGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBbc21zLCBzZXRTbXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5jb25zdCBbdGVsZXBob25lLCBzZXRUZWxlcGhvbmVdID0gdXNlU3RhdGUoXCJcIik7IFxyXG5jb25zdCBvblN1Ym1pdFNNUyA9IGFzeW5jICgpID0+IHtcclxuY29uc3QgZGF0YTphbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGhvbmVudW1iZXInKVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2JhY2tlbmQvdXNlci9zZW5kX1NNU1wiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAgXHJcbiAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGRhdGEudMOpbGVwaG9uZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBgdm90cmUgY29tbWFuZGUgZXN0IHByZXRlYCxcclxuICAgICAgfSksXHJcbn0pO1xyXG5jb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG5pZiAoanNvbkRhdGEubWVzc2FnZSA9PT0gXCJNZXNzYWdlIGVudm95w6kgYXZlYyBzdWNjw6hzXCIpIHtcclxuXHJcbn1cclxufTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDb21tYW5kZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYmFja2VuZC9wYW5pZXJcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldENvbW1hbmRlKGRhdGEpOyAvLyBTZXQgdGhlIHVzZXJzIHN0YXRlIHdpdGggdGhlIGZldGNoZWQgZGF0YVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggQ29tbWFuZGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBDb21tYW5kZTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUV0YXQgPSBhc3luYyAoaWQ6IG51bWJlciwgZXRhdF9jb21tYW5kZTogc3RyaW5nLHBob25lOnN0cmluZykgPT4ge1xyXG4gICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2JhY2tlbmQvcGFuaWVyLyR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBldGF0X0NvbW1hbmRlOiBldGF0X2NvbW1hbmRlIH0pLCAvLyBJbmNsdWRlIGV0YXRfQ29tbWFuZGUgaW4gdGhlIHJlcXVlc3QgYm9keVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgbG9jYWwgc3RhdGUgdG8gcmVmbGVjdCB0aGUgY2hhbmdlc1xyXG4gICAgICAgIHNldENvbW1hbmRlKHByZXZTdGF0ZSA9PlxyXG4gICAgICAgICAgcHJldlN0YXRlLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgIGl0ZW0uaWQgPT09IGlkID8geyAuLi5pdGVtLCBldGF0X0NvbW1hbmRlOiBldGF0X2NvbW1hbmRlIH0gOiBpdGVtXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9iYWNrZW5kL3VzZXIvc2VuZF9TTVNcIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgIFxyXG4gICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogcGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBWb3RyZSBjb21tYW5kZSBlc3QgcHJldGVgLFxyXG4gICAgICAgICAgfSksXHJcbiAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgc3RhdHVzOlwiLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgc3RhdHVzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQ29tbWFuZGUoKTtcclxuICB9LCBbVXBkYXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+TGlzdGUgZGVzIGNvbW1hbmRlczwvaDI+XHJcblxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD50aXRyZSA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPmV0YXRfQ29tbWFuZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPnByaXg8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPmlkX3VzZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPk1vZGVSZXRyYWl0Lk1vZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPk1vZGVSZXRyYWl0LnRpbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPmNyZWF0ZWRBdDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+YWNjZXB0ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPnJlZnVzw6k8L3RoPlxyXG5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtjb21tYW5kZS5tYXAoKGNvbW1hbmRlSXRlbTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2NvbW1hbmRlSXRlbS5pZH0+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIHsvKiBDb252ZXJ0aXIgbCdvYmpldCBjYXJ0SXRlbSBlbiB0YWJsZWF1IGQnb2JqZXRzIGV0IGFmZmljaGVyIGxlcyB0aXRyZXMgKi99XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhjb21tYW5kZUl0ZW0uY2FydEl0ZW0pLm1hcCgoaXRlbTphbnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PntpdGVtLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntjb21tYW5kZUl0ZW0uZXRhdF9Db21tYW5kZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Y29tbWFuZGVJdGVtLnByaXh9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2NvbW1hbmRlSXRlbS5pZF91c2VyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntjb21tYW5kZUl0ZW0uTW9kZVJldHJhaXQuTW9kZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4ge2NvbW1hbmRlSXRlbS5Nb2RlUmV0cmFpdC50aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntjb21tYW5kZUl0ZW0uY3JlYXRlZEF0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7Y2hhbmdlRXRhdChjb21tYW5kZUl0ZW0uaWQsIFwiY29tbWFuZGUgcHJldGVcIixjb21tYW5kZUl0ZW0uTW9kZVJldHJhaXQucGhvbmVOdW1iZXIpO3NldFVwZGF0ZSghVXBkYXRlKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRVcGRhdGU9e3NldFVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNZEFkZFRhc2sgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1hbmRlTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJNZEFkZFRhc2siLCJDb21tYW5kZUxpc3QiLCJjb21tYW5kZSIsInNldENvbW1hbmRlIiwiVXBkYXRlIiwic2V0VXBkYXRlIiwic21zIiwic2V0U21zIiwidGVsZXBob25lIiwic2V0VGVsZXBob25lIiwib25TdWJtaXRTTVMiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicGhvbmVOdW1iZXIiLCJ0w6lsZXBob25lIiwibWVzc2FnZSIsImpzb25EYXRhIiwianNvbiIsImZldGNoQ29tbWFuZGUiLCJyZXNwb25zZSIsIm9rIiwiY29uc29sZSIsImVycm9yIiwiY2hhbmdlRXRhdCIsImlkIiwiZXRhdF9jb21tYW5kZSIsInBob25lIiwiZXRhdF9Db21tYW5kZSIsInByZXZTdGF0ZSIsIm1hcCIsIml0ZW0iLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGl2IiwiaDIiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwiY29tbWFuZGVJdGVtIiwidGQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjYXJ0SXRlbSIsImluZGV4Iiwic3BhbiIsInRpdGxlIiwicHJpeCIsImlkX3VzZXIiLCJNb2RlUmV0cmFpdCIsIk1vZGUiLCJ0aW1lIiwiY3JlYXRlZEF0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Admin/CommandeList.tsx\n"));

/***/ })

});