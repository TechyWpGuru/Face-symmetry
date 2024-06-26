import {
  __commonJS
} from "./chunk-5WWUZCGV.js";

// browser-external:child_process
var require_child_process = __commonJS({
  "browser-external:child_process"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "child_process" has been externalized for browser compatibility. Cannot access "child_process.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject = function isPlainObject2(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module.exports = function extend() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject(src) ? src : {};
                }
                setProperty(target, { name, newValue: extend(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// browser-external:https
var require_https = __commonJS({
  "browser-external:https"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "https" has been externalized for browser compatibility. Cannot access "https.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/node-fetch/browser.js
var require_browser = __commonJS({
  "node_modules/node-fetch/browser.js"(exports, module) {
    "use strict";
    var getGlobal = function() {
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      throw new Error("unable to locate global object");
    };
    var globalObject = getGlobal();
    module.exports = exports = globalObject.fetch;
    if (globalObject.fetch) {
      exports.default = globalObject.fetch.bind(globalObject);
    }
    exports.Headers = globalObject.Headers;
    exports.Request = globalObject.Request;
    exports.Response = globalObject.Response;
  }
});

// browser-external:querystring
var require_querystring = __commonJS({
  "browser-external:querystring"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "querystring" has been externalized for browser compatibility. Cannot access "querystring.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/is-stream/index.js
var require_is_stream = __commonJS({
  "node_modules/is-stream/index.js"(exports, module) {
    "use strict";
    var isStream = (stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    isStream.writable = (stream) => isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    isStream.readable = (stream) => isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    isStream.duplex = (stream) => isStream.writable(stream) && isStream.readable(stream);
    isStream.transform = (stream) => isStream.duplex(stream) && typeof stream._transform === "function";
    module.exports = isStream;
  }
});

// browser-external:url
var require_url = __commonJS({
  "browser-external:url"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "url" has been externalized for browser compatibility. Cannot access "url.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/gaxios/package.json
var require_package = __commonJS({
  "node_modules/gaxios/package.json"(exports, module) {
    module.exports = {
      name: "gaxios",
      version: "6.6.0",
      description: "A simple common HTTP client specifically for Google APIs and services.",
      main: "build/src/index.js",
      types: "build/src/index.d.ts",
      files: [
        "build/src"
      ],
      scripts: {
        lint: "gts check",
        test: "c8 mocha build/test",
        "presystem-test": "npm run compile",
        "system-test": "mocha build/system-test --timeout 80000",
        compile: "tsc -p .",
        fix: "gts fix",
        prepare: "npm run compile",
        pretest: "npm run compile",
        webpack: "webpack",
        "prebrowser-test": "npm run compile",
        "browser-test": "node build/browser-test/browser-test-runner.js",
        docs: "compodoc src/",
        "docs-test": "linkinator docs",
        "predocs-test": "npm run docs",
        "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
        prelint: "cd samples; npm link ../; npm install",
        clean: "gts clean",
        precompile: "gts clean"
      },
      repository: "googleapis/gaxios",
      keywords: [
        "google"
      ],
      engines: {
        node: ">=14"
      },
      author: "Google, LLC",
      license: "Apache-2.0",
      devDependencies: {
        "@babel/plugin-proposal-private-methods": "^7.18.6",
        "@compodoc/compodoc": "1.1.21",
        "@types/cors": "^2.8.6",
        "@types/express": "^4.16.1",
        "@types/extend": "^3.0.1",
        "@types/mocha": "^9.0.0",
        "@types/multiparty": "0.0.36",
        "@types/mv": "^2.1.0",
        "@types/ncp": "^2.0.1",
        "@types/node": "^20.0.0",
        "@types/node-fetch": "^2.5.7",
        "@types/sinon": "^17.0.0",
        "@types/tmp": "0.2.6",
        "@types/uuid": "^9.0.0",
        "abort-controller": "^3.0.0",
        assert: "^2.0.0",
        browserify: "^17.0.0",
        c8: "^8.0.0",
        cors: "^2.8.5",
        execa: "^5.0.0",
        express: "^4.16.4",
        "form-data": "^4.0.0",
        gts: "^5.0.0",
        "is-docker": "^2.0.0",
        karma: "^6.0.0",
        "karma-chrome-launcher": "^3.0.0",
        "karma-coverage": "^2.0.0",
        "karma-firefox-launcher": "^2.0.0",
        "karma-mocha": "^2.0.0",
        "karma-remap-coverage": "^0.1.5",
        "karma-sourcemap-loader": "^0.4.0",
        "karma-webpack": "5.0.0",
        linkinator: "^4.0.0",
        mocha: "^8.0.0",
        multiparty: "^4.2.1",
        mv: "^2.1.1",
        ncp: "^2.0.0",
        nock: "^13.0.0",
        "null-loader": "^4.0.0",
        puppeteer: "^21.0.0",
        sinon: "^17.0.0",
        "stream-browserify": "^3.0.0",
        tmp: "0.2.3",
        "ts-loader": "^8.0.0",
        typescript: "^5.1.6",
        webpack: "^5.35.0",
        "webpack-cli": "^4.0.0"
      },
      dependencies: {
        extend: "^3.0.2",
        "https-proxy-agent": "^7.0.1",
        "is-stream": "^2.0.0",
        "node-fetch": "^2.6.9",
        uuid: "^9.0.1"
      }
    };
  }
});

// node_modules/gaxios/build/src/util.js
var require_util = __commonJS({
  "node_modules/gaxios/build/src/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pkg = void 0;
    exports.pkg = require_package();
  }
});

// node_modules/gaxios/build/src/common.js
var require_common = __commonJS({
  "node_modules/gaxios/build/src/common.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultErrorRedactor = exports.GaxiosError = exports.GAXIOS_ERROR_SYMBOL = void 0;
    var url_1 = require_url();
    var util_1 = require_util();
    var extend_1 = __importDefault(require_extend());
    exports.GAXIOS_ERROR_SYMBOL = Symbol.for(`${util_1.pkg.name}-gaxios-error`);
    var GaxiosError = class _GaxiosError extends Error {
      /**
       * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
       *
       * @see {@link GAXIOS_ERROR_SYMBOL}
       * @see {@link GaxiosError[GAXIOS_ERROR_SYMBOL]}
       */
      static [(_a = exports.GAXIOS_ERROR_SYMBOL, Symbol.hasInstance)](instance) {
        if (instance && typeof instance === "object" && exports.GAXIOS_ERROR_SYMBOL in instance && instance[exports.GAXIOS_ERROR_SYMBOL] === util_1.pkg.version) {
          return true;
        }
        return Function.prototype[Symbol.hasInstance].call(_GaxiosError, instance);
      }
      constructor(message, config, response, error) {
        var _b;
        super(message);
        this.config = config;
        this.response = response;
        this.error = error;
        this[_a] = util_1.pkg.version;
        this.config = (0, extend_1.default)(true, {}, config);
        if (this.response) {
          this.response.config = (0, extend_1.default)(true, {}, this.response.config);
        }
        if (this.response) {
          try {
            this.response.data = translateData(this.config.responseType, (_b = this.response) === null || _b === void 0 ? void 0 : _b.data);
          } catch (_c) {
          }
          this.status = this.response.status;
        }
        if (error && "code" in error && error.code) {
          this.code = error.code;
        }
        if (config.errorRedactor) {
          config.errorRedactor({
            config: this.config,
            response: this.response
          });
        }
      }
    };
    exports.GaxiosError = GaxiosError;
    function translateData(responseType, data) {
      switch (responseType) {
        case "stream":
          return data;
        case "json":
          return JSON.parse(JSON.stringify(data));
        case "arraybuffer":
          return JSON.parse(Buffer.from(data).toString("utf8"));
        case "blob":
          return JSON.parse(data.text());
        default:
          return data;
      }
    }
    function defaultErrorRedactor(data) {
      const REDACT = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
      function redactHeaders(headers) {
        if (!headers)
          return;
        for (const key of Object.keys(headers)) {
          if (/^authentication$/i.test(key)) {
            headers[key] = REDACT;
          }
          if (/^authorization$/i.test(key)) {
            headers[key] = REDACT;
          }
          if (/secret/i.test(key)) {
            headers[key] = REDACT;
          }
        }
      }
      function redactString(obj, key) {
        if (typeof obj === "object" && obj !== null && typeof obj[key] === "string") {
          const text = obj[key];
          if (/grant_type=/i.test(text) || /assertion=/i.test(text) || /secret/i.test(text)) {
            obj[key] = REDACT;
          }
        }
      }
      function redactObject(obj) {
        if (typeof obj === "object" && obj !== null) {
          if ("grant_type" in obj) {
            obj["grant_type"] = REDACT;
          }
          if ("assertion" in obj) {
            obj["assertion"] = REDACT;
          }
          if ("client_secret" in obj) {
            obj["client_secret"] = REDACT;
          }
        }
      }
      if (data.config) {
        redactHeaders(data.config.headers);
        redactString(data.config, "data");
        redactObject(data.config.data);
        redactString(data.config, "body");
        redactObject(data.config.body);
        try {
          const url = new url_1.URL("", data.config.url);
          if (url.searchParams.has("token")) {
            url.searchParams.set("token", REDACT);
          }
          if (url.searchParams.has("client_secret")) {
            url.searchParams.set("client_secret", REDACT);
          }
          data.config.url = url.toString();
        } catch (_b) {
        }
      }
      if (data.response) {
        defaultErrorRedactor({ config: data.response.config });
        redactHeaders(data.response.headers);
        redactString(data.response, "data");
        redactObject(data.response.data);
      }
      return data;
    }
    exports.defaultErrorRedactor = defaultErrorRedactor;
  }
});

// node_modules/gaxios/build/src/retry.js
var require_retry = __commonJS({
  "node_modules/gaxios/build/src/retry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRetryConfig = void 0;
    async function getRetryConfig(err) {
      var _a;
      let config = getConfig(err);
      if (!err || !err.config || !config && !err.config.retry) {
        return { shouldRetry: false };
      }
      config = config || {};
      config.currentRetryAttempt = config.currentRetryAttempt || 0;
      config.retry = config.retry === void 0 || config.retry === null ? 3 : config.retry;
      config.httpMethodsToRetry = config.httpMethodsToRetry || [
        "GET",
        "HEAD",
        "PUT",
        "OPTIONS",
        "DELETE"
      ];
      config.noResponseRetries = config.noResponseRetries === void 0 || config.noResponseRetries === null ? 2 : config.noResponseRetries;
      const retryRanges = [
        // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        // 1xx - Retry (Informational, request still processing)
        // 2xx - Do not retry (Success)
        // 3xx - Do not retry (Redirect)
        // 4xx - Do not retry (Client errors)
        // 408 - Retry ("Request Timeout")
        // 429 - Retry ("Too Many Requests")
        // 5xx - Retry (Server errors)
        [100, 199],
        [408, 408],
        [429, 429],
        [500, 599]
      ];
      config.statusCodesToRetry = config.statusCodesToRetry || retryRanges;
      err.config.retryConfig = config;
      const shouldRetryFn = config.shouldRetry || shouldRetryRequest;
      if (!await shouldRetryFn(err)) {
        return { shouldRetry: false, config: err.config };
      }
      const retryDelay = config.currentRetryAttempt ? 0 : (_a = config.retryDelay) !== null && _a !== void 0 ? _a : 100;
      const delay = retryDelay + (Math.pow(2, config.currentRetryAttempt) - 1) / 2 * 1e3;
      err.config.retryConfig.currentRetryAttempt += 1;
      const backoff = config.retryBackoff ? config.retryBackoff(err, delay) : new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
      if (config.onRetryAttempt) {
        config.onRetryAttempt(err);
      }
      await backoff;
      return { shouldRetry: true, config: err.config };
    }
    exports.getRetryConfig = getRetryConfig;
    function shouldRetryRequest(err) {
      var _a;
      const config = getConfig(err);
      if (err.name === "AbortError" || ((_a = err.error) === null || _a === void 0 ? void 0 : _a.name) === "AbortError") {
        return false;
      }
      if (!config || config.retry === 0) {
        return false;
      }
      if (!err.response && (config.currentRetryAttempt || 0) >= config.noResponseRetries) {
        return false;
      }
      if (!err.config.method || config.httpMethodsToRetry.indexOf(err.config.method.toUpperCase()) < 0) {
        return false;
      }
      if (err.response && err.response.status) {
        let isInRange = false;
        for (const [min, max] of config.statusCodesToRetry) {
          const status = err.response.status;
          if (status >= min && status <= max) {
            isInRange = true;
            break;
          }
        }
        if (!isInRange) {
          return false;
        }
      }
      config.currentRetryAttempt = config.currentRetryAttempt || 0;
      if (config.currentRetryAttempt >= config.retry) {
        return false;
      }
      return true;
    }
    function getConfig(err) {
      if (err && err.config && err.config.retryConfig) {
        return err.config.retryConfig;
      }
      return;
    }
  }
});

// browser-external:stream
var require_stream = __commonJS({
  "browser-external:stream"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "stream" has been externalized for browser compatibility. Cannot access "stream.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/uuid/dist/commonjs-browser/rng.js
var require_rng = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/rng.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rng;
    var getRandomValues;
    var rnds8 = new Uint8Array(16);
    function rng() {
      if (!getRandomValues) {
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return getRandomValues(rnds8);
    }
  }
});

// node_modules/uuid/dist/commonjs-browser/regex.js
var require_regex = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/validate.js
var require_validate = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regex = _interopRequireDefault(require_regex());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function validate(uuid) {
      return typeof uuid === "string" && _regex.default.test(uuid);
    }
    var _default = validate;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/stringify.js
var require_stringify = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/stringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    exports.unsafeStringify = unsafeStringify;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
    function unsafeStringify(arr, offset = 0) {
      return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
    }
    function stringify(arr, offset = 0) {
      const uuid = unsafeStringify(arr, offset);
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return uuid;
    }
    var _default = stringify;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v1.js
var require_v1 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = require_stringify();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v1(options, buf, offset) {
      let i = buf && offset || 0;
      const b = buf || new Array(16);
      options = options || {};
      let node = options.node || _nodeId;
      let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || _rng.default)();
        if (node == null) {
          node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
      let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      const tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (let n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf || (0, _stringify.unsafeStringify)(b);
    }
    var _default = v1;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/parse.js
var require_parse = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function parse(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      let v;
      const arr = new Uint8Array(16);
      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 255;
      arr[2] = v >>> 8 & 255;
      arr[3] = v & 255;
      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 255;
      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 255;
      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 255;
      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
      arr[11] = v / 4294967296 & 255;
      arr[12] = v >>> 24 & 255;
      arr[13] = v >>> 16 & 255;
      arr[14] = v >>> 8 & 255;
      arr[15] = v & 255;
      return arr;
    }
    var _default = parse;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v35.js
var require_v35 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v35.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.URL = exports.DNS = void 0;
    exports.default = v35;
    var _stringify = require_stringify();
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      const bytes = [];
      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }
    var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports.DNS = DNS;
    var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports.URL = URL2;
    function v35(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === "string") {
          value = stringToBytes(value);
        }
        if (typeof namespace === "string") {
          namespace = (0, _parse.default)(namespace);
        }
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(bytes);
      }
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = DNS;
      generateUUID.URL = URL2;
      return generateUUID;
    }
  }
});

// node_modules/uuid/dist/commonjs-browser/md5.js
var require_md5 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/md5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function md5(bytes) {
      if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = new Uint8Array(msg.length);
        for (let i = 0; i < msg.length; ++i) {
          bytes[i] = msg.charCodeAt(i);
        }
      }
      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    function md5ToHexEncodedArray(input) {
      const output = [];
      const length32 = input.length * 32;
      const hexTab = "0123456789abcdef";
      for (let i = 0; i < length32; i += 8) {
        const x = input[i >> 5] >>> i % 32 & 255;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
        output.push(hex);
      }
      return output;
    }
    function getOutputLength(inputLength8) {
      return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    }
    function wordsToMd5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[getOutputLength(len) - 1] = len;
      let a = 1732584193;
      let b = -271733879;
      let c = -1732584194;
      let d = 271733878;
      for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }
      return [a, b, c, d];
    }
    function bytesToWords(input) {
      if (input.length === 0) {
        return [];
      }
      const length8 = input.length * 8;
      const output = new Uint32Array(getOutputLength(length8));
      for (let i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 255) << i % 32;
      }
      return output;
    }
    function safeAdd(x, y) {
      const lsw = (x & 65535) + (y & 65535);
      const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }
    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    var _default = md5;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v3.js
var require_v3 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _md = _interopRequireDefault(require_md5());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v3 = (0, _v.default)("v3", 48, _md.default);
    var _default = v3;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/native.js
var require_native = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/native.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var _default = {
      randomUUID
    };
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v4.js
var require_v4 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _native = _interopRequireDefault(require_native());
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = require_stringify();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function v4(options, buf, offset) {
      if (_native.default.randomUUID && !buf && !options) {
        return _native.default.randomUUID();
      }
      options = options || {};
      const rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }
        return buf;
      }
      return (0, _stringify.unsafeStringify)(rnds);
    }
    var _default = v4;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/sha1.js
var require_sha1 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/sha1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;
        case 1:
          return x ^ y ^ z;
        case 2:
          return x & y ^ x & z ^ y & z;
        case 3:
          return x ^ y ^ z;
      }
    }
    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }
    function sha1(bytes) {
      const K = [1518500249, 1859775393, 2400959708, 3395469782];
      const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = [];
        for (let i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      } else if (!Array.isArray(bytes)) {
        bytes = Array.prototype.slice.call(bytes);
      }
      bytes.push(128);
      const l = bytes.length / 4 + 2;
      const N = Math.ceil(l / 16);
      const M = new Array(N);
      for (let i = 0; i < N; ++i) {
        const arr = new Uint32Array(16);
        for (let j = 0; j < 16; ++j) {
          arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        }
        M[i] = arr;
      }
      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
      for (let i = 0; i < N; ++i) {
        const W = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) {
          W[t] = M[i][t];
        }
        for (let t = 16; t < 80; ++t) {
          W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for (let t = 0; t < 80; ++t) {
          const s = Math.floor(t / 20);
          const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }
      return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
    }
    var _default = sha1;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v5.js
var require_v5 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _sha = _interopRequireDefault(require_sha1());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v5 = (0, _v.default)("v5", 80, _sha.default);
    var _default = v5;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/nil.js
var require_nil = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/nil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = "00000000-0000-0000-0000-000000000000";
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/version.js
var require_version = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function version(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      return parseInt(uuid.slice(14, 15), 16);
    }
    var _default = version;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/index.js
var require_commonjs_browser = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "NIL", {
      enumerable: true,
      get: function get() {
        return _nil.default;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function get() {
        return _parse.default;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return _stringify.default;
      }
    });
    Object.defineProperty(exports, "v1", {
      enumerable: true,
      get: function get() {
        return _v.default;
      }
    });
    Object.defineProperty(exports, "v3", {
      enumerable: true,
      get: function get() {
        return _v2.default;
      }
    });
    Object.defineProperty(exports, "v4", {
      enumerable: true,
      get: function get() {
        return _v3.default;
      }
    });
    Object.defineProperty(exports, "v5", {
      enumerable: true,
      get: function get() {
        return _v4.default;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function get() {
        return _validate.default;
      }
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function get() {
        return _version.default;
      }
    });
    var _v = _interopRequireDefault(require_v1());
    var _v2 = _interopRequireDefault(require_v3());
    var _v3 = _interopRequireDefault(require_v4());
    var _v4 = _interopRequireDefault(require_v5());
    var _nil = _interopRequireDefault(require_nil());
    var _version = _interopRequireDefault(require_version());
    var _validate = _interopRequireDefault(require_validate());
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/gaxios/build/src/interceptor.js
var require_interceptor = __commonJS({
  "node_modules/gaxios/build/src/interceptor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GaxiosInterceptorManager = void 0;
    var GaxiosInterceptorManager = class extends Set {
    };
    exports.GaxiosInterceptorManager = GaxiosInterceptorManager;
  }
});

// browser-external:net
var require_net = __commonJS({
  "browser-external:net"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "net" has been externalized for browser compatibility. Cannot access "net.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:tls
var require_tls = __commonJS({
  "browser-external:tls"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "tls" has been externalized for browser compatibility. Cannot access "tls.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:assert
var require_assert = __commonJS({
  "browser-external:assert"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "assert" has been externalized for browser compatibility. Cannot access "assert.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common2 = __commonJS({
  "node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser2 = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common2()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// browser-external:http
var require_http = __commonJS({
  "browser-external:http"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "http" has been externalized for browser compatibility. Cannot access "http.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/agent-base/dist/helpers.js
var require_helpers = __commonJS({
  "node_modules/agent-base/dist/helpers.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.req = exports.json = exports.toBuffer = void 0;
    var http = __importStar(require_http());
    var https = __importStar(require_https());
    async function toBuffer(stream) {
      let length = 0;
      const chunks = [];
      for await (const chunk of stream) {
        length += chunk.length;
        chunks.push(chunk);
      }
      return Buffer.concat(chunks, length);
    }
    exports.toBuffer = toBuffer;
    async function json(stream) {
      const buf = await toBuffer(stream);
      const str = buf.toString("utf8");
      try {
        return JSON.parse(str);
      } catch (_err) {
        const err = _err;
        err.message += ` (input: ${str})`;
        throw err;
      }
    }
    exports.json = json;
    function req(url, opts = {}) {
      const href = typeof url === "string" ? url : url.href;
      const req2 = (href.startsWith("https:") ? https : http).request(url, opts);
      const promise = new Promise((resolve, reject) => {
        req2.once("response", resolve).once("error", reject).end();
      });
      req2.then = promise.then.bind(promise);
      return req2;
    }
    exports.req = req;
  }
});

// node_modules/agent-base/dist/index.js
var require_dist = __commonJS({
  "node_modules/agent-base/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Agent = void 0;
    var net = __importStar(require_net());
    var http = __importStar(require_http());
    var https_1 = require_https();
    __exportStar(require_helpers(), exports);
    var INTERNAL = Symbol("AgentBaseInternalState");
    var Agent = class extends http.Agent {
      constructor(opts) {
        super(opts);
        this[INTERNAL] = {};
      }
      /**
       * Determine whether this is an `http` or `https` request.
       */
      isSecureEndpoint(options) {
        if (options) {
          if (typeof options.secureEndpoint === "boolean") {
            return options.secureEndpoint;
          }
          if (typeof options.protocol === "string") {
            return options.protocol === "https:";
          }
        }
        const { stack } = new Error();
        if (typeof stack !== "string")
          return false;
        return stack.split("\n").some((l) => l.indexOf("(https.js:") !== -1 || l.indexOf("node:https:") !== -1);
      }
      // In order to support async signatures in `connect()` and Node's native
      // connection pooling in `http.Agent`, the array of sockets for each origin
      // has to be updated synchronously. This is so the length of the array is
      // accurate when `addRequest()` is next called. We achieve this by creating a
      // fake socket and adding it to `sockets[origin]` and incrementing
      // `totalSocketCount`.
      incrementSockets(name) {
        if (this.maxSockets === Infinity && this.maxTotalSockets === Infinity) {
          return null;
        }
        if (!this.sockets[name]) {
          this.sockets[name] = [];
        }
        const fakeSocket = new net.Socket({ writable: false });
        this.sockets[name].push(fakeSocket);
        this.totalSocketCount++;
        return fakeSocket;
      }
      decrementSockets(name, socket) {
        if (!this.sockets[name] || socket === null) {
          return;
        }
        const sockets = this.sockets[name];
        const index = sockets.indexOf(socket);
        if (index !== -1) {
          sockets.splice(index, 1);
          this.totalSocketCount--;
          if (sockets.length === 0) {
            delete this.sockets[name];
          }
        }
      }
      // In order to properly update the socket pool, we need to call `getName()` on
      // the core `https.Agent` if it is a secureEndpoint.
      getName(options) {
        const secureEndpoint = typeof options.secureEndpoint === "boolean" ? options.secureEndpoint : this.isSecureEndpoint(options);
        if (secureEndpoint) {
          return https_1.Agent.prototype.getName.call(this, options);
        }
        return super.getName(options);
      }
      createSocket(req, options, cb) {
        const connectOpts = {
          ...options,
          secureEndpoint: this.isSecureEndpoint(options)
        };
        const name = this.getName(connectOpts);
        const fakeSocket = this.incrementSockets(name);
        Promise.resolve().then(() => this.connect(req, connectOpts)).then((socket) => {
          this.decrementSockets(name, fakeSocket);
          if (socket instanceof http.Agent) {
            return socket.addRequest(req, connectOpts);
          }
          this[INTERNAL].currentSocket = socket;
          super.createSocket(req, options, cb);
        }, (err) => {
          this.decrementSockets(name, fakeSocket);
          cb(err);
        });
      }
      createConnection() {
        const socket = this[INTERNAL].currentSocket;
        this[INTERNAL].currentSocket = void 0;
        if (!socket) {
          throw new Error("No socket was returned in the `connect()` function");
        }
        return socket;
      }
      get defaultPort() {
        return this[INTERNAL].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
      }
      set defaultPort(v) {
        if (this[INTERNAL]) {
          this[INTERNAL].defaultPort = v;
        }
      }
      get protocol() {
        return this[INTERNAL].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
      }
      set protocol(v) {
        if (this[INTERNAL]) {
          this[INTERNAL].protocol = v;
        }
      }
    };
    exports.Agent = Agent;
  }
});

// node_modules/https-proxy-agent/dist/parse-proxy-response.js
var require_parse_proxy_response = __commonJS({
  "node_modules/https-proxy-agent/dist/parse-proxy-response.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseProxyResponse = void 0;
    var debug_1 = __importDefault(require_browser2());
    var debug = (0, debug_1.default)("https-proxy-agent:parse-proxy-response");
    function parseProxyResponse(socket) {
      return new Promise((resolve, reject) => {
        let buffersLength = 0;
        const buffers = [];
        function read() {
          const b = socket.read();
          if (b)
            ondata(b);
          else
            socket.once("readable", read);
        }
        function cleanup() {
          socket.removeListener("end", onend);
          socket.removeListener("error", onerror);
          socket.removeListener("readable", read);
        }
        function onend() {
          cleanup();
          debug("onend");
          reject(new Error("Proxy connection ended before receiving CONNECT response"));
        }
        function onerror(err) {
          cleanup();
          debug("onerror %o", err);
          reject(err);
        }
        function ondata(b) {
          buffers.push(b);
          buffersLength += b.length;
          const buffered = Buffer.concat(buffers, buffersLength);
          const endOfHeaders = buffered.indexOf("\r\n\r\n");
          if (endOfHeaders === -1) {
            debug("have not received end of HTTP headers yet...");
            read();
            return;
          }
          const headerParts = buffered.slice(0, endOfHeaders).toString("ascii").split("\r\n");
          const firstLine = headerParts.shift();
          if (!firstLine) {
            socket.destroy();
            return reject(new Error("No header received from proxy CONNECT response"));
          }
          const firstLineParts = firstLine.split(" ");
          const statusCode = +firstLineParts[1];
          const statusText = firstLineParts.slice(2).join(" ");
          const headers = {};
          for (const header of headerParts) {
            if (!header)
              continue;
            const firstColon = header.indexOf(":");
            if (firstColon === -1) {
              socket.destroy();
              return reject(new Error(`Invalid header from proxy CONNECT response: "${header}"`));
            }
            const key = header.slice(0, firstColon).toLowerCase();
            const value = header.slice(firstColon + 1).trimStart();
            const current = headers[key];
            if (typeof current === "string") {
              headers[key] = [current, value];
            } else if (Array.isArray(current)) {
              current.push(value);
            } else {
              headers[key] = value;
            }
          }
          debug("got proxy server response: %o %o", firstLine, headers);
          cleanup();
          resolve({
            connect: {
              statusCode,
              statusText,
              headers
            },
            buffered
          });
        }
        socket.on("error", onerror);
        socket.on("end", onend);
        read();
      });
    }
    exports.parseProxyResponse = parseProxyResponse;
  }
});

// node_modules/https-proxy-agent/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/https-proxy-agent/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpsProxyAgent = void 0;
    var net = __importStar(require_net());
    var tls = __importStar(require_tls());
    var assert_1 = __importDefault(require_assert());
    var debug_1 = __importDefault(require_browser2());
    var agent_base_1 = require_dist();
    var url_1 = require_url();
    var parse_proxy_response_1 = require_parse_proxy_response();
    var debug = (0, debug_1.default)("https-proxy-agent");
    var HttpsProxyAgent = class extends agent_base_1.Agent {
      constructor(proxy, opts) {
        super(opts);
        this.options = { path: void 0 };
        this.proxy = typeof proxy === "string" ? new url_1.URL(proxy) : proxy;
        this.proxyHeaders = (opts == null ? void 0 : opts.headers) ?? {};
        debug("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
        const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, "");
        const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
        this.connectOpts = {
          // Attempt to negotiate http/1.1 for proxy servers that support http/2
          ALPNProtocols: ["http/1.1"],
          ...opts ? omit(opts, "headers") : null,
          host,
          port
        };
      }
      /**
       * Called when the node-core HTTP client library is creating a
       * new HTTP request.
       */
      async connect(req, opts) {
        const { proxy } = this;
        if (!opts.host) {
          throw new TypeError('No "host" provided');
        }
        let socket;
        if (proxy.protocol === "https:") {
          debug("Creating `tls.Socket`: %o", this.connectOpts);
          const servername = this.connectOpts.servername || this.connectOpts.host;
          socket = tls.connect({
            ...this.connectOpts,
            servername: servername && net.isIP(servername) ? void 0 : servername
          });
        } else {
          debug("Creating `net.Socket`: %o", this.connectOpts);
          socket = net.connect(this.connectOpts);
        }
        const headers = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : { ...this.proxyHeaders };
        const host = net.isIPv6(opts.host) ? `[${opts.host}]` : opts.host;
        let payload = `CONNECT ${host}:${opts.port} HTTP/1.1\r
`;
        if (proxy.username || proxy.password) {
          const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
          headers["Proxy-Authorization"] = `Basic ${Buffer.from(auth).toString("base64")}`;
        }
        headers.Host = `${host}:${opts.port}`;
        if (!headers["Proxy-Connection"]) {
          headers["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
        }
        for (const name of Object.keys(headers)) {
          payload += `${name}: ${headers[name]}\r
`;
        }
        const proxyResponsePromise = (0, parse_proxy_response_1.parseProxyResponse)(socket);
        socket.write(`${payload}\r
`);
        const { connect, buffered } = await proxyResponsePromise;
        req.emit("proxyConnect", connect);
        this.emit("proxyConnect", connect, req);
        if (connect.statusCode === 200) {
          req.once("socket", resume);
          if (opts.secureEndpoint) {
            debug("Upgrading socket connection to TLS");
            const servername = opts.servername || opts.host;
            return tls.connect({
              ...omit(opts, "host", "path", "port"),
              socket,
              servername: net.isIP(servername) ? void 0 : servername
            });
          }
          return socket;
        }
        socket.destroy();
        const fakeSocket = new net.Socket({ writable: false });
        fakeSocket.readable = true;
        req.once("socket", (s) => {
          debug("Replaying proxy buffer for failed request");
          (0, assert_1.default)(s.listenerCount("data") > 0);
          s.push(buffered);
          s.push(null);
        });
        return fakeSocket;
      }
    };
    HttpsProxyAgent.protocols = ["http", "https"];
    exports.HttpsProxyAgent = HttpsProxyAgent;
    function resume(socket) {
      socket.resume();
    }
    function omit(obj, ...keys) {
      const ret = {};
      let key;
      for (key in obj) {
        if (!keys.includes(key)) {
          ret[key] = obj[key];
        }
      }
      return ret;
    }
  }
});

// node_modules/gaxios/build/src/gaxios.js
var require_gaxios = __commonJS({
  "node_modules/gaxios/build/src/gaxios.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var _Gaxios_instances;
    var _a;
    var _Gaxios_urlMayUseProxy;
    var _Gaxios_applyRequestInterceptors;
    var _Gaxios_applyResponseInterceptors;
    var _Gaxios_prepareRequest;
    var _Gaxios_proxyAgent;
    var _Gaxios_getProxyAgent;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Gaxios = void 0;
    var extend_1 = __importDefault(require_extend());
    var https_1 = require_https();
    var node_fetch_1 = __importDefault(require_browser());
    var querystring_1 = __importDefault(require_querystring());
    var is_stream_1 = __importDefault(require_is_stream());
    var url_1 = require_url();
    var common_1 = require_common();
    var retry_1 = require_retry();
    var stream_1 = require_stream();
    var uuid_1 = require_commonjs_browser();
    var interceptor_1 = require_interceptor();
    var fetch2 = hasFetch() ? window.fetch : node_fetch_1.default;
    function hasWindow() {
      return typeof window !== "undefined" && !!window;
    }
    function hasFetch() {
      return hasWindow() && !!window.fetch;
    }
    function hasBuffer() {
      return typeof Buffer !== "undefined";
    }
    function hasHeader(options, header) {
      return !!getHeader(options, header);
    }
    function getHeader(options, header) {
      header = header.toLowerCase();
      for (const key of Object.keys((options === null || options === void 0 ? void 0 : options.headers) || {})) {
        if (header === key.toLowerCase()) {
          return options.headers[key];
        }
      }
      return void 0;
    }
    var Gaxios = class {
      /**
       * The Gaxios class is responsible for making HTTP requests.
       * @param defaults The default set of options to be used for this instance.
       */
      constructor(defaults) {
        _Gaxios_instances.add(this);
        this.agentCache = /* @__PURE__ */ new Map();
        this.defaults = defaults || {};
        this.interceptors = {
          request: new interceptor_1.GaxiosInterceptorManager(),
          response: new interceptor_1.GaxiosInterceptorManager()
        };
      }
      /**
       * Perform an HTTP request with the given options.
       * @param opts Set of HTTP options that will be used for this HTTP request.
       */
      async request(opts = {}) {
        opts = await __classPrivateFieldGet(this, _Gaxios_instances, "m", _Gaxios_prepareRequest).call(this, opts);
        opts = await __classPrivateFieldGet(this, _Gaxios_instances, "m", _Gaxios_applyRequestInterceptors).call(this, opts);
        return __classPrivateFieldGet(this, _Gaxios_instances, "m", _Gaxios_applyResponseInterceptors).call(this, this._request(opts));
      }
      async _defaultAdapter(opts) {
        const fetchImpl = opts.fetchImplementation || fetch2;
        const res = await fetchImpl(opts.url, opts);
        const data = await this.getResponseData(opts, res);
        return this.translateResponse(opts, res, data);
      }
      /**
       * Internal, retryable version of the `request` method.
       * @param opts Set of HTTP options that will be used for this HTTP request.
       */
      async _request(opts = {}) {
        var _b;
        try {
          let translatedResponse;
          if (opts.adapter) {
            translatedResponse = await opts.adapter(opts, this._defaultAdapter.bind(this));
          } else {
            translatedResponse = await this._defaultAdapter(opts);
          }
          if (!opts.validateStatus(translatedResponse.status)) {
            if (opts.responseType === "stream") {
              let response = "";
              await new Promise((resolve) => {
                (translatedResponse === null || translatedResponse === void 0 ? void 0 : translatedResponse.data).on("data", (chunk) => {
                  response += chunk;
                });
                (translatedResponse === null || translatedResponse === void 0 ? void 0 : translatedResponse.data).on("end", resolve);
              });
              translatedResponse.data = response;
            }
            throw new common_1.GaxiosError(`Request failed with status code ${translatedResponse.status}`, opts, translatedResponse);
          }
          return translatedResponse;
        } catch (e) {
          const err = e instanceof common_1.GaxiosError ? e : new common_1.GaxiosError(e.message, opts, void 0, e);
          const { shouldRetry, config } = await (0, retry_1.getRetryConfig)(err);
          if (shouldRetry && config) {
            err.config.retryConfig.currentRetryAttempt = config.retryConfig.currentRetryAttempt;
            opts.retryConfig = (_b = err.config) === null || _b === void 0 ? void 0 : _b.retryConfig;
            return this._request(opts);
          }
          throw err;
        }
      }
      async getResponseData(opts, res) {
        switch (opts.responseType) {
          case "stream":
            return res.body;
          case "json": {
            let data = await res.text();
            try {
              data = JSON.parse(data);
            } catch (_b) {
            }
            return data;
          }
          case "arraybuffer":
            return res.arrayBuffer();
          case "blob":
            return res.blob();
          case "text":
            return res.text();
          default:
            return this.getResponseDataFromContentType(res);
        }
      }
      /**
       * By default, throw for any non-2xx status code
       * @param status status code from the HTTP response
       */
      validateStatus(status) {
        return status >= 200 && status < 300;
      }
      /**
       * Encode a set of key/value pars into a querystring format (?foo=bar&baz=boo)
       * @param params key value pars to encode
       */
      paramsSerializer(params) {
        return querystring_1.default.stringify(params);
      }
      translateResponse(opts, res, data) {
        const headers = {};
        res.headers.forEach((value, key) => {
          headers[key] = value;
        });
        return {
          config: opts,
          data,
          headers,
          status: res.status,
          statusText: res.statusText,
          // XMLHttpRequestLike
          request: {
            responseURL: res.url
          }
        };
      }
      /**
       * Attempts to parse a response by looking at the Content-Type header.
       * @param {FetchResponse} response the HTTP response.
       * @returns {Promise<any>} a promise that resolves to the response data.
       */
      async getResponseDataFromContentType(response) {
        let contentType = response.headers.get("Content-Type");
        if (contentType === null) {
          return response.text();
        }
        contentType = contentType.toLowerCase();
        if (contentType.includes("application/json")) {
          let data = await response.text();
          try {
            data = JSON.parse(data);
          } catch (_b) {
          }
          return data;
        } else if (contentType.match(/^text\//)) {
          return response.text();
        } else {
          return response.blob();
        }
      }
      /**
       * Creates an async generator that yields the pieces of a multipart/related request body.
       * This implementation follows the spec: https://www.ietf.org/rfc/rfc2387.txt. However, recursive
       * multipart/related requests are not currently supported.
       *
       * @param {GaxioMultipartOptions[]} multipartOptions the pieces to turn into a multipart/related body.
       * @param {string} boundary the boundary string to be placed between each part.
       */
      async *getMultipartRequest(multipartOptions, boundary) {
        const finale = `--${boundary}--`;
        for (const currentPart of multipartOptions) {
          const partContentType = currentPart.headers["Content-Type"] || "application/octet-stream";
          const preamble = `--${boundary}\r
Content-Type: ${partContentType}\r
\r
`;
          yield preamble;
          if (typeof currentPart.content === "string") {
            yield currentPart.content;
          } else {
            yield* currentPart.content;
          }
          yield "\r\n";
        }
        yield finale;
      }
    };
    exports.Gaxios = Gaxios;
    _a = Gaxios, _Gaxios_instances = /* @__PURE__ */ new WeakSet(), _Gaxios_urlMayUseProxy = function _Gaxios_urlMayUseProxy2(url, noProxy = []) {
      var _b, _c;
      const candidate = new url_1.URL(url);
      const noProxyList = [...noProxy];
      const noProxyEnvList = ((_c = (_b = process.env.NO_PROXY) !== null && _b !== void 0 ? _b : process.env.no_proxy) === null || _c === void 0 ? void 0 : _c.split(",")) || [];
      for (const rule of noProxyEnvList) {
        noProxyList.push(rule.trim());
      }
      for (const rule of noProxyList) {
        if (rule instanceof RegExp) {
          if (rule.test(candidate.toString())) {
            return false;
          }
        } else if (rule instanceof url_1.URL) {
          if (rule.origin === candidate.origin) {
            return false;
          }
        } else if (rule.startsWith("*.") || rule.startsWith(".")) {
          const cleanedRule = rule.replace(/^\*\./, ".");
          if (candidate.hostname.endsWith(cleanedRule)) {
            return false;
          }
        } else if (rule === candidate.origin || rule === candidate.hostname || rule === candidate.href) {
          return false;
        }
      }
      return true;
    }, _Gaxios_applyRequestInterceptors = /**
     * Applies the request interceptors. The request interceptors are applied after the
     * call to prepareRequest is completed.
     *
     * @param {GaxiosOptions} options The current set of options.
     *
     * @returns {Promise<GaxiosOptions>} Promise that resolves to the set of options or response after interceptors are applied.
     */
    async function _Gaxios_applyRequestInterceptors2(options) {
      let promiseChain = Promise.resolve(options);
      for (const interceptor of this.interceptors.request.values()) {
        if (interceptor) {
          promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
        }
      }
      return promiseChain;
    }, _Gaxios_applyResponseInterceptors = /**
     * Applies the response interceptors. The response interceptors are applied after the
     * call to request is made.
     *
     * @param {GaxiosOptions} options The current set of options.
     *
     * @returns {Promise<GaxiosOptions>} Promise that resolves to the set of options or response after interceptors are applied.
     */
    async function _Gaxios_applyResponseInterceptors2(response) {
      let promiseChain = Promise.resolve(response);
      for (const interceptor of this.interceptors.response.values()) {
        if (interceptor) {
          promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
        }
      }
      return promiseChain;
    }, _Gaxios_prepareRequest = /**
     * Validates the options, merges them with defaults, and prepare request.
     *
     * @param options The original options passed from the client.
     * @returns Prepared options, ready to make a request
     */
    async function _Gaxios_prepareRequest2(options) {
      var _b, _c, _d, _e;
      const opts = (0, extend_1.default)(true, {}, this.defaults, options);
      if (!opts.url) {
        throw new Error("URL is required.");
      }
      const baseUrl = opts.baseUrl || opts.baseURL;
      if (baseUrl) {
        opts.url = baseUrl.toString() + opts.url;
      }
      opts.paramsSerializer = opts.paramsSerializer || this.paramsSerializer;
      if (opts.params && Object.keys(opts.params).length > 0) {
        let additionalQueryParams = opts.paramsSerializer(opts.params);
        if (additionalQueryParams.startsWith("?")) {
          additionalQueryParams = additionalQueryParams.slice(1);
        }
        const prefix = opts.url.toString().includes("?") ? "&" : "?";
        opts.url = opts.url + prefix + additionalQueryParams;
      }
      if (typeof options.maxContentLength === "number") {
        opts.size = options.maxContentLength;
      }
      if (typeof options.maxRedirects === "number") {
        opts.follow = options.maxRedirects;
      }
      opts.headers = opts.headers || {};
      if (opts.multipart === void 0 && opts.data) {
        const isFormData = typeof FormData === "undefined" ? false : (opts === null || opts === void 0 ? void 0 : opts.data) instanceof FormData;
        if (is_stream_1.default.readable(opts.data)) {
          opts.body = opts.data;
        } else if (hasBuffer() && Buffer.isBuffer(opts.data)) {
          opts.body = opts.data;
          if (!hasHeader(opts, "Content-Type")) {
            opts.headers["Content-Type"] = "application/json";
          }
        } else if (typeof opts.data === "object") {
          if (!isFormData) {
            if (getHeader(opts, "content-type") === "application/x-www-form-urlencoded") {
              opts.body = opts.paramsSerializer(opts.data);
            } else {
              if (!hasHeader(opts, "Content-Type")) {
                opts.headers["Content-Type"] = "application/json";
              }
              opts.body = JSON.stringify(opts.data);
            }
          }
        } else {
          opts.body = opts.data;
        }
      } else if (opts.multipart && opts.multipart.length > 0) {
        const boundary = (0, uuid_1.v4)();
        opts.headers["Content-Type"] = `multipart/related; boundary=${boundary}`;
        const bodyStream = new stream_1.PassThrough();
        opts.body = bodyStream;
        (0, stream_1.pipeline)(this.getMultipartRequest(opts.multipart, boundary), bodyStream, () => {
        });
      }
      opts.validateStatus = opts.validateStatus || this.validateStatus;
      opts.responseType = opts.responseType || "unknown";
      if (!opts.headers["Accept"] && opts.responseType === "json") {
        opts.headers["Accept"] = "application/json";
      }
      opts.method = opts.method || "GET";
      const proxy = opts.proxy || ((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.HTTPS_PROXY) || ((_c = process === null || process === void 0 ? void 0 : process.env) === null || _c === void 0 ? void 0 : _c.https_proxy) || ((_d = process === null || process === void 0 ? void 0 : process.env) === null || _d === void 0 ? void 0 : _d.HTTP_PROXY) || ((_e = process === null || process === void 0 ? void 0 : process.env) === null || _e === void 0 ? void 0 : _e.http_proxy);
      const urlMayUseProxy = __classPrivateFieldGet(this, _Gaxios_instances, "m", _Gaxios_urlMayUseProxy).call(this, opts.url, opts.noProxy);
      if (opts.agent) {
      } else if (proxy && urlMayUseProxy) {
        const HttpsProxyAgent = await __classPrivateFieldGet(_a, _a, "m", _Gaxios_getProxyAgent).call(_a);
        if (this.agentCache.has(proxy)) {
          opts.agent = this.agentCache.get(proxy);
        } else {
          opts.agent = new HttpsProxyAgent(proxy, {
            cert: opts.cert,
            key: opts.key
          });
          this.agentCache.set(proxy, opts.agent);
        }
      } else if (opts.cert && opts.key) {
        if (this.agentCache.has(opts.key)) {
          opts.agent = this.agentCache.get(opts.key);
        } else {
          opts.agent = new https_1.Agent({
            cert: opts.cert,
            key: opts.key
          });
          this.agentCache.set(opts.key, opts.agent);
        }
      }
      if (typeof opts.errorRedactor !== "function" && opts.errorRedactor !== false) {
        opts.errorRedactor = common_1.defaultErrorRedactor;
      }
      return opts;
    }, _Gaxios_getProxyAgent = async function _Gaxios_getProxyAgent2() {
      __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _Gaxios_proxyAgent) || (await Promise.resolve().then(() => __importStar(require_dist2()))).HttpsProxyAgent, "f", _Gaxios_proxyAgent);
      return __classPrivateFieldGet(this, _a, "f", _Gaxios_proxyAgent);
    };
    _Gaxios_proxyAgent = { value: void 0 };
  }
});

// node_modules/gaxios/build/src/index.js
var require_src = __commonJS({
  "node_modules/gaxios/build/src/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.request = exports.instance = exports.Gaxios = exports.GaxiosError = void 0;
    var gaxios_1 = require_gaxios();
    Object.defineProperty(exports, "Gaxios", { enumerable: true, get: function() {
      return gaxios_1.Gaxios;
    } });
    var common_1 = require_common();
    Object.defineProperty(exports, "GaxiosError", { enumerable: true, get: function() {
      return common_1.GaxiosError;
    } });
    __exportStar(require_interceptor(), exports);
    exports.instance = new gaxios_1.Gaxios();
    async function request(opts) {
      return exports.instance.request(opts);
    }
    exports.request = request;
  }
});

// node_modules/bignumber.js/bignumber.js
var require_bignumber = __commonJS({
  "node_modules/bignumber.js/bignumber.js"(exports, module) {
    (function(globalObject) {
      "use strict";
      var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
      function clone(configObject) {
        var div, convertBase, parseNumeric, P = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          // non-breaking space
          suffix: ""
        }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
        function BigNumber2(v, b) {
          var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
          if (!(x instanceof BigNumber2))
            return new BigNumber2(v, b);
          if (b == null) {
            if (v && v._isBigNumber === true) {
              x.s = v.s;
              if (!v.c || v.e > MAX_EXP) {
                x.c = x.e = null;
              } else if (v.e < MIN_EXP) {
                x.c = [x.e = 0];
              } else {
                x.e = v.e;
                x.c = v.c.slice();
              }
              return;
            }
            if ((isNum = typeof v == "number") && v * 0 == 0) {
              x.s = 1 / v < 0 ? (v = -v, -1) : 1;
              if (v === ~~v) {
                for (e = 0, i = v; i >= 10; i /= 10, e++)
                  ;
                if (e > MAX_EXP) {
                  x.c = x.e = null;
                } else {
                  x.e = e;
                  x.c = [v];
                }
                return;
              }
              str = String(v);
            } else {
              if (!isNumeric.test(str = String(v)))
                return parseNumeric(x, str, isNum);
              x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
            }
            if ((e = str.indexOf(".")) > -1)
              str = str.replace(".", "");
            if ((i = str.search(/e/i)) > 0) {
              if (e < 0)
                e = i;
              e += +str.slice(i + 1);
              str = str.substring(0, i);
            } else if (e < 0) {
              e = str.length;
            }
          } else {
            intCheck(b, 2, ALPHABET.length, "Base");
            if (b == 10 && alphabetHasNormalDecimalDigits) {
              x = new BigNumber2(v);
              return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
            }
            str = String(v);
            if (isNum = typeof v == "number") {
              if (v * 0 != 0)
                return parseNumeric(x, str, isNum, b);
              x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
              if (BigNumber2.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
                throw Error(tooManyDigits + v);
              }
            } else {
              x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
            }
            alphabet = ALPHABET.slice(0, b);
            e = i = 0;
            for (len = str.length; i < len; i++) {
              if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                if (c == ".") {
                  if (i > e) {
                    e = len;
                    continue;
                  }
                } else if (!caseChanged) {
                  if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                    caseChanged = true;
                    i = -1;
                    e = 0;
                    continue;
                  }
                }
                return parseNumeric(x, String(v), isNum, b);
              }
            }
            isNum = false;
            str = convertBase(str, b, 10, x.s);
            if ((e = str.indexOf(".")) > -1)
              str = str.replace(".", "");
            else
              e = str.length;
          }
          for (i = 0; str.charCodeAt(i) === 48; i++)
            ;
          for (len = str.length; str.charCodeAt(--len) === 48; )
            ;
          if (str = str.slice(i, ++len)) {
            len -= i;
            if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
              throw Error(tooManyDigits + x.s * v);
            }
            if ((e = e - i - 1) > MAX_EXP) {
              x.c = x.e = null;
            } else if (e < MIN_EXP) {
              x.c = [x.e = 0];
            } else {
              x.e = e;
              x.c = [];
              i = (e + 1) % LOG_BASE;
              if (e < 0)
                i += LOG_BASE;
              if (i < len) {
                if (i)
                  x.c.push(+str.slice(0, i));
                for (len -= LOG_BASE; i < len; ) {
                  x.c.push(+str.slice(i, i += LOG_BASE));
                }
                i = LOG_BASE - (str = str.slice(i)).length;
              } else {
                i -= len;
              }
              for (; i--; str += "0")
                ;
              x.c.push(+str);
            }
          } else {
            x.c = [x.e = 0];
          }
        }
        BigNumber2.clone = clone;
        BigNumber2.ROUND_UP = 0;
        BigNumber2.ROUND_DOWN = 1;
        BigNumber2.ROUND_CEIL = 2;
        BigNumber2.ROUND_FLOOR = 3;
        BigNumber2.ROUND_HALF_UP = 4;
        BigNumber2.ROUND_HALF_DOWN = 5;
        BigNumber2.ROUND_HALF_EVEN = 6;
        BigNumber2.ROUND_HALF_CEIL = 7;
        BigNumber2.ROUND_HALF_FLOOR = 8;
        BigNumber2.EUCLID = 9;
        BigNumber2.config = BigNumber2.set = function(obj) {
          var p, v;
          if (obj != null) {
            if (typeof obj == "object") {
              if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                DECIMAL_PLACES = v;
              }
              if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
                v = obj[p];
                intCheck(v, 0, 8, p);
                ROUNDING_MODE = v;
              }
              if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
                v = obj[p];
                if (v && v.pop) {
                  intCheck(v[0], -MAX, 0, p);
                  intCheck(v[1], 0, MAX, p);
                  TO_EXP_NEG = v[0];
                  TO_EXP_POS = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                }
              }
              if (obj.hasOwnProperty(p = "RANGE")) {
                v = obj[p];
                if (v && v.pop) {
                  intCheck(v[0], -MAX, -1, p);
                  intCheck(v[1], 1, MAX, p);
                  MIN_EXP = v[0];
                  MAX_EXP = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  if (v) {
                    MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                  } else {
                    throw Error(bignumberError + p + " cannot be zero: " + v);
                  }
                }
              }
              if (obj.hasOwnProperty(p = "CRYPTO")) {
                v = obj[p];
                if (v === !!v) {
                  if (v) {
                    if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                      CRYPTO = v;
                    } else {
                      CRYPTO = !v;
                      throw Error(bignumberError + "crypto unavailable");
                    }
                  } else {
                    CRYPTO = v;
                  }
                } else {
                  throw Error(bignumberError + p + " not true or false: " + v);
                }
              }
              if (obj.hasOwnProperty(p = "MODULO_MODE")) {
                v = obj[p];
                intCheck(v, 0, 9, p);
                MODULO_MODE = v;
              }
              if (obj.hasOwnProperty(p = "POW_PRECISION")) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                POW_PRECISION = v;
              }
              if (obj.hasOwnProperty(p = "FORMAT")) {
                v = obj[p];
                if (typeof v == "object")
                  FORMAT = v;
                else
                  throw Error(bignumberError + p + " not an object: " + v);
              }
              if (obj.hasOwnProperty(p = "ALPHABET")) {
                v = obj[p];
                if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                  alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                  ALPHABET = v;
                } else {
                  throw Error(bignumberError + p + " invalid: " + v);
                }
              }
            } else {
              throw Error(bignumberError + "Object expected: " + obj);
            }
          }
          return {
            DECIMAL_PLACES,
            ROUNDING_MODE,
            EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
            RANGE: [MIN_EXP, MAX_EXP],
            CRYPTO,
            MODULO_MODE,
            POW_PRECISION,
            FORMAT,
            ALPHABET
          };
        };
        BigNumber2.isBigNumber = function(v) {
          if (!v || v._isBigNumber !== true)
            return false;
          if (!BigNumber2.DEBUG)
            return true;
          var i, n, c = v.c, e = v.e, s = v.s;
          out:
            if ({}.toString.call(c) == "[object Array]") {
              if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                if (c[0] === 0) {
                  if (e === 0 && c.length === 1)
                    return true;
                  break out;
                }
                i = (e + 1) % LOG_BASE;
                if (i < 1)
                  i += LOG_BASE;
                if (String(c[0]).length == i) {
                  for (i = 0; i < c.length; i++) {
                    n = c[i];
                    if (n < 0 || n >= BASE || n !== mathfloor(n))
                      break out;
                  }
                  if (n !== 0)
                    return true;
                }
              }
            } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
              return true;
            }
          throw Error(bignumberError + "Invalid BigNumber: " + v);
        };
        BigNumber2.maximum = BigNumber2.max = function() {
          return maxOrMin(arguments, -1);
        };
        BigNumber2.minimum = BigNumber2.min = function() {
          return maxOrMin(arguments, 1);
        };
        BigNumber2.random = function() {
          var pow2_53 = 9007199254740992;
          var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
            return mathfloor(Math.random() * pow2_53);
          } : function() {
            return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
          };
          return function(dp) {
            var a, b, e, k, v, i = 0, c = [], rand = new BigNumber2(ONE);
            if (dp == null)
              dp = DECIMAL_PLACES;
            else
              intCheck(dp, 0, MAX);
            k = mathceil(dp / LOG_BASE);
            if (CRYPTO) {
              if (crypto.getRandomValues) {
                a = crypto.getRandomValues(new Uint32Array(k *= 2));
                for (; i < k; ) {
                  v = a[i] * 131072 + (a[i + 1] >>> 11);
                  if (v >= 9e15) {
                    b = crypto.getRandomValues(new Uint32Array(2));
                    a[i] = b[0];
                    a[i + 1] = b[1];
                  } else {
                    c.push(v % 1e14);
                    i += 2;
                  }
                }
                i = k / 2;
              } else if (crypto.randomBytes) {
                a = crypto.randomBytes(k *= 7);
                for (; i < k; ) {
                  v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                  if (v >= 9e15) {
                    crypto.randomBytes(7).copy(a, i);
                  } else {
                    c.push(v % 1e14);
                    i += 7;
                  }
                }
                i = k / 7;
              } else {
                CRYPTO = false;
                throw Error(bignumberError + "crypto unavailable");
              }
            }
            if (!CRYPTO) {
              for (; i < k; ) {
                v = random53bitInt();
                if (v < 9e15)
                  c[i++] = v % 1e14;
              }
            }
            k = c[--i];
            dp %= LOG_BASE;
            if (k && dp) {
              v = POWS_TEN[LOG_BASE - dp];
              c[i] = mathfloor(k / v) * v;
            }
            for (; c[i] === 0; c.pop(), i--)
              ;
            if (i < 0) {
              c = [e = 0];
            } else {
              for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
                ;
              for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
                ;
              if (i < LOG_BASE)
                e -= LOG_BASE - i;
            }
            rand.e = e;
            rand.c = c;
            return rand;
          };
        }();
        BigNumber2.sum = function() {
          var i = 1, args = arguments, sum = new BigNumber2(args[0]);
          for (; i < args.length; )
            sum = sum.plus(args[i++]);
          return sum;
        };
        convertBase = function() {
          var decimal = "0123456789";
          function toBaseOut(str, baseIn, baseOut, alphabet) {
            var j, arr = [0], arrL, i = 0, len = str.length;
            for (; i < len; ) {
              for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
                ;
              arr[0] += alphabet.indexOf(str.charAt(i++));
              for (j = 0; j < arr.length; j++) {
                if (arr[j] > baseOut - 1) {
                  if (arr[j + 1] == null)
                    arr[j + 1] = 0;
                  arr[j + 1] += arr[j] / baseOut | 0;
                  arr[j] %= baseOut;
                }
              }
            }
            return arr.reverse();
          }
          return function(str, baseIn, baseOut, sign, callerIsToString) {
            var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
            if (i >= 0) {
              k = POW_PRECISION;
              POW_PRECISION = 0;
              str = str.replace(".", "");
              y = new BigNumber2(baseIn);
              x = y.pow(str.length - i);
              POW_PRECISION = k;
              y.c = toBaseOut(
                toFixedPoint(coeffToString(x.c), x.e, "0"),
                10,
                baseOut,
                decimal
              );
              y.e = y.c.length;
            }
            xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
            e = k = xc.length;
            for (; xc[--k] == 0; xc.pop())
              ;
            if (!xc[0])
              return alphabet.charAt(0);
            if (i < 0) {
              --e;
            } else {
              x.c = xc;
              x.e = e;
              x.s = sign;
              x = div(x, y, dp, rm, baseOut);
              xc = x.c;
              r = x.r;
              e = x.e;
            }
            d = e + dp + 1;
            i = xc[d];
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;
            r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
            if (d < 1 || !xc[0]) {
              str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
            } else {
              xc.length = d;
              if (r) {
                for (--baseOut; ++xc[--d] > baseOut; ) {
                  xc[d] = 0;
                  if (!d) {
                    ++e;
                    xc = [1].concat(xc);
                  }
                }
              }
              for (k = xc.length; !xc[--k]; )
                ;
              for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]))
                ;
              str = toFixedPoint(str, e, alphabet.charAt(0));
            }
            return str;
          };
        }();
        div = function() {
          function multiply(x, k, base) {
            var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
            for (x = x.slice(); i--; ) {
              xlo = x[i] % SQRT_BASE;
              xhi = x[i] / SQRT_BASE | 0;
              m = khi * xlo + xhi * klo;
              temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
              carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
              x[i] = temp % base;
            }
            if (carry)
              x = [carry].concat(x);
            return x;
          }
          function compare2(a, b, aL, bL) {
            var i, cmp;
            if (aL != bL) {
              cmp = aL > bL ? 1 : -1;
            } else {
              for (i = cmp = 0; i < aL; i++) {
                if (a[i] != b[i]) {
                  cmp = a[i] > b[i] ? 1 : -1;
                  break;
                }
              }
            }
            return cmp;
          }
          function subtract(a, b, aL, base) {
            var i = 0;
            for (; aL--; ) {
              a[aL] -= i;
              i = a[aL] < b[aL] ? 1 : 0;
              a[aL] = i * base + a[aL] - b[aL];
            }
            for (; !a[0] && a.length > 1; a.splice(0, 1))
              ;
          }
          return function(x, y, dp, rm, base) {
            var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
            if (!xc || !xc[0] || !yc || !yc[0]) {
              return new BigNumber2(
                // Return NaN if either NaN, or both Infinity or 0.
                !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : (
                  // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                  xc && xc[0] == 0 || !yc ? s * 0 : s / 0
                )
              );
            }
            q = new BigNumber2(s);
            qc = q.c = [];
            e = x.e - y.e;
            s = dp + e + 1;
            if (!base) {
              base = BASE;
              e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
              s = s / LOG_BASE | 0;
            }
            for (i = 0; yc[i] == (xc[i] || 0); i++)
              ;
            if (yc[i] > (xc[i] || 0))
              e--;
            if (s < 0) {
              qc.push(1);
              more = true;
            } else {
              xL = xc.length;
              yL = yc.length;
              i = 0;
              s += 2;
              n = mathfloor(base / (yc[0] + 1));
              if (n > 1) {
                yc = multiply(yc, n, base);
                xc = multiply(xc, n, base);
                yL = yc.length;
                xL = xc.length;
              }
              xi = yL;
              rem = xc.slice(0, yL);
              remL = rem.length;
              for (; remL < yL; rem[remL++] = 0)
                ;
              yz = yc.slice();
              yz = [0].concat(yz);
              yc0 = yc[0];
              if (yc[1] >= base / 2)
                yc0++;
              do {
                n = 0;
                cmp = compare2(yc, rem, yL, remL);
                if (cmp < 0) {
                  rem0 = rem[0];
                  if (yL != remL)
                    rem0 = rem0 * base + (rem[1] || 0);
                  n = mathfloor(rem0 / yc0);
                  if (n > 1) {
                    if (n >= base)
                      n = base - 1;
                    prod = multiply(yc, n, base);
                    prodL = prod.length;
                    remL = rem.length;
                    while (compare2(prod, rem, prodL, remL) == 1) {
                      n--;
                      subtract(prod, yL < prodL ? yz : yc, prodL, base);
                      prodL = prod.length;
                      cmp = 1;
                    }
                  } else {
                    if (n == 0) {
                      cmp = n = 1;
                    }
                    prod = yc.slice();
                    prodL = prod.length;
                  }
                  if (prodL < remL)
                    prod = [0].concat(prod);
                  subtract(rem, prod, remL, base);
                  remL = rem.length;
                  if (cmp == -1) {
                    while (compare2(yc, rem, yL, remL) < 1) {
                      n++;
                      subtract(rem, yL < remL ? yz : yc, remL, base);
                      remL = rem.length;
                    }
                  }
                } else if (cmp === 0) {
                  n++;
                  rem = [0];
                }
                qc[i++] = n;
                if (rem[0]) {
                  rem[remL++] = xc[xi] || 0;
                } else {
                  rem = [xc[xi]];
                  remL = 1;
                }
              } while ((xi++ < xL || rem[0] != null) && s--);
              more = rem[0] != null;
              if (!qc[0])
                qc.splice(0, 1);
            }
            if (base == BASE) {
              for (i = 1, s = qc[0]; s >= 10; s /= 10, i++)
                ;
              round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
            } else {
              q.e = e;
              q.r = +more;
            }
            return q;
          };
        }();
        function format(n, i, rm, id) {
          var c0, e, ne, len, str;
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          if (!n.c)
            return n.toString();
          c0 = n.c[0];
          ne = n.e;
          if (i == null) {
            str = coeffToString(n.c);
            str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
          } else {
            n = round(new BigNumber2(n), i, rm);
            e = n.e;
            str = coeffToString(n.c);
            len = str.length;
            if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
              for (; len < i; str += "0", len++)
                ;
              str = toExponential(str, e);
            } else {
              i -= ne;
              str = toFixedPoint(str, e, "0");
              if (e + 1 > len) {
                if (--i > 0)
                  for (str += "."; i--; str += "0")
                    ;
              } else {
                i += e - len;
                if (i > 0) {
                  if (e + 1 == len)
                    str += ".";
                  for (; i--; str += "0")
                    ;
                }
              }
            }
          }
          return n.s < 0 && c0 ? "-" + str : str;
        }
        function maxOrMin(args, n) {
          var k, y, i = 1, x = new BigNumber2(args[0]);
          for (; i < args.length; i++) {
            y = new BigNumber2(args[i]);
            if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
              x = y;
            }
          }
          return x;
        }
        function normalise(n, c, e) {
          var i = 1, j = c.length;
          for (; !c[--j]; c.pop())
            ;
          for (j = c[0]; j >= 10; j /= 10, i++)
            ;
          if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
            n.c = n.e = null;
          } else if (e < MIN_EXP) {
            n.c = [n.e = 0];
          } else {
            n.e = e;
            n.c = c;
          }
          return n;
        }
        parseNumeric = function() {
          var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
          return function(x, str, isNum, b) {
            var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
            if (isInfinityOrNaN.test(s)) {
              x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
            } else {
              if (!isNum) {
                s = s.replace(basePrefix, function(m, p1, p2) {
                  base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                  return !b || b == base ? p1 : m;
                });
                if (b) {
                  base = b;
                  s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
                }
                if (str != s)
                  return new BigNumber2(s, base);
              }
              if (BigNumber2.DEBUG) {
                throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
              }
              x.s = null;
            }
            x.c = x.e = null;
          };
        }();
        function round(x, sd, rm, r) {
          var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
          if (xc) {
            out: {
              for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
                ;
              i = sd - d;
              if (i < 0) {
                i += LOG_BASE;
                j = sd;
                n = xc[ni = 0];
                rd = mathfloor(n / pows10[d - j - 1] % 10);
              } else {
                ni = mathceil((i + 1) / LOG_BASE);
                if (ni >= xc.length) {
                  if (r) {
                    for (; xc.length <= ni; xc.push(0))
                      ;
                    n = rd = 0;
                    d = 1;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + 1;
                  } else {
                    break out;
                  }
                } else {
                  n = k = xc[ni];
                  for (d = 1; k >= 10; k /= 10, d++)
                    ;
                  i %= LOG_BASE;
                  j = i - LOG_BASE + d;
                  rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
                }
              }
              r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
              // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
              // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
              xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
              r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
              (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
              if (sd < 1 || !xc[0]) {
                xc.length = 0;
                if (r) {
                  sd -= x.e + 1;
                  xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                  x.e = -sd || 0;
                } else {
                  xc[0] = x.e = 0;
                }
                return x;
              }
              if (i == 0) {
                xc.length = ni;
                k = 1;
                ni--;
              } else {
                xc.length = ni + 1;
                k = pows10[LOG_BASE - i];
                xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
              }
              if (r) {
                for (; ; ) {
                  if (ni == 0) {
                    for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                      ;
                    j = xc[0] += k;
                    for (k = 1; j >= 10; j /= 10, k++)
                      ;
                    if (i != k) {
                      x.e++;
                      if (xc[0] == BASE)
                        xc[0] = 1;
                    }
                    break;
                  } else {
                    xc[ni] += k;
                    if (xc[ni] != BASE)
                      break;
                    xc[ni--] = 0;
                    k = 1;
                  }
                }
              }
              for (i = xc.length; xc[--i] === 0; xc.pop())
                ;
            }
            if (x.e > MAX_EXP) {
              x.c = x.e = null;
            } else if (x.e < MIN_EXP) {
              x.c = [x.e = 0];
            }
          }
          return x;
        }
        function valueOf(n) {
          var str, e = n.e;
          if (e === null)
            return n.toString();
          str = coeffToString(n.c);
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
          return n.s < 0 ? "-" + str : str;
        }
        P.absoluteValue = P.abs = function() {
          var x = new BigNumber2(this);
          if (x.s < 0)
            x.s = 1;
          return x;
        };
        P.comparedTo = function(y, b) {
          return compare(this, new BigNumber2(y, b));
        };
        P.decimalPlaces = P.dp = function(dp, rm) {
          var c, n, v, x = this;
          if (dp != null) {
            intCheck(dp, 0, MAX);
            if (rm == null)
              rm = ROUNDING_MODE;
            else
              intCheck(rm, 0, 8);
            return round(new BigNumber2(x), dp + x.e + 1, rm);
          }
          if (!(c = x.c))
            return null;
          n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
          if (v = c[v])
            for (; v % 10 == 0; v /= 10, n--)
              ;
          if (n < 0)
            n = 0;
          return n;
        };
        P.dividedBy = P.div = function(y, b) {
          return div(this, new BigNumber2(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };
        P.dividedToIntegerBy = P.idiv = function(y, b) {
          return div(this, new BigNumber2(y, b), 0, 1);
        };
        P.exponentiatedBy = P.pow = function(n, m) {
          var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
          n = new BigNumber2(n);
          if (n.c && !n.isInteger()) {
            throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
          }
          if (m != null)
            m = new BigNumber2(m);
          nIsBig = n.e > 14;
          if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
            y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
            return m ? y.mod(m) : y;
          }
          nIsNeg = n.s < 0;
          if (m) {
            if (m.c ? !m.c[0] : !m.s)
              return new BigNumber2(NaN);
            isModExp = !nIsNeg && x.isInteger() && m.isInteger();
            if (isModExp)
              x = x.mod(m);
          } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
            k = x.s < 0 && isOdd(n) ? -0 : 0;
            if (x.e > -1)
              k = 1 / k;
            return new BigNumber2(nIsNeg ? 1 / k : k);
          } else if (POW_PRECISION) {
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
          }
          if (nIsBig) {
            half = new BigNumber2(0.5);
            if (nIsNeg)
              n.s = 1;
            nIsOdd = isOdd(n);
          } else {
            i = Math.abs(+valueOf(n));
            nIsOdd = i % 2;
          }
          y = new BigNumber2(ONE);
          for (; ; ) {
            if (nIsOdd) {
              y = y.times(x);
              if (!y.c)
                break;
              if (k) {
                if (y.c.length > k)
                  y.c.length = k;
              } else if (isModExp) {
                y = y.mod(m);
              }
            }
            if (i) {
              i = mathfloor(i / 2);
              if (i === 0)
                break;
              nIsOdd = i % 2;
            } else {
              n = n.times(half);
              round(n, n.e + 1, 1);
              if (n.e > 14) {
                nIsOdd = isOdd(n);
              } else {
                i = +valueOf(n);
                if (i === 0)
                  break;
                nIsOdd = i % 2;
              }
            }
            x = x.times(x);
            if (k) {
              if (x.c && x.c.length > k)
                x.c.length = k;
            } else if (isModExp) {
              x = x.mod(m);
            }
          }
          if (isModExp)
            return y;
          if (nIsNeg)
            y = ONE.div(y);
          return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };
        P.integerValue = function(rm) {
          var n = new BigNumber2(this);
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          return round(n, n.e + 1, rm);
        };
        P.isEqualTo = P.eq = function(y, b) {
          return compare(this, new BigNumber2(y, b)) === 0;
        };
        P.isFinite = function() {
          return !!this.c;
        };
        P.isGreaterThan = P.gt = function(y, b) {
          return compare(this, new BigNumber2(y, b)) > 0;
        };
        P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
          return (b = compare(this, new BigNumber2(y, b))) === 1 || b === 0;
        };
        P.isInteger = function() {
          return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };
        P.isLessThan = P.lt = function(y, b) {
          return compare(this, new BigNumber2(y, b)) < 0;
        };
        P.isLessThanOrEqualTo = P.lte = function(y, b) {
          return (b = compare(this, new BigNumber2(y, b))) === -1 || b === 0;
        };
        P.isNaN = function() {
          return !this.s;
        };
        P.isNegative = function() {
          return this.s < 0;
        };
        P.isPositive = function() {
          return this.s > 0;
        };
        P.isZero = function() {
          return !!this.c && this.c[0] == 0;
        };
        P.minus = function(y, b) {
          var i, j, t, xLTy, x = this, a = x.s;
          y = new BigNumber2(y, b);
          b = y.s;
          if (!a || !b)
            return new BigNumber2(NaN);
          if (a != b) {
            y.s = -b;
            return x.plus(y);
          }
          var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
          if (!xe || !ye) {
            if (!xc || !yc)
              return xc ? (y.s = -b, y) : new BigNumber2(yc ? x : NaN);
            if (!xc[0] || !yc[0]) {
              return yc[0] ? (y.s = -b, y) : new BigNumber2(xc[0] ? x : (
                // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                ROUNDING_MODE == 3 ? -0 : 0
              ));
            }
          }
          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();
          if (a = xe - ye) {
            if (xLTy = a < 0) {
              a = -a;
              t = xc;
            } else {
              ye = xe;
              t = yc;
            }
            t.reverse();
            for (b = a; b--; t.push(0))
              ;
            t.reverse();
          } else {
            j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
            for (a = b = 0; b < j; b++) {
              if (xc[b] != yc[b]) {
                xLTy = xc[b] < yc[b];
                break;
              }
            }
          }
          if (xLTy) {
            t = xc;
            xc = yc;
            yc = t;
            y.s = -y.s;
          }
          b = (j = yc.length) - (i = xc.length);
          if (b > 0)
            for (; b--; xc[i++] = 0)
              ;
          b = BASE - 1;
          for (; j > a; ) {
            if (xc[--j] < yc[j]) {
              for (i = j; i && !xc[--i]; xc[i] = b)
                ;
              --xc[i];
              xc[j] += BASE;
            }
            xc[j] -= yc[j];
          }
          for (; xc[0] == 0; xc.splice(0, 1), --ye)
            ;
          if (!xc[0]) {
            y.s = ROUNDING_MODE == 3 ? -1 : 1;
            y.c = [y.e = 0];
            return y;
          }
          return normalise(y, xc, ye);
        };
        P.modulo = P.mod = function(y, b) {
          var q, s, x = this;
          y = new BigNumber2(y, b);
          if (!x.c || !y.s || y.c && !y.c[0]) {
            return new BigNumber2(NaN);
          } else if (!y.c || x.c && !x.c[0]) {
            return new BigNumber2(x);
          }
          if (MODULO_MODE == 9) {
            s = y.s;
            y.s = 1;
            q = div(x, y, 0, 3);
            y.s = s;
            q.s *= s;
          } else {
            q = div(x, y, 0, MODULO_MODE);
          }
          y = x.minus(q.times(y));
          if (!y.c[0] && MODULO_MODE == 1)
            y.s = x.s;
          return y;
        };
        P.multipliedBy = P.times = function(y, b) {
          var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b)).c;
          if (!xc || !yc || !xc[0] || !yc[0]) {
            if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
              y.c = y.e = y.s = null;
            } else {
              y.s *= x.s;
              if (!xc || !yc) {
                y.c = y.e = null;
              } else {
                y.c = [0];
                y.e = 0;
              }
            }
            return y;
          }
          e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
          y.s *= x.s;
          xcL = xc.length;
          ycL = yc.length;
          if (xcL < ycL) {
            zc = xc;
            xc = yc;
            yc = zc;
            i = xcL;
            xcL = ycL;
            ycL = i;
          }
          for (i = xcL + ycL, zc = []; i--; zc.push(0))
            ;
          base = BASE;
          sqrtBase = SQRT_BASE;
          for (i = ycL; --i >= 0; ) {
            c = 0;
            ylo = yc[i] % sqrtBase;
            yhi = yc[i] / sqrtBase | 0;
            for (k = xcL, j = i + k; j > i; ) {
              xlo = xc[--k] % sqrtBase;
              xhi = xc[k] / sqrtBase | 0;
              m = yhi * xlo + xhi * ylo;
              xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
              c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
              zc[j--] = xlo % base;
            }
            zc[j] = c;
          }
          if (c) {
            ++e;
          } else {
            zc.splice(0, 1);
          }
          return normalise(y, zc, e);
        };
        P.negated = function() {
          var x = new BigNumber2(this);
          x.s = -x.s || null;
          return x;
        };
        P.plus = function(y, b) {
          var t, x = this, a = x.s;
          y = new BigNumber2(y, b);
          b = y.s;
          if (!a || !b)
            return new BigNumber2(NaN);
          if (a != b) {
            y.s = -b;
            return x.minus(y);
          }
          var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
          if (!xe || !ye) {
            if (!xc || !yc)
              return new BigNumber2(a / 0);
            if (!xc[0] || !yc[0])
              return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
          }
          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();
          if (a = xe - ye) {
            if (a > 0) {
              ye = xe;
              t = yc;
            } else {
              a = -a;
              t = xc;
            }
            t.reverse();
            for (; a--; t.push(0))
              ;
            t.reverse();
          }
          a = xc.length;
          b = yc.length;
          if (a - b < 0) {
            t = yc;
            yc = xc;
            xc = t;
            b = a;
          }
          for (a = 0; b; ) {
            a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
            xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
          }
          if (a) {
            xc = [a].concat(xc);
            ++ye;
          }
          return normalise(y, xc, ye);
        };
        P.precision = P.sd = function(sd, rm) {
          var c, n, v, x = this;
          if (sd != null && sd !== !!sd) {
            intCheck(sd, 1, MAX);
            if (rm == null)
              rm = ROUNDING_MODE;
            else
              intCheck(rm, 0, 8);
            return round(new BigNumber2(x), sd, rm);
          }
          if (!(c = x.c))
            return null;
          v = c.length - 1;
          n = v * LOG_BASE + 1;
          if (v = c[v]) {
            for (; v % 10 == 0; v /= 10, n--)
              ;
            for (v = c[0]; v >= 10; v /= 10, n++)
              ;
          }
          if (sd && x.e + 1 > n)
            n = x.e + 1;
          return n;
        };
        P.shiftedBy = function(k) {
          intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
          return this.times("1e" + k);
        };
        P.squareRoot = P.sqrt = function() {
          var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
          if (s !== 1 || !c || !c[0]) {
            return new BigNumber2(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
          }
          s = Math.sqrt(+valueOf(x));
          if (s == 0 || s == 1 / 0) {
            n = coeffToString(c);
            if ((n.length + e) % 2 == 0)
              n += "0";
            s = Math.sqrt(+n);
            e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
            if (s == 1 / 0) {
              n = "5e" + e;
            } else {
              n = s.toExponential();
              n = n.slice(0, n.indexOf("e") + 1) + e;
            }
            r = new BigNumber2(n);
          } else {
            r = new BigNumber2(s + "");
          }
          if (r.c[0]) {
            e = r.e;
            s = e + dp;
            if (s < 3)
              s = 0;
            for (; ; ) {
              t = r;
              r = half.times(t.plus(div(x, t, dp, 1)));
              if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                if (r.e < e)
                  --s;
                n = n.slice(s - 3, s + 1);
                if (n == "9999" || !rep && n == "4999") {
                  if (!rep) {
                    round(t, t.e + DECIMAL_PLACES + 2, 0);
                    if (t.times(t).eq(x)) {
                      r = t;
                      break;
                    }
                  }
                  dp += 4;
                  s += 4;
                  rep = 1;
                } else {
                  if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                    round(r, r.e + DECIMAL_PLACES + 2, 1);
                    m = !r.times(r).eq(x);
                  }
                  break;
                }
              }
            }
          }
          return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };
        P.toExponential = function(dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp++;
          }
          return format(this, dp, rm, 1);
        };
        P.toFixed = function(dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp = dp + this.e + 1;
          }
          return format(this, dp, rm);
        };
        P.toFormat = function(dp, rm, format2) {
          var str, x = this;
          if (format2 == null) {
            if (dp != null && rm && typeof rm == "object") {
              format2 = rm;
              rm = null;
            } else if (dp && typeof dp == "object") {
              format2 = dp;
              dp = rm = null;
            } else {
              format2 = FORMAT;
            }
          } else if (typeof format2 != "object") {
            throw Error(bignumberError + "Argument not an object: " + format2);
          }
          str = x.toFixed(dp, rm);
          if (x.c) {
            var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
            if (g2) {
              i = g1;
              g1 = g2;
              g2 = i;
              len -= i;
            }
            if (g1 > 0 && len > 0) {
              i = len % g1 || g1;
              intPart = intDigits.substr(0, i);
              for (; i < len; i += g1)
                intPart += groupSeparator + intDigits.substr(i, g1);
              if (g2 > 0)
                intPart += groupSeparator + intDigits.slice(i);
              if (isNeg)
                intPart = "-" + intPart;
            }
            str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(
              new RegExp("\\d{" + g2 + "}\\B", "g"),
              "$&" + (format2.fractionGroupSeparator || "")
            ) : fractionPart) : intPart;
          }
          return (format2.prefix || "") + str + (format2.suffix || "");
        };
        P.toFraction = function(md) {
          var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
          if (md != null) {
            n = new BigNumber2(md);
            if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
              throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
            }
          }
          if (!xc)
            return new BigNumber2(x);
          d = new BigNumber2(ONE);
          n1 = d0 = new BigNumber2(ONE);
          d1 = n0 = new BigNumber2(ONE);
          s = coeffToString(xc);
          e = d.e = s.length - x.e - 1;
          d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
          md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
          exp = MAX_EXP;
          MAX_EXP = 1 / 0;
          n = new BigNumber2(s);
          n0.c[0] = 0;
          for (; ; ) {
            q = div(n, d, 0, 1);
            d2 = d0.plus(q.times(d1));
            if (d2.comparedTo(md) == 1)
              break;
            d0 = d1;
            d1 = d2;
            n1 = n0.plus(q.times(d2 = n1));
            n0 = d2;
            d = n.minus(q.times(d2 = d));
            n = d2;
          }
          d2 = div(md.minus(d0), d1, 0, 1);
          n0 = n0.plus(d2.times(n1));
          d0 = d0.plus(d2.times(d1));
          n0.s = n1.s = x.s;
          e = e * 2;
          r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
            div(n0, d0, e, ROUNDING_MODE).minus(x).abs()
          ) < 1 ? [n1, d1] : [n0, d0];
          MAX_EXP = exp;
          return r;
        };
        P.toNumber = function() {
          return +valueOf(this);
        };
        P.toPrecision = function(sd, rm) {
          if (sd != null)
            intCheck(sd, 1, MAX);
          return format(this, sd, rm, 2);
        };
        P.toString = function(b) {
          var str, n = this, s = n.s, e = n.e;
          if (e === null) {
            if (s) {
              str = "Infinity";
              if (s < 0)
                str = "-" + str;
            } else {
              str = "NaN";
            }
          } else {
            if (b == null) {
              str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
            } else if (b === 10 && alphabetHasNormalDecimalDigits) {
              n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
              str = toFixedPoint(coeffToString(n.c), n.e, "0");
            } else {
              intCheck(b, 2, ALPHABET.length, "Base");
              str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
            }
            if (s < 0 && n.c[0])
              str = "-" + str;
          }
          return str;
        };
        P.valueOf = P.toJSON = function() {
          return valueOf(this);
        };
        P._isBigNumber = true;
        if (configObject != null)
          BigNumber2.set(configObject);
        return BigNumber2;
      }
      function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
      }
      function coeffToString(a) {
        var s, z, i = 1, j = a.length, r = a[0] + "";
        for (; i < j; ) {
          s = a[i++] + "";
          z = LOG_BASE - s.length;
          for (; z--; s = "0" + s)
            ;
          r += s;
        }
        for (j = r.length; r.charCodeAt(--j) === 48; )
          ;
        return r.slice(0, j + 1 || 1);
      }
      function compare(x, y) {
        var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
        if (!i || !j)
          return null;
        a = xc && !xc[0];
        b = yc && !yc[0];
        if (a || b)
          return a ? b ? 0 : -j : i;
        if (i != j)
          return i;
        a = i < 0;
        b = k == l;
        if (!xc || !yc)
          return b ? 0 : !xc ^ a ? 1 : -1;
        if (!b)
          return k > l ^ a ? 1 : -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;
        for (i = 0; i < j; i++)
          if (xc[i] != yc[i])
            return xc[i] > yc[i] ^ a ? 1 : -1;
        return k == l ? 0 : k > l ^ a ? 1 : -1;
      }
      function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== mathfloor(n)) {
          throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
        }
      }
      function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
      }
      function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
      }
      function toFixedPoint(str, e, z) {
        var len, zs;
        if (e < 0) {
          for (zs = z + "."; ++e; zs += z)
            ;
          str = zs + str;
        } else {
          len = str.length;
          if (++e > len) {
            for (zs = z, e -= len; --e; zs += z)
              ;
            str += zs;
          } else if (e < len) {
            str = str.slice(0, e) + "." + str.slice(e);
          }
        }
        return str;
      }
      BigNumber = clone();
      BigNumber["default"] = BigNumber.BigNumber = BigNumber;
      if (typeof define == "function" && define.amd) {
        define(function() {
          return BigNumber;
        });
      } else if (typeof module != "undefined" && module.exports) {
        module.exports = BigNumber;
      } else {
        if (!globalObject) {
          globalObject = typeof self != "undefined" && self ? self : window;
        }
        globalObject.BigNumber = BigNumber;
      }
    })(exports);
  }
});

// node_modules/json-bigint/lib/stringify.js
var require_stringify2 = __commonJS({
  "node_modules/json-bigint/lib/stringify.js"(exports, module) {
    var BigNumber = require_bignumber();
    var JSON2 = module.exports;
    (function() {
      "use strict";
      function f(n) {
        return n < 10 ? "0" + n : n;
      }
      var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        // table of character substitutions
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      }, rep;
      function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
          var c = meta[a];
          return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
      }
      function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key], isBigNumber = value != null && (value instanceof BigNumber || BigNumber.isBigNumber(value));
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        if (typeof rep === "function") {
          value = rep.call(holder, key, value);
        }
        switch (typeof value) {
          case "string":
            if (isBigNumber) {
              return value;
            } else {
              return quote(value);
            }
          case "number":
            return isFinite(value) ? String(value) : "null";
          case "boolean":
          case "null":
          case "bigint":
            return String(value);
          case "object":
            if (!value) {
              return "null";
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
              length = value.length;
              for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value) || "null";
              }
              v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
              gap = mind;
              return v;
            }
            if (rep && typeof rep === "object") {
              length = rep.length;
              for (i = 0; i < length; i += 1) {
                if (typeof rep[i] === "string") {
                  k = rep[i];
                  v = str(k, value);
                  if (v) {
                    partial.push(quote(k) + (gap ? ": " : ":") + v);
                  }
                }
              }
            } else {
              Object.keys(value).forEach(function(k2) {
                var v2 = str(k2, value);
                if (v2) {
                  partial.push(quote(k2) + (gap ? ": " : ":") + v2);
                }
              });
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v;
        }
      }
      if (typeof JSON2.stringify !== "function") {
        JSON2.stringify = function(value, replacer, space) {
          var i;
          gap = "";
          indent = "";
          if (typeof space === "number") {
            for (i = 0; i < space; i += 1) {
              indent += " ";
            }
          } else if (typeof space === "string") {
            indent = space;
          }
          rep = replacer;
          if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
            throw new Error("JSON.stringify");
          }
          return str("", { "": value });
        };
      }
    })();
  }
});

// node_modules/json-bigint/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/json-bigint/lib/parse.js"(exports, module) {
    var BigNumber = null;
    var suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
    var suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
    var json_parse = function(options) {
      "use strict";
      var _options = {
        strict: false,
        // not being strict means do not generate syntax errors for "duplicate key"
        storeAsString: false,
        // toggles whether the values should be stored as BigNumber (default) or a string
        alwaysParseAsBig: false,
        // toggles whether all numbers should be Big
        useNativeBigInt: false,
        // toggles whether to use native BigInt instead of bignumber.js
        protoAction: "error",
        constructorAction: "error"
      };
      if (options !== void 0 && options !== null) {
        if (options.strict === true) {
          _options.strict = true;
        }
        if (options.storeAsString === true) {
          _options.storeAsString = true;
        }
        _options.alwaysParseAsBig = options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
        _options.useNativeBigInt = options.useNativeBigInt === true ? options.useNativeBigInt : false;
        if (typeof options.constructorAction !== "undefined") {
          if (options.constructorAction === "error" || options.constructorAction === "ignore" || options.constructorAction === "preserve") {
            _options.constructorAction = options.constructorAction;
          } else {
            throw new Error(
              `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`
            );
          }
        }
        if (typeof options.protoAction !== "undefined") {
          if (options.protoAction === "error" || options.protoAction === "ignore" || options.protoAction === "preserve") {
            _options.protoAction = options.protoAction;
          } else {
            throw new Error(
              `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`
            );
          }
        }
      }
      var at, ch, escapee = {
        '"': '"',
        "\\": "\\",
        "/": "/",
        b: "\b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "	"
      }, text, error = function(m) {
        throw {
          name: "SyntaxError",
          message: m,
          at,
          text
        };
      }, next = function(c) {
        if (c && c !== ch) {
          error("Expected '" + c + "' instead of '" + ch + "'");
        }
        ch = text.charAt(at);
        at += 1;
        return ch;
      }, number = function() {
        var number2, string2 = "";
        if (ch === "-") {
          string2 = "-";
          next("-");
        }
        while (ch >= "0" && ch <= "9") {
          string2 += ch;
          next();
        }
        if (ch === ".") {
          string2 += ".";
          while (next() && ch >= "0" && ch <= "9") {
            string2 += ch;
          }
        }
        if (ch === "e" || ch === "E") {
          string2 += ch;
          next();
          if (ch === "-" || ch === "+") {
            string2 += ch;
            next();
          }
          while (ch >= "0" && ch <= "9") {
            string2 += ch;
            next();
          }
        }
        number2 = +string2;
        if (!isFinite(number2)) {
          error("Bad number");
        } else {
          if (BigNumber == null)
            BigNumber = require_bignumber();
          if (string2.length > 15)
            return _options.storeAsString ? string2 : _options.useNativeBigInt ? BigInt(string2) : new BigNumber(string2);
          else
            return !_options.alwaysParseAsBig ? number2 : _options.useNativeBigInt ? BigInt(number2) : new BigNumber(number2);
        }
      }, string = function() {
        var hex, i, string2 = "", uffff;
        if (ch === '"') {
          var startAt = at;
          while (next()) {
            if (ch === '"') {
              if (at - 1 > startAt)
                string2 += text.substring(startAt, at - 1);
              next();
              return string2;
            }
            if (ch === "\\") {
              if (at - 1 > startAt)
                string2 += text.substring(startAt, at - 1);
              next();
              if (ch === "u") {
                uffff = 0;
                for (i = 0; i < 4; i += 1) {
                  hex = parseInt(next(), 16);
                  if (!isFinite(hex)) {
                    break;
                  }
                  uffff = uffff * 16 + hex;
                }
                string2 += String.fromCharCode(uffff);
              } else if (typeof escapee[ch] === "string") {
                string2 += escapee[ch];
              } else {
                break;
              }
              startAt = at;
            }
          }
        }
        error("Bad string");
      }, white = function() {
        while (ch && ch <= " ") {
          next();
        }
      }, word = function() {
        switch (ch) {
          case "t":
            next("t");
            next("r");
            next("u");
            next("e");
            return true;
          case "f":
            next("f");
            next("a");
            next("l");
            next("s");
            next("e");
            return false;
          case "n":
            next("n");
            next("u");
            next("l");
            next("l");
            return null;
        }
        error("Unexpected '" + ch + "'");
      }, value, array = function() {
        var array2 = [];
        if (ch === "[") {
          next("[");
          white();
          if (ch === "]") {
            next("]");
            return array2;
          }
          while (ch) {
            array2.push(value());
            white();
            if (ch === "]") {
              next("]");
              return array2;
            }
            next(",");
            white();
          }
        }
        error("Bad array");
      }, object = function() {
        var key, object2 = /* @__PURE__ */ Object.create(null);
        if (ch === "{") {
          next("{");
          white();
          if (ch === "}") {
            next("}");
            return object2;
          }
          while (ch) {
            key = string();
            white();
            next(":");
            if (_options.strict === true && Object.hasOwnProperty.call(object2, key)) {
              error('Duplicate key "' + key + '"');
            }
            if (suspectProtoRx.test(key) === true) {
              if (_options.protoAction === "error") {
                error("Object contains forbidden prototype property");
              } else if (_options.protoAction === "ignore") {
                value();
              } else {
                object2[key] = value();
              }
            } else if (suspectConstructorRx.test(key) === true) {
              if (_options.constructorAction === "error") {
                error("Object contains forbidden constructor property");
              } else if (_options.constructorAction === "ignore") {
                value();
              } else {
                object2[key] = value();
              }
            } else {
              object2[key] = value();
            }
            white();
            if (ch === "}") {
              next("}");
              return object2;
            }
            next(",");
            white();
          }
        }
        error("Bad object");
      };
      value = function() {
        white();
        switch (ch) {
          case "{":
            return object();
          case "[":
            return array();
          case '"':
            return string();
          case "-":
            return number();
          default:
            return ch >= "0" && ch <= "9" ? number() : word();
        }
      };
      return function(source, reviver) {
        var result;
        text = source + "";
        at = 0;
        ch = " ";
        result = value();
        white();
        if (ch) {
          error("Syntax error");
        }
        return typeof reviver === "function" ? function walk(holder, key) {
          var k, v, value2 = holder[key];
          if (value2 && typeof value2 === "object") {
            Object.keys(value2).forEach(function(k2) {
              v = walk(value2, k2);
              if (v !== void 0) {
                value2[k2] = v;
              } else {
                delete value2[k2];
              }
            });
          }
          return reviver.call(holder, key, value2);
        }({ "": result }, "") : result;
      };
    };
    module.exports = json_parse;
  }
});

// node_modules/json-bigint/index.js
var require_json_bigint = __commonJS({
  "node_modules/json-bigint/index.js"(exports, module) {
    var json_stringify = require_stringify2().stringify;
    var json_parse = require_parse2();
    module.exports = function(options) {
      return {
        parse: json_parse(options),
        stringify: json_stringify
      };
    };
    module.exports.parse = json_parse();
    module.exports.stringify = json_stringify;
  }
});

// browser-external:os
var require_os = __commonJS({
  "browser-external:os"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "os" has been externalized for browser compatibility. Cannot access "os.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/gcp-metadata/build/src/gcp-residency.js
var require_gcp_residency = __commonJS({
  "node_modules/gcp-metadata/build/src/gcp-residency.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.detectGCPResidency = exports.isGoogleComputeEngine = exports.isGoogleComputeEngineMACAddress = exports.isGoogleComputeEngineLinux = exports.isGoogleCloudServerless = exports.GCE_LINUX_BIOS_PATHS = void 0;
    var fs_1 = require_fs();
    var os_1 = require_os();
    exports.GCE_LINUX_BIOS_PATHS = {
      BIOS_DATE: "/sys/class/dmi/id/bios_date",
      BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor"
    };
    var GCE_MAC_ADDRESS_REGEX = /^42:01/;
    function isGoogleCloudServerless() {
      const isGFEnvironment = process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE;
      return !!isGFEnvironment;
    }
    exports.isGoogleCloudServerless = isGoogleCloudServerless;
    function isGoogleComputeEngineLinux() {
      if ((0, os_1.platform)() !== "linux")
        return false;
      try {
        (0, fs_1.statSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
        const biosVendor = (0, fs_1.readFileSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
        return /Google/.test(biosVendor);
      } catch (_a) {
        return false;
      }
    }
    exports.isGoogleComputeEngineLinux = isGoogleComputeEngineLinux;
    function isGoogleComputeEngineMACAddress() {
      const interfaces = (0, os_1.networkInterfaces)();
      for (const item of Object.values(interfaces)) {
        if (!item)
          continue;
        for (const { mac } of item) {
          if (GCE_MAC_ADDRESS_REGEX.test(mac)) {
            return true;
          }
        }
      }
      return false;
    }
    exports.isGoogleComputeEngineMACAddress = isGoogleComputeEngineMACAddress;
    function isGoogleComputeEngine() {
      return isGoogleComputeEngineLinux() || isGoogleComputeEngineMACAddress();
    }
    exports.isGoogleComputeEngine = isGoogleComputeEngine;
    function detectGCPResidency() {
      return isGoogleCloudServerless() || isGoogleComputeEngine();
    }
    exports.detectGCPResidency = detectGCPResidency;
  }
});

// node_modules/gcp-metadata/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/gcp-metadata/build/src/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.requestTimeout = exports.setGCPResidency = exports.getGCPResidency = exports.gcpResidencyCache = exports.resetIsAvailableCache = exports.isAvailable = exports.bulk = exports.universe = exports.project = exports.instance = exports.METADATA_SERVER_DETECTION = exports.HEADERS = exports.HEADER_VALUE = exports.HEADER_NAME = exports.SECONDARY_HOST_ADDRESS = exports.HOST_ADDRESS = exports.BASE_PATH = void 0;
    var gaxios_1 = require_src();
    var jsonBigint = require_json_bigint();
    var gcp_residency_1 = require_gcp_residency();
    exports.BASE_PATH = "/computeMetadata/v1";
    exports.HOST_ADDRESS = "http://169.254.169.254";
    exports.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
    exports.HEADER_NAME = "Metadata-Flavor";
    exports.HEADER_VALUE = "Google";
    exports.HEADERS = Object.freeze({ [exports.HEADER_NAME]: exports.HEADER_VALUE });
    exports.METADATA_SERVER_DETECTION = Object.freeze({
      "assume-present": "don't try to ping the metadata server, but assume it's present",
      none: "don't try to ping the metadata server, but don't try to use it either",
      "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
      "ping-only": "skip the BIOS probe, and go straight to pinging"
    });
    function getBaseUrl(baseUrl) {
      if (!baseUrl) {
        baseUrl = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || exports.HOST_ADDRESS;
      }
      if (!/^https?:\/\//.test(baseUrl)) {
        baseUrl = `http://${baseUrl}`;
      }
      return new URL(exports.BASE_PATH, baseUrl).href;
    }
    function validate(options) {
      Object.keys(options).forEach((key) => {
        switch (key) {
          case "params":
          case "property":
          case "headers":
            break;
          case "qs":
            throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
          default:
            throw new Error(`'${key}' is not a valid configuration option.`);
        }
      });
    }
    async function metadataAccessor(type, options = {}, noResponseRetries = 3, fastFail = false) {
      let metadataKey = "";
      let params = {};
      let headers = {};
      if (typeof type === "object") {
        const metadataAccessor2 = type;
        metadataKey = metadataAccessor2.metadataKey;
        params = metadataAccessor2.params || params;
        headers = metadataAccessor2.headers || headers;
        noResponseRetries = metadataAccessor2.noResponseRetries || noResponseRetries;
        fastFail = metadataAccessor2.fastFail || fastFail;
      } else {
        metadataKey = type;
      }
      if (typeof options === "string") {
        metadataKey += `/${options}`;
      } else {
        validate(options);
        if (options.property) {
          metadataKey += `/${options.property}`;
        }
        headers = options.headers || headers;
        params = options.params || params;
      }
      try {
        const requestMethod = fastFail ? fastFailMetadataRequest : gaxios_1.request;
        const res = await requestMethod({
          url: `${getBaseUrl()}/${metadataKey}`,
          headers: { ...exports.HEADERS, ...headers },
          retryConfig: { noResponseRetries },
          params,
          responseType: "text",
          timeout: requestTimeout()
        });
        if (res.headers[exports.HEADER_NAME.toLowerCase()] !== exports.HEADER_VALUE) {
          throw new Error(`Invalid response from metadata service: incorrect ${exports.HEADER_NAME} header.`);
        } else if (!res.data) {
          throw new Error("Invalid response from the metadata service");
        }
        if (typeof res.data === "string") {
          try {
            return jsonBigint.parse(res.data);
          } catch (_a) {
          }
        }
        return res.data;
      } catch (e) {
        const err = e;
        if (err.response && err.response.status !== 200) {
          err.message = `Unsuccessful response status code. ${err.message}`;
        }
        throw e;
      }
    }
    async function fastFailMetadataRequest(options) {
      const secondaryOptions = {
        ...options,
        url: options.url.replace(getBaseUrl(), getBaseUrl(exports.SECONDARY_HOST_ADDRESS))
      };
      let responded = false;
      const r1 = (0, gaxios_1.request)(options).then((res) => {
        responded = true;
        return res;
      }).catch((err) => {
        if (responded) {
          return r2;
        } else {
          responded = true;
          throw err;
        }
      });
      const r2 = (0, gaxios_1.request)(secondaryOptions).then((res) => {
        responded = true;
        return res;
      }).catch((err) => {
        if (responded) {
          return r1;
        } else {
          responded = true;
          throw err;
        }
      });
      return Promise.race([r1, r2]);
    }
    function instance(options) {
      return metadataAccessor("instance", options);
    }
    exports.instance = instance;
    function project(options) {
      return metadataAccessor("project", options);
    }
    exports.project = project;
    function universe(options) {
      return metadataAccessor("universe", options);
    }
    exports.universe = universe;
    async function bulk(properties) {
      const r = {};
      await Promise.all(properties.map((item) => {
        return (async () => {
          const res = await metadataAccessor(item);
          const key = item.metadataKey;
          r[key] = res;
        })();
      }));
      return r;
    }
    exports.bulk = bulk;
    function detectGCPAvailableRetries() {
      return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
    }
    var cachedIsAvailableResponse;
    async function isAvailable() {
      if (process.env.METADATA_SERVER_DETECTION) {
        const value = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
        if (!(value in exports.METADATA_SERVER_DETECTION)) {
          throw new RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${value}\`, but it should be \`${Object.keys(exports.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
        }
        switch (value) {
          case "assume-present":
            return true;
          case "none":
            return false;
          case "bios-only":
            return getGCPResidency();
          case "ping-only":
        }
      }
      try {
        if (cachedIsAvailableResponse === void 0) {
          cachedIsAvailableResponse = metadataAccessor(
            "instance",
            void 0,
            detectGCPAvailableRetries(),
            // If the default HOST_ADDRESS has been overridden, we should not
            // make an effort to try SECONDARY_HOST_ADDRESS (as we are likely in
            // a non-GCP environment):
            !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST)
          );
        }
        await cachedIsAvailableResponse;
        return true;
      } catch (e) {
        const err = e;
        if (process.env.DEBUG_AUTH) {
          console.info(err);
        }
        if (err.type === "request-timeout") {
          return false;
        }
        if (err.response && err.response.status === 404) {
          return false;
        } else {
          if (!(err.response && err.response.status === 404) && // A warning is emitted if we see an unexpected err.code, or err.code
          // is not populated:
          (!err.code || ![
            "EHOSTDOWN",
            "EHOSTUNREACH",
            "ENETUNREACH",
            "ENOENT",
            "ENOTFOUND",
            "ECONNREFUSED"
          ].includes(err.code))) {
            let code = "UNKNOWN";
            if (err.code)
              code = err.code;
            process.emitWarning(`received unexpected error = ${err.message} code = ${code}`, "MetadataLookupWarning");
          }
          return false;
        }
      }
    }
    exports.isAvailable = isAvailable;
    function resetIsAvailableCache() {
      cachedIsAvailableResponse = void 0;
    }
    exports.resetIsAvailableCache = resetIsAvailableCache;
    exports.gcpResidencyCache = null;
    function getGCPResidency() {
      if (exports.gcpResidencyCache === null) {
        setGCPResidency();
      }
      return exports.gcpResidencyCache;
    }
    exports.getGCPResidency = getGCPResidency;
    function setGCPResidency(value = null) {
      exports.gcpResidencyCache = value !== null ? value : (0, gcp_residency_1.detectGCPResidency)();
    }
    exports.setGCPResidency = setGCPResidency;
    function requestTimeout() {
      return getGCPResidency() ? 0 : 3e3;
    }
    exports.requestTimeout = requestTimeout;
    __exportStar(require_gcp_residency(), exports);
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// node_modules/google-auth-library/build/src/crypto/browser/crypto.js
var require_crypto = __commonJS({
  "node_modules/google-auth-library/build/src/crypto/browser/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowserCrypto = void 0;
    var base64js = require_base64_js();
    var crypto_1 = require_crypto4();
    var BrowserCrypto = class _BrowserCrypto {
      constructor() {
        if (typeof window === "undefined" || window.crypto === void 0 || window.crypto.subtle === void 0) {
          throw new Error("SubtleCrypto not found. Make sure it's an https:// website.");
        }
      }
      async sha256DigestBase64(str) {
        const inputBuffer = new TextEncoder().encode(str);
        const outputBuffer = await window.crypto.subtle.digest("SHA-256", inputBuffer);
        return base64js.fromByteArray(new Uint8Array(outputBuffer));
      }
      randomBytesBase64(count) {
        const array = new Uint8Array(count);
        window.crypto.getRandomValues(array);
        return base64js.fromByteArray(array);
      }
      static padBase64(base64) {
        while (base64.length % 4 !== 0) {
          base64 += "=";
        }
        return base64;
      }
      async verify(pubkey, data, signature) {
        const algo = {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-256" }
        };
        const dataArray = new TextEncoder().encode(data);
        const signatureArray = base64js.toByteArray(_BrowserCrypto.padBase64(signature));
        const cryptoKey = await window.crypto.subtle.importKey("jwk", pubkey, algo, true, ["verify"]);
        const result = await window.crypto.subtle.verify(algo, cryptoKey, signatureArray, dataArray);
        return result;
      }
      async sign(privateKey, data) {
        const algo = {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-256" }
        };
        const dataArray = new TextEncoder().encode(data);
        const cryptoKey = await window.crypto.subtle.importKey("jwk", privateKey, algo, true, ["sign"]);
        const result = await window.crypto.subtle.sign(algo, cryptoKey, dataArray);
        return base64js.fromByteArray(new Uint8Array(result));
      }
      decodeBase64StringUtf8(base64) {
        const uint8array = base64js.toByteArray(_BrowserCrypto.padBase64(base64));
        const result = new TextDecoder().decode(uint8array);
        return result;
      }
      encodeBase64StringUtf8(text) {
        const uint8array = new TextEncoder().encode(text);
        const result = base64js.fromByteArray(uint8array);
        return result;
      }
      /**
       * Computes the SHA-256 hash of the provided string.
       * @param str The plain text string to hash.
       * @return A promise that resolves with the SHA-256 hash of the provided
       *   string in hexadecimal encoding.
       */
      async sha256DigestHex(str) {
        const inputBuffer = new TextEncoder().encode(str);
        const outputBuffer = await window.crypto.subtle.digest("SHA-256", inputBuffer);
        return (0, crypto_1.fromArrayBufferToHex)(outputBuffer);
      }
      /**
       * Computes the HMAC hash of a message using the provided crypto key and the
       * SHA-256 algorithm.
       * @param key The secret crypto key in utf-8 or ArrayBuffer format.
       * @param msg The plain text message.
       * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
       *   format.
       */
      async signWithHmacSha256(key, msg) {
        const rawKey = typeof key === "string" ? key : String.fromCharCode(...new Uint16Array(key));
        const enc = new TextEncoder();
        const cryptoKey = await window.crypto.subtle.importKey("raw", enc.encode(rawKey), {
          name: "HMAC",
          hash: {
            name: "SHA-256"
          }
        }, false, ["sign"]);
        return window.crypto.subtle.sign("HMAC", cryptoKey, enc.encode(msg));
      }
    };
    exports.BrowserCrypto = BrowserCrypto;
  }
});

// browser-external:crypto
var require_crypto2 = __commonJS({
  "browser-external:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/google-auth-library/build/src/crypto/node/crypto.js
var require_crypto3 = __commonJS({
  "node_modules/google-auth-library/build/src/crypto/node/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeCrypto = void 0;
    var crypto2 = require_crypto2();
    var NodeCrypto = class {
      async sha256DigestBase64(str) {
        return crypto2.createHash("sha256").update(str).digest("base64");
      }
      randomBytesBase64(count) {
        return crypto2.randomBytes(count).toString("base64");
      }
      async verify(pubkey, data, signature) {
        const verifier = crypto2.createVerify("RSA-SHA256");
        verifier.update(data);
        verifier.end();
        return verifier.verify(pubkey, signature, "base64");
      }
      async sign(privateKey, data) {
        const signer = crypto2.createSign("RSA-SHA256");
        signer.update(data);
        signer.end();
        return signer.sign(privateKey, "base64");
      }
      decodeBase64StringUtf8(base64) {
        return Buffer.from(base64, "base64").toString("utf-8");
      }
      encodeBase64StringUtf8(text) {
        return Buffer.from(text, "utf-8").toString("base64");
      }
      /**
       * Computes the SHA-256 hash of the provided string.
       * @param str The plain text string to hash.
       * @return A promise that resolves with the SHA-256 hash of the provided
       *   string in hexadecimal encoding.
       */
      async sha256DigestHex(str) {
        return crypto2.createHash("sha256").update(str).digest("hex");
      }
      /**
       * Computes the HMAC hash of a message using the provided crypto key and the
       * SHA-256 algorithm.
       * @param key The secret crypto key in utf-8 or ArrayBuffer format.
       * @param msg The plain text message.
       * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
       *   format.
       */
      async signWithHmacSha256(key, msg) {
        const cryptoKey = typeof key === "string" ? key : toBuffer(key);
        return toArrayBuffer(crypto2.createHmac("sha256", cryptoKey).update(msg).digest());
      }
    };
    exports.NodeCrypto = NodeCrypto;
    function toArrayBuffer(buffer) {
      return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    }
    function toBuffer(arrayBuffer) {
      return Buffer.from(arrayBuffer);
    }
  }
});

// node_modules/google-auth-library/build/src/crypto/crypto.js
var require_crypto4 = __commonJS({
  "node_modules/google-auth-library/build/src/crypto/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromArrayBufferToHex = exports.hasBrowserCrypto = exports.createCrypto = void 0;
    var crypto_1 = require_crypto();
    var crypto_2 = require_crypto3();
    function createCrypto() {
      if (hasBrowserCrypto()) {
        return new crypto_1.BrowserCrypto();
      }
      return new crypto_2.NodeCrypto();
    }
    exports.createCrypto = createCrypto;
    function hasBrowserCrypto() {
      return typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.subtle !== "undefined";
    }
    exports.hasBrowserCrypto = hasBrowserCrypto;
    function fromArrayBufferToHex(arrayBuffer) {
      const byteArray = Array.from(new Uint8Array(arrayBuffer));
      return byteArray.map((byte) => {
        return byte.toString(16).padStart(2, "0");
      }).join("");
    }
    exports.fromArrayBufferToHex = fromArrayBufferToHex;
  }
});

// node_modules/google-auth-library/build/src/options.js
var require_options = __commonJS({
  "node_modules/google-auth-library/build/src/options.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validate = void 0;
    function validate(options) {
      const vpairs = [
        { invalid: "uri", expected: "url" },
        { invalid: "json", expected: "data" },
        { invalid: "qs", expected: "params" }
      ];
      for (const pair of vpairs) {
        if (options[pair.invalid]) {
          const e = `'${pair.invalid}' is not a valid configuration option. Please use '${pair.expected}' instead. This library is using Axios for requests. Please see https://github.com/axios/axios to learn more about the valid request options.`;
          throw new Error(e);
        }
      }
    }
    exports.validate = validate;
  }
});

// node_modules/google-auth-library/package.json
var require_package2 = __commonJS({
  "node_modules/google-auth-library/package.json"(exports, module) {
    module.exports = {
      name: "google-auth-library",
      version: "9.10.0",
      author: "Google Inc.",
      description: "Google APIs Authentication Client Library for Node.js",
      engines: {
        node: ">=14"
      },
      main: "./build/src/index.js",
      types: "./build/src/index.d.ts",
      repository: "googleapis/google-auth-library-nodejs.git",
      keywords: [
        "google",
        "api",
        "google apis",
        "client",
        "client library"
      ],
      dependencies: {
        "base64-js": "^1.3.0",
        "ecdsa-sig-formatter": "^1.0.11",
        gaxios: "^6.1.1",
        "gcp-metadata": "^6.1.0",
        gtoken: "^7.0.0",
        jws: "^4.0.0"
      },
      devDependencies: {
        "@compodoc/compodoc": "1.1.23",
        "@types/base64-js": "^1.2.5",
        "@types/chai": "^4.1.7",
        "@types/jws": "^3.1.0",
        "@types/mocha": "^9.0.0",
        "@types/mv": "^2.1.0",
        "@types/ncp": "^2.0.1",
        "@types/node": "^20.4.2",
        "@types/sinon": "^10.0.0",
        "assert-rejects": "^1.0.0",
        c8: "^8.0.0",
        chai: "^4.2.0",
        codecov: "^3.0.2",
        execa: "^5.0.0",
        gts: "^5.0.0",
        "is-docker": "^2.0.0",
        karma: "^6.0.0",
        "karma-chrome-launcher": "^3.0.0",
        "karma-coverage": "^2.0.0",
        "karma-firefox-launcher": "^2.0.0",
        "karma-mocha": "^2.0.0",
        "karma-sourcemap-loader": "^0.4.0",
        "karma-webpack": "5.0.0",
        keypair: "^1.0.4",
        linkinator: "^4.0.0",
        mocha: "^9.2.2",
        mv: "^2.1.1",
        ncp: "^2.0.0",
        nock: "^13.0.0",
        "null-loader": "^4.0.0",
        puppeteer: "^21.0.0",
        sinon: "^15.0.0",
        "ts-loader": "^8.0.0",
        typescript: "^5.1.6",
        webpack: "^5.21.2",
        "webpack-cli": "^4.0.0"
      },
      files: [
        "build/src",
        "!build/src/**/*.map"
      ],
      scripts: {
        test: "c8 mocha build/test",
        clean: "gts clean",
        prepare: "npm run compile",
        lint: "gts check",
        compile: "tsc -p .",
        fix: "gts fix",
        pretest: "npm run compile -- --sourceMap",
        docs: "compodoc src/",
        "samples-setup": "cd samples/ && npm link ../ && npm run setup && cd ../",
        "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
        "system-test": "mocha build/system-test --timeout 60000",
        "presystem-test": "npm run compile -- --sourceMap",
        webpack: "webpack",
        "browser-test": "karma start",
        "docs-test": "linkinator docs",
        "predocs-test": "npm run docs",
        prelint: "cd samples; npm link ../; npm install",
        precompile: "gts clean"
      },
      license: "Apache-2.0"
    };
  }
});

// node_modules/google-auth-library/build/src/transporters.js
var require_transporters = __commonJS({
  "node_modules/google-auth-library/build/src/transporters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultTransporter = void 0;
    var gaxios_1 = require_src();
    var options_1 = require_options();
    var pkg = require_package2();
    var PRODUCT_NAME = "google-api-nodejs-client";
    var DefaultTransporter = class _DefaultTransporter {
      constructor() {
        this.instance = new gaxios_1.Gaxios();
      }
      /**
       * Configures request options before making a request.
       * @param opts GaxiosOptions options.
       * @return Configured options.
       */
      configure(opts = {}) {
        opts.headers = opts.headers || {};
        if (typeof window === "undefined") {
          const uaValue = opts.headers["User-Agent"];
          if (!uaValue) {
            opts.headers["User-Agent"] = _DefaultTransporter.USER_AGENT;
          } else if (!uaValue.includes(`${PRODUCT_NAME}/`)) {
            opts.headers["User-Agent"] = `${uaValue} ${_DefaultTransporter.USER_AGENT}`;
          }
          if (!opts.headers["x-goog-api-client"]) {
            const nodeVersion = process.version.replace(/^v/, "");
            opts.headers["x-goog-api-client"] = `gl-node/${nodeVersion}`;
          }
        }
        return opts;
      }
      /**
       * Makes a request using Gaxios with given options.
       * @param opts GaxiosOptions options.
       * @param callback optional callback that contains GaxiosResponse object.
       * @return GaxiosPromise, assuming no callback is passed.
       */
      request(opts) {
        opts = this.configure(opts);
        (0, options_1.validate)(opts);
        return this.instance.request(opts).catch((e) => {
          throw this.processError(e);
        });
      }
      get defaults() {
        return this.instance.defaults;
      }
      set defaults(opts) {
        this.instance.defaults = opts;
      }
      /**
       * Changes the error to include details from the body.
       */
      processError(e) {
        const res = e.response;
        const err = e;
        const body = res ? res.data : null;
        if (res && body && body.error && res.status !== 200) {
          if (typeof body.error === "string") {
            err.message = body.error;
            err.status = res.status;
          } else if (Array.isArray(body.error.errors)) {
            err.message = body.error.errors.map((err2) => err2.message).join("\n");
            err.code = body.error.code;
            err.errors = body.error.errors;
          } else {
            err.message = body.error.message;
            err.code = body.error.code;
          }
        } else if (res && res.status >= 400) {
          err.message = body;
          err.status = res.status;
        }
        return err;
      }
    };
    exports.DefaultTransporter = DefaultTransporter;
    DefaultTransporter.USER_AGENT = `${PRODUCT_NAME}/${pkg.version}`;
  }
});

// browser-external:buffer
var require_buffer = __commonJS({
  "browser-external:buffer"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "buffer" has been externalized for browser compatibility. Cannot access "buffer.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = require_buffer();
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js
var require_param_bytes_for_alg = __commonJS({
  "node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js"(exports, module) {
    "use strict";
    function getParamSize(keySize) {
      var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
      return result;
    }
    var paramBytesForAlg = {
      ES256: getParamSize(256),
      ES384: getParamSize(384),
      ES512: getParamSize(521)
    };
    function getParamBytesForAlg(alg) {
      var paramBytes = paramBytesForAlg[alg];
      if (paramBytes) {
        return paramBytes;
      }
      throw new Error('Unknown algorithm "' + alg + '"');
    }
    module.exports = getParamBytesForAlg;
  }
});

// node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js
var require_ecdsa_sig_formatter = __commonJS({
  "node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js"(exports, module) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var getParamBytesForAlg = require_param_bytes_for_alg();
    var MAX_OCTET = 128;
    var CLASS_UNIVERSAL = 0;
    var PRIMITIVE_BIT = 32;
    var TAG_SEQ = 16;
    var TAG_INT = 2;
    var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
    var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
    function base64Url(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function signatureAsBuffer(signature) {
      if (Buffer2.isBuffer(signature)) {
        return signature;
      } else if ("string" === typeof signature) {
        return Buffer2.from(signature, "base64");
      }
      throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
    }
    function derToJose(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var maxEncodedParamLength = paramBytes + 1;
      var inputLength = signature.length;
      var offset = 0;
      if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
      }
      var seqLength = signature[offset++];
      if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
      }
      if (inputLength - offset < seqLength) {
        throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
      }
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
      }
      var rLength = signature[offset++];
      if (inputLength - offset - 2 < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
      }
      if (maxEncodedParamLength < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var rOffset = offset;
      offset += rLength;
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
      }
      var sLength = signature[offset++];
      if (inputLength - offset !== sLength) {
        throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
      }
      if (maxEncodedParamLength < sLength) {
        throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var sOffset = offset;
      offset += sLength;
      if (offset !== inputLength) {
        throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
      }
      var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
      var dst = Buffer2.allocUnsafe(rPadding + rLength + sPadding + sLength);
      for (offset = 0; offset < rPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
      offset = paramBytes;
      for (var o = offset; offset < o + sPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
      dst = dst.toString("base64");
      dst = base64Url(dst);
      return dst;
    }
    function countPadding(buf, start, stop) {
      var padding = 0;
      while (start + padding < stop && buf[start + padding] === 0) {
        ++padding;
      }
      var needsSign = buf[start + padding] >= MAX_OCTET;
      if (needsSign) {
        --padding;
      }
      return padding;
    }
    function joseToDer(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var signatureBytes = signature.length;
      if (signatureBytes !== paramBytes * 2) {
        throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
      }
      var rPadding = countPadding(signature, 0, paramBytes);
      var sPadding = countPadding(signature, paramBytes, signature.length);
      var rLength = paramBytes - rPadding;
      var sLength = paramBytes - sPadding;
      var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
      var shortLength = rsBytes < MAX_OCTET;
      var dst = Buffer2.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
      var offset = 0;
      dst[offset++] = ENCODED_TAG_SEQ;
      if (shortLength) {
        dst[offset++] = rsBytes;
      } else {
        dst[offset++] = MAX_OCTET | 1;
        dst[offset++] = rsBytes & 255;
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = rLength;
      if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
      } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = sLength;
      if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
      } else {
        signature.copy(dst, offset, paramBytes + sPadding);
      }
      return dst;
    }
    module.exports = {
      derToJose,
      joseToDer
    };
  }
});

// browser-external:events
var require_events = __commonJS({
  "browser-external:events"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "events" has been externalized for browser compatibility. Cannot access "events.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/google-auth-library/build/src/util.js
var require_util2 = __commonJS({
  "node_modules/google-auth-library/build/src/util.js"(exports) {
    "use strict";
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _LRUCache_instances;
    var _LRUCache_cache;
    var _LRUCache_moveToEnd;
    var _LRUCache_evict;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LRUCache = exports.originalOrCamelOptions = exports.snakeToCamel = void 0;
    function snakeToCamel(str) {
      return str.replace(/([_][^_])/g, (match) => match.slice(1).toUpperCase());
    }
    exports.snakeToCamel = snakeToCamel;
    function originalOrCamelOptions(obj) {
      function get(key) {
        var _a;
        const o = obj || {};
        return (_a = o[key]) !== null && _a !== void 0 ? _a : o[snakeToCamel(key)];
      }
      return { get };
    }
    exports.originalOrCamelOptions = originalOrCamelOptions;
    var LRUCache = class {
      constructor(options) {
        _LRUCache_instances.add(this);
        _LRUCache_cache.set(this, /* @__PURE__ */ new Map());
        this.capacity = options.capacity;
        this.maxAge = options.maxAge;
      }
      /**
       * Add an item to the cache.
       *
       * @param key the key to upsert
       * @param value the value of the key
       */
      set(key, value) {
        __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_moveToEnd).call(this, key, value);
        __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_evict).call(this);
      }
      /**
       * Get an item from the cache.
       *
       * @param key the key to retrieve
       */
      get(key) {
        const item = __classPrivateFieldGet(this, _LRUCache_cache, "f").get(key);
        if (!item)
          return;
        __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_moveToEnd).call(this, key, item.value);
        __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_evict).call(this);
        return item.value;
      }
    };
    exports.LRUCache = LRUCache;
    _LRUCache_cache = /* @__PURE__ */ new WeakMap(), _LRUCache_instances = /* @__PURE__ */ new WeakSet(), _LRUCache_moveToEnd = function _LRUCache_moveToEnd2(key, value) {
      __classPrivateFieldGet(this, _LRUCache_cache, "f").delete(key);
      __classPrivateFieldGet(this, _LRUCache_cache, "f").set(key, {
        value,
        lastAccessed: Date.now()
      });
    }, _LRUCache_evict = function _LRUCache_evict2() {
      const cutoffDate = this.maxAge ? Date.now() - this.maxAge : 0;
      let oldestItem = __classPrivateFieldGet(this, _LRUCache_cache, "f").entries().next();
      while (!oldestItem.done && (__classPrivateFieldGet(this, _LRUCache_cache, "f").size > this.capacity || // too many
      oldestItem.value[1].lastAccessed < cutoffDate)) {
        __classPrivateFieldGet(this, _LRUCache_cache, "f").delete(oldestItem.value[0]);
        oldestItem = __classPrivateFieldGet(this, _LRUCache_cache, "f").entries().next();
      }
    };
  }
});

// node_modules/google-auth-library/build/src/auth/authclient.js
var require_authclient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/authclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuthClient = exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = exports.DEFAULT_UNIVERSE = void 0;
    var events_1 = require_events();
    var gaxios_1 = require_src();
    var transporters_1 = require_transporters();
    var util_1 = require_util2();
    exports.DEFAULT_UNIVERSE = "googleapis.com";
    exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 5 * 60 * 1e3;
    var AuthClient = class extends events_1.EventEmitter {
      constructor(opts = {}) {
        var _a, _b, _c, _d, _e;
        super();
        this.credentials = {};
        this.eagerRefreshThresholdMillis = exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS;
        this.forceRefreshOnFailure = false;
        this.universeDomain = exports.DEFAULT_UNIVERSE;
        const options = (0, util_1.originalOrCamelOptions)(opts);
        this.projectId = (_a = options.get("project_id")) !== null && _a !== void 0 ? _a : null;
        this.quotaProjectId = options.get("quota_project_id");
        this.credentials = (_b = options.get("credentials")) !== null && _b !== void 0 ? _b : {};
        this.universeDomain = (_c = options.get("universe_domain")) !== null && _c !== void 0 ? _c : exports.DEFAULT_UNIVERSE;
        this.transporter = (_d = opts.transporter) !== null && _d !== void 0 ? _d : new transporters_1.DefaultTransporter();
        if (opts.transporterOptions) {
          this.transporter.defaults = opts.transporterOptions;
        }
        if (opts.eagerRefreshThresholdMillis) {
          this.eagerRefreshThresholdMillis = opts.eagerRefreshThresholdMillis;
        }
        this.forceRefreshOnFailure = (_e = opts.forceRefreshOnFailure) !== null && _e !== void 0 ? _e : false;
      }
      /**
       * Return the {@link Gaxios `Gaxios`} instance from the {@link AuthClient.transporter}.
       *
       * @expiremental
       */
      get gaxios() {
        if (this.transporter instanceof gaxios_1.Gaxios) {
          return this.transporter;
        } else if (this.transporter instanceof transporters_1.DefaultTransporter) {
          return this.transporter.instance;
        } else if ("instance" in this.transporter && this.transporter.instance instanceof gaxios_1.Gaxios) {
          return this.transporter.instance;
        }
        return null;
      }
      /**
       * Sets the auth credentials.
       */
      setCredentials(credentials) {
        this.credentials = credentials;
      }
      /**
       * Append additional headers, e.g., x-goog-user-project, shared across the
       * classes inheriting AuthClient. This method should be used by any method
       * that overrides getRequestMetadataAsync(), which is a shared helper for
       * setting request information in both gRPC and HTTP API calls.
       *
       * @param headers object to append additional headers to.
       */
      addSharedMetadataHeaders(headers) {
        if (!headers["x-goog-user-project"] && // don't override a value the user sets.
        this.quotaProjectId) {
          headers["x-goog-user-project"] = this.quotaProjectId;
        }
        return headers;
      }
      /**
       * Retry config for Auth-related requests.
       *
       * @remarks
       *
       * This is not a part of the default {@link AuthClient.transporter transporter/gaxios}
       * config as some downstream APIs would prefer if customers explicitly enable retries,
       * such as GCS.
       */
      static get RETRY_CONFIG() {
        return {
          retry: true,
          retryConfig: {
            httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
          }
        };
      }
    };
    exports.AuthClient = AuthClient;
  }
});

// node_modules/google-auth-library/build/src/auth/loginticket.js
var require_loginticket = __commonJS({
  "node_modules/google-auth-library/build/src/auth/loginticket.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginTicket = void 0;
    var LoginTicket = class {
      /**
       * Create a simple class to extract user ID from an ID Token
       *
       * @param {string} env Envelope of the jwt
       * @param {TokenPayload} pay Payload of the jwt
       * @constructor
       */
      constructor(env, pay) {
        this.envelope = env;
        this.payload = pay;
      }
      getEnvelope() {
        return this.envelope;
      }
      getPayload() {
        return this.payload;
      }
      /**
       * Create a simple class to extract user ID from an ID Token
       *
       * @return The user ID
       */
      getUserId() {
        const payload = this.getPayload();
        if (payload && payload.sub) {
          return payload.sub;
        }
        return null;
      }
      /**
       * Returns attributes from the login ticket.  This can contain
       * various information about the user session.
       *
       * @return The envelope and payload
       */
      getAttributes() {
        return { envelope: this.getEnvelope(), payload: this.getPayload() };
      }
    };
    exports.LoginTicket = LoginTicket;
  }
});

// node_modules/google-auth-library/build/src/auth/oauth2client.js
var require_oauth2client = __commonJS({
  "node_modules/google-auth-library/build/src/auth/oauth2client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuth2Client = exports.CertificateFormat = exports.CodeChallengeMethod = void 0;
    var gaxios_1 = require_src();
    var querystring = require_querystring();
    var stream = require_stream();
    var formatEcdsa = require_ecdsa_sig_formatter();
    var crypto_1 = require_crypto4();
    var authclient_1 = require_authclient();
    var loginticket_1 = require_loginticket();
    var CodeChallengeMethod;
    (function(CodeChallengeMethod2) {
      CodeChallengeMethod2["Plain"] = "plain";
      CodeChallengeMethod2["S256"] = "S256";
    })(CodeChallengeMethod || (exports.CodeChallengeMethod = CodeChallengeMethod = {}));
    var CertificateFormat;
    (function(CertificateFormat2) {
      CertificateFormat2["PEM"] = "PEM";
      CertificateFormat2["JWK"] = "JWK";
    })(CertificateFormat || (exports.CertificateFormat = CertificateFormat = {}));
    var OAuth2Client = class _OAuth2Client extends authclient_1.AuthClient {
      constructor(optionsOrClientId, clientSecret, redirectUri) {
        const opts = optionsOrClientId && typeof optionsOrClientId === "object" ? optionsOrClientId : { clientId: optionsOrClientId, clientSecret, redirectUri };
        super(opts);
        this.certificateCache = {};
        this.certificateExpiry = null;
        this.certificateCacheFormat = CertificateFormat.PEM;
        this.refreshTokenPromises = /* @__PURE__ */ new Map();
        this._clientId = opts.clientId;
        this._clientSecret = opts.clientSecret;
        this.redirectUri = opts.redirectUri;
        this.endpoints = {
          tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo",
          oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth",
          oauth2TokenUrl: "https://oauth2.googleapis.com/token",
          oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke",
          oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs",
          oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs",
          oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key",
          ...opts.endpoints
        };
        this.issuers = opts.issuers || [
          "accounts.google.com",
          "https://accounts.google.com",
          this.universeDomain
        ];
      }
      /**
       * Generates URL for consent page landing.
       * @param opts Options.
       * @return URL to consent page.
       */
      generateAuthUrl(opts = {}) {
        if (opts.code_challenge_method && !opts.code_challenge) {
          throw new Error("If a code_challenge_method is provided, code_challenge must be included.");
        }
        opts.response_type = opts.response_type || "code";
        opts.client_id = opts.client_id || this._clientId;
        opts.redirect_uri = opts.redirect_uri || this.redirectUri;
        if (Array.isArray(opts.scope)) {
          opts.scope = opts.scope.join(" ");
        }
        const rootUrl = this.endpoints.oauth2AuthBaseUrl.toString();
        return rootUrl + "?" + querystring.stringify(opts);
      }
      generateCodeVerifier() {
        throw new Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.");
      }
      /**
       * Convenience method to automatically generate a code_verifier, and its
       * resulting SHA256. If used, this must be paired with a S256
       * code_challenge_method.
       *
       * For a full example see:
       * https://github.com/googleapis/google-auth-library-nodejs/blob/main/samples/oauth2-codeVerifier.js
       */
      async generateCodeVerifierAsync() {
        const crypto2 = (0, crypto_1.createCrypto)();
        const randomString = crypto2.randomBytesBase64(96);
        const codeVerifier = randomString.replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-");
        const unencodedCodeChallenge = await crypto2.sha256DigestBase64(codeVerifier);
        const codeChallenge = unencodedCodeChallenge.split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
        return { codeVerifier, codeChallenge };
      }
      getToken(codeOrOptions, callback) {
        const options = typeof codeOrOptions === "string" ? { code: codeOrOptions } : codeOrOptions;
        if (callback) {
          this.getTokenAsync(options).then((r) => callback(null, r.tokens, r.res), (e) => callback(e, null, e.response));
        } else {
          return this.getTokenAsync(options);
        }
      }
      async getTokenAsync(options) {
        const url = this.endpoints.oauth2TokenUrl.toString();
        const values = {
          code: options.code,
          client_id: options.client_id || this._clientId,
          client_secret: this._clientSecret,
          redirect_uri: options.redirect_uri || this.redirectUri,
          grant_type: "authorization_code",
          code_verifier: options.codeVerifier
        };
        const res = await this.transporter.request({
          ..._OAuth2Client.RETRY_CONFIG,
          method: "POST",
          url,
          data: querystring.stringify(values),
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        });
        const tokens = res.data;
        if (res.data && res.data.expires_in) {
          tokens.expiry_date = (/* @__PURE__ */ new Date()).getTime() + res.data.expires_in * 1e3;
          delete tokens.expires_in;
        }
        this.emit("tokens", tokens);
        return { tokens, res };
      }
      /**
       * Refreshes the access token.
       * @param refresh_token Existing refresh token.
       * @private
       */
      async refreshToken(refreshToken) {
        if (!refreshToken) {
          return this.refreshTokenNoCache(refreshToken);
        }
        if (this.refreshTokenPromises.has(refreshToken)) {
          return this.refreshTokenPromises.get(refreshToken);
        }
        const p = this.refreshTokenNoCache(refreshToken).then((r) => {
          this.refreshTokenPromises.delete(refreshToken);
          return r;
        }, (e) => {
          this.refreshTokenPromises.delete(refreshToken);
          throw e;
        });
        this.refreshTokenPromises.set(refreshToken, p);
        return p;
      }
      async refreshTokenNoCache(refreshToken) {
        var _a;
        if (!refreshToken) {
          throw new Error("No refresh token is set.");
        }
        const url = this.endpoints.oauth2TokenUrl.toString();
        const data = {
          refresh_token: refreshToken,
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: "refresh_token"
        };
        let res;
        try {
          res = await this.transporter.request({
            ..._OAuth2Client.RETRY_CONFIG,
            method: "POST",
            url,
            data: querystring.stringify(data),
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          });
        } catch (e) {
          if (e instanceof gaxios_1.GaxiosError && e.message === "invalid_grant" && ((_a = e.response) === null || _a === void 0 ? void 0 : _a.data) && /ReAuth/i.test(e.response.data.error_description)) {
            e.message = JSON.stringify(e.response.data);
          }
          throw e;
        }
        const tokens = res.data;
        if (res.data && res.data.expires_in) {
          tokens.expiry_date = (/* @__PURE__ */ new Date()).getTime() + res.data.expires_in * 1e3;
          delete tokens.expires_in;
        }
        this.emit("tokens", tokens);
        return { tokens, res };
      }
      refreshAccessToken(callback) {
        if (callback) {
          this.refreshAccessTokenAsync().then((r) => callback(null, r.credentials, r.res), callback);
        } else {
          return this.refreshAccessTokenAsync();
        }
      }
      async refreshAccessTokenAsync() {
        const r = await this.refreshToken(this.credentials.refresh_token);
        const tokens = r.tokens;
        tokens.refresh_token = this.credentials.refresh_token;
        this.credentials = tokens;
        return { credentials: this.credentials, res: r.res };
      }
      getAccessToken(callback) {
        if (callback) {
          this.getAccessTokenAsync().then((r) => callback(null, r.token, r.res), callback);
        } else {
          return this.getAccessTokenAsync();
        }
      }
      async getAccessTokenAsync() {
        const shouldRefresh = !this.credentials.access_token || this.isTokenExpiring();
        if (shouldRefresh) {
          if (!this.credentials.refresh_token) {
            if (this.refreshHandler) {
              const refreshedAccessToken = await this.processAndValidateRefreshHandler();
              if (refreshedAccessToken === null || refreshedAccessToken === void 0 ? void 0 : refreshedAccessToken.access_token) {
                this.setCredentials(refreshedAccessToken);
                return { token: this.credentials.access_token };
              }
            } else {
              throw new Error("No refresh token or refresh handler callback is set.");
            }
          }
          const r = await this.refreshAccessTokenAsync();
          if (!r.credentials || r.credentials && !r.credentials.access_token) {
            throw new Error("Could not refresh access token.");
          }
          return { token: r.credentials.access_token, res: r.res };
        } else {
          return { token: this.credentials.access_token };
        }
      }
      /**
       * The main authentication interface.  It takes an optional url which when
       * present is the endpoint being accessed, and returns a Promise which
       * resolves with authorization header fields.
       *
       * In OAuth2Client, the result has the form:
       * { Authorization: 'Bearer <access_token_value>' }
       * @param url The optional url being authorized
       */
      async getRequestHeaders(url) {
        const headers = (await this.getRequestMetadataAsync(url)).headers;
        return headers;
      }
      async getRequestMetadataAsync(url) {
        const thisCreds = this.credentials;
        if (!thisCreds.access_token && !thisCreds.refresh_token && !this.apiKey && !this.refreshHandler) {
          throw new Error("No access, refresh token, API key or refresh handler callback is set.");
        }
        if (thisCreds.access_token && !this.isTokenExpiring()) {
          thisCreds.token_type = thisCreds.token_type || "Bearer";
          const headers2 = {
            Authorization: thisCreds.token_type + " " + thisCreds.access_token
          };
          return { headers: this.addSharedMetadataHeaders(headers2) };
        }
        if (this.refreshHandler) {
          const refreshedAccessToken = await this.processAndValidateRefreshHandler();
          if (refreshedAccessToken === null || refreshedAccessToken === void 0 ? void 0 : refreshedAccessToken.access_token) {
            this.setCredentials(refreshedAccessToken);
            const headers2 = {
              Authorization: "Bearer " + this.credentials.access_token
            };
            return { headers: this.addSharedMetadataHeaders(headers2) };
          }
        }
        if (this.apiKey) {
          return { headers: { "X-Goog-Api-Key": this.apiKey } };
        }
        let r = null;
        let tokens = null;
        try {
          r = await this.refreshToken(thisCreds.refresh_token);
          tokens = r.tokens;
        } catch (err) {
          const e = err;
          if (e.response && (e.response.status === 403 || e.response.status === 404)) {
            e.message = `Could not refresh access token: ${e.message}`;
          }
          throw e;
        }
        const credentials = this.credentials;
        credentials.token_type = credentials.token_type || "Bearer";
        tokens.refresh_token = credentials.refresh_token;
        this.credentials = tokens;
        const headers = {
          Authorization: credentials.token_type + " " + tokens.access_token
        };
        return { headers: this.addSharedMetadataHeaders(headers), res: r.res };
      }
      /**
       * Generates an URL to revoke the given token.
       * @param token The existing token to be revoked.
       *
       * @deprecated use instance method {@link OAuth2Client.getRevokeTokenURL}
       */
      static getRevokeTokenUrl(token) {
        return new _OAuth2Client().getRevokeTokenURL(token).toString();
      }
      /**
       * Generates a URL to revoke the given token.
       *
       * @param token The existing token to be revoked.
       */
      getRevokeTokenURL(token) {
        const url = new URL(this.endpoints.oauth2RevokeUrl);
        url.searchParams.append("token", token);
        return url;
      }
      revokeToken(token, callback) {
        const opts = {
          ..._OAuth2Client.RETRY_CONFIG,
          url: this.getRevokeTokenURL(token).toString(),
          method: "POST"
        };
        if (callback) {
          this.transporter.request(opts).then((r) => callback(null, r), callback);
        } else {
          return this.transporter.request(opts);
        }
      }
      revokeCredentials(callback) {
        if (callback) {
          this.revokeCredentialsAsync().then((res) => callback(null, res), callback);
        } else {
          return this.revokeCredentialsAsync();
        }
      }
      async revokeCredentialsAsync() {
        const token = this.credentials.access_token;
        this.credentials = {};
        if (token) {
          return this.revokeToken(token);
        } else {
          throw new Error("No access token to revoke.");
        }
      }
      request(opts, callback) {
        if (callback) {
          this.requestAsync(opts).then((r) => callback(null, r), (e) => {
            return callback(e, e.response);
          });
        } else {
          return this.requestAsync(opts);
        }
      }
      async requestAsync(opts, reAuthRetried = false) {
        let r2;
        try {
          const r = await this.getRequestMetadataAsync(opts.url);
          opts.headers = opts.headers || {};
          if (r.headers && r.headers["x-goog-user-project"]) {
            opts.headers["x-goog-user-project"] = r.headers["x-goog-user-project"];
          }
          if (r.headers && r.headers.Authorization) {
            opts.headers.Authorization = r.headers.Authorization;
          }
          if (this.apiKey) {
            opts.headers["X-Goog-Api-Key"] = this.apiKey;
          }
          r2 = await this.transporter.request(opts);
        } catch (e) {
          const res = e.response;
          if (res) {
            const statusCode = res.status;
            const mayRequireRefresh = this.credentials && this.credentials.access_token && this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure);
            const mayRequireRefreshWithNoRefreshToken = this.credentials && this.credentials.access_token && !this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure) && this.refreshHandler;
            const isReadableStream = res.config.data instanceof stream.Readable;
            const isAuthErr = statusCode === 401 || statusCode === 403;
            if (!reAuthRetried && isAuthErr && !isReadableStream && mayRequireRefresh) {
              await this.refreshAccessTokenAsync();
              return this.requestAsync(opts, true);
            } else if (!reAuthRetried && isAuthErr && !isReadableStream && mayRequireRefreshWithNoRefreshToken) {
              const refreshedAccessToken = await this.processAndValidateRefreshHandler();
              if (refreshedAccessToken === null || refreshedAccessToken === void 0 ? void 0 : refreshedAccessToken.access_token) {
                this.setCredentials(refreshedAccessToken);
              }
              return this.requestAsync(opts, true);
            }
          }
          throw e;
        }
        return r2;
      }
      verifyIdToken(options, callback) {
        if (callback && typeof callback !== "function") {
          throw new Error("This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.");
        }
        if (callback) {
          this.verifyIdTokenAsync(options).then((r) => callback(null, r), callback);
        } else {
          return this.verifyIdTokenAsync(options);
        }
      }
      async verifyIdTokenAsync(options) {
        if (!options.idToken) {
          throw new Error("The verifyIdToken method requires an ID Token");
        }
        const response = await this.getFederatedSignonCertsAsync();
        const login = await this.verifySignedJwtWithCertsAsync(options.idToken, response.certs, options.audience, this.issuers, options.maxExpiry);
        return login;
      }
      /**
       * Obtains information about the provisioned access token.  Especially useful
       * if you want to check the scopes that were provisioned to a given token.
       *
       * @param accessToken Required.  The Access Token for which you want to get
       * user info.
       */
      async getTokenInfo(accessToken) {
        const { data } = await this.transporter.request({
          ..._OAuth2Client.RETRY_CONFIG,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${accessToken}`
          },
          url: this.endpoints.tokenInfoUrl.toString()
        });
        const info = Object.assign({
          expiry_date: (/* @__PURE__ */ new Date()).getTime() + data.expires_in * 1e3,
          scopes: data.scope.split(" ")
        }, data);
        delete info.expires_in;
        delete info.scope;
        return info;
      }
      getFederatedSignonCerts(callback) {
        if (callback) {
          this.getFederatedSignonCertsAsync().then((r) => callback(null, r.certs, r.res), callback);
        } else {
          return this.getFederatedSignonCertsAsync();
        }
      }
      async getFederatedSignonCertsAsync() {
        const nowTime = (/* @__PURE__ */ new Date()).getTime();
        const format = (0, crypto_1.hasBrowserCrypto)() ? CertificateFormat.JWK : CertificateFormat.PEM;
        if (this.certificateExpiry && nowTime < this.certificateExpiry.getTime() && this.certificateCacheFormat === format) {
          return { certs: this.certificateCache, format };
        }
        let res;
        let url;
        switch (format) {
          case CertificateFormat.PEM:
            url = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
            break;
          case CertificateFormat.JWK:
            url = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
            break;
          default:
            throw new Error(`Unsupported certificate format ${format}`);
        }
        try {
          res = await this.transporter.request({
            ..._OAuth2Client.RETRY_CONFIG,
            url
          });
        } catch (e) {
          if (e instanceof Error) {
            e.message = `Failed to retrieve verification certificates: ${e.message}`;
          }
          throw e;
        }
        const cacheControl = res ? res.headers["cache-control"] : void 0;
        let cacheAge = -1;
        if (cacheControl) {
          const pattern = new RegExp("max-age=([0-9]*)");
          const regexResult = pattern.exec(cacheControl);
          if (regexResult && regexResult.length === 2) {
            cacheAge = Number(regexResult[1]) * 1e3;
          }
        }
        let certificates = {};
        switch (format) {
          case CertificateFormat.PEM:
            certificates = res.data;
            break;
          case CertificateFormat.JWK:
            for (const key of res.data.keys) {
              certificates[key.kid] = key;
            }
            break;
          default:
            throw new Error(`Unsupported certificate format ${format}`);
        }
        const now = /* @__PURE__ */ new Date();
        this.certificateExpiry = cacheAge === -1 ? null : new Date(now.getTime() + cacheAge);
        this.certificateCache = certificates;
        this.certificateCacheFormat = format;
        return { certs: certificates, format, res };
      }
      getIapPublicKeys(callback) {
        if (callback) {
          this.getIapPublicKeysAsync().then((r) => callback(null, r.pubkeys, r.res), callback);
        } else {
          return this.getIapPublicKeysAsync();
        }
      }
      async getIapPublicKeysAsync() {
        let res;
        const url = this.endpoints.oauth2IapPublicKeyUrl.toString();
        try {
          res = await this.transporter.request({
            ..._OAuth2Client.RETRY_CONFIG,
            url
          });
        } catch (e) {
          if (e instanceof Error) {
            e.message = `Failed to retrieve verification certificates: ${e.message}`;
          }
          throw e;
        }
        return { pubkeys: res.data, res };
      }
      verifySignedJwtWithCerts() {
        throw new Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.");
      }
      /**
       * Verify the id token is signed with the correct certificate
       * and is from the correct audience.
       * @param jwt The jwt to verify (The ID Token in this case).
       * @param certs The array of certs to test the jwt against.
       * @param requiredAudience The audience to test the jwt against.
       * @param issuers The allowed issuers of the jwt (Optional).
       * @param maxExpiry The max expiry the certificate can be (Optional).
       * @return Returns a promise resolving to LoginTicket on verification.
       */
      async verifySignedJwtWithCertsAsync(jwt, certs, requiredAudience, issuers, maxExpiry) {
        const crypto2 = (0, crypto_1.createCrypto)();
        if (!maxExpiry) {
          maxExpiry = _OAuth2Client.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
        }
        const segments = jwt.split(".");
        if (segments.length !== 3) {
          throw new Error("Wrong number of segments in token: " + jwt);
        }
        const signed = segments[0] + "." + segments[1];
        let signature = segments[2];
        let envelope;
        let payload;
        try {
          envelope = JSON.parse(crypto2.decodeBase64StringUtf8(segments[0]));
        } catch (err) {
          if (err instanceof Error) {
            err.message = `Can't parse token envelope: ${segments[0]}': ${err.message}`;
          }
          throw err;
        }
        if (!envelope) {
          throw new Error("Can't parse token envelope: " + segments[0]);
        }
        try {
          payload = JSON.parse(crypto2.decodeBase64StringUtf8(segments[1]));
        } catch (err) {
          if (err instanceof Error) {
            err.message = `Can't parse token payload '${segments[0]}`;
          }
          throw err;
        }
        if (!payload) {
          throw new Error("Can't parse token payload: " + segments[1]);
        }
        if (!Object.prototype.hasOwnProperty.call(certs, envelope.kid)) {
          throw new Error("No pem found for envelope: " + JSON.stringify(envelope));
        }
        const cert = certs[envelope.kid];
        if (envelope.alg === "ES256") {
          signature = formatEcdsa.joseToDer(signature, "ES256").toString("base64");
        }
        const verified = await crypto2.verify(cert, signed, signature);
        if (!verified) {
          throw new Error("Invalid token signature: " + jwt);
        }
        if (!payload.iat) {
          throw new Error("No issue time in token: " + JSON.stringify(payload));
        }
        if (!payload.exp) {
          throw new Error("No expiration time in token: " + JSON.stringify(payload));
        }
        const iat = Number(payload.iat);
        if (isNaN(iat))
          throw new Error("iat field using invalid format");
        const exp = Number(payload.exp);
        if (isNaN(exp))
          throw new Error("exp field using invalid format");
        const now = (/* @__PURE__ */ new Date()).getTime() / 1e3;
        if (exp >= now + maxExpiry) {
          throw new Error("Expiration time too far in future: " + JSON.stringify(payload));
        }
        const earliest = iat - _OAuth2Client.CLOCK_SKEW_SECS_;
        const latest = exp + _OAuth2Client.CLOCK_SKEW_SECS_;
        if (now < earliest) {
          throw new Error("Token used too early, " + now + " < " + earliest + ": " + JSON.stringify(payload));
        }
        if (now > latest) {
          throw new Error("Token used too late, " + now + " > " + latest + ": " + JSON.stringify(payload));
        }
        if (issuers && issuers.indexOf(payload.iss) < 0) {
          throw new Error("Invalid issuer, expected one of [" + issuers + "], but got " + payload.iss);
        }
        if (typeof requiredAudience !== "undefined" && requiredAudience !== null) {
          const aud = payload.aud;
          let audVerified = false;
          if (requiredAudience.constructor === Array) {
            audVerified = requiredAudience.indexOf(aud) > -1;
          } else {
            audVerified = aud === requiredAudience;
          }
          if (!audVerified) {
            throw new Error("Wrong recipient, payload audience != requiredAudience");
          }
        }
        return new loginticket_1.LoginTicket(envelope, payload);
      }
      /**
       * Returns a promise that resolves with AccessTokenResponse type if
       * refreshHandler is defined.
       * If not, nothing is returned.
       */
      async processAndValidateRefreshHandler() {
        if (this.refreshHandler) {
          const accessTokenResponse = await this.refreshHandler();
          if (!accessTokenResponse.access_token) {
            throw new Error("No access token is returned by the refreshHandler callback.");
          }
          return accessTokenResponse;
        }
        return;
      }
      /**
       * Returns true if a token is expired or will expire within
       * eagerRefreshThresholdMillismilliseconds.
       * If there is no expiry time, assumes the token is not expired or expiring.
       */
      isTokenExpiring() {
        const expiryDate = this.credentials.expiry_date;
        return expiryDate ? expiryDate <= (/* @__PURE__ */ new Date()).getTime() + this.eagerRefreshThresholdMillis : false;
      }
    };
    exports.OAuth2Client = OAuth2Client;
    OAuth2Client.GOOGLE_TOKEN_INFO_URL = "https://oauth2.googleapis.com/tokeninfo";
    OAuth2Client.CLOCK_SKEW_SECS_ = 300;
    OAuth2Client.DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400;
  }
});

// node_modules/google-auth-library/build/src/auth/computeclient.js
var require_computeclient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/computeclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Compute = void 0;
    var gaxios_1 = require_src();
    var gcpMetadata = require_src2();
    var oauth2client_1 = require_oauth2client();
    var Compute = class extends oauth2client_1.OAuth2Client {
      /**
       * Google Compute Engine service account credentials.
       *
       * Retrieve access token from the metadata server.
       * See: https://cloud.google.com/compute/docs/access/authenticate-workloads#applications
       */
      constructor(options = {}) {
        super(options);
        this.credentials = { expiry_date: 1, refresh_token: "compute-placeholder" };
        this.serviceAccountEmail = options.serviceAccountEmail || "default";
        this.scopes = Array.isArray(options.scopes) ? options.scopes : options.scopes ? [options.scopes] : [];
      }
      /**
       * Refreshes the access token.
       * @param refreshToken Unused parameter
       */
      async refreshTokenNoCache(refreshToken) {
        const tokenPath = `service-accounts/${this.serviceAccountEmail}/token`;
        let data;
        try {
          const instanceOptions = {
            property: tokenPath
          };
          if (this.scopes.length > 0) {
            instanceOptions.params = {
              scopes: this.scopes.join(",")
            };
          }
          data = await gcpMetadata.instance(instanceOptions);
        } catch (e) {
          if (e instanceof gaxios_1.GaxiosError) {
            e.message = `Could not refresh access token: ${e.message}`;
            this.wrapError(e);
          }
          throw e;
        }
        const tokens = data;
        if (data && data.expires_in) {
          tokens.expiry_date = (/* @__PURE__ */ new Date()).getTime() + data.expires_in * 1e3;
          delete tokens.expires_in;
        }
        this.emit("tokens", tokens);
        return { tokens, res: null };
      }
      /**
       * Fetches an ID token.
       * @param targetAudience the audience for the fetched ID token.
       */
      async fetchIdToken(targetAudience) {
        const idTokenPath = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${targetAudience}`;
        let idToken;
        try {
          const instanceOptions = {
            property: idTokenPath
          };
          idToken = await gcpMetadata.instance(instanceOptions);
        } catch (e) {
          if (e instanceof Error) {
            e.message = `Could not fetch ID token: ${e.message}`;
          }
          throw e;
        }
        return idToken;
      }
      wrapError(e) {
        const res = e.response;
        if (res && res.status) {
          e.status = res.status;
          if (res.status === 403) {
            e.message = "A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: " + e.message;
          } else if (res.status === 404) {
            e.message = "A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: " + e.message;
          }
        }
      }
    };
    exports.Compute = Compute;
  }
});

// node_modules/google-auth-library/build/src/auth/idtokenclient.js
var require_idtokenclient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/idtokenclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IdTokenClient = void 0;
    var oauth2client_1 = require_oauth2client();
    var IdTokenClient = class extends oauth2client_1.OAuth2Client {
      /**
       * Google ID Token client
       *
       * Retrieve ID token from the metadata server.
       * See: https://cloud.google.com/docs/authentication/get-id-token#metadata-server
       */
      constructor(options) {
        super(options);
        this.targetAudience = options.targetAudience;
        this.idTokenProvider = options.idTokenProvider;
      }
      async getRequestMetadataAsync(url) {
        if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
          const idToken = await this.idTokenProvider.fetchIdToken(this.targetAudience);
          this.credentials = {
            id_token: idToken,
            expiry_date: this.getIdTokenExpiryDate(idToken)
          };
        }
        const headers = {
          Authorization: "Bearer " + this.credentials.id_token
        };
        return { headers };
      }
      getIdTokenExpiryDate(idToken) {
        const payloadB64 = idToken.split(".")[1];
        if (payloadB64) {
          const payload = JSON.parse(Buffer.from(payloadB64, "base64").toString("ascii"));
          return payload.exp * 1e3;
        }
      }
    };
    exports.IdTokenClient = IdTokenClient;
  }
});

// node_modules/google-auth-library/build/src/auth/envDetect.js
var require_envDetect = __commonJS({
  "node_modules/google-auth-library/build/src/auth/envDetect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEnv = exports.clear = exports.GCPEnv = void 0;
    var gcpMetadata = require_src2();
    var GCPEnv;
    (function(GCPEnv2) {
      GCPEnv2["APP_ENGINE"] = "APP_ENGINE";
      GCPEnv2["KUBERNETES_ENGINE"] = "KUBERNETES_ENGINE";
      GCPEnv2["CLOUD_FUNCTIONS"] = "CLOUD_FUNCTIONS";
      GCPEnv2["COMPUTE_ENGINE"] = "COMPUTE_ENGINE";
      GCPEnv2["CLOUD_RUN"] = "CLOUD_RUN";
      GCPEnv2["NONE"] = "NONE";
    })(GCPEnv || (exports.GCPEnv = GCPEnv = {}));
    var envPromise;
    function clear() {
      envPromise = void 0;
    }
    exports.clear = clear;
    async function getEnv() {
      if (envPromise) {
        return envPromise;
      }
      envPromise = getEnvMemoized();
      return envPromise;
    }
    exports.getEnv = getEnv;
    async function getEnvMemoized() {
      let env = GCPEnv.NONE;
      if (isAppEngine()) {
        env = GCPEnv.APP_ENGINE;
      } else if (isCloudFunction()) {
        env = GCPEnv.CLOUD_FUNCTIONS;
      } else if (await isComputeEngine()) {
        if (await isKubernetesEngine()) {
          env = GCPEnv.KUBERNETES_ENGINE;
        } else if (isCloudRun()) {
          env = GCPEnv.CLOUD_RUN;
        } else {
          env = GCPEnv.COMPUTE_ENGINE;
        }
      } else {
        env = GCPEnv.NONE;
      }
      return env;
    }
    function isAppEngine() {
      return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
    }
    function isCloudFunction() {
      return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
    }
    function isCloudRun() {
      return !!process.env.K_CONFIGURATION;
    }
    async function isKubernetesEngine() {
      try {
        await gcpMetadata.instance("attributes/cluster-name");
        return true;
      } catch (e) {
        return false;
      }
    }
    async function isComputeEngine() {
      return gcpMetadata.isAvailable();
    }
  }
});

// browser-external:util
var require_util3 = __commonJS({
  "browser-external:util"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "util" has been externalized for browser compatibility. Cannot access "util.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/jws/lib/data-stream.js
var require_data_stream = __commonJS({
  "node_modules/jws/lib/data-stream.js"(exports, module) {
    var Buffer2 = require_safe_buffer().Buffer;
    var Stream = require_stream();
    var util = require_util3();
    function DataStream(data) {
      this.buffer = null;
      this.writable = true;
      this.readable = true;
      if (!data) {
        this.buffer = Buffer2.alloc(0);
        return this;
      }
      if (typeof data.pipe === "function") {
        this.buffer = Buffer2.alloc(0);
        data.pipe(this);
        return this;
      }
      if (data.length || typeof data === "object") {
        this.buffer = data;
        this.writable = false;
        process.nextTick((function() {
          this.emit("end", data);
          this.readable = false;
          this.emit("close");
        }).bind(this));
        return this;
      }
      throw new TypeError("Unexpected data type (" + typeof data + ")");
    }
    util.inherits(DataStream, Stream);
    DataStream.prototype.write = function write(data) {
      this.buffer = Buffer2.concat([this.buffer, Buffer2.from(data)]);
      this.emit("data", data);
    };
    DataStream.prototype.end = function end(data) {
      if (data)
        this.write(data);
      this.emit("end", data);
      this.emit("close");
      this.writable = false;
      this.readable = false;
    };
    module.exports = DataStream;
  }
});

// node_modules/buffer-equal-constant-time/index.js
var require_buffer_equal_constant_time = __commonJS({
  "node_modules/buffer-equal-constant-time/index.js"(exports, module) {
    "use strict";
    var Buffer2 = require_buffer().Buffer;
    var SlowBuffer = require_buffer().SlowBuffer;
    module.exports = bufferEq;
    function bufferEq(a, b) {
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        return false;
      }
      if (a.length !== b.length) {
        return false;
      }
      var c = 0;
      for (var i = 0; i < a.length; i++) {
        c |= a[i] ^ b[i];
      }
      return c === 0;
    }
    bufferEq.install = function() {
      Buffer2.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
        return bufferEq(this, that);
      };
    };
    var origBufEqual = Buffer2.prototype.equal;
    var origSlowBufEqual = SlowBuffer.prototype.equal;
    bufferEq.restore = function() {
      Buffer2.prototype.equal = origBufEqual;
      SlowBuffer.prototype.equal = origSlowBufEqual;
    };
  }
});

// node_modules/jwa/index.js
var require_jwa = __commonJS({
  "node_modules/jwa/index.js"(exports, module) {
    var bufferEqual = require_buffer_equal_constant_time();
    var Buffer2 = require_safe_buffer().Buffer;
    var crypto2 = require_crypto2();
    var formatEcdsa = require_ecdsa_sig_formatter();
    var util = require_util3();
    var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
    var MSG_INVALID_SECRET = "secret must be a string or buffer";
    var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
    var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
    var supportsKeyObjects = typeof crypto2.createPublicKey === "function";
    if (supportsKeyObjects) {
      MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
      MSG_INVALID_SECRET += "or a KeyObject";
    }
    function checkIsPublicKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.type !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.asymmetricKeyType !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
    }
    function checkIsPrivateKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (typeof key === "object") {
        return;
      }
      throw typeError(MSG_INVALID_SIGNER_KEY);
    }
    function checkIsSecretKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return key;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (key.type !== "secret") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_SECRET);
      }
    }
    function fromBase64(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function toBase64(base64url) {
      base64url = base64url.toString();
      var padding = 4 - base64url.length % 4;
      if (padding !== 4) {
        for (var i = 0; i < padding; ++i) {
          base64url += "=";
        }
      }
      return base64url.replace(/\-/g, "+").replace(/_/g, "/");
    }
    function typeError(template) {
      var args = [].slice.call(arguments, 1);
      var errMsg = util.format.bind(util, template).apply(null, args);
      return new TypeError(errMsg);
    }
    function bufferOrString(obj) {
      return Buffer2.isBuffer(obj) || typeof obj === "string";
    }
    function normalizeInput(thing) {
      if (!bufferOrString(thing))
        thing = JSON.stringify(thing);
      return thing;
    }
    function createHmacSigner(bits) {
      return function sign(thing, secret) {
        checkIsSecretKey(secret);
        thing = normalizeInput(thing);
        var hmac = crypto2.createHmac("sha" + bits, secret);
        var sig = (hmac.update(thing), hmac.digest("base64"));
        return fromBase64(sig);
      };
    }
    function createHmacVerifier(bits) {
      return function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return bufferEqual(Buffer2.from(signature), Buffer2.from(computedSig));
      };
    }
    function createKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto2.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
        return fromBase64(sig);
      };
    }
    function createKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto2.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, "base64");
      };
    }
    function createPSSKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto2.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign({
          key: privateKey,
          padding: crypto2.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto2.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
        return fromBase64(sig);
      };
    }
    function createPSSKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto2.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify({
          key: publicKey,
          padding: crypto2.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto2.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, "base64");
      };
    }
    function createECDSASigner(bits) {
      var inner = createKeySigner(bits);
      return function sign() {
        var signature = inner.apply(null, arguments);
        signature = formatEcdsa.derToJose(signature, "ES" + bits);
        return signature;
      };
    }
    function createECDSAVerifer(bits) {
      var inner = createKeyVerifier(bits);
      return function verify(thing, signature, publicKey) {
        signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
        var result = inner(thing, signature, publicKey);
        return result;
      };
    }
    function createNoneSigner() {
      return function sign() {
        return "";
      };
    }
    function createNoneVerifier() {
      return function verify(thing, signature) {
        return signature === "";
      };
    }
    module.exports = function jwa(algorithm) {
      var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
      };
      var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
      };
      var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
      if (!match)
        throw typeError(MSG_INVALID_ALGORITHM, algorithm);
      var algo = (match[1] || match[3]).toLowerCase();
      var bits = match[2];
      return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
      };
    };
  }
});

// node_modules/jws/lib/tostring.js
var require_tostring = __commonJS({
  "node_modules/jws/lib/tostring.js"(exports, module) {
    var Buffer2 = require_buffer().Buffer;
    module.exports = function toString(obj) {
      if (typeof obj === "string")
        return obj;
      if (typeof obj === "number" || Buffer2.isBuffer(obj))
        return obj.toString();
      return JSON.stringify(obj);
    };
  }
});

// node_modules/jws/lib/sign-stream.js
var require_sign_stream = __commonJS({
  "node_modules/jws/lib/sign-stream.js"(exports, module) {
    var Buffer2 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = require_stream();
    var toString = require_tostring();
    var util = require_util3();
    function base64url(string, encoding) {
      return Buffer2.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function jwsSecuredInput(header, payload, encoding) {
      encoding = encoding || "utf8";
      var encodedHeader = base64url(toString(header), "binary");
      var encodedPayload = base64url(toString(payload), encoding);
      return util.format("%s.%s", encodedHeader, encodedPayload);
    }
    function jwsSign(opts) {
      var header = opts.header;
      var payload = opts.payload;
      var secretOrKey = opts.secret || opts.privateKey;
      var encoding = opts.encoding;
      var algo = jwa(header.alg);
      var securedInput = jwsSecuredInput(header, payload, encoding);
      var signature = algo.sign(securedInput, secretOrKey);
      return util.format("%s.%s", securedInput, signature);
    }
    function SignStream(opts) {
      var secret = opts.secret || opts.privateKey || opts.key;
      var secretStream = new DataStream(secret);
      this.readable = true;
      this.header = opts.header;
      this.encoding = opts.encoding;
      this.secret = this.privateKey = this.key = secretStream;
      this.payload = new DataStream(opts.payload);
      this.secret.once("close", (function() {
        if (!this.payload.writable && this.readable)
          this.sign();
      }).bind(this));
      this.payload.once("close", (function() {
        if (!this.secret.writable && this.readable)
          this.sign();
      }).bind(this));
    }
    util.inherits(SignStream, Stream);
    SignStream.prototype.sign = function sign() {
      try {
        var signature = jwsSign({
          header: this.header,
          payload: this.payload.buffer,
          secret: this.secret.buffer,
          encoding: this.encoding
        });
        this.emit("done", signature);
        this.emit("data", signature);
        this.emit("end");
        this.readable = false;
        return signature;
      } catch (e) {
        this.readable = false;
        this.emit("error", e);
        this.emit("close");
      }
    };
    SignStream.sign = jwsSign;
    module.exports = SignStream;
  }
});

// node_modules/jws/lib/verify-stream.js
var require_verify_stream = __commonJS({
  "node_modules/jws/lib/verify-stream.js"(exports, module) {
    var Buffer2 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = require_stream();
    var toString = require_tostring();
    var util = require_util3();
    var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
    function isObject(thing) {
      return Object.prototype.toString.call(thing) === "[object Object]";
    }
    function safeJsonParse(thing) {
      if (isObject(thing))
        return thing;
      try {
        return JSON.parse(thing);
      } catch (e) {
        return void 0;
      }
    }
    function headerFromJWS(jwsSig) {
      var encodedHeader = jwsSig.split(".", 1)[0];
      return safeJsonParse(Buffer2.from(encodedHeader, "base64").toString("binary"));
    }
    function securedInputFromJWS(jwsSig) {
      return jwsSig.split(".", 2).join(".");
    }
    function signatureFromJWS(jwsSig) {
      return jwsSig.split(".")[2];
    }
    function payloadFromJWS(jwsSig, encoding) {
      encoding = encoding || "utf8";
      var payload = jwsSig.split(".")[1];
      return Buffer2.from(payload, "base64").toString(encoding);
    }
    function isValidJws(string) {
      return JWS_REGEX.test(string) && !!headerFromJWS(string);
    }
    function jwsVerify(jwsSig, algorithm, secretOrKey) {
      if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
      }
      jwsSig = toString(jwsSig);
      var signature = signatureFromJWS(jwsSig);
      var securedInput = securedInputFromJWS(jwsSig);
      var algo = jwa(algorithm);
      return algo.verify(securedInput, signature, secretOrKey);
    }
    function jwsDecode(jwsSig, opts) {
      opts = opts || {};
      jwsSig = toString(jwsSig);
      if (!isValidJws(jwsSig))
        return null;
      var header = headerFromJWS(jwsSig);
      if (!header)
        return null;
      var payload = payloadFromJWS(jwsSig);
      if (header.typ === "JWT" || opts.json)
        payload = JSON.parse(payload, opts.encoding);
      return {
        header,
        payload,
        signature: signatureFromJWS(jwsSig)
      };
    }
    function VerifyStream(opts) {
      opts = opts || {};
      var secretOrKey = opts.secret || opts.publicKey || opts.key;
      var secretStream = new DataStream(secretOrKey);
      this.readable = true;
      this.algorithm = opts.algorithm;
      this.encoding = opts.encoding;
      this.secret = this.publicKey = this.key = secretStream;
      this.signature = new DataStream(opts.signature);
      this.secret.once("close", (function() {
        if (!this.signature.writable && this.readable)
          this.verify();
      }).bind(this));
      this.signature.once("close", (function() {
        if (!this.secret.writable && this.readable)
          this.verify();
      }).bind(this));
    }
    util.inherits(VerifyStream, Stream);
    VerifyStream.prototype.verify = function verify() {
      try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit("done", valid, obj);
        this.emit("data", valid);
        this.emit("end");
        this.readable = false;
        return valid;
      } catch (e) {
        this.readable = false;
        this.emit("error", e);
        this.emit("close");
      }
    };
    VerifyStream.decode = jwsDecode;
    VerifyStream.isValid = isValidJws;
    VerifyStream.verify = jwsVerify;
    module.exports = VerifyStream;
  }
});

// node_modules/jws/index.js
var require_jws = __commonJS({
  "node_modules/jws/index.js"(exports) {
    var SignStream = require_sign_stream();
    var VerifyStream = require_verify_stream();
    var ALGORITHMS = [
      "HS256",
      "HS384",
      "HS512",
      "RS256",
      "RS384",
      "RS512",
      "PS256",
      "PS384",
      "PS512",
      "ES256",
      "ES384",
      "ES512"
    ];
    exports.ALGORITHMS = ALGORITHMS;
    exports.sign = SignStream.sign;
    exports.verify = VerifyStream.verify;
    exports.decode = VerifyStream.decode;
    exports.isValid = VerifyStream.isValid;
    exports.createSign = function createSign(opts) {
      return new SignStream(opts);
    };
    exports.createVerify = function createVerify(opts) {
      return new VerifyStream(opts);
    };
  }
});

// node_modules/gtoken/build/src/index.js
var require_src3 = __commonJS({
  "node_modules/gtoken/build/src/index.js"(exports) {
    "use strict";
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _GoogleToken_instances;
    var _GoogleToken_inFlightRequest;
    var _GoogleToken_getTokenAsync;
    var _GoogleToken_getTokenAsyncInner;
    var _GoogleToken_ensureEmail;
    var _GoogleToken_revokeTokenAsync;
    var _GoogleToken_configure;
    var _GoogleToken_requestToken;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GoogleToken = void 0;
    var fs = require_fs();
    var gaxios_1 = require_src();
    var jws = require_jws();
    var path = require_path();
    var util_1 = require_util3();
    var readFile = fs.readFile ? (0, util_1.promisify)(fs.readFile) : async () => {
      throw new ErrorWithCode("use key rather than keyFile.", "MISSING_CREDENTIALS");
    };
    var GOOGLE_TOKEN_URL = "https://www.googleapis.com/oauth2/v4/token";
    var GOOGLE_REVOKE_TOKEN_URL = "https://accounts.google.com/o/oauth2/revoke?token=";
    var ErrorWithCode = class extends Error {
      constructor(message, code) {
        super(message);
        this.code = code;
      }
    };
    var GoogleToken = class {
      get accessToken() {
        return this.rawToken ? this.rawToken.access_token : void 0;
      }
      get idToken() {
        return this.rawToken ? this.rawToken.id_token : void 0;
      }
      get tokenType() {
        return this.rawToken ? this.rawToken.token_type : void 0;
      }
      get refreshToken() {
        return this.rawToken ? this.rawToken.refresh_token : void 0;
      }
      /**
       * Create a GoogleToken.
       *
       * @param options  Configuration object.
       */
      constructor(options) {
        _GoogleToken_instances.add(this);
        this.transporter = {
          request: (opts) => (0, gaxios_1.request)(opts)
        };
        _GoogleToken_inFlightRequest.set(this, void 0);
        __classPrivateFieldGet(this, _GoogleToken_instances, "m", _GoogleToken_configure).call(this, options);
      }
      /**
       * Returns whether the token has expired.
       *
       * @return true if the token has expired, false otherwise.
       */
      hasExpired() {
        const now = (/* @__PURE__ */ new Date()).getTime();
        if (this.rawToken && this.expiresAt) {
          return now >= this.expiresAt;
        } else {
          return true;
        }
      }
      /**
       * Returns whether the token will expire within eagerRefreshThresholdMillis
       *
       * @return true if the token will be expired within eagerRefreshThresholdMillis, false otherwise.
       */
      isTokenExpiring() {
        var _a;
        const now = (/* @__PURE__ */ new Date()).getTime();
        const eagerRefreshThresholdMillis = (_a = this.eagerRefreshThresholdMillis) !== null && _a !== void 0 ? _a : 0;
        if (this.rawToken && this.expiresAt) {
          return this.expiresAt <= now + eagerRefreshThresholdMillis;
        } else {
          return true;
        }
      }
      getToken(callback, opts = {}) {
        if (typeof callback === "object") {
          opts = callback;
          callback = void 0;
        }
        opts = Object.assign({
          forceRefresh: false
        }, opts);
        if (callback) {
          const cb = callback;
          __classPrivateFieldGet(this, _GoogleToken_instances, "m", _GoogleToken_getTokenAsync).call(this, opts).then((t) => cb(null, t), callback);
          return;
        }
        return __classPrivateFieldGet(this, _GoogleToken_instances, "m", _GoogleToken_getTokenAsync).call(this, opts);
      }
      /**
       * Given a keyFile, extract the key and client email if available
       * @param keyFile Path to a json, pem, or p12 file that contains the key.
       * @returns an object with privateKey and clientEmail properties
       */
      async getCredentials(keyFile) {
        const ext = path.extname(keyFile);
        switch (ext) {
          case ".json": {
            const key = await readFile(keyFile, "utf8");
            const body = JSON.parse(key);
            const privateKey = body.private_key;
            const clientEmail = body.client_email;
            if (!privateKey || !clientEmail) {
              throw new ErrorWithCode("private_key and client_email are required.", "MISSING_CREDENTIALS");
            }
            return { privateKey, clientEmail };
          }
          case ".der":
          case ".crt":
          case ".pem": {
            const privateKey = await readFile(keyFile, "utf8");
            return { privateKey };
          }
          case ".p12":
          case ".pfx": {
            throw new ErrorWithCode("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
          }
          default:
            throw new ErrorWithCode("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE");
        }
      }
      revokeToken(callback) {
        if (callback) {
          __classPrivateFieldGet(this, _GoogleToken_instances, "m", _GoogleToken_revokeTokenAsync).call(this).then(() => callback(), callback);
          return;
        }
        return __classPrivateFieldGet(this, _GoogleToken_instances, "m", _GoogleToken_revokeTokenAsync).call(this);
      }
    };
    exports.GoogleToken = GoogleToken;
    _GoogleToken_inFlightRequest = /* @__PURE__ */ new WeakMap(), _GoogleToken_instances = /* @__PURE__ */ new WeakSet(), _GoogleToken_getTokenAsync = async function _GoogleToken_getTokenAsync2(opts) {
      if (__classPrivateFieldGet(this, _GoogleToken_inFlightRequest, "f") && !opts.forceRefresh) {
        return __classPrivateFieldGet(this, _GoogleToken_inFlightRequest, "f");
      }
      try {
        return await __classPrivateFieldSet(this, _GoogleToken_inFlightRequest, __classPrivateFieldGet(this, _GoogleToken_instances, "m", _GoogleToken_getTokenAsyncInner).call(this, opts), "f");
      } finally {
        __classPrivateFieldSet(this, _GoogleToken_inFlightRequest, void 0, "f");
      }
    }, _GoogleToken_getTokenAsyncInner = async function _GoogleToken_getTokenAsyncInner2(opts) {
      if (this.isTokenExpiring() === false && opts.forceRefresh === false) {
        return Promise.resolve(this.rawToken);
      }
      if (!this.key && !this.keyFile) {
        throw new Error("No key or keyFile set.");
      }
      if (!this.key && this.keyFile) {
        const creds = await this.getCredentials(this.keyFile);
        this.key = creds.privateKey;
        this.iss = creds.clientEmail || this.iss;
        if (!creds.clientEmail) {
          __classPrivateFieldGet(this, _GoogleToken_instances, "m", _GoogleToken_ensureEmail).call(this);
        }
      }
      return __classPrivateFieldGet(this, _GoogleToken_instances, "m", _GoogleToken_requestToken).call(this);
    }, _GoogleToken_ensureEmail = function _GoogleToken_ensureEmail2() {
      if (!this.iss) {
        throw new ErrorWithCode("email is required.", "MISSING_CREDENTIALS");
      }
    }, _GoogleToken_revokeTokenAsync = async function _GoogleToken_revokeTokenAsync2() {
      if (!this.accessToken) {
        throw new Error("No token to revoke.");
      }
      const url = GOOGLE_REVOKE_TOKEN_URL + this.accessToken;
      await this.transporter.request({
        url,
        retry: true
      });
      __classPrivateFieldGet(this, _GoogleToken_instances, "m", _GoogleToken_configure).call(this, {
        email: this.iss,
        sub: this.sub,
        key: this.key,
        keyFile: this.keyFile,
        scope: this.scope,
        additionalClaims: this.additionalClaims
      });
    }, _GoogleToken_configure = function _GoogleToken_configure2(options = {}) {
      this.keyFile = options.keyFile;
      this.key = options.key;
      this.rawToken = void 0;
      this.iss = options.email || options.iss;
      this.sub = options.sub;
      this.additionalClaims = options.additionalClaims;
      if (typeof options.scope === "object") {
        this.scope = options.scope.join(" ");
      } else {
        this.scope = options.scope;
      }
      this.eagerRefreshThresholdMillis = options.eagerRefreshThresholdMillis;
      if (options.transporter) {
        this.transporter = options.transporter;
      }
    }, _GoogleToken_requestToken = /**
     * Request the token from Google.
     */
    async function _GoogleToken_requestToken2() {
      var _a, _b;
      const iat = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
      const additionalClaims = this.additionalClaims || {};
      const payload = Object.assign({
        iss: this.iss,
        scope: this.scope,
        aud: GOOGLE_TOKEN_URL,
        exp: iat + 3600,
        iat,
        sub: this.sub
      }, additionalClaims);
      const signedJWT = jws.sign({
        header: { alg: "RS256" },
        payload,
        secret: this.key
      });
      try {
        const r = await this.transporter.request({
          method: "POST",
          url: GOOGLE_TOKEN_URL,
          data: {
            grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
            assertion: signedJWT
          },
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          responseType: "json",
          retryConfig: {
            httpMethodsToRetry: ["POST"]
          }
        });
        this.rawToken = r.data;
        this.expiresAt = r.data.expires_in === null || r.data.expires_in === void 0 ? void 0 : (iat + r.data.expires_in) * 1e3;
        return this.rawToken;
      } catch (e) {
        this.rawToken = void 0;
        this.tokenExpires = void 0;
        const body = e.response && ((_a = e.response) === null || _a === void 0 ? void 0 : _a.data) ? (_b = e.response) === null || _b === void 0 ? void 0 : _b.data : {};
        if (body.error) {
          const desc = body.error_description ? `: ${body.error_description}` : "";
          e.message = `${body.error}${desc}`;
        }
        throw e;
      }
    };
  }
});

// node_modules/google-auth-library/build/src/auth/jwtaccess.js
var require_jwtaccess = __commonJS({
  "node_modules/google-auth-library/build/src/auth/jwtaccess.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JWTAccess = void 0;
    var jws = require_jws();
    var util_1 = require_util2();
    var DEFAULT_HEADER = {
      alg: "RS256",
      typ: "JWT"
    };
    var JWTAccess = class _JWTAccess {
      /**
       * JWTAccess service account credentials.
       *
       * Create a new access token by using the credential to create a new JWT token
       * that's recognized as the access token.
       *
       * @param email the service account email address.
       * @param key the private key that will be used to sign the token.
       * @param keyId the ID of the private key used to sign the token.
       */
      constructor(email, key, keyId, eagerRefreshThresholdMillis) {
        this.cache = new util_1.LRUCache({
          capacity: 500,
          maxAge: 60 * 60 * 1e3
        });
        this.email = email;
        this.key = key;
        this.keyId = keyId;
        this.eagerRefreshThresholdMillis = eagerRefreshThresholdMillis !== null && eagerRefreshThresholdMillis !== void 0 ? eagerRefreshThresholdMillis : 5 * 60 * 1e3;
      }
      /**
       * Ensures that we're caching a key appropriately, giving precedence to scopes vs. url
       *
       * @param url The URI being authorized.
       * @param scopes The scope or scopes being authorized
       * @returns A string that returns the cached key.
       */
      getCachedKey(url, scopes) {
        let cacheKey = url;
        if (scopes && Array.isArray(scopes) && scopes.length) {
          cacheKey = url ? `${url}_${scopes.join("_")}` : `${scopes.join("_")}`;
        } else if (typeof scopes === "string") {
          cacheKey = url ? `${url}_${scopes}` : scopes;
        }
        if (!cacheKey) {
          throw Error("Scopes or url must be provided");
        }
        return cacheKey;
      }
      /**
       * Get a non-expired access token, after refreshing if necessary.
       *
       * @param url The URI being authorized.
       * @param additionalClaims An object with a set of additional claims to
       * include in the payload.
       * @returns An object that includes the authorization header.
       */
      getRequestHeaders(url, additionalClaims, scopes) {
        const key = this.getCachedKey(url, scopes);
        const cachedToken = this.cache.get(key);
        const now = Date.now();
        if (cachedToken && cachedToken.expiration - now > this.eagerRefreshThresholdMillis) {
          return cachedToken.headers;
        }
        const iat = Math.floor(Date.now() / 1e3);
        const exp = _JWTAccess.getExpirationTime(iat);
        let defaultClaims;
        if (Array.isArray(scopes)) {
          scopes = scopes.join(" ");
        }
        if (scopes) {
          defaultClaims = {
            iss: this.email,
            sub: this.email,
            scope: scopes,
            exp,
            iat
          };
        } else {
          defaultClaims = {
            iss: this.email,
            sub: this.email,
            aud: url,
            exp,
            iat
          };
        }
        if (additionalClaims) {
          for (const claim in defaultClaims) {
            if (additionalClaims[claim]) {
              throw new Error(`The '${claim}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`);
            }
          }
        }
        const header = this.keyId ? { ...DEFAULT_HEADER, kid: this.keyId } : DEFAULT_HEADER;
        const payload = Object.assign(defaultClaims, additionalClaims);
        const signedJWT = jws.sign({ header, payload, secret: this.key });
        const headers = { Authorization: `Bearer ${signedJWT}` };
        this.cache.set(key, {
          expiration: exp * 1e3,
          headers
        });
        return headers;
      }
      /**
       * Returns an expiration time for the JWT token.
       *
       * @param iat The issued at time for the JWT.
       * @returns An expiration time for the JWT.
       */
      static getExpirationTime(iat) {
        const exp = iat + 3600;
        return exp;
      }
      /**
       * Create a JWTAccess credentials instance using the given input options.
       * @param json The input object.
       */
      fromJSON(json) {
        if (!json) {
          throw new Error("Must pass in a JSON object containing the service account auth settings.");
        }
        if (!json.client_email) {
          throw new Error("The incoming JSON object does not contain a client_email field");
        }
        if (!json.private_key) {
          throw new Error("The incoming JSON object does not contain a private_key field");
        }
        this.email = json.client_email;
        this.key = json.private_key;
        this.keyId = json.private_key_id;
        this.projectId = json.project_id;
      }
      fromStream(inputStream, callback) {
        if (callback) {
          this.fromStreamAsync(inputStream).then(() => callback(), callback);
        } else {
          return this.fromStreamAsync(inputStream);
        }
      }
      fromStreamAsync(inputStream) {
        return new Promise((resolve, reject) => {
          if (!inputStream) {
            reject(new Error("Must pass in a stream containing the service account auth settings."));
          }
          let s = "";
          inputStream.setEncoding("utf8").on("data", (chunk) => s += chunk).on("error", reject).on("end", () => {
            try {
              const data = JSON.parse(s);
              this.fromJSON(data);
              resolve();
            } catch (err) {
              reject(err);
            }
          });
        });
      }
    };
    exports.JWTAccess = JWTAccess;
  }
});

// node_modules/google-auth-library/build/src/auth/jwtclient.js
var require_jwtclient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/jwtclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JWT = void 0;
    var gtoken_1 = require_src3();
    var jwtaccess_1 = require_jwtaccess();
    var oauth2client_1 = require_oauth2client();
    var authclient_1 = require_authclient();
    var JWT = class _JWT extends oauth2client_1.OAuth2Client {
      constructor(optionsOrEmail, keyFile, key, scopes, subject, keyId) {
        const opts = optionsOrEmail && typeof optionsOrEmail === "object" ? optionsOrEmail : { email: optionsOrEmail, keyFile, key, keyId, scopes, subject };
        super(opts);
        this.email = opts.email;
        this.keyFile = opts.keyFile;
        this.key = opts.key;
        this.keyId = opts.keyId;
        this.scopes = opts.scopes;
        this.subject = opts.subject;
        this.additionalClaims = opts.additionalClaims;
        this.credentials = { refresh_token: "jwt-placeholder", expiry_date: 1 };
      }
      /**
       * Creates a copy of the credential with the specified scopes.
       * @param scopes List of requested scopes or a single scope.
       * @return The cloned instance.
       */
      createScoped(scopes) {
        const jwt = new _JWT(this);
        jwt.scopes = scopes;
        return jwt;
      }
      /**
       * Obtains the metadata to be sent with the request.
       *
       * @param url the URI being authorized.
       */
      async getRequestMetadataAsync(url) {
        url = this.defaultServicePath ? `https://${this.defaultServicePath}/` : url;
        const useSelfSignedJWT = !this.hasUserScopes() && url || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== authclient_1.DEFAULT_UNIVERSE;
        if (this.subject && this.universeDomain !== authclient_1.DEFAULT_UNIVERSE) {
          throw new RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${authclient_1.DEFAULT_UNIVERSE}`);
        }
        if (!this.apiKey && useSelfSignedJWT) {
          if (this.additionalClaims && this.additionalClaims.target_audience) {
            const { tokens } = await this.refreshToken();
            return {
              headers: this.addSharedMetadataHeaders({
                Authorization: `Bearer ${tokens.id_token}`
              })
            };
          } else {
            if (!this.access) {
              this.access = new jwtaccess_1.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
            }
            let scopes;
            if (this.hasUserScopes()) {
              scopes = this.scopes;
            } else if (!url) {
              scopes = this.defaultScopes;
            }
            const useScopes = this.useJWTAccessWithScope || this.universeDomain !== authclient_1.DEFAULT_UNIVERSE;
            const headers = await this.access.getRequestHeaders(
              url !== null && url !== void 0 ? url : void 0,
              this.additionalClaims,
              // Scopes take precedent over audience for signing,
              // so we only provide them if `useJWTAccessWithScope` is on or
              // if we are in a non-default universe
              useScopes ? scopes : void 0
            );
            return { headers: this.addSharedMetadataHeaders(headers) };
          }
        } else if (this.hasAnyScopes() || this.apiKey) {
          return super.getRequestMetadataAsync(url);
        } else {
          return { headers: {} };
        }
      }
      /**
       * Fetches an ID token.
       * @param targetAudience the audience for the fetched ID token.
       */
      async fetchIdToken(targetAudience) {
        const gtoken = new gtoken_1.GoogleToken({
          iss: this.email,
          sub: this.subject,
          scope: this.scopes || this.defaultScopes,
          keyFile: this.keyFile,
          key: this.key,
          additionalClaims: { target_audience: targetAudience },
          transporter: this.transporter
        });
        await gtoken.getToken({
          forceRefresh: true
        });
        if (!gtoken.idToken) {
          throw new Error("Unknown error: Failed to fetch ID token");
        }
        return gtoken.idToken;
      }
      /**
       * Determine if there are currently scopes available.
       */
      hasUserScopes() {
        if (!this.scopes) {
          return false;
        }
        return this.scopes.length > 0;
      }
      /**
       * Are there any default or user scopes defined.
       */
      hasAnyScopes() {
        if (this.scopes && this.scopes.length > 0)
          return true;
        if (this.defaultScopes && this.defaultScopes.length > 0)
          return true;
        return false;
      }
      authorize(callback) {
        if (callback) {
          this.authorizeAsync().then((r) => callback(null, r), callback);
        } else {
          return this.authorizeAsync();
        }
      }
      async authorizeAsync() {
        const result = await this.refreshToken();
        if (!result) {
          throw new Error("No result returned");
        }
        this.credentials = result.tokens;
        this.credentials.refresh_token = "jwt-placeholder";
        this.key = this.gtoken.key;
        this.email = this.gtoken.iss;
        return result.tokens;
      }
      /**
       * Refreshes the access token.
       * @param refreshToken ignored
       * @private
       */
      async refreshTokenNoCache(refreshToken) {
        const gtoken = this.createGToken();
        const token = await gtoken.getToken({
          forceRefresh: this.isTokenExpiring()
        });
        const tokens = {
          access_token: token.access_token,
          token_type: "Bearer",
          expiry_date: gtoken.expiresAt,
          id_token: gtoken.idToken
        };
        this.emit("tokens", tokens);
        return { res: null, tokens };
      }
      /**
       * Create a gToken if it doesn't already exist.
       */
      createGToken() {
        if (!this.gtoken) {
          this.gtoken = new gtoken_1.GoogleToken({
            iss: this.email,
            sub: this.subject,
            scope: this.scopes || this.defaultScopes,
            keyFile: this.keyFile,
            key: this.key,
            additionalClaims: this.additionalClaims,
            transporter: this.transporter
          });
        }
        return this.gtoken;
      }
      /**
       * Create a JWT credentials instance using the given input options.
       * @param json The input object.
       */
      fromJSON(json) {
        if (!json) {
          throw new Error("Must pass in a JSON object containing the service account auth settings.");
        }
        if (!json.client_email) {
          throw new Error("The incoming JSON object does not contain a client_email field");
        }
        if (!json.private_key) {
          throw new Error("The incoming JSON object does not contain a private_key field");
        }
        this.email = json.client_email;
        this.key = json.private_key;
        this.keyId = json.private_key_id;
        this.projectId = json.project_id;
        this.quotaProjectId = json.quota_project_id;
        this.universeDomain = json.universe_domain || this.universeDomain;
      }
      fromStream(inputStream, callback) {
        if (callback) {
          this.fromStreamAsync(inputStream).then(() => callback(), callback);
        } else {
          return this.fromStreamAsync(inputStream);
        }
      }
      fromStreamAsync(inputStream) {
        return new Promise((resolve, reject) => {
          if (!inputStream) {
            throw new Error("Must pass in a stream containing the service account auth settings.");
          }
          let s = "";
          inputStream.setEncoding("utf8").on("error", reject).on("data", (chunk) => s += chunk).on("end", () => {
            try {
              const data = JSON.parse(s);
              this.fromJSON(data);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
        });
      }
      /**
       * Creates a JWT credentials instance using an API Key for authentication.
       * @param apiKey The API Key in string form.
       */
      fromAPIKey(apiKey) {
        if (typeof apiKey !== "string") {
          throw new Error("Must provide an API Key string.");
        }
        this.apiKey = apiKey;
      }
      /**
       * Using the key or keyFile on the JWT client, obtain an object that contains
       * the key and the client email.
       */
      async getCredentials() {
        if (this.key) {
          return { private_key: this.key, client_email: this.email };
        } else if (this.keyFile) {
          const gtoken = this.createGToken();
          const creds = await gtoken.getCredentials(this.keyFile);
          return { private_key: creds.privateKey, client_email: creds.clientEmail };
        }
        throw new Error("A key or a keyFile must be provided to getCredentials.");
      }
    };
    exports.JWT = JWT;
  }
});

// node_modules/google-auth-library/build/src/auth/refreshclient.js
var require_refreshclient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/refreshclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserRefreshClient = exports.USER_REFRESH_ACCOUNT_TYPE = void 0;
    var oauth2client_1 = require_oauth2client();
    var querystring_1 = require_querystring();
    exports.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
    var UserRefreshClient = class _UserRefreshClient extends oauth2client_1.OAuth2Client {
      constructor(optionsOrClientId, clientSecret, refreshToken, eagerRefreshThresholdMillis, forceRefreshOnFailure) {
        const opts = optionsOrClientId && typeof optionsOrClientId === "object" ? optionsOrClientId : {
          clientId: optionsOrClientId,
          clientSecret,
          refreshToken,
          eagerRefreshThresholdMillis,
          forceRefreshOnFailure
        };
        super(opts);
        this._refreshToken = opts.refreshToken;
        this.credentials.refresh_token = opts.refreshToken;
      }
      /**
       * Refreshes the access token.
       * @param refreshToken An ignored refreshToken..
       * @param callback Optional callback.
       */
      async refreshTokenNoCache(refreshToken) {
        return super.refreshTokenNoCache(this._refreshToken);
      }
      async fetchIdToken(targetAudience) {
        const res = await this.transporter.request({
          ..._UserRefreshClient.RETRY_CONFIG,
          url: this.endpoints.oauth2TokenUrl,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          data: (0, querystring_1.stringify)({
            client_id: this._clientId,
            client_secret: this._clientSecret,
            grant_type: "refresh_token",
            refresh_token: this._refreshToken,
            target_audience: targetAudience
          })
        });
        return res.data.id_token;
      }
      /**
       * Create a UserRefreshClient credentials instance using the given input
       * options.
       * @param json The input object.
       */
      fromJSON(json) {
        if (!json) {
          throw new Error("Must pass in a JSON object containing the user refresh token");
        }
        if (json.type !== "authorized_user") {
          throw new Error('The incoming JSON object does not have the "authorized_user" type');
        }
        if (!json.client_id) {
          throw new Error("The incoming JSON object does not contain a client_id field");
        }
        if (!json.client_secret) {
          throw new Error("The incoming JSON object does not contain a client_secret field");
        }
        if (!json.refresh_token) {
          throw new Error("The incoming JSON object does not contain a refresh_token field");
        }
        this._clientId = json.client_id;
        this._clientSecret = json.client_secret;
        this._refreshToken = json.refresh_token;
        this.credentials.refresh_token = json.refresh_token;
        this.quotaProjectId = json.quota_project_id;
        this.universeDomain = json.universe_domain || this.universeDomain;
      }
      fromStream(inputStream, callback) {
        if (callback) {
          this.fromStreamAsync(inputStream).then(() => callback(), callback);
        } else {
          return this.fromStreamAsync(inputStream);
        }
      }
      async fromStreamAsync(inputStream) {
        return new Promise((resolve, reject) => {
          if (!inputStream) {
            return reject(new Error("Must pass in a stream containing the user refresh token."));
          }
          let s = "";
          inputStream.setEncoding("utf8").on("error", reject).on("data", (chunk) => s += chunk).on("end", () => {
            try {
              const data = JSON.parse(s);
              this.fromJSON(data);
              return resolve();
            } catch (err) {
              return reject(err);
            }
          });
        });
      }
    };
    exports.UserRefreshClient = UserRefreshClient;
  }
});

// node_modules/google-auth-library/build/src/auth/impersonated.js
var require_impersonated = __commonJS({
  "node_modules/google-auth-library/build/src/auth/impersonated.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Impersonated = exports.IMPERSONATED_ACCOUNT_TYPE = void 0;
    var oauth2client_1 = require_oauth2client();
    var gaxios_1 = require_src();
    exports.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";
    var Impersonated = class _Impersonated extends oauth2client_1.OAuth2Client {
      /**
       * Impersonated service account credentials.
       *
       * Create a new access token by impersonating another service account.
       *
       * Impersonated Credentials allowing credentials issued to a user or
       * service account to impersonate another. The source project using
       * Impersonated Credentials must enable the "IAMCredentials" API.
       * Also, the target service account must grant the orginating principal
       * the "Service Account Token Creator" IAM role.
       *
       * @param {object} options - The configuration object.
       * @param {object} [options.sourceClient] the source credential used as to
       * acquire the impersonated credentials.
       * @param {string} [options.targetPrincipal] the service account to
       * impersonate.
       * @param {string[]} [options.delegates] the chained list of delegates
       * required to grant the final access_token. If set, the sequence of
       * identities must have "Service Account Token Creator" capability granted to
       * the preceding identity. For example, if set to [serviceAccountB,
       * serviceAccountC], the sourceCredential must have the Token Creator role on
       * serviceAccountB. serviceAccountB must have the Token Creator on
       * serviceAccountC. Finally, C must have Token Creator on target_principal.
       * If left unset, sourceCredential must have that role on targetPrincipal.
       * @param {string[]} [options.targetScopes] scopes to request during the
       * authorization grant.
       * @param {number} [options.lifetime] number of seconds the delegated
       * credential should be valid for up to 3600 seconds by default, or 43,200
       * seconds by extending the token's lifetime, see:
       * https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials#sa-credentials-oauth
       * @param {string} [options.endpoint] api endpoint override.
       */
      constructor(options = {}) {
        var _a, _b, _c, _d, _e, _f;
        super(options);
        this.credentials = {
          expiry_date: 1,
          refresh_token: "impersonated-placeholder"
        };
        this.sourceClient = (_a = options.sourceClient) !== null && _a !== void 0 ? _a : new oauth2client_1.OAuth2Client();
        this.targetPrincipal = (_b = options.targetPrincipal) !== null && _b !== void 0 ? _b : "";
        this.delegates = (_c = options.delegates) !== null && _c !== void 0 ? _c : [];
        this.targetScopes = (_d = options.targetScopes) !== null && _d !== void 0 ? _d : [];
        this.lifetime = (_e = options.lifetime) !== null && _e !== void 0 ? _e : 3600;
        this.endpoint = (_f = options.endpoint) !== null && _f !== void 0 ? _f : "https://iamcredentials.googleapis.com";
      }
      /**
       * Signs some bytes.
       *
       * {@link https://cloud.google.com/iam/docs/reference/credentials/rest/v1/projects.serviceAccounts/signBlob Reference Documentation}
       * @param blobToSign String to sign.
       * @return <SignBlobResponse> denoting the keyyID and signedBlob in base64 string
       */
      async sign(blobToSign) {
        await this.sourceClient.getAccessToken();
        const name = `projects/-/serviceAccounts/${this.targetPrincipal}`;
        const u = `${this.endpoint}/v1/${name}:signBlob`;
        const body = {
          delegates: this.delegates,
          payload: Buffer.from(blobToSign).toString("base64")
        };
        const res = await this.sourceClient.request({
          ..._Impersonated.RETRY_CONFIG,
          url: u,
          data: body,
          method: "POST"
        });
        return res.data;
      }
      /** The service account email to be impersonated. */
      getTargetPrincipal() {
        return this.targetPrincipal;
      }
      /**
       * Refreshes the access token.
       */
      async refreshToken() {
        var _a, _b, _c, _d, _e, _f;
        try {
          await this.sourceClient.getAccessToken();
          const name = "projects/-/serviceAccounts/" + this.targetPrincipal;
          const u = `${this.endpoint}/v1/${name}:generateAccessToken`;
          const body = {
            delegates: this.delegates,
            scope: this.targetScopes,
            lifetime: this.lifetime + "s"
          };
          const res = await this.sourceClient.request({
            ..._Impersonated.RETRY_CONFIG,
            url: u,
            data: body,
            method: "POST"
          });
          const tokenResponse = res.data;
          this.credentials.access_token = tokenResponse.accessToken;
          this.credentials.expiry_date = Date.parse(tokenResponse.expireTime);
          return {
            tokens: this.credentials,
            res
          };
        } catch (error) {
          if (!(error instanceof Error))
            throw error;
          let status = 0;
          let message = "";
          if (error instanceof gaxios_1.GaxiosError) {
            status = (_c = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.status;
            message = (_f = (_e = (_d = error === null || error === void 0 ? void 0 : error.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.error) === null || _f === void 0 ? void 0 : _f.message;
          }
          if (status && message) {
            error.message = `${status}: unable to impersonate: ${message}`;
            throw error;
          } else {
            error.message = `unable to impersonate: ${error}`;
            throw error;
          }
        }
      }
      /**
       * Generates an OpenID Connect ID token for a service account.
       *
       * {@link https://cloud.google.com/iam/docs/reference/credentials/rest/v1/projects.serviceAccounts/generateIdToken Reference Documentation}
       *
       * @param targetAudience the audience for the fetched ID token.
       * @param options the for the request
       * @return an OpenID Connect ID token
       */
      async fetchIdToken(targetAudience, options) {
        var _a;
        await this.sourceClient.getAccessToken();
        const name = `projects/-/serviceAccounts/${this.targetPrincipal}`;
        const u = `${this.endpoint}/v1/${name}:generateIdToken`;
        const body = {
          delegates: this.delegates,
          audience: targetAudience,
          includeEmail: (_a = options === null || options === void 0 ? void 0 : options.includeEmail) !== null && _a !== void 0 ? _a : true
        };
        const res = await this.sourceClient.request({
          ..._Impersonated.RETRY_CONFIG,
          url: u,
          data: body,
          method: "POST"
        });
        return res.data.token;
      }
    };
    exports.Impersonated = Impersonated;
  }
});

// node_modules/google-auth-library/build/src/auth/oauth2common.js
var require_oauth2common = __commonJS({
  "node_modules/google-auth-library/build/src/auth/oauth2common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getErrorFromOAuthErrorResponse = exports.OAuthClientAuthHandler = void 0;
    var querystring = require_querystring();
    var crypto_1 = require_crypto4();
    var METHODS_SUPPORTING_REQUEST_BODY = ["PUT", "POST", "PATCH"];
    var OAuthClientAuthHandler = class {
      /**
       * Instantiates an OAuth client authentication handler.
       * @param clientAuthentication The client auth credentials.
       */
      constructor(clientAuthentication) {
        this.clientAuthentication = clientAuthentication;
        this.crypto = (0, crypto_1.createCrypto)();
      }
      /**
       * Applies client authentication on the OAuth request's headers or POST
       * body but does not process the request.
       * @param opts The GaxiosOptions whose headers or data are to be modified
       *   depending on the client authentication mechanism to be used.
       * @param bearerToken The optional bearer token to use for authentication.
       *   When this is used, no client authentication credentials are needed.
       */
      applyClientAuthenticationOptions(opts, bearerToken) {
        this.injectAuthenticatedHeaders(opts, bearerToken);
        if (!bearerToken) {
          this.injectAuthenticatedRequestBody(opts);
        }
      }
      /**
       * Applies client authentication on the request's header if either
       * basic authentication or bearer token authentication is selected.
       *
       * @param opts The GaxiosOptions whose headers or data are to be modified
       *   depending on the client authentication mechanism to be used.
       * @param bearerToken The optional bearer token to use for authentication.
       *   When this is used, no client authentication credentials are needed.
       */
      injectAuthenticatedHeaders(opts, bearerToken) {
        var _a;
        if (bearerToken) {
          opts.headers = opts.headers || {};
          Object.assign(opts.headers, {
            Authorization: `Bearer ${bearerToken}}`
          });
        } else if (((_a = this.clientAuthentication) === null || _a === void 0 ? void 0 : _a.confidentialClientType) === "basic") {
          opts.headers = opts.headers || {};
          const clientId = this.clientAuthentication.clientId;
          const clientSecret = this.clientAuthentication.clientSecret || "";
          const base64EncodedCreds = this.crypto.encodeBase64StringUtf8(`${clientId}:${clientSecret}`);
          Object.assign(opts.headers, {
            Authorization: `Basic ${base64EncodedCreds}`
          });
        }
      }
      /**
       * Applies client authentication on the request's body if request-body
       * client authentication is selected.
       *
       * @param opts The GaxiosOptions whose headers or data are to be modified
       *   depending on the client authentication mechanism to be used.
       */
      injectAuthenticatedRequestBody(opts) {
        var _a;
        if (((_a = this.clientAuthentication) === null || _a === void 0 ? void 0 : _a.confidentialClientType) === "request-body") {
          const method = (opts.method || "GET").toUpperCase();
          if (METHODS_SUPPORTING_REQUEST_BODY.indexOf(method) !== -1) {
            let contentType;
            const headers = opts.headers || {};
            for (const key in headers) {
              if (key.toLowerCase() === "content-type" && headers[key]) {
                contentType = headers[key].toLowerCase();
                break;
              }
            }
            if (contentType === "application/x-www-form-urlencoded") {
              opts.data = opts.data || "";
              const data = querystring.parse(opts.data);
              Object.assign(data, {
                client_id: this.clientAuthentication.clientId,
                client_secret: this.clientAuthentication.clientSecret || ""
              });
              opts.data = querystring.stringify(data);
            } else if (contentType === "application/json") {
              opts.data = opts.data || {};
              Object.assign(opts.data, {
                client_id: this.clientAuthentication.clientId,
                client_secret: this.clientAuthentication.clientSecret || ""
              });
            } else {
              throw new Error(`${contentType} content-types are not supported with ${this.clientAuthentication.confidentialClientType} client authentication`);
            }
          } else {
            throw new Error(`${method} HTTP method does not support ${this.clientAuthentication.confidentialClientType} client authentication`);
          }
        }
      }
      /**
       * Retry config for Auth-related requests.
       *
       * @remarks
       *
       * This is not a part of the default {@link AuthClient.transporter transporter/gaxios}
       * config as some downstream APIs would prefer if customers explicitly enable retries,
       * such as GCS.
       */
      static get RETRY_CONFIG() {
        return {
          retry: true,
          retryConfig: {
            httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
          }
        };
      }
    };
    exports.OAuthClientAuthHandler = OAuthClientAuthHandler;
    function getErrorFromOAuthErrorResponse(resp, err) {
      const errorCode = resp.error;
      const errorDescription = resp.error_description;
      const errorUri = resp.error_uri;
      let message = `Error code ${errorCode}`;
      if (typeof errorDescription !== "undefined") {
        message += `: ${errorDescription}`;
      }
      if (typeof errorUri !== "undefined") {
        message += ` - ${errorUri}`;
      }
      const newError = new Error(message);
      if (err) {
        const keys = Object.keys(err);
        if (err.stack) {
          keys.push("stack");
        }
        keys.forEach((key) => {
          if (key !== "message") {
            Object.defineProperty(newError, key, {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value: err[key],
              writable: false,
              enumerable: true
            });
          }
        });
      }
      return newError;
    }
    exports.getErrorFromOAuthErrorResponse = getErrorFromOAuthErrorResponse;
  }
});

// node_modules/google-auth-library/build/src/auth/stscredentials.js
var require_stscredentials = __commonJS({
  "node_modules/google-auth-library/build/src/auth/stscredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StsCredentials = void 0;
    var gaxios_1 = require_src();
    var querystring = require_querystring();
    var transporters_1 = require_transporters();
    var oauth2common_1 = require_oauth2common();
    var StsCredentials = class _StsCredentials extends oauth2common_1.OAuthClientAuthHandler {
      /**
       * Initializes an STS credentials instance.
       * @param tokenExchangeEndpoint The token exchange endpoint.
       * @param clientAuthentication The client authentication credentials if
       *   available.
       */
      constructor(tokenExchangeEndpoint, clientAuthentication) {
        super(clientAuthentication);
        this.tokenExchangeEndpoint = tokenExchangeEndpoint;
        this.transporter = new transporters_1.DefaultTransporter();
      }
      /**
       * Exchanges the provided token for another type of token based on the
       * rfc8693 spec.
       * @param stsCredentialsOptions The token exchange options used to populate
       *   the token exchange request.
       * @param additionalHeaders Optional additional headers to pass along the
       *   request.
       * @param options Optional additional GCP-specific non-spec defined options
       *   to send with the request.
       *   Example: `&options=${encodeUriComponent(JSON.stringified(options))}`
       * @return A promise that resolves with the token exchange response containing
       *   the requested token and its expiration time.
       */
      async exchangeToken(stsCredentialsOptions, additionalHeaders, options) {
        var _a, _b, _c;
        const values = {
          grant_type: stsCredentialsOptions.grantType,
          resource: stsCredentialsOptions.resource,
          audience: stsCredentialsOptions.audience,
          scope: (_a = stsCredentialsOptions.scope) === null || _a === void 0 ? void 0 : _a.join(" "),
          requested_token_type: stsCredentialsOptions.requestedTokenType,
          subject_token: stsCredentialsOptions.subjectToken,
          subject_token_type: stsCredentialsOptions.subjectTokenType,
          actor_token: (_b = stsCredentialsOptions.actingParty) === null || _b === void 0 ? void 0 : _b.actorToken,
          actor_token_type: (_c = stsCredentialsOptions.actingParty) === null || _c === void 0 ? void 0 : _c.actorTokenType,
          // Non-standard GCP-specific options.
          options: options && JSON.stringify(options)
        };
        Object.keys(values).forEach((key) => {
          if (typeof values[key] === "undefined") {
            delete values[key];
          }
        });
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded"
        };
        Object.assign(headers, additionalHeaders || {});
        const opts = {
          ..._StsCredentials.RETRY_CONFIG,
          url: this.tokenExchangeEndpoint.toString(),
          method: "POST",
          headers,
          data: querystring.stringify(values),
          responseType: "json"
        };
        this.applyClientAuthenticationOptions(opts);
        try {
          const response = await this.transporter.request(opts);
          const stsSuccessfulResponse = response.data;
          stsSuccessfulResponse.res = response;
          return stsSuccessfulResponse;
        } catch (error) {
          if (error instanceof gaxios_1.GaxiosError && error.response) {
            throw (0, oauth2common_1.getErrorFromOAuthErrorResponse)(
              error.response.data,
              // Preserve other fields from the original error.
              error
            );
          }
          throw error;
        }
      }
    };
    exports.StsCredentials = StsCredentials;
  }
});

// node_modules/google-auth-library/build/src/auth/baseexternalclient.js
var require_baseexternalclient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/baseexternalclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseExternalAccountClient = exports.DEFAULT_UNIVERSE = exports.CLOUD_RESOURCE_MANAGER = exports.EXTERNAL_ACCOUNT_TYPE = exports.EXPIRATION_TIME_OFFSET = void 0;
    var stream = require_stream();
    var authclient_1 = require_authclient();
    var sts = require_stscredentials();
    var util_1 = require_util2();
    var STS_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:token-exchange";
    var STS_REQUEST_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:access_token";
    var DEFAULT_OAUTH_SCOPE = "https://www.googleapis.com/auth/cloud-platform";
    var DEFAULT_TOKEN_LIFESPAN = 3600;
    exports.EXPIRATION_TIME_OFFSET = 5 * 60 * 1e3;
    exports.EXTERNAL_ACCOUNT_TYPE = "external_account";
    exports.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
    var WORKFORCE_AUDIENCE_PATTERN = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+";
    var DEFAULT_TOKEN_URL = "https://sts.{universeDomain}/v1/token";
    var pkg = require_package2();
    var authclient_2 = require_authclient();
    Object.defineProperty(exports, "DEFAULT_UNIVERSE", { enumerable: true, get: function() {
      return authclient_2.DEFAULT_UNIVERSE;
    } });
    var BaseExternalAccountClient = class _BaseExternalAccountClient extends authclient_1.AuthClient {
      /**
       * Instantiate a BaseExternalAccountClient instance using the provided JSON
       * object loaded from an external account credentials file.
       * @param options The external account options object typically loaded
       *   from the external account JSON credential file. The camelCased options
       *   are aliases for the snake_cased options.
       * @param additionalOptions **DEPRECATED, all options are available in the
       *   `options` parameter.** Optional additional behavior customization options.
       *   These currently customize expiration threshold time and whether to retry
       *   on 401/403 API request errors.
       */
      constructor(options, additionalOptions) {
        var _a;
        super({ ...options, ...additionalOptions });
        const opts = (0, util_1.originalOrCamelOptions)(options);
        const type = opts.get("type");
        if (type && type !== exports.EXTERNAL_ACCOUNT_TYPE) {
          throw new Error(`Expected "${exports.EXTERNAL_ACCOUNT_TYPE}" type but received "${options.type}"`);
        }
        const clientId = opts.get("client_id");
        const clientSecret = opts.get("client_secret");
        const tokenUrl = (_a = opts.get("token_url")) !== null && _a !== void 0 ? _a : DEFAULT_TOKEN_URL.replace("{universeDomain}", this.universeDomain);
        const subjectTokenType = opts.get("subject_token_type");
        const workforcePoolUserProject = opts.get("workforce_pool_user_project");
        const serviceAccountImpersonationUrl = opts.get("service_account_impersonation_url");
        const serviceAccountImpersonation = opts.get("service_account_impersonation");
        const serviceAccountImpersonationLifetime = (0, util_1.originalOrCamelOptions)(serviceAccountImpersonation).get("token_lifetime_seconds");
        this.cloudResourceManagerURL = new URL(opts.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`);
        if (clientId) {
          this.clientAuth = {
            confidentialClientType: "basic",
            clientId,
            clientSecret
          };
        }
        this.stsCredential = new sts.StsCredentials(tokenUrl, this.clientAuth);
        this.scopes = opts.get("scopes") || [DEFAULT_OAUTH_SCOPE];
        this.cachedAccessToken = null;
        this.audience = opts.get("audience");
        this.subjectTokenType = subjectTokenType;
        this.workforcePoolUserProject = workforcePoolUserProject;
        const workforceAudiencePattern = new RegExp(WORKFORCE_AUDIENCE_PATTERN);
        if (this.workforcePoolUserProject && !this.audience.match(workforceAudiencePattern)) {
          throw new Error("workforcePoolUserProject should not be set for non-workforce pool credentials.");
        }
        this.serviceAccountImpersonationUrl = serviceAccountImpersonationUrl;
        this.serviceAccountImpersonationLifetime = serviceAccountImpersonationLifetime;
        if (this.serviceAccountImpersonationLifetime) {
          this.configLifetimeRequested = true;
        } else {
          this.configLifetimeRequested = false;
          this.serviceAccountImpersonationLifetime = DEFAULT_TOKEN_LIFESPAN;
        }
        this.projectNumber = this.getProjectNumber(this.audience);
        this.supplierContext = {
          audience: this.audience,
          subjectTokenType: this.subjectTokenType,
          transporter: this.transporter
        };
      }
      /** The service account email to be impersonated, if available. */
      getServiceAccountEmail() {
        var _a;
        if (this.serviceAccountImpersonationUrl) {
          if (this.serviceAccountImpersonationUrl.length > 256) {
            throw new RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
          }
          const re = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/;
          const result = re.exec(this.serviceAccountImpersonationUrl);
          return ((_a = result === null || result === void 0 ? void 0 : result.groups) === null || _a === void 0 ? void 0 : _a.email) || null;
        }
        return null;
      }
      /**
       * Provides a mechanism to inject GCP access tokens directly.
       * When the provided credential expires, a new credential, using the
       * external account options, is retrieved.
       * @param credentials The Credentials object to set on the current client.
       */
      setCredentials(credentials) {
        super.setCredentials(credentials);
        this.cachedAccessToken = credentials;
      }
      /**
       * @return A promise that resolves with the current GCP access token
       *   response. If the current credential is expired, a new one is retrieved.
       */
      async getAccessToken() {
        if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
          await this.refreshAccessTokenAsync();
        }
        return {
          token: this.cachedAccessToken.access_token,
          res: this.cachedAccessToken.res
        };
      }
      /**
       * The main authentication interface. It takes an optional url which when
       * present is the endpoint being accessed, and returns a Promise which
       * resolves with authorization header fields.
       *
       * The result has the form:
       * { Authorization: 'Bearer <access_token_value>' }
       */
      async getRequestHeaders() {
        const accessTokenResponse = await this.getAccessToken();
        const headers = {
          Authorization: `Bearer ${accessTokenResponse.token}`
        };
        return this.addSharedMetadataHeaders(headers);
      }
      request(opts, callback) {
        if (callback) {
          this.requestAsync(opts).then((r) => callback(null, r), (e) => {
            return callback(e, e.response);
          });
        } else {
          return this.requestAsync(opts);
        }
      }
      /**
       * @return A promise that resolves with the project ID corresponding to the
       *   current workload identity pool or current workforce pool if
       *   determinable. For workforce pool credential, it returns the project ID
       *   corresponding to the workforcePoolUserProject.
       *   This is introduced to match the current pattern of using the Auth
       *   library:
       *   const projectId = await auth.getProjectId();
       *   const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
       *   const res = await client.request({ url });
       *   The resource may not have permission
       *   (resourcemanager.projects.get) to call this API or the required
       *   scopes may not be selected:
       *   https://cloud.google.com/resource-manager/reference/rest/v1/projects/get#authorization-scopes
       */
      async getProjectId() {
        const projectNumber = this.projectNumber || this.workforcePoolUserProject;
        if (this.projectId) {
          return this.projectId;
        } else if (projectNumber) {
          const headers = await this.getRequestHeaders();
          const response = await this.transporter.request({
            ..._BaseExternalAccountClient.RETRY_CONFIG,
            headers,
            url: `${this.cloudResourceManagerURL.toString()}${projectNumber}`,
            responseType: "json"
          });
          this.projectId = response.data.projectId;
          return this.projectId;
        }
        return null;
      }
      /**
       * Authenticates the provided HTTP request, processes it and resolves with the
       * returned response.
       * @param opts The HTTP request options.
       * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure.
       * @return A promise that resolves with the successful response.
       */
      async requestAsync(opts, reAuthRetried = false) {
        let response;
        try {
          const requestHeaders = await this.getRequestHeaders();
          opts.headers = opts.headers || {};
          if (requestHeaders && requestHeaders["x-goog-user-project"]) {
            opts.headers["x-goog-user-project"] = requestHeaders["x-goog-user-project"];
          }
          if (requestHeaders && requestHeaders.Authorization) {
            opts.headers.Authorization = requestHeaders.Authorization;
          }
          response = await this.transporter.request(opts);
        } catch (e) {
          const res = e.response;
          if (res) {
            const statusCode = res.status;
            const isReadableStream = res.config.data instanceof stream.Readable;
            const isAuthErr = statusCode === 401 || statusCode === 403;
            if (!reAuthRetried && isAuthErr && !isReadableStream && this.forceRefreshOnFailure) {
              await this.refreshAccessTokenAsync();
              return await this.requestAsync(opts, true);
            }
          }
          throw e;
        }
        return response;
      }
      /**
       * Forces token refresh, even if unexpired tokens are currently cached.
       * External credentials are exchanged for GCP access tokens via the token
       * exchange endpoint and other settings provided in the client options
       * object.
       * If the service_account_impersonation_url is provided, an additional
       * step to exchange the external account GCP access token for a service
       * account impersonated token is performed.
       * @return A promise that resolves with the fresh GCP access tokens.
       */
      async refreshAccessTokenAsync() {
        const subjectToken = await this.retrieveSubjectToken();
        const stsCredentialsOptions = {
          grantType: STS_GRANT_TYPE,
          audience: this.audience,
          requestedTokenType: STS_REQUEST_TOKEN_TYPE,
          subjectToken,
          subjectTokenType: this.subjectTokenType,
          // generateAccessToken requires the provided access token to have
          // scopes:
          // https://www.googleapis.com/auth/iam or
          // https://www.googleapis.com/auth/cloud-platform
          // The new service account access token scopes will match the user
          // provided ones.
          scope: this.serviceAccountImpersonationUrl ? [DEFAULT_OAUTH_SCOPE] : this.getScopesArray()
        };
        const additionalOptions = !this.clientAuth && this.workforcePoolUserProject ? { userProject: this.workforcePoolUserProject } : void 0;
        const additionalHeaders = {
          "x-goog-api-client": this.getMetricsHeaderValue()
        };
        const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, additionalHeaders, additionalOptions);
        if (this.serviceAccountImpersonationUrl) {
          this.cachedAccessToken = await this.getImpersonatedAccessToken(stsResponse.access_token);
        } else if (stsResponse.expires_in) {
          this.cachedAccessToken = {
            access_token: stsResponse.access_token,
            expiry_date: (/* @__PURE__ */ new Date()).getTime() + stsResponse.expires_in * 1e3,
            res: stsResponse.res
          };
        } else {
          this.cachedAccessToken = {
            access_token: stsResponse.access_token,
            res: stsResponse.res
          };
        }
        this.credentials = {};
        Object.assign(this.credentials, this.cachedAccessToken);
        delete this.credentials.res;
        this.emit("tokens", {
          refresh_token: null,
          expiry_date: this.cachedAccessToken.expiry_date,
          access_token: this.cachedAccessToken.access_token,
          token_type: "Bearer",
          id_token: null
        });
        return this.cachedAccessToken;
      }
      /**
       * Returns the workload identity pool project number if it is determinable
       * from the audience resource name.
       * @param audience The STS audience used to determine the project number.
       * @return The project number associated with the workload identity pool, if
       *   this can be determined from the STS audience field. Otherwise, null is
       *   returned.
       */
      getProjectNumber(audience) {
        const match = audience.match(/\/projects\/([^/]+)/);
        if (!match) {
          return null;
        }
        return match[1];
      }
      /**
       * Exchanges an external account GCP access token for a service
       * account impersonated access token using iamcredentials
       * GenerateAccessToken API.
       * @param token The access token to exchange for a service account access
       *   token.
       * @return A promise that resolves with the service account impersonated
       *   credentials response.
       */
      async getImpersonatedAccessToken(token) {
        const opts = {
          ..._BaseExternalAccountClient.RETRY_CONFIG,
          url: this.serviceAccountImpersonationUrl,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          data: {
            scope: this.getScopesArray(),
            lifetime: this.serviceAccountImpersonationLifetime + "s"
          },
          responseType: "json"
        };
        const response = await this.transporter.request(opts);
        const successResponse = response.data;
        return {
          access_token: successResponse.accessToken,
          // Convert from ISO format to timestamp.
          expiry_date: new Date(successResponse.expireTime).getTime(),
          res: response
        };
      }
      /**
       * Returns whether the provided credentials are expired or not.
       * If there is no expiry time, assumes the token is not expired or expiring.
       * @param accessToken The credentials to check for expiration.
       * @return Whether the credentials are expired or not.
       */
      isExpired(accessToken) {
        const now = (/* @__PURE__ */ new Date()).getTime();
        return accessToken.expiry_date ? now >= accessToken.expiry_date - this.eagerRefreshThresholdMillis : false;
      }
      /**
       * @return The list of scopes for the requested GCP access token.
       */
      getScopesArray() {
        if (typeof this.scopes === "string") {
          return [this.scopes];
        }
        return this.scopes || [DEFAULT_OAUTH_SCOPE];
      }
      getMetricsHeaderValue() {
        const nodeVersion = process.version.replace(/^v/, "");
        const saImpersonation = this.serviceAccountImpersonationUrl !== void 0;
        const credentialSourceType = this.credentialSourceType ? this.credentialSourceType : "unknown";
        return `gl-node/${nodeVersion} auth/${pkg.version} google-byoid-sdk source/${credentialSourceType} sa-impersonation/${saImpersonation} config-lifetime/${this.configLifetimeRequested}`;
      }
    };
    exports.BaseExternalAccountClient = BaseExternalAccountClient;
  }
});

// node_modules/google-auth-library/build/src/auth/filesubjecttokensupplier.js
var require_filesubjecttokensupplier = __commonJS({
  "node_modules/google-auth-library/build/src/auth/filesubjecttokensupplier.js"(exports) {
    "use strict";
    var _a;
    var _b;
    var _c;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileSubjectTokenSupplier = void 0;
    var util_1 = require_util3();
    var fs = require_fs();
    var readFile = (0, util_1.promisify)((_a = fs.readFile) !== null && _a !== void 0 ? _a : () => {
    });
    var realpath = (0, util_1.promisify)((_b = fs.realpath) !== null && _b !== void 0 ? _b : () => {
    });
    var lstat = (0, util_1.promisify)((_c = fs.lstat) !== null && _c !== void 0 ? _c : () => {
    });
    var FileSubjectTokenSupplier = class {
      /**
       * Instantiates a new file based subject token supplier.
       * @param opts The file subject token supplier options to build the supplier
       *   with.
       */
      constructor(opts) {
        this.filePath = opts.filePath;
        this.formatType = opts.formatType;
        this.subjectTokenFieldName = opts.subjectTokenFieldName;
      }
      /**
       * Returns the subject token stored at the file specified in the constructor.
       * @param context {@link ExternalAccountSupplierContext} from the calling
       *   {@link IdentityPoolClient}, contains the requested audience and subject
       *   token type for the external account identity. Not used.
       */
      async getSubjectToken(context) {
        let parsedFilePath = this.filePath;
        try {
          parsedFilePath = await realpath(parsedFilePath);
          if (!(await lstat(parsedFilePath)).isFile()) {
            throw new Error();
          }
        } catch (err) {
          if (err instanceof Error) {
            err.message = `The file at ${parsedFilePath} does not exist, or it is not a file. ${err.message}`;
          }
          throw err;
        }
        let subjectToken;
        const rawText = await readFile(parsedFilePath, { encoding: "utf8" });
        if (this.formatType === "text") {
          subjectToken = rawText;
        } else if (this.formatType === "json" && this.subjectTokenFieldName) {
          const json = JSON.parse(rawText);
          subjectToken = json[this.subjectTokenFieldName];
        }
        if (!subjectToken) {
          throw new Error("Unable to parse the subject_token from the credential_source file");
        }
        return subjectToken;
      }
    };
    exports.FileSubjectTokenSupplier = FileSubjectTokenSupplier;
  }
});

// node_modules/google-auth-library/build/src/auth/urlsubjecttokensupplier.js
var require_urlsubjecttokensupplier = __commonJS({
  "node_modules/google-auth-library/build/src/auth/urlsubjecttokensupplier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UrlSubjectTokenSupplier = void 0;
    var UrlSubjectTokenSupplier = class {
      /**
       * Instantiates a URL subject token supplier.
       * @param opts The URL subject token supplier options to build the supplier with.
       */
      constructor(opts) {
        this.url = opts.url;
        this.formatType = opts.formatType;
        this.subjectTokenFieldName = opts.subjectTokenFieldName;
        this.headers = opts.headers;
        this.additionalGaxiosOptions = opts.additionalGaxiosOptions;
      }
      /**
       * Sends a GET request to the URL provided in the constructor and resolves
       * with the returned external subject token.
       * @param context {@link ExternalAccountSupplierContext} from the calling
       *   {@link IdentityPoolClient}, contains the requested audience and subject
       *   token type for the external account identity. Not used.
       */
      async getSubjectToken(context) {
        const opts = {
          ...this.additionalGaxiosOptions,
          url: this.url,
          method: "GET",
          headers: this.headers,
          responseType: this.formatType
        };
        let subjectToken;
        if (this.formatType === "text") {
          const response = await context.transporter.request(opts);
          subjectToken = response.data;
        } else if (this.formatType === "json" && this.subjectTokenFieldName) {
          const response = await context.transporter.request(opts);
          subjectToken = response.data[this.subjectTokenFieldName];
        }
        if (!subjectToken) {
          throw new Error("Unable to parse the subject_token from the credential_source URL");
        }
        return subjectToken;
      }
    };
    exports.UrlSubjectTokenSupplier = UrlSubjectTokenSupplier;
  }
});

// node_modules/google-auth-library/build/src/auth/identitypoolclient.js
var require_identitypoolclient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/identitypoolclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IdentityPoolClient = void 0;
    var baseexternalclient_1 = require_baseexternalclient();
    var util_1 = require_util2();
    var filesubjecttokensupplier_1 = require_filesubjecttokensupplier();
    var urlsubjecttokensupplier_1 = require_urlsubjecttokensupplier();
    var IdentityPoolClient = class _IdentityPoolClient extends baseexternalclient_1.BaseExternalAccountClient {
      /**
       * Instantiate an IdentityPoolClient instance using the provided JSON
       * object loaded from an external account credentials file.
       * An error is thrown if the credential is not a valid file-sourced or
       * url-sourced credential or a workforce pool user project is provided
       * with a non workforce audience.
       * @param options The external account options object typically loaded
       *   from the external account JSON credential file. The camelCased options
       *   are aliases for the snake_cased options.
       * @param additionalOptions **DEPRECATED, all options are available in the
       *   `options` parameter.** Optional additional behavior customization options.
       *   These currently customize expiration threshold time and whether to retry
       *   on 401/403 API request errors.
       */
      constructor(options, additionalOptions) {
        super(options, additionalOptions);
        const opts = (0, util_1.originalOrCamelOptions)(options);
        const credentialSource = opts.get("credential_source");
        const subjectTokenSupplier = opts.get("subject_token_supplier");
        if (!credentialSource && !subjectTokenSupplier) {
          throw new Error("A credential source or subject token supplier must be specified.");
        }
        if (credentialSource && subjectTokenSupplier) {
          throw new Error("Only one of credential source or subject token supplier can be specified.");
        }
        if (subjectTokenSupplier) {
          this.subjectTokenSupplier = subjectTokenSupplier;
          this.credentialSourceType = "programmatic";
        } else {
          const credentialSourceOpts = (0, util_1.originalOrCamelOptions)(credentialSource);
          const formatOpts = (0, util_1.originalOrCamelOptions)(credentialSourceOpts.get("format"));
          const formatType = formatOpts.get("type") || "text";
          const formatSubjectTokenFieldName = formatOpts.get("subject_token_field_name");
          if (formatType !== "json" && formatType !== "text") {
            throw new Error(`Invalid credential_source format "${formatType}"`);
          }
          if (formatType === "json" && !formatSubjectTokenFieldName) {
            throw new Error("Missing subject_token_field_name for JSON credential_source format");
          }
          const file = credentialSourceOpts.get("file");
          const url = credentialSourceOpts.get("url");
          const headers = credentialSourceOpts.get("headers");
          if (file && url) {
            throw new Error('No valid Identity Pool "credential_source" provided, must be either file or url.');
          } else if (file && !url) {
            this.credentialSourceType = "file";
            this.subjectTokenSupplier = new filesubjecttokensupplier_1.FileSubjectTokenSupplier({
              filePath: file,
              formatType,
              subjectTokenFieldName: formatSubjectTokenFieldName
            });
          } else if (!file && url) {
            this.credentialSourceType = "url";
            this.subjectTokenSupplier = new urlsubjecttokensupplier_1.UrlSubjectTokenSupplier({
              url,
              formatType,
              subjectTokenFieldName: formatSubjectTokenFieldName,
              headers,
              additionalGaxiosOptions: _IdentityPoolClient.RETRY_CONFIG
            });
          } else {
            throw new Error('No valid Identity Pool "credential_source" provided, must be either file or url.');
          }
        }
      }
      /**
       * Triggered when a external subject token is needed to be exchanged for a GCP
       * access token via GCP STS endpoint. Gets a subject token by calling
       * the configured {@link SubjectTokenSupplier}
       * @return A promise that resolves with the external subject token.
       */
      async retrieveSubjectToken() {
        return this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
      }
    };
    exports.IdentityPoolClient = IdentityPoolClient;
  }
});

// node_modules/google-auth-library/build/src/auth/awsrequestsigner.js
var require_awsrequestsigner = __commonJS({
  "node_modules/google-auth-library/build/src/auth/awsrequestsigner.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsRequestSigner = void 0;
    var crypto_1 = require_crypto4();
    var AWS_ALGORITHM = "AWS4-HMAC-SHA256";
    var AWS_REQUEST_TYPE = "aws4_request";
    var AwsRequestSigner = class {
      /**
       * Instantiates an AWS API request signer used to send authenticated signed
       * requests to AWS APIs based on the AWS Signature Version 4 signing process.
       * This also provides a mechanism to generate the signed request without
       * sending it.
       * @param getCredentials A mechanism to retrieve AWS security credentials
       *   when needed.
       * @param region The AWS region to use.
       */
      constructor(getCredentials, region) {
        this.getCredentials = getCredentials;
        this.region = region;
        this.crypto = (0, crypto_1.createCrypto)();
      }
      /**
       * Generates the signed request for the provided HTTP request for calling
       * an AWS API. This follows the steps described at:
       * https://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html
       * @param amzOptions The AWS request options that need to be signed.
       * @return A promise that resolves with the GaxiosOptions containing the
       *   signed HTTP request parameters.
       */
      async getRequestOptions(amzOptions) {
        if (!amzOptions.url) {
          throw new Error('"url" is required in "amzOptions"');
        }
        const requestPayloadData = typeof amzOptions.data === "object" ? JSON.stringify(amzOptions.data) : amzOptions.data;
        const url = amzOptions.url;
        const method = amzOptions.method || "GET";
        const requestPayload = amzOptions.body || requestPayloadData;
        const additionalAmzHeaders = amzOptions.headers;
        const awsSecurityCredentials = await this.getCredentials();
        const uri = new URL(url);
        const headerMap = await generateAuthenticationHeaderMap({
          crypto: this.crypto,
          host: uri.host,
          canonicalUri: uri.pathname,
          canonicalQuerystring: uri.search.substr(1),
          method,
          region: this.region,
          securityCredentials: awsSecurityCredentials,
          requestPayload,
          additionalAmzHeaders
        });
        const headers = Object.assign(
          // Add x-amz-date if available.
          headerMap.amzDate ? { "x-amz-date": headerMap.amzDate } : {},
          {
            Authorization: headerMap.authorizationHeader,
            host: uri.host
          },
          additionalAmzHeaders || {}
        );
        if (awsSecurityCredentials.token) {
          Object.assign(headers, {
            "x-amz-security-token": awsSecurityCredentials.token
          });
        }
        const awsSignedReq = {
          url,
          method,
          headers
        };
        if (typeof requestPayload !== "undefined") {
          awsSignedReq.body = requestPayload;
        }
        return awsSignedReq;
      }
    };
    exports.AwsRequestSigner = AwsRequestSigner;
    async function sign(crypto2, key, msg) {
      return await crypto2.signWithHmacSha256(key, msg);
    }
    async function getSigningKey(crypto2, key, dateStamp, region, serviceName) {
      const kDate = await sign(crypto2, `AWS4${key}`, dateStamp);
      const kRegion = await sign(crypto2, kDate, region);
      const kService = await sign(crypto2, kRegion, serviceName);
      const kSigning = await sign(crypto2, kService, "aws4_request");
      return kSigning;
    }
    async function generateAuthenticationHeaderMap(options) {
      const additionalAmzHeaders = options.additionalAmzHeaders || {};
      const requestPayload = options.requestPayload || "";
      const serviceName = options.host.split(".")[0];
      const now = /* @__PURE__ */ new Date();
      const amzDate = now.toISOString().replace(/[-:]/g, "").replace(/\.[0-9]+/, "");
      const dateStamp = now.toISOString().replace(/[-]/g, "").replace(/T.*/, "");
      const reformattedAdditionalAmzHeaders = {};
      Object.keys(additionalAmzHeaders).forEach((key) => {
        reformattedAdditionalAmzHeaders[key.toLowerCase()] = additionalAmzHeaders[key];
      });
      if (options.securityCredentials.token) {
        reformattedAdditionalAmzHeaders["x-amz-security-token"] = options.securityCredentials.token;
      }
      const amzHeaders = Object.assign(
        {
          host: options.host
        },
        // Previously the date was not fixed with x-amz- and could be provided manually.
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-header-value-trim.req
        reformattedAdditionalAmzHeaders.date ? {} : { "x-amz-date": amzDate },
        reformattedAdditionalAmzHeaders
      );
      let canonicalHeaders = "";
      const signedHeadersList = Object.keys(amzHeaders).sort();
      signedHeadersList.forEach((key) => {
        canonicalHeaders += `${key}:${amzHeaders[key]}
`;
      });
      const signedHeaders = signedHeadersList.join(";");
      const payloadHash = await options.crypto.sha256DigestHex(requestPayload);
      const canonicalRequest = `${options.method}
${options.canonicalUri}
${options.canonicalQuerystring}
${canonicalHeaders}
${signedHeaders}
${payloadHash}`;
      const credentialScope = `${dateStamp}/${options.region}/${serviceName}/${AWS_REQUEST_TYPE}`;
      const stringToSign = `${AWS_ALGORITHM}
${amzDate}
${credentialScope}
` + await options.crypto.sha256DigestHex(canonicalRequest);
      const signingKey = await getSigningKey(options.crypto, options.securityCredentials.secretAccessKey, dateStamp, options.region, serviceName);
      const signature = await sign(options.crypto, signingKey, stringToSign);
      const authorizationHeader = `${AWS_ALGORITHM} Credential=${options.securityCredentials.accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${(0, crypto_1.fromArrayBufferToHex)(signature)}`;
      return {
        // Do not return x-amz-date if date is available.
        amzDate: reformattedAdditionalAmzHeaders.date ? void 0 : amzDate,
        authorizationHeader,
        canonicalQuerystring: options.canonicalQuerystring
      };
    }
  }
});

// node_modules/google-auth-library/build/src/auth/defaultawssecuritycredentialssupplier.js
var require_defaultawssecuritycredentialssupplier = __commonJS({
  "node_modules/google-auth-library/build/src/auth/defaultawssecuritycredentialssupplier.js"(exports) {
    "use strict";
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _DefaultAwsSecurityCredentialsSupplier_instances;
    var _DefaultAwsSecurityCredentialsSupplier_getImdsV2SessionToken;
    var _DefaultAwsSecurityCredentialsSupplier_getAwsRoleName;
    var _DefaultAwsSecurityCredentialsSupplier_retrieveAwsSecurityCredentials;
    var _DefaultAwsSecurityCredentialsSupplier_regionFromEnv_get;
    var _DefaultAwsSecurityCredentialsSupplier_securityCredentialsFromEnv_get;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultAwsSecurityCredentialsSupplier = void 0;
    var DefaultAwsSecurityCredentialsSupplier = class {
      /**
       * Instantiates a new DefaultAwsSecurityCredentialsSupplier using information
       * from the credential_source stored in the ADC file.
       * @param opts The default aws security credentials supplier options object to
       *   build the supplier with.
       */
      constructor(opts) {
        _DefaultAwsSecurityCredentialsSupplier_instances.add(this);
        this.regionUrl = opts.regionUrl;
        this.securityCredentialsUrl = opts.securityCredentialsUrl;
        this.imdsV2SessionTokenUrl = opts.imdsV2SessionTokenUrl;
        this.additionalGaxiosOptions = opts.additionalGaxiosOptions;
      }
      /**
       * Returns the active AWS region. This first checks to see if the region
       * is available as an environment variable. If it is not, then the supplier
       * will call the region URL.
       * @param context {@link ExternalAccountSupplierContext} from the calling
       *   {@link AwsClient}, contains the requested audience and subject token type
       *   for the external account identity.
       * @return A promise that resolves with the AWS region string.
       */
      async getAwsRegion(context) {
        if (__classPrivateFieldGet(this, _DefaultAwsSecurityCredentialsSupplier_instances, "a", _DefaultAwsSecurityCredentialsSupplier_regionFromEnv_get)) {
          return __classPrivateFieldGet(this, _DefaultAwsSecurityCredentialsSupplier_instances, "a", _DefaultAwsSecurityCredentialsSupplier_regionFromEnv_get);
        }
        const metadataHeaders = {};
        if (!__classPrivateFieldGet(this, _DefaultAwsSecurityCredentialsSupplier_instances, "a", _DefaultAwsSecurityCredentialsSupplier_regionFromEnv_get) && this.imdsV2SessionTokenUrl) {
          metadataHeaders["x-aws-ec2-metadata-token"] = await __classPrivateFieldGet(this, _DefaultAwsSecurityCredentialsSupplier_instances, "m", _DefaultAwsSecurityCredentialsSupplier_getImdsV2SessionToken).call(this, context.transporter);
        }
        if (!this.regionUrl) {
          throw new Error('Unable to determine AWS region due to missing "options.credential_source.region_url"');
        }
        const opts = {
          ...this.additionalGaxiosOptions,
          url: this.regionUrl,
          method: "GET",
          responseType: "text",
          headers: metadataHeaders
        };
        const response = await context.transporter.request(opts);
        return response.data.substr(0, response.data.length - 1);
      }
      /**
       * Returns AWS security credentials. This first checks to see if the credentials
       * is available as environment variables. If it is not, then the supplier
       * will call the security credentials URL.
       * @param context {@link ExternalAccountSupplierContext} from the calling
       *   {@link AwsClient}, contains the requested audience and subject token type
       *   for the external account identity.
       * @return A promise that resolves with the AWS security credentials.
       */
      async getAwsSecurityCredentials(context) {
        if (__classPrivateFieldGet(this, _DefaultAwsSecurityCredentialsSupplier_instances, "a", _DefaultAwsSecurityCredentialsSupplier_securityCredentialsFromEnv_get)) {
          return __classPrivateFieldGet(this, _DefaultAwsSecurityCredentialsSupplier_instances, "a", _DefaultAwsSecurityCredentialsSupplier_securityCredentialsFromEnv_get);
        }
        const metadataHeaders = {};
        if (this.imdsV2SessionTokenUrl) {
          metadataHeaders["x-aws-ec2-metadata-token"] = await __classPrivateFieldGet(this, _DefaultAwsSecurityCredentialsSupplier_instances, "m", _DefaultAwsSecurityCredentialsSupplier_getImdsV2SessionToken).call(this, context.transporter);
        }
        const roleName = await __classPrivateFieldGet(this, _DefaultAwsSecurityCredentialsSupplier_instances, "m", _DefaultAwsSecurityCredentialsSupplier_getAwsRoleName).call(this, metadataHeaders, context.transporter);
        const awsCreds = await __classPrivateFieldGet(this, _DefaultAwsSecurityCredentialsSupplier_instances, "m", _DefaultAwsSecurityCredentialsSupplier_retrieveAwsSecurityCredentials).call(this, roleName, metadataHeaders, context.transporter);
        return {
          accessKeyId: awsCreds.AccessKeyId,
          secretAccessKey: awsCreds.SecretAccessKey,
          token: awsCreds.Token
        };
      }
    };
    exports.DefaultAwsSecurityCredentialsSupplier = DefaultAwsSecurityCredentialsSupplier;
    _DefaultAwsSecurityCredentialsSupplier_instances = /* @__PURE__ */ new WeakSet(), _DefaultAwsSecurityCredentialsSupplier_getImdsV2SessionToken = /**
     * @param transporter The transporter to use for requests.
     * @return A promise that resolves with the IMDSv2 Session Token.
     */
    async function _DefaultAwsSecurityCredentialsSupplier_getImdsV2SessionToken2(transporter) {
      const opts = {
        ...this.additionalGaxiosOptions,
        url: this.imdsV2SessionTokenUrl,
        method: "PUT",
        responseType: "text",
        headers: { "x-aws-ec2-metadata-token-ttl-seconds": "300" }
      };
      const response = await transporter.request(opts);
      return response.data;
    }, _DefaultAwsSecurityCredentialsSupplier_getAwsRoleName = /**
     * @param headers The headers to be used in the metadata request.
     * @param transporter The transporter to use for requests.
     * @return A promise that resolves with the assigned role to the current
     *   AWS VM. This is needed for calling the security-credentials endpoint.
     */
    async function _DefaultAwsSecurityCredentialsSupplier_getAwsRoleName2(headers, transporter) {
      if (!this.securityCredentialsUrl) {
        throw new Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
      }
      const opts = {
        ...this.additionalGaxiosOptions,
        url: this.securityCredentialsUrl,
        method: "GET",
        responseType: "text",
        headers
      };
      const response = await transporter.request(opts);
      return response.data;
    }, _DefaultAwsSecurityCredentialsSupplier_retrieveAwsSecurityCredentials = /**
     * Retrieves the temporary AWS credentials by calling the security-credentials
     * endpoint as specified in the `credential_source` object.
     * @param roleName The role attached to the current VM.
     * @param headers The headers to be used in the metadata request.
     * @param transporter The transporter to use for requests.
     * @return A promise that resolves with the temporary AWS credentials
     *   needed for creating the GetCallerIdentity signed request.
     */
    async function _DefaultAwsSecurityCredentialsSupplier_retrieveAwsSecurityCredentials2(roleName, headers, transporter) {
      const response = await transporter.request({
        ...this.additionalGaxiosOptions,
        url: `${this.securityCredentialsUrl}/${roleName}`,
        responseType: "json",
        headers
      });
      return response.data;
    }, _DefaultAwsSecurityCredentialsSupplier_regionFromEnv_get = function _DefaultAwsSecurityCredentialsSupplier_regionFromEnv_get2() {
      return process.env["AWS_REGION"] || process.env["AWS_DEFAULT_REGION"] || null;
    }, _DefaultAwsSecurityCredentialsSupplier_securityCredentialsFromEnv_get = function _DefaultAwsSecurityCredentialsSupplier_securityCredentialsFromEnv_get2() {
      if (process.env["AWS_ACCESS_KEY_ID"] && process.env["AWS_SECRET_ACCESS_KEY"]) {
        return {
          accessKeyId: process.env["AWS_ACCESS_KEY_ID"],
          secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"],
          token: process.env["AWS_SESSION_TOKEN"]
        };
      }
      return null;
    };
  }
});

// node_modules/google-auth-library/build/src/auth/awsclient.js
var require_awsclient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/awsclient.js"(exports) {
    "use strict";
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _a;
    var _AwsClient_DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsClient = void 0;
    var awsrequestsigner_1 = require_awsrequestsigner();
    var baseexternalclient_1 = require_baseexternalclient();
    var defaultawssecuritycredentialssupplier_1 = require_defaultawssecuritycredentialssupplier();
    var util_1 = require_util2();
    var AwsClient = class extends baseexternalclient_1.BaseExternalAccountClient {
      /**
       * Instantiates an AwsClient instance using the provided JSON
       * object loaded from an external account credentials file.
       * An error is thrown if the credential is not a valid AWS credential.
       * @param options The external account options object typically loaded
       *   from the external account JSON credential file.
       * @param additionalOptions **DEPRECATED, all options are available in the
       *   `options` parameter.** Optional additional behavior customization options.
       *   These currently customize expiration threshold time and whether to retry
       *   on 401/403 API request errors.
       */
      constructor(options, additionalOptions) {
        super(options, additionalOptions);
        const opts = (0, util_1.originalOrCamelOptions)(options);
        const credentialSource = opts.get("credential_source");
        const awsSecurityCredentialsSupplier = opts.get("aws_security_credentials_supplier");
        if (!credentialSource && !awsSecurityCredentialsSupplier) {
          throw new Error("A credential source or AWS security credentials supplier must be specified.");
        }
        if (credentialSource && awsSecurityCredentialsSupplier) {
          throw new Error("Only one of credential source or AWS security credentials supplier can be specified.");
        }
        if (awsSecurityCredentialsSupplier) {
          this.awsSecurityCredentialsSupplier = awsSecurityCredentialsSupplier;
          this.regionalCredVerificationUrl = __classPrivateFieldGet(_a, _a, "f", _AwsClient_DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL);
          this.credentialSourceType = "programmatic";
        } else {
          const credentialSourceOpts = (0, util_1.originalOrCamelOptions)(credentialSource);
          this.environmentId = credentialSourceOpts.get("environment_id");
          const regionUrl = credentialSourceOpts.get("region_url");
          const securityCredentialsUrl = credentialSourceOpts.get("url");
          const imdsV2SessionTokenUrl = credentialSourceOpts.get("imdsv2_session_token_url");
          this.awsSecurityCredentialsSupplier = new defaultawssecuritycredentialssupplier_1.DefaultAwsSecurityCredentialsSupplier({
            regionUrl,
            securityCredentialsUrl,
            imdsV2SessionTokenUrl
          });
          this.regionalCredVerificationUrl = credentialSourceOpts.get("regional_cred_verification_url");
          this.credentialSourceType = "aws";
          this.validateEnvironmentId();
        }
        this.awsRequestSigner = null;
        this.region = "";
      }
      validateEnvironmentId() {
        var _b;
        const match = (_b = this.environmentId) === null || _b === void 0 ? void 0 : _b.match(/^(aws)(\d+)$/);
        if (!match || !this.regionalCredVerificationUrl) {
          throw new Error('No valid AWS "credential_source" provided');
        } else if (parseInt(match[2], 10) !== 1) {
          throw new Error(`aws version "${match[2]}" is not supported in the current build.`);
        }
      }
      /**
       * Triggered when an external subject token is needed to be exchanged for a
       * GCP access token via GCP STS endpoint. This will call the
       * {@link AwsSecurityCredentialsSupplier} to retrieve an AWS region and AWS
       * Security Credentials, then use them to create a signed AWS STS request that
       * can be exchanged for a GCP access token.
       * @return A promise that resolves with the external subject token.
       */
      async retrieveSubjectToken() {
        if (!this.awsRequestSigner) {
          this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext);
          this.awsRequestSigner = new awsrequestsigner_1.AwsRequestSigner(async () => {
            return this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext);
          }, this.region);
        }
        const options = await this.awsRequestSigner.getRequestOptions({
          ..._a.RETRY_CONFIG,
          url: this.regionalCredVerificationUrl.replace("{region}", this.region),
          method: "POST"
        });
        const reformattedHeader = [];
        const extendedHeaders = Object.assign({
          // The full, canonical resource name of the workload identity pool
          // provider, with or without the HTTPS prefix.
          // Including this header as part of the signature is recommended to
          // ensure data integrity.
          "x-goog-cloud-target-resource": this.audience
        }, options.headers);
        for (const key in extendedHeaders) {
          reformattedHeader.push({
            key,
            value: extendedHeaders[key]
          });
        }
        return encodeURIComponent(JSON.stringify({
          url: options.url,
          method: options.method,
          headers: reformattedHeader
        }));
      }
    };
    exports.AwsClient = AwsClient;
    _a = AwsClient;
    _AwsClient_DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL = { value: "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15" };
    AwsClient.AWS_EC2_METADATA_IPV4_ADDRESS = "169.254.169.254";
    AwsClient.AWS_EC2_METADATA_IPV6_ADDRESS = "fd00:ec2::254";
  }
});

// node_modules/google-auth-library/build/src/auth/executable-response.js
var require_executable_response = __commonJS({
  "node_modules/google-auth-library/build/src/auth/executable-response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvalidSubjectTokenError = exports.InvalidMessageFieldError = exports.InvalidCodeFieldError = exports.InvalidTokenTypeFieldError = exports.InvalidExpirationTimeFieldError = exports.InvalidSuccessFieldError = exports.InvalidVersionFieldError = exports.ExecutableResponseError = exports.ExecutableResponse = void 0;
    var SAML_SUBJECT_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:saml2";
    var OIDC_SUBJECT_TOKEN_TYPE1 = "urn:ietf:params:oauth:token-type:id_token";
    var OIDC_SUBJECT_TOKEN_TYPE2 = "urn:ietf:params:oauth:token-type:jwt";
    var ExecutableResponse = class {
      /**
       * Instantiates an ExecutableResponse instance using the provided JSON object
       * from the output of the executable.
       * @param responseJson Response from a 3rd party executable, loaded from a
       * run of the executable or a cached output file.
       */
      constructor(responseJson) {
        if (!responseJson.version) {
          throw new InvalidVersionFieldError("Executable response must contain a 'version' field.");
        }
        if (responseJson.success === void 0) {
          throw new InvalidSuccessFieldError("Executable response must contain a 'success' field.");
        }
        this.version = responseJson.version;
        this.success = responseJson.success;
        if (this.success) {
          this.expirationTime = responseJson.expiration_time;
          this.tokenType = responseJson.token_type;
          if (this.tokenType !== SAML_SUBJECT_TOKEN_TYPE && this.tokenType !== OIDC_SUBJECT_TOKEN_TYPE1 && this.tokenType !== OIDC_SUBJECT_TOKEN_TYPE2) {
            throw new InvalidTokenTypeFieldError(`Executable response must contain a 'token_type' field when successful and it must be one of ${OIDC_SUBJECT_TOKEN_TYPE1}, ${OIDC_SUBJECT_TOKEN_TYPE2}, or ${SAML_SUBJECT_TOKEN_TYPE}.`);
          }
          if (this.tokenType === SAML_SUBJECT_TOKEN_TYPE) {
            if (!responseJson.saml_response) {
              throw new InvalidSubjectTokenError(`Executable response must contain a 'saml_response' field when token_type=${SAML_SUBJECT_TOKEN_TYPE}.`);
            }
            this.subjectToken = responseJson.saml_response;
          } else {
            if (!responseJson.id_token) {
              throw new InvalidSubjectTokenError(`Executable response must contain a 'id_token' field when token_type=${OIDC_SUBJECT_TOKEN_TYPE1} or ${OIDC_SUBJECT_TOKEN_TYPE2}.`);
            }
            this.subjectToken = responseJson.id_token;
          }
        } else {
          if (!responseJson.code) {
            throw new InvalidCodeFieldError("Executable response must contain a 'code' field when unsuccessful.");
          }
          if (!responseJson.message) {
            throw new InvalidMessageFieldError("Executable response must contain a 'message' field when unsuccessful.");
          }
          this.errorCode = responseJson.code;
          this.errorMessage = responseJson.message;
        }
      }
      /**
       * @return A boolean representing if the response has a valid token. Returns
       * true when the response was successful and the token is not expired.
       */
      isValid() {
        return !this.isExpired() && this.success;
      }
      /**
       * @return A boolean representing if the response is expired. Returns true if the
       * provided timeout has passed.
       */
      isExpired() {
        return this.expirationTime !== void 0 && this.expirationTime < Math.round(Date.now() / 1e3);
      }
    };
    exports.ExecutableResponse = ExecutableResponse;
    var ExecutableResponseError = class extends Error {
      constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
      }
    };
    exports.ExecutableResponseError = ExecutableResponseError;
    var InvalidVersionFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidVersionFieldError = InvalidVersionFieldError;
    var InvalidSuccessFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidSuccessFieldError = InvalidSuccessFieldError;
    var InvalidExpirationTimeFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidExpirationTimeFieldError = InvalidExpirationTimeFieldError;
    var InvalidTokenTypeFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidTokenTypeFieldError = InvalidTokenTypeFieldError;
    var InvalidCodeFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidCodeFieldError = InvalidCodeFieldError;
    var InvalidMessageFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidMessageFieldError = InvalidMessageFieldError;
    var InvalidSubjectTokenError = class extends ExecutableResponseError {
    };
    exports.InvalidSubjectTokenError = InvalidSubjectTokenError;
  }
});

// node_modules/google-auth-library/build/src/auth/pluggable-auth-handler.js
var require_pluggable_auth_handler = __commonJS({
  "node_modules/google-auth-library/build/src/auth/pluggable-auth-handler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PluggableAuthHandler = void 0;
    var pluggable_auth_client_1 = require_pluggable_auth_client();
    var executable_response_1 = require_executable_response();
    var childProcess = require_child_process();
    var fs = require_fs();
    var PluggableAuthHandler = class _PluggableAuthHandler {
      /**
       * Instantiates a PluggableAuthHandler instance using the provided
       * PluggableAuthHandlerOptions object.
       */
      constructor(options) {
        if (!options.command) {
          throw new Error("No command provided.");
        }
        this.commandComponents = _PluggableAuthHandler.parseCommand(options.command);
        this.timeoutMillis = options.timeoutMillis;
        if (!this.timeoutMillis) {
          throw new Error("No timeoutMillis provided.");
        }
        this.outputFile = options.outputFile;
      }
      /**
       * Calls user provided executable to get a 3rd party subject token and
       * returns the response.
       * @param envMap a Map of additional Environment Variables required for
       *   the executable.
       * @return A promise that resolves with the executable response.
       */
      retrieveResponseFromExecutable(envMap) {
        return new Promise((resolve, reject) => {
          const child = childProcess.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
            env: { ...process.env, ...Object.fromEntries(envMap) }
          });
          let output = "";
          child.stdout.on("data", (data) => {
            output += data;
          });
          child.stderr.on("data", (err) => {
            output += err;
          });
          const timeout = setTimeout(() => {
            child.removeAllListeners();
            child.kill();
            return reject(new Error("The executable failed to finish within the timeout specified."));
          }, this.timeoutMillis);
          child.on("close", (code) => {
            clearTimeout(timeout);
            if (code === 0) {
              try {
                const responseJson = JSON.parse(output);
                const response = new executable_response_1.ExecutableResponse(responseJson);
                return resolve(response);
              } catch (error) {
                if (error instanceof executable_response_1.ExecutableResponseError) {
                  return reject(error);
                }
                return reject(new executable_response_1.ExecutableResponseError(`The executable returned an invalid response: ${output}`));
              }
            } else {
              return reject(new pluggable_auth_client_1.ExecutableError(output, code.toString()));
            }
          });
        });
      }
      /**
       * Checks user provided output file for response from previous run of
       * executable and return the response if it exists, is formatted correctly, and is not expired.
       */
      async retrieveCachedResponse() {
        if (!this.outputFile || this.outputFile.length === 0) {
          return void 0;
        }
        let filePath;
        try {
          filePath = await fs.promises.realpath(this.outputFile);
        } catch (_a) {
          return void 0;
        }
        if (!(await fs.promises.lstat(filePath)).isFile()) {
          return void 0;
        }
        const responseString = await fs.promises.readFile(filePath, {
          encoding: "utf8"
        });
        if (responseString === "") {
          return void 0;
        }
        try {
          const responseJson = JSON.parse(responseString);
          const response = new executable_response_1.ExecutableResponse(responseJson);
          if (response.isValid()) {
            return new executable_response_1.ExecutableResponse(responseJson);
          }
          return void 0;
        } catch (error) {
          if (error instanceof executable_response_1.ExecutableResponseError) {
            throw error;
          }
          throw new executable_response_1.ExecutableResponseError(`The output file contained an invalid response: ${responseString}`);
        }
      }
      /**
       * Parses given command string into component array, splitting on spaces unless
       * spaces are between quotation marks.
       */
      static parseCommand(command) {
        const components = command.match(/(?:[^\s"]+|"[^"]*")+/g);
        if (!components) {
          throw new Error(`Provided command: "${command}" could not be parsed.`);
        }
        for (let i = 0; i < components.length; i++) {
          if (components[i][0] === '"' && components[i].slice(-1) === '"') {
            components[i] = components[i].slice(1, -1);
          }
        }
        return components;
      }
    };
    exports.PluggableAuthHandler = PluggableAuthHandler;
  }
});

// node_modules/google-auth-library/build/src/auth/pluggable-auth-client.js
var require_pluggable_auth_client = __commonJS({
  "node_modules/google-auth-library/build/src/auth/pluggable-auth-client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PluggableAuthClient = exports.ExecutableError = void 0;
    var baseexternalclient_1 = require_baseexternalclient();
    var executable_response_1 = require_executable_response();
    var pluggable_auth_handler_1 = require_pluggable_auth_handler();
    var ExecutableError = class extends Error {
      constructor(message, code) {
        super(`The executable failed with exit code: ${code} and error message: ${message}.`);
        this.code = code;
        Object.setPrototypeOf(this, new.target.prototype);
      }
    };
    exports.ExecutableError = ExecutableError;
    var DEFAULT_EXECUTABLE_TIMEOUT_MILLIS = 30 * 1e3;
    var MINIMUM_EXECUTABLE_TIMEOUT_MILLIS = 5 * 1e3;
    var MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS = 120 * 1e3;
    var GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES";
    var MAXIMUM_EXECUTABLE_VERSION = 1;
    var PluggableAuthClient = class extends baseexternalclient_1.BaseExternalAccountClient {
      /**
       * Instantiates a PluggableAuthClient instance using the provided JSON
       * object loaded from an external account credentials file.
       * An error is thrown if the credential is not a valid pluggable auth credential.
       * @param options The external account options object typically loaded from
       *   the external account JSON credential file.
       * @param additionalOptions **DEPRECATED, all options are available in the
       *   `options` parameter.** Optional additional behavior customization options.
       *   These currently customize expiration threshold time and whether to retry
       *   on 401/403 API request errors.
       */
      constructor(options, additionalOptions) {
        super(options, additionalOptions);
        if (!options.credential_source.executable) {
          throw new Error('No valid Pluggable Auth "credential_source" provided.');
        }
        this.command = options.credential_source.executable.command;
        if (!this.command) {
          throw new Error('No valid Pluggable Auth "credential_source" provided.');
        }
        if (options.credential_source.executable.timeout_millis === void 0) {
          this.timeoutMillis = DEFAULT_EXECUTABLE_TIMEOUT_MILLIS;
        } else {
          this.timeoutMillis = options.credential_source.executable.timeout_millis;
          if (this.timeoutMillis < MINIMUM_EXECUTABLE_TIMEOUT_MILLIS || this.timeoutMillis > MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS) {
            throw new Error(`Timeout must be between ${MINIMUM_EXECUTABLE_TIMEOUT_MILLIS} and ${MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS} milliseconds.`);
          }
        }
        this.outputFile = options.credential_source.executable.output_file;
        this.handler = new pluggable_auth_handler_1.PluggableAuthHandler({
          command: this.command,
          timeoutMillis: this.timeoutMillis,
          outputFile: this.outputFile
        });
        this.credentialSourceType = "executable";
      }
      /**
       * Triggered when an external subject token is needed to be exchanged for a
       * GCP access token via GCP STS endpoint.
       * This uses the `options.credential_source` object to figure out how
       * to retrieve the token using the current environment. In this case,
       * this calls a user provided executable which returns the subject token.
       * The logic is summarized as:
       * 1. Validated that the executable is allowed to run. The
       *    GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment must be set to
       *    1 for security reasons.
       * 2. If an output file is specified by the user, check the file location
       *    for a response. If the file exists and contains a valid response,
       *    return the subject token from the file.
       * 3. Call the provided executable and return response.
       * @return A promise that resolves with the external subject token.
       */
      async retrieveSubjectToken() {
        if (process.env[GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES] !== "1") {
          throw new Error("Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.");
        }
        let executableResponse = void 0;
        if (this.outputFile) {
          executableResponse = await this.handler.retrieveCachedResponse();
        }
        if (!executableResponse) {
          const envMap = /* @__PURE__ */ new Map();
          envMap.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience);
          envMap.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType);
          envMap.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0");
          if (this.outputFile) {
            envMap.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile);
          }
          const serviceAccountEmail = this.getServiceAccountEmail();
          if (serviceAccountEmail) {
            envMap.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", serviceAccountEmail);
          }
          executableResponse = await this.handler.retrieveResponseFromExecutable(envMap);
        }
        if (executableResponse.version > MAXIMUM_EXECUTABLE_VERSION) {
          throw new Error(`Version of executable is not currently supported, maximum supported version is ${MAXIMUM_EXECUTABLE_VERSION}.`);
        }
        if (!executableResponse.success) {
          throw new ExecutableError(executableResponse.errorMessage, executableResponse.errorCode);
        }
        if (this.outputFile) {
          if (!executableResponse.expirationTime) {
            throw new executable_response_1.InvalidExpirationTimeFieldError("The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.");
          }
        }
        if (executableResponse.isExpired()) {
          throw new Error("Executable response is expired.");
        }
        return executableResponse.subjectToken;
      }
    };
    exports.PluggableAuthClient = PluggableAuthClient;
  }
});

// node_modules/google-auth-library/build/src/auth/externalclient.js
var require_externalclient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/externalclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExternalAccountClient = void 0;
    var baseexternalclient_1 = require_baseexternalclient();
    var identitypoolclient_1 = require_identitypoolclient();
    var awsclient_1 = require_awsclient();
    var pluggable_auth_client_1 = require_pluggable_auth_client();
    var ExternalAccountClient = class {
      constructor() {
        throw new Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()");
      }
      /**
       * This static method will instantiate the
       * corresponding type of external account credential depending on the
       * underlying credential source.
       * @param options The external account options object typically loaded
       *   from the external account JSON credential file.
       * @param additionalOptions **DEPRECATED, all options are available in the
       *   `options` parameter.** Optional additional behavior customization options.
       *   These currently customize expiration threshold time and whether to retry
       *   on 401/403 API request errors.
       * @return A BaseExternalAccountClient instance or null if the options
       *   provided do not correspond to an external account credential.
       */
      static fromJSON(options, additionalOptions) {
        var _a, _b;
        if (options && options.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
          if ((_a = options.credential_source) === null || _a === void 0 ? void 0 : _a.environment_id) {
            return new awsclient_1.AwsClient(options, additionalOptions);
          } else if ((_b = options.credential_source) === null || _b === void 0 ? void 0 : _b.executable) {
            return new pluggable_auth_client_1.PluggableAuthClient(options, additionalOptions);
          } else {
            return new identitypoolclient_1.IdentityPoolClient(options, additionalOptions);
          }
        } else {
          return null;
        }
      }
    };
    exports.ExternalAccountClient = ExternalAccountClient;
  }
});

// node_modules/google-auth-library/build/src/auth/externalAccountAuthorizedUserClient.js
var require_externalAccountAuthorizedUserClient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/externalAccountAuthorizedUserClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExternalAccountAuthorizedUserClient = exports.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
    var authclient_1 = require_authclient();
    var oauth2common_1 = require_oauth2common();
    var gaxios_1 = require_src();
    var stream = require_stream();
    var baseexternalclient_1 = require_baseexternalclient();
    exports.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
    var DEFAULT_TOKEN_URL = "https://sts.{universeDomain}/v1/oauthtoken";
    var ExternalAccountAuthorizedUserHandler = class _ExternalAccountAuthorizedUserHandler extends oauth2common_1.OAuthClientAuthHandler {
      /**
       * Initializes an ExternalAccountAuthorizedUserHandler instance.
       * @param url The URL of the token refresh endpoint.
       * @param transporter The transporter to use for the refresh request.
       * @param clientAuthentication The client authentication credentials to use
       *   for the refresh request.
       */
      constructor(url, transporter, clientAuthentication) {
        super(clientAuthentication);
        this.url = url;
        this.transporter = transporter;
      }
      /**
       * Requests a new access token from the token_url endpoint using the provided
       *   refresh token.
       * @param refreshToken The refresh token to use to generate a new access token.
       * @param additionalHeaders Optional additional headers to pass along the
       *   request.
       * @return A promise that resolves with the token refresh response containing
       *   the requested access token and its expiration time.
       */
      async refreshToken(refreshToken, additionalHeaders) {
        const values = new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken
        });
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          ...additionalHeaders
        };
        const opts = {
          ..._ExternalAccountAuthorizedUserHandler.RETRY_CONFIG,
          url: this.url,
          method: "POST",
          headers,
          data: values.toString(),
          responseType: "json"
        };
        this.applyClientAuthenticationOptions(opts);
        try {
          const response = await this.transporter.request(opts);
          const tokenRefreshResponse = response.data;
          tokenRefreshResponse.res = response;
          return tokenRefreshResponse;
        } catch (error) {
          if (error instanceof gaxios_1.GaxiosError && error.response) {
            throw (0, oauth2common_1.getErrorFromOAuthErrorResponse)(
              error.response.data,
              // Preserve other fields from the original error.
              error
            );
          }
          throw error;
        }
      }
    };
    var ExternalAccountAuthorizedUserClient = class extends authclient_1.AuthClient {
      /**
       * Instantiates an ExternalAccountAuthorizedUserClient instances using the
       * provided JSON object loaded from a credentials files.
       * An error is throws if the credential is not valid.
       * @param options The external account authorized user option object typically
       *   from the external accoutn authorized user JSON credential file.
       * @param additionalOptions **DEPRECATED, all options are available in the
       *   `options` parameter.** Optional additional behavior customization options.
       *   These currently customize expiration threshold time and whether to retry
       *   on 401/403 API request errors.
       */
      constructor(options, additionalOptions) {
        var _a;
        super({ ...options, ...additionalOptions });
        if (options.universe_domain) {
          this.universeDomain = options.universe_domain;
        }
        this.refreshToken = options.refresh_token;
        const clientAuth = {
          confidentialClientType: "basic",
          clientId: options.client_id,
          clientSecret: options.client_secret
        };
        this.externalAccountAuthorizedUserHandler = new ExternalAccountAuthorizedUserHandler((_a = options.token_url) !== null && _a !== void 0 ? _a : DEFAULT_TOKEN_URL.replace("{universeDomain}", this.universeDomain), this.transporter, clientAuth);
        this.cachedAccessToken = null;
        this.quotaProjectId = options.quota_project_id;
        if (typeof (additionalOptions === null || additionalOptions === void 0 ? void 0 : additionalOptions.eagerRefreshThresholdMillis) !== "number") {
          this.eagerRefreshThresholdMillis = baseexternalclient_1.EXPIRATION_TIME_OFFSET;
        } else {
          this.eagerRefreshThresholdMillis = additionalOptions.eagerRefreshThresholdMillis;
        }
        this.forceRefreshOnFailure = !!(additionalOptions === null || additionalOptions === void 0 ? void 0 : additionalOptions.forceRefreshOnFailure);
      }
      async getAccessToken() {
        if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
          await this.refreshAccessTokenAsync();
        }
        return {
          token: this.cachedAccessToken.access_token,
          res: this.cachedAccessToken.res
        };
      }
      async getRequestHeaders() {
        const accessTokenResponse = await this.getAccessToken();
        const headers = {
          Authorization: `Bearer ${accessTokenResponse.token}`
        };
        return this.addSharedMetadataHeaders(headers);
      }
      request(opts, callback) {
        if (callback) {
          this.requestAsync(opts).then((r) => callback(null, r), (e) => {
            return callback(e, e.response);
          });
        } else {
          return this.requestAsync(opts);
        }
      }
      /**
       * Authenticates the provided HTTP request, processes it and resolves with the
       * returned response.
       * @param opts The HTTP request options.
       * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure.
       * @return A promise that resolves with the successful response.
       */
      async requestAsync(opts, reAuthRetried = false) {
        let response;
        try {
          const requestHeaders = await this.getRequestHeaders();
          opts.headers = opts.headers || {};
          if (requestHeaders && requestHeaders["x-goog-user-project"]) {
            opts.headers["x-goog-user-project"] = requestHeaders["x-goog-user-project"];
          }
          if (requestHeaders && requestHeaders.Authorization) {
            opts.headers.Authorization = requestHeaders.Authorization;
          }
          response = await this.transporter.request(opts);
        } catch (e) {
          const res = e.response;
          if (res) {
            const statusCode = res.status;
            const isReadableStream = res.config.data instanceof stream.Readable;
            const isAuthErr = statusCode === 401 || statusCode === 403;
            if (!reAuthRetried && isAuthErr && !isReadableStream && this.forceRefreshOnFailure) {
              await this.refreshAccessTokenAsync();
              return await this.requestAsync(opts, true);
            }
          }
          throw e;
        }
        return response;
      }
      /**
       * Forces token refresh, even if unexpired tokens are currently cached.
       * @return A promise that resolves with the refreshed credential.
       */
      async refreshAccessTokenAsync() {
        const refreshResponse = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
        this.cachedAccessToken = {
          access_token: refreshResponse.access_token,
          expiry_date: (/* @__PURE__ */ new Date()).getTime() + refreshResponse.expires_in * 1e3,
          res: refreshResponse.res
        };
        if (refreshResponse.refresh_token !== void 0) {
          this.refreshToken = refreshResponse.refresh_token;
        }
        return this.cachedAccessToken;
      }
      /**
       * Returns whether the provided credentials are expired or not.
       * If there is no expiry time, assumes the token is not expired or expiring.
       * @param credentials The credentials to check for expiration.
       * @return Whether the credentials are expired or not.
       */
      isExpired(credentials) {
        const now = (/* @__PURE__ */ new Date()).getTime();
        return credentials.expiry_date ? now >= credentials.expiry_date - this.eagerRefreshThresholdMillis : false;
      }
    };
    exports.ExternalAccountAuthorizedUserClient = ExternalAccountAuthorizedUserClient;
  }
});

// node_modules/google-auth-library/build/src/auth/googleauth.js
var require_googleauth = __commonJS({
  "node_modules/google-auth-library/build/src/auth/googleauth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GoogleAuth = exports.CLOUD_SDK_CLIENT_ID = void 0;
    var child_process_1 = require_child_process();
    var fs = require_fs();
    var gcpMetadata = require_src2();
    var os = require_os();
    var path = require_path();
    var crypto_1 = require_crypto4();
    var transporters_1 = require_transporters();
    var computeclient_1 = require_computeclient();
    var idtokenclient_1 = require_idtokenclient();
    var envDetect_1 = require_envDetect();
    var jwtclient_1 = require_jwtclient();
    var refreshclient_1 = require_refreshclient();
    var impersonated_1 = require_impersonated();
    var externalclient_1 = require_externalclient();
    var baseexternalclient_1 = require_baseexternalclient();
    var authclient_1 = require_authclient();
    var externalAccountAuthorizedUserClient_1 = require_externalAccountAuthorizedUserClient();
    var util_1 = require_util2();
    exports.CLOUD_SDK_CLIENT_ID = "764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com";
    var GoogleAuthExceptionMessages = {
      NO_PROJECT_ID_FOUND: "Unable to detect a Project Id in the current environment. \nTo learn more about authentication and Google APIs, visit: \nhttps://cloud.google.com/docs/authentication/getting-started",
      NO_CREDENTIALS_FOUND: "Unable to find credentials in current environment. \nTo learn more about authentication and Google APIs, visit: \nhttps://cloud.google.com/docs/authentication/getting-started",
      NO_UNIVERSE_DOMAIN_FOUND: "Unable to detect a Universe Domain in the current environment.\nTo learn more about Universe Domain retrieval, visit: \nhttps://cloud.google.com/compute/docs/metadata/predefined-metadata-keys"
    };
    var GoogleAuth = class {
      // Note:  this properly is only public to satisify unit tests.
      // https://github.com/Microsoft/TypeScript/issues/5228
      get isGCE() {
        return this.checkIsGCE;
      }
      /**
       * Configuration is resolved in the following order of precedence:
       * - {@link GoogleAuthOptions.credentials `credentials`}
       * - {@link GoogleAuthOptions.keyFilename `keyFilename`}
       * - {@link GoogleAuthOptions.keyFile `keyFile`}
       *
       * {@link GoogleAuthOptions.clientOptions `clientOptions`} are passed to the
       * {@link AuthClient `AuthClient`s}.
       *
       * @param opts
       */
      constructor(opts) {
        this.checkIsGCE = void 0;
        this.jsonContent = null;
        this.cachedCredential = null;
        this.clientOptions = {};
        opts = opts || {};
        this._cachedProjectId = opts.projectId || null;
        this.cachedCredential = opts.authClient || null;
        this.keyFilename = opts.keyFilename || opts.keyFile;
        this.scopes = opts.scopes;
        this.jsonContent = opts.credentials || null;
        this.clientOptions = opts.clientOptions || {};
        if (opts.universeDomain) {
          this.clientOptions.universeDomain = opts.universeDomain;
        }
      }
      // GAPIC client libraries should always use self-signed JWTs. The following
      // variables are set on the JWT client in order to indicate the type of library,
      // and sign the JWT with the correct audience and scopes (if not supplied).
      setGapicJWTValues(client) {
        client.defaultServicePath = this.defaultServicePath;
        client.useJWTAccessWithScope = this.useJWTAccessWithScope;
        client.defaultScopes = this.defaultScopes;
      }
      getProjectId(callback) {
        if (callback) {
          this.getProjectIdAsync().then((r) => callback(null, r), callback);
        } else {
          return this.getProjectIdAsync();
        }
      }
      /**
       * A temporary method for internal `getProjectId` usages where `null` is
       * acceptable. In a future major release, `getProjectId` should return `null`
       * (as the `Promise<string | null>` base signature describes) and this private
       * method should be removed.
       *
       * @returns Promise that resolves with project id (or `null`)
       */
      async getProjectIdOptional() {
        try {
          return await this.getProjectId();
        } catch (e) {
          if (e instanceof Error && e.message === GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) {
            return null;
          } else {
            throw e;
          }
        }
      }
      /*
       * A private method for finding and caching a projectId.
       *
       * Supports environments in order of precedence:
       * - GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT environment variable
       * - GOOGLE_APPLICATION_CREDENTIALS JSON file
       * - Cloud SDK: `gcloud config config-helper --format json`
       * - GCE project ID from metadata server
       *
       * @returns projectId
       */
      async findAndCacheProjectId() {
        let projectId = null;
        projectId || (projectId = await this.getProductionProjectId());
        projectId || (projectId = await this.getFileProjectId());
        projectId || (projectId = await this.getDefaultServiceProjectId());
        projectId || (projectId = await this.getGCEProjectId());
        projectId || (projectId = await this.getExternalAccountClientProjectId());
        if (projectId) {
          this._cachedProjectId = projectId;
          return projectId;
        } else {
          throw new Error(GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
        }
      }
      async getProjectIdAsync() {
        if (this._cachedProjectId) {
          return this._cachedProjectId;
        }
        if (!this._findProjectIdPromise) {
          this._findProjectIdPromise = this.findAndCacheProjectId();
        }
        return this._findProjectIdPromise;
      }
      /**
       * Retrieves a universe domain from the metadata server via
       * {@link gcpMetadata.universe}.
       *
       * @returns a universe domain
       */
      async getUniverseDomainFromMetadataServer() {
        var _a;
        let universeDomain;
        try {
          universeDomain = await gcpMetadata.universe("universe-domain");
          universeDomain || (universeDomain = authclient_1.DEFAULT_UNIVERSE);
        } catch (e) {
          if (e && ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
            universeDomain = authclient_1.DEFAULT_UNIVERSE;
          } else {
            throw e;
          }
        }
        return universeDomain;
      }
      /**
       * Retrieves, caches, and returns the universe domain in the following order
       * of precedence:
       * - The universe domain in {@link GoogleAuth.clientOptions}
       * - An existing or ADC {@link AuthClient}'s universe domain
       * - {@link gcpMetadata.universe}, if {@link Compute} client
       *
       * @returns The universe domain
       */
      async getUniverseDomain() {
        let universeDomain = (0, util_1.originalOrCamelOptions)(this.clientOptions).get("universe_domain");
        try {
          universeDomain !== null && universeDomain !== void 0 ? universeDomain : universeDomain = (await this.getClient()).universeDomain;
        } catch (_a) {
          universeDomain !== null && universeDomain !== void 0 ? universeDomain : universeDomain = authclient_1.DEFAULT_UNIVERSE;
        }
        return universeDomain;
      }
      /**
       * @returns Any scopes (user-specified or default scopes specified by the
       *   client library) that need to be set on the current Auth client.
       */
      getAnyScopes() {
        return this.scopes || this.defaultScopes;
      }
      getApplicationDefault(optionsOrCallback = {}, callback) {
        let options;
        if (typeof optionsOrCallback === "function") {
          callback = optionsOrCallback;
        } else {
          options = optionsOrCallback;
        }
        if (callback) {
          this.getApplicationDefaultAsync(options).then((r) => callback(null, r.credential, r.projectId), callback);
        } else {
          return this.getApplicationDefaultAsync(options);
        }
      }
      async getApplicationDefaultAsync(options = {}) {
        if (this.cachedCredential) {
          return await this.prepareAndCacheADC(this.cachedCredential);
        }
        const quotaProjectIdOverride = process.env["GOOGLE_CLOUD_QUOTA_PROJECT"];
        let credential;
        credential = await this._tryGetApplicationCredentialsFromEnvironmentVariable(options);
        if (credential) {
          if (credential instanceof jwtclient_1.JWT) {
            credential.scopes = this.scopes;
          } else if (credential instanceof baseexternalclient_1.BaseExternalAccountClient) {
            credential.scopes = this.getAnyScopes();
          }
          return await this.prepareAndCacheADC(credential, quotaProjectIdOverride);
        }
        credential = await this._tryGetApplicationCredentialsFromWellKnownFile(options);
        if (credential) {
          if (credential instanceof jwtclient_1.JWT) {
            credential.scopes = this.scopes;
          } else if (credential instanceof baseexternalclient_1.BaseExternalAccountClient) {
            credential.scopes = this.getAnyScopes();
          }
          return await this.prepareAndCacheADC(credential, quotaProjectIdOverride);
        }
        if (await this._checkIsGCE()) {
          if (!(0, util_1.originalOrCamelOptions)(options).get("universe_domain")) {
            options.universeDomain = await this.getUniverseDomainFromMetadataServer();
          }
          options.scopes = this.getAnyScopes();
          return await this.prepareAndCacheADC(new computeclient_1.Compute(options), quotaProjectIdOverride);
        }
        throw new Error("Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.");
      }
      async prepareAndCacheADC(credential, quotaProjectIdOverride) {
        const projectId = await this.getProjectIdOptional();
        if (quotaProjectIdOverride) {
          credential.quotaProjectId = quotaProjectIdOverride;
        }
        this.cachedCredential = credential;
        return { credential, projectId };
      }
      /**
       * Determines whether the auth layer is running on Google Compute Engine.
       * Checks for GCP Residency, then fallback to checking if metadata server
       * is available.
       *
       * @returns A promise that resolves with the boolean.
       * @api private
       */
      async _checkIsGCE() {
        if (this.checkIsGCE === void 0) {
          this.checkIsGCE = gcpMetadata.getGCPResidency() || await gcpMetadata.isAvailable();
        }
        return this.checkIsGCE;
      }
      /**
       * Attempts to load default credentials from the environment variable path..
       * @returns Promise that resolves with the OAuth2Client or null.
       * @api private
       */
      async _tryGetApplicationCredentialsFromEnvironmentVariable(options) {
        const credentialsPath = process.env["GOOGLE_APPLICATION_CREDENTIALS"] || process.env["google_application_credentials"];
        if (!credentialsPath || credentialsPath.length === 0) {
          return null;
        }
        try {
          return this._getApplicationCredentialsFromFilePath(credentialsPath, options);
        } catch (e) {
          if (e instanceof Error) {
            e.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${e.message}`;
          }
          throw e;
        }
      }
      /**
       * Attempts to load default credentials from a well-known file location
       * @return Promise that resolves with the OAuth2Client or null.
       * @api private
       */
      async _tryGetApplicationCredentialsFromWellKnownFile(options) {
        let location = null;
        if (this._isWindows()) {
          location = process.env["APPDATA"];
        } else {
          const home = process.env["HOME"];
          if (home) {
            location = path.join(home, ".config");
          }
        }
        if (location) {
          location = path.join(location, "gcloud", "application_default_credentials.json");
          if (!fs.existsSync(location)) {
            location = null;
          }
        }
        if (!location) {
          return null;
        }
        const client = await this._getApplicationCredentialsFromFilePath(location, options);
        return client;
      }
      /**
       * Attempts to load default credentials from a file at the given path..
       * @param filePath The path to the file to read.
       * @returns Promise that resolves with the OAuth2Client
       * @api private
       */
      async _getApplicationCredentialsFromFilePath(filePath, options = {}) {
        if (!filePath || filePath.length === 0) {
          throw new Error("The file path is invalid.");
        }
        try {
          filePath = fs.realpathSync(filePath);
          if (!fs.lstatSync(filePath).isFile()) {
            throw new Error();
          }
        } catch (err) {
          if (err instanceof Error) {
            err.message = `The file at ${filePath} does not exist, or it is not a file. ${err.message}`;
          }
          throw err;
        }
        const readStream = fs.createReadStream(filePath);
        return this.fromStream(readStream, options);
      }
      /**
       * Create a credentials instance using a given impersonated input options.
       * @param json The impersonated input object.
       * @returns JWT or UserRefresh Client with data
       */
      fromImpersonatedJSON(json) {
        var _a, _b, _c, _d, _e;
        if (!json) {
          throw new Error("Must pass in a JSON object containing an  impersonated refresh token");
        }
        if (json.type !== impersonated_1.IMPERSONATED_ACCOUNT_TYPE) {
          throw new Error(`The incoming JSON object does not have the "${impersonated_1.IMPERSONATED_ACCOUNT_TYPE}" type`);
        }
        if (!json.source_credentials) {
          throw new Error("The incoming JSON object does not contain a source_credentials field");
        }
        if (!json.service_account_impersonation_url) {
          throw new Error("The incoming JSON object does not contain a service_account_impersonation_url field");
        }
        const sourceClient = new refreshclient_1.UserRefreshClient();
        sourceClient.fromJSON(json.source_credentials);
        if (((_a = json.service_account_impersonation_url) === null || _a === void 0 ? void 0 : _a.length) > 256) {
          throw new RangeError(`Target principal is too long: ${json.service_account_impersonation_url}`);
        }
        const targetPrincipal = (_c = (_b = /(?<target>[^/]+):generateAccessToken$/.exec(json.service_account_impersonation_url)) === null || _b === void 0 ? void 0 : _b.groups) === null || _c === void 0 ? void 0 : _c.target;
        if (!targetPrincipal) {
          throw new RangeError(`Cannot extract target principal from ${json.service_account_impersonation_url}`);
        }
        const targetScopes = (_d = this.getAnyScopes()) !== null && _d !== void 0 ? _d : [];
        const client = new impersonated_1.Impersonated({
          ...json,
          delegates: (_e = json.delegates) !== null && _e !== void 0 ? _e : [],
          sourceClient,
          targetPrincipal,
          targetScopes: Array.isArray(targetScopes) ? targetScopes : [targetScopes]
        });
        return client;
      }
      /**
       * Create a credentials instance using the given input options.
       * @param json The input object.
       * @param options The JWT or UserRefresh options for the client
       * @returns JWT or UserRefresh Client with data
       */
      fromJSON(json, options = {}) {
        let client;
        const preferredUniverseDomain = (0, util_1.originalOrCamelOptions)(options).get("universe_domain");
        if (json.type === refreshclient_1.USER_REFRESH_ACCOUNT_TYPE) {
          client = new refreshclient_1.UserRefreshClient(options);
          client.fromJSON(json);
        } else if (json.type === impersonated_1.IMPERSONATED_ACCOUNT_TYPE) {
          client = this.fromImpersonatedJSON(json);
        } else if (json.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
          client = externalclient_1.ExternalAccountClient.fromJSON(json, options);
          client.scopes = this.getAnyScopes();
        } else if (json.type === externalAccountAuthorizedUserClient_1.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) {
          client = new externalAccountAuthorizedUserClient_1.ExternalAccountAuthorizedUserClient(json, options);
        } else {
          options.scopes = this.scopes;
          client = new jwtclient_1.JWT(options);
          this.setGapicJWTValues(client);
          client.fromJSON(json);
        }
        if (preferredUniverseDomain) {
          client.universeDomain = preferredUniverseDomain;
        }
        return client;
      }
      /**
       * Return a JWT or UserRefreshClient from JavaScript object, caching both the
       * object used to instantiate and the client.
       * @param json The input object.
       * @param options The JWT or UserRefresh options for the client
       * @returns JWT or UserRefresh Client with data
       */
      _cacheClientFromJSON(json, options) {
        const client = this.fromJSON(json, options);
        this.jsonContent = json;
        this.cachedCredential = client;
        return client;
      }
      fromStream(inputStream, optionsOrCallback = {}, callback) {
        let options = {};
        if (typeof optionsOrCallback === "function") {
          callback = optionsOrCallback;
        } else {
          options = optionsOrCallback;
        }
        if (callback) {
          this.fromStreamAsync(inputStream, options).then((r) => callback(null, r), callback);
        } else {
          return this.fromStreamAsync(inputStream, options);
        }
      }
      fromStreamAsync(inputStream, options) {
        return new Promise((resolve, reject) => {
          if (!inputStream) {
            throw new Error("Must pass in a stream containing the Google auth settings.");
          }
          let s = "";
          inputStream.setEncoding("utf8").on("error", reject).on("data", (chunk) => s += chunk).on("end", () => {
            try {
              try {
                const data = JSON.parse(s);
                const r = this._cacheClientFromJSON(data, options);
                return resolve(r);
              } catch (err) {
                if (!this.keyFilename)
                  throw err;
                const client = new jwtclient_1.JWT({
                  ...this.clientOptions,
                  keyFile: this.keyFilename
                });
                this.cachedCredential = client;
                this.setGapicJWTValues(client);
                return resolve(client);
              }
            } catch (err) {
              return reject(err);
            }
          });
        });
      }
      /**
       * Create a credentials instance using the given API key string.
       * @param apiKey The API key string
       * @param options An optional options object.
       * @returns A JWT loaded from the key
       */
      fromAPIKey(apiKey, options) {
        options = options || {};
        const client = new jwtclient_1.JWT(options);
        client.fromAPIKey(apiKey);
        return client;
      }
      /**
       * Determines whether the current operating system is Windows.
       * @api private
       */
      _isWindows() {
        const sys = os.platform();
        if (sys && sys.length >= 3) {
          if (sys.substring(0, 3).toLowerCase() === "win") {
            return true;
          }
        }
        return false;
      }
      /**
       * Run the Google Cloud SDK command that prints the default project ID
       */
      async getDefaultServiceProjectId() {
        return new Promise((resolve) => {
          (0, child_process_1.exec)("gcloud config config-helper --format json", (err, stdout) => {
            if (!err && stdout) {
              try {
                const projectId = JSON.parse(stdout).configuration.properties.core.project;
                resolve(projectId);
                return;
              } catch (e) {
              }
            }
            resolve(null);
          });
        });
      }
      /**
       * Loads the project id from environment variables.
       * @api private
       */
      getProductionProjectId() {
        return process.env["GCLOUD_PROJECT"] || process.env["GOOGLE_CLOUD_PROJECT"] || process.env["gcloud_project"] || process.env["google_cloud_project"];
      }
      /**
       * Loads the project id from the GOOGLE_APPLICATION_CREDENTIALS json file.
       * @api private
       */
      async getFileProjectId() {
        if (this.cachedCredential) {
          return this.cachedCredential.projectId;
        }
        if (this.keyFilename) {
          const creds = await this.getClient();
          if (creds && creds.projectId) {
            return creds.projectId;
          }
        }
        const r = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
        if (r) {
          return r.projectId;
        } else {
          return null;
        }
      }
      /**
       * Gets the project ID from external account client if available.
       */
      async getExternalAccountClientProjectId() {
        if (!this.jsonContent || this.jsonContent.type !== baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
          return null;
        }
        const creds = await this.getClient();
        return await creds.getProjectId();
      }
      /**
       * Gets the Compute Engine project ID if it can be inferred.
       */
      async getGCEProjectId() {
        try {
          const r = await gcpMetadata.project("project-id");
          return r;
        } catch (e) {
          return null;
        }
      }
      getCredentials(callback) {
        if (callback) {
          this.getCredentialsAsync().then((r) => callback(null, r), callback);
        } else {
          return this.getCredentialsAsync();
        }
      }
      async getCredentialsAsync() {
        const client = await this.getClient();
        if (client instanceof impersonated_1.Impersonated) {
          return { client_email: client.getTargetPrincipal() };
        }
        if (client instanceof baseexternalclient_1.BaseExternalAccountClient) {
          const serviceAccountEmail = client.getServiceAccountEmail();
          if (serviceAccountEmail) {
            return {
              client_email: serviceAccountEmail,
              universe_domain: client.universeDomain
            };
          }
        }
        if (this.jsonContent) {
          return {
            client_email: this.jsonContent.client_email,
            private_key: this.jsonContent.private_key,
            universe_domain: this.jsonContent.universe_domain
          };
        }
        if (await this._checkIsGCE()) {
          const [client_email, universe_domain] = await Promise.all([
            gcpMetadata.instance("service-accounts/default/email"),
            this.getUniverseDomain()
          ]);
          return { client_email, universe_domain };
        }
        throw new Error(GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
      }
      /**
       * Automatically obtain an {@link AuthClient `AuthClient`} based on the
       * provided configuration. If no options were passed, use Application
       * Default Credentials.
       */
      async getClient() {
        if (!this.cachedCredential) {
          if (this.jsonContent) {
            this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
          } else if (this.keyFilename) {
            const filePath = path.resolve(this.keyFilename);
            const stream = fs.createReadStream(filePath);
            await this.fromStreamAsync(stream, this.clientOptions);
          } else {
            await this.getApplicationDefaultAsync(this.clientOptions);
          }
        }
        return this.cachedCredential;
      }
      /**
       * Creates a client which will fetch an ID token for authorization.
       * @param targetAudience the audience for the fetched ID token.
       * @returns IdTokenClient for making HTTP calls authenticated with ID tokens.
       */
      async getIdTokenClient(targetAudience) {
        const client = await this.getClient();
        if (!("fetchIdToken" in client)) {
          throw new Error("Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.");
        }
        return new idtokenclient_1.IdTokenClient({ targetAudience, idTokenProvider: client });
      }
      /**
       * Automatically obtain application default credentials, and return
       * an access token for making requests.
       */
      async getAccessToken() {
        const client = await this.getClient();
        return (await client.getAccessToken()).token;
      }
      /**
       * Obtain the HTTP headers that will provide authorization for a given
       * request.
       */
      async getRequestHeaders(url) {
        const client = await this.getClient();
        return client.getRequestHeaders(url);
      }
      /**
       * Obtain credentials for a request, then attach the appropriate headers to
       * the request options.
       * @param opts Axios or Request options on which to attach the headers
       */
      async authorizeRequest(opts) {
        opts = opts || {};
        const url = opts.url || opts.uri;
        const client = await this.getClient();
        const headers = await client.getRequestHeaders(url);
        opts.headers = Object.assign(opts.headers || {}, headers);
        return opts;
      }
      /**
       * Automatically obtain application default credentials, and make an
       * HTTP request using the given options.
       * @param opts Axios request options for the HTTP request.
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async request(opts) {
        const client = await this.getClient();
        return client.request(opts);
      }
      /**
       * Determine the compute environment in which the code is running.
       */
      getEnv() {
        return (0, envDetect_1.getEnv)();
      }
      /**
       * Sign the given data with the current private key, or go out
       * to the IAM API to sign it.
       * @param data The data to be signed.
       * @param endpoint A custom endpoint to use.
       *
       * @example
       * ```
       * sign('data', 'https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/');
       * ```
       */
      async sign(data, endpoint) {
        const client = await this.getClient();
        const universe = await this.getUniverseDomain();
        endpoint = endpoint || `https://iamcredentials.${universe}/v1/projects/-/serviceAccounts/`;
        if (client instanceof impersonated_1.Impersonated) {
          const signed = await client.sign(data);
          return signed.signedBlob;
        }
        const crypto2 = (0, crypto_1.createCrypto)();
        if (client instanceof jwtclient_1.JWT && client.key) {
          const sign = await crypto2.sign(client.key, data);
          return sign;
        }
        const creds = await this.getCredentials();
        if (!creds.client_email) {
          throw new Error("Cannot sign data without `client_email`.");
        }
        return this.signBlob(crypto2, creds.client_email, data, endpoint);
      }
      async signBlob(crypto2, emailOrUniqueId, data, endpoint) {
        const url = new URL(endpoint + `${emailOrUniqueId}:signBlob`);
        const res = await this.request({
          method: "POST",
          url: url.href,
          data: {
            payload: crypto2.encodeBase64StringUtf8(data)
          },
          retry: true,
          retryConfig: {
            httpMethodsToRetry: ["POST"]
          }
        });
        return res.data.signedBlob;
      }
    };
    exports.GoogleAuth = GoogleAuth;
    GoogleAuth.DefaultTransporter = transporters_1.DefaultTransporter;
  }
});

// node_modules/google-auth-library/build/src/auth/iam.js
var require_iam = __commonJS({
  "node_modules/google-auth-library/build/src/auth/iam.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IAMAuth = void 0;
    var IAMAuth = class {
      /**
       * IAM credentials.
       *
       * @param selector the iam authority selector
       * @param token the token
       * @constructor
       */
      constructor(selector, token) {
        this.selector = selector;
        this.token = token;
        this.selector = selector;
        this.token = token;
      }
      /**
       * Acquire the HTTP headers required to make an authenticated request.
       */
      getRequestHeaders() {
        return {
          "x-goog-iam-authority-selector": this.selector,
          "x-goog-iam-authorization-token": this.token
        };
      }
    };
    exports.IAMAuth = IAMAuth;
  }
});

// node_modules/google-auth-library/build/src/auth/downscopedclient.js
var require_downscopedclient = __commonJS({
  "node_modules/google-auth-library/build/src/auth/downscopedclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DownscopedClient = exports.EXPIRATION_TIME_OFFSET = exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
    var stream = require_stream();
    var authclient_1 = require_authclient();
    var sts = require_stscredentials();
    var STS_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:token-exchange";
    var STS_REQUEST_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:access_token";
    var STS_SUBJECT_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:access_token";
    exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
    exports.EXPIRATION_TIME_OFFSET = 5 * 60 * 1e3;
    var DownscopedClient = class extends authclient_1.AuthClient {
      /**
       * Instantiates a downscoped client object using the provided source
       * AuthClient and credential access boundary rules.
       * To downscope permissions of a source AuthClient, a Credential Access
       * Boundary that specifies which resources the new credential can access, as
       * well as an upper bound on the permissions that are available on each
       * resource, has to be defined. A downscoped client can then be instantiated
       * using the source AuthClient and the Credential Access Boundary.
       * @param authClient The source AuthClient to be downscoped based on the
       *   provided Credential Access Boundary rules.
       * @param credentialAccessBoundary The Credential Access Boundary which
       *   contains a list of access boundary rules. Each rule contains information
       *   on the resource that the rule applies to, the upper bound of the
       *   permissions that are available on that resource and an optional
       *   condition to further restrict permissions.
       * @param additionalOptions **DEPRECATED, set this in the provided `authClient`.**
       *   Optional additional behavior customization options.
       * @param quotaProjectId **DEPRECATED, set this in the provided `authClient`.**
       *   Optional quota project id for setting up in the x-goog-user-project header.
       */
      constructor(authClient, credentialAccessBoundary, additionalOptions, quotaProjectId) {
        super({ ...additionalOptions, quotaProjectId });
        this.authClient = authClient;
        this.credentialAccessBoundary = credentialAccessBoundary;
        if (credentialAccessBoundary.accessBoundary.accessBoundaryRules.length === 0) {
          throw new Error("At least one access boundary rule needs to be defined.");
        } else if (credentialAccessBoundary.accessBoundary.accessBoundaryRules.length > exports.MAX_ACCESS_BOUNDARY_RULES_COUNT) {
          throw new Error(`The provided access boundary has more than ${exports.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
        }
        for (const rule of credentialAccessBoundary.accessBoundary.accessBoundaryRules) {
          if (rule.availablePermissions.length === 0) {
            throw new Error("At least one permission should be defined in access boundary rules.");
          }
        }
        this.stsCredential = new sts.StsCredentials(`https://sts.${this.universeDomain}/v1/token`);
        this.cachedDownscopedAccessToken = null;
      }
      /**
       * Provides a mechanism to inject Downscoped access tokens directly.
       * The expiry_date field is required to facilitate determination of the token
       * expiration which would make it easier for the token consumer to handle.
       * @param credentials The Credentials object to set on the current client.
       */
      setCredentials(credentials) {
        if (!credentials.expiry_date) {
          throw new Error("The access token expiry_date field is missing in the provided credentials.");
        }
        super.setCredentials(credentials);
        this.cachedDownscopedAccessToken = credentials;
      }
      async getAccessToken() {
        if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) {
          await this.refreshAccessTokenAsync();
        }
        return {
          token: this.cachedDownscopedAccessToken.access_token,
          expirationTime: this.cachedDownscopedAccessToken.expiry_date,
          res: this.cachedDownscopedAccessToken.res
        };
      }
      /**
       * The main authentication interface. It takes an optional url which when
       * present is the endpoint being accessed, and returns a Promise which
       * resolves with authorization header fields.
       *
       * The result has the form:
       * { Authorization: 'Bearer <access_token_value>' }
       */
      async getRequestHeaders() {
        const accessTokenResponse = await this.getAccessToken();
        const headers = {
          Authorization: `Bearer ${accessTokenResponse.token}`
        };
        return this.addSharedMetadataHeaders(headers);
      }
      request(opts, callback) {
        if (callback) {
          this.requestAsync(opts).then((r) => callback(null, r), (e) => {
            return callback(e, e.response);
          });
        } else {
          return this.requestAsync(opts);
        }
      }
      /**
       * Authenticates the provided HTTP request, processes it and resolves with the
       * returned response.
       * @param opts The HTTP request options.
       * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure
       * @return A promise that resolves with the successful response.
       */
      async requestAsync(opts, reAuthRetried = false) {
        let response;
        try {
          const requestHeaders = await this.getRequestHeaders();
          opts.headers = opts.headers || {};
          if (requestHeaders && requestHeaders["x-goog-user-project"]) {
            opts.headers["x-goog-user-project"] = requestHeaders["x-goog-user-project"];
          }
          if (requestHeaders && requestHeaders.Authorization) {
            opts.headers.Authorization = requestHeaders.Authorization;
          }
          response = await this.transporter.request(opts);
        } catch (e) {
          const res = e.response;
          if (res) {
            const statusCode = res.status;
            const isReadableStream = res.config.data instanceof stream.Readable;
            const isAuthErr = statusCode === 401 || statusCode === 403;
            if (!reAuthRetried && isAuthErr && !isReadableStream && this.forceRefreshOnFailure) {
              await this.refreshAccessTokenAsync();
              return await this.requestAsync(opts, true);
            }
          }
          throw e;
        }
        return response;
      }
      /**
       * Forces token refresh, even if unexpired tokens are currently cached.
       * GCP access tokens are retrieved from authclient object/source credential.
       * Then GCP access tokens are exchanged for downscoped access tokens via the
       * token exchange endpoint.
       * @return A promise that resolves with the fresh downscoped access token.
       */
      async refreshAccessTokenAsync() {
        var _a;
        const subjectToken = (await this.authClient.getAccessToken()).token;
        const stsCredentialsOptions = {
          grantType: STS_GRANT_TYPE,
          requestedTokenType: STS_REQUEST_TOKEN_TYPE,
          subjectToken,
          subjectTokenType: STS_SUBJECT_TOKEN_TYPE
        };
        const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, void 0, this.credentialAccessBoundary);
        const sourceCredExpireDate = ((_a = this.authClient.credentials) === null || _a === void 0 ? void 0 : _a.expiry_date) || null;
        const expiryDate = stsResponse.expires_in ? (/* @__PURE__ */ new Date()).getTime() + stsResponse.expires_in * 1e3 : sourceCredExpireDate;
        this.cachedDownscopedAccessToken = {
          access_token: stsResponse.access_token,
          expiry_date: expiryDate,
          res: stsResponse.res
        };
        this.credentials = {};
        Object.assign(this.credentials, this.cachedDownscopedAccessToken);
        delete this.credentials.res;
        this.emit("tokens", {
          refresh_token: null,
          expiry_date: this.cachedDownscopedAccessToken.expiry_date,
          access_token: this.cachedDownscopedAccessToken.access_token,
          token_type: "Bearer",
          id_token: null
        });
        return this.cachedDownscopedAccessToken;
      }
      /**
       * Returns whether the provided credentials are expired or not.
       * If there is no expiry time, assumes the token is not expired or expiring.
       * @param downscopedAccessToken The credentials to check for expiration.
       * @return Whether the credentials are expired or not.
       */
      isExpired(downscopedAccessToken) {
        const now = (/* @__PURE__ */ new Date()).getTime();
        return downscopedAccessToken.expiry_date ? now >= downscopedAccessToken.expiry_date - this.eagerRefreshThresholdMillis : false;
      }
    };
    exports.DownscopedClient = DownscopedClient;
  }
});

// node_modules/google-auth-library/build/src/auth/passthrough.js
var require_passthrough = __commonJS({
  "node_modules/google-auth-library/build/src/auth/passthrough.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PassThroughClient = void 0;
    var authclient_1 = require_authclient();
    var PassThroughClient = class extends authclient_1.AuthClient {
      /**
       * Creates a request without any authentication headers or checks.
       *
       * @remarks
       *
       * In testing environments it may be useful to change the provided
       * {@link AuthClient.transporter} for any desired request overrides/handling.
       *
       * @param opts
       * @returns The response of the request.
       */
      async request(opts) {
        return this.transporter.request(opts);
      }
      /**
       * A required method of the base class.
       * Always will return an empty object.
       *
       * @returns {}
       */
      async getAccessToken() {
        return {};
      }
      /**
       * A required method of the base class.
       * Always will return an empty object.
       *
       * @returns {}
       */
      async getRequestHeaders() {
        return {};
      }
    };
    exports.PassThroughClient = PassThroughClient;
    var a = new PassThroughClient();
    a.getAccessToken();
  }
});

// node_modules/google-auth-library/build/src/index.js
var require_src4 = __commonJS({
  "node_modules/google-auth-library/build/src/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GoogleAuth = exports.auth = exports.DefaultTransporter = exports.PassThroughClient = exports.PluggableAuthClient = exports.DownscopedClient = exports.BaseExternalAccountClient = exports.ExternalAccountClient = exports.IdentityPoolClient = exports.AwsClient = exports.UserRefreshClient = exports.LoginTicket = exports.OAuth2Client = exports.CodeChallengeMethod = exports.Impersonated = exports.JWT = exports.JWTAccess = exports.IdTokenClient = exports.IAMAuth = exports.GCPEnv = exports.Compute = exports.DEFAULT_UNIVERSE = exports.AuthClient = exports.gaxios = exports.gcpMetadata = void 0;
    var googleauth_1 = require_googleauth();
    Object.defineProperty(exports, "GoogleAuth", { enumerable: true, get: function() {
      return googleauth_1.GoogleAuth;
    } });
    exports.gcpMetadata = require_src2();
    exports.gaxios = require_src();
    var authclient_1 = require_authclient();
    Object.defineProperty(exports, "AuthClient", { enumerable: true, get: function() {
      return authclient_1.AuthClient;
    } });
    Object.defineProperty(exports, "DEFAULT_UNIVERSE", { enumerable: true, get: function() {
      return authclient_1.DEFAULT_UNIVERSE;
    } });
    var computeclient_1 = require_computeclient();
    Object.defineProperty(exports, "Compute", { enumerable: true, get: function() {
      return computeclient_1.Compute;
    } });
    var envDetect_1 = require_envDetect();
    Object.defineProperty(exports, "GCPEnv", { enumerable: true, get: function() {
      return envDetect_1.GCPEnv;
    } });
    var iam_1 = require_iam();
    Object.defineProperty(exports, "IAMAuth", { enumerable: true, get: function() {
      return iam_1.IAMAuth;
    } });
    var idtokenclient_1 = require_idtokenclient();
    Object.defineProperty(exports, "IdTokenClient", { enumerable: true, get: function() {
      return idtokenclient_1.IdTokenClient;
    } });
    var jwtaccess_1 = require_jwtaccess();
    Object.defineProperty(exports, "JWTAccess", { enumerable: true, get: function() {
      return jwtaccess_1.JWTAccess;
    } });
    var jwtclient_1 = require_jwtclient();
    Object.defineProperty(exports, "JWT", { enumerable: true, get: function() {
      return jwtclient_1.JWT;
    } });
    var impersonated_1 = require_impersonated();
    Object.defineProperty(exports, "Impersonated", { enumerable: true, get: function() {
      return impersonated_1.Impersonated;
    } });
    var oauth2client_1 = require_oauth2client();
    Object.defineProperty(exports, "CodeChallengeMethod", { enumerable: true, get: function() {
      return oauth2client_1.CodeChallengeMethod;
    } });
    Object.defineProperty(exports, "OAuth2Client", { enumerable: true, get: function() {
      return oauth2client_1.OAuth2Client;
    } });
    var loginticket_1 = require_loginticket();
    Object.defineProperty(exports, "LoginTicket", { enumerable: true, get: function() {
      return loginticket_1.LoginTicket;
    } });
    var refreshclient_1 = require_refreshclient();
    Object.defineProperty(exports, "UserRefreshClient", { enumerable: true, get: function() {
      return refreshclient_1.UserRefreshClient;
    } });
    var awsclient_1 = require_awsclient();
    Object.defineProperty(exports, "AwsClient", { enumerable: true, get: function() {
      return awsclient_1.AwsClient;
    } });
    var identitypoolclient_1 = require_identitypoolclient();
    Object.defineProperty(exports, "IdentityPoolClient", { enumerable: true, get: function() {
      return identitypoolclient_1.IdentityPoolClient;
    } });
    var externalclient_1 = require_externalclient();
    Object.defineProperty(exports, "ExternalAccountClient", { enumerable: true, get: function() {
      return externalclient_1.ExternalAccountClient;
    } });
    var baseexternalclient_1 = require_baseexternalclient();
    Object.defineProperty(exports, "BaseExternalAccountClient", { enumerable: true, get: function() {
      return baseexternalclient_1.BaseExternalAccountClient;
    } });
    var downscopedclient_1 = require_downscopedclient();
    Object.defineProperty(exports, "DownscopedClient", { enumerable: true, get: function() {
      return downscopedclient_1.DownscopedClient;
    } });
    var pluggable_auth_client_1 = require_pluggable_auth_client();
    Object.defineProperty(exports, "PluggableAuthClient", { enumerable: true, get: function() {
      return pluggable_auth_client_1.PluggableAuthClient;
    } });
    var passthrough_1 = require_passthrough();
    Object.defineProperty(exports, "PassThroughClient", { enumerable: true, get: function() {
      return passthrough_1.PassThroughClient;
    } });
    var transporters_1 = require_transporters();
    Object.defineProperty(exports, "DefaultTransporter", { enumerable: true, get: function() {
      return transporters_1.DefaultTransporter;
    } });
    var auth = new googleauth_1.GoogleAuth();
    exports.auth = auth;
  }
});

// node_modules/@google-cloud/vertexai/build/src/types/errors.js
var require_errors = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/types/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GoogleGenerativeAIError = exports.GoogleAuthError = exports.ClientError = void 0;
    var GoogleAuthError = class extends Error {
      constructor(message, stackTrace = void 0) {
        super(message);
        this.stackTrace = void 0;
        this.message = constructErrorMessage("GoogleAuthError", message);
        this.name = "GoogleAuthError";
        this.stackTrace = stackTrace;
      }
    };
    exports.GoogleAuthError = GoogleAuthError;
    var ClientError = class extends Error {
      constructor(message, stackTrace = void 0) {
        super(message);
        this.stackTrace = void 0;
        this.message = constructErrorMessage("ClientError", message);
        this.name = "ClientError";
        this.stackTrace = stackTrace;
      }
    };
    exports.ClientError = ClientError;
    var GoogleGenerativeAIError = class extends Error {
      constructor(message, stackTrace = void 0) {
        super(message);
        this.stackTrace = void 0;
        this.message = constructErrorMessage("GoogleGenerativeAIError", message);
        this.name = "GoogleGenerativeAIError";
        this.stackTrace = stackTrace;
      }
    };
    exports.GoogleGenerativeAIError = GoogleGenerativeAIError;
    function constructErrorMessage(exceptionClass, message) {
      return `[VertexAI.${exceptionClass}]: ${message}`;
    }
  }
});

// node_modules/@google-cloud/vertexai/build/src/util/constants.js
var require_constants = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/util/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CREDENTIAL_ERROR_MESSAGE = exports.USER_AGENT = exports.SYSTEM_ROLE = exports.MODEL_ROLE = exports.USER_ROLE = exports.STREAMING_GENERATE_CONTENT_METHOD = exports.GENERATE_CONTENT_METHOD = void 0;
    exports.GENERATE_CONTENT_METHOD = "generateContent";
    exports.STREAMING_GENERATE_CONTENT_METHOD = "streamGenerateContent";
    exports.USER_ROLE = "user";
    exports.MODEL_ROLE = "model";
    exports.SYSTEM_ROLE = "system";
    var USER_AGENT_PRODUCT = "model-builder";
    var CLIENT_LIBRARY_VERSION = "1.1.0";
    var CLIENT_LIBRARY_LANGUAGE = `grpc-node/${CLIENT_LIBRARY_VERSION}`;
    exports.USER_AGENT = `${USER_AGENT_PRODUCT}/${CLIENT_LIBRARY_VERSION} ${CLIENT_LIBRARY_LANGUAGE}`;
    exports.CREDENTIAL_ERROR_MESSAGE = "\nUnable to authenticate your request        \nDepending on your run time environment, you can get authentication by        \n- if in local instance or cloud shell: `!gcloud auth login`        \n- if in Colab:        \n    -`from google.colab import auth`        \n    -`auth.authenticate_user()`        \n- if in service account or other: please follow guidance in https://cloud.google.com/docs/authentication";
  }
});

// node_modules/@google-cloud/vertexai/build/src/util/index.js
var require_util4 = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/util/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.constants = void 0;
    exports.constants = require_constants();
  }
});

// node_modules/@google-cloud/vertexai/build/src/functions/post_fetch_processing.js
var require_post_fetch_processing = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/functions/post_fetch_processing.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.processCountTokenResponse = exports.processUnary = exports.aggregateResponses = exports.processStream = exports.throwErrorIfNotOK = void 0;
    var util_1 = require_util4();
    var errors_1 = require_errors();
    async function throwErrorIfNotOK(response) {
      if (response === void 0) {
        throw new errors_1.GoogleGenerativeAIError("response is undefined");
      }
      if (!response.ok) {
        const status = response.status;
        const statusText = response.statusText;
        const errorBody = await response.json();
        const errorMessage = `got status: ${status} ${statusText}. ${JSON.stringify(errorBody)}`;
        if (status >= 400 && status < 500) {
          throw new errors_1.ClientError(errorMessage);
        }
        throw new errors_1.GoogleGenerativeAIError(errorMessage);
      }
    }
    exports.throwErrorIfNotOK = throwErrorIfNotOK;
    var responseLineRE = /^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
    async function* generateResponseSequence(stream) {
      const reader = stream.getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        yield addMissingIndexAndRole(value);
      }
    }
    async function processStream(response) {
      if (response === void 0) {
        throw new errors_1.GoogleGenerativeAIError("Error processing stream because response === undefined");
      }
      if (!response.body) {
        throw new errors_1.GoogleGenerativeAIError("Error processing stream because response.body not found");
      }
      const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", { fatal: true }));
      const responseStream = getResponseStream(inputStream);
      const [stream1, stream2] = responseStream.tee();
      return Promise.resolve({
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2)
      });
    }
    exports.processStream = processStream;
    async function getResponsePromise(stream) {
      const allResponses = [];
      const reader = stream.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          return aggregateResponses(allResponses);
        }
        allResponses.push(value);
      }
    }
    function getResponseStream(inputStream) {
      const reader = inputStream.getReader();
      const stream = new ReadableStream({
        start(controller) {
          let currentText = "";
          return pump();
          function pump() {
            return reader.read().then(({ value, done }) => {
              if (done) {
                if (currentText.trim()) {
                  controller.error(new errors_1.GoogleGenerativeAIError("Failed to parse final chunk of stream"));
                  return;
                }
                controller.close();
                return;
              }
              currentText += value;
              let match = currentText.match(responseLineRE);
              let parsedResponse;
              while (match) {
                try {
                  parsedResponse = JSON.parse(match[1]);
                } catch (e) {
                  controller.error(new errors_1.GoogleGenerativeAIError(`Error parsing JSON response from stream chunk: "${match[1]}"`));
                  return;
                }
                controller.enqueue(parsedResponse);
                currentText = currentText.substring(match[0].length);
                match = currentText.match(responseLineRE);
              }
              return pump();
            });
          }
        }
      });
      return stream;
    }
    function aggregateResponses(responses) {
      var _a, _b;
      const lastResponse = responses[responses.length - 1];
      if (lastResponse === void 0) {
        throw new errors_1.GoogleGenerativeAIError("Error aggregating stream chunks because the final response in stream chunk is undefined");
      }
      const aggregatedResponse = {};
      if (lastResponse.promptFeedback) {
        aggregatedResponse.promptFeedback = lastResponse.promptFeedback;
      }
      if (lastResponse.usageMetadata) {
        aggregatedResponse.usageMetadata = lastResponse.usageMetadata;
      }
      for (const response of responses) {
        if (!response.candidates || response.candidates.length === 0) {
          continue;
        }
        for (let i = 0; i < response.candidates.length; i++) {
          if (!aggregatedResponse.candidates) {
            aggregatedResponse.candidates = [];
          }
          if (!aggregatedResponse.candidates[i]) {
            aggregatedResponse.candidates[i] = {
              index: (_a = response.candidates[i].index) !== null && _a !== void 0 ? _a : i,
              content: {
                role: (_b = response.candidates[i].content.role) !== null && _b !== void 0 ? _b : util_1.constants.MODEL_ROLE,
                parts: [{ text: "" }]
              }
            };
          }
          const citationMetadataAggregated = aggregateCitationMetadataForCandidate(response.candidates[i], aggregatedResponse.candidates[i]);
          if (citationMetadataAggregated) {
            aggregatedResponse.candidates[i].citationMetadata = citationMetadataAggregated;
          }
          const finishResonOfChunk = response.candidates[i].finishReason;
          if (finishResonOfChunk) {
            aggregatedResponse.candidates[i].finishReason = response.candidates[i].finishReason;
          }
          const finishMessageOfChunk = response.candidates[i].finishMessage;
          if (finishMessageOfChunk) {
            aggregatedResponse.candidates[i].finishMessage = finishMessageOfChunk;
          }
          const safetyRatingsOfChunk = response.candidates[i].safetyRatings;
          if (safetyRatingsOfChunk) {
            aggregatedResponse.candidates[i].safetyRatings = safetyRatingsOfChunk;
          }
          if (response.candidates[i].content && response.candidates[i].content.parts && response.candidates[i].content.parts.length > 0) {
            for (const part of response.candidates[i].content.parts) {
              if (part.text) {
                aggregatedResponse.candidates[i].content.parts[0].text += part.text;
              }
              if (part.functionCall) {
                aggregatedResponse.candidates[i].content.parts[0].functionCall = part.functionCall;
                delete aggregatedResponse.candidates[i].content.parts[0].text;
              }
            }
          }
          const groundingMetadataAggregated = aggregateGroundingMetadataForCandidate(response.candidates[i], aggregatedResponse.candidates[i]);
          if (groundingMetadataAggregated) {
            aggregatedResponse.candidates[i].groundingMetadata = groundingMetadataAggregated;
          }
        }
      }
      return aggregatedResponse;
    }
    exports.aggregateResponses = aggregateResponses;
    function aggregateCitationMetadataForCandidate(candidateChunk, aggregatedCandidate) {
      var _a;
      if (!candidateChunk.citationMetadata) {
        return;
      }
      const emptyCitationMetadata = {
        citations: []
      };
      const citationMetadataAggregated = (_a = aggregatedCandidate.citationMetadata) !== null && _a !== void 0 ? _a : emptyCitationMetadata;
      const citationMetadataChunk = candidateChunk.citationMetadata;
      if (citationMetadataChunk.citations) {
        citationMetadataAggregated.citations = citationMetadataAggregated.citations.concat(citationMetadataChunk.citations);
      }
      return citationMetadataAggregated;
    }
    function aggregateGroundingMetadataForCandidate(candidateChunk, aggregatedCandidate) {
      var _a;
      if (!candidateChunk.groundingMetadata) {
        return;
      }
      const emptyGroundingMetadata = {
        webSearchQueries: [],
        groundingAttributions: []
      };
      const groundingMetadataAggregated = (_a = aggregatedCandidate.groundingMetadata) !== null && _a !== void 0 ? _a : emptyGroundingMetadata;
      const groundingMetadataChunk = candidateChunk.groundingMetadata;
      if (groundingMetadataChunk.webSearchQueries) {
        groundingMetadataAggregated.webSearchQueries = groundingMetadataAggregated.webSearchQueries.concat(groundingMetadataChunk.webSearchQueries);
      }
      if (groundingMetadataChunk.groundingAttributions) {
        groundingMetadataAggregated.groundingAttributions = groundingMetadataAggregated.groundingAttributions.concat(groundingMetadataChunk.groundingAttributions);
      }
      return groundingMetadataAggregated;
    }
    function addMissingIndexAndRole(response) {
      const generateContentResponse = response;
      if (generateContentResponse.candidates && generateContentResponse.candidates.length > 0) {
        generateContentResponse.candidates.forEach((candidate, index) => {
          if (candidate.index === void 0) {
            generateContentResponse.candidates[index].index = index;
          }
          if (candidate.content === void 0) {
            generateContentResponse.candidates[index].content = {};
          }
          if (candidate.content.role === void 0) {
            generateContentResponse.candidates[index].content.role = util_1.constants.MODEL_ROLE;
          }
        });
      }
      return generateContentResponse;
    }
    async function processUnary(response) {
      if (response !== void 0) {
        const responseJson = await response.json();
        const generateContentResponse = addMissingIndexAndRole(responseJson);
        return Promise.resolve({
          response: generateContentResponse
        });
      }
      return Promise.resolve({
        response: {}
      });
    }
    exports.processUnary = processUnary;
    async function processCountTokenResponse(response) {
      if (response) {
        return response.json();
      }
      return Promise.resolve({});
    }
    exports.processCountTokenResponse = processCountTokenResponse;
  }
});

// node_modules/@google-cloud/vertexai/build/src/functions/post_request.js
var require_post_request = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/functions/post_request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.postRequest = void 0;
    var API_BASE_PATH = "aiplatform.googleapis.com";
    var GOOGLE_INTERNAL_ENDPOINT = "googleapis.com";
    var AUTHORIZATION_HEADER = "Authorization";
    var CONTENT_TYPE_HEADER = "Content-Type";
    var USER_AGENT_HEADER = "User-Agent";
    var X_GOOG_API_CLIENT_HEADER = "X-Goog-Api-Client";
    var SERVER_RESERVED_HEADERS = [AUTHORIZATION_HEADER, CONTENT_TYPE_HEADER];
    var errors_1 = require_errors();
    var constants = require_constants();
    async function postRequest({ region, project, resourcePath, resourceMethod, token, data, apiEndpoint, requestOptions, apiVersion = "v1" }) {
      const vertexBaseEndpoint = apiEndpoint !== null && apiEndpoint !== void 0 ? apiEndpoint : `${region}-${API_BASE_PATH}`;
      let vertexEndpoint = `https://${vertexBaseEndpoint}/${apiVersion}/projects/${project}/locations/${region}/${resourcePath}:${resourceMethod}`;
      if (resourceMethod === constants.STREAMING_GENERATE_CONTENT_METHOD) {
        vertexEndpoint += "?alt=sse";
      }
      const necessaryHeaders = new Headers({
        [AUTHORIZATION_HEADER]: `Bearer ${token}`,
        [CONTENT_TYPE_HEADER]: "application/json",
        [USER_AGENT_HEADER]: constants.USER_AGENT
      });
      const totalHeaders = getExtraHeaders(vertexBaseEndpoint, necessaryHeaders, requestOptions);
      return fetch(vertexEndpoint, {
        ...getFetchOptions(requestOptions),
        method: "POST",
        headers: totalHeaders,
        body: JSON.stringify(data)
      });
    }
    exports.postRequest = postRequest;
    function getFetchOptions(requestOptions) {
      const fetchOptions = {};
      if (!requestOptions || requestOptions.timeout === void 0 || requestOptions.timeout < 0) {
        return fetchOptions;
      }
      const abortController = new AbortController();
      const signal = abortController.signal;
      setTimeout(() => abortController.abort(), requestOptions.timeout);
      fetchOptions.signal = signal;
      return fetchOptions;
    }
    function stringHasLineBreak(header) {
      if (header === null || header === void 0) {
        return false;
      }
      return header.includes("\n") || header.includes("\r");
    }
    function headersHasLineBreak(customHeaders) {
      if (!customHeaders) {
        return false;
      }
      for (const [key, value] of customHeaders.entries()) {
        if (stringHasLineBreak(key) || stringHasLineBreak(value)) {
          return true;
        }
      }
      return false;
    }
    function getExtraHeaders(vertexBaseEndpoint, necessaryHeaders, requestOptions) {
      var _a;
      if (stringHasLineBreak(requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient)) {
        throw new errors_1.ClientError("Found line break in apiClient request option field, please remove the line break and try again.");
      }
      if (headersHasLineBreak(requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.customHeaders)) {
        throw new errors_1.ClientError("Found line break in customerHeaders request option field, please remove the line break and try again.");
      }
      const totalHeaders = new Headers(necessaryHeaders);
      const customHeaders = (_a = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.customHeaders) !== null && _a !== void 0 ? _a : new Headers();
      for (const [key, val] of customHeaders.entries()) {
        totalHeaders.append(key, val);
      }
      if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) {
        totalHeaders.append(X_GOOG_API_CLIENT_HEADER, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient);
      }
      let goldenHeaders;
      if (vertexBaseEndpoint.endsWith(GOOGLE_INTERNAL_ENDPOINT)) {
        goldenHeaders = necessaryHeaders;
      } else {
        goldenHeaders = customHeaders;
      }
      for (const header of SERVER_RESERVED_HEADERS) {
        if (goldenHeaders.has(header)) {
          totalHeaders.set(header, goldenHeaders.get(header));
        }
      }
      return totalHeaders;
    }
  }
});

// node_modules/@google-cloud/vertexai/build/src/functions/pre_fetch_processing.js
var require_pre_fetch_processing = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/functions/pre_fetch_processing.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateGenerationConfig = exports.validateGenerateContentRequest = exports.formatContentRequest = void 0;
    var constants = require_constants();
    function formatContentRequest(request, generationConfig, safetySettings) {
      if (typeof request === "string") {
        return {
          contents: [{ role: constants.USER_ROLE, parts: [{ text: request }] }],
          generationConfig,
          safetySettings
        };
      } else {
        return request;
      }
    }
    exports.formatContentRequest = formatContentRequest;
    function validateGenerateContentRequest(request) {
      const contents = request.contents;
      for (const content of contents) {
        for (const part of content.parts) {
          if ("fileData" in part) {
            const uri = part["fileData"]["fileUri"];
            if (!uri.startsWith("gs://")) {
              throw new URIError(`Found invalid Google Cloud Storage URI ${uri}, Google Cloud Storage URIs must start with gs://`);
            }
          }
        }
      }
    }
    exports.validateGenerateContentRequest = validateGenerateContentRequest;
    function validateGenerationConfig(generationConfig) {
      if ("topK" in generationConfig) {
        if (!(generationConfig.topK > 0) || !(generationConfig.topK <= 40)) {
          delete generationConfig.topK;
        }
      }
      return generationConfig;
    }
    exports.validateGenerationConfig = validateGenerationConfig;
  }
});

// node_modules/@google-cloud/vertexai/build/src/functions/generate_content.js
var require_generate_content = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/functions/generate_content.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateContentStream = exports.generateContent = void 0;
    var errors_1 = require_errors();
    var constants = require_constants();
    var post_fetch_processing_1 = require_post_fetch_processing();
    var post_request_1 = require_post_request();
    var pre_fetch_processing_1 = require_pre_fetch_processing();
    async function generateContent(location, project, publisherModelEndpoint, token, request, apiEndpoint, generationConfig, safetySettings, tools, requestOptions) {
      var _a, _b, _c;
      request = (0, pre_fetch_processing_1.formatContentRequest)(request, generationConfig, safetySettings);
      (0, pre_fetch_processing_1.validateGenerateContentRequest)(request);
      if (request.generationConfig) {
        request.generationConfig = (0, pre_fetch_processing_1.validateGenerationConfig)(request.generationConfig);
      }
      const generateContentRequest = {
        contents: request.contents,
        systemInstruction: request.systemInstruction,
        generationConfig: (_a = request.generationConfig) !== null && _a !== void 0 ? _a : generationConfig,
        safetySettings: (_b = request.safetySettings) !== null && _b !== void 0 ? _b : safetySettings,
        tools: (_c = request.tools) !== null && _c !== void 0 ? _c : tools
      };
      const response = await (0, post_request_1.postRequest)({
        region: location,
        project,
        resourcePath: publisherModelEndpoint,
        resourceMethod: constants.GENERATE_CONTENT_METHOD,
        token: await token,
        data: generateContentRequest,
        apiEndpoint,
        requestOptions
      }).catch((e) => {
        throw new errors_1.GoogleGenerativeAIError("exception posting request to model", e);
      });
      await (0, post_fetch_processing_1.throwErrorIfNotOK)(response).catch((e) => {
        throw e;
      });
      return (0, post_fetch_processing_1.processUnary)(response);
    }
    exports.generateContent = generateContent;
    async function generateContentStream(location, project, publisherModelEndpoint, token, request, apiEndpoint, generationConfig, safetySettings, tools, requestOptions) {
      var _a, _b, _c;
      request = (0, pre_fetch_processing_1.formatContentRequest)(request, generationConfig, safetySettings);
      (0, pre_fetch_processing_1.validateGenerateContentRequest)(request);
      if (request.generationConfig) {
        request.generationConfig = (0, pre_fetch_processing_1.validateGenerationConfig)(request.generationConfig);
      }
      const generateContentRequest = {
        contents: request.contents,
        systemInstruction: request.systemInstruction,
        generationConfig: (_a = request.generationConfig) !== null && _a !== void 0 ? _a : generationConfig,
        safetySettings: (_b = request.safetySettings) !== null && _b !== void 0 ? _b : safetySettings,
        tools: (_c = request.tools) !== null && _c !== void 0 ? _c : tools
      };
      const response = await (0, post_request_1.postRequest)({
        region: location,
        project,
        resourcePath: publisherModelEndpoint,
        resourceMethod: constants.STREAMING_GENERATE_CONTENT_METHOD,
        token: await token,
        data: generateContentRequest,
        apiEndpoint,
        requestOptions
      }).catch((e) => {
        throw new errors_1.GoogleGenerativeAIError("exception posting request", e);
      });
      await (0, post_fetch_processing_1.throwErrorIfNotOK)(response).catch((e) => {
        throw e;
      });
      return (0, post_fetch_processing_1.processStream)(response);
    }
    exports.generateContentStream = generateContentStream;
  }
});

// node_modules/@google-cloud/vertexai/build/src/models/chat_session.js
var require_chat_session = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/models/chat_session.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChatSessionPreview = exports.ChatSession = void 0;
    var generate_content_1 = require_generate_content();
    var errors_1 = require_errors();
    var util_1 = require_util4();
    var ChatSession = class {
      async getHistory() {
        return Promise.resolve(this.historyInternal);
      }
      /**
       * @constructor
       * @param request - {@link StartChatSessionRequest}
       */
      constructor(request, requestOptions) {
        var _a;
        this.sendStreamPromise = Promise.resolve();
        this.project = request.project;
        this.location = request.location;
        this.googleAuth = request.googleAuth;
        this.publisherModelEndpoint = request.publisherModelEndpoint;
        this.historyInternal = (_a = request.history) !== null && _a !== void 0 ? _a : [];
        this.generationConfig = request.generationConfig;
        this.safetySettings = request.safetySettings;
        this.tools = request.tools;
        this.apiEndpoint = request.apiEndpoint;
        this.requestOptions = requestOptions !== null && requestOptions !== void 0 ? requestOptions : {};
        if (request.systemInstruction) {
          request.systemInstruction.role = util_1.constants.SYSTEM_ROLE;
        }
        this.systemInstruction = request.systemInstruction;
      }
      /**
       * Gets access token from GoogleAuth. Throws {@link GoogleAuthError} when
       * fails.
       * @returns Promise of token.
       */
      fetchToken() {
        const tokenPromise = this.googleAuth.getAccessToken().catch((e) => {
          throw new errors_1.GoogleAuthError(util_1.constants.CREDENTIAL_ERROR_MESSAGE, e);
        });
        return tokenPromise;
      }
      /**
       * Makes an async call to send chat message.
       *
       * The response is returned in {@link
       * GenerateContentResult.response}.
       *
       * @example
       * ```
       * const chat = generativeModel.startChat();
       * const result1 = await chat.sendMessage("How can I learn more about Node.js?");
       * console.log('Response: ', JSON.stringify(result1.response));
       *
       * const result2 = await chat.sendMessage("What about python?");
       * console.log('Response: ', JSON.stringify(result2.response));
       * ```
       *
       * @param request - send message request.
       * @returns Promise of {@link GenerateContentResult}.
       */
      async sendMessage(request) {
        const newContent = formulateNewContentFromSendMessageRequest(request);
        const generateContentrequest = {
          contents: this.historyInternal.concat(newContent),
          safetySettings: this.safetySettings,
          generationConfig: this.generationConfig,
          tools: this.tools,
          systemInstruction: this.systemInstruction
        };
        const generateContentResult = await (0, generate_content_1.generateContent)(this.location, this.project, this.publisherModelEndpoint, this.fetchToken(), generateContentrequest, this.apiEndpoint, this.generationConfig, this.safetySettings, this.tools, this.requestOptions).catch((e) => {
          throw e;
        });
        const generateContentResponse = await generateContentResult.response;
        if (generateContentResponse.candidates && generateContentResponse.candidates.length !== 0) {
          this.historyInternal = this.historyInternal.concat(newContent);
          const contentFromModel = generateContentResponse.candidates[0].content;
          this.historyInternal.push(contentFromModel);
        }
        return Promise.resolve(generateContentResult);
      }
      async appendHistory(streamGenerateContentResultPromise, newContent) {
        const streamGenerateContentResult = await streamGenerateContentResultPromise;
        const streamGenerateContentResponse = await streamGenerateContentResult.response;
        if (streamGenerateContentResponse.candidates && streamGenerateContentResponse.candidates.length !== 0) {
          this.historyInternal = this.historyInternal.concat(newContent);
          const contentFromModel = streamGenerateContentResponse.candidates[0].content;
          this.historyInternal.push(contentFromModel);
        }
      }
      /**
       * Makes an async call to stream send message.
       *
       * The response is streamed chunk by chunk in
       * {@link StreamGenerateContentResult.stream}. The aggregated response is
       * avaliable in {@link StreamGenerateContentResult.response} after all chunks
       * are returned.
       *
       * @example
       * ```
       * const chat = generativeModel.startChat();
       * const chatInput = "How can I learn more about Node.js?";
       * const result = await chat.sendMessageStream(chatInput);
       * for await (const item of result.stream) {
       *   console.log(item.candidates[0].content.parts[0].text);
       * }
       * const response = await result.response;
       * console.log('aggregated response: ', JSON.stringify(result.response));
       * ```
       *
       * @param request - send message request.
       * @returns Promise of {@link StreamGenerateContentResult}.
       */
      async sendMessageStream(request) {
        const newContent = formulateNewContentFromSendMessageRequest(request);
        const generateContentrequest = {
          contents: this.historyInternal.concat(newContent),
          safetySettings: this.safetySettings,
          generationConfig: this.generationConfig,
          tools: this.tools,
          systemInstruction: this.systemInstruction
        };
        const streamGenerateContentResultPromise = (0, generate_content_1.generateContentStream)(this.location, this.project, this.publisherModelEndpoint, this.fetchToken(), generateContentrequest, this.apiEndpoint, this.generationConfig, this.safetySettings, this.tools, this.requestOptions).catch((e) => {
          throw e;
        });
        this.sendStreamPromise = this.appendHistory(streamGenerateContentResultPromise, newContent).catch((e) => {
          throw new errors_1.GoogleGenerativeAIError("exception appending chat history", e);
        });
        return streamGenerateContentResultPromise;
      }
    };
    exports.ChatSession = ChatSession;
    var ChatSessionPreview = class {
      async getHistory() {
        return Promise.resolve(this.historyInternal);
      }
      /**
       * @constructor
       * @param request - {@link StartChatSessionRequest}
       */
      constructor(request, requestOptions) {
        var _a;
        this.sendStreamPromise = Promise.resolve();
        this.project = request.project;
        this.location = request.location;
        this.googleAuth = request.googleAuth;
        this.publisherModelEndpoint = request.publisherModelEndpoint;
        this.historyInternal = (_a = request.history) !== null && _a !== void 0 ? _a : [];
        this.generationConfig = request.generationConfig;
        this.safetySettings = request.safetySettings;
        this.tools = request.tools;
        this.apiEndpoint = request.apiEndpoint;
        this.requestOptions = requestOptions !== null && requestOptions !== void 0 ? requestOptions : {};
        if (request.systemInstruction) {
          request.systemInstruction.role = util_1.constants.SYSTEM_ROLE;
        }
        this.systemInstruction = request.systemInstruction;
      }
      /**
       * Gets access token from GoogleAuth. Throws GoogleAuthError when fails.
       * @returns Promise of token.
       */
      fetchToken() {
        const tokenPromise = this.googleAuth.getAccessToken().catch((e) => {
          throw new errors_1.GoogleAuthError(util_1.constants.CREDENTIAL_ERROR_MESSAGE, e);
        });
        return tokenPromise;
      }
      /**
       * Makes an async call to send chat message.
       *
       * The response is returned in {@link
       * GenerateContentResult.response}.
       *
       * @example
       * ```
       * const chat = generativeModelPreview.startChat();
       * const result1 = await chat.sendMessage("How can I learn more about Node.js?");
       * console.log('Response: ', JSON.stringify(result1.response));
       *
       * const result2 = await chat.sendMessage("What about python?");
       * console.log('Response: ', JSON.stringify(result2.response));
       * ```
       *
       * @param request - send message request.
       * @returns Promise of {@link GenerateContentResult}.
       */
      async sendMessage(request) {
        const newContent = formulateNewContentFromSendMessageRequest(request);
        const generateContentrequest = {
          contents: this.historyInternal.concat(newContent),
          safetySettings: this.safetySettings,
          generationConfig: this.generationConfig,
          tools: this.tools,
          systemInstruction: this.systemInstruction
        };
        const generateContentResult = await (0, generate_content_1.generateContent)(this.location, this.project, this.publisherModelEndpoint, this.fetchToken(), generateContentrequest, this.apiEndpoint, this.generationConfig, this.safetySettings, this.tools, this.requestOptions).catch((e) => {
          throw e;
        });
        const generateContentResponse = await generateContentResult.response;
        if (generateContentResponse.candidates && generateContentResponse.candidates.length !== 0) {
          this.historyInternal = this.historyInternal.concat(newContent);
          const contentFromAssistant = generateContentResponse.candidates[0].content;
          this.historyInternal.push(contentFromAssistant);
        }
        return Promise.resolve(generateContentResult);
      }
      async appendHistory(streamGenerateContentResultPromise, newContent) {
        const streamGenerateContentResult = await streamGenerateContentResultPromise;
        const streamGenerateContentResponse = await streamGenerateContentResult.response;
        if (streamGenerateContentResponse.candidates && streamGenerateContentResponse.candidates.length !== 0) {
          this.historyInternal = this.historyInternal.concat(newContent);
          const contentFromAssistant = streamGenerateContentResponse.candidates[0].content;
          this.historyInternal.push(contentFromAssistant);
        }
      }
      /**
       * Makes an async call to stream send message.
       *
       * The response is streamed chunk by chunk in
       * {@link StreamGenerateContentResult.stream}. The aggregated response is
       * avaliable in {@link StreamGenerateContentResult.response} after all chunks
       * are returned.
       *
       * @example
       * ```
       * const chat = generativeModel.startChat();
       * const chatInput = "How can I learn more about Node.js?";
       * const result = await chat.sendMessageStream(chatInput);
       * for await (const item of result.stream) {
       *   console.log(item.candidates[0].content.parts[0].text);
       * }
       * const response = await result.response;
       * console.log('aggregated response: ', JSON.stringify(result.response));
       * ```
       *
       * @param request - send message request.
       * @returns Promise of {@link StreamGenerateContentResult}.
       */
      async sendMessageStream(request) {
        const newContent = formulateNewContentFromSendMessageRequest(request);
        const generateContentrequest = {
          contents: this.historyInternal.concat(newContent),
          safetySettings: this.safetySettings,
          generationConfig: this.generationConfig,
          tools: this.tools,
          systemInstruction: this.systemInstruction
        };
        const streamGenerateContentResultPromise = (0, generate_content_1.generateContentStream)(this.location, this.project, this.publisherModelEndpoint, this.fetchToken(), generateContentrequest, this.apiEndpoint, this.generationConfig, this.safetySettings, this.tools, this.requestOptions).catch((e) => {
          throw e;
        });
        this.sendStreamPromise = this.appendHistory(streamGenerateContentResultPromise, newContent);
        return streamGenerateContentResultPromise;
      }
    };
    exports.ChatSessionPreview = ChatSessionPreview;
    function formulateNewContentFromSendMessageRequest(request) {
      let newParts = [];
      if (typeof request === "string") {
        newParts = [{ text: request }];
      } else if (Array.isArray(request)) {
        for (const item of request) {
          if (typeof item === "string") {
            newParts.push({ text: item });
          } else {
            newParts.push(item);
          }
        }
      }
      return assignRoleToPartsAndValidateSendMessageRequest(newParts);
    }
    function assignRoleToPartsAndValidateSendMessageRequest(parts) {
      const userContent = { role: util_1.constants.USER_ROLE, parts: [] };
      const functionContent = { role: util_1.constants.USER_ROLE, parts: [] };
      let hasUserContent = false;
      let hasFunctionContent = false;
      for (const part of parts) {
        if ("functionResponse" in part) {
          functionContent.parts.push(part);
          hasFunctionContent = true;
        } else {
          userContent.parts.push(part);
          hasUserContent = true;
        }
      }
      if (hasUserContent && hasFunctionContent) {
        throw new errors_1.ClientError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
      }
      if (!hasUserContent && !hasFunctionContent) {
        throw new errors_1.ClientError("No content is provided for sending chat message.");
      }
      if (hasUserContent) {
        return [userContent];
      }
      return [functionContent];
    }
  }
});

// node_modules/@google-cloud/vertexai/build/src/functions/count_tokens.js
var require_count_tokens = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/functions/count_tokens.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.countTokens = void 0;
    var errors_1 = require_errors();
    var post_fetch_processing_1 = require_post_fetch_processing();
    var post_request_1 = require_post_request();
    async function countTokens(location, project, publisherModelEndpoint, token, request, apiEndpoint, requestOptions) {
      const response = await (0, post_request_1.postRequest)({
        region: location,
        project,
        resourcePath: publisherModelEndpoint,
        resourceMethod: "countTokens",
        token: await token,
        data: request,
        apiEndpoint,
        requestOptions
      }).catch((e) => {
        throw new errors_1.GoogleGenerativeAIError("exception posting request", e);
      });
      await (0, post_fetch_processing_1.throwErrorIfNotOK)(response).catch((e) => {
        throw e;
      });
      return (0, post_fetch_processing_1.processCountTokenResponse)(response);
    }
    exports.countTokens = countTokens;
  }
});

// node_modules/@google-cloud/vertexai/build/src/models/generative_models.js
var require_generative_models = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/models/generative_models.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenerativeModelPreview = exports.GenerativeModel = void 0;
    var count_tokens_1 = require_count_tokens();
    var generate_content_1 = require_generate_content();
    var errors_1 = require_errors();
    var util_1 = require_util4();
    var chat_session_1 = require_chat_session();
    var GenerativeModel = class {
      /**
       * @constructor
       * @param getGenerativeModelParams - {@link GetGenerativeModelParams}
       */
      constructor(getGenerativeModelParams) {
        var _a;
        this.project = getGenerativeModelParams.project;
        this.location = getGenerativeModelParams.location;
        this.apiEndpoint = getGenerativeModelParams.apiEndpoint;
        this.googleAuth = getGenerativeModelParams.googleAuth;
        this.model = getGenerativeModelParams.model;
        this.generationConfig = getGenerativeModelParams.generationConfig;
        this.safetySettings = getGenerativeModelParams.safetySettings;
        this.tools = getGenerativeModelParams.tools;
        this.requestOptions = (_a = getGenerativeModelParams.requestOptions) !== null && _a !== void 0 ? _a : {};
        if (getGenerativeModelParams.systemInstruction) {
          getGenerativeModelParams.systemInstruction.role = util_1.constants.SYSTEM_ROLE;
        }
        this.systemInstruction = getGenerativeModelParams.systemInstruction;
        if (this.model.startsWith("models/")) {
          this.publisherModelEndpoint = `publishers/google/${this.model}`;
        } else {
          this.publisherModelEndpoint = `publishers/google/models/${this.model}`;
        }
      }
      /**
       * Gets access token from GoogleAuth. Throws {@link GoogleAuthError} when
       * fails.
       * @returns Promise of token string.
       */
      fetchToken() {
        const tokenPromise = this.googleAuth.getAccessToken().catch((e) => {
          throw new errors_1.GoogleAuthError(util_1.constants.CREDENTIAL_ERROR_MESSAGE, e);
        });
        return tokenPromise;
      }
      /**
       * Makes an async call to generate content.
       *
       * The response will be returned in {@link
       * GenerateContentResult.response}.
       *
       * @example
       * ```
       * const request = {
       *   contents: [{role: 'user', parts: [{text: 'How are you doing today?'}]}],
       * };
       * const result = await generativeModel.generateContent(request);
       * console.log('Response: ', JSON.stringify(result.response));
       * ```
       *
       * @param request - A GenerateContentRequest object with the request contents.
       * @returns The GenerateContentResponse object with the response candidates.
       */
      async generateContent(request) {
        request = formulateRequestToGenerateContentRequest(request);
        const formulatedRequest = formulateSystemInstructionIntoGenerateContentRequest(request, this.systemInstruction);
        return (0, generate_content_1.generateContent)(this.location, this.project, this.publisherModelEndpoint, this.fetchToken(), formulatedRequest, this.apiEndpoint, this.generationConfig, this.safetySettings, this.tools, this.requestOptions);
      }
      /**
       * Makes an async stream request to generate content.
       *
       * The response is returned chunk by chunk as it's being generated in {@link
       * StreamGenerateContentResult.stream}. After all chunks of the response are
       * returned, the aggregated response is available in
       * {@link StreamGenerateContentResult.response}.
       *
       * @example
       * ```
       * const request = {
       *   contents: [{role: 'user', parts: [{text: 'How are you doing today?'}]}],
       * };
       * const streamingResult = await generativeModel.generateContentStream(request);
       * for await (const item of streamingResult.stream) {
       *   console.log('stream chunk: ', JSON.stringify(item));
       * }
       * const aggregatedResponse = await streamingResult.response;
       * console.log('aggregated response: ', JSON.stringify(aggregatedResponse));
       * ```
       *
       * @param request - {@link GenerateContentRequest}
       * @returns Promise of {@link StreamGenerateContentResult}
       */
      async generateContentStream(request) {
        request = formulateRequestToGenerateContentRequest(request);
        const formulatedRequest = formulateSystemInstructionIntoGenerateContentRequest(request, this.systemInstruction);
        return (0, generate_content_1.generateContentStream)(this.location, this.project, this.publisherModelEndpoint, this.fetchToken(), formulatedRequest, this.apiEndpoint, this.generationConfig, this.safetySettings, this.tools, this.requestOptions);
      }
      /**
       * Makes an async request to count tokens.
       *
       * The `countTokens` function returns the token count and the number of
       * billable characters for a prompt.
       *
       * @example
       * ```
       * const request = {
       *   contents: [{role: 'user', parts: [{text: 'How are you doing today?'}]}],
       * };
       * const resp = await generativeModel.countTokens(request);
       * console.log('count tokens response: ', resp);
       * ```
       *
       * @param request - A CountTokensRequest object with the request contents.
       * @returns The CountTokensResponse object with the token count.
       */
      async countTokens(request) {
        return (0, count_tokens_1.countTokens)(this.location, this.project, this.publisherModelEndpoint, this.fetchToken(), request, this.apiEndpoint, this.requestOptions);
      }
      /**
       * Instantiates a {@link ChatSession}.
       *
       * The {@link ChatSession} class is a stateful class that holds the state of
       * the conversation with the model and provides methods to interact with the
       * model in chat mode. Calling this method doesn't make any calls to a remote
       * endpoint. To make remote call, use {@link ChatSession.sendMessage} or
       * @link ChatSession.sendMessageStream}.
       *
       * @example
       * ```
       * const chat = generativeModel.startChat();
       * const result1 = await chat.sendMessage("How can I learn more about Node.js?");
       * const response1 = await result1.response;
       * console.log('Response: ', JSON.stringify(response1));
       *
       * const result2 = await chat.sendMessageStream("What about python?");
       * const response2 = await result2.response;
       * console.log('Response: ', JSON.stringify(await response2));
       * ```
       *
       * @param request - {@link StartChatParams}
       * @returns {@link ChatSession}
       */
      startChat(request) {
        var _a, _b, _c, _d, _e;
        const startChatRequest = {
          project: this.project,
          location: this.location,
          googleAuth: this.googleAuth,
          publisherModelEndpoint: this.publisherModelEndpoint,
          tools: this.tools
        };
        if (request) {
          startChatRequest.history = request.history;
          startChatRequest.generationConfig = (_a = request.generationConfig) !== null && _a !== void 0 ? _a : this.generationConfig;
          startChatRequest.safetySettings = (_b = request.safetySettings) !== null && _b !== void 0 ? _b : this.safetySettings;
          startChatRequest.tools = (_c = request.tools) !== null && _c !== void 0 ? _c : this.tools;
          startChatRequest.apiEndpoint = (_d = request.apiEndpoint) !== null && _d !== void 0 ? _d : this.apiEndpoint;
          startChatRequest.systemInstruction = (_e = request.systemInstruction) !== null && _e !== void 0 ? _e : this.systemInstruction;
        }
        return new chat_session_1.ChatSession(startChatRequest, this.requestOptions);
      }
    };
    exports.GenerativeModel = GenerativeModel;
    var GenerativeModelPreview = class {
      /**
       * @constructor
       * @param getGenerativeModelParams - {@link GetGenerativeModelParams}
       */
      constructor(getGenerativeModelParams) {
        var _a;
        this.project = getGenerativeModelParams.project;
        this.location = getGenerativeModelParams.location;
        this.apiEndpoint = getGenerativeModelParams.apiEndpoint;
        this.googleAuth = getGenerativeModelParams.googleAuth;
        this.model = getGenerativeModelParams.model;
        this.generationConfig = getGenerativeModelParams.generationConfig;
        this.safetySettings = getGenerativeModelParams.safetySettings;
        this.tools = getGenerativeModelParams.tools;
        this.requestOptions = (_a = getGenerativeModelParams.requestOptions) !== null && _a !== void 0 ? _a : {};
        if (getGenerativeModelParams.systemInstruction) {
          getGenerativeModelParams.systemInstruction.role = util_1.constants.SYSTEM_ROLE;
        }
        this.systemInstruction = getGenerativeModelParams.systemInstruction;
        if (this.model.startsWith("models/")) {
          this.publisherModelEndpoint = `publishers/google/${this.model}`;
        } else {
          this.publisherModelEndpoint = `publishers/google/models/${this.model}`;
        }
      }
      /**
       * Gets access token from GoogleAuth. Throws {@link GoogleAuthError} when
       * fails.
       * @returns Promise of token string.
       */
      fetchToken() {
        const tokenPromise = this.googleAuth.getAccessToken().catch((e) => {
          throw new errors_1.GoogleAuthError(util_1.constants.CREDENTIAL_ERROR_MESSAGE, e);
        });
        return tokenPromise;
      }
      /**
       * Makes an async call to generate content.
       *
       * The response will be returned in {@link GenerateContentResult.response}.
       *
       * @example
       * ```
       * const request = {
       *   contents: [{role: 'user', parts: [{text: 'How are you doing today?'}]}],
       * };
       * const result = await generativeModelPreview.generateContent(request);
       * console.log('Response: ', JSON.stringify(result.response));
       * ```
       *
       * @param request - A GenerateContentRequest object with the request contents.
       * @returns The GenerateContentResponse object with the response candidates.
       */
      async generateContent(request) {
        request = formulateRequestToGenerateContentRequest(request);
        const formulatedRequest = formulateSystemInstructionIntoGenerateContentRequest(request, this.systemInstruction);
        return (0, generate_content_1.generateContent)(this.location, this.project, this.publisherModelEndpoint, this.fetchToken(), formulatedRequest, this.apiEndpoint, this.generationConfig, this.safetySettings, this.tools, this.requestOptions);
      }
      /**
       * Makes an async stream request to generate content.
       *
       * The response is returned chunk by chunk as it's being generated in {@link
       * StreamGenerateContentResult.stream}. After all chunks of the response are
       * returned, the aggregated response is available in
       * {@link StreamGenerateContentResult.response}.
       *
       * @example
       * ```
       * const request = {
       *   contents: [{role: 'user', parts: [{text: 'How are you doing today?'}]}],
       * };
       * const streamingResult = await generativeModelPreview.generateContentStream(request);
       * for await (const item of streamingResult.stream) {
       *   console.log('stream chunk: ', JSON.stringify(item));
       * }
       * const aggregatedResponse = await streamingResult.response;
       * console.log('aggregated response: ', JSON.stringify(aggregatedResponse));
       * ```
       *
       * @param request - {@link GenerateContentRequest}
       * @returns Promise of {@link StreamGenerateContentResult}
       */
      async generateContentStream(request) {
        request = formulateRequestToGenerateContentRequest(request);
        const formulatedRequest = formulateSystemInstructionIntoGenerateContentRequest(request, this.systemInstruction);
        return (0, generate_content_1.generateContentStream)(this.location, this.project, this.publisherModelEndpoint, this.fetchToken(), formulatedRequest, this.apiEndpoint, this.generationConfig, this.safetySettings, this.tools, this.requestOptions);
      }
      /**
       * Makes an async request to count tokens.
       *
       * The `countTokens` function returns the token count and the number of
       * billable characters for a prompt.
       *
       * @example
       * ```
       * const request = {
       *   contents: [{role: 'user', parts: [{text: 'How are you doing today?'}]}],
       * };
       * const resp = await generativeModelPreview.countTokens(request);
       * console.log('count tokens response: ', resp);
       * ```
       *
       * @param request - A CountTokensRequest object with the request contents.
       * @returns The CountTokensResponse object with the token count.
       */
      async countTokens(request) {
        return (0, count_tokens_1.countTokens)(this.location, this.project, this.publisherModelEndpoint, this.fetchToken(), request, this.apiEndpoint, this.requestOptions);
      }
      /**
       * Instantiates a {@link ChatSessionPreview}.
       *
       * The {@link ChatSessionPreview} class is a stateful class that holds the state of
       * the conversation with the model and provides methods to interact with the
       * model in chat mode. Calling this method doesn't make any calls to a remote
       * endpoint. To make remote call, use {@link ChatSessionPreview.sendMessage} or
       * {@link ChatSessionPreview.sendMessageStream}.
       *
       * @example
       * ```
       * const chat = generativeModelPreview.startChat();
       * const result1 = await chat.sendMessage("How can I learn more about Node.js?");
       * const response1 = await result1.response;
       * console.log('Response: ', JSON.stringify(response1));
       *
       * const result2 = await chat.sendMessageStream("What about python?");
       * const response2 = await result2.response;
       * console.log('Response: ', JSON.stringify(await response2));
       * ```
       *
       * @param request - {@link StartChatParams}
       * @returns {@link ChatSessionPreview}
       */
      startChat(request) {
        var _a, _b, _c, _d;
        const startChatRequest = {
          project: this.project,
          location: this.location,
          googleAuth: this.googleAuth,
          publisherModelEndpoint: this.publisherModelEndpoint,
          tools: this.tools
        };
        if (request) {
          startChatRequest.history = request.history;
          startChatRequest.generationConfig = (_a = request.generationConfig) !== null && _a !== void 0 ? _a : this.generationConfig;
          startChatRequest.safetySettings = (_b = request.safetySettings) !== null && _b !== void 0 ? _b : this.safetySettings;
          startChatRequest.tools = (_c = request.tools) !== null && _c !== void 0 ? _c : this.tools;
          startChatRequest.systemInstruction = (_d = request.systemInstruction) !== null && _d !== void 0 ? _d : this.systemInstruction;
        }
        return new chat_session_1.ChatSessionPreview(startChatRequest, this.requestOptions);
      }
    };
    exports.GenerativeModelPreview = GenerativeModelPreview;
    function formulateRequestToGenerateContentRequest(request) {
      if (typeof request === "string") {
        return {
          contents: [{ role: util_1.constants.USER_ROLE, parts: [{ text: request }] }]
        };
      }
      return request;
    }
    function formulateSystemInstructionIntoGenerateContentRequest(methodRequest, classSystemInstruction) {
      if (methodRequest.systemInstruction) {
        methodRequest.systemInstruction.role = util_1.constants.SYSTEM_ROLE;
        return methodRequest;
      }
      if (classSystemInstruction) {
        methodRequest.systemInstruction = classSystemInstruction;
      }
      return methodRequest;
    }
  }
});

// node_modules/@google-cloud/vertexai/build/src/models/index.js
var require_models = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/models/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenerativeModelPreview = exports.GenerativeModel = exports.ChatSessionPreview = exports.ChatSession = void 0;
    var chat_session_1 = require_chat_session();
    Object.defineProperty(exports, "ChatSession", { enumerable: true, get: function() {
      return chat_session_1.ChatSession;
    } });
    Object.defineProperty(exports, "ChatSessionPreview", { enumerable: true, get: function() {
      return chat_session_1.ChatSessionPreview;
    } });
    var generative_models_1 = require_generative_models();
    Object.defineProperty(exports, "GenerativeModel", { enumerable: true, get: function() {
      return generative_models_1.GenerativeModel;
    } });
    Object.defineProperty(exports, "GenerativeModelPreview", { enumerable: true, get: function() {
      return generative_models_1.GenerativeModelPreview;
    } });
  }
});

// node_modules/@google-cloud/vertexai/build/src/vertex_ai.js
var require_vertex_ai = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/vertex_ai.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VertexAI = void 0;
    var google_auth_library_1 = require_src4();
    var models_1 = require_models();
    var errors_1 = require_errors();
    var VertexAI = class {
      /**
       * @constructor
       * @param init - assign authentication related information,
       *     including the project and location strings, to instantiate a Vertex AI
       * client.
       */
      constructor(init) {
        const opts = validateGoogleAuthOptions(init.project, init.googleAuthOptions);
        this.project = init.project;
        this.location = init.location;
        this.googleAuth = new google_auth_library_1.GoogleAuth(opts);
        this.apiEndpoint = init.apiEndpoint;
        this.preview = new VertexAIPreview(this.project, this.location, this.googleAuth, this.apiEndpoint);
      }
      /**
       * Gets the GenerativeModel class instance.
       *
       * This method creates a new instance of the `GenerativeModel` class with the
       * platform initialization parameters provided in {@link VertexInit} and model
       * initialization parameters provided in {@link ModelParams}. You can
       * optionally provide {@link RequestOptions} to override the default request
       * options.
       *
       * @example
       * ```
       * const project = 'your-cloud-project';
       * const location = 'us-central1';
       * const textModel =  'gemini-1.0-pro';
       * const visionModel = 'gemini-1.0-pro-vision';
       *
       * const vertexAI = new VertexAI({project: project, location: location});
       *
       * // Instantiate models
       * const generativeModel = vertexAI.getGenerativeModel({
       *   model: textModel,
       *   // The following parameters are optional
       *   // They can also be passed to individual content generation requests
       *   safetySettings: [{
       *                      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
       *                      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
       *                     }],
       *   generationConfig: {maxOutputTokens: 256},
       * });
       *
       * const generativeVisionModel = vertexAI.getGenerativeModel({
       *   model: visionModel,
       * });
       *
       * const generativeModelPreview = vertexAI.preview.getGenerativeModel({
       *   model: textModel,
       * });
       * ```
       *
       * @param modelParams - {@link ModelParams} Parameters to
       *     specify the generative model.
       * @param requestOptions - {@link RequestOptions} Parameters to specify
       *     request options
       * @returns Instance of the GenerativeModel class.
       */
      getGenerativeModel(modelParams, requestOptions) {
        const getGenerativeModelParams = {
          model: modelParams.model,
          project: this.project,
          location: this.location,
          googleAuth: this.googleAuth,
          apiEndpoint: this.apiEndpoint,
          safetySettings: modelParams.safetySettings,
          generationConfig: modelParams.generationConfig,
          tools: modelParams.tools,
          requestOptions,
          systemInstruction: modelParams.systemInstruction
        };
        return new models_1.GenerativeModel(getGenerativeModelParams);
      }
    };
    exports.VertexAI = VertexAI;
    var VertexAIPreview = class {
      /**
       * @constructor
       * @param project - The Google Cloud project to use for the request
       * @param location - location The Google Cloud project location to use for the
       *     request
       * @param googleAuth - The GoogleAuthen class instance from
       *     google-auth-library.
       *        Complete list of authentication options is documented in the
       * GoogleAuthOptions interface:
       *        https://github.com/googleapis/google-auth-library-nodejs/blob/main/src/auth/googleauth.ts
       * @param apiEndpoint - [apiEndpoint] The base Vertex AI endpoint to use for
       *     the request. If
       *        not provided, the default regionalized endpoint
       *        (i.e. us-central1-aiplatform.googleapis.com) will be used.
       */
      constructor(project, location, googleAuth, apiEndpoint) {
        this.project = project;
        this.location = location;
        this.googleAuth = googleAuth;
        this.apiEndpoint = apiEndpoint;
      }
      /**
       * @param modelParams - {@link ModelParams} Parameters to
       *     specify the generative model.
       * @returns Instance of the GenerativeModelPreview class.
       */
      getGenerativeModel(modelParams, requestOptions) {
        const getGenerativeModelParams = {
          model: modelParams.model,
          project: this.project,
          location: this.location,
          googleAuth: this.googleAuth,
          apiEndpoint: this.apiEndpoint,
          safetySettings: modelParams.safetySettings,
          generationConfig: modelParams.generationConfig,
          tools: modelParams.tools,
          requestOptions,
          systemInstruction: modelParams.systemInstruction
        };
        return new models_1.GenerativeModelPreview(getGenerativeModelParams);
      }
    };
    function validateGoogleAuthOptions(project, googleAuthOptions) {
      let opts;
      const requiredScope = "https://www.googleapis.com/auth/cloud-platform";
      if (!googleAuthOptions) {
        opts = {
          scopes: requiredScope
        };
        return opts;
      }
      if (googleAuthOptions.projectId && googleAuthOptions.projectId !== project) {
        throw new Error(`inconsistent project ID values. argument project got value ${project} but googleAuthOptions.projectId got value ${googleAuthOptions.projectId}`);
      }
      opts = googleAuthOptions;
      if (!opts.scopes) {
        opts.scopes = requiredScope;
        return opts;
      }
      if (typeof opts.scopes === "string" && opts.scopes !== requiredScope || Array.isArray(opts.scopes) && opts.scopes.indexOf(requiredScope) < 0) {
        throw new errors_1.GoogleAuthError(`input GoogleAuthOptions.scopes ${opts.scopes} doesn't contain required scope ${requiredScope}, please include ${requiredScope} into GoogleAuthOptions.scopes or leave GoogleAuthOptions.scopes undefined`);
      }
      return opts;
    }
  }
});

// node_modules/@google-cloud/vertexai/build/src/types/content.js
var require_content = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/types/content.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionDeclarationSchemaType = exports.FinishReason = exports.BlockedReason = exports.HarmSeverity = exports.HarmProbability = exports.HarmBlockThreshold = exports.HarmCategory = void 0;
    var HarmCategory;
    (function(HarmCategory2) {
      HarmCategory2["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
      HarmCategory2["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
      HarmCategory2["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
      HarmCategory2["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
      HarmCategory2["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    })(HarmCategory || (exports.HarmCategory = HarmCategory = {}));
    var HarmBlockThreshold;
    (function(HarmBlockThreshold2) {
      HarmBlockThreshold2["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
      HarmBlockThreshold2["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
      HarmBlockThreshold2["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
      HarmBlockThreshold2["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
      HarmBlockThreshold2["BLOCK_NONE"] = "BLOCK_NONE";
    })(HarmBlockThreshold || (exports.HarmBlockThreshold = HarmBlockThreshold = {}));
    var HarmProbability;
    (function(HarmProbability2) {
      HarmProbability2["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
      HarmProbability2["NEGLIGIBLE"] = "NEGLIGIBLE";
      HarmProbability2["LOW"] = "LOW";
      HarmProbability2["MEDIUM"] = "MEDIUM";
      HarmProbability2["HIGH"] = "HIGH";
    })(HarmProbability || (exports.HarmProbability = HarmProbability = {}));
    var HarmSeverity;
    (function(HarmSeverity2) {
      HarmSeverity2["HARM_SEVERITY_UNSPECIFIED"] = "HARM_SEVERITY_UNSPECIFIED";
      HarmSeverity2["HARM_SEVERITY_NEGLIGIBLE"] = "HARM_SEVERITY_NEGLIGIBLE";
      HarmSeverity2["HARM_SEVERITY_LOW"] = "HARM_SEVERITY_LOW";
      HarmSeverity2["HARM_SEVERITY_MEDIUM"] = "HARM_SEVERITY_MEDIUM";
      HarmSeverity2["HARM_SEVERITY_HIGH"] = "HARM_SEVERITY_HIGH";
    })(HarmSeverity || (exports.HarmSeverity = HarmSeverity = {}));
    var BlockedReason;
    (function(BlockedReason2) {
      BlockedReason2["BLOCKED_REASON_UNSPECIFIED"] = "BLOCK_REASON_UNSPECIFIED";
      BlockedReason2["SAFETY"] = "SAFETY";
      BlockedReason2["OTHER"] = "OTHER";
      BlockedReason2["BLOCKLIST"] = "BLOCKLIST";
      BlockedReason2["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
    })(BlockedReason || (exports.BlockedReason = BlockedReason = {}));
    var FinishReason;
    (function(FinishReason2) {
      FinishReason2["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
      FinishReason2["STOP"] = "STOP";
      FinishReason2["MAX_TOKENS"] = "MAX_TOKENS";
      FinishReason2["SAFETY"] = "SAFETY";
      FinishReason2["RECITATION"] = "RECITATION";
      FinishReason2["OTHER"] = "OTHER";
      FinishReason2["BLOCKLIST"] = "BLOCKLIST";
      FinishReason2["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
      FinishReason2["SPII"] = "SPII";
    })(FinishReason || (exports.FinishReason = FinishReason = {}));
    var FunctionDeclarationSchemaType;
    (function(FunctionDeclarationSchemaType2) {
      FunctionDeclarationSchemaType2["STRING"] = "STRING";
      FunctionDeclarationSchemaType2["NUMBER"] = "NUMBER";
      FunctionDeclarationSchemaType2["INTEGER"] = "INTEGER";
      FunctionDeclarationSchemaType2["BOOLEAN"] = "BOOLEAN";
      FunctionDeclarationSchemaType2["ARRAY"] = "ARRAY";
      FunctionDeclarationSchemaType2["OBJECT"] = "OBJECT";
    })(FunctionDeclarationSchemaType || (exports.FunctionDeclarationSchemaType = FunctionDeclarationSchemaType = {}));
  }
});

// node_modules/@google-cloud/vertexai/build/src/types/generate_content_response_handler.js
var require_generate_content_response_handler = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/types/generate_content_response_handler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenerateContentResponseHandler = void 0;
    var GenerateContentResponseHandler = class {
      /**
       * Extracts function calls from a {@link GenerateContentCandidate}.
       *
       * @param candidate - The candidate to extract function calls from.
       * @returns the array of function calls in a {@link GenerateContentCandidate}.
       */
      static getFunctionCallsFromCandidate(candidate) {
        if (!candidate)
          return [];
        return candidate.content.parts.filter((part) => !!part && !!part.functionCall).map((part) => part.functionCall);
      }
    };
    exports.GenerateContentResponseHandler = GenerateContentResponseHandler;
  }
});

// node_modules/@google-cloud/vertexai/build/src/types/index.js
var require_types = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/types/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenerateContentResponseHandler = void 0;
    __exportStar(require_content(), exports);
    __exportStar(require_errors(), exports);
    var generate_content_response_handler_1 = require_generate_content_response_handler();
    Object.defineProperty(exports, "GenerateContentResponseHandler", { enumerable: true, get: function() {
      return generate_content_response_handler_1.GenerateContentResponseHandler;
    } });
  }
});

// node_modules/@google-cloud/vertexai/build/src/index.js
var require_src5 = __commonJS({
  "node_modules/@google-cloud/vertexai/build/src/index.js"(exports) {
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VertexAI = void 0;
    var vertex_ai_1 = require_vertex_ai();
    Object.defineProperty(exports, "VertexAI", { enumerable: true, get: function() {
      return vertex_ai_1.VertexAI;
    } });
    __exportStar(require_types(), exports);
    __exportStar(require_models(), exports);
  }
});
export default require_src5();
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@google-cloud/vertexai/build/src/types/errors.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/util/constants.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/util/index.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/functions/post_fetch_processing.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/functions/post_request.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/functions/pre_fetch_processing.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/functions/generate_content.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/models/chat_session.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/functions/count_tokens.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/models/generative_models.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/models/index.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/vertex_ai.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/types/content.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/types/generate_content_response_handler.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/types/index.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-cloud/vertexai/build/src/index.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=@google-cloud_vertexai.js.map
