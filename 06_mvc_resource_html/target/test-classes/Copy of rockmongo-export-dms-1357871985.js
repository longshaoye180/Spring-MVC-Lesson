
/** authority indexes **/
db.getCollection("authority").ensureIndex({
  "_id": 1
},[
  
]);

/** authority indexes **/
db.getCollection("authority").ensureIndex({
  "authority": 1
},{
  "unique": true
});

/** client indexes **/
db.getCollection("client").ensureIndex({
  "_id": 1
},[
  
]);

/** distribution indexes **/
db.getCollection("distribution").ensureIndex({
  "_id": 1
},[
  
]);

/** driver indexes **/
db.getCollection("driver").ensureIndex({
  "_id": 1
},[
  
]);

/** openshift indexes **/
db.getCollection("openshift").ensureIndex({
  "_id": 1
},[
  
]);

/** orderForm indexes **/
db.getCollection("orderForm").ensureIndex({
  "_id": 1
},[
  
]);

/** role indexes **/
db.getCollection("role").ensureIndex({
  "_id": 1
},[
  
]);

/** role indexes **/
db.getCollection("role").ensureIndex({
  "role": 1
},{
  "unique": true
});

/** track indexes **/
db.getCollection("track").ensureIndex({
  "_id": 1
},[
  
]);

/** track indexes **/
db.getCollection("track").ensureIndex({
  "licenseNumber": 1
},{
  "unique": true
});

/** user indexes **/
db.getCollection("user").ensureIndex({
  "_id": 1
},[
  
]);

/** user indexes **/
db.getCollection("user").ensureIndex({
  "username": 1
},{
  "unique": true
});

/** warehouse indexes **/
db.getCollection("warehouse").ensureIndex({
  "_id": 1
},[
  
]);

/** warehouseInOutRecord indexes **/
db.getCollection("warehouseInOutRecord").ensureIndex({
  "_id": 1
},[
  
]);

/** authority records **/
db.getCollection("authority").insert({
  "_id": ObjectId("50deed7672594e11731e0b34"),
  "_class": "com.ireland.model.Authority",
  "authority": "index",
  "urlPattern": "\/",
  "enable": true,
  "description": "访问主页"
});

/** client records **/
db.getCollection("client").insert({
  "_id": ObjectId("50e40939f08b317e0041c408"),
  "_class": "com.ireland.model.business.Client",
  "name": "上海大众汽车有限公司",
  "shortName": "上海大众"
});
db.getCollection("client").insert({
  "_id": ObjectId("50e40939f08b317e0041c409"),
  "_class": "com.ireland.model.business.Client",
  "name": "上海通用汽车有限公司",
  "shortName": "上海通用"
});
db.getCollection("client").insert({
  "_id": ObjectId("50e40939f08b317e0041c40a"),
  "_class": "com.ireland.model.business.Client",
  "name": "安徽奇瑞汽车有限公司",
  "shortName": "安徽奇瑞"
});
db.getCollection("client").insert({
  "_id": ObjectId("50e40939f08b317e0041c40b"),
  "_class": "com.ireland.model.business.Client",
  "name": "浙江吉利汽车有限公司",
  "shortName": "浙江吉利"
});

