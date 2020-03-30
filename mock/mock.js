//使用MockJS
let MOCK = require('mockjs')
let data = {
  "data|1-10":[
    {
      "name|+1":[
        "jack",
        "Mock",
        "Petter"
      ],
      "age|+1":[
        "18",
        "25",
        "30"
      ],
      "info|+1":[
        "aaa",
        "bbb",
        "ccc"
      ]
    }
  ]
}
Mock.mock("/api/mock",data)
