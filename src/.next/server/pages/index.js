(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 520:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "universal-cookie"
var external_universal_cookie_namespaceObject = require("universal-cookie");;
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_namespaceObject);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "luxon"
var external_luxon_ = __webpack_require__(223);
;// CONCATENATED MODULE: external "btoa"
var external_btoa_namespaceObject = require("btoa");;
var external_btoa_default = /*#__PURE__*/__webpack_require__.n(external_btoa_namespaceObject);
;// CONCATENATED MODULE: external "atob"
var external_atob_namespaceObject = require("atob");;
var external_atob_default = /*#__PURE__*/__webpack_require__.n(external_atob_namespaceObject);
;// CONCATENATED MODULE: external "delay"
var external_delay_namespaceObject = require("delay");;
var external_delay_default = /*#__PURE__*/__webpack_require__.n(external_delay_namespaceObject);
;// CONCATENATED MODULE: ./components/AccountInfo.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  DateTime
} = __webpack_require__(223);


const v1 = ['https://wax.pink.gg', 'https://wax.cryptolions.io', 'https://wax.dapplica.io', 'https://api.wax.liquidstudios.io', 'https://wax.eosn.io', 'https://api.wax.alohaeos.com', 'https://wax.greymass.com', 'https://wax-bp.wizardsguild.one', 'https://apiwax.3dkrender.com', 'https://wax.eu.eosamsterdam.net', 'https://wax.csx.io', 'https://wax.eoseoul.io', 'https://wax.eosphere.io', 'https://api.waxeastern.cn'];
const tx_api = ['https://wax.greymass.com', 'https://wax.cryptolions.io', 'https://api.wax.alohaeos.com', 'https://wax.blacklusion.io', 'https://waxapi.ledgerwise.io'];
const tx_api_v2 = ['https://api.wax.alohaeos.com', 'https://wax.eu.eosamsterdam.net', 'https://api.waxsweden.org', 'https://wax.cryptolions.io'];
function AccountInfo(props) {
  const {
    index,
    account,
    axios,
    onDelete,
    onTLMChange,
    onWaxChange,
    onStakedChange
  } = props;
  const {
    0: acc,
    1: setAcc
  } = (0,external_react_.useState)(account);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  const {
    0: accInfo,
    1: setAccInfo
  } = (0,external_react_.useState)({});
  const {
    0: balance,
    1: setBalance
  } = (0,external_react_.useState)("Loading");
  const {
    0: wax,
    1: setWax
  } = (0,external_react_.useState)("Loading");
  const isInitialTx = (0,external_react_.useRef)(true);
  const {
    0: update,
    1: setUpdate
  } = (0,external_react_.useState)("None");
  const {
    0: lastMine,
    1: setLastMine
  } = (0,external_react_.useState)({
    last_mine: "Loading",
    last_mine_tx: "Loading",
    currentLand: "Loading"
  });
  const {
    0: history,
    1: setHistory
  } = (0,external_react_.useState)([]);
  const {
    0: minerName,
    1: setMinerName
  } = (0,external_react_.useState)("Loading");
  const {
    0: nft,
    1: setNft
  } = (0,external_react_.useState)([]);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const fetchTLM = async user => {
    let api_index = getRandom(0, v1.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${v1[api_index % v1.length]}/v1/chain/get_currency_balance`, {
        "code": "alien.worlds",
        "account": user,
        "symbol": "TLM"
      }).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/get_tlm/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result && result.length > 0) {
      //console.log(result)
      setBalance(result[0].slice(0, -4));
    }
  };

  const fetchAccountData = async user => {
    let api_index = getRandom(0, v1.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${v1[api_index % v1.length]}/v1/chain/get_account`, {
        "account_name": user
      }).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/get_account/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result) {
      console.log("Setting data");
      console.log(result);

      const newCpuState = _objectSpread(_objectSpread({}, result.cpu_limit), {}, {
        cpu_weight: result.total_resources.cpu_weight
      });

      setAccInfo(newCpuState);
      console.log(result.core_liquid_balance);

      if (result.core_liquid_balance) {
        setWax(result.core_liquid_balance.slice(0, -4));
      } else {
        setWax("N/A");
      }
    }
  };

  const getMinerName = async user => {
    let api_index = getRandom(0, v1.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${v1[api_index % v1.length]}/v1/chain/get_table_rows`, {
        json: true,
        code: "federation",
        scope: "federation",
        table: 'players',
        lower_bound: user,
        upper_bound: user
      }).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/get_tag/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result.rows.length < 1) {
      alert(`${user} is not alien worlds account, please check your spelling!`);
      onDelete(acc);
      return;
    }

    if (result) {
      console.log("Setting Tag data");
      console.log(result);
      setMinerName(result.rows[0].tag);
    }
  };

  const getLastMineInfo = async user => {
    let api_index = getRandom(0, v1.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${v1[api_index % v1.length]}/v1/chain/get_table_rows`, {
        json: true,
        code: "m.federation",
        scope: "m.federation",
        table: 'miners',
        lower_bound: user,
        upper_bound: user
      }).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/get_lastmine/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result.rows.length < 1) {
      return;
    }

    if (result) {
      console.log("Setting Lastmine data");
      console.log(result);
      const lastMineString = result.rows[0].last_mine != "None" ? DateTime.fromISO(result.rows[0].last_mine + "Z").setZone("local").toRelative() : "Error";
      const newLastMine = {
        last_mine: lastMineString,
        last_mine_tx: result.rows[0].last_mine_tx,
        currentLand: result.rows[0].current_land
      };
      setLastMine(newLastMine);
    }
  };

  const fetchLastMineTx = async tx => {
    let api_index = getRandom(0, tx_api.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${tx_api[api_index % tx_api.length]}/v1/history/get_transaction`, {
        id: tx
      }).then(resp => {
        if (resp && resp.data) {
          //console.log(resp.data)
          if (tx_api[api_index % tx_api.length] == 'https://wax.greymass.com/v1/history/get_transaction') {
            result = {
              mined: parseFloat(resp.data.traces[1].act.data.quantity.slice(0, -4))
            };
          } else {
            result = {
              mined: resp.data.traces[1].act.data.amount
            };
          }
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      // Try v2
      tries = 0;
      api_index = getRandom(0, tx_api_v2.length);

      while (tries < 3) {
        console.log("TRY ", tries);
        await axios.get(`${tx_api_v2[api_index % tx_api_v2.length]}/v2/history/get_transaction?id=${tx}`).then(resp => {
          if (resp && resp.data) {
            result = {
              mined: resp.data.actions[1].act.data.amount
            };
          }
        }).catch(err => {
          console.log(err);
          tries++;
          api_index++;
        });

        if (result != null) {
          break;
        }
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/get_tx/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result && result.mined) {
      console.log("Setting TX data");
      console.log(result);
      const newHistory = [...history];

      if (newHistory.length == 5) {
        newHistory.shift(); //remove first member
      }

      if (history.length === 0 || history.pop().tx !== tx) {
        newHistory.push({
          tx: tx,
          amount: result.mined + " TLM"
        });
        setHistory(newHistory);
      }
    }
  };

  const checkNFT = async user => {
    let api_index = getRandom(0, v1.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${v1[api_index % v1.length]}/v1/chain/get_table_rows`, {
        json: true,
        code: "m.federation",
        scope: "m.federation",
        table: 'claims',
        lower_bound: user,
        upper_bound: user
      }).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/check_nft/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result.rows.length < 1) {
      setNft([]);
      return;
    }

    if (result) {
      console.log("Setting NFT data");
      console.log(result);
      setNft([...result.rows[0].template_ids]);
    }
  };

  (0,external_react_.useEffect)(async () => {
    await getMinerName(acc);
    await checkNFT(acc);
  }, [acc]);
  (0,external_react_.useEffect)(async () => {
    //console.log("Loading... "+loading)
    await external_delay_default()(getRandom(100, 5000));
    setUpdate(DateTime.now().setZone("local").toRFC2822());

    if (loading) {
      //console.log("Checking... "+acc)
      await fetchAccountData(acc);
      await fetchTLM(acc);
      await external_delay_default()(getRandom(100, 1500));
      await getLastMineInfo(acc);
      await checkNFT(acc);
      setLoading(false);
    } else {//console.log("Not check!")
    }
  }, [loading]);
  (0,external_react_.useEffect)(() => {
    onTLMChange(balance);
  }, [balance]);
  (0,external_react_.useEffect)(() => {
    onWaxChange(wax);
  }, [wax]);
  (0,external_react_.useEffect)(() => {
    if (accInfo.cpu_weight) {
      onStakedChange(accInfo.cpu_weight.slice(0, -4));
    }
  }, [accInfo.cpu_weight]);
  (0,external_react_.useEffect)(() => {
    const interval = setInterval(async () => {
      //console.log("It's time to checking!")
      setLoading(true);
    }, 120000);
    return () => clearInterval(interval);
  }, []);
  (0,external_react_.useEffect)(async () => {
    if (isInitialTx.current) {
      isInitialTx.current = false;
    } else {
      //console.log("Last mine TX Changed!")
      if (lastMine.last_mine_tx == "Loading" || lastMine.last_mine_tx == "None") return;
      await fetchLastMineTx(lastMine.last_mine_tx);
    }
  }, [lastMine.last_mine_tx]);
  const rawPercent = (accInfo.used / accInfo.max * 100).toFixed(2);
  const percent = accInfo.used ? rawPercent > 100 ? 100 : rawPercent : 0;
  const barColor = percent >= 80 ? "bg-red-600" : percent >= 50 ? "bg-yellow-600" : "bg-blue-600";
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col my-5",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      className: "font-bold",
      children: ["[", index + 1, "] Miner: ", minerName]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 w-full items-center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex mr-3 items-center justify-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5 mr-2 cursor-pointer",
          viewBox: "0 0 20 20",
          fill: "#FF0000",
          onClick: () => {
            onDelete(acc);
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
            clipRule: "evenodd"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: " text-lg font-bold",
          children: acc
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex-1 w-full lg:w-9/12",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "overflow-hidden h-5 text-xs flex rounded bg-gray-800 w-full",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              width: percent + "%"
            },
            className: `shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${barColor}`,
            children: [accInfo.used && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "font-bold",
              children: [rawPercent, "% (", accInfo.used / 1000, " ms/", accInfo.max / 1000, " ms)"]
            }), !accInfo.used && /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-bold",
              children: "Loading..."
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex px-3",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "font-bold text-sm text-yellow-300",
          children: ["CPU Staked: ", accInfo.cpu_weight]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "w-8 h-8 mr-1",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
            clipRule: "evenodd"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-lg font-bold text-green-400",
          children: [balance, " TLM | ", wax, " WAX"]
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: 'https://wax.atomichub.io/explorer/account/' + acc,
          className: "mx-2 px-2 font-bold text-green-600 bg-green-200 rounded-md",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "View NFT"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col lg:flex-row w-full mt-1 justify-between",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col  gap-y-1 lg:gap-y-0.5 mt-1",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-xs font-bold text-red-500",
          children: ["Current land: ", /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: 'https://wax.atomichub.io/explorer/asset/' + lastMine.currentLand,
            children: lastMine.currentLand
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-xs",
          children: ["Last update: ", update]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-xs",
          children: ["Next update: ", DateTime.fromRFC2822(update).plus({
            minutes: 1,
            seconds: 30
          }).toRFC2822()]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-y-2 mt-2 lg:mt-0 lg:gap-y-0.5",
        children: [nft && nft.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "font-bold text-xs",
          children: [nft.length, " NFTs Claimable!"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-sm font-bold self-end",
          children: ["Last TLM mined (", lastMine.last_mine, "):"]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-xs my-2 self-end",
          children: history.map((hist, i) => {
            return /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: hist.tx != "None" ? `https://wax.bloks.io/transaction/` + hist.tx : `#`,
              rel: "noopener noreferrer",
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: 'inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-black rounded-full bg-green-' + (600 - (history.length - i) * 100),
                children: hist.amount
              })
            }, i);
          })
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: external "axios-rate-limit"
var external_axios_rate_limit_namespaceObject = require("axios-rate-limit");;
var external_axios_rate_limit_default = /*#__PURE__*/__webpack_require__.n(external_axios_rate_limit_namespaceObject);
;// CONCATENATED MODULE: external "axios-retry"
var external_axios_retry_namespaceObject = require("axios-retry");;
var external_axios_retry_default = /*#__PURE__*/__webpack_require__.n(external_axios_retry_namespaceObject);
;// CONCATENATED MODULE: ./components/Axios.js



