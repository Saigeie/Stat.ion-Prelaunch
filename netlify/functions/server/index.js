var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:P:\Stat.ion\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/assets/Mask group.png
var Mask_group_default = "/build/_assets/Mask group-CTOBXWUK.png";

// route:P:\Stat.ion\app\root.tsx
var import_react = require("react");
var meta = () => ({
  charset: "utf-8",
  title: "Station - the place you need for links.",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    {
      rel: "icon",
      href: Mask_group_default,
      type: "image/png"
    }
  ];
};
function App() {
  (0, import_react.useEffect)(() => {
    const hostname = window.location.protocol;
    console.log(window.location.host, hostname);
    if (hostname !== "https:") {
      window.location.replace(`https://${window.location.host}`);
    }
  });
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:P:\Stat.ion\app\routes\socials\discord.tsx
var discord_exports = {};
__export(discord_exports, {
  default: () => Discord,
  links: () => links2
});
init_react();
var import_react2 = require("react");

// app/styles/general.css
var general_default = "/build/_assets/general-TJG4AR6I.css";

// app/styles/_abstract/root.css
var root_default = "/build/_assets/root-I22PUAJS.css";

// app/styles/_pages/pending.css
var pending_default = "/build/_assets/pending-HX3ZL32L.css";

// route:P:\Stat.ion\app\routes\socials\discord.tsx
var import_aos = __toESM(require("aos"));
function Discord() {
  (0, import_react2.useEffect)(() => {
    import_aos.default.init();
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "main",
    "data-aos": "fade-up"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "header"
  }, "Coming Soon")));
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
    },
    { rel: "stylesheet", href: general_default },
    { rel: "stylesheet", href: root_default },
    { rel: "stylesheet", href: pending_default },
    { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" }
  ];
}

// route:P:\Stat.ion\app\routes\pending\index.tsx
var pending_exports = {};
__export(pending_exports, {
  default: () => Pending,
  links: () => links3
});
init_react();

// app/styles/_abstract/buttons.css
var buttons_default = "/build/_assets/buttons-AM2UAJZY.css";

// route:P:\Stat.ion\app\routes\pending\index.tsx
var import_aos2 = __toESM(require("aos"));
var import_react3 = require("react");
function Pending() {
  (0, import_react3.useEffect)(() => {
    import_aos2.default.init();
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "main",
    "data-aos": "fade-up"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "header"
  }, "This is coming soon..."), /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "btn primary"
  }, "Return Home")));
}
function links3() {
  return [
    { rel: "stylesheet", href: root_default },
    { rel: "stylesheet", href: buttons_default },
    { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
    { rel: "stylesheet", href: pending_default }
  ];
}

// route:P:\Stat.ion\app\routes\faq\index.tsx
var faq_exports = {};
__export(faq_exports, {
  default: () => Faq,
  links: () => links4
});
init_react();

// app/styles/_pages/faq.css
var faq_default = "/build/_assets/faq-7MDZPLWX.css";

// route:P:\Stat.ion\app\routes\faq\index.tsx
var import_react4 = require("react");
var import_aos3 = __toESM(require("aos"));
function Faq() {
  (0, import_react4.useEffect)(() => {
    import_aos3.default.init();
    const question = document.getElementById("question");
    for (let i = 0; i < (question == null ? void 0 : question.childNodes.length); i++) {
      const childId = question == null ? void 0 : question.childNodes[i].id;
      const questionNum = document.getElementById(childId);
      questionNum == null ? void 0 : questionNum.addEventListener("click", (e) => {
        questionNum.classList.toggle("fullyExtended");
      });
    }
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "main",
    "data-aos": "fade-up"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "header"
  }, "FAQ")), /* @__PURE__ */ React.createElement("div", {
    className: "questions",
    id: "question"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "question",
    id: "question1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "questionHeader",
    id: "questionHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, "When Will this be released?"), /* @__PURE__ */ React.createElement("i", {
    className: "bx bxs-down-arrow",
    id: "arrow-down1"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "questionAnwser"
  }, /* @__PURE__ */ React.createElement("p", null, "As for now we do not have a desinated date for when we plan on releasing ", /* @__PURE__ */ React.createElement("span", {
    className: "brand"
  }, "stat.ion"), "."))), /* @__PURE__ */ React.createElement("div", {
    className: "question",
    id: "question2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "questionHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, "What exaclty is ", /* @__PURE__ */ React.createElement("span", {
    className: "brand"
  }, "stat.ion"), "?"), /* @__PURE__ */ React.createElement("i", {
    className: "bx bxs-down-arrow",
    id: "arrow-down2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "questionAnwser"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", {
    className: "brand"
  }, "stat.ion"), " is a place for you to put all of your links, with the accessibility to see", " ", /* @__PURE__ */ React.createElement("span", {
    className: "brand"
  }, "stat"), "istics on each of these links aswell as profile views etc."))), /* @__PURE__ */ React.createElement("div", {
    className: "question",
    id: "question3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "questionHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, "How do i gain beta access?"), /* @__PURE__ */ React.createElement("i", {
    className: "bx bxs-down-arrow",
    id: "arrow-down2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "questionAnwser"
  }, /* @__PURE__ */ React.createElement("p", null, "To gain beta access to ", /* @__PURE__ */ React.createElement("span", {
    className: "brand"
  }, "stat.ion"), ", you must ", /* @__PURE__ */ React.createElement("a", {
    href: "/socials/discord",
    className: "link"
  }, "join the discord"), ". Once there you can apply, and possibly get accepted. Other than that you can win giveaways to gain access."))))));
}
function links4() {
  return [
    { rel: "stylesheet", href: root_default },
    { rel: "stylesheet", href: buttons_default },
    { rel: "stylesheet", href: faq_default },
    { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
    }
  ];
}

