const dialogs = [
  
  { 
      "id":1,
      "title":"Web3介绍",
      "dialog":[
      
          {
              "id":1,
              "type":"knowledge",
              "data":"Hi 非常欢迎您来开始进入Web3🌐的世界 🚀"
          },          
       //chat 1
       
          {
              "id":2,
              "type":"knowledge",
              "data":"我们可以将过去短暂的互联网历史分为两个时期—Web 1.0 和 Web 2.0 🔗 "
          },
       //chat 2   
       
          {
              "id":3,
              "type":"knowledge",
              "data":"比如 Web1.0时期(1990-2004)，这个时期的互联网的特点：只读。👀"
          },
       //chat 3   
       
          {
              "id":4,
              "type":"choices",
              "data":[
                  {
                      "choice":"🕸️ 没用过Web1.0，不是很了解......", 
                      "path":[
                          {
                              "from":4,
                              "to":5
                          }
                      ]
                  },
        //choice 4-A   
   
                  {
                      "choice":"我有听说过！🧐",
                      "path":[
                          {
                              "from":4,
                              "to":5
                          }
                      ]
                  },        
              ]
          },
       //choice 4-B
       //最终 4-A 4-B 选项，选择后都会转到 5 
          {
              "id":5,
              "type":"knowledge",
              "data":"Web1.0主要是由公司拥有的静态网站，用户之间的互动几乎为零 ❌",
              "path":[
                  {
                      "from":5,
                      "to":6
                  }
              ]
          },
        //chat 5
        
          {
              "id":6,
              "type":"choices",
              "data":[
                  {
                      "choice":"🕸️ 没用过Web1.0，不是很了解......", 
                      "path":[
                          {
                              "from":6,
                              "to":7
                          }
                      ]
                  },
       //chat 6
        
          {
              "id":7,
              "type":"knowledge",
              "data":"个人很少创造内容，导致它被称为只读网络。🚫🗣️",
              "path":[
                  {
                      "from":7,
                      "to":8
                  }
              ]
          },
       //chat 7
         
          {
              "id":8,
              "type":"choices",
              "data":[
                  {
                      "choice":"😢 还蛮遗憾的。",  
                      "path":[
                          {
                              "from":8,
                              "to":9
                          }
                      ]
                  },
        //choice 8-A 选择后都会转到 9
           
                  {
                      "choice":"💻 那Web2.0又是什么呢？",
                      "path":[
                          {
                              "from":8,
                              "to":9
                          }
                      ]
                  },
          //choice 8-B 选择后都会转到 9
                                            
          {
              "id":9,
              "type":"knowledge",
              "data":"是的，接着迎来了Web2.0时代。🎉",
              "path":[
                  {
                      "from":9,
                      "to":10
                  }
              ]
          },
          //chat 9
          
          {
              "id":10,
              "type":"knowledge",
              "data":"Web2.0（2004 年 - 至今），特点：能读能写。",
              "path":[
                  {
                      "from":10,
                      "to":11
                  }
              ]
          },
          //chat 10
          
          {
              "id":11,
              "type":"knowledge",
              "data":"网络不再是只读的，它演变成读写网络。 ",
              "path":[
                  {
                      "from":11,
                      "to":12
                  }
              ]
          },
          //chat 11
            
          {
              "id":12,
              "type":"knowledge",
              "data":"互联网公司除了向用户提供内容外，还开始提供平台来共享用户生产的内容，并参与用户间的交互。👀💬💻",
              "path":[
                  {
                      "from":12,
                      "to":13
                  }
              ] 
          },
          //chat 12
          
          {
              "id":13,
              "type":"knowledge",
              "data":"无需认可：用户无需获取其他中介机构的许可、授权或认证，即可自由地使用、访问和交换数字资产和服务。",
              "path":[
                  {
                      "from":null,
                      "to":15
                  }
              ]
          },
          //chat 13
         
          {
              "id":13,
              "type":"knowledge",
              "data":"具有原生支付功能：直接支持货币流动。典型的例子是使用加密货币（如比特币、以太坊等）进行支付，这些数字资产通过区块链技术来记录和交换，而无需中心化机构的支持",
              "path":[
                  {
                      "from":13,
                      "to":14
                  }
              ]
          },
          {
              "id":14,
              "type":"knowledge",
              "data":"无需信任：在交互式协议（如智能合约）的参与过程中，用户无需信任其他参与者，也无需信任中介机构，而可以完全依赖于技术协议和算法来实现交互的信任和验证。",
              "path":[
                  {
                      "from":null,
                      "to":15
                  }
              ]
          },
          {
              "id":15,
              "type":"choices",
              "data":[
                  {
                      "choice":"原来如此/OK",
                      "path":[
                          {
                              "from":null,
                              "to":16
                          }
                      ]
                  }
              ]
          },
          {
              "id":16,
              "type":"knowledge",
              "data":"Web3 很重要，除此以外，最想了解的是?"
          },
          {
              "id":17,
              "type":"choices",
              "data":[
                  {
                      "choice":"所有权",
                      "path":[
                          {
                              "from":null,
                              "to":18
                          }
                      ]
                  },
                  {
                      "choice":"抗审查",
                      "path":[
                          {
                              "from":null,
                              "to":19
                          }
                      ]
                  },
                  {
                      "choice":"去中心化自治组织 (DAO)",
                      "path":[
                          {
                              "from":null,
                              "to":20
                          }
                      ]
                  },
                  {
                      "choice":"身份",
                      "path":[
                          {
                              "from":null,
                              "to":21
                          }
                      ]
                  }
              ]
          },
          {
              "id":18,
              "type":"knowledge",
              "data":"所有权：Web3 允许通过非同质化代币 (NFT) 直接拥有所有权。 任何人甚至是游戏创作者，都没有权力剥夺您的所有权。 ",
              "path":[
                  {
                      "from":null,
                      "to":22
                  }
              ]
          },
          {
              "id":19,
              "type":"knowledge",
              "data":"抗审查：在 Web3，您的数据位于区块链上。 当您决定离开一个平台时，您可以将您的声誉带走，将其带进另一个更符合您的价值观的平台。",
              "path":[
                  {
                      "from":null,
                      "to":22
                  }
              ]
          },
          {
              "id":20,
              "type":"knowledge",
              "data":"去中心化自治组织 (DAO)：在 Web3 中，除了拥有你的数据之外，通过使用类似于公司股票的代币，你还可以作为集体中的一员拥有这个平台。 去中心化自治组织让你可以协调平台的分散化所有权，以及对平台的未来做出决策。",
              "path":[
                  {
                      "from":null,
                      "to":22
                  }
              ]
          },
          {
              "id":21,
              "type":"knowledge",
              "data":"身份：Web3 允许你使用以太坊地址和以太坊域名服务配置文件控制你的数字身份，从而解决了这些问题。 使用以太坊地址可以提供跨平台单点登录，这种登录安全、抗审查并且匿名。",
              "path":[
                  {
                      "from":null,
                      "to":22
                  }
              ]
          },
          {
              "id":22,
              "type":"choices",
              "data":[
                  {
                      "choice":"基本能掌握",
                      "path":[
                          {
                              "from":null,
                              "to":27
                          }
                      ]
                  },
                  {
                      "choice":"还没理清楚，可以再简单点说明",
                      "path":[
                          {
                              "from":18,
                              "to":23
                          },
                          {
                              "from":19,
                              "to":24
                          },
                          {
                              "from":20,
                              "to":25
                          },
                          {
                              "from":21,
                              "to":26
                          }
                      ]
                  }
              ]
          },
          {
              "id":23,
              "type":"knowledge",
              "data":"所有权：数字资产（如加密货币、代币、数字证券等）所代表或包括的权益或利益，包括但不限于持有、使用、流通、收益等方面",
              "path":[
                  {
                      "from":null,
                      "to":27
                  }
              ]
          },
          {
              "id":24,
              "type":"knowledge",
              "data":"抗审查：用户可以使用无需信任、无需许可、无需认可的方式使用数字资产和服务，从而避免了中心化机构和政府的审查和限制。这种技术特点使得用户能够自由地使用数字资产和服务，而不必担心遭受审查和限制的风险。",
              "path":[
                  {
                      "from":null,
                      "to":27
                  }
              ]
          },
          {
              "id":25,
              "type":"knowledge",
              "data":"DAO（去中心化自治组织）：一种由智能合约和代币构成的去中心化组织形式。这种组织形式通过智能合约的自动执行和代币的激励机制来实现去中心化的决策和治理，避免了中心化机构的干扰和不公。",
              "path":[
                  {
                      "from":null,
                      "to":27
                  }
              ]
          },
          {
              "id":26,
              "type":"knowledge",
              "data":"身份：使用者在数字世界中的身份认证形式。Web3 技术为身份带来了新的形式和意义，具有去中心化、自主掌控、数字化、安全可靠等特点。",
              "path":[
                  {
                      "from":null,
                      "to":27
                  }
              ]
          },
          {
              "id":27,
              "type":"choices",
              "data":[
                  {
                      "choice":"明白，可以了解了解web3下的应用场景",
                      "path":[
                          {
                              "from":23,
                              "to":28
                          },
                          {
                              "from":24,
                              "to":29
                          },
                          {
                              "from":25,
                              "to":30
                          },
                          {
                              "from":26,
                              "to":31
                          }
                      ]
                  }
              ]
          },
          {
              "id":28,
              "type":"knowledge",
              "data":"所有权：一些数字资产，例如 ERC-20 Token 或 NFT，是可编程的，允许所有者通过智能合约来实现自定义的所有权规则和交易细节。例如，NFT（不可替代通证）可以用于数字艺术品、游戏资产等领域的唯一性识别和所有权转移。",
              "path":[
                  {
                      "from":null,
                      "to":32
                  }
              ]
          },
          {
              "id":29,
              "type":"knowledge",
              "data":"抗审查：在一些国家，政府可能会对互联网上的内容进行审查和限制，有时候甚至封锁互联网。使用基于区块链技术的去中心化网络，例如 IPFS，可以让用户自由地访问、传输、储存和发布内容，避免了互联网审查和封锁的风险。",
              "path":[
                  {
                      "from":null,
                      "to":32
                  }
              ]
          },
          {
              "id":30,
              "type":"knowledge",
              "data":"DAO（去中心化自治组织）：Buidler DAO 是一个由 Buidler 社区创造的去中心化自治组织（DAO）。DAO 代币持有者可以通过投票来选择新的理事会成员，决定 Buidler 社区的发展方向，审核和资助社区项目等方面的重要决策。",
              "path":[
                  {
                      "from":null,
                      "to":32
                  }
              ]
          },
          {
              "id":31,
              "type":"knowledge",
              "data":"身份：去中心化的身份管理系统，如 DID（去中心化身份）和 Verifiable Credentials（可验证身份）等，通过智能合约和加密技术等手段，让用户可以在去中心化的存储和管理员、验证和授权机构之间自主掌控和共享自己的身份信息。",
              "path":[
                  {
                      "from":null,
                      "to":32
                  }
              ]
          },
          {
              "id":32,
              "type":"choices",
              "data":[
                  {
                      "choice":"来测试一下看看吧",
                      "path":[
                          {
                              "from":null,
                              "to":null
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id":2,
      "title":"Dune教程",
      "dialog":[
          {

          },
          {

          }
      ]
  }
]

/**
 * 根据对话id获取具体的对话信息
 * 
 * @param {*} id 对话id
 * @returns 
 */
function getDialog(id){
  const dialog = dialogs.filter(e => e.id === parseInt(id))
  if(dialog.length > 0){
    return dialog[0]
  }
  return null;
}
/**
 * 获取对话的简要信息
 */
function getDialogBriefs(){
  return dialogs.map(e => ({"id":e.id, "title": e.title}))
}
module.exports = {
  getDialog,
  getDialogBriefs
}