const http = external_axios_rate_limit_default()(external_axios_default().create(), {
  maxRequests: 20,
  perMilliseconds: 1000,
  maxRPS: 20
});
external_axios_retry_default()(http, {
  retries: 2,
  retryDelay: (external_axios_retry_default()).exponentialDelay
});
console.log("USER MAX RPS: " + http.getMaxRPS());
/* harmony default export */ var Axios = (http);
;// CONCATENATED MODULE: ./components/AccountCard.js





function AccountCard(props) {
  const {
    accounts,
    onDelete,
    onTotalTLMChange,
    onTotalWaxChange,
    onTotalStakedChange
  } = props;
  const initTLM = [];
  const initWax = [];
  const initStaked = [];

  if (accounts.length > initTLM.length) {
    for (let acc of accounts) {
      initTLM.push(0);
      initWax.push(0);
      initStaked.push(0);
    }
  }

  const {
    0: TLM,
    1: setTLM
  } = (0,external_react_.useState)(initTLM);
  const {
    0: wax,
    1: setWax
  } = (0,external_react_.useState)(initWax);
  const {
    0: staked,
    1: setStaked
  } = (0,external_react_.useState)(initStaked);

  const onTLMChange = (i, amt) => {
    if (amt == 'Loading') return;
    const newBalance = [...TLM];
    newBalance[i] = amt;
    setTLM(newBalance);
  };

  const onAccDelete = (i, acc) => {
    const newTLM = [...TLM];
    const newWAX = [...wax];
    const newStaked = [...staked];
    newTLM.splice(i, 1);
    newWAX.splice(i, 1);
    newStaked.splice(i, 1);
    setTLM(newTLM);
    setWax(newWAX);
    setStaked(newStaked);
    return onDelete(acc);
  };

  (0,external_react_.useEffect)(() => {
    if (TLM.length > 0) {
      const totalBal = TLM.reduce((total, cur) => {
        //console.log(total, cur)
        if (cur == "Loading" || cur == 'N/A') {
          return total;
        }

        return total + parseFloat(cur);
      }, 0);
      onTotalTLMChange(totalBal);
    }
  }, [TLM]);

  const onWaxChange = (i, amt) => {
    if (amt == 'Loading') return;
    const newWax = [...wax];
    newWax[i] = amt;
    setWax(newWax);
  };

  (0,external_react_.useEffect)(() => {
    if (wax.length > 0) {
      const totalWax = wax.reduce((total, now) => {
        if (now == 'Loading' || now == 'N/A') {
          return total;
        }

        return total + parseFloat(now);
      }, 0);
      onTotalWaxChange(totalWax);
    }
  }, [wax]);

  const onStakedChange = (i, amt) => {
    const newStaked = [...staked];
    newStaked[i] = amt;
    setStaked(newStaked);
  };

  (0,external_react_.useEffect)(() => {
    if (staked.length > 0) {
      const totalStaked = staked.reduce((total, now) => {
        if (now == 'Loading') {
          return total;
        }

        return total + parseFloat(now);
      }, 0);
      onTotalStakedChange(totalStaked);
    }
  }, [wax]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col w-full",
    children: [accounts.length === 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "text-3xl font-bold text-center text-red-400",
      children: "No accounts added yet!"
    }), accounts.length > 0 && accounts.map((acc, i) => {
      return /*#__PURE__*/jsx_runtime_.jsx(AccountInfo, {
        index: i,
        account: acc,
        axios: Axios,
        onDelete: () => onAccDelete(i, acc),
        onTLMChange: amt => onTLMChange(i, amt),
        onWaxChange: amt => onWaxChange(i, amt),
        onStakedChange: amt => onStakedChange(i, amt)
      }, i);
    })]
  });
}
;// CONCATENATED MODULE: ./components/AccountRow.js