// route:P:\Stat.ion\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links5
});
init_react();

// app/components/UI/Navbar.tsx
init_react();
function Navbar() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "menu"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "burger",
    id: "BurgerButton"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "burgerLine",
    id: "LineOneBurger"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "burgerLine",
    id: "LineTwoBurger"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "navitems",
    id: "navItems"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: "navitem"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/faq"
  }, "FAQ")), /* @__PURE__ */ React.createElement("li", {
    className: "navitem"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/pending"
  }, "Beta Testers")))));
}

// app/styles/_components/navbar.css
var navbar_default = "/build/_assets/navbar-O4SLZ3VM.css";

// route:P:\Stat.ion\app\routes\index.tsx
var import_react6 = require("react");

// app/components/UI/Home.Header.tsx
init_react();

// app/assets/Illistration.png
var Illistration_default = "/build/_assets/Illistration-KAN7P3TM.png";

// app/components/UI/Home.Header.tsx
var import_aos4 = __toESM(require("aos"));
var import_react5 = require("react");
function HeaderHome() {
  (0, import_react5.useEffect)(() => {
    import_aos4.default.init();
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "whole",
    "data-aos": "fade-up"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "header"
  }, "Easy To Use Links Page,", " ", /* @__PURE__ */ React.createElement("span", {
    className: "underline"
  }, "Incredibly"), " Efficient"), /* @__PURE__ */ React.createElement("h3", {
    className: "about"
  }, "Store all your links in one customable and accessable place, easly see statistics on everything.")), /* @__PURE__ */ React.createElement("div", {
    className: "cta"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/socials/discord",
    className: "btn primary"
  }, "Join The Discord!"))), /* @__PURE__ */ React.createElement("div", {
    className: "image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Illistration_default,
    alt: "Analytic Illistration"
  }))));
}

// app/styles/_components/home.header.css
var home_header_default = "/build/_assets/home.header-DGTHK4TX.css";