/** distribution records **/
db.getCollection("distribution").insert({
  "_id": ObjectId("50e939c52f654ef8b220a9d4"),
  "_class": "com.ireland.model.business.Distribution",
  "no": "No1301061357461956950",
  "planedSendOutTime": ISODate("2013-01-06T16:00:00.0Z"),
  "sendOutTime": ISODate("2013-01-07T16:00:00.0Z"),
  "trackOutRegistration": {
    "prepayment": 1000,
    "note": ""
  },
  "goBackTime": ISODate("2013-01-07T16:00:00.0Z"),
  "trackBackRegistration": {
    "payment": 10000,
    "note": ""
  },
  "sendQuantity": 8000,
  "note": "",
  "status": 2,
  "orderForm": {
    "$ref": "orderForm",
    "$id": ObjectId("50e9390b2f654ef8b220a9d3")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d4")
  },
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  }
});
db.getCollection("distribution").insert({
  "_id": ObjectId("50e93a922f654ef8b220a9d5"),
  "_class": "com.ireland.model.business.Distribution",
  "no": "No1301061357462161786",
  "planedSendOutTime": ISODate("2013-01-06T16:00:00.0Z"),
  "sendOutTime": ISODate("2013-01-08T16:00:00.0Z"),
  "trackOutRegistration": {
    "prepayment": 500,
    "note": ""
  },
  "goBackTime": ISODate("2013-01-09T16:00:00.0Z"),
  "trackBackRegistration": {
    "payment": 200,
    "note": ""
  },
  "sendQuantity": 2000,
  "note": "",
  "status": 2,
  "orderForm": {
    "$ref": "orderForm",
    "$id": ObjectId("50e9390b2f654ef8b220a9d3")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d5")
  },
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  }
});
db.getCollection("distribution").insert({
  "_id": ObjectId("50e93f472f654ef8b220a9d7"),
  "_class": "com.ireland.model.business.Distribution",
  "no": "No1301061357463367220",
  "planedSendOutTime": ISODate("2013-01-07T16:00:00.0Z"),
  "sendOutTime": ISODate("2013-01-07T16:00:00.0Z"),
  "trackOutRegistration": {
    "prepayment": 0,
    "note": ""
  },
  "goBackTime": ISODate("2013-01-07T16:00:00.0Z"),
  "trackBackRegistration": {
    "payment": 0,
    "note": ""
  },
  "sendQuantity": 20000,
  "note": "",
  "status": 2,
  "orderForm": {
    "$ref": "orderForm",
    "$id": ObjectId("50e93ed82f654ef8b220a9d6")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0448")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d6")
  },
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c409")
  }
});
db.getCollection("distribution").insert({
  "_id": ObjectId("50ed9787e4b03693d8fdd1aa"),
  "_class": "com.ireland.model.business.Distribution",
  "no": "No1301091357748103657",
  "planedSendOutTime": ISODate("2013-01-11T05:00:00.0Z"),
  "sendQuantity": 2000,
  "note": "",
  "status": 0,
  "orderForm": {
    "$ref": "orderForm",
    "$id": ObjectId("50ed973de4b03693d8fdd1a8")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d4")
  },
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  }
});
db.getCollection("distribution").insert({
  "_id": ObjectId("50ed9776e4b03693d8fdd1a9"),
  "_class": "com.ireland.model.business.Distribution",
  "no": "No1301091357748086781",
  "planedSendOutTime": ISODate("2013-01-10T05:00:00.0Z"),
  "sendOutTime": ISODate("2013-01-10T05:00:00.0Z"),
  "trackOutRegistration": {
    "prepayment": 1000,
    "note": ""
  },
  "goBackTime": ISODate("2013-01-11T05:00:00.0Z"),
  "trackBackRegistration": {
    "payment": 0,
    "note": ""
  },
  "sendQuantity": 8000,
  "note": "",
  "status": 2,
  "orderForm": {
    "$ref": "orderForm",
    "$id": ObjectId("50ed973de4b03693d8fdd1a8")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d4")
  },
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  }
});
db.getCollection("distribution").insert({
  "_id": ObjectId("50e948f72f65b195f73be963"),
  "_class": "com.ireland.model.business.Distribution",
  "no": "No1301061357465846760",
  "planedSendOutTime": ISODate("2013-01-06T16:00:00.0Z"),
  "sendOutTime": ISODate("2013-01-11T05:00:00.0Z"),
  "trackOutRegistration": {
    "prepayment": 1000,
    "note": ""
  },
  "sendQuantity": 15000,
  "note": "",
  "status": 1,
  "orderForm": {
    "$ref": "orderForm",
    "$id": ObjectId("50e948aa2f65b195f73be962")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d4")
  },
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40a")
  }
});
db.getCollection("distribution").insert({
  "_id": ObjectId("50ef7b49e4b0f7779f360902"),
  "_class": "com.ireland.model.business.Distribution",
  "no": "No1301101357871944981",
  "planedSendOutTime": ISODate("2013-01-11T05:00:00.0Z"),
  "sendQuantity": 1000,
  "note": "",
  "status": 0,
  "orderForm": {
    "$ref": "orderForm",
    "$id": ObjectId("50ef7b1ce4b0f7779f360901")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0448")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d5")
  },
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  }
});

