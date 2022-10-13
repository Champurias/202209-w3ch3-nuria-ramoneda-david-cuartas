var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("Component/types", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Component/Component", [], function (exports_2, context_2) {
    "use strict";
    var Component;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            Component = /** @class */ (function () {
                function Component(parentElement, className, tag) {
                    if (className === void 0) { className = ""; }
                    if (tag === void 0) { tag = "div"; }
                    this.parentElement = parentElement;
                    this.domElement = document.createElement(tag);
                    this.domElement.className = className;
                }
                Component.prototype.render = function () {
                    this.parentElement.appendChild(this.domElement);
                };
                return Component;
            }());
            exports_2("default", Component);
        }
    };
});
System.register("Header/Header", ["Component/Component"], function (exports_3, context_3) {
    "use strict";
    var Component_js_1, Header;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (Component_js_1_1) {
                Component_js_1 = Component_js_1_1;
            }
        ],
        execute: function () {
            Header = /** @class */ (function (_super) {
                __extends(Header, _super);
                function Header(parentElement) {
                    return _super.call(this, parentElement, "main-header", "header") || this;
                }
                Header.prototype.render = function () {
                    _super.prototype.render.call(this);
                    this.domElement.innerHTML = "\n    <h1 class=\"main-title\">My Series</h1>";
                };
                return Header;
            }(Component_js_1["default"]));
            exports_3("default", Header);
        }
    };
});
System.register("Header/header.test", ["Header/Header"], function (exports_4, context_4) {
    "use strict";
    var Header_1;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (Header_1_1) {
                Header_1 = Header_1_1;
            }
        ],
        execute: function () {
            describe("Given a new instance of Header", function () {
                describe("When its rendered", function () {
                    test("Then it will render the title 'My Series'", function () {
                        var parentElement = document.querySelector("header");
                        var expectedResult = "<h1 class=\"main-title\">My Series</h1>";
                        var header = new Header_1["default"](parentElement);
                        expect(header.domElement.innerHTML).toBe(expectedResult);
                    });
                });
            });
        }
    };
});