// route:P:\Stat.ion\app\routes\index.tsx
var import_aos5 = __toESM(require("aos"));
function Index() {
  (0, import_react6.useEffect)(() => {
    import_aos5.default.init();
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      navbar == null ? void 0 : navbar.classList.toggle("navbarScroll", window.scrollY > 10);
    });
    const Menu = document.getElementById("BurgerButton");
    const LineOne = document.getElementById("LineOneBurger");
    const LineTwo = document.getElementById("LineTwoBurger");
    const NavItems = document.getElementById("navItems");
    Menu == null ? void 0 : Menu.addEventListener("click", (e) => {
      e.preventDefault();
      LineOne == null ? void 0 : LineOne.classList.toggle("burgerActiveTOP");
      LineTwo == null ? void 0 : LineTwo.classList.toggle("burgerActiveBOTTOM");
      NavItems == null ? void 0 : NavItems.classList.toggle("navitemsActive");
    });
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(HeaderHome, {
    "data-aos": "fade-up"
  }));
}
function links5() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
    },
    { rel: "stylesheet", href: general_default },
    { rel: "stylesheet", href: navbar_default },
    { rel: "stylesheet", href: buttons_default },
    { rel: "stylesheet", href: root_default },
    { rel: "stylesheet", href: home_header_default },
    { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" }
  ];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "a42c51bd", "entry": { "module": "/build/entry.client-SGVRJOIF.js", "imports": ["/build/_shared/chunk-WUP4ZKHD.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-RGRMAAJ7.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/faq/index": { "id": "routes/faq/index", "parentId": "root", "path": "faq", "index": true, "caseSensitive": void 0, "module": "/build/routes/faq/index-3PFZGT3B.js", "imports": ["/build/_shared/chunk-56QRIQOL.js", "/build/_shared/chunk-T4K35S7W.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-PKPGSHDI.js", "imports": ["/build/_shared/chunk-DT4PNGVY.js", "/build/_shared/chunk-56QRIQOL.js", "/build/_shared/chunk-T4K35S7W.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pending/index": { "id": "routes/pending/index", "parentId": "root", "path": "pending", "index": true, "caseSensitive": void 0, "module": "/build/routes/pending/index-W6SXAWJN.js", "imports": ["/build/_shared/chunk-NNW3TPWF.js", "/build/_shared/chunk-56QRIQOL.js", "/build/_shared/chunk-T4K35S7W.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/socials/discord": { "id": "routes/socials/discord", "parentId": "root", "path": "socials/discord", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/socials/discord-E47QDUF3.js", "imports": ["/build/_shared/chunk-NNW3TPWF.js", "/build/_shared/chunk-DT4PNGVY.js", "/build/_shared/chunk-T4K35S7W.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A42C51BD.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/socials/discord": {
    id: "routes/socials/discord",
    parentId: "root",
    path: "socials/discord",
    index: void 0,
    caseSensitive: void 0,
    module: discord_exports
  },
  "routes/pending/index": {
    id: "routes/pending/index",
    parentId: "root",
    path: "pending",
    index: true,
    caseSensitive: void 0,
    module: pending_exports
  },
  "routes/faq/index": {
    id: "routes/faq/index",
    parentId: "root",
    path: "faq",
    index: true,
    caseSensitive: void 0,
    module: faq_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6UDpcXFN0YXQuaW9uXFxhcHBcXHJvb3QudHN4IiwgInJvdXRlOlA6XFxTdGF0LmlvblxcYXBwXFxyb3V0ZXNcXHNvY2lhbHNcXGRpc2NvcmQudHN4IiwgInJvdXRlOlA6XFxTdGF0LmlvblxcYXBwXFxyb3V0ZXNcXHBlbmRpbmdcXGluZGV4LnRzeCIsICJyb3V0ZTpQOlxcU3RhdC5pb25cXGFwcFxccm91dGVzXFxmYXFcXGluZGV4LnRzeCIsICJyb3V0ZTpQOlxcU3RhdC5pb25cXGFwcFxccm91dGVzXFxpbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvVUkvTmF2YmFyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9VSS9Ib21lLkhlYWRlci50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgbGV0IGF1dGhIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXTtcbiAgbGV0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgbGV0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyLFxuICB9O1xuXG4gIC8vIFJlbW92ZSBrZXlzIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICBPYmplY3Qua2V5cyhsb2FkQ29udGV4dCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiUDpcXFxcU3RhdC5pb25cXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiUDpcXFxcU3RhdC5pb25cXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIlA6XFxcXFN0YXQuaW9uXFxcXGFwcFxcXFxyb3V0ZXNcXFxcc29jaWFsc1xcXFxkaXNjb3JkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJQOlxcXFxTdGF0LmlvblxcXFxhcHBcXFxccm91dGVzXFxcXHBlbmRpbmdcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIlA6XFxcXFN0YXQuaW9uXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZmFxXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJQOlxcXFxTdGF0LmlvblxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvc29jaWFscy9kaXNjb3JkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zb2NpYWxzL2Rpc2NvcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic29jaWFscy9kaXNjb3JkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9wZW5kaW5nL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wZW5kaW5nL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBlbmRpbmdcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9mYXEvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2ZhcS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJmYXFcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgTGlua3NGdW5jdGlvblxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgRmF2SWNvbiBmcm9tIFwiLi9hc3NldHMvTWFzayBncm91cC5wbmdcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJTdGF0aW9uIC0gdGhlIHBsYWNlIHlvdSBuZWVkIGZvciBsaW5rcy5cIixcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxufSk7XG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcImljb25cIixcbiAgICAgIGhyZWY6IEZhdkljb24sXG4gICAgICB0eXBlOiBcImltYWdlL3BuZ1wiXG4gICAgfVxuICBdXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2xcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24uaG9zdCwgaG9zdG5hbWUpO1xuICAgIGlmIChob3N0bmFtZSAhPT0gXCJodHRwczpcIikge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYGh0dHBzOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH1gKTtcbiAgICB9XG4gIH0pXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBHZW5lcmFsQ1NTIGZyb20gXCIuLi8uLi9zdHlsZXMvZ2VuZXJhbC5jc3NcIlxyXG5pbXBvcnQgUm9vdCBmcm9tIFwiLi4vLi4vc3R5bGVzL19hYnN0cmFjdC9yb290LmNzc1wiXHJcbmltcG9ydCBQZW5kaW5nQ1NTIGZyb20gXCIuLi8uLi9zdHlsZXMvX3BhZ2VzL3BlbmRpbmcuY3NzXCJcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzY29yZCgpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIEFPUy5pbml0KClcclxuICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cHM6Ly9kaXNjb3JkLmdnL2VHS211emVrbVpcIik7XHJcbiAgIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIiBkYXRhLWFvcz1cImZhZGUtdXBcIiA+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPkNvbWluZyBTb29uPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxuICAvLyAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPlJlZGlyZWN0aW5nIHlvdS4uLjwvaDE+XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxyXG4gICAgICBocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL2JveGljb25zQDIuMS4yL2Nzcy9ib3hpY29ucy5taW4uY3NzXCIsXHJcbiAgICB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBHZW5lcmFsQ1NTIH0sXHJcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IFJvb3QgfSxcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogUGVuZGluZ0NTUyB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL2Fvc0AyLjMuMS9kaXN0L2Fvcy5jc3NcIiB9LFxyXG4gIF07XHJcbn0iLCAiaW1wb3J0IENvbWluZ1Nvb25DU1MgZnJvbSBcIi4uLy4uL3N0eWxlcy9fcGFnZXMvcGVuZGluZy5jc3NcIlxyXG5pbXBvcnQgUm9vdCBmcm9tIFwiLi4vLi4vc3R5bGVzL19hYnN0cmFjdC9yb290LmNzc1wiXHJcbmltcG9ydCBCdXR0b25zIGZyb20gXCIuLi8uLi9zdHlsZXMvX2Fic3RyYWN0L2J1dHRvbnMuY3NzXCJcclxuXHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlbmRpbmcoKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBBT1MuaW5pdCgpOyB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj5UaGlzIGlzIGNvbWluZyBzb29uLi4uPC9oMT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnRuIHByaW1hcnlcIj5SZXR1cm4gSG9tZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IFJvb3QgfSxcclxuICAgICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBCdXR0b25zIH0sXHJcbiAgICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogXCJodHRwczovL3VucGtnLmNvbS9hb3NAMi4zLjEvZGlzdC9hb3MuY3NzXCIgfSxcclxuICAgICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBDb21pbmdTb29uQ1NTIH0sXHJcbiAgICBdO1xyXG59IiwgImltcG9ydCBSb290IGZyb20gXCIuLi8uLi9zdHlsZXMvX2Fic3RyYWN0L3Jvb3QuY3NzXCI7XHJcbmltcG9ydCBCdXR0b25zIGZyb20gXCIuLi8uLi9zdHlsZXMvX2Fic3RyYWN0L2J1dHRvbnMuY3NzXCI7XHJcbmltcG9ydCBGQVFDU1MgZnJvbSBcIi4uLy4uL3N0eWxlcy9fcGFnZXMvZmFxLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXEoKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEFPUy5pbml0KCk7XHJcbiAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uXCIpXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbj8uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICBjb25zdCBjaGlsZElkID0gcXVlc3Rpb24/LmNoaWxkTm9kZXNbaV0uaWQ7XHJcbiAgICAgICAgICBjb25zdCBxdWVzdGlvbk51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoaWxkSWQpO1xyXG4gICAgICAgICAgcXVlc3Rpb25OdW0/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBxdWVzdGlvbk51bS5jbGFzc0xpc3QudG9nZ2xlKFwiZnVsbHlFeHRlbmRlZFwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPkZBUTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbnNcIiBpZD1cInF1ZXN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uXCIgaWQ9XCJxdWVzdGlvbjFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbkhlYWRlclwiIGlkPVwicXVlc3Rpb25IZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDE+V2hlbiBXaWxsIHRoaXMgYmUgcmVsZWFzZWQ/PC9oMT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtZG93bi1hcnJvd1wiIGlkPVwiYXJyb3ctZG93bjFcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uQW53c2VyXCI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBBcyBmb3Igbm93IHdlIGRvIG5vdCBoYXZlIGEgZGVzaW5hdGVkIGRhdGUgZm9yIHdoZW4gd2UgcGxhbiBvblxyXG4gICAgICAgICAgICAgICAgcmVsZWFzaW5nIDxzcGFuIGNsYXNzTmFtZT1cImJyYW5kXCI+c3RhdC5pb248L3NwYW4+LlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uXCIgaWQ9XCJxdWVzdGlvbjJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbkhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIFdoYXQgZXhhY2x0eSBpcyA8c3BhbiBjbGFzc05hbWU9XCJicmFuZFwiPnN0YXQuaW9uPC9zcGFuPj9cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4cy1kb3duLWFycm93XCIgaWQ9XCJhcnJvdy1kb3duMlwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25BbndzZXJcIj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyYW5kXCI+c3RhdC5pb248L3NwYW4+IGlzIGEgcGxhY2UgZm9yIHlvdSB0b1xyXG4gICAgICAgICAgICAgICAgcHV0IGFsbCBvZiB5b3VyIGxpbmtzLCB3aXRoIHRoZSBhY2Nlc3NpYmlsaXR5IHRvIHNlZXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyYW5kXCI+c3RhdDwvc3Bhbj5pc3RpY3Mgb24gZWFjaCBvZiB0aGVzZSBsaW5rc1xyXG4gICAgICAgICAgICAgICAgYXN3ZWxsIGFzIHByb2ZpbGUgdmlld3MgZXRjLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25cIiBpZD1cInF1ZXN0aW9uM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgSG93IGRvIGkgZ2FpbiBiZXRhIGFjY2Vzcz9cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4cy1kb3duLWFycm93XCIgaWQ9XCJhcnJvdy1kb3duMlwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25BbndzZXJcIj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgVG8gZ2FpbiBiZXRhIGFjY2VzcyB0byA8c3BhbiBjbGFzc05hbWU9XCJicmFuZFwiPnN0YXQuaW9uPC9zcGFuPiwgeW91IG11c3QgPGEgaHJlZj1cIi9zb2NpYWxzL2Rpc2NvcmRcIiBjbGFzc05hbWU9XCJsaW5rXCI+am9pbiB0aGUgZGlzY29yZDwvYT4uIE9uY2UgdGhlcmUgeW91IGNhbiBhcHBseSwgYW5kIHBvc3NpYmx5IGdldCBhY2NlcHRlZC4gT3RoZXIgdGhhbiB0aGF0IHlvdSBjYW4gd2luIGdpdmVhd2F5cyB0byBnYWluIGFjY2Vzcy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IFJvb3QgfSxcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogQnV0dG9ucyB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBGQVFDU1MgfSxcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogXCJodHRwczovL3VucGtnLmNvbS9hb3NAMi4zLjEvZGlzdC9hb3MuY3NzXCIgfSxcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogXCJodHRwczovL3VucGtnLmNvbS9ib3hpY29uc0AyLjEuMi9jc3MvYm94aWNvbnMubWluLmNzc1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcbiIsICJpbXBvcnQgYnV0dG9ucyBmcm9tIFwiLi4vc3R5bGVzL19hYnN0cmFjdC9idXR0b25zLmNzc1wiO1xuaW1wb3J0IHJvb3QgZnJvbSBcIi4uL3N0eWxlcy9fYWJzdHJhY3Qvcm9vdC5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIn4vY29tcG9uZW50cy9VSS9OYXZiYXJcIjtcbmltcG9ydCBuYXZiYXJDU1MgZnJvbSBcIi4uL3N0eWxlcy9fY29tcG9uZW50cy9uYXZiYXIuY3NzXCI7XG5pbXBvcnQgR2VuZXJhbENTUyBmcm9tIFwiLi4vc3R5bGVzL2dlbmVyYWwuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlckhvbWUgZnJvbSBcIn4vY29tcG9uZW50cy9VSS9Ib21lLkhlYWRlclwiO1xuaW1wb3J0IEhlYWRlckNTUyBmcm9tIFwiLi4vc3R5bGVzL19jb21wb25lbnRzL2hvbWUuaGVhZGVyLmNzc1wiXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgXG4gICAgQU9TLmluaXQoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcbiAgICAgIG5hdmJhcj8uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdmJhclNjcm9sbFwiLCB3aW5kb3cuc2Nyb2xsWSA+IDEwKTtcbiAgICB9KTtcbiAgICBjb25zdCBNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJCdXJnZXJCdXR0b25cIik7XG4gICAgY29uc3QgTGluZU9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTGluZU9uZUJ1cmdlclwiKTtcbiAgICBjb25zdCBMaW5lVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMaW5lVHdvQnVyZ2VyXCIpO1xuICAgIGNvbnN0IE5hdkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZJdGVtc1wiKTtcbiAgICBNZW51Py5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIExpbmVPbmU/LmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXJBY3RpdmVUT1BcIik7XG4gICAgICBMaW5lVHdvPy5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyQWN0aXZlQk9UVE9NXCIpO1xuICAgICAgTmF2SXRlbXM/LmNsYXNzTGlzdC50b2dnbGUoXCJuYXZpdGVtc0FjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIvPlxuICAgICAgPEhlYWRlckhvbWUgZGF0YS1hb3M9XCJmYWRlLXVwXCIvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vYm94aWNvbnNAMi4xLjIvY3NzL2JveGljb25zLm1pbi5jc3NcIixcbiAgICB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogR2VuZXJhbENTUyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogbmF2YmFyQ1NTIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBidXR0b25zIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiByb290IH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBIZWFkZXJDU1MgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vYW9zQDIuMy4xL2Rpc3QvYW9zLmNzc1wiIH0sXG4gIF07XG59XG4iLCAiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXJnZXJcIiBpZD1cIkJ1cmdlckJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1cmdlckxpbmVcIiBpZD1cIkxpbmVPbmVCdXJnZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXJnZXJMaW5lXCIgaWQ9XCJMaW5lVHdvQnVyZ2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aXRlbXNcIiBpZD1cIm5hdkl0ZW1zXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdml0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9mYXFcIj5GQVE8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdml0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9wZW5kaW5nXCI+QmV0YSBUZXN0ZXJzPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcclxuICByZXR1cm4gW107XHJcbn1cclxuIiwgImltcG9ydCBBbmFseXRpY0ltZyBmcm9tIFwiLi4vLi4vYXNzZXRzL0lsbGlzdHJhdGlvbi5wbmdcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJIb21lKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7QU9TLmluaXQoKX0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hvbGVcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgRWFzeSBUbyBVc2UgTGlua3MgUGFnZSx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+SW5jcmVkaWJseTwvc3Bhbj4gRWZmaWNpZW50XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICAgIFN0b3JlIGFsbCB5b3VyIGxpbmtzIGluIG9uZSBjdXN0b21hYmxlIGFuZCBhY2Nlc3NhYmxlIHBsYWNlLCBlYXNseVxyXG4gICAgICAgICAgICAgIHNlZSBzdGF0aXN0aWNzIG9uIGV2ZXJ5dGhpbmcuXHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvc29jaWFscy9kaXNjb3JkXCIgY2xhc3NOYW1lPVwiYnRuIHByaW1hcnlcIj5cclxuICAgICAgICAgICAgICBKb2luIFRoZSBEaXNjb3JkIVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17QW5hbHl0aWNJbWd9IGFsdD1cIkFuYWx5dGljIElsbGlzdHJhdGlvblwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYTQyYzUxYmQnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVNHVlJKT0lGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XVVA0WktIRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1SR1JNQUFKNy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2ZhcS9pbmRleCc6eydpZCc6J3JvdXRlcy9mYXEvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZmFxJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9mYXEvaW5kZXgtM1BGWkdUM0IuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTU2UVJJUU9MLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVDRLMzVTN1cuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVBLUEdTSERJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EVDRQTkdWWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTU2UVJJUU9MLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVDRLMzVTN1cuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BlbmRpbmcvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcGVuZGluZy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwZW5kaW5nJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wZW5kaW5nL2luZGV4LVc2U1hBV0pOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1OTlczVFBXRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTU2UVJJUU9MLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVDRLMzVTN1cuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NvY2lhbHMvZGlzY29yZCc6eydpZCc6J3JvdXRlcy9zb2NpYWxzL2Rpc2NvcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc29jaWFscy9kaXNjb3JkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NvY2lhbHMvZGlzY29yZC1FNDdRRFVGMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTk5XM1RQV0YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1EVDRQTkdWWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVQ0SzM1UzdXLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtQTQyQzUxQkQuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtB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
