(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{4562:function(e,t,n){"use strict";n.r(t);var s=n(6938),a=n(8348),i=n(8020),r=n(7294),m=n(4331),u=n(5893);t.default=function(e){var t=e.children,n=(0,r.useMemo)((function(){return m.VH}),[]),o=(0,r.useMemo)((function(){return[new i.Ox]}),[]);return(0,u.jsx)(s.U,{endpoint:n,children:(0,u.jsx)(s.nS,{wallets:o,autoConnect:!0,children:(0,u.jsx)(a.sR,{children:t})})})}},4331:function(e,t,n){"use strict";n.d(t,{VH:function(){return r},VX:function(){return u},LW:function(){return m}});var s=n(9917),a=JSON.parse('{"version":"0.1.0","name":"tiktok_nft","instructions":[{"name":"createState","accounts":[{"name":"state","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"createUser","accounts":[{"name":"user","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"name","type":"string"},{"name":"profileUrl","type":"string"}]},{"name":"createVideo","accounts":[{"name":"state","isMut":true,"isSigner":false},{"name":"video","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"description","type":"string"},{"name":"videoUrl","type":"string"},{"name":"creatorName","type":"string"},{"name":"creatorUrl","type":"string"}]},{"name":"createComment","accounts":[{"name":"video","isMut":true,"isSigner":false},{"name":"comment","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"text","type":"string"},{"name":"commenterName","type":"string"},{"name":"commenterUrl","type":"string"}]},{"name":"approve","accounts":[{"name":"video","isMut":true,"isSigner":false},{"name":"comment","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]},{"name":"disapprove","accounts":[{"name":"video","isMut":true,"isSigner":false},{"name":"comment","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]},{"name":"likeVideo","accounts":[{"name":"video","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]}],"accounts":[{"name":"StateAccount","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"videoCount","type":"u64"}]}},{"name":"UserAccount","type":{"kind":"struct","fields":[{"name":"userName","type":"string"},{"name":"userWalletAddress","type":"publicKey"},{"name":"userProfileImageUrl","type":"string"}]}},{"name":"VideoAccount","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"description","type":"string"},{"name":"videoUrl","type":"string"},{"name":"creatorName","type":"string"},{"name":"creatorUrl","type":"string"},{"name":"commentCount","type":"u64"},{"name":"index","type":"u64"},{"name":"creatorTime","type":"i64"},{"name":"peopleWhoLiked","type":{"vec":"publicKey"}},{"name":"likes","type":"u8"},{"name":"remove","type":"i64"}]}},{"name":"CommentAccount","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"text","type":"string"},{"name":"commenterName","type":"string"},{"name":"commenterUrl","type":"string"},{"name":"index","type":"u64"},{"name":"videoTime","type":"i64"}]}}],"errors":[{"code":6000,"name":"CannotCreateUser","msg":"User cannot be created, missing data"},{"code":6001,"name":"CannotCreateVideo","msg":"Video cannot be created, missing data"},{"code":6002,"name":"ReachedMaxLikes","msg":"Cannot receive more than 5 likes"},{"code":6003,"name":"UserLikedVideo","msg":"User has already liked the tweet"},{"code":6004,"name":"UserCensoredVideo","msg":"Video with potentially bad content"}],"metadata":{"address":"CNk5L3fPNpKMWBaUVxhCezoU97gjLhdQuj3mLPTcBGcY"}}'),i=n(4155),r=i.env.REACT_APP_SOLANA_API_URL?i.env.REACT_APP_SOLANA_API_URL:(0,s.clusterApiUrl)("devnet"),m=new s.PublicKey("CNk5L3fPNpKMWBaUVxhCezoU97gjLhdQuj3mLPTcBGcY"),u=a},6601:function(){},9214:function(){},5568:function(){},5024:function(){}}]);