/** driver records **/
db.getCollection("driver").insert({
  "_id": ObjectId("50e406b0f08b47b7b4e7f9d4"),
  "_class": "com.ireland.model.business.Driver",
  "name": "陈明德",
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  }
});
db.getCollection("driver").insert({
  "_id": ObjectId("50e406b0f08b47b7b4e7f9d5"),
  "_class": "com.ireland.model.business.Driver",
  "name": "冯军",
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0446")
  }
});
db.getCollection("driver").insert({
  "_id": ObjectId("50e406b0f08b47b7b4e7f9d6"),
  "_class": "com.ireland.model.business.Driver",
  "name": "张小龙",
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  }
});
db.getCollection("driver").insert({
  "_id": ObjectId("50e406b0f08b47b7b4e7f9d7"),
  "_class": "com.ireland.model.business.Driver",
  "name": "王一辉",
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0448")
  }
});

/** openshift records **/
db.getCollection("openshift").insert({
  "_id": ObjectId("50ea20cacf512fda135959e6"),
  "application": "dms",
  "dbhost": "127.8.56.1"
});


/** track records **/
db.getCollection("track").insert({
  "_id": ObjectId("50e403aff08b5f1b83db0445"),
  "_class": "com.ireland.model.business.Track",
  "licenseNumber": "吉A9999S",
  "model": "东风 大力神重卡",
  "travelledDistance": 1000,
  "load": 40,
  "maxOilConsumption": 0,
  "minOilConsumption": 0,
  "monthDepreciation": 0
});
db.getCollection("track").insert({
  "_id": ObjectId("50e403aff08b5f1b83db0446"),
  "_class": "com.ireland.model.business.Track",
  "licenseNumber": "吉B8250S",
  "model": "东风 天龙重卡",
  "travelledDistance": 800,
  "load": 35,
  "maxOilConsumption": 0,
  "minOilConsumption": 0,
  "monthDepreciation": 0
});
db.getCollection("track").insert({
  "_id": ObjectId("50e403aff08b5f1b83db0447"),
  "_class": "com.ireland.model.business.Track",
  "licenseNumber": "吉A8888S",
  "model": "东风 新天龙重卡",
  "travelledDistance": 800,
  "load": 35,
  "maxOilConsumption": 0,
  "minOilConsumption": 0,
  "monthDepreciation": 0
});
db.getCollection("track").insert({
  "_id": ObjectId("50e403aff08b5f1b83db0448"),
  "_class": "com.ireland.model.business.Track",
  "licenseNumber": "吉A7777S",
  "model": "东风 新天龙重卡",
  "travelledDistance": 1800,
  "load": 40,
  "maxOilConsumption": 0,
  "minOilConsumption": 0,
  "monthDepreciation": 0
});

/** user records **/
db.getCollection("user").insert({
  "_id": ObjectId("50dfb22c636b4356f5addf1e"),
  "_class": "com.ireland.model.User",
  "password": "d13dd52e534fa20bb90d66fda54e26c35fdf1c60",
  "role": {
    "$ref": "role",
    "$id": ObjectId("50def11f7259628f6d93888e")
  },
  "trueName": "吉珠1队",
  "username": "business"
});
db.getCollection("user").insert({
  "_id": ObjectId("50dfaf31636b4356f5addf1d"),
  "_class": "com.ireland.model.User",
  "password": "260acbffd3c30786febc29d7dd71a9880a811e77",
  "role": {
    "$ref": "role",
    "$id": ObjectId("50deec777259ea7d80c6fab3")
  },
  "trueName": "安吉管理员",
  "username": "admin"
});

