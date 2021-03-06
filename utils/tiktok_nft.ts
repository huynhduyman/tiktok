export type TiktokNft = {
  "version": "0.1.0",
  "name": "tiktok_nft",
  "instructions": [
    {
      "name": "createState",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "profileUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "createVideo",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "videoUrl",
          "type": "string"
        },
        {
          "name": "creatorName",
          "type": "string"
        },
        {
          "name": "creatorUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "createComment",
      "accounts": [
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "commenterName",
          "type": "string"
        },
        {
          "name": "commenterUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "approve",
      "accounts": [
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "disapprove",
      "accounts": [
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "likeVideo",
      "accounts": [
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "stateAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "videoCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userName",
            "type": "string"
          },
          {
            "name": "userWalletAddress",
            "type": "publicKey"
          },
          {
            "name": "userProfileImageUrl",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "videoAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "videoUrl",
            "type": "string"
          },
          {
            "name": "creatorName",
            "type": "string"
          },
          {
            "name": "creatorUrl",
            "type": "string"
          },
          {
            "name": "commentCount",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "creatorTime",
            "type": "i64"
          },
          {
            "name": "peopleWhoLiked",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "likes",
            "type": "u8"
          },
          {
            "name": "remove",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "commentAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "text",
            "type": "string"
          },
          {
            "name": "commenterName",
            "type": "string"
          },
          {
            "name": "commenterUrl",
            "type": "string"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "videoTime",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "CannotCreateUser",
      "msg": "User cannot be created, missing data"
    },
    {
      "code": 6001,
      "name": "CannotCreateVideo",
      "msg": "Video cannot be created, missing data"
    },
    {
      "code": 6002,
      "name": "ReachedMaxLikes",
      "msg": "Cannot receive more than 5 likes"
    },
    {
      "code": 6003,
      "name": "UserLikedVideo",
      "msg": "User has already liked the tweet"
    },
    {
      "code": 6004,
      "name": "UserCensoredVideo",
      "msg": "Video with potentially bad content"
    }
  ]
};

export const IDL: TiktokNft = {
  "version": "0.1.0",
  "name": "tiktok_nft",
  "instructions": [
    {
      "name": "createState",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "profileUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "createVideo",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "videoUrl",
          "type": "string"
        },
        {
          "name": "creatorName",
          "type": "string"
        },
        {
          "name": "creatorUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "createComment",
      "accounts": [
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "commenterName",
          "type": "string"
        },
        {
          "name": "commenterUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "approve",
      "accounts": [
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "disapprove",
      "accounts": [
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "likeVideo",
      "accounts": [
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "stateAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "videoCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userName",
            "type": "string"
          },
          {
            "name": "userWalletAddress",
            "type": "publicKey"
          },
          {
            "name": "userProfileImageUrl",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "videoAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "videoUrl",
            "type": "string"
          },
          {
            "name": "creatorName",
            "type": "string"
          },
          {
            "name": "creatorUrl",
            "type": "string"
          },
          {
            "name": "commentCount",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "creatorTime",
            "type": "i64"
          },
          {
            "name": "peopleWhoLiked",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "likes",
            "type": "u8"
          },
          {
            "name": "remove",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "commentAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "text",
            "type": "string"
          },
          {
            "name": "commenterName",
            "type": "string"
          },
          {
            "name": "commenterUrl",
            "type": "string"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "videoTime",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "CannotCreateUser",
      "msg": "User cannot be created, missing data"
    },
    {
      "code": 6001,
      "name": "CannotCreateVideo",
      "msg": "Video cannot be created, missing data"
    },
    {
      "code": 6002,
      "name": "ReachedMaxLikes",
      "msg": "Cannot receive more than 5 likes"
    },
    {
      "code": 6003,
      "name": "UserLikedVideo",
      "msg": "User has already liked the tweet"
    },
    {
      "code": 6004,
      "name": "UserCensoredVideo",
      "msg": "Video with potentially bad content"
    }
  ]
};
