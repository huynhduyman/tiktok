"use strict";
exports.id = 331;
exports.ids = [331];
exports.modules = {

/***/ 4331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VH": () => (/* binding */ SOLANA_HOST),
  "VX": () => (/* binding */ TIKTOK_IDL),
  "LW": () => (/* binding */ TIKTOK_PROGRAM_ID)
});

// UNUSED EXPORTS: CLUSTER

// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(7831);
;// CONCATENATED MODULE: ./utils/tiktok_nft.json
const tiktok_nft_namespaceObject = JSON.parse('{"version":"0.1.0","name":"tiktok_nft","instructions":[{"name":"createState","accounts":[{"name":"state","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"createUser","accounts":[{"name":"user","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"name","type":"string"},{"name":"profileUrl","type":"string"}]},{"name":"createVideo","accounts":[{"name":"state","isMut":true,"isSigner":false},{"name":"video","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"description","type":"string"},{"name":"videoUrl","type":"string"},{"name":"creatorName","type":"string"},{"name":"creatorUrl","type":"string"}]},{"name":"createComment","accounts":[{"name":"video","isMut":true,"isSigner":false},{"name":"comment","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"text","type":"string"},{"name":"commenterName","type":"string"},{"name":"commenterUrl","type":"string"}]},{"name":"approve","accounts":[{"name":"video","isMut":true,"isSigner":false},{"name":"comment","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]},{"name":"disapprove","accounts":[{"name":"video","isMut":true,"isSigner":false},{"name":"comment","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]},{"name":"likeVideo","accounts":[{"name":"video","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]}],"accounts":[{"name":"StateAccount","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"videoCount","type":"u64"}]}},{"name":"UserAccount","type":{"kind":"struct","fields":[{"name":"userName","type":"string"},{"name":"userWalletAddress","type":"publicKey"},{"name":"userProfileImageUrl","type":"string"}]}},{"name":"VideoAccount","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"description","type":"string"},{"name":"videoUrl","type":"string"},{"name":"creatorName","type":"string"},{"name":"creatorUrl","type":"string"},{"name":"commentCount","type":"u64"},{"name":"index","type":"u64"},{"name":"creatorTime","type":"i64"},{"name":"peopleWhoLiked","type":{"vec":"publicKey"}},{"name":"likes","type":"u8"},{"name":"remove","type":"i64"}]}},{"name":"CommentAccount","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"text","type":"string"},{"name":"commenterName","type":"string"},{"name":"commenterUrl","type":"string"},{"name":"index","type":"u64"},{"name":"videoTime","type":"i64"}]}}],"errors":[{"code":6000,"name":"CannotCreateUser","msg":"User cannot be created, missing data"},{"code":6001,"name":"CannotCreateVideo","msg":"Video cannot be created, missing data"},{"code":6002,"name":"ReachedMaxLikes","msg":"Cannot receive more than 5 likes"},{"code":6003,"name":"UserLikedVideo","msg":"User has already liked the tweet"},{"code":6004,"name":"UserCensoredVideo","msg":"Video with potentially bad content"}],"metadata":{"address":"CNk5L3fPNpKMWBaUVxhCezoU97gjLhdQuj3mLPTcBGcY"}}');
;// CONCATENATED MODULE: ./utils/const.js


const CLUSTER =  false ? 0 :  false ? 0 :  true ? "devnet" : 0;
const SOLANA_HOST = process.env.REACT_APP_SOLANA_API_URL ? process.env.REACT_APP_SOLANA_API_URL : CLUSTER === "mainnet" ? (0,web3_js_.clusterApiUrl)("mainnet-beta") : CLUSTER === "testnet" ? (0,web3_js_.clusterApiUrl)("testnet") : CLUSTER === "devnet" ? (0,web3_js_.clusterApiUrl)("devnet") : "http://localhost:8899";
const TIKTOK_PROGRAM_ID = new web3_js_.PublicKey(CLUSTER === 'localnet' ? 'CNk5L3fPNpKMWBaUVxhCezoU97gjLhdQuj3mLPTcBGcY' : CLUSTER === 'testnet' ? 'CNk5L3fPNpKMWBaUVxhCezoU97gjLhdQuj3mLPTcBGcY' : CLUSTER === 'devnet' ? 'CNk5L3fPNpKMWBaUVxhCezoU97gjLhdQuj3mLPTcBGcY' : '');
const TIKTOK_IDL = tiktok_nft_namespaceObject;

/***/ })

};
;