/** warehouse records **/
db.getCollection("warehouse").insert({
  "_id": ObjectId("50e3ff96f08b8bb8ea9e9432"),
  "_class": "com.ireland.model.business.Warehouse",
  "address": "上海嘉定区园汽路1000号",
  "name": "CPD",
  "shortName": "CPD"
});
db.getCollection("warehouse").insert({
  "_id": ObjectId("50e3ff9bf08b8bb8ea9e9433"),
  "_class": "com.ireland.model.business.Warehouse",
  "address": "上海嘉定区民丰路24号",
  "name": "1101",
  "shortName": "1101"
});
db.getCollection("warehouse").insert({
  "_id": ObjectId("50e3ff9cf08b8bb8ea9e9434"),
  "_class": "com.ireland.model.business.Warehouse",
  "address": "上海嘉定于塘路379号",
  "name": "1102",
  "shortName": "1102"
});
db.getCollection("warehouse").insert({
  "_id": ObjectId("50ef79501e2f582547a78b99"),
  "_class": "com.ireland.model.business.Warehouse",
  "name": "发货仓库1103",
  "shortName": "1103",
  "address": "上海嘉定区园工路1169号",
  "area": 1000,
  "type": 0
});
db.getCollection("warehouse").insert({
  "_id": ObjectId("50ef79501e2f582547a78b9a"),
  "_class": "com.ireland.model.business.Warehouse",
  "name": "发货仓库1104",
  "shortName": "1104",
  "address": "上海嘉定区园国路1366号",
  "area": 14500,
  "type": 0
});
db.getCollection("warehouse").insert({
  "_id": ObjectId("50ef79501e2f582547a78b9b"),
  "_class": "com.ireland.model.business.Warehouse",
  "name": "发货仓库1105",
  "shortName": "1105",
  "address": "昆山市淀山湖镇北苑路288号",
  "area": 25000,
  "type": 0
});
db.getCollection("warehouse").insert({
  "_id": ObjectId("50ef79501e2f582547a78b9c"),
  "_class": "com.ireland.model.business.Warehouse",
  "name": "发货仓库9106",
  "shortName": "9106",
  "address": "上海嘉定区泰丰路225号",
  "area": 2118,
  "type": 0
});
db.getCollection("warehouse").insert({
  "_id": ObjectId("50ef79501e2f582547a78b9d"),
  "_class": "com.ireland.model.business.Warehouse",
  "name": "非发货仓库1001",
  "shortName": "1001",
  "address": "上海市嘉定区安亭镇墨玉北路98号",
  "area": 5000,
  "type": 1
});
db.getCollection("warehouse").insert({
  "_id": ObjectId("50ef79501e2f582547a78b9e"),
  "_class": "com.ireland.model.business.Warehouse",
  "name": "非发货仓库1002",
  "shortName": "1002",
  "address": "上海市嘉定区和静东路318号",
  "area": 9000,
  "type": 1
});