function AccountRow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AccountRow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AccountRow_ownKeys(Object(source), true).forEach(function (key) { AccountRow_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AccountRow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AccountRow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  DateTime: AccountRow_DateTime
} = __webpack_require__(223);


const AccountRow_v1 = ['https://wax.pink.gg', 'https://wax.cryptolions.io', 'https://wax.dapplica.io', 'https://api.wax.liquidstudios.io', 'https://wax.eosn.io', 'https://api.wax.alohaeos.com', 'https://wax.greymass.com', 'https://wax-bp.wizardsguild.one', 'https://apiwax.3dkrender.com', 'https://wax.eu.eosamsterdam.net', 'https://wax.csx.io', 'https://wax.eoseoul.io', 'https://wax.eosphere.io', 'https://api.waxeastern.cn'];
const AccountRow_tx_api = ['https://wax.greymass.com', 'https://wax.cryptolions.io', 'https://api.wax.alohaeos.com', 'https://wax.blacklusion.io', 'https://waxapi.ledgerwise.io'];
const AccountRow_tx_api_v2 = ['https://api.wax.alohaeos.com', 'https://wax.eu.eosamsterdam.net', 'https://api.waxsweden.org', 'https://wax.cryptolions.io'];
function AccountRow(props) {
  const {
    index,
    account,
    axios,
    onDelete,
    onTLMChange,
    onWaxChange,
    onStakedChange
  } = props;
  const {
    0: acc,
    1: setAcc
  } = (0,external_react_.useState)(account);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  const {
    0: accInfo,
    1: setAccInfo
  } = (0,external_react_.useState)({});
  const {
    0: balance,
    1: setBalance
  } = (0,external_react_.useState)("Loading");
  const {
    0: wax,
    1: setWax
  } = (0,external_react_.useState)("Loading");
  const isInitialTx = (0,external_react_.useRef)(true);
  const {
    0: update,
    1: setUpdate
  } = (0,external_react_.useState)("None");
  const {
    0: lastMine,
    1: setLastMine
  } = (0,external_react_.useState)({
    last_mine: "Loading",
    last_mine_tx: "Loading",
    currentLand: "Loading"
  });
  const {
    0: history,
    1: setHistory
  } = (0,external_react_.useState)([]);
  const {
    0: minerName,
    1: setMinerName
  } = (0,external_react_.useState)("Loading");
  const {
    0: expanded,
    1: setExpanded
  } = (0,external_react_.useState)(false);
  const {
    0: nft,
    1: setNft
  } = (0,external_react_.useState)(false);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const fetchTLM = async user => {
    let api_index = getRandom(0, AccountRow_v1.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${AccountRow_v1[api_index % AccountRow_v1.length]}/v1/chain/get_currency_balance`, {
        "code": "alien.worlds",
        "account": user,
        "symbol": "TLM"
      }).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/get_tlm/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result && result.length > 0) {
      //console.log(result)
      setBalance(result[0].slice(0, -4));
    }
  };

  const fetchAccountData = async user => {
    let api_index = getRandom(0, AccountRow_v1.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${AccountRow_v1[api_index % AccountRow_v1.length]}/v1/chain/get_account`, {
        "account_name": user
      }).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/get_account/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result) {
      console.log("Setting data");
      console.log(result);

      const newCpuState = AccountRow_objectSpread(AccountRow_objectSpread({}, result.cpu_limit), {}, {
        cpu_weight: result.total_resources.cpu_weight
      });

      setAccInfo(newCpuState);
      console.log(result.core_liquid_balance);

      if (result.core_liquid_balance) {
        setWax(result.core_liquid_balance.slice(0, -4));
      } else {
        setWax("N/A");
      }
    }
  };

  const getMinerName = async user => {
    let api_index = getRandom(0, AccountRow_v1.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${AccountRow_v1[api_index % AccountRow_v1.length]}/v1/chain/get_table_rows`, {
        json: true,
        code: "federation",
        scope: "federation",
        table: 'players',
        lower_bound: user,
        upper_bound: user
      }).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/get_tag/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result.rows.length < 1) {
      alert(`${user} is not alien worlds account, please check your spelling!`);
      onDelete(acc);
      return;
    }

    if (result) {
      console.log("Setting Tag data");
      console.log(result);
      setMinerName(result.rows[0].tag);
    }
  };

  const getLastMineInfo = async user => {
    let api_index = getRandom(0, AccountRow_v1.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${AccountRow_v1[api_index % AccountRow_v1.length]}/v1/chain/get_table_rows`, {
        json: true,
        code: "m.federation",
        scope: "m.federation",
        table: 'miners',
        lower_bound: user,
        upper_bound: user
      }).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/get_lastmine/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result.rows.length < 1) {
      return;
    }

    if (result) {
      console.log("Setting Lastmine data");
      console.log(result);
      const lastMineString = result.rows[0].last_mine != "None" ? AccountRow_DateTime.fromISO(result.rows[0].last_mine + "Z").setZone("local").toRelative() : "Error";
      const newLastMine = {
        last_mine: lastMineString,
        last_mine_tx: result.rows[0].last_mine_tx,
        currentLand: result.rows[0].current_land
      };
      setLastMine(newLastMine);
    }
  };

  const fetchLastMineTx = async tx => {
    let api_index = getRandom(0, AccountRow_tx_api.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${AccountRow_tx_api[api_index % AccountRow_tx_api.length]}/v1/history/get_transaction`, {
        id: tx
      }).then(resp => {
        if (resp && resp.data) {
          //console.log(resp.data)
          if (AccountRow_tx_api[api_index % AccountRow_tx_api.length] == 'https://wax.greymass.com/v1/history/get_transaction') {
            result = {
              mined: parseFloat(resp.data.traces[1].act.data.quantity.slice(0, -4))
            };
          } else {
            result = {
              mined: resp.data.traces[1].act.data.amount
            };
          }
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      // Try v2
      tries = 0;
      api_index = getRandom(0, AccountRow_tx_api_v2.length);

      while (tries < 3) {
        console.log("TRY ", tries);
        await axios.get(`${AccountRow_tx_api_v2[api_index % AccountRow_tx_api_v2.length]}/v2/history/get_transaction?id=${tx}`).then(resp => {
          if (resp && resp.data) {
            result = {
              mined: resp.data.actions[1].act.data.amount
            };
          }
        }).catch(err => {
          console.log(err);
          tries++;
          api_index++;
        });

        if (result != null) {
          break;
        }
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/get_tx/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result && result.mined) {
      console.log("Setting TX data");
      console.log(result);
      const newHistory = [...history];

      if (newHistory.length == 5) {
        newHistory.shift(); //remove first member
      }

      if (history.length === 0 || history.pop().tx !== tx) {
        newHistory.push({
          tx: tx,
          amount: result.mined + " TLM"
        });
        setHistory(newHistory);
      }
    }
  };

  const checkNFT = async user => {
    let api_index = getRandom(0, AccountRow_v1.length);
    let tries = 0;
    let result = null;

    while (tries < 3) {
      console.log("TRY ", tries);
      await axios.post(`${AccountRow_v1[api_index % AccountRow_v1.length]}/v1/chain/get_table_rows`, {
        json: true,
        code: "m.federation",
        scope: "m.federation",
        table: 'claims',
        lower_bound: user,
        upper_bound: user
      }).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        console.log(err);
        tries++;
        api_index++;
      });

      if (result != null) {
        break;
      }
    }

    if (!result) {
      await axios.get(`https://api.alienworlds.fun/check_nft/${user}`).then(resp => {
        if (resp && resp.data) {
          result = resp.data;
        }
      }).catch(err => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
    }

    if (result.rows.length < 1) {
      setNft([]);
      return;
    }

    if (result) {
      console.log("Setting NFT data");
      console.log(result);
      setNft([...result.rows[0].template_ids]);
    }
  };

  (0,external_react_.useEffect)(async () => {
    await getMinerName(acc);
    await checkNFT(acc);
  }, [acc]);
  (0,external_react_.useEffect)(async () => {
    //console.log("Loading... "+loading)
    await external_delay_default()(getRandom(100, 5000));
    setUpdate(AccountRow_DateTime.now().setZone("local").toRFC2822());

    if (loading) {
      //console.log("Checking... "+acc)
      await fetchAccountData(acc);
      await fetchTLM(acc);
      await external_delay_default()(getRandom(100, 1500));
      await getLastMineInfo(acc);
      await checkNFT(acc);
      setLoading(false);
    } else {//console.log("Not check!")
    }
  }, [loading]);
  (0,external_react_.useEffect)(() => {
    onTLMChange(balance);
  }, [balance]);
  (0,external_react_.useEffect)(() => {
    onWaxChange(wax);
  }, [wax]);
  (0,external_react_.useEffect)(() => {
    if (accInfo.cpu_weight) {
      onStakedChange(accInfo.cpu_weight.slice(0, -4));
    }
  }, [accInfo.cpu_weight]);
  (0,external_react_.useEffect)(() => {
    const interval = setInterval(async () => {
      //console.log("It's time to checking!")
      setLoading(true);
    }, 120000);
    return () => clearInterval(interval);
  }, []);
  (0,external_react_.useEffect)(async () => {
    if (isInitialTx.current) {
      isInitialTx.current = false;
    } else {
      //console.log("Last mine TX Changed!")
      if (lastMine.last_mine_tx == "Loading" || lastMine.last_mine_tx == "None") return;
      await fetchLastMineTx(lastMine.last_mine_tx);
    }
  }, [lastMine.last_mine_tx]);
  const rawPercent = (accInfo.used / accInfo.max * 100).toFixed(2);
  const percent = accInfo.used ? rawPercent > 100 ? 100 : rawPercent : 0;
  const barColor = percent >= 80 ? "bg-red-600" : percent >= 50 ? "bg-yellow-600" : "bg-blue-600";
  const bgRow = index % 2 != 0 ? "bg-gray-600" : "";
  const lastMineBg = lastMine.last_mine.includes('month') || lastMine.last_mine.includes('day') ? 'bg-red-700' : lastMine.last_mine.includes('hour') ? 'bg-yellow-600' : 'bg-blue-600';
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
      className: "text-center " + bgRow,
      children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
        className: "p-3",
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5 cursor-pointer mx-auto",
          viewBox: "0 0 20 20",
          fill: "#FF0000",
          onClick: () => {
            onDelete(acc);
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
            clipRule: "evenodd"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("td", {
        className: "font-bold",
        children: index + 1
      }), /*#__PURE__*/jsx_runtime_.jsx("td", {
        children: minerName
      }), /*#__PURE__*/jsx_runtime_.jsx("td", {
        children: acc
      }), /*#__PURE__*/jsx_runtime_.jsx("td", {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "overflow-hidden h-5 text-xs flex rounded bg-gray-800 w-full",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              width: percent + "%"
            },
            className: `shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${barColor}`,
            children: [accInfo.used && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "font-bold",
              children: [rawPercent, "% (", accInfo.used / 1000, " ms/", accInfo.max / 1000, " ms)"]
            }), !accInfo.used && /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-bold",
              children: "Loading..."
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("td", {
        children: accInfo.cpu_weight
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
        children: [balance, " TLM"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
        children: [wax, " WAX"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `text-sm font-bold px-2 rounded-md whitespace-nowrap ` + lastMineBg,
          children: lastMine.last_mine
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), history[0] ? /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: 'inline-flex items-center justify-center font-bold text-xs',
          children: history[0].amount
        }) : '']
      }), /*#__PURE__*/jsx_runtime_.jsx("td", {
        className: "text-xs",
        children: update
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "inline-flex items-center h-8 px-4 m-2 text-sm text-white font-bold transition-colors  duration-150 bg-green-600 rounded-lg focus:shadow-outline hover:bg-green-800",
          href: 'https://wax.atomichub.io/explorer/account/' + acc,
          rel: "noopener noreferrer",
          target: "_blank",
          children: "NFT"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), nft && nft.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "font-bold text-xs",
          children: [nft.length, " NFTs Claimable!"]
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/AccountTable.js





function AccountTable(props) {
  const {
    accounts,
    onDelete,
    onTotalTLMChange,
    onTotalWaxChange,
    onTotalStakedChange
  } = props;
  const initTLM = [];
  const initWax = [];
  const initStaked = [];

  if (accounts.length > initTLM.length) {
    for (let acc of accounts) {
      initTLM.push(0);
      initWax.push(0);
      initStaked.push(0);
    }
  } //console.log(accounts.length) 


  const {
    0: TLM,
    1: setTLM
  } = (0,external_react_.useState)(initTLM);
  const {
    0: wax,
    1: setWax
  } = (0,external_react_.useState)(initWax);
  const {
    0: staked,
    1: setStaked
  } = (0,external_react_.useState)(initStaked);

  const onTLMChange = (i, amt) => {
    if (amt == 'Loading') return;
    const newBalance = [...TLM];
    newBalance[i] = amt;
    setTLM(newBalance);
  };

  const onAccDelete = (i, acc) => {
    const newTLM = [...TLM];
    const newWAX = [...wax];
    const newStaked = [...staked];
    newTLM.splice(i, 1);
    newWAX.splice(i, 1);
    newStaked.splice(i, 1);
    setTLM(newTLM);
    setWax(newWAX);
    setStaked(newStaked);
    return onDelete(acc);
  };

  (0,external_react_.useEffect)(() => {
    if (TLM.length > 0) {
      const totalBal = TLM.reduce((total, cur) => {
        //console.log(total, cur)
        if (cur == "Loading" || cur == 'N/A') {
          return total;
        }

        return total + parseFloat(cur);
      }, 0);
      onTotalTLMChange(totalBal);
    }
  }, [TLM]);

  const onWaxChange = (i, amt) => {
    if (amt == 'Loading') return; //console.log("OnWaxChange", i, amt)

    const newWax = [...wax];
    newWax[i] = amt;
    setWax(newWax);
  };

  (0,external_react_.useEffect)(() => {
    //console.log(wax)
    if (wax.length > 0) {
      const totalWax = wax.reduce((total, now) => {
        if (now == 'Loading' || now == 'N/A') {
          return total;
        }

        return total + parseFloat(now);
      }, 0);
      onTotalWaxChange(totalWax);
    }
  }, [wax]);

  const onStakedChange = (i, amt) => {
    const newStaked = [...staked];
    newStaked[i] = amt;
    setStaked(newStaked);
  };

  (0,external_react_.useEffect)(() => {
    if (staked.length > 0) {
      const totalStaked = staked.reduce((total, now) => {
        if (now == 'Loading') {
          return total;
        }

        return total + parseFloat(now);
      }, 0);
      onTotalStakedChange(totalStaked);
    }
  }, [wax]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col w-full overflow-auto",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      className: "table-auto border border-gray-500 border-collapse mt-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          className: "bg-gray-800",
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            className: "w-min",
            children: "Remove"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "#"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Miner"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Wallet"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            className: "w-4/12",
            children: "CPU"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Stake"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "TLM"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "WAX"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Last mine"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            className: "w-1/12",
            children: "Last update"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "NFT"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: accounts.length > 0 && accounts.map((acc, i) => {
          return /*#__PURE__*/jsx_runtime_.jsx(AccountRow, {
            index: i,
            account: acc,
            axios: Axios,
            onDelete: () => onAccDelete(i, acc),
            onTLMChange: amt => onTLMChange(i, amt),
            onWaxChange: amt => onWaxChange(i, amt),
            onStakedChange: amt => onStakedChange(i, amt)
          }, i);
        })
      })]
    }), accounts.length === 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "text-3xl font-bold text-center text-red-400",
      children: "No accounts added yet!"
    })]
  });
}
;// CONCATENATED MODULE: ./components/TotalBalanceCard.js



function TotalBalanceCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TotalBalanceCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TotalBalanceCard_ownKeys(Object(source), true).forEach(function (key) { TotalBalanceCard_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TotalBalanceCard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TotalBalanceCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const TotalBalanceCard = props => {
  const {
    totalTLM,
    totalWax,
    totalStaked,
    TLMPrice,
    WAXPrice
  } = props;
  const {
    0: totalUSDT,
    1: setTotalUSDT
  } = (0,external_react_.useState)(0);
  const {
    0: options,
    1: setOptions
  } = (0,external_react_.useState)({
    TLM: true,
    WAX: true,
    Staked: false
  });
  (0,external_react_.useEffect)(() => {
    let total = 0;

    if (options.TLM) {
      total += totalTLM * TLMPrice.market_price;
    }

    if (options.WAX) {
      total += totalWax * WAXPrice.market_price;
    }

    if (options.Staked) {
      total += totalStaked * WAXPrice.market_price;
    }

    setTotalUSDT(total);
  }, [options, totalTLM, totalWax, totalStaked, TLMPrice, WAXPrice]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grid grid-cols-1 lg:grid-cols-4 gap-5 w-full lg:w-5/6",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col rounded-md items-center justify-center bg-gray-700 w-full h-full py-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-xl font-bold",
        children: "Total TLM"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-4xl font-bold text-green-400",
        children: [totalTLM.toFixed(4), " TLM"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-xs text-blue-300",
        children: ["1 TLM =  ", TLMPrice.market_price, " USDT @ Binance"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-xs text-blue-300",
        children: ["Updated on: ", TLMPrice.update]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-md font-bold",
        children: ["~ ", (totalTLM * TLMPrice.market_price).toFixed(2), " USDT"]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col rounded-md items-center justify-center bg-gray-700 w-full h-full py-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-xl font-bold",
        children: "Total WAX"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-4xl font-bold text-green-400",
        children: [totalWax.toFixed(4), " WAX"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-xs text-blue-300",
        children: ["1 WAXP =  ", WAXPrice.market_price, " USDT @ Huobi"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-xs text-blue-300",
        children: ["Updated on: ", WAXPrice.update]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-md font-bold",
        children: ["~ ", (totalWax * WAXPrice.market_price).toFixed(2), " USDT"]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col rounded-md items-center justify-center bg-gray-700 w-full h-full py-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-xl font-bold",
        children: "Total WAX Staked"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-4xl font-bold text-green-400",
        children: [totalStaked.toFixed(4), " WAX"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-xs text-blue-300",
        children: ["1 WAXP =  ", WAXPrice.market_price, " USDT @ Huobi"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-xs text-blue-300",
        children: ["Updated on: ", WAXPrice.update]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-md font-bold",
        children: ["~ ", (totalStaked * WAXPrice.market_price).toFixed(2), " USDT"]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col rounded-md items-center justify-center bg-gray-700 w-full h-full py-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-xl font-bold",
        children: "Total USDT"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-4xl font-bold text-green-400",
        children: [totalUSDT.toFixed(2), " USDT"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row gap-x-5",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "inline-flex items-center mt-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "checkbox",
            className: "form-checkbox h-4 w-4 text-gray-600",
            defaultChecked: options.TLM,
            onClick: () => setOptions(TotalBalanceCard_objectSpread(TotalBalanceCard_objectSpread({}, options), {}, {
              TLM: !options.TLM
            }))
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "ml-2",
            children: "TLM"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "inline-flex items-center mt-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "checkbox",
            className: "form-checkbox h-4 w-4 text-gray-600",
            defaultChecked: options.WAX,
            onClick: () => setOptions(TotalBalanceCard_objectSpread(TotalBalanceCard_objectSpread({}, options), {}, {
              WAX: !options.WAX
            }))
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "ml-2",
            children: "WAX"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "inline-flex items-center mt-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "checkbox",
            className: "form-checkbox h-4 w-4 text-gray-600",
            defaultChecked: options.Staked,
            onClick: () => setOptions(TotalBalanceCard_objectSpread(TotalBalanceCard_objectSpread({}, options), {}, {
              Staked: !options.Staked
            }))
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "ml-2",
            children: "WAX Staked"
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var components_TotalBalanceCard = (TotalBalanceCard);
;// CONCATENATED MODULE: ./pages/index.js













function Home(props) {
  const cookies = new (external_universal_cookie_default())();
  const cookieOptions = {
    secure: true,
    expires: external_luxon_.DateTime.now().plus({
      months: 6
    }).toJSDate()
  };

  if (props.urlAcc && !cookies.get("accounts")) {
    cookies.set("accounts", props.urlAcc, cookieOptions);
  }

  const defaultAcc = props.urlAcc ? props.urlAcc : cookies.get("accounts") ? cookies.get("accounts") : [];
  const {
    0: account,
    1: setAccount
  } = (0,external_react_.useState)(defaultAcc);
  const {
    0: input,
    1: setInput
  } = (0,external_react_.useState)("");
  const genLink = props.urlAcc ? 'https://www.alienworlds.fun/?accounts=' + external_btoa_default()(JSON.stringify(props.urlAcc)) : cookies.get("accounts") ? 'https://www.alienworlds.fun/?accounts=' + external_btoa_default()(JSON.stringify(cookies.get("accounts"))) : "Please add some accounts first!";
  const {
    0: link,
    1: setLink
  } = (0,external_react_.useState)(genLink);
  const {
    0: copied,
    1: setCopied
  } = (0,external_react_.useState)(false);
  const {
    0: totalTLM,
    1: setTotalTLM
  } = (0,external_react_.useState)(0);
  const {
    0: totalWax,
    1: setTotalWax
  } = (0,external_react_.useState)(0);
  const {
    0: totalStaked,
    1: setTotalStaked
  } = (0,external_react_.useState)(0);
  const {
    0: TLMPrice,
    1: setTLMPrice
  } = (0,external_react_.useState)({
    market_price: 0,
    update: "None"
  });
  const {
    0: WAXPrice,
    1: setWAXPrice
  } = (0,external_react_.useState)({
    market_price: 0,
    update: "None"
  });
  const {
    0: layout,
    1: setLayout
  } = (0,external_react_.useState)("");

  const handleAddAcc = e => {
    e.preventDefault();
    const account_arr = Array.from(new Set(input.split(" "))); //console.log(account_arr)

    let newAcc = [...account];

    for (let acc of account_arr) {
      acc = acc.replace(/\s/g, "");
      console.log(acc);

      if ([...account].includes(acc) || account_arr.reduce((count, cur) => cur === acc ? count += 1 : count) > 1) {
        alert(`Account: ${acc} exists!`);
      }

      newAcc.push(acc);
    }

    setAccount(newAcc);
    setInput("");
  };

  const fetchTLMPrice = async () => {
    return external_axios_default().get('https://api.binance.com/api/v3/avgPrice?symbol=TLMUSDT').then(({
      data
    }) => {
      return data.price;
    }).catch(err => {
      console.log("ERROR: cannot get TLM market price");
      console.log(err);
      return 0;
    });
  };

  const fetchWAXPrice = async () => {
    return external_axios_default().get('https://api.huobi.pro/market/detail?symbol=waxpusdt').then(({
      data
    }) => {
      return data.tick.close;
    }).catch(err => {
      console.log("ERROR: cannot get WAX market price");
      console.log(err);
      return 0;
    });
  };

  const handleDeleteAcc = acc => {
    //console.log("Delete account ",acc)
    let newAcc = [...account].filter(arr => arr != acc);
    setAccount(newAcc);
  };

  const handleDeleteCookies = () => {
    cookies.remove("accounts");
    setAccount([]);
    setInput("");
    setTotalTLM(0);
  };

  (0,external_react_.useEffect)(() => {
    //console.log("Account Changed!")
    //console.log(account)
    cookies.set("accounts", account, cookieOptions);
    setLink('https://www.alienworlds.fun/?accounts=' + external_btoa_default()(JSON.stringify(account)));
  }, [account]);
  (0,external_react_.useEffect)(async () => {
    let lastTLMPrice = 0;
    let lastWaxPrice = 0;
    const now = external_luxon_.DateTime.now().setZone("local");
    const nextUpdate = TLMPrice.update != "None" ? external_luxon_.DateTime.fromRFC2822(TLMPrice.update).plus({
      seconds: 30
    }) : now;

    if (nextUpdate <= now) {
      lastTLMPrice = await fetchTLMPrice();
      const newTLMPrice = {
        market_price: lastTLMPrice,
        update: external_luxon_.DateTime.now().setZone("local").toRFC2822()
      };
      setTLMPrice(newTLMPrice);
      lastWaxPrice = await fetchWAXPrice();
      const newWaxPrice = {
        market_price: lastWaxPrice,
        update: external_luxon_.DateTime.now().setZone("local").toRFC2822()
      };
      setWAXPrice(newWaxPrice);
    }
  }, [totalTLM, totalWax, totalStaked]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col min-h-screen items-center justify-center mt-10 px-2 lg:px-0",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Alienworlds Account Monitor | The only AW monitor website you needed | Monitor CPU,WAX,TLM,NFT, etc. of alienworlds here!"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Alienworlds.fun the only alienworlds monitor website that you needed. Included CPU,WAX,TLM,NFT,etc. No login needed. Start monitoring your alienworlds team now!"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "flex flex-col w-full lg:w-3/6",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-5xl font-bold mb-3 text-center",
          children: ["Alienworlds Account Monitor ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-md text-blue-400",
            children: "v2.5"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mx-2 px-2 font-bold text-green-600 bg-green-200 rounded-md text-center w-auto self-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-center text-sm",
            children: "Like this website? You can donate us by sending WAX to 1crtk.wam"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-center text-xs",
            children: "This website costs $20/mo to running all services."
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-center text-xs",
            children: "All donations will use to maintain this website."
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-center text-sm mt-2",
          children: ["This website is open source on ", /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-blue-400",
            href: "https://github.com/VectorXz/alienworlds_acc_monitor",
            children: "GitHub"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col lg:flex-row w-full items-center justify-center rounded-md shadow-lg p-6 mt-10 mb-2 bg-gray-700 gap-x-4 gap-y-5 lg:gap-y-0",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex-1 flex-col",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            className: "w-full",
            onSubmit: handleAddAcc,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex flex-row items-center justify-center w-full",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                className: "text-center lg:mr-4",
                children: "WAM Account:"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                className: "shadow appearance-none w-4/6 rounded py-2 px-3 bg-gray-300 text-gray-800 font-bold leading-tight focus:outline-none focus:shadow-outline",
                onChange: e => {
                  setInput(e.target.value);
                },
                value: input
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "text-xs font-bold mt-0.5 text-red-300 text-center",
              children: ["Adding multiple accounts at once is supported by using space ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Ex. abcde.wam efghj.wam 1a2b3.wam"]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "mt-5 w-full",
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full",
                type: "submit",
                children: "ADD"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "mt-2 bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full",
            type: "button",
            onClick: handleDeleteCookies,
            children: "DELETE ALL DATAS (COOKIES)"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex-1 flex-col w-full",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex w-full items-center justify-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm font-bold",
              children: "Like us on Facebook to follow any updates, issues."
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex w-full items-center justify-center mt-0.5",
            children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
              src: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAlienworldsfun-100734315569585&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
              width: 340,
              height: 130,
              style: {
                border: 'none',
                overflow: 'hidden'
              },
              scrolling: "no",
              frameBorder: 0,
              allowFullScreen: true,
              allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            })
          }), account.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex-1 flex-row text-center mt-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-center mb-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "text-xl font-bold mb-1",
                children: "Save this link to view these accounts later"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                className: "shadow appearance-none w-4/6 rounded w-full py-2 px-3 bg-gray-300 mt-1 text-gray-800 font-bold leading-tight focus:outline-none focus:shadow-outline cursor-pointer",
                value: link,
                onClick: e => {
                  e.target.select();
                  navigator.clipboard.writeText(link);
                  setCopied(true);
                },
                onFocus: e => {
                  e.target.select();
                },
                readOnly: true
              })
            }), copied && /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-bold text-sm mt-3",
                children: "Copied to clipboard!"
              })
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col rounded-md items-center justify-center p-6 my-3 w-full lg:w-5/6",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center py-4 lg:px-4",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "p-2 px-4 bg-blue-800 items-center text-blue-100 leading-none lg:rounded-full flex lg:inline-flex",
          role: "alert",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3",
            children: "New 27/5/2021"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "font-semibold mr-2 text-left flex-auto",
            children: "Table Layout is now live! Try switch to \"Table\" below."
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row justify-center items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-xl font-bold mr-3",
          children: "Select Layout: "
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "mr-3",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `cursor-pointer inline-block border border-blue-500 rounded hover:border-blue-20
hover:bg-blue-200 py-1 px-3 font-bold ${layout === 'Cards' ? 'bg-blue-500 text-white' : 'text-blue-500'}`,
              onClick: () => setLayout("Cards"),
              children: "Cards"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "mr-3",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `cursor-pointer inline-block border border-blue-500 rounded hover:border-blue-20
hover:bg-blue-200 py-1 px-3 font-bold ${layout === 'Table' ? 'bg-blue-500 text-white' : 'text-blue-500'}`,
              onClick: () => setLayout("Table"),
              children: "Table"
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex mt-2 text-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-red-500 font-bold",
          children: "*Please wait for information to be loaded before changing layout*"
        })
      })]
    }), layout != 'Cards' && layout != 'Table' && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "text-3xl font-bold",
          children: ["Loaded ", account.length, " accounts"]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "grid grid-cols-2 lg:grid-cols-6 gap-5 mt-3",
          children: account.map((acc, i) => {
            return /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "p-3 px-5 text-center bg-gray-600 rounded-md",
              children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: acc
              })
            }, i);
          })
        })]
      })
    }), layout === 'Cards' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_TotalBalanceCard, {
        totalTLM: totalTLM,
        totalWax: totalWax,
        totalStaked: totalStaked,
        TLMPrice: TLMPrice,
        WAXPrice: WAXPrice
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col rounded-md items-center justify-center p-6 my-3 w-full lg:w-5/6 bg-gray-700",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-lg font-bold text-center my-1 text-indigo-300",
          children: "Data will automatically refresh every 120 secs"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-lg font-bold text-center my-1 text-indigo-300",
          children: "Click at trash icon to delete account"
        }), /*#__PURE__*/jsx_runtime_.jsx(AccountCard, {
          accounts: account,
          onDelete: handleDeleteAcc,
          onTotalTLMChange: newTotal => {
            setTotalTLM(newTotal);
          },
          onTotalWaxChange: newTotal => {
            setTotalWax(newTotal);
          },
          onTotalStakedChange: newTotal => {
            setTotalStaked(newTotal);
          }
        })]
      })]
    }), layout === 'Table' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_TotalBalanceCard, {
        totalTLM: totalTLM,
        totalWax: totalWax,
        totalStaked: totalStaked,
        TLMPrice: TLMPrice,
        WAXPrice: WAXPrice
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col rounded-md items-center justify-center p-6 my-3 w-full lg:w-5/6 bg-gray-700",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-lg font-bold text-center my-1 text-indigo-300",
          children: "Data will automatically refresh every 120 secs"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-lg font-bold text-center my-1 text-indigo-300",
          children: "Click at trash icon to delete account"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "visible xl:invisible",
          children: "If you're using mobile, you may need to scroll along the table."
        }), /*#__PURE__*/jsx_runtime_.jsx(AccountTable, {
          accounts: account,
          onDelete: handleDeleteAcc,
          onTotalTLMChange: newTotal => {
            setTotalTLM(newTotal);
          },
          onTotalWaxChange: newTotal => {
            setTotalWax(newTotal);
          },
          onTotalStakedChange: newTotal => {
            setTotalStaked(newTotal);
          }
        })]
      })]
    })]
  });
}
async function getServerSideProps(context) {
  //console.log(context.query)
  if ('accounts' in context.query) {
    let acc = [];

    try {
      acc = JSON.parse(external_atob_default()(context.query.accounts));
    } catch (e) {
      console.log("Parse account error");
      return {
        props: {}
      };
    } //console.log(acc)


    return {
      props: {
        urlAcc: acc
      }
    };
  }

  return {
    props: {} // will be passed to the page component as props

  };
}

/***/ }),

/***/ 223:
/***/ (function(module) {

"use strict";
module.exports = require("luxon");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(520));
module.exports = __webpack_exports__;

})();