/** warehouseInOutRecord records **/
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586f02f658d08cc5dcb34"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "NO130102004",
  "category": "入库",
  "date": ISODate("2013-01-03T13:26:08.351Z"),
  "good": "发动机",
  "quantity": 10,
  "unit": "台",
  "handlingCharge": 100,
  "storageCharge": 200,
  "transportationCharge": 300,
  "otherCharge": 100,
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40a")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0448")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9bf08b8bb8ea9e9433")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e587152f654b875f035452"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "NO130102001",
  "category": "入库",
  "date": ISODate("2013-01-03T13:26:45.126Z"),
  "good": "轮胎",
  "quantity": 100,
  "unit": "条",
  "handlingCharge": 1000,
  "storageCharge": 2000,
  "transportationCharge": 3000,
  "otherCharge": 100,
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e587152f654b875f035453"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "NO130102002",
  "category": "入库",
  "date": ISODate("2013-01-03T13:26:45.157Z"),
  "good": "轴承",
  "quantity": 50,
  "unit": "箱",
  "handlingCharge": 100,
  "storageCharge": 200,
  "transportationCharge": 300,
  "otherCharge": 100,
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c409")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0446")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9cf08b8bb8ea9e9434")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e587152f654b875f035454"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "NO130102003",
  "category": "入库",
  "date": ISODate("2013-01-03T13:26:45.173Z"),
  "good": "前置大灯",
  "quantity": 30,
  "unit": "箱",
  "handlingCharge": 100,
  "storageCharge": 200,
  "transportationCharge": 300,
  "otherCharge": 100,
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40b")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e587152f654b875f035455"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "NO130102004",
  "category": "入库",
  "date": ISODate("2013-01-03T13:26:45.173Z"),
  "good": "发动机",
  "quantity": 10,
  "unit": "台",
  "handlingCharge": 100,
  "storageCharge": 200,
  "transportationCharge": 300,
  "otherCharge": 100,
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40a")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0448")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9bf08b8bb8ea9e9433")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e587222f65be3f6b659ac8"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "NO130102001",
  "category": "入库",
  "date": ISODate("2013-01-03T13:26:58.889Z"),
  "good": "轮胎",
  "quantity": 100,
  "unit": "条",
  "handlingCharge": 1000,
  "storageCharge": 2000,
  "transportationCharge": 3000,
  "otherCharge": 100,
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e587222f65be3f6b659ac9"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "NO130102002",
  "category": "入库",
  "date": ISODate("2013-01-03T13:26:58.905Z"),
  "good": "轴承",
  "quantity": 50,
  "unit": "箱",
  "handlingCharge": 100,
  "storageCharge": 200,
  "transportationCharge": 300,
  "otherCharge": 100,
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c409")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0446")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9cf08b8bb8ea9e9434")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e587222f65be3f6b659aca"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "NO130102003",
  "category": "入库",
  "date": ISODate("2013-01-03T13:26:58.920Z"),
  "good": "前置大灯",
  "quantity": 30,
  "unit": "箱",
  "handlingCharge": 100,
  "storageCharge": 200,
  "transportationCharge": 300,
  "otherCharge": 100,
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40b")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e587222f65be3f6b659acb"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "NO130102004",
  "category": "入库",
  "date": ISODate("2013-01-03T13:26:58.936Z"),
  "good": "发动机",
  "quantity": 10,
  "unit": "台",
  "handlingCharge": 100,
  "storageCharge": 200,
  "transportationCharge": 300,
  "otherCharge": 100,
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40a")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0448")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9bf08b8bb8ea9e9433")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e5916d2f655dfec9c2c8e0"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "No1301031357222197144",
  "category": "入库",
  "date": ISODate("2012-12-31T16:00:00.0Z"),
  "good": "齿轮",
  "batchNumber": "0001",
  "weight": 1.5,
  "quantity": 1000,
  "unit": "盒",
  "handlingCharge": 100,
  "storageCharge": 200,
  "transportationCharge": 150,
  "otherCharge": 10,
  "note": "",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d4")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e52ac35c15656d3a78f3c9"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "date": ISODate("2013-01-03T06:52:51.328Z"),
  "good": "轮胎",
  "handlingCharge": 100,
  "no": "E0817430907020120515",
  "otherCharge": 100,
  "quantity": 100,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "transportationCharge": 300,
  "unit": "条",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e52ac35c15656d3a78f3ca"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c409")
  },
  "date": ISODate("2013-01-03T06:52:51.743Z"),
  "good": "轴承",
  "handlingCharge": 100,
  "no": "E0817430907020120515",
  "otherCharge": 100,
  "quantity": 50,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0446")
  },
  "transportationCharge": 300,
  "unit": "箱",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9cf08b8bb8ea9e9434")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e52ac35c15656d3a78f3cc"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40a")
  },
  "date": ISODate("2013-01-03T06:52:51.767Z"),
  "good": "发动机",
  "handlingCharge": 100,
  "no": "E0917430950020120515",
  "otherCharge": 100,
  "quantity": 10,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0448")
  },
  "transportationCharge": 300,
  "unit": "台",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9bf08b8bb8ea9e9433")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e57bd42f65c1559edd9406"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c409")
  },
  "date": ISODate("2013-01-03T12:38:44.500Z"),
  "good": "轴承",
  "handlingCharge": 100,
  "no": "M0117430980020120515",
  "otherCharge": 100,
  "quantity": 50,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0446")
  },
  "transportationCharge": 300,
  "unit": "箱",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9cf08b8bb8ea9e9434")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e52ac35c15656d3a78f3cb"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40b")
  },
  "date": ISODate("2013-01-03T06:52:51.756Z"),
  "good": "前置大灯",
  "handlingCharge": 100,
  "no": "M0117430980020120515",
  "otherCharge": 100,
  "quantity": 30,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  },
  "transportationCharge": 300,
  "unit": "箱",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e57bd42f65c1559edd9407"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40b")
  },
  "date": ISODate("2013-01-03T12:38:44.516Z"),
  "good": "前置大灯",
  "handlingCharge": 100,
  "no": "E0817430907020120515",
  "otherCharge": 100,
  "quantity": 30,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  },
  "transportationCharge": 300,
  "unit": "箱",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e57bd42f65c1559edd9408"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40a")
  },
  "date": ISODate("2013-01-03T12:38:44.625Z"),
  "good": "发动机",
  "handlingCharge": 100,
  "no": "E0817430907020120515",
  "otherCharge": 100,
  "quantity": 10,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0448")
  },
  "transportationCharge": 300,
  "unit": "台",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9bf08b8bb8ea9e9433")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586e22f65caed7bc060c4"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "date": ISODate("2013-01-03T13:25:54.440Z"),
  "good": "轮胎",
  "handlingCharge": 1000,
  "no": "M0117430980020120515",
  "otherCharge": 100,
  "quantity": 100,
  "storageCharge": 2000,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "transportationCharge": 3000,
  "unit": "条",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586e22f65caed7bc060c5"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c409")
  },
  "date": ISODate("2013-01-03T13:25:54.456Z"),
  "good": "轴承",
  "handlingCharge": 100,
  "no": "M0117430980020120515",
  "otherCharge": 100,
  "quantity": 50,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0446")
  },
  "transportationCharge": 300,
  "unit": "箱",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9cf08b8bb8ea9e9434")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586e22f65caed7bc060c6"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40b")
  },
  "date": ISODate("2013-01-03T13:25:54.471Z"),
  "good": "前置大灯",
  "handlingCharge": 100,
  "no": "M0117430980020120515",
  "otherCharge": 100,
  "quantity": 30,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  },
  "transportationCharge": 300,
  "unit": "箱",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586e22f65caed7bc060c7"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40a")
  },
  "date": ISODate("2013-01-03T13:25:54.487Z"),
  "good": "发动机",
  "handlingCharge": 100,
  "no": "2012-M040875905",
  "otherCharge": 100,
  "quantity": 10,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0448")
  },
  "transportationCharge": 300,
  "unit": "台",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9bf08b8bb8ea9e9433")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586e92f6573295a154938"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "date": ISODate("2013-01-03T13:26:01.669Z"),
  "good": "轮胎",
  "handlingCharge": 1000,
  "no": "2012-J191233205",
  "otherCharge": 100,
  "quantity": 100,
  "storageCharge": 2000,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "transportationCharge": 3000,
  "unit": "条",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586e92f6573295a154939"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c409")
  },
  "date": ISODate("2013-01-03T13:26:00.686Z"),
  "good": "轴承",
  "handlingCharge": 100,
  "no": "D0517431911020120312",
  "otherCharge": 100,
  "quantity": 50,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0446")
  },
  "transportationCharge": 300,
  "unit": "箱",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9cf08b8bb8ea9e9434")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586e92f6573295a15493a"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40b")
  },
  "date": ISODate("2013-01-03T13:26:01.701Z"),
  "good": "前置大灯",
  "handlingCharge": 100,
  "no": "2012-M110802205",
  "otherCharge": 100,
  "quantity": 30,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  },
  "transportationCharge": 300,
  "unit": "箱",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586e92f6573295a15493b"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40a")
  },
  "date": ISODate("2013-01-03T13:26:01.717Z"),
  "good": "发动机",
  "handlingCharge": 100,
  "no": "E1017430814020120515",
  "otherCharge": 100,
  "quantity": 10,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0448")
  },
  "transportationCharge": 300,
  "unit": "台",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9bf08b8bb8ea9e9433")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586f02f658d08cc5dcb31"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "date": ISODate("2013-01-03T13:26:08.304Z"),
  "good": "轮胎",
  "handlingCharge": 1000,
  "no": "E1317436902020120514",
  "otherCharge": 100,
  "quantity": 100,
  "storageCharge": 2000,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "transportationCharge": 3000,
  "unit": "条",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586f02f658d08cc5dcb32"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c409")
  },
  "date": ISODate("2013-01-03T13:26:08.320Z"),
  "good": "轴承",
  "handlingCharge": 100,
  "no": "E1317436902020120515",
  "otherCharge": 100,
  "quantity": 50,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0446")
  },
  "transportationCharge": 300,
  "unit": "箱",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9cf08b8bb8ea9e9434")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e586f02f658d08cc5dcb33"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "category": "入库",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40b")
  },
  "date": ISODate("2013-01-03T13:26:08.335Z"),
  "good": "前置大灯",
  "handlingCharge": 100,
  "no": "G0117431920020120507",
  "otherCharge": 100,
  "quantity": 30,
  "storageCharge": 200,
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  },
  "transportationCharge": 300,
  "unit": "箱",
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e6bdb62f6563858851c5bf"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "No1301041357299126730",
  "category": "入库",
  "date": ISODate("2013-01-04T16:00:00.0Z"),
  "good": "",
  "batchNumber": "",
  "unit": "",
  "note": "",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d4")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e965e62f656c38f63e6bd2"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "No1301061357473254404",
  "category": "出库",
  "date": ISODate("2013-01-05T16:00:00.0Z"),
  "good": "轮胎",
  "batchNumber": "0001",
  "weight": 5,
  "quantity": 1000,
  "unit": "条",
  "handlingCharge": 1000,
  "storageCharge": 200,
  "transportationCharge": 1000,
  "otherCharge": 500,
  "note": "",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0445")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d4")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e966192f656c38f63e6bd3"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "No1301061357473305575",
  "category": "出库",
  "date": ISODate("2013-01-06T16:00:00.0Z"),
  "good": "AAA",
  "batchNumber": "0001",
  "weight": 19,
  "quantity": 100,
  "unit": "条",
  "handlingCharge": 1000,
  "storageCharge": 1100,
  "transportationCharge": 22,
  "otherCharge": 199,
  "note": "",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d6")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e9664e2f656c38f63e6bd4"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "No1301061357473358581",
  "category": "出库",
  "date": ISODate("2013-01-07T16:00:00.0Z"),
  "good": "轮胎",
  "batchNumber": "0002",
  "weight": 2,
  "quantity": 1000,
  "unit": "个",
  "handlingCharge": 10001,
  "storageCharge": 1000,
  "transportationCharge": 300,
  "otherCharge": 200,
  "note": "",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c40a")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0447")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d4")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff9bf08b8bb8ea9e9433")
  }
});
db.getCollection("warehouseInOutRecord").insert({
  "_id": ObjectId("50e96b332f656c38f63e6bd5"),
  "_class": "com.ireland.model.business.WarehouseInOutRecord",
  "no": "No1301061357474610706",
  "category": "出库",
  "date": ISODate("2013-01-07T16:00:00.0Z"),
  "good": "机器",
  "batchNumber": "0002",
  "weight": 10,
  "quantity": 1000,
  "unit": "个",
  "handlingCharge": 1000,
  "storageCharge": 2000,
  "transportationCharge": 3000,
  "otherCharge": 199,
  "note": "",
  "client": {
    "$ref": "client",
    "$id": ObjectId("50e40939f08b317e0041c408")
  },
  "track": {
    "$ref": "track",
    "$id": ObjectId("50e403aff08b5f1b83db0446")
  },
  "driver": {
    "$ref": "driver",
    "$id": ObjectId("50e406b0f08b47b7b4e7f9d6")
  },
  "warehouse": {
    "$ref": "warehouse",
    "$id": ObjectId("50e3ff96f08b8bb8ea9e9432")
  }
});
